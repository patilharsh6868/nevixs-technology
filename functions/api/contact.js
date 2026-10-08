// Cloudflare Pages Function: handles POST /api/contact server-side so the Resend API key is never exposed to the browser.
export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, message: "Invalid request body." }, 400);
  }

  const { name, email, message, company, interest = "general" } = body || {};
  const interests = {
    general: "General enquiry",
    erp: "Upcoming Nevixs ERP",
    "custom-software": "Custom software",
  };

  // Honeypot field: real visitors never fill this, bots usually do.
  if (company) return json({ success: true });

  if (!isNonEmptyString(name, 100) || !isValidEmail(email) || !isNonEmptyString(message, 5000) || typeof interest !== "string" || !Object.hasOwn(interests, interest)) {
    return json({ success: false, message: "Please provide your name, a valid email, an enquiry type, and a message." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ success: false, message: "Email service is not configured." }, 500);
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");
  const safeInterest = escapeHtml(interests[interest]);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Nevixs Technology <enquiries@nevixs.com>",
      to: ["nevixstechnology@gmail.com"],
      reply_to: email.trim(),
      subject: `New Nevixs enquiry: ${interests[interest]}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Interested in:</strong> ${safeInterest}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
    }),
  });

  if (!response.ok) return json({ success: false, message: "Unable to send enquiry right now." }, 502);

  return json({ success: true });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

function isNonEmptyString(value, maxLength) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function isValidEmail(value) {
  return typeof value === "string" && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

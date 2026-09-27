"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setError(false);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nevixstechnology@gmail.com", { method: "POST", headers: { Accept: "application/json" }, body: formData });
      if (!response.ok) throw new Error("Unable to send enquiry");
      setSubmitted(true);
      form.reset();
    } catch (_error) {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="Name" required /></div>
        <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></div>
        <div className="field full"><label htmlFor="message">What are you building?</label><textarea id="message" name="message" placeholder="A little about your project, goals, or the problem you want to solve..." required /></div>
      </div>
      <input type="hidden" name="_subject" value="New Nevixs Technology enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_autoresponse" value="Thank you for contacting Nevixs Technology. We received your enquiry and will get back to you soon.\n\nNevixs Technology\nPune, Maharashtra, India" />
      <button className="button button-dark" type="submit" disabled={sending}>{sending ? "Sending..." : "Send enquiry"} <ArrowUpRight size={16} /></button>
      {submitted && <p className="form-success" role="status">Thanks for reaching out. Your enquiry has been sent to the Nevixs team.</p>}
      {error && <p className="form-error" role="alert">We couldn&apos;t send that just now. Please try again or email nevixstechnology@gmail.com.</p>}
    </form>
  );
}

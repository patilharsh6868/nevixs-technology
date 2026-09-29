"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const REQUEST_TIMEOUT_MS = 15000;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [fallback, setFallback] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setError(false);
    setFallback(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.success) throw new Error(data?.message || "Unable to send enquiry");
      setSubmitted(true);
      form.reset();
    } catch (_error) {
      setError(true);
      setFallback(`mailto:nevixstechnology@gmail.com?subject=${encodeURIComponent("New Nevixs Technology enquiry")}&body=${encodeURIComponent(`Name: ${payload.name || ""}\nEmail: ${payload.email || ""}\n\n${payload.message || ""}`)}`);
    } finally {
      clearTimeout(timeout);
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
      <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />
      <button className="button button-dark" type="submit" disabled={sending}>{sending ? "Sending..." : "Send enquiry"} <ArrowUpRight size={16} /></button>
      {submitted && <p className="form-success" role="status">Thanks for reaching out. Your enquiry has been sent to the Nevixs team.</p>}
      {error && <p className="form-error" role="alert">We couldn&apos;t send that just now. Please <a href={fallback}>email us directly</a> instead.</p>}
    </form>
  );
}

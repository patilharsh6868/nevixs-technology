"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="Name" required /></div>
        <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></div>
        <div className="field full"><label htmlFor="message">What are you building?</label><textarea id="message" name="message" placeholder="A little about your project, goals, or the problem you want to solve..." required /></div>
      </div>
      <button className="button button-dark" type="submit">Send enquiry <ArrowUpRight size={16} /></button>
      {submitted && <p className="form-success" role="status">Thanks for reaching out. This demo form is ready to connect to your inbox or API.</p>}
    </form>
  );
}

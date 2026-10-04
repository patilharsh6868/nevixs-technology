import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Contact", description: "Get in touch with Nevixs Technology about your next application or software project." };

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Start a conversation</span><h1>Tell us what you&apos;re imagining.</h1><p>Whether it&apos;s ERP for multiple businesses, a custom app, or just an early idea, we&apos;d like to hear about it.</p></div></section>
    <section className="section"><div className="container contact-layout"><Reveal><span className="eyebrow">Find us</span><h2 className="section-title" style={{ fontSize: 38 }}>Good work begins with a conversation.</h2><p className="body-copy">Share as much or as little as you know so far. We&apos;ll take it from there.</p><div style={{ marginTop: 34 }}><div className="contact-detail"><MapPin size={19} /><span>Pune, Maharashtra, India</span></div><div className="contact-detail"><Mail size={19} /><a href="mailto:nevixstechnology@gmail.com">nevixstechnology@gmail.com</a></div></div><div style={{ display: "flex", gap: 10, marginTop: 25 }}><a className="button button-outline" href="https://www.instagram.com/nevixstechnology/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
  </>;
}

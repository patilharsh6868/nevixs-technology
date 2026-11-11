import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact & Request a Business OS Demo",
  description: "Contact Nevixs Technologies in Pune to request a NEVIXS Business OS demo or discuss ERP, CRM, HR, payroll, and custom software requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return <>
    <Breadcrumbs label="Contact" path="/contact" />
    <section className="page-hero"><div className="container"><span className="eyebrow">Start a conversation</span><h1>Tell us what you&apos;re imagining.</h1><p>Whether it&apos;s getting started with Business OS, a custom app, or just an early idea, we&apos;d like to hear about it.</p></div></section>
    <section className="section"><div className="container contact-layout"><Reveal><span className="eyebrow">Find us</span><h2 className="section-title" style={{ fontSize: 38 }}>Good work begins with a conversation.</h2><p className="body-copy">Share as much or as little as you know so far. We&apos;ll take it from there.</p><div style={{ marginTop: 34 }}><div className="contact-detail"><MapPin size={19} /><span>Pune, Maharashtra, India</span></div><div className="contact-detail"><Mail size={19} /><a href="mailto:support@nevixs.com">support@nevixs.com</a></div></div><div style={{ display: "flex", gap: 10, marginTop: 25 }}><a className="button button-outline" href="https://www.instagram.com/nevixstechnology/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
  </>;
}

import { ArrowUpRight, Github, Linkedin, MapPin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Contact", description: "Get in touch with Nevixs Technology about your next application or software project." };

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Start a conversation</span><h1>Tell us what you&apos;re imagining.</h1><p>Have a project, a process that needs a rethink, or just an early idea? We&apos;d like to hear about it.</p></div></section>
    <section className="section"><div className="container contact-layout"><Reveal><span className="eyebrow">Find us</span><h2 className="section-title" style={{ fontSize: 38 }}>Good work begins with a conversation.</h2><p className="body-copy">Share as much or as little as you know so far. We&apos;ll take it from there.</p><div style={{ marginTop: 34 }}><div className="contact-detail"><MapPin size={19} /><span>Pune, Maharashtra, India</span></div><div className="contact-detail"><Mail size={19} /><span>nevixstechnology@gmail.com</span></div></div><div style={{ display: "flex", gap: 10, marginTop: 25 }}><a className="button button-outline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a><a className="button button-outline" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></div></section>
  </>;
}

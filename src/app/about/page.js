import Link from "next/link";
import { ArrowRight, Compass, Lightbulb, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { supportEmail } from "@/lib/site";
import { todo, withoutTodos } from "@/lib/todo";

const glance = [
  { label: "Based in", value: "Pune, Maharashtra, India" },
  { label: "Product", value: "NEVIXS Business OS: ERP, CRM, HR, and payroll" },
  { label: "Hosting", value: "Amazon Web Services, Mumbai Region" },
  { label: "Services", value: "Custom business applications and workflow automation" },
  { label: "Contact", value: supportEmail },
  todo("founding year"),
  todo("team size or founder names, with permission"),
];

export const metadata = pageMetadata({
  title: "About Nevixs",
  description: "Meet Nevixs Technologies, the Pune-based software studio behind NEVIXS Business OS and custom business applications. Learn about our approach and values.",
  path: "/about",
});

const values = [
  { icon: Lightbulb, title: "Innovation, with purpose", copy: "We look for the useful idea, not the shiny one. New technology matters when it makes a real difference." },
  { icon: ShieldCheck, title: "Reliability by design", copy: "Good software earns trust over time. We care about clarity, security, and the details that keep it dependable." },
  { icon: Compass, title: "Room to scale", copy: "We build for today and leave a thoughtful path open for tomorrow, so progress never means starting over." },
];

export default function AboutPage() {
  return <>
    <Breadcrumbs label="About Nevixs" path="/about" />
    <section className="page-hero"><div className="container"><h1>About Nevixs Technologies</h1><p>We&apos;re a software studio in Pune building Business OS and custom business applications.</p><div className="product-actions"><Link href="/erp" className="text-action">Explore Business OS <ArrowRight size={16} /></Link><Link href="/contact" className="text-action">Contact the studio <ArrowRight size={16} /></Link></div></div></section>
    <section className="section glance-section" aria-labelledby="glance-heading"><div className="container"><h2 className="eyebrow" id="glance-heading">At a glance</h2><ul className="aws-facts glance-facts">{withoutTodos(glance).map(({ label, value }) => <li key={label}><strong>{label}</strong><span>{value}</span></li>)}</ul></div></section>
    <section className="section"><div className="container two-col"><Reveal><span className="eyebrow">Our story</span><h2 className="section-title">Built around the work that matters.</h2></Reveal><Reveal delay={.1}><p className="body-copy">Nevixs Technologies was started with a straightforward belief: software should adapt to the people using it, not the other way around. We work to understand how businesses run, where work gets stuck, and what a better day could look like.</p><p className="body-copy">That practical mindset shapes our custom software work and NEVIXS Business OS, our connected platform for ERP, CRM, HR, and payroll.</p></Reveal></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container values-grid">{values.map(({ icon: Icon, title, copy }, index) => <Reveal className="value-item" key={title} delay={index * .08}><span className="eyebrow">What matters to us</span><Icon size={25} color="var(--accent)" style={{ marginTop: 20 }} /><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></section>
    <section className="section approach-section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">How we work</span><h2 className="section-title">Clear progress, from first conversation to launch.</h2><p className="body-copy">The best work happens when strategy, design, and engineering stay close together.</p></Reveal><div className="approach-grid"><Reveal className="approach-card"><span>01</span><h3>Understand</h3><p>We map the problem, the people, and the opportunity before choosing a solution.</p></Reveal><Reveal className="approach-card" delay={.08}><span>02</span><h3>Shape</h3><p>We turn the right idea into a clear product direction, interface, and build plan.</p></Reveal><Reveal className="approach-card" delay={.16}><span>03</span><h3>Deliver</h3><p>We build in visible steps, learn quickly, and leave you with software ready to grow.</p></Reveal></div></div></section>
    <section className="section"><div className="container"><div className="cta-band"><h2>Let&apos;s build something that fits.</h2><Link href="/contact" className="button button-dark">Talk to our team <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

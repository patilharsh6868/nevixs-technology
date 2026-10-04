import Link from "next/link";
import { ArrowRight, Compass, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "About", description: "Meet Nevixs Technology: our story, mission, values, and the people behind our work." };

const values = [
  { icon: Lightbulb, title: "Innovation, with purpose", copy: "We look for the useful idea, not the shiny one. New technology matters when it makes a real difference." },
  { icon: ShieldCheck, title: "Reliability by design", copy: "Good software earns trust over time. We care about clarity, security, and the details that keep it dependable." },
  { icon: Compass, title: "Room to scale", copy: "We build for today and leave a thoughtful path open for tomorrow, so progress never means starting over." },
];

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">A little about us</span><h1>Better tools start with better questions.</h1><p>We&apos;re a software studio in Pune, building useful digital products for businesses ready to move forward.</p></div></section>
    <section className="section"><div className="container two-col"><Reveal><span className="eyebrow">Our story</span><h2 className="section-title">Built around the work that matters.</h2></Reveal><Reveal delay={.1}><p className="body-copy">Nevixs Technology was started with a straightforward belief: software should adapt to the people using it, not the other way around. We work to understand how businesses run, where work gets stuck, and what a better day could look like.</p><p className="body-copy">That practical mindset shapes our custom software work and our early-stage ERP for multiple businesses.</p></Reveal></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container values-grid">{values.map(({ icon: Icon, title, copy }, index) => <Reveal className="value-item" key={title} delay={index * .08}><span className="eyebrow">What matters to us</span><Icon size={25} color="#008f78" style={{ marginTop: 20 }} /><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></section>
    <section className="section approach-section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">How we work</span><h2 className="section-title">Clear progress, from first conversation to launch.</h2><p className="body-copy">The best work happens when strategy, design, and engineering stay close together.</p></Reveal><div className="approach-grid"><Reveal className="approach-card"><span>01</span><h3>Understand</h3><p>We map the problem, the people, and the opportunity before choosing a solution.</p></Reveal><Reveal className="approach-card" delay={.08}><span>02</span><h3>Shape</h3><p>We turn the right idea into a clear product direction, interface, and build plan.</p></Reveal><Reveal className="approach-card" delay={.16}><span>03</span><h3>Deliver</h3><p>We build in visible steps, learn quickly, and leave you with software ready to grow.</p></Reveal></div></div></section>
    <section className="section"><div className="container"><div className="cta-band"><h2>Let&apos;s build something that fits.</h2><Link href="/contact" className="button button-dark">Talk to our team <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

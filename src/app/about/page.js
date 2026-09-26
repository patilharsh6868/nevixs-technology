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
    <section className="page-hero"><div className="container"><span className="eyebrow">A little about us</span><h1>Better tools start with better questions.</h1><p>We&apos;re a software studio in Chinchwad, building custom applications and digital solutions for businesses ready to move forward.</p></div></section>
    <section className="section"><div className="container two-col"><Reveal><span className="eyebrow">Our story</span><h2 className="section-title">Built around the work that matters.</h2></Reveal><Reveal delay={.1}><p className="body-copy">Nevixs Technology was started with a straightforward belief: software should adapt to the people using it, not the other way around. We work alongside teams to understand how their business runs, where it gets stuck, and what a better day could look like.</p><p className="body-copy">From a focused internal tool to a customer-facing platform, we bring practical thinking and careful execution to every build.</p></Reveal></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container values-grid"><Reveal className="value-item"><span className="eyebrow">Our mission</span><HeartHandshake size={25} color="#008f78" style={{ marginTop: 20 }} /><h3>Make useful technology accessible.</h3><p>Help businesses turn real needs into dependable software that saves time and unlocks possibility.</p></Reveal><Reveal className="value-item" delay={.08}><span className="eyebrow">Our vision</span><Compass size={25} color="#008f78" style={{ marginTop: 20 }} /><h3>A future where good software fits.</h3><p>Shape a more thoughtful digital landscape, where every organization can work with tools made for them.</p></Reveal><Reveal className="value-item" delay={.16}><span className="eyebrow">Our approach</span><Lightbulb size={25} color="#008f78" style={{ marginTop: 20 }} /><h3>Listen, make, learn, improve.</h3><p>Keep the process collaborative, show progress early, and make each decision with the long view in mind.</p></Reveal></div></section>
    <section className="section approach-section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">How we work</span><h2 className="section-title">Clear progress, from first conversation to launch.</h2><p className="body-copy">The best work happens when strategy, design, and engineering stay close together.</p></Reveal><div className="approach-grid"><Reveal className="approach-card"><span>01</span><h3>Understand</h3><p>We map the problem, the people, and the opportunity before choosing a solution.</p></Reveal><Reveal className="approach-card" delay={.08}><span>02</span><h3>Shape</h3><p>We turn the right idea into a clear product direction, interface, and build plan.</p></Reveal><Reveal className="approach-card" delay={.16}><span>03</span><h3>Deliver</h3><p>We build in visible steps, learn quickly, and leave you with software ready to grow.</p></Reveal></div></div></section>
    <section className="section"><div className="container"><div className="cta-band"><h2>Let&apos;s build something that fits.</h2><Link href="/contact" className="button button-dark">Talk to our team <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

import Link from "next/link";
import { ArrowRight, Compass, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "About", description: "Meet Nevixs Technology: our story, mission, values, and the people behind our work." };

const values = [
  { icon: Lightbulb, title: "Innovation, with purpose", copy: "We look for the useful idea, not the shiny one. New technology matters when it makes a real difference." },
  { icon: ShieldCheck, title: "Reliability by design", copy: "Good software earns trust over time. We care about clarity, security, and the details that keep it dependable." },
  { icon: Compass, title: "Room to scale", copy: "We build for today and leave a thoughtful path open for tomorrow, so progress never means starting over." },
];

const team = [
  ["AK", "Aarav Kulkarni", "Product & strategy · sample profile"],
  ["PN", "Priya Nair", "Engineering · sample profile"],
  ["MS", "Meera Shah", "Design & experience · sample profile"],
];

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">A little about us</span><h1>Better tools start with better questions.</h1><p>We&apos;re a software studio in Chinchwad, building custom applications and digital solutions for businesses ready to move forward.</p></div></section>
    <section className="section"><div className="container two-col"><Reveal><span className="eyebrow">Our story</span><h2 className="section-title">Built around the work that matters.</h2></Reveal><Reveal delay={.1}><p className="body-copy">Nevixs Technology was started with a straightforward belief: software should adapt to the people using it, not the other way around. We work alongside teams to understand how their business runs, where it gets stuck, and what a better day could look like.</p><p className="body-copy">From a focused internal tool to a customer-facing platform, we bring practical thinking and careful execution to every build.</p></Reveal></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container values-grid"><Reveal className="value-item"><span className="eyebrow">Our mission</span><HeartHandshake size={25} color="#008f78" style={{ marginTop: 20 }} /><h3>Make useful technology accessible.</h3><p>Help businesses turn real needs into dependable software that saves time and unlocks possibility.</p></Reveal><Reveal className="value-item" delay={.08}><span className="eyebrow">Our vision</span><Compass size={25} color="#008f78" style={{ marginTop: 20 }} /><h3>A future where good software fits.</h3><p>Shape a more thoughtful digital landscape, where every organization can work with tools made for them.</p></Reveal><Reveal className="value-item" delay={.16}><span className="eyebrow">Our approach</span><Lightbulb size={25} color="#008f78" style={{ marginTop: 20 }} /><h3>Listen, make, learn, improve.</h3><p>Keep the process collaborative, show progress early, and make each decision with the long view in mind.</p></Reveal></div></section>
    <section className="section" style={{ background: "#edf3f0" }}><div className="container"><Reveal className="section-heading"><span className="eyebrow">The people behind the work</span><h2 className="section-title">Small team. Thoughtful work.</h2><p className="body-copy">Sample team profiles for the website preview. Replace these names and roles with the Nevixs team before launch.</p></Reveal><div className="team-grid">{team.map(([initials, name, role], index) => <Reveal className="team-card" key={name} delay={index * .08}><div className="team-avatar">{initials}</div><h3>{name}</h3><p>{role}</p></Reveal>)}</div></div></section>
    <section className="section"><div className="container"><div className="cta-band"><h2>Let&apos;s build something that fits.</h2><Link href="/contact" className="button button-dark">Talk to our team <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

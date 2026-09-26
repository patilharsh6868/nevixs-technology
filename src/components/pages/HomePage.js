import Link from "next/link";
import { ArrowRight, Boxes, CircleCheck, Code2, Lightbulb, MoveUpRight, ShieldCheck, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { icon: "Boxes", title: "Business apps", description: "Bring everyday operations into one clear, connected workspace.", tags: ["Billing", "Expenses", "Leave"] },
  { icon: "Code2", title: "Customer apps", description: "Create useful digital experiences that keep customers coming back.", tags: ["Commerce", "Booking", "Support"] },
  { icon: "ShieldCheck", title: "Enterprise software", description: "Connect teams and processes with software built to scale.", tags: ["ERP", "Inventory", "HR"] },
  { icon: "Sparkles", title: "Future innovations", description: "Explore practical new capabilities with emerging technology.", tags: ["AI", "Cloud", "IoT"] },
];

export default function HomePage() {
  return <>
    <Hero />
    <section className="section">
      <div className="container">
        <Reveal className="section-heading"><span className="eyebrow">What we do</span><h2 className="section-title">Software that makes work feel simpler.</h2><p className="body-copy" style={{ maxWidth: 580 }}>We turn ambitious ideas into dependable digital products, built around the people and processes that matter.</p></Reveal>
        <div className="services-grid">{services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}</div>
        <div style={{ marginTop: 26 }}><Link className="button button-outline" href="/services">Explore all services <ArrowRight size={15} /></Link></div>
      </div>
    </section>
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="container two-col">
        <Reveal><span className="eyebrow">Built with intention</span><h2 className="section-title">Good technology should feel like a head start.</h2><p className="body-copy">Every business has its own rhythm. We listen first, then design and build the right tools to remove friction and make room for what comes next.</p><Link className="button button-dark" href="/about">Get to know us <MoveUpRight size={15} /></Link></Reveal>
        <Reveal delay={.1}><div className="stat-strip"><div className="stat"><strong>01</strong><span>Clear thinking</span></div><div className="stat"><strong>02</strong><span>Careful craft</span></div><div className="stat"><strong>∞</strong><span>Room to grow</span></div></div><p className="body-copy" style={{ fontSize: 14, marginTop: 25 }}>A close, collaborative team for custom applications, internal platforms, and software that earns its place in your business.</p></Reveal>
      </div>
    </section>
    <section className="section" style={{ paddingTop: 20 }}><div className="container"><Reveal className="cta-band"><div><span className="eyebrow">Your next chapter</span><h2>Have a challenge worth solving?</h2></div><Link className="button button-dark" href="/contact">Let&apos;s make it real <ArrowRight size={15} /></Link></Reveal></div></section>
  </>;
}

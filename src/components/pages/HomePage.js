import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Boxes, Code2, MoveUpRight, ShieldCheck, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import ComingSoon from "@/components/ComingSoon";

const concepts = [
  { title: "Nevixs Core", category: "Multi-business ERP concept", image: "/nevixs-core-demo.svg", alt: "Nevixs Core ERP concept showing sales, inventory, and business reports" },
  { title: "Signal", category: "Customer intelligence concept", image: "/nevixs-signal-demo.svg", alt: "Signal concept dashboard showing customer engagement and retention metrics" },
];

const services = [
  { icon: "Boxes", title: "Multi-business ERP", description: "Bring sales, inventory, purchases, and business operations into one connected platform.", tags: ["Sales", "Inventory", "Accounts"] },
  { icon: "Code2", title: "Business apps", description: "Extend your workflows with tools shaped around the way your teams work.", tags: ["Billing", "Expenses", "Leave"] },
  { icon: "ShieldCheck", title: "Integrations & automation", description: "Connect systems and streamline routine handoffs across your operations.", tags: ["Workflows", "Integrations", "Approvals"] },
  { icon: "Sparkles", title: "Insights & innovation", description: "Make business information easier to understand and put to work.", tags: ["Reports", "Analytics", "AI"] },
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
    <section className="section home-work-section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Selected concepts</span>
          <h2 className="section-title">A glimpse of what thoughtful software can do.</h2>
          <p className="body-copy" style={{ maxWidth: 580 }}>These early product concepts explore ways to make business work clearer. They are explorations—not finished client projects.</p>
        </Reveal>
        <div className="project-grid home-project-grid">
          {concepts.map((concept, index) => (
            <Reveal key={concept.title} delay={index * .1}>
              <Link href="/portfolio" className="project-card home-project-card">
                <div className="project-art concept-art">
                  <Image src={concept.image} alt={concept.alt} width={1200} height={760} />
                  <span className="concept-label">Concept demo · sample data</span>
                </div>
                <div className="project-info">
                  <div><h3>{concept.title}</h3><p>{concept.category}</p></div>
                  <MoveUpRight size={18} aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 26 }}><Link className="button button-outline" href="/portfolio">Explore the concepts <ArrowRight size={15} /></Link></div>
      </div>
    </section>
    <ComingSoon />
    <section className="section approach-section">
      <div className="container">
        <Reveal className="section-heading"><span className="eyebrow">Built with intention</span><h2 className="section-title">A clear path from idea to useful software.</h2><p className="body-copy" style={{ maxWidth: 580 }}>We listen first, then shape practical technology around the people and processes that matter.</p></Reveal>
        <div className="approach-grid">
          <Reveal className="approach-card"><span>01 / Listen</span><h3>Understand the real need.</h3><p>We start with your goals and current workflows to find what is worth solving first.</p></Reveal>
          <Reveal className="approach-card" delay={.08}><span>02 / Shape</span><h3>Plan a useful solution.</h3><p>We map the experience and key features around the people who will use the software.</p></Reveal>
          <Reveal className="approach-card" delay={.16}><span>03 / Build</span><h3>Make it ready to grow.</h3><p>We build, refine, and prepare your product to support the next stage of your work.</p></Reveal>
        </div>
      </div>
    </section>
    <section className="section" style={{ paddingTop: 20 }}><div className="container"><Reveal className="cta-band"><div><span className="eyebrow">Your next chapter</span><h2>Have a challenge worth solving?</h2></div><Link className="button button-dark" href="/contact">Let&apos;s make it real <ArrowRight size={15} /></Link></Reveal></div></section>
  </>;
}

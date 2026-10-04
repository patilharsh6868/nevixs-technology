import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Boxes } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Work", description: "Explore early Nevixs product concepts for business software and operations." };

const concepts = [
  { title: "Nevixs Core", category: "Multi-business ERP concept", image: "/nevixs-core-demo.svg", icon: Boxes },
  { title: "Signal", category: "Customer intelligence concept", image: "/nevixs-signal-demo.svg", icon: BarChart3 },
];

export default function PortfolioPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Selected concepts</span><h1>Tools we want to make useful.</h1><p>A look at future-facing product directions from the Nevixs studio. These concept demos show how thoughtful software can bring complex work into focus.</p></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">Future product directions</span><h2 className="section-title">Clear systems for the work ahead.</h2><p className="body-copy">These are explorations, not finished client projects. They are a window into the kind of digital products we can shape together.</p></Reveal><div className="project-grid">{concepts.map(({ title, category, image, icon: Icon }, index) => <Reveal className="project-card" key={title} delay={index * .1}><div className="project-art concept-art"><Image src={image} alt={`${title} interface concept with sample data`} width={1200} height={760} /><span className="concept-label">Concept demo · sample data</span></div><div className="project-info"><div><h3>{title}</h3><p>{category}</p></div><Icon size={18} color="#008f78" /></div></Reveal>)}</div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="testimonial"><span className="eyebrow">A note on these concepts</span><blockquote>Early explorations, shared openly. Not live products or completed client work.</blockquote><cite>Nevixs Technology · Product concepts</cite></div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="cta-band"><div><span className="eyebrow">Have a challenge worth solving?</span><h2>Let&apos;s talk about what your business needs.</h2></div><Link href="/contact" className="button button-dark">Start a conversation <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

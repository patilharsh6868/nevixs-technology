import { ArrowUpRight, BarChart3, Boxes } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  { title: "Nevixs Core", category: "Business operations concept", image: "/nevixs-core-demo.svg", icon: Boxes, description: "A unified ERP workspace for sales, inventory, customers, and reporting." },
  { title: "Signal", category: "Customer intelligence concept", image: "/nevixs-signal-demo.svg", icon: BarChart3, description: "A clear customer pulse dashboard for teams that want to act earlier." },
];

export default function PortfolioPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Selected concepts</span><h1>Tools we want to make useful.</h1><p>A look at future-facing product directions from the Nevixs studio. These concept demos show how thoughtful software can bring complex work into focus.</p></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">Future product directions</span><h2 className="section-title">Clear systems for the work ahead.</h2><p className="body-copy">These are explorations, not finished client projects. They are a window into the kind of digital products we can shape together.</p></Reveal><div className="project-grid">{projects.map(({ title, category, image, icon: Icon, description }, index) => <Reveal className="project-card" key={title} delay={index * .1}><div className="project-art concept-art"><Image src={image} alt={`${title} interface concept`} width={1200} height={760} /><span className="concept-label">Concept demo</span></div><div className="project-info"><div><h3>{title}</h3><p>{description}</p></div><Icon size={18} color="#008f78" /></div></Reveal>)}</div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><Reveal className="testimonial"><span className="eyebrow">A note on collaboration</span><blockquote>“The best project stories are written together, one thoughtful decision at a time.”</blockquote><cite>Nevixs Technology · Studio principle</cite></Reveal></div></section>
  </>;
}

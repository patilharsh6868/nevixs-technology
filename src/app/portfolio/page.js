import { ArrowUpRight, FileText, LayoutDashboard } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Portfolio", description: "A selection of prototype concepts for billing and leave-management applications." };

function InvoicePreview() {
  return <div className="mock-window"><span className="mock-chip">INVOICE · #NV-2048</span><div style={{ display: "flex", justifyContent: "space-between", marginTop: 18, fontSize: 9 }}><strong>Studio North</strong><span>18 Aug 2026</span></div><div className="mock-line medium" /><div className="mock-line" /><div className="mock-line short" /><div className="mock-total"><span>Total due</span><span>₹24,780</span></div></div>;
}

function LeavePreview() {
  return <div className="mock-window leave-ui"><span className="mock-chip">REQUEST SENT</span><h4 style={{ margin: "16px 0 4px", fontSize: 14 }}>Time away</h4><div className="mock-line medium" /><div style={{ display: "flex", gap: 8, marginTop: 14 }}><span className="mock-chip">12 SEP</span><span className="mock-chip">16 SEP</span></div><div className="mock-line" style={{ marginTop: 18 }} /><div className="mock-total"><span>Annual leave</span><span>5 days</span></div></div>;
}

const projects = [
  { title: "ClearBill", category: "Billing prototype", type: "invoice", icon: FileText, component: InvoicePreview, description: "A simple invoicing workspace concept for small teams." },
  { title: "Daylight", category: "People operations prototype", type: "leave", icon: LayoutDashboard, component: LeavePreview, description: "A calmer leave request and approval experience." },
];

export default function PortfolioPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Selected concepts</span><h1>Small ideas, made tangible.</h1><p>A look at product directions and interface concepts. These demos illustrate the kind of workflows we can shape together.</p></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">Prototypes & explorations</span><h2 className="section-title">Useful by design. Clear at a glance.</h2></Reveal><div className="project-grid">{projects.map(({ title, category, type, icon: Icon, component: Preview, description }, index) => <Reveal className="project-card" key={title} delay={index * .1}><div className={`project-art ${type}`}><h3>{category}</h3><Preview /></div><div className="project-info"><div><h3>{title}</h3><p>{description}</p></div><Icon size={18} color="#008f78" /></div></Reveal>)}</div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><Reveal className="testimonial"><span className="eyebrow">A note on collaboration</span><blockquote>“The best project stories are written together, one thoughtful decision at a time.”</blockquote><cite>Nevixs Technology · Studio principle</cite></Reveal></div></section>
  </>;
}

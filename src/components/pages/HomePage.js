import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import WorkflowExplorer from "@/components/WorkflowExplorer";
import CustomerProof from "@/components/CustomerProof";

const questions = [
  { question: "Can I see it before deciding?", answer: "Open the app to get started, or request a demo with the workflows you want to explore. We'll discuss the scope and requirements that matter to your business." },
  { question: "How do I find out about pricing and setup?", answer: "Tell us about your team, modules of interest, existing tools, and data needs. Ask our team about pricing, setup, and integration requirements before deciding." },
  { question: "What if I need something more specific?", answer: "Nevixs also builds custom business applications. We can discuss your workflow and whether Business OS or a custom solution is the more useful starting point." },
];

export default function HomePage() {
  return <>
    <Hero />
    <WorkflowExplorer />
    <CustomerProof />
    <section className="section studio-services"><div className="container service-spotlight"><h2 className="section-title">Need custom software?</h2><div><p className="body-copy">We build business applications and automate workflows that don&apos;t fit an off-the-shelf product.</p><Link className="text-action" href="/services">Explore software services <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="section product-faq"><div className="container faq-layout"><div><span className="eyebrow">A LITTLE CLARITY</span><h2 className="section-title">Before we<br />get started.</h2><Link className="text-action" href="/contact">Ask your own question <ArrowUpRight size={16} /></Link></div><div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="section next-step"><div className="container"><h2>See Business OS in action.</h2><Link className="button" href="/contact?topic=erp">Request a demo <ArrowRight size={18} /></Link></div></section>
  </>;
}

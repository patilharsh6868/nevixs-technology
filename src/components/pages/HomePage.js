import Link from "next/link";
import { ArrowUpRight, ArrowRight, Boxes, ContactRound, CreditCard, Users } from "lucide-react";
import Hero from "@/components/Hero";
import WorkflowExplorer from "@/components/WorkflowExplorer";
import CustomerProof from "@/components/CustomerProof";
import { publishedInsights } from "@/lib/insights";

const modules = [
  { id: "erp", icon: Boxes, tag: "ERP", title: "Operations & finance", copy: "Suppliers, purchasing, inventory, production, and payments." },
  { id: "crm", icon: ContactRound, tag: "CRM", title: "Sales & customers", copy: "Customers, quotations, invoices, and outstanding balances." },
  { id: "hr", icon: Users, tag: "HR", title: "People & HR", copy: "People records and everyday HR workflows, linked to payroll." },
  { id: "payroll", icon: CreditCard, tag: "Payroll", title: "Payroll", copy: "Payroll alongside HR and finance, not in a separate tool." },
];

const questions = [
  { question: "Can I see it before deciding?", answer: "Open the app to get started, or request a demo with the workflows you want to explore. We'll discuss the scope and requirements that matter to your business." },
  { question: "How do I find out about pricing and setup?", answer: "Tell us about your team, modules of interest, existing tools, and data needs. Ask our team about pricing, setup, and integration requirements before deciding." },
  { question: "What if I need something more specific?", answer: "Nevixs also builds custom business applications. We can discuss your workflow and whether Business OS or a custom solution is the more useful starting point." },
];

export default function HomePage() {
  const latest = publishedInsights[0];

  return <>
    <Hero />
    <section className="section home-modules" aria-labelledby="home-modules-heading">
      <div className="container">
        <div className="home-modules-heading">
          <h2 className="section-title" id="home-modules-heading">Four modules, one workspace</h2>
          <Link className="text-action" href="/erp">See every module in detail <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <ul className="module-grid">
          {modules.map(({ id, icon: Icon, tag, title, copy }) => (
            <li key={id}>
              <Link href={`/erp#${id}`} className="module-card">
                <span className="eyebrow"><Icon size={18} aria-hidden="true" />{tag}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="module-card-link">Explore {tag} <ArrowRight size={15} aria-hidden="true" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <WorkflowExplorer />
    <CustomerProof />
    <section className="section studio-services"><div className="container service-spotlight"><h2 className="section-title">Need custom software?</h2><div><p className="body-copy">We build business applications and automate workflows that don&apos;t fit an off-the-shelf product.</p><Link className="text-action" href="/services">Explore software services <ArrowUpRight size={17} /></Link></div></div></section>
    {latest && (
      <section className="section home-insight" aria-labelledby="home-insight-heading">
        <div className="container service-spotlight">
          <div><span className="eyebrow">From Insights &middot; {latest.category}</span><h2 className="section-title" id="home-insight-heading">{latest.title}</h2></div>
          <div><p className="body-copy">{latest.summary}</p><Link className="text-action" href={`/blog/${latest.slug}`}>Read the article <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        </div>
      </section>
    )}
    <section className="section product-faq"><div className="container faq-layout"><div><span className="eyebrow">A LITTLE CLARITY</span><h2 className="section-title">Before we<br />get started.</h2><Link className="text-action" href="/contact">Ask your own question <ArrowUpRight size={16} /></Link></div><div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="section next-step"><div className="container"><h2>See Business OS in action.</h2><Link className="button" href="/contact?topic=erp">Request a demo <ArrowRight size={18} /></Link></div></section>
  </>;
}

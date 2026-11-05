import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Boxes, ContactRound, Users } from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ComingSoon from "@/components/ComingSoon";

const workflows = [
  { icon: ContactRound, number: "01", title: "From a customer conversation to an invoice.", description: "Keep customers, quotes, and invoices close to the sales work they belong to.", steps: ["Customers", "Quotes", "Invoices"], href: "/erp#crm", link: "Explore CRM" },
  { icon: Boxes, number: "02", title: "From a supplier order to the stock you need.", description: "Bring purchasing, materials, inventory, and production into the same operational picture.", steps: ["Purchasing", "Inventory", "Production"], href: "/erp#erp", link: "Explore ERP" },
  { icon: Users, number: "03", title: "From everyday people work to payroll.", description: "Give HR and payroll their own space without separating them from your business operations.", steps: ["People", "HR workflows", "Payroll"], href: "/erp#hr", link: "Explore HR & payroll" },
];

const questions = [
  { question: "What is NEVIXS Business OS?", answer: "Business OS combines enterprise resource planning (ERP), customer relationship management (CRM), human resources (HR), and payroll in one web-based business platform." },
  { question: "How do I get started?", answer: "Open Business OS to sign in or create an account. If you want to discuss your workflows first, send a demo enquiry with a little about your business and the modules you need." },
  { question: "Where can I ask about pricing and setup?", answer: "Contact our team to discuss pricing, setup, and the scope you need. We can also discuss your existing data and any integration requirements before you decide." },
  { question: "Can we discuss custom software too?", answer: "Yes. Nevixs Technologies also builds custom business applications. Choose Custom software on the enquiry form and tell us about the workflow you want to improve." },
];

export default function HomePage() {
  return <>
    <Hero />
    <ComingSoon />
    <section className="section">
      <div className="container">
        <Reveal className="section-heading"><span className="eyebrow">The work between departments</span><h2 className="section-title">See how the pieces connect.</h2><p className="body-copy">Start with the workflows your team handles every day.</p></Reveal>
        <div className="workflow-list">{workflows.map(({ icon: Icon, number, title, description, steps, href, link }) => (
          <Reveal className="workflow-row" key={number}>
            <span className="workflow-number">{number}</span>
            <div className="workflow-description"><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{description}</p><Link href={href}>{link} <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
            <ol className="workflow-steps" aria-label={`${link} workflow`}>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </Reveal>
        ))}</div>
      </div>
    </section>
    <section className="section product-faq">
      <div className="container faq-layout"><div><span className="eyebrow">Before you start</span><h2 className="section-title">A few useful answers.</h2><p className="body-copy">Have a question about your business?</p><a className="text-action" href="mailto:support@nevixs.com">Talk to support <ArrowUpRight size={16} /></a></div><div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div>
    </section>
    <section className="section"><div className="container closing-layout"><div><span className="eyebrow">Make it fit your business</span><h2 className="section-title">Let&apos;s start with your workflow.</h2><p className="body-copy">Tell us what your team needs from ERP, CRM, HR, or payroll. We&apos;ll discuss where Business OS fits and where custom software might help.</p><div className="product-actions"><Link className="button button-dark" href="/contact?topic=erp">Request a demo <ArrowRight size={16} /></Link><Link className="button button-outline" href="/services">Custom software services <ArrowUpRight size={16} /></Link></div></div><div className="closing-brand"><Image src="/nevixs-mark.svg" alt="Nevixs Technologies" width={120} height={120} /><strong>Built around<br />the way you work.</strong><span>Nevixs Technologies · Pune, India</span></div></div></section>
  </>;
}

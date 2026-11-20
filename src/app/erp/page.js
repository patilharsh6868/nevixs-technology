import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Boxes, Check, CreditCard, Users, ContactRound } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import WorkflowExplorer from "@/components/WorkflowExplorer";
import ProductVideo from "@/components/ProductVideo";
import AwsHosting from "@/components/AwsHosting";
import { appUrl, supportEmail, whatsappUrl } from "@/lib/site";
import { isTodo, todo, withoutTodos } from "@/lib/todo";

export const metadata = pageMetadata({
  title: "Business OS: ERP, CRM, HR & Payroll Software",
  description: "Combine ERP, CRM, HR management, and payroll in NEVIXS Business OS. Connect inventory, purchasing, production, sales, customers, and people in one platform.",
  path: "/erp",
});

const screenshots = [
  { src: "/erp-overview-page.png", width: 1282, height: 816, alt: "Business OS overview dashboard showing sales, purchases, outstanding balances and stock valuation", caption: "Overview: sales, purchases, outstanding balances, and stock valuation in one view." },
  { src: "/erp-frame-1.jpg", width: 1408, height: 792, alt: "Project page with seven delivery stages from scope approval to handover", caption: "Projects: delivery stages from scope and drawing approval to handover, each with a due date." },
  { src: "/erp-frame-3.jpg", width: 1408, height: 792, alt: "Stage record showing start, work, first review, final review and complete steps", caption: "Approvals: each stage moves through a first and a final review before it is complete." },
  { src: "/erp-frame-4.jpg", width: 1408, height: 792, alt: "Material planning and procurement stage with responsible person and reviewer", caption: "Next stage: material planning and procurement, with a responsible person and a reviewer." },
];

const modules = [
  {
    id: "erp", icon: Boxes, tag: "ERP", title: "Operations & finance",
    description: "Run purchasing, stock, production, and finance from one workspace. An order, the materials it needs, and the payment that follows stay connected, so teams work from the same records.",
    features: ["Suppliers and purchase orders", "Inventory with stock levels and valuation", "Production job orders with due dates", "Project stages with two-person approvals", "Expenses and payments", "Supplier balances"],
    screenshot: todo("ERP module screenshot"),
  },
  {
    id: "crm", icon: ContactRound, tag: "CRM", title: "Sales & customers",
    description: "Keep customers, quotations, and invoices together, so the commercial side of a job stays close to the work behind it. See what has been quoted, invoiced, and is still outstanding.",
    features: ["Customer records", "Quotations", "Invoices", "Customer outstanding balances", "Net sales overview", todo("confirm feature: quote conversion tracking")],
    screenshot: todo("CRM module screenshot"),
  },
  {
    id: "hr", icon: Users, tag: "HR", title: "People & HR",
    description: "Give your people workflows a dedicated area that connects to payroll and the rest of the business. Tell us about the HR processes your team handles today, and we will show how they fit.",
    features: ["People management", "Everyday HR workflows", "Connection to payroll", todo("confirm feature: attendance tracking"), todo("confirm feature: leave management")],
    screenshot: todo("HR module screenshot"),
  },
  {
    id: "payroll", icon: CreditCard, tag: "Payroll", title: "Payroll",
    description: "Handle payroll alongside HR and finance instead of in a separate tool. Confirm the calculations, statutory requirements, and payment process you need during a demo.",
    features: ["Dedicated payroll area", "Approved salary tracking with outstanding amounts", "Linked to people records in HR", "Payroll in the wider finance picture", todo("confirm feature: statutory deductions such as PF, ESI, PT and TDS")],
    screenshot: todo("Payroll module screenshot"),
  },
];

const audience = todo("confirm target industries and company size for the Who it's for section");

const questions = [
  { question: "Where is my data hosted?", answer: "Business OS runs on Amazon Web Services (AWS) in the Asia Pacific (Mumbai) Region. Ask our team if you need more detail about how your data is stored, backed up, and who can access it." },
  { question: "How do I get started?", answer: "Open the app to sign in or create an account, or request a demo and tell us which workflows you want to see. We will walk through the modules that matter to your business." },
  { question: "Can I see the actual product before deciding?", answer: "Yes. The screenshots and video on this page come from Business OS with sample data. In a demo, we can show the workflows your team cares about." },
  { question: "What about existing data and integrations?", answer: "Tell us what systems you use, what data you need to bring across, and where work moves between tools. We can discuss the scope before you decide; an integration or migration is not assumed to be included." },
  { question: "Does the payroll module cover our statutory requirements?", answer: "Requirements vary by location and business. Share the calculations, filings, and payment process you need so we can confirm current coverage. This page does not promise automatic statutory compliance or direct bank payouts." },
  { question: "How do I get support?", answer: `Email our team at ${supportEmail} or message us on WhatsApp. Tell us your company name and what you need help with.` },
];

export default function ErpPage() {
  return <>
    <Breadcrumbs label="Business OS" path="/erp" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://nevixs.com/erp#business-os",
      name: "NEVIXS Business OS",
      url: "https://nevixs.com/erp",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web browser",
      description: "Integrated ERP, CRM, HR management, and payroll software for connected business operations.",
      featureList: ["Enterprise resource planning (ERP)", "Customer relationship management (CRM)", "Human resources management (HR)", "Payroll management", "Inventory and production", "Purchasing and finance"],
      screenshot: screenshots.map(({ src }) => `https://nevixs.com${src}`),
      publisher: { "@id": "https://nevixs.com/#organization" },
    }) }} />
    <section className="page-hero business-hero">
      <div className="container">
        <h1>NEVIXS Business OS</h1>
        <p>ERP, CRM, HR, and payroll in one workspace.</p>
        <div className="product-actions">
          <Link href="/contact?topic=erp" className="button">Request a demo <ArrowRight size={15} aria-hidden="true" /></Link>
          <a href={appUrl} className="button button-outline">Open Business OS <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
    <nav className="container product-jump-links" aria-label="Explore Business OS"><a href="#screens">Screenshots</a><a href="#erp">ERP</a><a href="#crm">CRM</a><a href="#hr">HR</a><a href="#payroll">Payroll</a><a href="#workflows">Workflows</a><a href="#getting-started">Getting started</a><a href="#infrastructure">Infrastructure</a><a href="#product-questions">FAQs</a></nav>

    <section className="section product-walkthrough" id="screens" aria-labelledby="screens-heading">
      <div className="container">
        <div className="section-heading walkthrough-heading">
          <h2 className="section-title" id="screens-heading">See Business OS in use</h2>
          <p className="body-copy">Follow a sample fabrication project from scope and drawing approval through procurement, production, inspection, dispatch, and handover.</p>
        </div>
        <ProductVideo />
        <div className="screen-gallery">
          {screenshots.map(({ src, width, height, alt, caption }) => (
            <figure className="screen-card" key={src}>
              <Image src={src} alt={alt} width={width} height={height} unoptimized />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="screens-note">Screenshots use sample data.</p>
      </div>
    </section>

    <section className="section module-section" aria-labelledby="modules-heading">
      <div className="container">
        <h2 className="section-title" id="modules-heading">Four modules, one workspace</h2>
        <div className="module-stories">
          {modules.map(({ id, icon: Icon, tag, title, description, features, screenshot }) => (
            <article className="module-story" id={id} key={id} aria-labelledby={`${id}-heading`}>
              <div className="module-story-copy">
                <span className="eyebrow"><Icon size={20} aria-hidden="true" />{tag}</span>
                <h3 id={`${id}-heading`}>{title}</h3>
                <p>{description}</p>
                <Link className="text-action" href="/contact?topic=erp">Ask about {tag} <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
              <div className="module-outline">
                <ul aria-label={`${tag} features`}>{withoutTodos(features).map((feature) => <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>)}</ul>
                {!isTodo(screenshot) && screenshot}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {!isTodo(audience) && <section className="section" id="who-its-for">{audience}</section>}

    <WorkflowExplorer />

    <section className="section approach-section" id="getting-started">
      <div className="container">
        <div className="section-heading"><h2 className="section-title">What to expect from a demo</h2></div>
        <ol className="evaluation-steps">
          <li><span>01 / Your context</span><h3>Show us the work.</h3><p>Tell us about your team, current tools, and the handoffs that take the most effort.</p></li>
          <li><span>02 / Product walkthrough</span><h3>Explore what matters.</h3><p>Ask to see the modules relevant to your business, and confirm the details you depend on.</p></li>
          <li><span>03 / A clear scope</span><h3>Discuss the next step.</h3><p>Review pricing, data needs, integrations, and setup questions with our team.</p></li>
        </ol>
      </div>
    </section>

    <AwsHosting />

    <section className="section product-faq" id="product-questions"><div className="container faq-layout"><div><span className="eyebrow">Know before you choose</span><h2 className="section-title">Good questions.<br />Clear expectations.</h2><p className="body-copy">Your requirements deserve a specific answer, not a broad promise.</p></div><div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

    <section className="section next-step">
      <div className="container">
        <h2>See Business OS with your own workflows.</h2>
        <div className="product-actions product-actions-center">
          <Link href="/contact?topic=erp" className="button">Request a demo <ArrowRight size={15} aria-hidden="true" /></Link>
          <a href={whatsappUrl} className="button button-outline" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  </>;
}

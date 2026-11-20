import Link from "next/link";
import { ArrowRight, Boxes, CreditCard, Users, ContactRound } from "lucide-react";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import WorkflowExplorer from "@/components/WorkflowExplorer";
import ProductVideo from "@/components/ProductVideo";
import AwsHosting from "@/components/AwsHosting";

export const metadata = pageMetadata({
  title: "Business OS: ERP, CRM, HR & Payroll Software",
  description: "Combine ERP, CRM, HR management, and payroll in NEVIXS Business OS. Connect inventory, purchasing, production, sales, customers, and people in one platform.",
  path: "/erp",
});

const productAreas = [
  { id: "erp", icon: Boxes, label: "Operations & finance", title: "The moving parts. A shared picture.", description: "Enterprise resource planning brings inventory, purchasing, suppliers, production, and finance into the same workspace.", areas: ["Suppliers & purchasing", "Inventory & production", "Expenses & payments"], context: "For the teams coordinating materials, orders, and the everyday work of running a business." },
  { id: "crm", icon: ContactRound, label: "Sales & customer relationships", title: "Keep the customer in the conversation.", description: "Connect customers, quotes, and invoices with the business work around them. Give sales conversations a place alongside operations.", areas: ["Customer relationships", "Quotes", "Invoices"], context: "For teams following a customer enquiry through to the commercial details." },
  { id: "hr", icon: Users, label: "People & team workflows", title: "A business is the people behind it.", description: "Give human resources a dedicated area without isolating it from the rest of the business. Start with the people workflows that matter to your team.", areas: ["People management", "Everyday HR workflows", "Connection to payroll"], context: "For people teams looking to discuss their HR process in the context of the wider business." },
  { id: "payroll", icon: CreditCard, label: "Payroll & people", title: "Bring pay into the bigger picture.", description: "Explore payroll alongside HR and finance, rather than as an entirely separate workspace. Talk through your pay cycle and requirements with our team.", areas: ["Dedicated payroll area", "HR & finance context", "Business-specific requirements"], context: "For HR and finance teams evaluating how payroll fits their operations. Confirm calculations, statutory coverage, and payout options in a demo." },
];

const questions = [
  { question: "Can I see the actual product before deciding?", answer: "Yes. Open Business OS to access the app, or request a demo and tell us which workflows you want to explore. The workflow diagrams on this page are explanatory guides, not screenshots." },
  { question: "Does the payroll module cover our statutory requirements?", answer: "Requirements vary by location and business. Share the calculations, filings, and payment process you need so we can confirm current coverage. This page does not promise automatic statutory compliance or direct bank payouts." },
  { question: "What about existing data and integrations?", answer: "Tell us what systems you use, what data you need to bring across, and where work moves between tools. We can discuss the scope before you decide; an integration or migration is not assumed to be included." },
  { question: "Where is Business OS hosted?", answer: "Business OS runs on Amazon Web Services (AWS) in the Asia Pacific (Mumbai) Region. Ask our team if you need more detail about how your data is stored and who can access it." },
  { question: "Where can I get pricing and setup details?", answer: "Send a Business OS enquiry with your team size, modules of interest, and main workflows. Ask our team about pricing, setup, and support for your requirements." },
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
      publisher: { "@id": "https://nevixs.com/#organization" },
    }) }} />
    <section className="page-hero business-hero">
      <div className="container">
        <h1>NEVIXS Business OS</h1>
        <p>ERP, CRM, HR, and payroll in one workspace.</p>
        <div className="product-actions">
          <Link href="/contact?topic=erp" className="button button-dark">Request a workflow demo <ArrowRight size={15} /></Link>
          <a href="https://app.nevixs.com" className="button button-outline">Open Business OS <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
    <nav className="container product-jump-links" aria-label="Explore Business OS"><a href="#walkthrough">Walkthrough</a><a href="#erp">ERP</a><a href="#crm">CRM</a><a href="#hr">HR</a><a href="#payroll">Payroll</a><a href="#workflows">Workflows</a><a href="#getting-started">Getting started</a><a href="#product-questions">FAQs</a></nav>
    <section className="section product-walkthrough" id="walkthrough">
      <div className="container">
        <div className="section-heading walkthrough-heading">
          <h2 className="section-title">See a project move through approvals</h2>
          <p className="body-copy">Follow a sample fabrication project from scope and drawing approval through procurement, production, inspection, dispatch, and handover.</p>
        </div>
        <ProductVideo />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Reveal className="section-heading">
          <h2 className="section-title">Business OS modules</h2>
        </Reveal>
        <div className="module-stories">
          {productAreas.map(({ id, icon: Icon, label, title, description, areas, context }, index) => (
            <article className="module-story" id={id} key={id}>
              <div className="module-story-copy"><span className="eyebrow"><Icon size={20} aria-hidden="true" />{id.toUpperCase()} / {label}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              </div>
              <div className="module-outline"><span className="module-outline-number">0{index + 1} / WORKSPACE FOCUS</span><ul>{areas.map(area => <li key={area}><Icon size={18} aria-hidden="true" />{area}</li>)}</ul><p>{context}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
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
    <section className="section product-faq" id="product-questions"><div className="container faq-layout"><div><span className="eyebrow">Know before you choose</span><h2 className="section-title">Good questions.<br />Clear expectations.</h2><p className="body-copy">Your requirements deserve a specific answer, not a broad promise.</p></div><div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <section className="section">
      <div className="container two-col">
        <Reveal>
          <span className="eyebrow">Start a conversation</span>
          <h2 className="section-title">Let&apos;s follow your work.</h2>
        </Reveal>
        <Reveal delay={.1}>
          <p className="body-copy">Open the app to sign in or create an account. For questions about getting started or fitting Business OS into your workflows, talk to our team.</p>
          <Link href="/contact?topic=erp" className="button button-dark">Discuss your business <ArrowRight size={15} /></Link>
        </Reveal>
      </div>
    </section>
    <AwsHosting />
  </>;
}

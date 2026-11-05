import Link from "next/link";
import { ArrowRight, Boxes, CreditCard, Users, ContactRound } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Business OS: ERP, CRM, HR & Payroll Software",
  description: "Combine ERP, CRM, HR management, and payroll in NEVIXS Business OS. Connect inventory, purchasing, production, sales, customers, and people in one platform.",
  alternates: { canonical: "/erp" },
  openGraph: {
    title: "NEVIXS Business OS | ERP, CRM, HR & Payroll",
    description: "One connected platform for business operations, customer relationships, human resources, and payroll.",
    url: "https://nevixs.com/erp",
    type: "website",
    siteName: "Nevixs Technologies",
  },
};

const productAreas = [
  { icon: Boxes, title: "ERP: connected business operations", description: "Enterprise resource planning for inventory, purchasing, suppliers, production, and finance. Keep materials, orders, expenses, and payments together." },
  { icon: ContactRound, title: "CRM: sales & customer relationships", description: "Customer relationship management that connects customers, quotes, and invoices with the rest of your business workflows." },
  { icon: Users, title: "HR: people management", description: "Human resources management in the same workspace as your operations. Keep everyday people workflows connected to your team and business." },
  { icon: CreditCard, title: "Payroll: connected to your people", description: "Manage payroll alongside HR and finance, with a dedicated payroll area instead of a separate, disconnected workspace." },
];

export default function ErpPage() {
  return <>
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
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">NEVIXS · Integrated business software</span>
        <h1>NEVIXS Business OS</h1>
        <p>ERP, CRM, HR, and payroll software in one connected workspace. Bring your operations, customer relationships, finances, and people together.</p>
        <div style={{ marginTop: 28 }}>
          <a href="https://app.nevixs.com" className="button button-dark">Open Business OS <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Connected operations</span>
          <h2 className="section-title">ERP, CRM, HR & payroll. One Business OS.</h2>
          <p className="body-copy" style={{ maxWidth: 640 }}>Four connected areas for the work of running a business, from customer relationships and stock to people and payroll.</p>
        </Reveal>
        <div className="services-grid erp-areas-grid">
          {productAreas.map(({ icon: Icon, title, description }, index) => (
            <Reveal className="service-card" id={title.split(":")[0].toLowerCase()} key={title} delay={index * .06}>
              <div className="icon-box"><Icon size={21} strokeWidth={1.8} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section approach-section">
      <div className="container two-col">
        <Reveal>
          <span className="eyebrow">Start a conversation</span>
          <h2 className="section-title">Make Business OS part of your workday.</h2>
        </Reveal>
        <Reveal delay={.1}>
          <p className="body-copy">Open the app to sign in or create an account. For questions about getting started or fitting Business OS into your workflows, talk to our team.</p>
          <Link href="/contact?topic=erp" className="button button-dark">Discuss your business <ArrowRight size={15} /></Link>
        </Reveal>
      </div>
    </section>
  </>;
}

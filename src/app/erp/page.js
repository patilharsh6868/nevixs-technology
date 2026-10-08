import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, Building2, ShoppingCart } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Multi-business ERP",
  description: "Nevixs ERP is an upcoming business management system for connecting operations across multiple businesses.",
};

const plannedAreas = [
  { icon: ShoppingCart, title: "Sales & purchases", description: "Keep everyday sales and purchasing activity connected across your businesses." },
  { icon: Boxes, title: "Inventory", description: "See stock information alongside the rest of your business operations." },
  { icon: Building2, title: "Multiple businesses", description: "Bring more than one business into a shared, easier-to-follow workspace." },
  { icon: BarChart3, title: "Business overview", description: "Explore key activity and reports without piecing together separate views." },
];

export default function ErpPage() {
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Nevixs ERP · Coming soon</span>
        <h1>A clearer view across your businesses.</h1>
        <p>Nevixs ERP is an upcoming business management system being designed to bring everyday operations for multiple businesses together in one place.</p>
        <div style={{ marginTop: 28 }}>
          <Link href="/contact?topic=erp" className="button button-dark">Ask about the upcoming ERP <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Areas being explored</span>
          <h2 className="section-title">The essentials, considered together.</h2>
          <p className="body-copy" style={{ maxWidth: 640 }}>The product is still taking shape. These are the kinds of business workflows we&apos;re exploring—not a final feature list or a live product.</p>
        </Reveal>
        <div className="services-grid erp-areas-grid">
          {plannedAreas.map(({ icon: Icon, title, description }, index) => (
            <Reveal className="service-card" key={title} delay={index * .06}>
              <div className="icon-box"><Icon size={21} strokeWidth={1.8} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-tags"><span>In exploration</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section approach-section">
      <div className="container two-col">
        <Reveal>
          <span className="eyebrow">Coming soon</span>
          <h2 className="section-title">Still in the early stages.</h2>
        </Reveal>
        <Reveal delay={.1}>
          <p className="body-copy">We&apos;re shaping the product and its details now. If you&apos;re interested in following its progress, get in touch and tell us a little about your business.</p>
          <Link href="/contact?topic=erp" className="button button-dark">Get in touch <ArrowRight size={15} /></Link>
        </Reveal>
      </div>
    </section>
  </>;
}

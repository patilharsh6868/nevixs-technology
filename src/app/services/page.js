import Link from "next/link";
import { ArrowRight, Bot, Boxes, Building2, CalendarDays, Cloud, CreditCard, Database, ShoppingBag } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

export const metadata = { title: "Multi-business ERP", description: "Explore Nevixs ERP for connected sales, inventory, purchases, and operations across multiple businesses." };

const services = [
  { icon: "Building2", title: "Multi-business ERP", description: "Bring sales, inventory, purchases, and essential workflows for your businesses into one connected platform.", tags: ["Sales", "Inventory", "Business operations"] },
  { icon: "CreditCard", title: "Business Apps", description: "Make everyday operations easier to manage with tools shaped around the way your teams already work.", tags: ["Billing", "Expenses", "Leave management"] },
  { icon: "ShoppingBag", title: "Customer Apps", description: "Give customers clear, useful digital experiences that make it easier to discover, book, and connect.", tags: ["E-commerce", "Booking", "Chatbots"] },
  { icon: "Building2", title: "Enterprise Software", description: "Bring important workflows into dependable systems with room to grow across teams and locations.", tags: ["Business systems", "HR systems", "Operations"] },
  { icon: "Bot", title: "Future Innovations", description: "Explore emerging tools carefully and turn promising technology into practical business value.", tags: ["AI dashboards", "Cloud tools", "IoT"] },
  { icon: "CalendarDays", title: "Workflow automation", description: "Connect routine steps, reduce handoffs, and give people more time for focused work.", tags: ["Approvals", "Notifications", "Integrations"] },
  { icon: "Database", title: "Data platforms", description: "Make business information easier to organize, understand, and put to work.", tags: ["Reporting", "Analytics", "Data systems"] },
  { icon: "Cloud", title: "Cloud & modernization", description: "Improve the foundations under your software with secure, maintainable cloud solutions.", tags: ["Cloud migration", "APIs", "Modernization"] },
  { icon: "Boxes", title: "Product engineering", description: "Move from concept to a polished, production-ready application with a collaborative build team.", tags: ["Prototypes", "Web apps", "Mobile-ready"] },
];

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Nevixs ERP &amp; business software</span><h1>One connected platform for your businesses.</h1><p>Start with multi-business ERP for sales, inventory, and operations. Add supporting applications and workflows around the needs of your teams.</p></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">Our capabilities</span><h2 className="section-title">ERP at the centre. The right tools around it.</h2></Reveal><div className="services-grid">{services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}</div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="cta-band"><div><span className="eyebrow">Have a particular challenge?</span><h2>Let&apos;s work out the right next step.</h2></div><Link href="/contact" className="button button-dark">Tell us about it <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

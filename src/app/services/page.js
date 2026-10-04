import Link from "next/link";
import { ArrowRight, Bot, Boxes, Building2, CalendarDays, Cloud, CreditCard, Database, ShoppingBag } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

export const metadata = { title: "Services", description: "Custom business apps, customer applications, enterprise systems, and future-ready software." };

const services = [
  { icon: "CreditCard", title: "Business Apps", description: "Make everyday operations easier to manage with tools shaped around the way your teams already work.", tags: ["Billing", "Expenses", "Leave management"] },
  { icon: "ShoppingBag", title: "Customer Apps", description: "Give customers clear, useful digital experiences that make it easier to discover, book, and connect.", tags: ["E-commerce", "Booking", "Chatbots"] },
  { icon: "Building2", title: "Enterprise Software", description: "Bring important workflows into one dependable system with room to grow across teams and locations.", tags: ["ERP", "Inventory", "HR systems"] },
  { icon: "Bot", title: "Future Innovations", description: "Explore emerging tools carefully and turn promising technology into practical business value.", tags: ["AI dashboards", "Cloud tools", "IoT"] },
  { icon: "CalendarDays", title: "Workflow automation", description: "Connect routine steps, reduce handoffs, and give people more time for focused work.", tags: ["Approvals", "Notifications", "Integrations"] },
  { icon: "Database", title: "Data platforms", description: "Make business information easier to organize, understand, and put to work.", tags: ["Reporting", "Analytics", "Data systems"] },
  { icon: "Cloud", title: "Cloud & modernization", description: "Improve the foundations under your software with secure, maintainable cloud solutions.", tags: ["Cloud migration", "APIs", "Modernization"] },
  { icon: "Boxes", title: "Product engineering", description: "Move from concept to a polished, production-ready application with a collaborative build team.", tags: ["Prototypes", "Web apps", "Mobile-ready"] },
];

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">What we build</span><h1>Software for the work ahead.</h1><p>From the first workflow sketch to a mature platform, we help make technology useful, dependable, and ready to evolve.</p></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">Our capabilities</span><h2 className="section-title">The right solution starts with your real-world needs.</h2></Reveal><div className="services-grid">{services.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}</div></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="cta-band"><div><span className="eyebrow">Have a particular challenge?</span><h2>Let&apos;s work out the right next step.</h2></div><Link href="/contact" className="button button-dark">Tell us about it <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

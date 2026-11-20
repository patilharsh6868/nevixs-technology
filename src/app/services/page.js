import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Custom Software & Business Application Services",
  description: "Custom business applications, workflow automation, data platforms, and cloud modernization from Nevixs Technologies in Pune. Discuss your software needs.",
  path: "/services",
});

const services = [
  { icon: "CreditCard", title: "Business apps", description: "Make everyday operations easier to manage with tools shaped around the way your teams already work.", tags: ["Billing", "Expenses", "Leave management"] },
  { icon: "ShoppingBag", title: "Customer apps", description: "Give customers clear, useful digital experiences that make it easier to discover, book, and connect.", tags: ["E-commerce", "Booking", "Chatbots"] },
  { icon: "Building2", title: "Enterprise software", description: "Bring important workflows into one dependable system with room to grow across teams and locations.", tags: ["ERP", "Inventory", "HR systems"] },
  { icon: "Bot", title: "Emerging technology", description: "Explore emerging tools carefully and turn promising technology into practical business value.", tags: ["AI dashboards", "Cloud tools", "IoT"] },
  { icon: "CalendarDays", title: "Workflow automation", description: "Connect routine steps, reduce handoffs, and give people more time for focused work.", tags: ["Approvals", "Notifications", "Integrations"] },
  { icon: "Database", title: "Data platforms", description: "Make business information easier to organize, understand, and put to work.", tags: ["Reporting", "Analytics", "Data systems"] },
  { icon: "Cloud", title: "Cloud & modernization", description: "Improve the foundations under your software with secure, maintainable cloud solutions.", tags: ["Cloud migration", "APIs", "Modernization"] },
  { icon: "Boxes", title: "Product engineering", description: "Move from concept to a polished, production-ready application with a collaborative build team.", tags: ["Prototypes", "Web apps", "Mobile-ready"] },
];

export default function ServicesPage() {
  return <>
    <Breadcrumbs label="Software services" path="/services" />
    <section className="page-hero"><div className="container"><h1>Custom software</h1><p>Business applications, workflow automation, and software modernization built around how your team works.</p><div className="product-actions"><Link href="/contact?topic=custom-software" className="button">Discuss your project <ArrowRight size={16} /></Link><a href="#capabilities" className="text-action">See what we build <ArrowRight size={16} /></a></div></div></section>
    <section className="section" id="capabilities"><div className="container"><Reveal className="section-heading"><h2 className="section-title">What we build</h2></Reveal><div className="services-grid">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div></div></section>
    <section className="section approach-section"><div className="container"><div className="section-heading"><h2 className="section-title">How a project runs</h2><p className="body-copy">Strategy, design, and engineering stay close together, so you see progress at every step.</p></div><ol className="evaluation-steps"><li><span>01 / Understand</span><h3>Map the work.</h3><p>We learn how your team works today, where it gets stuck, and what a better outcome looks like.</p></li><li><span>02 / Shape</span><h3>Agree the plan.</h3><p>We turn the right idea into a clear scope, interface, and build plan before writing code.</p></li><li><span>03 / Deliver</span><h3>Build in steps.</h3><p>We build in visible stages, review with you along the way, and hand over software ready to grow.</p></li></ol></div></section>
    <section className="section"><div className="container"><span className="eyebrow">Looking for connected business software?</span><h2 className="section-title">Explore NEVIXS Business OS.</h2><p className="body-copy">Bring ERP, CRM, HR, and payroll into one workspace, or talk to us about a custom application for your workflows.</p><Link href="/erp" className="button button-outline">Explore ERP, CRM, HR &amp; payroll <ArrowRight size={15} /></Link></div></section>
    <section className="section" style={{ paddingTop: 0 }}><div className="container"><div className="cta-band"><h2>Have a project in mind?</h2><Link href="/contact?topic=custom-software" className="button">Discuss your project <ArrowRight size={15} /></Link></div></div></section>
  </>;
}

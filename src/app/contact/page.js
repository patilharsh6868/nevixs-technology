import { MapPin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { whatsappNumber, whatsappUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact & Request a Business OS Demo",
  description: "Contact Nevixs Technologies in Pune to request a NEVIXS Business OS demo or discuss ERP, CRM, HR, payroll, and custom software requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return <>
    <Breadcrumbs label="Contact" path="/contact" />
    <section className="section contact-section">
      <div className="container contact-layout">
        <div className="contact-intro">
          <h1>Contact Nevixs</h1>
          <p className="body-copy">Request a Business OS demo or tell us what you want to build.</p>
        </div>
        <ContactForm />
        <aside className="contact-info" aria-label="Other ways to contact us">
          <div className="contact-detail"><MapPin size={19} aria-hidden="true" /><span>Pune, Maharashtra, India</span></div>
          <div className="contact-detail"><Mail size={19} aria-hidden="true" /><a href="mailto:support@nevixs.com">support@nevixs.com</a></div>
          <div className="contact-detail"><MessageCircle size={19} aria-hidden="true" /><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp {whatsappNumber}</a></div>
        </aside>
      </div>
    </section>
  </>;
}

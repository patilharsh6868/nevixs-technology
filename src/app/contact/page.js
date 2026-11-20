import { MapPin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import TrustBar from "@/components/TrustBar";
import { supportEmail, whatsappNumber, whatsappUrl } from "@/lib/site";
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
          <TrustBar />
        </div>
        <ContactForm />
        <aside className="contact-info" aria-label="Other ways to contact us">
          <div className="contact-detail"><MapPin size={19} aria-hidden="true" /><span>Pune, Maharashtra, India</span></div>
          <div className="contact-detail"><Mail size={19} aria-hidden="true" /><a href={`mailto:${supportEmail}`}>{supportEmail}</a></div>
          <div className="contact-detail"><MessageCircle size={19} aria-hidden="true" /><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp {whatsappNumber}</a></div>
        </aside>
      </div>
    </section>
    <section className="section approach-section" aria-labelledby="next-steps-heading">
      <div className="container">
        <div className="section-heading"><h2 className="section-title" id="next-steps-heading">What happens next</h2></div>
        <ol className="evaluation-steps">
          <li><span>01 / You send</span><h3>Your enquiry reaches us.</h3><p>The form goes straight to the Nevixs team. Include your company, team size, and the workflow you have in mind.</p></li>
          <li><span>02 / We reply</span><h3>We get in touch.</h3><p>We reply by email to understand your needs and suggest the most useful next step.</p></li>
          <li><span>03 / We talk</span><h3>Demo or project call.</h3><p>For Business OS, we walk through the modules you care about. For custom software, we discuss scope and approach.</p></li>
        </ol>
      </div>
    </section>
  </>;
}

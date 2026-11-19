import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms for using the Nevixs Technologies website at nevixs.com.",
  path: "/terms",
});

export default function TermsPage() {
  return <>
    <Breadcrumbs label="Terms of use" path="/terms" />
    <section className="page-hero"><div className="container"><h1>Terms of use</h1><p>Last updated: 19 November 2026</p></div></section>
    <article className="section legal-page"><div className="container legal-content">
      <p>These terms apply to your use of nevixs.com, operated by Nevixs Technologies, Pune, Maharashtra, India. By using this website, you agree to them.</p>

      <h2>About this website</h2>
      <p>This website provides general information about Nevixs Technologies, NEVIXS Business OS, and our custom software services. Screenshots, videos, and workflow examples use sample data and are for illustration only. Features, availability, and pricing are confirmed in a demo or written agreement, not by website content.</p>

      <h2>Business OS and other services</h2>
      <p>Use of NEVIXS Business OS at app.nevixs.com, and any custom software work, is governed by the separate terms or agreement we make with you. If those terms differ from these, the separate terms apply.</p>

      <h2>Acceptable use</h2>
      <p>Please do not misuse the website, including by attempting unauthorised access, interfering with its operation, sending spam through the contact form, or copying content for commercial use without permission.</p>

      <h2>Intellectual property</h2>
      <p>The Nevixs name, logo, website design, text, and images belong to Nevixs Technologies unless stated otherwise. You may view and share pages for personal or internal business reference.</p>

      <h2>Links to other websites</h2>
      <p>The website links to services such as Instagram and WhatsApp. We are not responsible for the content or practices of websites we do not operate.</p>

      <h2>No warranty</h2>
      <p>We work to keep the website accurate and available, but it is provided &quot;as is&quot; without guarantees that it will always be complete, current, or uninterrupted. To the extent permitted by law, Nevixs Technologies is not liable for losses arising from use of the website.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>Changes and contact</h2>
      <p>We may update these terms from time to time. Questions can be sent to <a href="mailto:support@nevixs.com">support@nevixs.com</a>.</p>
    </div></article>
  </>;
}

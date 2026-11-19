import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Nevixs Technologies collects, uses, and protects personal information submitted through nevixs.com.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <>
    <Breadcrumbs label="Privacy policy" path="/privacy" />
    <section className="page-hero"><div className="container"><h1>Privacy policy</h1><p>Last updated: 19 November 2026</p></div></section>
    <article className="section legal-page"><div className="container legal-content">
      <p>This policy explains how Nevixs Technologies (&quot;Nevixs&quot;, &quot;we&quot;, &quot;us&quot;), based in Pune, Maharashtra, India, handles personal information on this website, nevixs.com. NEVIXS Business OS at app.nevixs.com is a separate service; data stored in it is covered by the agreement you make with us when you use the app.</p>

      <h2>Information we collect</h2>
      <p><strong>Enquiries you send us.</strong> When you use the contact form, we collect your name, email address, the topic you choose, and your message. If you email us or message us on WhatsApp, we receive the details you share there.</p>
      <p><strong>Technical information.</strong> Our hosting provider, Cloudflare, processes standard request data such as your IP address, browser type, and the pages you request, so it can deliver the website and protect it from abuse.</p>
      <p>This website does not use advertising or analytics cookies, and we do not sell personal information.</p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and arrange demos or follow-up conversations.</li>
        <li>To understand your business requirements when discussing Business OS or custom software.</li>
        <li>To keep the website secure and working properly.</li>
      </ul>

      <h2>Service providers</h2>
      <p>We use trusted providers to run the website:</p>
      <ul>
        <li><strong>Cloudflare</strong> hosts the website and processes contact form submissions.</li>
        <li><strong>Resend</strong> delivers contact form submissions to our inbox by email.</li>
        <li><strong>Google Fonts</strong> serves the website&apos;s fonts, which means your browser connects to Google&apos;s servers.</li>
        <li><strong>WhatsApp</strong> handles messages if you choose to contact us there, under WhatsApp&apos;s own privacy policy.</li>
      </ul>
      <p>These providers may process information outside India.</p>

      <h2>How long we keep it</h2>
      <p>We keep enquiry details for as long as needed to respond and maintain a record of our business conversations, then delete them when they are no longer needed.</p>

      <h2>Your choices and rights</h2>
      <p>You can ask us to access, correct, or delete the personal information you have shared with us, or withdraw consent for us to contact you. Email <a href="mailto:support@nevixs.com">support@nevixs.com</a> and we will respond within a reasonable time.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top of this page shows when it was last changed.</p>

      <h2>Contact</h2>
      <p>For privacy questions or concerns, contact Nevixs Technologies at <a href="mailto:support@nevixs.com">support@nevixs.com</a>.</p>
    </div></article>
  </>;
}

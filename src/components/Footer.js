import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { whatsappUrl } from "@/components/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo />
            <p className="footer-note">Business OS and custom software.<br />Less friction. More useful work.</p>
          </div>
          <div className="footer-links">
            <div className="footer-group"><strong>Explore</strong><Link href="/erp">Business OS</Link><Link href="/about">About us</Link><Link href="/services">Services</Link><Link href="/blog">Insights</Link></div>
            <div className="footer-group"><strong>Connect</strong><a href="https://app.nevixs.com">Open Business OS <ArrowUpRight size={12} aria-hidden="true" /></a><Link href="/contact">Start a conversation <ArrowUpRight size={12} aria-hidden="true" /></Link><a href="mailto:support@nevixs.com">support@nevixs.com <ArrowUpRight size={12} aria-hidden="true" /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={12} aria-hidden="true" /></a><a href="https://www.instagram.com/nevixstechnologies/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12} aria-hidden="true" /></a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Nevixs Technologies</span><span className="footer-legal"><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link></span><span>Pune, India</span></div>
      </div>
    </footer>
  );
}

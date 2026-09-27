import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo light />
            <p className="footer-note">Thoughtful software for the way your business works today, and where it wants to go next.</p>
          </div>
          <div className="footer-links">
            <div className="footer-group"><strong>Explore</strong><Link href="/about">About us</Link><Link href="/services">Services</Link><Link href="/portfolio">Our work</Link><Link href="/blog">Insights</Link></div>
            <div className="footer-group"><strong>Connect</strong><Link href="/contact">Start a project <ArrowUpRight size={12} /></Link><a href="https://www.instagram.com/nevixstechnology/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Nevixs Technology</span><span>Chinchwad, Maharashtra, India</span><span>Made for what&apos;s next.</span></div>
      </div>
    </footer>
  );
}

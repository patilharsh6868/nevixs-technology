import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="product-hero">
      <div className="container">
        <div className="product-hero-heading">
          <span className="eyebrow">BUSINESS SOFTWARE BY NEVIXS TECHNOLOGIES</span>
          <h1>NEVIXS Business OS</h1>
          <p>Manage production, inventory, sales, and payroll in one workspace.</p>
          <div className="product-actions">
            <Link className="button" href="/contact?topic=erp">Request a demo</Link>
            <a className="button button-outline" href="https://app.nevixs.com">Open Business OS <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="product-preview" id="product-preview">
          <div className="preview-chrome" aria-hidden="true"><span /><span /><span /></div>
          <div className="product-tour-stage">
            <Image src="/erp-overview-page.png" alt="Business OS overview dashboard with sidebar navigation" width={1282} height={816} unoptimized />
          </div>
          <figcaption className="preview-toolbar">
            <span>Business OS screenshot &middot; Demo data</span>
            <Link href="/erp" className="text-action">Explore the modules <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

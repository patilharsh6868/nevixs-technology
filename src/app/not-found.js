import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>We couldn&apos;t find that page.</h1>
        <p>The link may be out of date, or the page may have moved. These pages might help:</p>
        <div className="product-actions">
          <Link href="/" className="button">Go to the homepage <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/erp" className="text-action">Business OS</Link>
          <Link href="/services" className="text-action">Services</Link>
          <Link href="/contact" className="text-action">Contact</Link>
        </div>
      </div>
    </section>
  );
}

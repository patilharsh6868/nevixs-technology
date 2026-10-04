import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Multi-business ERP",
  description: "Nevixs ERP is an upcoming platform for managing sales, inventory, purchases, and operations across multiple businesses.",
};

export default function ErpPage() {
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Nevixs ERP · Coming soon</span>
        <h1>A connected ERP system for multiple businesses.</h1>
        <p>Nevixs ERP is an upcoming business management system designed to bring sales, inventory, purchases, customers, suppliers, payments, expenses, and reports together in one place.</p>
      </div>
    </section>
    <ComingSoon />
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <div><span className="eyebrow">Have a question or idea?</span><h2>Let&apos;s talk about what your businesses need.</h2></div>
          <Link href="/contact" className="button button-dark">Get in touch <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  </>;
}

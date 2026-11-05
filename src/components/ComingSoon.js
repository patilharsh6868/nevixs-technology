import Link from "next/link";
import { ArrowUpRight, Boxes, Building2, Calculator, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  { icon: ShoppingCart, label: "Sales & customers", description: "Customers, quotes, and invoices, connected." },
  { icon: ShoppingBag, label: "Purchasing & suppliers", description: "Keep suppliers and purchase orders in view." },
  { icon: Boxes, label: "Production & inventory", description: "Follow materials, stock, and production work." },
  { icon: Calculator, label: "Finance & review", description: "Bring expenses, payments, and reports together." },
  { icon: Users, label: "HR & payroll", description: "Keep your people and payroll workflows close." },
  { icon: Building2, label: "Business & access", description: "Organize your workspace and team access." },
];

export default function ComingSoon() {
  return (
    <section className="section coming-soon-section" id="erp-platform">
      <div className="container coming-soon">
        <Reveal className="coming-soon-copy">
          <span className="eyebrow">Inside Business OS</span>
          <h2 className="section-title">A place for every<br /><span>part of the work.</span></h2>
          <p className="body-copy">From the first quote to the next payroll run, your teams need more than a collection of separate tools.</p>
          <p className="body-copy">Explore dedicated areas for customers, suppliers, stock, finance, and people, connected within Business OS.</p>
          <div className="product-actions"><Link className="button button-outline" href="/erp">See the modules <ArrowUpRight size={15} /></Link></div>
        </Reveal>
        <Reveal className="coming-soon-grid" delay={.1}>
          {features.map(({ icon: Icon, label, description }) => (
            <div className="coming-soon-chip" key={label}>
              <Icon size={19} strokeWidth={1.8} />
              <div><strong>{label}</strong><p>{description}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

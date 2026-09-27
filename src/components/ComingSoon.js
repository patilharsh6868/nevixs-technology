import Link from "next/link";
import { ArrowUpRight, BarChart3, Boxes, Calculator, CreditCard, ShoppingBag, ShoppingCart, Sparkles, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  { icon: ShoppingCart, label: "Sales & POS" },
  { icon: Boxes, label: "Inventory & Stock" },
  { icon: Users, label: "Customers & Suppliers" },
  { icon: Calculator, label: "Accounting & Expenses" },
  { icon: BarChart3, label: "Reports & Insights" },
  { icon: CreditCard, label: "Payments" },
  { icon: ShoppingBag, label: "Purchases" },
  { icon: Sparkles, label: "More features" },
];

export default function ComingSoon() {
  return (
    <section className="section coming-soon-section">
      <div className="container coming-soon">
        <Reveal className="coming-soon-copy">
          <span className="eyebrow">Introducing</span>
          <h2 className="section-title">NEVIXS <span>Complete Business ERP Platform</span></h2>
          <p className="body-copy">Powerful. Simple. All-in-one. Manage your sales, inventory, purchases, customers, suppliers, payments, accounting, expenses and reports — all from one easy-to-use platform.</p>
          <p className="body-copy">Whether you&apos;re a retailer, wholesaler, distributor, service business, or growing company, Nevixs is designed to bring your everyday business operations together.</p>
          <div className="coming-soon-badge"><span />Coming soon</div>
          <div><Link className="button button-dark" href="/contact">Get notified at launch <ArrowUpRight size={15} /></Link></div>
        </Reveal>
        <Reveal className="coming-soon-grid" delay={.1}>
          {features.map(({ icon: Icon, label }) => (
            <div className="coming-soon-chip" key={label}>
              <Icon size={19} strokeWidth={1.8} />
              <span>{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

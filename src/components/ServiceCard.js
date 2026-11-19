import { BarChart3, Bot, Boxes, Building2, CalendarDays, Cloud, Code2, CreditCard, Database, ShoppingBag, ShoppingCart, ShieldCheck, Sparkles } from "lucide-react";

const iconMap = {
  Boxes,
  BarChart3,
  Code2,
  ShieldCheck,
  Sparkles,
  CreditCard,
  ShoppingBag,
  ShoppingCart,
  Building2,
  Bot,
  CalendarDays,
  Database,
  Cloud,
};

export default function ServiceCard({ icon, title, description, tags = [] }) {
  const Icon = iconMap[icon] || Boxes;

  return (
    <article className="service-card">
      <div className="icon-box"><Icon size={21} strokeWidth={1.8} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

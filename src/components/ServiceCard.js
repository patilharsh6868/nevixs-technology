"use client";

import { motion } from "framer-motion";
import { Bot, Boxes, Building2, CalendarDays, Cloud, Code2, CreditCard, Database, ShoppingBag, ShieldCheck, Sparkles } from "lucide-react";

const iconMap = {
  Boxes,
  Code2,
  ShieldCheck,
  Sparkles,
  CreditCard,
  ShoppingBag,
  Building2,
  Bot,
  CalendarDays,
  Database,
  Cloud,
};

export default function ServiceCard({ icon, title, description, tags = [], index = 0 }) {
  const Icon = iconMap[icon] || Boxes;

  return (
    <motion.article className="service-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: index * .07 }}>
      <div className="icon-box"><Icon size={21} strokeWidth={1.8} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </motion.article>
  );
}

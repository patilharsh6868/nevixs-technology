"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Boxes, ContactRound, CreditCard, Users } from "lucide-react";

const modules = [
  { id: "erp", icon: Boxes, title: "ERP", description: "Operations, inventory & finance" },
  { id: "crm", icon: ContactRound, title: "CRM", description: "Sales & customer relationships" },
  { id: "hr", icon: Users, title: "HR", description: "People & team workflows" },
  { id: "payroll", icon: CreditCard, title: "Payroll", description: "Payroll alongside your people" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="eyebrow">By Nevixs Technologies · Available now</span>
          <h1>NEVIXS <span>Business OS</span></h1>
          <p className="hero-lead">ERP, CRM, HR & payroll.<br />One connected workspace.</p>
          <p className="hero-copy">Bring your operations, customer relationships, finances, and people together. Keep the work moving without losing the bigger picture.</p>
          <div className="hero-buttons">
            <a className="button" href="https://app.nevixs.com">Open Business OS <ArrowUpRight size={16} /></a>
            <Link className="button button-outline" href="/contact?topic=erp">Request a demo <ArrowUpRight size={16} /></Link>
          </div>
          <Link className="hero-explore" href="/erp">Explore the platform <ArrowDownRight size={16} /></Link>
        </motion.div>
        <nav className="hero-modules" aria-label="Business OS modules">
          {modules.map(({ id, icon: Icon, title, description }) => (
            <Link href={`/erp#${id}`} key={id}><Icon size={22} aria-hidden="true" /><strong>{title}</strong><span>{description}</span><ArrowUpRight className="module-arrow" size={16} aria-hidden="true" /></Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

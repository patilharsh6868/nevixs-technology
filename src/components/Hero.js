"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, BarChart3, Boxes, ClipboardList, LayoutDashboard, Package, ReceiptIndianRupee, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="eyebrow">Nevixs ERP · Coming soon · Built in India</span>
          <h1>One ERP for <span>every part of your business.</span></h1>
          <p className="hero-copy">Bring sales, stock, purchases, accounts, and day-to-day operations for your businesses into one clear workspace.</p>
          <div className="hero-buttons">
            <Link className="button" href="/contact">Talk to us about ERP <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline" href="#erp-platform">Explore the platform <ArrowDownRight size={16} /></Link>
          </div>
          <div className="hero-note"><span /> A connected view across teams, locations, and operations</div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} aria-label="Concept preview of a Nevixs business ERP interface">
          <div className="orbit one" /><div className="orbit two" />
          <div className="dashboard erp-preview">
            <div className="erp-sidebar"><div className="erp-mini-mark">N</div><span className="erp-side-active"><LayoutDashboard size={12} /> Overview</span><span><ReceiptIndianRupee size={12} /> Sales</span><span><Package size={12} /> Inventory</span><span><Users size={12} /> Customers</span><span><ClipboardList size={12} /> Reports</span></div>
            <div className="erp-main"><div className="dash-top"><span>All-business overview</span><span className="dash-status">ERP CONCEPT</span></div><div className="erp-welcome"><div><p className="dash-label">Business group</p><strong>Good morning, Nevixs</strong></div><span className="erp-avatar">NP</span></div><div className="erp-metrics"><div><span>Sales today</span><strong>₹48,250</strong><small>+12%</small></div><div><span>Stock items</span><strong>1,248</strong><small>+8%</small></div><div><span>Open orders</span><strong>36</strong><small>+4%</small></div></div><div className="erp-chart-head"><span>Sales overview</span><BarChart3 size={14} /></div><div className="chart" aria-hidden="true"><i style={{ height: "31%" }} /><i style={{ height: "44%" }} /><i style={{ height: "38%" }} /><i style={{ height: "57%" }} /><i style={{ height: "49%" }} /><i style={{ height: "70%" }} /><i style={{ height: "62%" }} /><i style={{ height: "84%" }} /><i style={{ height: "73%" }} /><i style={{ height: "96%" }} /></div><div className="dash-bottom"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div></div>
          </div>
          <div className="floating-tag"><Boxes size={15} /> Nevixs Core · UI concept</div>
        </motion.div>
      </div>
    </section>
  );
}

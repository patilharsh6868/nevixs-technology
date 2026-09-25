"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Layers3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="eyebrow">Independent software studio · India</span>
          <h1>Building Future-Ready <span>Apps &amp; Software</span></h1>
          <p className="hero-copy">Custom solutions for businesses, powered by innovation.</p>
          <div className="hero-buttons">
            <Link className="button" href="/contact">Get started <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline" href="/services">Explore services <ArrowDownRight size={16} /></Link>
          </div>
          <div className="hero-note"><span /> From first idea to your next big milestone</div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} aria-label="Illustration of a business analytics dashboard">
          <div className="orbit one" /><div className="orbit two" />
          <div className="dashboard">
            <div className="dash-top"><span>Business overview</span><span className="dash-status">LIVE SYSTEM</span></div>
            <p className="dash-label">Monthly revenue</p>
            <div className="dash-value">₹8,42,600 <small>+18.4%</small></div>
            <div className="chart" aria-hidden="true"><i style={{ height: "31%" }} /><i style={{ height: "44%" }} /><i style={{ height: "38%" }} /><i style={{ height: "57%" }} /><i style={{ height: "49%" }} /><i style={{ height: "70%" }} /><i style={{ height: "62%" }} /><i style={{ height: "84%" }} /><i style={{ height: "73%" }} /><i style={{ height: "96%" }} /></div>
            <div className="dash-bottom"><span>01 JUN</span><span>08 JUN</span><span>15 JUN</span><span>22 JUN</span><span>30 JUN</span></div>
          </div>
          <div className="floating-tag"><Layers3 size={15} /> Built around your business</div>
        </motion.div>
      </div>
    </section>
  );
}

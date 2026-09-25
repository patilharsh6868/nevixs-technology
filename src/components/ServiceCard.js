"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, tags = [], index = 0 }) {
  return (
    <motion.article className="service-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .45, delay: index * .07 }}>
      <div className="icon-box"><Icon size={21} strokeWidth={1.8} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </motion.article>
  );
}

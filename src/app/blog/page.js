import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Insights", description: "Ideas and practical notes on building useful software for growing businesses." };

const articles = [
  { category: "Product thinking", date: "Coming soon", title: "Start with the workflow, not the feature list.", copy: "A practical way to find the real problem hiding inside a software request." },
  { category: "Digital operations", date: "Coming soon", title: "When is it time to build a custom business app?", copy: "Signals that your process has outgrown spreadsheets and off-the-shelf tools." },
  { category: "Future tech", date: "Coming soon", title: "Making AI useful in everyday business software.", copy: "How to approach emerging capabilities with clear goals and sensible guardrails." },
];

export default function BlogPage() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Nevixs insights</span><h1>Notes on making technology useful.</h1><p>Ideas, perspectives, and practical lessons from the work of building software that fits.</p></div></section>
    <section className="section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">Perspectives from the studio</span><h2 className="section-title">A few ideas we&apos;re thinking about.</h2><p className="body-copy">Article previews are placeholders for upcoming updates.</p></Reveal><div className="insights-grid">{articles.map((article, index) => <Reveal className="blog-card" key={article.title} delay={index * .08}><div className="blog-meta">{article.category} <span style={{ margin: "0 7px" }}>·</span> {article.date}</div><h2>{article.title}</h2><p>{article.copy}</p><span className="blog-meta">Coming soon <ArrowUpRight size={13} style={{ verticalAlign: "middle" }} /></span></Reveal>)}</div><p className="body-copy" style={{ marginTop: 32, fontSize: 13 }}>Have a topic in mind? <Link href="/contact" style={{ color: "#007c6a", fontWeight: 700 }}>Suggest it to us <ArrowUpRight size={13} style={{ verticalAlign: "middle" }} /></Link></p></div></section>
  </>;
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Software & Business Operations Insights",
  description: "Preview upcoming Nevixs insights on business software, workflow design, custom applications, and practical technology for growing teams.",
  path: "/blog",
});

const articles = [
  { category: "Product thinking", title: "Start with the workflow, not the feature list.", copy: "A practical way to find the real problem hiding inside a software request." },
  { category: "Digital operations", title: "When is it time to build a custom business app?", copy: "Signals that your process has outgrown spreadsheets and off-the-shelf tools." },
  { category: "Future tech", title: "Making AI useful in everyday business software.", copy: "How to approach emerging capabilities with clear goals and sensible guardrails." },
];

export default function BlogPage() {
  return <>
    <Breadcrumbs label="Insights" path="/blog" />
    <section className="page-hero"><div className="container"><h1>Nevixs Insights</h1><p>Upcoming articles on business software and workflow design.</p></div></section>
    <section className="section"><div className="container">
      <div className="insights-grid">{articles.map(({ category, title, copy }) => (
        <article className="blog-card" key={title}><span className="blog-meta">{category}</span><h2>{title}</h2><p>{copy}</p></article>
      ))}</div>
      <Link href="/contact" className="text-action">Suggest a topic <ArrowUpRight size={14} /></Link>
    </div></section>
  </>;
}

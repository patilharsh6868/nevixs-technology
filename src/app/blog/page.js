import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";
import { insights } from "@/lib/insights";

export const metadata = pageMetadata({
  title: "Software & Business Operations Insights",
  description: "Practical Nevixs insights on business software, workflow design, custom applications, and technology for growing teams.",
  path: "/blog",
});

export default function BlogPage() {
  return <>
    <Breadcrumbs label="Insights" path="/blog" />
    <section className="page-hero"><div className="container"><h1>Nevixs Insights</h1><p>Practical notes on business software and workflow design.</p></div></section>
    <section className="section"><div className="container">
      <div className="insights-grid">{insights.map(({ slug, category, title, summary, readingTime }) => (
        <article className="blog-card" key={title}>
          <span className="blog-meta">{category}{slug ? ` · ${readingTime}` : " · Coming soon"}</span>
          <h2>{slug ? <Link href={`/blog/${slug}`}>{title}</Link> : title}</h2>
          <div><p>{summary}</p>{slug && <Link href={`/blog/${slug}`} className="text-action">Read the article <ArrowRight size={15} aria-hidden="true" /></Link>}</div>
        </article>
      ))}</div>
      <Link href="/contact" className="text-action">Suggest a topic <ArrowUpRight size={14} /></Link>
    </div></section>
  </>;
}

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata, siteUrl } from "@/lib/metadata";
import { insights } from "@/lib/insights";

const article = insights.find(({ slug }) => slug === "start-with-the-workflow");
const path = `/blog/${article.slug}`;

export const metadata = {
  ...pageMetadata({ title: article.title.replace(/\.$/, ""), description: article.description, path }),
};
metadata.openGraph = { ...metadata.openGraph, type: "article", publishedTime: article.published };

export default function WorkflowArticle() {
  return <>
    <Breadcrumbs label="Start with the workflow" path={path} parent={{ label: "Insights", path: "/blog" }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title.replace(/\.$/, ""),
      description: article.description,
      datePublished: article.published,
      dateModified: article.published,
      mainEntityOfPage: `${siteUrl}${path}`,
      image: `${siteUrl}/og-image.png`,
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
    }) }} />
    <article>
      <header className="page-hero article-hero">
        <div className="container">
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <p className="article-meta">Nevixs Technologies &middot; <time dateTime={article.published}>20 November 2026</time> &middot; {article.readingTime}</p>
        </div>
      </header>
      <div className="section article-body">
        <div className="container legal-content article-content">
          <p>Most software conversations start with a list. &quot;We need a CRM.&quot; &quot;We need inventory tracking.&quot; &quot;Can it do payroll?&quot; Lists feel concrete, and they are easy to compare across vendors. But a feature list describes possible solutions. It rarely describes the problem you are actually trying to solve.</p>
          <p>The problem usually lives in a workflow: the sequence of steps, people, and information that turns a customer enquiry into an invoice, or a purchase request into stock on the shelf. If you start there, the right features tend to become obvious. If you start with the list, it is easy to buy software that ticks every box and still leaves the same work stuck in the same places.</p>

          <h2>Why feature lists mislead</h2>
          <ul>
            <li><strong>Most tools tick the same boxes.</strong> Almost every business system lists customers, invoices, and reports. The checklist doesn&apos;t tell you how well any of them fit the way your team works.</li>
            <li><strong>The cost sits between the features.</strong> Time is often lost in the handoffs: re-typing a quote into an invoice, chasing an approval, or checking stock in a separate sheet. A feature list doesn&apos;t show handoffs.</li>
            <li><strong>Lists grow without priorities.</strong> Every team adds what it would like to have. Without a workflow, it is hard to tell which items matter and which are nice to have.</li>
          </ul>

          <h2>Map one workflow, end to end</h2>
          <p>Pick one workflow that matters to your business and happens often. For many teams, a good starting point is <em>customer enquiry to payment received</em>, or <em>purchase request to material in stock</em>. Then write down, in plain language:</p>
          <ol>
            <li><strong>The steps</strong>, in order, as they really happen today rather than how they should happen.</li>
            <li><strong>Who does each step</strong>, by role rather than by name.</li>
            <li><strong>What information moves</strong> from one step to the next, such as a quote amount, a delivery date, or an approval.</li>
            <li><strong>Where it waits</strong>, and for whom.</li>
            <li><strong>Which tool holds it</strong> at each point: a spreadsheet, an email thread, a notebook, or an existing system.</li>
          </ol>
          <p>Keep it to one page. The goal is a shared picture, not a perfect process diagram.</p>

          <h2>Look for the friction</h2>
          <p>Once the workflow is on paper, the friction usually stands out. Common signs include:</p>
          <ul>
            <li>The same information is typed in more than once.</li>
            <li>Work waits for an approval because nobody is sure who should give it.</li>
            <li>A spreadsheet acts as the glue between two systems.</li>
            <li>Someone has to ask a colleague for a status update instead of seeing it.</li>
            <li>Month-end or payroll needs a separate round of checking and copying.</li>
          </ul>

          <h2>Turn friction into requirements</h2>
          <p>Each point of friction can become a requirement written in terms of the work, not the tool. Compare these two styles:</p>
          <ul>
            <li>Feature style: &quot;Invoicing module.&quot;<br />Workflow style: &quot;When a quote is accepted, the invoice should use the same customer and line items without re-typing.&quot;</li>
            <li>Feature style: &quot;Approval system.&quot;<br />Workflow style: &quot;Each project stage needs a first and a final reviewer, and both should be recorded.&quot;</li>
            <li>Feature style: &quot;Inventory.&quot;<br />Workflow style: &quot;Before we raise a purchase order, we should see what is already in stock.&quot;</li>
          </ul>
          <p>Workflow-style requirements are easier to test, easier to prioritise, and much harder for any vendor to answer with a simple &quot;yes&quot;.</p>

          <h2>Use the workflow in a demo</h2>
          <p>A demo is most useful when it follows your workflow rather than a generic tour. Share your one-page workflow in advance and ask to see it handled step by step, ideally with an example that looks like your own work. Useful questions include:</p>
          <ul>
            <li>Where does each step happen, and who sees it next?</li>
            <li>What has to be entered more than once?</li>
            <li>How are approvals recorded, and what happens when one is missing?</li>
            <li>Which parts would need configuration, a change in how we work, or custom development?</li>
          </ul>

          <h2>Product or custom build?</h2>
          <p>Mapping the workflow also helps answer a bigger question. If most of your steps fit an existing product with small adjustments, a ready-made platform is usually the faster and simpler route. If a core step is specific to your business and gives you an edge, it may be worth building that part, or connecting a focused custom tool to the platform you use for everything else.</p>

          <h2>A short checklist</h2>
          <ol>
            <li>Choose one important, frequent workflow.</li>
            <li>Write the real steps, roles, information, waits, and tools on one page.</li>
            <li>Mark every point of friction.</li>
            <li>Rewrite each one as a workflow-style requirement.</li>
            <li>Bring that page to every demo and compare answers against it.</li>
          </ol>
          <p>Start small. One well-understood workflow will teach you more about the software you need than a long list of features.</p>
        </div>
      </div>
    </article>
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <div><span className="eyebrow">Bring your workflow</span><h2>Want to walk through yours in Business OS?</h2></div>
          <Link href="/contact?topic=erp" className="button">Request a demo <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <Link href="/blog" className="text-action article-back"><ArrowLeft size={15} aria-hidden="true" /> All insights</Link>
      </div>
    </section>
  </>;
}

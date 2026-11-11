import Link from "next/link";
import { siteUrl } from "@/lib/metadata";

export default function Breadcrumbs({ label, path }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${siteUrl}${path}` },
    ],
  };

  return (
    <>
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><span aria-hidden="true">/</span><span aria-current="page">{label}</span></li>
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}

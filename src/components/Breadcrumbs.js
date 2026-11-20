import Link from "next/link";
import { siteUrl } from "@/lib/metadata";

export default function Breadcrumbs({ label, path, parent }) {
  const trail = [{ name: "Home", path: "/" }, ...(parent ? [{ name: parent.label, path: parent.path }] : []), { name: label, path }];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(({ name, path: itemPath }, index) => ({ "@type": "ListItem", position: index + 1, name, item: `${siteUrl}${itemPath}` })),
  };

  return (
    <>
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          {parent && <li><span aria-hidden="true">/</span><Link href={parent.path}>{parent.label}</Link></li>}
          <li><span aria-hidden="true">/</span><span aria-current="page">{label}</span></li>
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}

export const siteUrl = "https://nevixs.com";
export const siteName = "Nevixs Technologies";
export const shareImage = { url: "/og-image.png", width: 1200, height: 630, alt: "NEVIXS Business OS: ERP, CRM, HR and payroll in one workspace" };

export function pageMetadata({ title, description, path }) {
  const searchTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: searchTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: searchTitle,
      description,
      images: [shareImage.url],
    },
  };
}

export const siteUrl = "https://nevixs.com";
export const siteName = "Nevixs Technologies";

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
    },
    twitter: {
      card: "summary",
      title: searchTitle,
      description,
    },
  };
}

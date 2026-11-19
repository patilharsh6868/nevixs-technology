const siteUrl = "https://nevixs.com";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = ["", "/about", "/erp", "/services", "/blog", "/contact", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : route === "/privacy" || route === "/terms" ? "yearly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.3 : 0.7,
  }));
}

const siteUrl = "https://nevixs.com";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/portfolio", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

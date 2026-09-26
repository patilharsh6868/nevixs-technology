const siteUrl = "https://nevixs.com";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/portfolio", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

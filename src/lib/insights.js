export const insights = [
  {
    slug: "start-with-the-workflow",
    category: "Product thinking",
    title: "Start with the workflow, not the feature list.",
    summary: "A practical way to find the real problem hiding inside a software request.",
    description: "Why business software decisions go better when you map one real workflow first, and how to turn its friction into clear requirements for a demo or a build.",
    published: "2026-11-20",
    readingTime: "6 min read",
  },
  { category: "Digital operations", title: "When is it time to build a custom business app?", summary: "Signals that your process has outgrown spreadsheets and off-the-shelf tools." },
  { category: "Future tech", title: "Making AI useful in everyday business software.", summary: "How to approach emerging capabilities with clear goals and sensible guardrails." },
];

export const publishedInsights = insights.filter((article) => article.slug);

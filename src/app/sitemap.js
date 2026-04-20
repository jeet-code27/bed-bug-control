export default function sitemap() {
  const BASE_URL = "https://bedbugsboston.us";

  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/commercial-bed-bug-control-boston`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPosts = [
    {
      slug: "how-did-i-get-bed-bugs-in-boston",
      lastModified: new Date("2026-04-20"),
    },
    {
      slug: "get-rid-of-bed-bugs-without-throwing-away-furniture",
      lastModified: new Date("2026-04-13"),
    },
    {
      slug: "bed-bugs-on-the-mbta-boston-t-prevention",
      lastModified: new Date("2026-04-03"),
    },
    {
      slug: "airbnb-bed-bug-control-boston",
      lastModified: new Date("2026-03-31"),
    },
    {
      slug: "why-boston-is-a-hotbed-for-bed-bugs",
      lastModified: new Date("2026-03-26"),
    },
    {
      slug: "bed-bug-treatment-boston-ma",
      lastModified: new Date("2026-03-24"),
    },
    {
      slug: "bed-bugs-in-boston-hidden-infestation",
      lastModified: new Date("2026-03-23"),
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}

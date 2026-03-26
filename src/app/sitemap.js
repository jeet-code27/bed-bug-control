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
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPosts = [
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

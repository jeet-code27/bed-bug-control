export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://bedbugsboston.us/sitemap.xml",
    host: "https://bedbugsboston.us",
  };
}

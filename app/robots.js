export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow:     "/",
        disallow:  ["/api/", "/_next/"],
      },
    ],
    sitemap:  "https://ypark.in/sitemap.xml",
    host:     "https://ypark.in",
  };
}
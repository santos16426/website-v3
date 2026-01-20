import { GetServerSideProps } from "next";
import { siteConfig } from "@/app/lib/seo";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  // Get the base URL from config or construct from request
  const baseUrl = siteConfig.url !== "https://yourdomain.com"
    ? siteConfig.url
    : req.headers.host
      ? `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`
      : siteConfig.url;

  const currentDate = new Date().toISOString().split("T")[0];

  // Since this is a single-page application with sections, we list the main page
  // with high priority as it contains all content sections (Home, About, Projects, Experience, Contact)
  const pages = [
    {
      url: baseUrl,
      changefreq: "weekly",
      priority: "1.0",
      lastmod: currentDate,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

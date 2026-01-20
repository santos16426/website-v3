import { GetServerSideProps } from "next";
import { siteConfig } from "@/app/lib/seo";

const RobotsTxt = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  // Get the base URL from config or construct from request
  const baseUrl = siteConfig.url !== "https://yourdomain.com"
    ? siteConfig.url
    : req.headers.host
      ? `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`
      : siteConfig.url;

  const sitemapUrl = `${baseUrl}/sitemap.xml`;

  const robotsTxt = `# robots.txt for ${siteConfig.name} Portfolio Website

# Allow all search engines to crawl the site
User-agent: *
Allow: /

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Disallow crawling of admin, API, and private areas (if any)
# Disallow: /admin/
# Disallow: /api/
# Disallow: /_next/
# Disallow: /private/

# Crawl-delay (optional - adjust if needed)
# Crawl-delay: 1

# Sitemap location
Sitemap: ${sitemapUrl}
`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default RobotsTxt;

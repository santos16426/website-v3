import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { defaultSEO, siteConfig } from "@/app/lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.openGraph.images[0].url,
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState(siteConfig.url);
  const [canonicalUrl, setCanonicalUrl] = useState(canonical || siteConfig.url);

  useEffect(() => {
    if (router.isReady) {
      const url = `${siteConfig.url}${router.asPath}`;
      setCurrentUrl(url);
      setCanonicalUrl(canonical || url);
    }
  }, [router.asPath, router.isReady, canonical]);

  const fullImageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta name="author" content={siteConfig.author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex || nofollow ? (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`}
        />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={defaultSEO.openGraph.type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={defaultSEO.openGraph.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={defaultSEO.twitter.card} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      {siteConfig.twitter.handle && (
        <>
          <meta name="twitter:creator" content={siteConfig.twitter.handle} />
          <meta name="twitter:site" content={siteConfig.twitter.site} />
        </>
      )}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="PH" />
      <meta name="geo.placename" content="Philippines" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#2E2D2B" />
      <meta name="msapplication-TileColor" content="#2E2D2B" />
      <meta
        name='google-site-verification'
        content='WIuJFRN2EcEe7Vk-pU2GhsSYylgHo-WoR4WNqrT6lqs'
      />

      {/* Apple Mobile Web App */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteConfig.name} />

      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Favicon - Multiple sizes for better browser support */}
      <link rel="icon" href="/images/icons/logo.svg" type="image/svg+xml" />
      <link rel="icon" href="/images/icons/logo.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/images/icons/logo.svg" />
      <link rel="shortcut icon" href="/images/icons/logo.svg" />
      <meta name="msapplication-TileImage" content="/images/icons/logo.svg" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default SEO;

import Head from "next/head";
import { NextComponentType } from "next";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/app/styles/globals.scss";
import { AppProps } from "next/app";
import SEO from "@/app/components/SEO";
import StructuredData from "@/app/components/StructuredData";
import ErrorBoundary from "@/app/components/ErrorBoundary";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js";
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "2a1fe1db-23eb-4563-ab83-6a0b6e1f05a6";
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-EEP47F23K1";

  // Track pageviews for Google Analytics
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", gaId, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, gaId]);

  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <SEO />
      <StructuredData />
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Umami Analytics */}
      <Script
        defer
        src={umamiScriptUrl}
        data-website-id={umamiWebsiteId}
        strategy="afterInteractive"
      />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
};

export default MyApp;

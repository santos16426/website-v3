import Head from "next/head";
import { siteConfig } from "@/app/lib/seo";

const StructuredData = () => {
  // Build sameAs array with only defined social links
  const sameAs = [
    siteConfig.linkedin,
    siteConfig.github,
    siteConfig.instagram,
    siteConfig.facebook,
    siteConfig.codepen,
  ].filter((link): link is string => Boolean(link));

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    ...(sameAs.length > 0 && { sameAs }),
    knowsAbout: siteConfig.keywords,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH",
      addressLocality: "Philippines",
    },
    email: "santos16426@gmail.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - Software Engineering Services`,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </Head>
  );
};

export default StructuredData;

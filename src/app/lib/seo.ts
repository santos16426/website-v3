export const siteConfig = {
  name: "Billy Santos",
  title: "Billy Santos | Software Engineer",
  description: "Software Engineer from the Philippines. Expert in crafting websites and mobile apps that blend creativity with functionality for brands and agencies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://billyjoesantos.vercel.app",
  ogImage: "/images/profile.jpg",
  author: "Billy Santos",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Philippines",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  twitter: {
    handle: "@lucas_gif", // Instagram handle used as Twitter alternative
    site: "@lucas_gif",
  },
  linkedin: "https://www.linkedin.com/in/billy-santos/",
  github: "https://github.com/santos16426",
  instagram: "https://www.instagram.com/lucas.gif/",
  facebook: "https://www.facebook.com/joeee.lucas",
  codepen: "https://codepen.io/joe_lucas",
};

export const defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
    creator: siteConfig.twitter.handle,
  },
};

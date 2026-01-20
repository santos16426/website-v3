# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Therapy Clinic Management project** - Added new case study project to portfolio with NextJS, TypeScript, TailwindCSS, and NodeJS tech stack
- **About Me section redesign** - Complete redesign of About Me component with interactive grid layout featuring location map, social links, photo gallery, typing speed stats, and GitHub contributions calendar
- **GitHub calendar integration** - Added react-github-calendar to display contribution activity with custom styling
- **Typing speed widget** - Integrated MonkeyType API to display typing speed (WPM) and accuracy stats
- **Photo gallery component** - Enhanced Gallery component with improved image display settings
- **Date formatting utility** - Added date-fns dependency for date formatting in GitHub repo display
- **SEO optimization** - Comprehensive SEO implementation with meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- **SEO component** - Created reusable SEO component with dynamic meta tag generation
- **Structured data** - Added JSON-LD schemas for Person, Website, and ProfessionalService
- **Sitemap generation** - Dynamic sitemap.xml route for search engine indexing
- **Robots.txt** - Dynamic robots.txt route with proper search engine directives
- **PWA support** - Added manifest.json for Progressive Web App functionality
- **Google Analytics** - Integrated Google Analytics 4 (GA4) with pageview tracking
- **Umami Analytics** - Added privacy-focused Umami analytics integration
- **Social media links** - Updated SEO config with real LinkedIn, GitHub, Instagram, Facebook, and CodePen profiles
- **TypeScript definitions** - Added gtag type definitions for Google Analytics

### Changed
- **AboutMe component** - Refactored from simple grid to comprehensive interactive dashboard with multiple widgets
- **Gallery component** - Updated image display from object-cover to object-contain for better image presentation
- **Next.js version** - Updated from 14.0.4 to ^14.2.35
- **Global styles** - Added custom styles for GitHub calendar tooltip and activity display
- **Homepage component** - Improved mobile responsiveness with better text sizing, spacing, and layout
- **ContactMe component** - Enhanced mobile responsiveness and removed bold styling from text
- **Experience component** - Fixed mobile text sizing and improved readability
- **_app.tsx** - Added SEO components, analytics scripts, and proper meta tag management
- **Image accessibility** - Improved alt texts and added aria-labels for better screen reader support

### Fixed
- **Mobile responsiveness** - Fixed text sizing issues on mobile devices across Homepage, ContactMe, and Experience components
- **Hydration errors** - Resolved Suspense boundary hydration issues in SEO components
- **Sitemap conflict** - Removed conflicting static sitemap.xml file in favor of dynamic route
- **Structured data** - Fixed social media links in JSON-LD to properly filter undefined values
- **Build error** - Fixed TypeScript type error in map.tsx where version property needed literal type 8 instead of number
- **Accessibility - Invalid HTML** - Removed buttons nested inside anchor tags (invalid HTML structure)
- **Accessibility - Missing ARIA labels** - Added aria-labels to all icon-only buttons and interactive elements
- **Accessibility - Clickable spans** - Converted clickable span elements to proper button elements
- **Accessibility - Keyboard navigation** - Added keyboard event handlers (Enter/Space) for all interactive elements
- **Accessibility - Focus indicators** - Added visible focus-visible styles for keyboard navigation
- **Accessibility - Semantic HTML** - Changed paragraph headings to proper h1/h2 tags and added semantic section/main elements
- **Accessibility - Color contrast** - Improved text color contrast (gray-300 to gray-600) for better readability
- **Accessibility - Skip link** - Added skip-to-main-content link for screen reader users
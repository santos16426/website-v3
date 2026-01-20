# SEO Testing Guide

## Quick Testing Methods

### 1. **Browser DevTools - View Meta Tags**
- Open your site in browser
- Right-click → "View Page Source" or press `Ctrl+U` (Windows) / `Cmd+U` (Mac)
- Search for `<meta` tags to verify they're present
- Check for:
  - `<meta name="description" content="...">`
  - `<meta property="og:title" content="...">`
  - `<meta property="og:image" content="...">`
  - `<meta name="twitter:card" content="...">`

### 2. **Browser Console - Check Structured Data**
Open browser console (F12) and run:
```javascript
// Check for structured data
document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
  console.log(JSON.parse(script.textContent));
});
```

### 3. **Online SEO Testing Tools**

#### **Meta Tags & Open Graph**
- **https://www.opengraph.xyz/** - Test Open Graph tags
- **https://metatags.io/** - Preview how your site appears on social media
- **https://developers.facebook.com/tools/debug/** - Facebook Sharing Debugger

#### **Structured Data**
- **https://validator.schema.org/** - Validate JSON-LD structured data
- **https://search.google.com/test/rich-results** - Google Rich Results Test

#### **General SEO**
- **https://www.seobility.net/en/seocheck/** - Comprehensive SEO check
- **https://www.seoptimer.com/** - SEO audit tool

### 4. **Test Sitemap**
Visit: `http://localhost:3000/sitemap.xml` (or your domain + `/sitemap.xml`)
- Should return valid XML
- Should list all your pages

### 5. **Test Robots.txt**
Visit: `http://localhost:3000/robots.txt` (or your domain + `/robots.txt`)
- Should display your robots.txt content

### 6. **Google Search Console** (After Deployment)
1. Deploy your site
2. Go to https://search.google.com/search-console
3. Add your property
4. Verify ownership (use the Google site verification meta tag)
5. Submit sitemap: `yourdomain.com/sitemap.xml`
6. Check for indexing issues

### 7. **Social Media Preview Tools**
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/

## Quick Test Checklist

- [ ] Meta description appears in page source
- [ ] Open Graph tags present (og:title, og:description, og:image)
- [ ] Twitter Card tags present
- [ ] Canonical URL is set correctly
- [ ] Structured data (JSON-LD) is valid
- [ ] Sitemap.xml is accessible and valid
- [ ] Robots.txt is accessible
- [ ] Page title is correct
- [ ] Images have proper alt attributes
- [ ] Mobile viewport meta tag is present

## Testing Commands

### Test locally:
```bash
# Start dev server
npm run dev

# Then visit:
# http://localhost:3000
# http://localhost:3000/sitemap.xml
# http://localhost:3000/robots.txt
```

### Test structured data locally:
```bash
# Install a local testing tool (optional)
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

## Common Issues to Check

1. **Missing meta tags** - Check page source
2. **Broken images** - Verify og:image URLs are absolute
3. **Invalid JSON-LD** - Use schema.org validator
4. **Sitemap not found** - Check file exists and is accessible
5. **Robots.txt not working** - Verify file is in /public folder

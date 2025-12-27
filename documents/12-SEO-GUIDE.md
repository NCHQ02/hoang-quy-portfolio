# 🔍 SEO Guide

## Search Engine Optimization for Portfolio

---

## 1. Current SEO Setup

Located in `index.html`:

```html
<title>Hoang Quy Portfolio | Automation Marketing Specialist</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="Hoang Quy" />
<meta name="robots" content="index, follow" />
```

---

## 2. Essential Meta Tags

### Basic Tags

```html
<title>Your Name | Your Role</title>
<meta name="description" content="150-160 character description" />
<meta name="author" content="Your Name" />
```

### Open Graph (Facebook/LinkedIn)

```html
<meta property="og:title" content="Your Name | Portfolio" />
<meta property="og:description" content="Description here" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
<meta property="og:url" content="https://yoursite.com" />
<meta property="og:type" content="website" />
```

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Name | Portfolio" />
<meta name="twitter:description" content="Description" />
<meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg" />
```

---

## 3. Structured Data (JSON-LD)

Add to `index.html` before `</head>`:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hoang Quy",
    "jobTitle": "Automation Marketing Specialist",
    "url": "https://yoursite.com",
    "sameAs": [
      "https://linkedin.com/in/yourprofile",
      "https://github.com/yourusername"
    ]
  }
</script>
```

---

## 4. Technical SEO

### Canonical URL

```html
<link rel="canonical" href="https://yoursite.com/" />
```

### Favicon

```html
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2024-12-27</lastmod>
  </url>
</urlset>
```

### Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

---

## 5. Content SEO

### Heading Structure

- One `<h1>` per page (Hero title)
- Logical `<h2>` → `<h3>` hierarchy
- Descriptive, keyword-rich

### Image Alt Text

```html
<img src="project.jpg" alt="n8n automation workflow dashboard" />
```

### Internal Links

Link between sections for better crawling.

---

## 6. Performance = SEO

Google considers:

- **Core Web Vitals** (LCP, FID, CLS)
- **Mobile-friendliness**
- **HTTPS** (Vercel provides this)

---

## 7. SEO Checklist

### Meta Tags

- [ ] Title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter Card tags

### Technical

- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Favicon set
- [ ] HTTPS enabled
- [ ] Mobile responsive

### Content

- [ ] One H1 per page
- [ ] Alt text on images
- [ ] Descriptive URLs

### Verification

- [ ] Google Search Console
- [ ] Bing Webmaster Tools

---

## 8. Testing Tools

| Tool                                                              | Purpose           |
| ----------------------------------------------------------------- | ----------------- |
| [Google Search Console](https://search.google.com/search-console) | Indexing status   |
| [PageSpeed Insights](https://pagespeed.web.dev/)                  | Performance       |
| [Rich Results Test](https://search.google.com/test/rich-results)  | Structured data   |
| [Meta Tags Check](https://metatags.io/)                           | Preview meta tags |

---

_SEO Guide v1.0_

# 🚀 Deployment Guide

## Deploying "Figma in MacOS" Portfolio

---

## 1. Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed and configured
- Vercel account (free tier works)

---

## 2. Local Development

### First-Time Setup

```bash
# Clone repository
git clone <repository-url>
cd hoàng-quý-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server

```
http://localhost:5173
```

Hot reload is enabled - changes will reflect immediately.

---

## 3. Production Build

### Build Command

```bash
npm run build
```

### Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

### Preview Production Build

```bash
npm run preview
```

Opens at `http://localhost:4173`

---

## 4. Deploy to Vercel (Recommended)

### Option A: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B: Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite config
6. Click "Deploy"

### Build Settings (Auto-detected)

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |
| Install Command  | `npm install`   |

---

## 5. Vercel Configuration

### vercel.json

```json
{
  "routes": [
    {
      "src": "/[^.]+",
      "dest": "/",
      "status": 200
    }
  ]
}
```

This ensures SPA routing works correctly.

### Environment Variables

Set in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Value      | Environment |
| -------- | ---------- | ----------- |
| `VITE_*` | Your value | All         |

---

## 6. Custom Domain

### In Vercel Dashboard:

1. Go to Project → Settings → Domains
2. Add your domain (e.g., `hoangquy.dev`)
3. Update DNS records as instructed

### DNS Configuration

| Type  | Name | Value                  |
| ----- | ---- | ---------------------- |
| A     | @    | `76.76.21.21`          |
| CNAME | www  | `cname.vercel-dns.com` |

---

## 7. Analytics Setup

### Vercel Analytics (Built-in)

Already configured in `App.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// In component
<Analytics />
<SpeedInsights />
```

View analytics at: Vercel Dashboard → Project → Analytics

### Google Tag Manager

Container ID: `GTM-5CC7VK8D`

Already integrated in `index.html`. To update:

1. Login to [tagmanager.google.com](https://tagmanager.google.com)
2. Modify tags, triggers, variables
3. Publish changes

---

## 8. Alternative Deployment Platforms

### Netlify

1. Connect to Git repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy

### GitHub Pages

1. Add to `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/repository-name/",
  // ...
});
```

2. Build and push to `gh-pages` branch:

```bash
npm run build
npx gh-pages -d dist
```

### Cloudflare Pages

1. Connect to Git repository
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Deploy

---

## 9. Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test animations on desktop
- [ ] Test mobile responsiveness
- [ ] Check custom cursor works (desktop)
- [ ] Verify Analytics tracking
- [ ] Test GTM events firing
- [ ] Check page speed (Lighthouse)
- [ ] Verify meta tags and SEO
- [ ] Test all navigation links
- [ ] Check project detail pages

---

## 10. Continuous Deployment

With Vercel Git integration:

1. Push to `main` branch → Production deploy
2. Push to feature branch → Preview deploy
3. Each PR gets a unique preview URL

### Branch Protection (Recommended)

- Require PR reviews before merging to `main`
- Run build check before merge

---

## 11. Rollback

### Via Vercel Dashboard

1. Go to Project → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Via CLI

```bash
vercel rollback
```

---

## 12. Monitoring

### Vercel Speed Insights

- Real user metrics
- Core Web Vitals
- Error tracking

### Google Tag Manager

- Custom events
- User behavior
- Conversion tracking

---

## 13. Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Not Working

Ensure `vercel.json` has the catch-all route configured.

### Assets Not Loading

Check `base` in `vite.config.ts` matches deployment path.

### Tailwind Styles Missing

Verify CDN script is loading in `index.html`.

---

_Deployment Guide v1.0 - December 2024_

# ⚡ Performance Guide

## Optimizing "Figma in MacOS" Portfolio

---

## 1. Current Performance Characteristics

### Heavy Elements

- Custom cursor with spring physics
- Multiple parallax layers
- Framer Motion animations
- Backdrop blur effects
- Grid background with spotlight

### Desktop-Focused

The full experience is optimized for desktop. Mobile receives a simplified version.

---

## 2. Built-in Optimizations

### Mobile Simplification

```tsx
// Widgets hidden on mobile
className = "hidden md:block";
className = "hidden lg:block";
className = "hidden xl:flex";
```

### Animation Optimization

```tsx
// One-time animations
viewport={{ once: true }}

// Spring physics (GPU-optimized)
transition={{ type: "spring", ... }}
```

---

## 3. Image Optimization

### Format Recommendations

| Format   | Use Case               |
| -------- | ---------------------- |
| **WebP** | Photos, complex images |
| **SVG**  | Icons, logos           |
| **PNG**  | Transparency needed    |
| **JPEG** | Photos (fallback)      |

### Compression Tools

- [Squoosh](https://squoosh.app/) - Browser-based
- [TinyPNG](https://tinypng.com/) - PNG/JPEG
- [SVGO](https://jakearchibald.github.io/svgomg/) - SVG

### Lazy Loading

```tsx
<img loading="lazy" src="..." alt="..." />
```

---

## 4. Animation Performance

### ✅ GPU-Accelerated Properties

- `transform` (translate, scale, rotate)
- `opacity`

### ❌ Avoid Animating

- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `box-shadow` (use opacity instead)

### Spring Config for Performance

```tsx
// Lighter spring = less computation
{ damping: 30, stiffness: 200 }

// Avoid very low damping (too bouncy)
// Avoid very high stiffness (too snappy)
```

---

## 5. Reduce Motion for Accessibility

```tsx
// Check user preference
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Simplified animation
const animation = prefersReducedMotion
  ? { opacity: 1 }
  : { opacity: 1, y: 0, scale: 1 };
```

---

## 6. Code Splitting (Future)

For larger portfolios:

```tsx
// Lazy load project details
const ProjectDetailN8n = React.lazy(
  () => import("./components/ProjectDetailN8n")
);

// With Suspense
<Suspense fallback={<Loading />}>
  <ProjectDetailN8n />
</Suspense>;
```

---

## 7. Font Optimization

### Current Approach

Fonts loaded via Google Fonts with `display=swap`.

### Optimization Tips

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Limit font weights -->
?family=Inter:wght@400;600;700
<!-- Not 300-900 -->
```

---

## 8. Lighthouse Targets

| Metric         | Target | Notes                           |
| -------------- | ------ | ------------------------------- |
| Performance    | 80+    | Heavy animations may lower this |
| Accessibility  | 90+    | Custom cursor needs attention   |
| Best Practices | 90+    | Should be achievable            |
| SEO            | 90+    | Meta tags help                  |

### Run Lighthouse

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select categories
4. Click "Analyze page load"

---

## 9. Monitoring

### Vercel Analytics

Already integrated via:

```tsx
<Analytics />
<SpeedInsights />
```

### Core Web Vitals

| Metric  | Good    | Needs Work |
| ------- | ------- | ---------- |
| **LCP** | < 2.5s  | > 4s       |
| **FID** | < 100ms | > 300ms    |
| **CLS** | < 0.1   | > 0.25     |

---

## 10. Quick Wins Checklist

- [ ] Compress all images
- [ ] Use WebP format
- [ ] Limit font weights
- [ ] Add `loading="lazy"` to images
- [ ] Use `viewport={{ once: true }}`
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check Vercel Analytics

---

_Performance Guide v1.0_

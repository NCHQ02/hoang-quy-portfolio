# 🛠️ Tech Stack

## Technologies & Dependencies

---

## 1. Core Technologies

| Technology     | Version | Purpose                 |
| -------------- | ------- | ----------------------- |
| **React**      | 19.2.1  | UI Framework            |
| **TypeScript** | 5.8.2   | Type Safety             |
| **Vite**       | 6.2.0   | Build Tool & Dev Server |

---

## 2. Dependencies

### Production Dependencies

```json
{
  "@vercel/analytics": "^1.6.1", // Page view analytics
  "@vercel/speed-insights": "^1.3.1", // Performance monitoring
  "framer-motion": "^12.23.25", // Animation library
  "react": "^19.2.1", // UI framework
  "react-dom": "^19.2.1" // React DOM renderer
}
```

### Development Dependencies

```json
{
  "@types/node": "^22.14.0", // Node.js types
  "@vitejs/plugin-react": "^5.0.0", // Vite React plugin
  "typescript": "~5.8.2", // TypeScript compiler
  "vite": "^6.2.0" // Build tool
}
```

---

## 3. Styling Approach

### Tailwind CSS (via CDN)

The project uses Tailwind CSS loaded via CDN in `index.html`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Custom Tailwind Configuration

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#171717",
        primary: "#3b82f6",
        secondary: "#6366f1",
        text: "#ededed",
        muted: "#a1a1aa",
        accent: "#a3e635",
        "design-purple": "#8b5cf6",
        "design-blue": "#3b82f6",
        "design-green": "#4ade80",
        "design-yellow": "#facc15",
        "design-pink": "#f472b6",
        "design-orange": "#ff4500",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        script: ['"La Belle Aurore"', "cursive"],
        display: ['"Fredoka"', "sans-serif"],
      },
    },
  },
};
```

---

## 4. Fonts

### Google Fonts

Loaded via `@import`:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=La+Belle+Aurore&family=Fredoka:wght@400;500;600;700&display=swap");
```

| Font                | Weights | Usage              |
| ------------------- | ------- | ------------------ |
| **Inter**           | 300-900 | Body, UI           |
| **La Belle Aurore** | 400     | Handwriting accent |
| **Fredoka**         | 400-700 | Display, headings  |

---

## 5. Analytics & Tracking

### Vercel Analytics

```tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// In App.tsx
<Analytics />
<SpeedInsights />
```

### Google Tag Manager

```html
<!-- GTM Container: GTM-5CC7VK8D -->
<script>
  (function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-5CC7VK8D');
</script>
```

---

## 6. Build Configuration

### Vite Config (vite.config.ts)

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Additional config...
});
```

### TypeScript Config (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["*.tsx", "components/**/*.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 7. Deployment

### Vercel Configuration (vercel.json)

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

### Environment Variables

| Variable | Location     | Purpose              |
| -------- | ------------ | -------------------- |
| `VITE_*` | `.env.local` | Client-side env vars |

---

## 8. NPM Scripts

```json
{
  "scripts": {
    "dev": "vite", // Start dev server
    "build": "vite build", // Production build
    "preview": "vite preview" // Preview production build
  }
}
```

### Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev            # → http://localhost:5173

# Build for production
npm run build          # → dist/

# Preview production build
npm run preview        # → http://localhost:4173
```

---

## 9. Import Maps (index.html)

For ESM imports in browser:

```html
<script type="importmap">
  {
    "imports": {
      "react/": "https://aistudiocdn.com/react@^19.2.1/",
      "react": "https://aistudiocdn.com/react@^19.2.1",
      "framer-motion": "https://aistudiocdn.com/framer-motion@^12.23.25",
      "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.1/"
    }
  }
</script>
```

---

## 10. File Structure

```
hoàng-quý-portfolio/
├── components/           # React components
│   ├── About.tsx
│   ├── BrowserHeader.tsx
│   ├── Contact.tsx
│   ├── Dock.tsx
│   ├── FlowConnector.tsx
│   ├── Footer.tsx
│   ├── GlobalCursor.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectDetailData.tsx
│   ├── ProjectDetailN8n.tsx
│   ├── ProjectDetailVibe.tsx
│   ├── Projects.tsx
│   ├── Resume.tsx
│   ├── SkillsServices.tsx
│   ├── TableOfContents.tsx
│   └── Testimonials.tsx
├── documents/            # Documentation
├── public/               # Static assets
├── App.tsx               # Main app component
├── constants.ts          # Static data
├── index.html            # HTML entry
├── index.tsx             # React entry
├── types.ts              # TypeScript types
├── package.json          # Dependencies
├── tsconfig.json         # TS config
├── vite.config.ts        # Vite config
└── vercel.json           # Vercel config
```

---

## 11. Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: Custom cursor and heavy animations are desktop-focused. Mobile receives simplified experience.

---

_Tech Stack Documentation v1.0 - December 2024_

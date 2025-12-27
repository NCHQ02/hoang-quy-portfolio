# ⚡ Quick Start Guide

## Get Up and Running in 5 Minutes

---

## 1. Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([download](https://git-scm.com/))

---

## 2. Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd hoàng-quý-portfolio

# Install dependencies
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

🚀 Open **http://localhost:5173** in your browser.

---

## 4. Make Your First Change

### Update Your Name

Edit `constants.ts`:

```typescript
export const AUTHOR_NAME = "YOUR NAME";
export const AUTHOR_ROLE = "Your Role Here";
```

### Update Hero Text

Edit `components/Hero.tsx` line ~322:

```typescript
const roles = ["YOUR", "SKILLS", "HERE"];
```

---

## 5. Build for Production

```bash
npm run build
```

Output in `dist/` folder.

---

## 6. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 7. Project Structure

```
├── components/     ← React components
├── documents/      ← Documentation (you are here)
├── public/         ← Static assets
├── App.tsx         ← Main app
├── constants.ts    ← Your info
├── index.html      ← HTML entry
└── package.json    ← Dependencies
```

---

## 8. Key Files to Customize

| What         | Where                           |
| ------------ | ------------------------------- |
| Name & Role  | `constants.ts`                  |
| Hero section | `components/Hero.tsx`           |
| About info   | `components/About.tsx`          |
| Projects     | `components/Projects.tsx`       |
| Skills       | `components/SkillsServices.tsx` |
| Contact      | `components/Contact.tsx`        |
| SEO/Meta     | `index.html`                    |

---

## 9. Commands Reference

| Command           | Description      |
| ----------------- | ---------------- |
| `npm run dev`     | Start dev server |
| `npm run build`   | Production build |
| `npm run preview` | Preview build    |

---

## Need More Help?

- [Design System](./02-DESIGN-SYSTEM.md)
- [Component Guide](./03-COMPONENT-GUIDE.md)
- [Content Guide](./07-CONTENT-GUIDE.md)
- [Deployment Guide](./06-DEPLOYMENT-GUIDE.md)

---

_Quick Start v1.0_

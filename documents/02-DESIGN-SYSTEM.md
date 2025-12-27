# 🎨 Design System

## "Figma in MacOS" Design Language

---

## 1. Color Palette

### Primary Colors

| Name           | Hex       | CSS Variable    | Usage              |
| -------------- | --------- | --------------- | ------------------ |
| **Background** | `#0a0a0a` | `bg-background` | Main background    |
| **Surface**    | `#171717` | `bg-surface`    | Cards, panels      |
| **Primary**    | `#3b82f6` | `bg-primary`    | CTAs, highlights   |
| **Secondary**  | `#6366f1` | `bg-secondary`  | Secondary elements |
| **Text**       | `#ededed` | `text-text`     | Primary text       |
| **Muted**      | `#a1a1aa` | `text-muted`    | Secondary text     |
| **Accent**     | `#a3e635` | `text-accent`   | Handwriting style  |

### Design Colors (Figma-inspired)

| Name              | Hex       | CSS Variable    | Usage                  |
| ----------------- | --------- | --------------- | ---------------------- |
| **Design Purple** | `#8b5cf6` | `design-purple` | Figma/Creative accents |
| **Design Blue**   | `#3b82f6` | `design-blue`   | React/Tech accents     |
| **Design Green**  | `#4ade80` | `design-green`  | Success, code strings  |
| **Design Yellow** | `#facc15` | `design-yellow` | Warnings, JavaScript   |
| **Design Pink**   | `#f472b6` | `design-pink`   | Selection, cursor      |
| **Design Orange** | `#ff4500` | `design-orange` | Alerts, highlights     |

### Color Visualization

```
┌────────────────────────────────────────────────────────────┐
│  DARK MODE PALETTE                                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ██████  Background    #0a0a0a                            │
│  ██████  Surface       #171717                            │
│  ██████  Design Blue   #3b82f6                            │
│  ██████  Design Purple #8b5cf6                            │
│  ██████  Design Green  #4ade80                            │
│  ██████  Design Yellow #facc15                            │
│  ██████  Design Pink   #f472b6                            │
│  ██████  Design Orange #ff4500                            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 2. Typography

### Font Families

| Family              | Usage                       | Load Priority |
| ------------------- | --------------------------- | ------------- |
| **Inter**           | Body text, UI               | Primary       |
| **La Belle Aurore** | Handwriting, personal touch | Secondary     |
| **Fredoka**         | Display, fun headings       | Tertiary      |

### Font Weights (Inter)

| Weight | Class           | Usage           |
| ------ | --------------- | --------------- |
| 300    | `font-light`    | Body paragraphs |
| 400    | `font-normal`   | Default text    |
| 500    | `font-medium`   | Emphasis        |
| 600    | `font-semibold` | UI labels       |
| 700    | `font-bold`     | Headings        |
| 900    | `font-black`    | Hero typography |

### Type Scale

```
Hero H1:     12vw / 9rem    font-black    tracking-tighter
Section H2:  3xl / 4xl      font-bold
Card Title:  lg / xl        font-semibold
Body:        sm / base      font-light    leading-relaxed
Caption:     xs / 10px      font-medium   tracking-wider
Mono:        10px           font-mono     (code snippets)
```

---

## 3. Spacing & Layout

### Grid System

- **Grid Size**: 40px × 40px (visible in background)
- **Container Max Width**: 90vw
- **Section Padding**: py-20 to py-32

### Spacing Scale

| Size | Pixels | Usage           |
| ---- | ------ | --------------- |
| 0.5  | 2px    | Micro gaps      |
| 1    | 4px    | Icon spacing    |
| 2    | 8px    | Compact padding |
| 3    | 12px   | Small gaps      |
| 4    | 16px   | Default padding |
| 6    | 24px   | Medium gaps     |
| 8    | 32px   | Section spacing |
| 12   | 48px   | Large sections  |
| 16   | 64px   | Hero spacing    |

---

## 4. Border & Radius

### Border Styles

```css
/* Standard subtle border */
border border-white/10

/* Hover state */
border border-white/20

/* Active/Focus state */
border border-design-blue/50

/* Glow effect */
ring-2 ring-design-blue/30
```

### Border Radius

| Size    | Class          | Usage          |
| ------- | -------------- | -------------- |
| Small   | `rounded-sm`   | Buttons        |
| Default | `rounded-lg`   | Cards          |
| Large   | `rounded-xl`   | Panels         |
| Full    | `rounded-full` | Pills, avatars |
| 2XL     | `rounded-2xl`  | Large cards    |

---

## 5. Shadows & Effects

### Glassmorphism Recipe

```css
/* Standard glass effect */
.glass {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Tailwind equivalent */
bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10
```

### Shadow Levels

| Level  | Class                                    | Usage            |
| ------ | ---------------------------------------- | ---------------- |
| Subtle | `shadow-lg`                              | Cards            |
| Medium | `shadow-xl`                              | Floating panels  |
| Heavy  | `shadow-2xl`                             | Modals, popovers |
| Glow   | `shadow-[0_0_20px_rgba(59,130,246,0.3)]` | CTAs             |

---

## 6. States & Interactions

### Hover States

```css
/* Scale up */
hover:scale-105 transition-transform

/* Border glow */
hover:border-white/30 transition-colors

/* Background shift */
hover:bg-white/10 transition-colors
```

### Active/Pressed States

```css
/* Scale down */
active:scale-95

/* Pressed effect */
whileTap= {
   {
    scale: 0.95;
  }
}
```

---

## 7. Special Effects

### Noise Texture Overlay

```html
<div
  class="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
  style="background-image: url('https://grainy-gradients.vercel.app/noise.svg')"
/>
```

### Grid Background

```css
background-image: linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444
      1px, transparent 1px);
background-size: 40px 40px;
```

### Spotlight Effect (Framer Motion)

```tsx
const spotlightBackground = useMotionTemplate`
  radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(59, 130, 246, 0.1),
    transparent 80%
  )
`;
```

---

## 8. Responsive Breakpoints

| Breakpoint | Size     | Focus                           |
| ---------- | -------- | ------------------------------- |
| Default    | < 768px  | Mobile - hide widgets           |
| `md:`      | ≥ 768px  | Tablet - show some widgets      |
| `lg:`      | ≥ 1024px | Desktop - show all widgets      |
| `xl:`      | ≥ 1280px | Large desktop - full experience |

### Mobile Adaptation Rules

1. **Hide floating widgets** on mobile (`hidden md:block`)
2. **Stack content vertically**
3. **Reduce typography scale** (12vw → 10vw)
4. **Simplify animations**
5. **Keep custom cursor on desktop only**

---

_Design System v1.0 - December 2024_

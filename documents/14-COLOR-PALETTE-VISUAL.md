# 🎨 Color Palette Visual

## "Figma in MacOS" Design Colors

---

## Primary Palette

```
╔════════════════════════════════════════════════════════════════════╗
║                                                                     ║
║   ████████████████████    ████████████████████                     ║
║   ██                ██    ██                ██                     ║
║   ██   BACKGROUND   ██    ██    SURFACE     ██                     ║
║   ██                ██    ██                ██                     ║
║   ████████████████████    ████████████████████                     ║
║        #0a0a0a                 #171717                             ║
║      Deep Black              Dark Gray                             ║
║                                                                     ║
╚════════════════════════════════════════════════════════════════════╝
```

---

## Design Colors (Figma-Inspired)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   🟦 DESIGN BLUE        🟪 DESIGN PURPLE       🟩 DESIGN GREEN      │
│   ████████████          ████████████           ████████████         │
│   ████████████          ████████████           ████████████         │
│   ████████████          ████████████           ████████████         │
│     #3b82f6               #8b5cf6                #4ade80            │
│   React/Tech            Figma/Creative         Success/Code         │
│                                                                      │
│   🟨 DESIGN YELLOW      🩷 DESIGN PINK         🟧 DESIGN ORANGE    │
│   ████████████          ████████████           ████████████         │
│   ████████████          ████████████           ████████████         │
│   ████████████          ████████████           ████████████         │
│     #facc15               #f472b6                #ff4500            │
│   Warnings/JS           Selection/Cursor       Alerts/Hot           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Text Colors

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   ⬜ TEXT                 🩶 MUTED                🟢 ACCENT          │
│   ████████████          ████████████           ████████████         │
│     #ededed               #a1a1aa                #a3e635            │
│   Primary Text          Secondary Text         Handwriting          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Color Swatches Reference

### Backgrounds

| Swatch | Name       | Hex       | RGB             | Usage           |
| ------ | ---------- | --------- | --------------- | --------------- |
| ⬛     | Background | `#0a0a0a` | rgb(10, 10, 10) | Page background |
| 🌑     | Surface    | `#171717` | rgb(23, 23, 23) | Cards, panels   |

### Brand Colors

| Swatch | Name          | Hex       | RGB                | Usage             |
| ------ | ------------- | --------- | ------------------ | ----------------- |
| 🔵     | Design Blue   | `#3b82f6` | rgb(59, 130, 246)  | CTAs, tech accent |
| 🟣     | Design Purple | `#8b5cf6` | rgb(139, 92, 246)  | Figma accent      |
| 🟢     | Design Green  | `#4ade80` | rgb(74, 222, 128)  | Success, code     |
| 🟡     | Design Yellow | `#facc15` | rgb(250, 204, 21)  | Warnings          |
| 💗     | Design Pink   | `#f472b6` | rgb(244, 114, 182) | Cursor, selection |
| 🟠     | Design Orange | `#ff4500` | rgb(255, 69, 0)    | Alerts, hot       |

### Text

| Swatch | Name   | Hex       | RGB                | Usage             |
| ------ | ------ | --------- | ------------------ | ----------------- |
| ⬜     | Text   | `#ededed` | rgb(237, 237, 237) | Primary text      |
| 🩶      | Muted  | `#a1a1aa` | rgb(161, 161, 170) | Secondary text    |
| 💚     | Accent | `#a3e635` | rgb(163, 230, 53)  | Handwriting style |

---

## CSS Variables

```css
:root {
  /* Backgrounds */
  --color-background: #0a0a0a;
  --color-surface: #171717;

  /* Brand */
  --color-primary: #3b82f6;
  --color-secondary: #6366f1;

  /* Design Palette */
  --design-blue: #3b82f6;
  --design-purple: #8b5cf6;
  --design-green: #4ade80;
  --design-yellow: #facc15;
  --design-pink: #f472b6;
  --design-orange: #ff4500;

  /* Text */
  --color-text: #ededed;
  --color-muted: #a1a1aa;
  --color-accent: #a3e635;
}
```

---

## Tailwind Classes

```javascript
// tailwind.config.js
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
}
```

---

## Color Harmony

```
                    COMPLEMENTARY
                         │
         🟣 ─────────────┼───────────── 🟢
       Purple            │            Green
                         │
    ANALOGOUS ───────────┼─────────── SPLIT
                         │
         🔵 ─────────────┼───────────── 🟠
        Blue             │            Orange
                         │
                    🩷 Pink
                   (Accent)
```

---

## Accessibility Notes

| Combination                             | Contrast Ratio | WCAG   |
| --------------------------------------- | -------------- | ------ |
| Text (#ededed) on Background (#0a0a0a)  | 16.5:1         | ✅ AAA |
| Muted (#a1a1aa) on Background (#0a0a0a) | 7.2:1          | ✅ AAA |
| Design Blue on Background               | 4.8:1          | ✅ AA  |
| Design Green on Background              | 10.1:1         | ✅ AAA |

---

## Usage Examples

### Button Primary

```html
<button class="bg-white text-black">Primary CTA</button>
<button class="bg-design-blue text-white">Secondary CTA</button>
```

### Card

```html
<div class="bg-surface border border-white/10">Card</div>
```

### Status Indicators

```html
<span class="text-design-green">● Online</span>
<span class="text-design-yellow">● Away</span>
<span class="text-design-orange">● Busy</span>
```

---

_Color Palette Visual v1.0 - December 2024_

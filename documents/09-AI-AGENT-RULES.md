# 🤖 AI Agent Rules

## Guidelines for AI Code Generation in "Figma in MacOS"

---

## 1. Visual Requirements

### Side Widgets (MANDATORY)

Every section MUST have decorative side widgets on desktop:

```tsx
{
  /* Left widget - desktop only */
}
<div className="hidden xl:flex absolute left-[5%] top-[20%]">
  {/* Decorative element */}
</div>;

{
  /* Right widget - desktop only */
}
<div className="hidden xl:flex absolute right-[5%] top-[30%]">
  {/* Decorative element */}
</div>;
```

### No System Cursor

Use custom cursor integration:

```tsx
const { setLabel } = useCursor();

<button
  onMouseEnter={() => setLabel("Click")}
  onMouseLeave={() => setLabel(null)}
>
```

---

## 2. Tailwind Colors

Use custom palette, NOT defaults:

| ✅ Use             | ❌ Avoid        |
| ------------------ | --------------- |
| `bg-design-blue`   | `bg-blue-500`   |
| `bg-design-purple` | `bg-purple-500` |
| `bg-background`    | `bg-black`      |
| `bg-surface`       | `bg-gray-900`   |

---

## 3. Responsive Design

```tsx
// Desktop widgets
className = "hidden md:block"; // Tablets+
className = "hidden lg:block"; // Desktop+
className = "hidden xl:flex"; // Large desktop

// Content stacks vertically on mobile
className = "flex flex-col md:flex-row";
```

---

## 4. Animation Patterns

### Entrance (Spring physics)

```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 100, damping: 15 }}
```

### Scroll Trigger

```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

### Micro-interactions

```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

## 5. Icons

Prefer inline SVG over external libraries:

```tsx
const Icon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="..." />
  </svg>
);
```

---

## 6. Glass Effect

```tsx
className =
  "bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 rounded-xl";
```

---

## Summary Checklist

- [ ] Side widgets on desktop
- [ ] Custom cursor integration
- [ ] Custom Tailwind colors
- [ ] Responsive (hide decorations on mobile)
- [ ] Spring animations
- [ ] Inline SVG icons
- [ ] Glass/blur effects

---

_AI Agent Rules v1.0_

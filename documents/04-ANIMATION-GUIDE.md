# 🎬 Animation Guide

## Framer Motion Patterns in "Figma in MacOS"

---

## 1. Animation Philosophy

> "Every animation should feel like it has **weight** and **purpose**."

### Core Principles

1. **Spring Physics** - Use spring transitions for natural movement
2. **Scroll-Triggered** - Animate elements as they enter viewport
3. **Mouse-Responsive** - Parallax effects follow cursor movement
4. **Micro-Interactions** - Hover and tap feedback on interactive elements

---

## 2. Spring Physics Configuration

### Standard Spring Config

```tsx
const springConfig = {
  damping: 25, // Resistance (higher = less bouncy)
  stiffness: 100, // Speed (higher = faster)
  mass: 0.5, // Weight (higher = more inertia)
};
```

### Spring Presets

| Preset     | Config                            | Use Case                |
| ---------- | --------------------------------- | ----------------------- |
| **Snappy** | `{ stiffness: 300, damping: 30 }` | Buttons, quick feedback |
| **Smooth** | `{ stiffness: 100, damping: 25 }` | Parallax, cursor        |
| **Bouncy** | `{ stiffness: 200, damping: 15 }` | Pop-in animations       |
| **Slow**   | `{ stiffness: 50, damping: 20 }`  | Background elements     |

---

## 3. Entrance Animations

### ❌ DON'T: Simple Fade

```tsx
// Avoid this - too basic
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```

### ✅ DO: Spring Entrance

```tsx
// Use spring with transform
initial={{ opacity: 0, y: 20, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{ type: "spring", stiffness: 100, damping: 15 }}
```

### Entrance Patterns

#### Slide Up (Default)

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```

#### Scale Pop

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 200, damping: 20 }}
>
```

#### Slide from Side

```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 20 }}
>
```

---

## 4. Scroll-Triggered Animations

### whileInView Pattern

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  Content enters when visible
</motion.div>
```

### Viewport Options

```tsx
viewport={{
  once: true,        // Animate only once
  margin: "-100px",  // Trigger earlier/later
  amount: 0.5        // % visible to trigger (0-1)
}}
```

### Staggered Children

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 5. Parallax Effects

### Mouse-Based Parallax

```tsx
const Hero = () => {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the values
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 100 });

  // Transform to movement (different speeds per layer)
  const xLayer1 = useTransform(smoothX, [0, window.innerWidth], [30, -30]);
  const yLayer1 = useTransform(smoothY, [0, window.innerHeight], [30, -30]);

  const xLayer2 = useTransform(smoothX, [0, window.innerWidth], [-20, 20]);
  const yLayer2 = useTransform(smoothY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Slow layer */}
      <motion.div style={{ x: xLayer1, y: yLayer1 }}>...</motion.div>

      {/* Fast layer (opposite direction) */}
      <motion.div style={{ x: xLayer2, y: yLayer2 }}>...</motion.div>
    </>
  );
};
```

### Scroll-Based Parallax

```tsx
const Section = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return <motion.div style={{ y, opacity }}>Moves up as you scroll</motion.div>;
};
```

---

## 6. Micro-Interactions

### Button Pattern

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Click me
</motion.button>
```

### Card Pattern

```tsx
<motion.div
  whileHover={{
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  Card content
</motion.div>
```

### Link Pattern

```tsx
<motion.a
  whileHover={{ x: 5 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  Read more →
</motion.a>
```

---

## 7. Special Effects

### Spotlight Effect

```tsx
const spotlightBackground = useMotionTemplate`
  radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(59, 130, 246, 0.1),
    transparent 80%
  )
`;

<motion.div style={{ background: spotlightBackground }} />;
```

### Typing Effect

```tsx
const TypingText = () => {
  const words = ["MARKETING", "DATA", "AI", "AUTOMATION"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const speed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};
```

### Infinite Loop Animation

```tsx
<motion.div
  animate={{
    height: [4, 12, 4],
  }}
  transition={{
    repeat: Infinity,
    duration: 1,
    ease: "easeInOut",
  }}
/>
```

---

## 8. Page Transitions

### AnimatePresence Pattern

```tsx
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [view, setView] = useState("home");

  return (
    <AnimatePresence mode="wait">
      {view === "home" ? (
        <motion.main
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HomePage />
        </motion.main>
      ) : (
        <motion.main
          key="detail"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <DetailPage />
        </motion.main>
      )}
    </AnimatePresence>
  );
};
```

---

## 9. Performance Tips

1. **Use `will-change`** sparingly for heavy animations
2. **Prefer `transform` and `opacity`** over layout properties
3. **Use `viewport={{ once: true }}`** for scroll animations
4. **Limit parallax layers** on mobile
5. **Use `useSpring` over `animate`** for continuous mouse tracking

---

## 10. Animation Cheat Sheet

| Effect          | Hook/Component                 | Key Props                 |
| --------------- | ------------------------------ | ------------------------- |
| Entrance        | `motion.div`                   | `initial`, `animate`      |
| Scroll trigger  | `motion.div`                   | `whileInView`, `viewport` |
| Mouse move      | `useMotionValue` + `useSpring` | `style={{ x, y }}`        |
| Scroll position | `useScroll`                    | `scrollYProgress`         |
| Value mapping   | `useTransform`                 | `[input], [output]`       |
| Page transition | `AnimatePresence`              | `mode="wait"`             |
| Hover           | `motion.div`                   | `whileHover`              |
| Tap             | `motion.div`                   | `whileTap`                |
| Stagger         | `variants`                     | `staggerChildren`         |

---

_Animation Guide v1.0 - December 2024_

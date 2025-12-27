# 15. PAGE CREATION GUIDE (AI INSTRUCTIONS)

> **FOR AI AGENTS:** This document is your "System Instruction" when the User asks you to create a new Project Detail Page. Follow this structure strictly to maintain the "Figma in MacOS" aesthetic and the "Business Narrative" storytelling style.

---

## 1. The Philosophy

We do not build static "About" pages. We build **Interactive Visual Narratives**.
Every project page must answer four questions:

1.  **The Pain:** What was broken? (Visual: Chaos, disconnected silos, red colors)
2.  **The Diagnosis:** What did you find when you looked deeper? (Visual: Scanning, auditing, code fragments)
3.  **The Strategy:** What was the plan? (Visual: Architecture diagrams, flowcharts, blueprints)
4.  **The Execution:** How does it work? (Visual: Active pipelines, moving data, automation).

---

## 2. File Boilerplate

Every page lives in `components/ProjectName.tsx`. Use this exact skeleton to ensure the background grid, cursor, and scroll animations match the rest of the app.

```tsx
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useCursor } from "./GlobalCursor";

interface Props {
  onBack: () => void;
}

// --- VISUAL COMPONENTS (Place them here) ---
// const MyVisual = () => { return <div...> }

// --- MAIN COMPONENT ---
const ProjectName: React.FC<Props> = ({ onBack }) => {
  const { setLabel, setIsActive } = useCursor();

  // Custom Cursor Hook
  useEffect(() => {
    document.body.classList.add("no-cursor");
    setIsActive(true);
    return () => {
      document.body.classList.remove("no-cursor");
      setIsActive(false);
    };
  }, [setIsActive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-50 bg-[#0a0a0a] min-h-screen pb-40 overflow-hidden font-sans text-slate-200"
    >
      {/* 1. GLOBAL INFINITE GRID (MANDATORY) */}
      <div
        className="fixed inset-0 z-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* 2. AMBIENT GLOWS (MANDATORY) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px]" />
      </div>

      {/* 3. HEADER (MANDATORY) */}
      <div className="fixed top-24 left-0 right-0 z-40 px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Home")}
            onMouseLeave={() => setLabel(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/30"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-bold uppercase">Back</span>
          </button>

          {/* File Name Pill */}
          <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-xl">
            <div className="w-2 h-2 rounded-full bg-design-green animate-pulse" />
            <span className="text-xs font-mono text-design-green">
              Project_Name_Log.txt
            </span>
          </div>
        </div>
      </div>

      {/* --- CONTENT START --- */}
      {/* ... Sections go here ... */}
    </motion.div>
  );
};
export default ProjectName;
```

---

## 3. The Narrative Structure (Steps)

### Step 1: HERO - The Hook

- **Pattern**: Huge Typography, "Stopping Power" Headline.
- **Content**: Don't say "Project Title". Say "THE OUTCOME".
- **Example**: "STOP BURNING AD BUDGET" instead of "Data Analytics Project".

```tsx
<section className="pt-48 pb-32 px-6 relative z-10">
  <div className="max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6 text-[10px] uppercase">
      The Topic
    </div>
    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
      FROM{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
        CHAOS
      </span>{" "}
      TO <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-blue to-design-green">
        CLARITY
      </span>
    </h1>
  </div>
</section>
```

### Step 2: THE PAIN (Act 1)

- **Grid Layout**: Text Left / Visual Right.
- **Visual Style**: "Chaos", "Error", "Red/Orange tones", "Broken Lines", "Noise".
- **Key Element**: `TechSpec` card to define the technical mess.

### Step 3: THE DIAGNOSIS (Act 2)

- **Grid Layout**: Visual Left / Text Right.
- **Visual Style**: "Scanning", "Code Snippets", "Terminal Windows", "Blue/Green tones".
- **Animation**: Loop animations (scanning lines, pulsing dots).

### Step 4: THE STRATEGY (Act 3)

- **Grid Layout**: Text Left / Visual Right.
- **Visual Style**: "Blueprints", "Nodes connecting", "Abstract Shapes", "Purple/Pink (Magic)".

### Step 5: THE EXECUTION (Act 4)

- **Layout**: Center aligned or large full-width container.
- **Visual Style**: "Flow", "Pipeline", "Movement", "Green (Success)".
- **UI Container**: Use a dark glass container (`bg-[#121212]/80 border border-white/10`) to house the complex animation.

### Step 6: THE RESULTS (Bottom Line)

- **Pattern**: 3-Column Grid of stats.
- **Content**: Hard numbers. ROI, Time Saved, Revenue Gained.

---

## 4. Reusable UI Components

### 4.1. Technical Spec Card

Use this to clearly list tools without cluttering the narrative text.

```tsx
const TechSpec = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <div className="bg-[#151515] border-l-2 border-white/20 p-4 my-6 font-mono text-xs text-gray-400">
    <div className="text-[10px] uppercase font-bold text-design-blue mb-2">
      // TECHNICAL SPECS
    </div>
    <div className="text-white font-bold mb-1">{title}</div>
    <div className="leading-relaxed opacity-80">{content}</div>
  </div>
);
```

### 4.2. Section Headers

Use the "Stroke Text" number for visual hierarchy.

```tsx
<div className="flex items-center gap-4 mb-6">
  <span className="text-6xl font-black text-white/10 stroke-text">01</span>
  <h2 className="text-3xl font-bold text-white">The Pain</h2>
</div>
```

---

## 5. Animation Guidelines (Framer Motion)

- **Entrance**: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`.
- **Hover**: `whileHover={{ scale: 1.02 }}` (Micro-interactions only).
- **Looping**: `animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }}`.
- **3D Tilt**: Wrap visuals in a `perspective-1000` container and use `rotateY`.

---

## 6. Checklist for New Pages

Before finishing a new page, verify:

1.  [ ] Are the background Grids and Glows present?
2.  [ ] Does the Header have the correct "Back" button and "Project Log" pill?
3.  [ ] Is the Cursor configured (`useCursor` hook)?
4.  [ ] Does the story follow Pain -> Strategy -> Execution?
5.  [ ] Are there at least 3 custom visual components (not just text)?
6.  [ ] Is the copy business-focused (ROI) rather than just technical features?

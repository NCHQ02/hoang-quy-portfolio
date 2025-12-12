# Hoang Quy Portfolio - Automation Marketing Specialist

## 1. Project Overview

**Type:** Single Page Application (SPA) Portfolio / Landing Page.
**Purpose:** To showcase the skills, projects, and career profile of Hoang Quy, an Automation Marketing Specialist.
**Core Vibe:** "Creative Chaos" meets "Engineering Precision". The design bridges the gap between Design tools (Figma) and Development environments (VS Code/Terminal).
**Visual Style:** Dark Mode, Spatial UI, Glassmorphism, Holographic effects, and Interactive Physics.

---

## 2. Tech Stack & Dependencies

- **Framework:** React 19 (Functional Components, Hooks).
- **Language:** TypeScript (Strict typing preferred).
- **Styling:** Tailwind CSS (Utility-first, extended config).
- **Animation:** Framer Motion v12 (Heavy usage of `useSpring`, `useScroll`, `useTransform`, `layoutId`).
- **Icons:** Lucide React (via SVG implementation), Custom SVG paths.
- **Build Tool:** Vite (implied structure).

---

## 3. Design System & Concept

The application mimics a digital workspace where "Design" and "Code" coexist.

### 3.1. Color Palette (Tailwind Config)

- `background`: `#0a0a0a` (Deep dark/black)
- `surface`: `#171717` (Card backgrounds)
- `design-purple`: `#8b5cf6` (Figma/Creative accents)
- `design-blue`: `#3b82f6` (React/Tech accents)
- `design-green`: `#4ade80` (Success/Code strings)
- `design-orange`: `#ff4500` (Alerts/Highlights)
- `design-yellow`: `#facc15` (Warnings/JS)
- `design-pink`: `#f472b6` (Selection/Cursor)

### 3.2. UX/UI Philosophy

- **Spatial UI:** Widgets float in 3D space with parallax effects based on mouse movement.
- **No-Cursor Mode:** The system cursor is often hidden (`.no-cursor` class) and replaced by a custom physics-based `GlobalCursor` to simulate multiplayer collaboration or precise design tools.
- **Meta-UI:** The UI contains elements of _other_ UIs (Browser headers, VS Code tabs, Figma properties panels, Terminal windows).

---

## 4. Directory Structure & Component Logic

### Root

- `App.tsx`: Main entry point. Manages `ViewState` (Home vs. Project Details). Renders `BrowserHeader` and conditionally renders `MainContent` or `ProjectDetail*`.
- `constants.ts`: Static data (Nav items, Author info).
- `types.ts`: Global TypeScript interfaces.

### Components (`/components`)

#### Global & Layout

- `Navbar.tsx`: Sticky navigation that hides on scroll down, reveals on scroll up.
- `BrowserHeader.tsx`: Simulates a Safari/Chrome browser window with tabs and URL bar.
- `Dock.tsx`: macOS-style floating dock for bottom navigation.
- `Footer.tsx`: Interactive footer with "Figma Toolbar" style actions.
- `GlobalCursor.tsx`: Context provider and rendering logic for the custom cursor. Uses spring physics for lag-free movement.
- `FlowConnector.tsx`: A decorative component drawing lines connecting Hero to other sections, populated with floating "dev/design assets".

#### Sections (Home View)

1.  **`Hero.tsx`**:
    - _Concept:_ Creative Chaos.
    - _Logic:_ Heavy mouse-based parallax (layers move at different speeds). Typing effect for roles.
    - _Widgets:_ Music Player, Code Snippet, Figma Layers.
2.  **`About.tsx`**:
    - _Concept:_ The Inspector Panel.
    - _Animation:_ "Drawer Slide" (Widgets slide in from edges).
    - _Content:_ "Local Variables" (Stats), "Version History".
3.  **`Projects.tsx`**:
    - _Concept:_ The Prototype View.
    - _Animation:_ "Hologram Scale" (Pop up from 0 to 1).
    - _Content:_ Project cards acting as interactive windows (n8n, Vibe, Data).
4.  **`SkillsServices.tsx`**:
    - _Concept:_ Dev Mode vs. Design Mode.
    - _Animation:_ "Dependency Graph" (Typing effect), "System Monitor" (Progress bars).
    - _Logic:_ Interactive magnetic tags.
5.  **`Testimonials.tsx`**:
    - _Concept:_ FigJam Board / Multiplayer.
    - _Animation:_ "Bubble Pop" & "Spring Scale".
    - _Logic:_ Simulates live viewers/cursors interacting with the board.
6.  **`Resume.tsx`**:
    - _Concept:_ Deployment Terminal.
    - _Animation:_ "3D Flip" (Cards flip into view).
    - _Content:_ Holographic ID card, Terminal block, Export settings.
7.  **`Contact.tsx`**:
    - _Concept:_ Incoming Transmission / Collaboration.
    - _Animation:_ "Drop & Swing" (Notification drops down).
    - _Content:_ Share modal, FigJam canvas for stamping reactions.

#### Project Details

- `ProjectDetailN8n.tsx`: Deep dive into Automation. Sticky notes visual.
- `ProjectDetailVibe.tsx`: Deep dive into Product Engineering. Code blocks visual.
- `ProjectDetailData.tsx`: Deep dive into Data Analytics. ETL Pipeline visual.

---

## 5. Animation Strategy (For AI Understanding)

When modifying or adding animations, adhere to these patterns:

1.  **Entrance:** Do not use simple Fade In. Use `spring` transitions with `stiffness` and `damping` to create weight.
    - _Example:_ `transition={{ type: "spring", stiffness: 100, damping: 15 }}`.
2.  **Scroll Trigger:** Use `whileInView` with `viewport={{ once: true }}` to trigger animations when the user scrolls.
3.  **Parallax:** Use `useScroll` mapped to `useTransform` for vertical movement, or `useMotionValue` (mouse) for XY movement.
4.  **Micro-interactions:** Buttons and cards should have `whileHover` (scale up) and `whileTap` (scale down) states.

---

## 6. Rules for AI Agents (Code Generation)

If you are an AI generating code for this project:

1.  **Side Widgets:** Every section MUST have decorative side widgets (Desktop only `hidden xl:flex`) to fill negative space.
2.  **No System Cursor:** When creating interactive areas (buttons, cards), stick to the `onMouseEnter={() => setLabel("Action")}` pattern using `useCursor()` to update the custom cursor text.
3.  **Tailwind Colors:** Use the defined custom colors (e.g., `bg-design-blue` instead of `bg-blue-500` where appropriate to maintain consistency).
4.  **Responsiveness:** Always ensure widgets hide on mobile (`hidden`) and main content stacks vertically.
5.  **Icons:** Do not import external icon libraries unless necessary. Prefer inline SVG components for performance and style control.

---

## 7. How to Run

1.  `npm install`
2.  `npm run dev`

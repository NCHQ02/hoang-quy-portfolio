# 🧩 Component Guide

## All Components in "Figma in MacOS"

---

## 1. Component Architecture

```
App.tsx
├── CursorProvider (GlobalCursor.tsx)
│   └── Main Container
│       ├── BrowserHeader.tsx (Safari-style header)
│       │
│       ├── [Home View]
│       │   ├── Hero.tsx
│       │   ├── FlowConnector.tsx
│       │   ├── TableOfContents.tsx
│       │   ├── About.tsx
│       │   ├── Projects.tsx
│       │   ├── SkillsServices.tsx
│       │   ├── Testimonials.tsx
│       │   ├── Resume.tsx
│       │   ├── Contact.tsx
│       │   └── Footer.tsx
│       │
│       ├── [Project Detail Views]
│       │   ├── ProjectDetailN8n.tsx
│       │   ├── ProjectDetailVibe.tsx
│       │   └── ProjectDetailData.tsx
│       │
│       └── Dock.tsx (macOS-style floating dock)
│
└── Analytics + SpeedInsights
```

---

## 2. Global Components

### 2.1 GlobalCursor.tsx

**Purpose**: Custom physics-based cursor replacing system cursor.

**Features**:

- React Context for global state management
- Spring physics for smooth movement
- Dynamic label text on hover

**Usage**:

```tsx
import { useCursor } from "./GlobalCursor";

const Component = () => {
  const { setLabel } = useCursor();

  return (
    <button
      onMouseEnter={() => setLabel("Click Me")}
      onMouseLeave={() => setLabel(null)}
    >
      Hover me
    </button>
  );
};
```

---

### 2.2 BrowserHeader.tsx

**Purpose**: Safari-style browser window header with tabs.

**Visual Elements**:

- Traffic light buttons (red, yellow, green)
- Tab bar with active state
- URL bar with page indicator

**Size**: Full width, fixed height (~60px)

---

### 2.3 Dock.tsx

**Purpose**: macOS-style floating navigation dock at bottom.

**Features**:

- Horizontal icon bar
- Magnification effect on hover
- Smooth scrolling to sections

**Position**: Fixed bottom center, z-index high

---

### 2.4 Navbar.tsx

**Purpose**: Sticky navigation with scroll behavior.

**Behavior**:

- Hides on scroll down
- Reveals on scroll up
- Transparent background with blur

---

### 2.5 Footer.tsx

**Purpose**: Interactive footer with Figma-style toolbar.

**Elements**:

- Social links
- Copyright info
- Quick actions mimicking design tools

---

## 3. Section Components

### 3.1 Hero.tsx

**Concept**: "Creative Chaos"

**Floating Widgets**:
| Widget | Description | Position |
|--------|-------------|----------|
| MusicWidget | Fake music player | Top Left |
| CodeWidget | Code snippet panel | Bottom Right |
| LayerWidget | Figma layer panel | Top Right |
| PaletteWidget | Color picker | Bottom Left |
| ExportWidget | Export progress bar | Middle Left |
| CommentWidget | PM comment bubble | Left |
| ShapeWidget | Abstract 3D sphere | Top Right |

**Key Features**:

- Mouse parallax on all widgets
- Typing effect for roles (MARKETING, DATA, AI, AUTOMATION)
- Split-layer typography effect
- Spotlight following mouse

---

### 3.2 TableOfContents.tsx

**Purpose**: Visual roadmap of sections

**Style**: Numbered list with scroll indicators

---

### 3.3 About.tsx

**Concept**: "The Inspector Panel"

**Animation**: Drawer Slide (widgets slide from edges)

**Content**:

- Local Variables (stats/metrics)
- Version History (timeline)
- Personal info in Figma panel style

---

### 3.4 Projects.tsx

**Concept**: "The Prototype View"

**Animation**: Hologram Scale (pop from 0 to 1)

**Projects Displayed**:
| Project | Detail Component | Theme |
|---------|------------------|-------|
| n8n Automation | ProjectDetailN8n.tsx | Sticky notes |
| Vibe Product | ProjectDetailVibe.tsx | Code blocks |
| Data Analytics | ProjectDetailData.tsx | ETL Pipeline |

---

### 3.5 SkillsServices.tsx

**Concept**: "Dev Mode vs Design Mode"

**Animation**:

- Dependency Graph (typing effect)
- System Monitor (progress bars)

**Interaction**: Magnetic skill tags

---

### 3.6 Testimonials.tsx

**Concept**: "FigJam Board / Multiplayer"

**Animation**:

- Bubble Pop
- Spring Scale

**Features**: Simulated live cursors/viewers

---

### 3.7 Resume.tsx

**Concept**: "Deployment Terminal"

**Animation**: 3D Flip (cards flip into view)

**Elements**:

- Holographic ID card
- Terminal block
- Export settings panel

---

### 3.8 Contact.tsx

**Concept**: "Incoming Transmission"

**Animation**: Drop & Swing (notification drops)

**Elements**:

- Share modal
- FigJam canvas for reactions
- Contact form (styled as design tool)

---

### 3.9 FlowConnector.tsx

**Purpose**: Decorative connector between sections

**Visual**: Lines with floating dev/design assets

---

## 4. Project Detail Components

### 4.1 ProjectDetailN8n.tsx

**Theme**: Automation / Sticky Notes Visual
**Content**: Deep dive into n8n workflows

### 4.2 ProjectDetailVibe.tsx

**Theme**: Product Engineering / Code Blocks
**Content**: Product development showcase

### 4.3 ProjectDetailData.tsx

**Theme**: Data Analytics / ETL Pipeline Visual
**Content**: Data projects and visualization

---

## 5. Component Patterns

### Widget Pattern

All floating widgets follow this structure:

```tsx
const Widget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute [position] z-[level] pointer-events-none hidden md:block"
  >
    <div className="bg-[...]/[opacity] backdrop-blur-xl border border-white/10 rounded-[...] p-[...] shadow-[...] transform rotate-[deg]">
      {/* Widget content */}
    </div>
  </motion.div>
);
```

### Section Pattern

All sections follow this structure:

```tsx
const Section: React.FC = () => {
  const { setLabel } = useCursor();

  return (
    <section id="section-id" className="relative py-20 md:py-32">
      {/* Side widgets (desktop only) */}
      <div className="hidden xl:flex absolute left-[...] top-[...]">
        {/* Decorative elements */}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4">{/* Section content */}</div>

      {/* Side widgets (desktop only) */}
      <div className="hidden xl:flex absolute right-[...] top-[...]">
        {/* Decorative elements */}
      </div>
    </section>
  );
};
```

---

## 6. Import Map

```tsx
// App.tsx imports
import Hero from "./components/Hero";
import TableOfContents from "./components/TableOfContents";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsServices from "./components/SkillsServices";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Dock from "./components/Dock";
import Footer from "./components/Footer";
import BrowserHeader from "./components/BrowserHeader";
import FlowConnector from "./components/FlowConnector";
import { CursorProvider, useCursor } from "./components/GlobalCursor";
import ProjectDetailN8n from "./components/ProjectDetailN8n";
import ProjectDetailVibe from "./components/ProjectDetailVibe";
import ProjectDetailData from "./components/ProjectDetailData";
```

---

_Component Guide v1.0 - December 2024_

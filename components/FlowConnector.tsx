import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "./GlobalCursor";

// --- SUB-COMPONENTS ---

const SelectionHandle = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-1.5 h-1.5 bg-white border border-design-blue z-20 ${className}`}
  />
);

const ConnectorDot = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-3 h-3 bg-white border-2 border-design-blue rounded-full z-10 ${className}`}
  />
);

// --- NEW WIDGETS TO FILL THE GAP ---

// 1. Git Commit Card (Dev vibe)
const GitCommitCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 30 }}
      onMouseEnter={() => setLabel("Commit")}
      onMouseLeave={() => setLabel(null)}
      className="w-48 bg-[#0D1117] rounded-lg border border-white/10 shadow-xl p-3 cursor-grab active:cursor-grabbing relative group transform rotate-3"
    >
      <div className="flex items-center gap-2 mb-2 opacity-50">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
        <span className="text-[10px] font-mono">main branch</span>
      </div>
      <div className="space-y-2 relative">
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gray-700" />

        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-design-green ring-2 ring-[#0D1117]" />
          <div className="text-[10px] text-gray-300">feat: hero animation</div>
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-500 ring-2 ring-[#0D1117]" />
          <div className="text-[10px] text-gray-500">fix: mobile spacing</div>
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-500 ring-2 ring-[#0D1117]" />
          <div className="text-[10px] text-gray-500">chore: update deps</div>
        </div>
      </div>
      {/* Connector Anchor */}
      <ConnectorDot className="top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 bg-design-green border-design-green" />
    </motion.div>
  );
};

// 2. Icon Grid Card (Design vibe)
const IconGridCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 30 }}
      onMouseEnter={() => setLabel("Assets")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-xl p-3 cursor-grab active:cursor-grabbing relative group transform -rotate-2"
    >
      <div className="text-[9px] text-gray-500 font-bold uppercase mb-2">
        Icon Set / 24px
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="aspect-square bg-white/5 rounded flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <div className="w-2 h-2 rounded-full border border-gray-400" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// 3. Mobile Preview Card (Output vibe)
const MobilePreviewCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 30 }}
      onMouseEnter={() => setLabel("Responsive")}
      onMouseLeave={() => setLabel(null)}
      className="w-24 h-40 bg-black rounded-[14px] border-4 border-[#333] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing relative group transform rotate-6"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#333] rounded-b-md z-20" />

      {/* Screen Content */}
      <div className="w-full h-full bg-[#0a0a0a] pt-4 px-2 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-design-purple mb-2 opacity-80" />
        <div className="w-12 h-1.5 bg-gray-800 rounded mb-1" />
        <div className="w-8 h-1.5 bg-gray-800 rounded mb-3" />

        <div className="w-full h-10 bg-white/5 rounded mb-1" />
        <div className="w-full h-10 bg-white/5 rounded" />
      </div>

      {/* Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};

// --- EXISTING CARDS (Refined) ---

// Color Palette Card
const PaletteCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      onMouseEnter={() => setLabel("Drag")}
      onMouseLeave={() => setLabel(null)}
      className="w-48 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] p-3 flex flex-col gap-2 cursor-grab active:cursor-grabbing relative group"
    >
      <div className="flex justify-between items-center mb-1 border-b border-white/5 pb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Fill Styles
        </span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
        </div>
      </div>
      {/* Swatches */}
      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded hover:bg-white/10 transition-colors border border-transparent hover:border-white/5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm border border-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-white font-bold">Brand Blue</span>
          <span className="text-[8px] text-gray-500">100% • Linear</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded hover:bg-white/10 transition-colors border border-transparent hover:border-white/5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-sm border border-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-white font-bold">
            Accent Gradient
          </span>
          <span className="text-[8px] text-gray-500">Mix • Radial</span>
        </div>
      </div>

      {/* Connector Anchor */}
      <ConnectorDot className="top-1/2 -right-1.5 translate-x-0" />

      {/* Selection Box Decoration */}
      <div className="absolute -inset-1 border border-design-blue opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg">
        <SelectionHandle className="-top-0.5 -left-0.5" />
        <SelectionHandle className="-top-0.5 -right-0.5" />
        <SelectionHandle className="-bottom-0.5 -left-0.5" />
        <SelectionHandle className="-bottom-0.5 -right-0.5" />
      </div>
    </motion.div>
  );
};

// Typography Card
const TypographyCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      onMouseEnter={() => setLabel("Drag")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#F5F5F7] text-black rounded-lg shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] p-4 cursor-grab active:cursor-grabbing transform rotate-3 relative group"
    >
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-black text-white text-[12px] font-bold flex items-center justify-center rounded-full shadow-lg z-10 border-2 border-[#F5F5F7]">
        Aa
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-4xl font-display font-black tracking-tighter">
          H1
        </span>
        <div className="h-px w-full bg-gray-300 my-2" />
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-600">
            Inter Display
          </span>
          <span className="text-[10px] font-mono text-gray-400">8rem</span>
        </div>
        <span className="text-[8px] text-gray-400">Bold / -4%</span>
      </div>
      {/* Connector Anchor */}
      <ConnectorDot className="top-1/2 -left-1.5 translate-x-0 border-black bg-black" />
    </motion.div>
  );
};

// Code Snippet Card
const CodeCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      onMouseEnter={() => setLabel("Code")}
      onMouseLeave={() => setLabel(null)}
      className="w-56 bg-[#0D1117] rounded-lg border border-gray-700 shadow-2xl p-0 overflow-hidden cursor-grab active:cursor-grabbing relative group"
    >
      <div className="bg-[#161B22] px-3 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] text-gray-500 font-mono">
          config.ts
        </span>
      </div>
      <div className="p-3 font-mono text-[10px] leading-relaxed text-gray-300">
        <p>
          <span className="text-purple-400">export</span>{" "}
          <span className="text-red-400">const</span>{" "}
          <span className="text-blue-400">theme</span> = {"{"}
        </p>
        <p className="pl-4">
          mode: <span className="text-green-400">'dark'</span>,
        </p>
        <p className="pl-4">
          blur: <span className="text-orange-400">true</span>,
        </p>
        <p>{"};"}</p>
      </div>
      {/* Connector Anchor */}
      <ConnectorDot className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5" />
    </motion.div>
  );
};

// Layer List Card
const LayersCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      onMouseEnter={() => setLabel("Layers")}
      onMouseLeave={() => setLabel(null)}
      className="w-36 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-xl p-2 cursor-grab active:cursor-grabbing transform -rotate-2 relative group"
    >
      <div className="text-[9px] text-gray-500 font-bold uppercase mb-2 px-1">
        Layers
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-1 bg-design-blue/20 rounded border border-design-blue/50">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
          <span className="text-[10px] text-white">Hero Section</span>
        </div>
        <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="text-[10px] text-gray-400">Avatar</span>
        </div>
        <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          </svg>
          <span className="text-[10px] text-gray-400">Footer</span>
        </div>
      </div>
      {/* Connector Anchor */}
      <ConnectorDot className="top-0 left-1/2 -translate-x-1/2 -translate-y-1.5" />
    </motion.div>
  );
};

// Button Component Set Card
const ButtonVariantsCard = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 25 }}
      onMouseEnter={() => setLabel("Component")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-dashed border-design-purple/50 p-3 flex flex-col gap-3 cursor-grab active:cursor-grabbing relative group shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform rotate-3"
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-1">
        <div className="w-2 h-2 border border-design-purple rotate-45" />
        <div className="text-[9px] text-design-purple font-bold uppercase tracking-wider">
          Button Set
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-design-blue text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-sm hover:scale-105 transition-transform">
          Default
        </div>
        <div className="bg-blue-400 text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-md border-2 border-white/20 transform scale-[1.02]">
          Hover
        </div>
      </div>

      {/* Connector Anchor */}
      <ConnectorDot className="top-1/2 -left-1.5 translate-x-0" />
    </motion.div>
  );
};

// Properties Panel
const PropertiesPanel = () => {
  const { setLabel } = useCursor();
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 25 }}
      onMouseEnter={() => setLabel("Props")}
      onMouseLeave={() => setLabel(null)}
      className="w-32 bg-[#2C2C2E] rounded-lg border border-white/10 shadow-2xl p-2 flex flex-col gap-2 cursor-grab active:cursor-grabbing relative transform -rotate-1"
    >
      <div className="flex justify-between items-center opacity-50 px-1 pt-1">
        <span className="text-[9px] font-bold">Align</span>
        <span className="text-[9px] font-bold">Distribute</span>
      </div>
      <div className="flex justify-between px-1 py-1 bg-black/20 rounded">
        {/* Simple Align Icons */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="white"
          className="opacity-70"
        >
          <rect x="2" y="4" width="2" height="16" />
          <rect x="8" y="8" width="12" height="8" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="white"
          className="opacity-70"
        >
          <rect x="11" y="4" width="2" height="16" />
          <rect x="5" y="8" width="14" height="8" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="white"
          className="opacity-70"
        >
          <rect x="20" y="4" width="2" height="16" />
          <rect x="4" y="8" width="12" height="8" />
        </svg>
      </div>
      <div className="h-px bg-white/5 w-full my-0.5" />
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5">
          <span className="text-[8px] text-gray-500 font-bold">W</span>
          <span className="text-[9px] text-gray-300 font-mono">240</span>
        </div>
        <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5">
          <span className="text-[8px] text-gray-500 font-bold">H</span>
          <span className="text-[9px] text-gray-300 font-mono">120</span>
        </div>
        <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5 col-span-2">
          <svg
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-500"
          >
            <path d="M5 5h14v14H5z" />
          </svg>
          <span className="text-[9px] text-gray-300 font-mono ml-auto">
            #3B82F6
          </span>
        </div>
      </div>

      {/* Connector Anchor */}
      <ConnectorDot className="top-0 right-1/2 translate-x-1/2 -translate-y-1.5" />
    </motion.div>
  );
};

// Comment Bubble (Updated)
const CommentBubble = ({
  text,
  author,
  color,
  x,
  y,
  delay,
}: {
  text: string;
  author: string;
  color: string;
  x: string;
  y: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="absolute z-30 flex flex-col items-start gap-1"
      style={{ left: x, top: y }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div
        className={`relative px-3 py-2 rounded-xl rounded-tl-none ${color} text-black shadow-lg max-w-[150px]`}
      >
        <p className="text-[11px] font-bold leading-tight">{text}</p>
      </div>
      <div className="flex items-center gap-1 ml-1">
        <div
          className={`w-4 h-4 rounded-full ${color} border border-black/20 flex items-center justify-center text-[8px] font-bold`}
        >
          {author.charAt(0)}
        </div>
        <span className="text-[9px] text-gray-500 font-bold">{author}</span>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---

const FlowConnector: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Effects
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Line Animation
  const pathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    // Adjusted height and margin to pull it UP into the Hero section visually
    <div
      ref={containerRef}
      className="relative w-full h-[120vh] overflow-visible pointer-events-none -mt-[20vh] z-30"
    >
      {/* 0. Noise Texture Overlay (Consistency with Hero) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      ></div>

      {/* 1. Background Grid (Localized & Faded) */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 90%)",
        }}
      />

      {/* 2. Complex Prototype Connections (SVG Lines) */}
      <svg className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
          </marker>
          <marker
            id="arrowhead-purple"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6" />
          </marker>
          <linearGradient id="mainLineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="20%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="80%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* THE CENTRAL THREAD (Hero -> TOC) */}
        <motion.path
          d="M 50% 0% L 50% 100%"
          fill="none"
          stroke="url(#mainLineGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          style={{ pathLength, opacity }}
        />

        {/* Left Branch */}
        <motion.path
          d="M 50% 15% C 20% 15%, 20% 30%, 20% 45%"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.1"
          strokeWidth="1"
          style={{ pathLength, opacity }}
        />

        {/* Right Branch */}
        <motion.path
          d="M 50% 25% C 80% 25%, 80% 40%, 80% 55%"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.1"
          strokeWidth="1"
          style={{ pathLength, opacity }}
        />
      </svg>

      {/* 3. Floating Interactive Assets (Denser Layout) */}
      <div className="absolute inset-0 w-full mx-auto pointer-events-auto  left-1/2 -translate-x-1/2">
        {/* --- TOP CLUSTER (Bridging Hero) --- */}

        {/* Center Badge */}
        <motion.div
          style={{ y: ySlow }}
          className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-design-blue/50 text-design-blue px-3 py-1 rounded-full text-[10px] font-mono shadow-[0_0_20px_rgba(59,130,246,0.3)] z-40"
        >
          System Initializing...
        </motion.div>

        <motion.div
          style={{ y: yMedium }}
          className="absolute top-[10%] left-[20%] md:left-[30%]"
        >
          <GitCommitCard />
        </motion.div>

        <motion.div
          style={{ y: yFast }}
          className="absolute top-[15%] right-[10%] md:right-[25%]"
        >
          <IconGridCard />
        </motion.div>

        {/* --- MIDDLE CLUSTER --- */}

        <motion.div
          style={{ y: ySlow }}
          className="absolute top-[35%] left-[5%] md:left-[10%]"
        >
          <PaletteCard />
        </motion.div>

        <motion.div
          style={{ y: yMedium }}
          className="absolute top-[40%] left-[30%] md:left-[40%] z-30"
        >
          <MobilePreviewCard />
        </motion.div>

        <motion.div
          style={{ y: yFast }}
          className="absolute top-[30%] right-[5%] md:right-[10%]"
        >
          <TypographyCard />
        </motion.div>

        {/* --- BOTTOM CLUSTER --- */}

        <motion.div
          style={{ y: ySlow }}
          className="absolute top-[60%] left-[2%] md:left-[15%]"
        >
          <ButtonVariantsCard />
        </motion.div>

        <motion.div
          style={{ y: yMedium }}
          className="absolute top-[65%] left-[50%] -translate-x-1/2"
        >
          <CodeCard />
          {/* Fake Cursor Hovering */}
          <motion.div
            className="absolute -top-6 -left-6 pointer-events-none z-30"
            animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-design-green drop-shadow-md"
            >
              <path
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                fill="currentColor"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute left-4 top-4 bg-design-green text-black text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              Dev
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yFast }}
          className="absolute top-[55%] right-[15%] md:right-[20%]"
        >
          <LayersCard />
        </motion.div>

        <motion.div
          style={{ y: ySlow }}
          className="absolute top-[75%] right-[2%] md:right-[10%]"
        >
          <PropertiesPanel />
        </motion.div>

        {/* --- COMMENTS --- */}
        <CommentBubble
          text="Seamless flow! 🌊"
          author="UX"
          color="bg-design-blue"
          x="25%"
          y="25%"
          delay={0}
        />
        <CommentBubble
          text="Components ready."
          author="Dev"
          color="bg-design-green"
          x="75%"
          y="55%"
          delay={2}
        />

        {/* Decorative Plus Signs (Canvas markers) */}
        <div className="absolute top-[50%] left-[5%] text-white/10 text-4xl font-thin">
          +
        </div>
        <div className="absolute top-[20%] right-[3%] text-white/10 text-4xl font-thin">
          +
        </div>
        <div className="absolute bottom-[10%] left-[50%] text-white/10 text-4xl font-thin">
          +
        </div>
      </div>
    </div>
  );
};

export default FlowConnector;

import React, { useState, useEffect } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useCursor } from "./GlobalCursor";

// --- ASSETS & ICONS ---

const FigmaLogo = () => (
  <svg width="24" height="24" viewBox="0 0 15 24" fill="none">
    <path
      d="M7.5 24C9.57107 24 11.25 22.3211 11.25 20.25C11.25 18.1789 9.57107 16.5 7.5 16.5H3.75V20.25C3.75 22.3211 5.42893 24 7.5 24Z"
      fill="#0ACF83"
    />
    <path
      d="M0 12.75C0 10.6789 1.67893 9 3.75 9H7.5V16.5H3.75C1.67893 16.5 0 14.8211 0 12.75Z"
      fill="#A259FF"
    />
    <path
      d="M0 5.25C0 3.17893 1.67893 1.5 3.75 1.5H7.5V9H3.75C1.67893 9 0 7.32107 0 5.25Z"
      fill="#F24E1E"
    />
    <path
      d="M7.5 0V7.5H11.25C13.3211 7.5 15 5.82107 15 3.75C15 1.67893 13.3211 0 11.25 0H7.5Z"
      fill="#FF7262"
    />
    <path
      d="M15 11.25C15 13.3211 13.3211 15 11.25 15H7.5V7.5H11.25C13.3211 7.5 15 9.17893 15 11.25Z"
      fill="#1ABCFE"
    />
  </svg>
);

const BoltIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// --- FLOATING WIDGETS (SPATIAL UI) ---

// 1. Music Player Widget
const MusicWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute top-[12%] left-[5%] md:left-[8%] z-20 pointer-events-none hidden md:block"
  >
    <div className="bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-52 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
      <div className="w-10 h-10 bg-gradient-to-br from-design-purple to-blue-500 rounded-lg flex items-center justify-center animate-pulse">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-xs font-bold text-white truncate">
          Deep Focus.mp3
        </span>
        <span className="text-[10px] text-gray-400">Lo-Fi Radio</span>
      </div>
      <div className="ml-auto flex gap-0.5 items-end h-3">
        {[1, 2, 3, 2, 4, 2].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [4, 12, 4] }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
            className="w-0.5 bg-design-green rounded-full"
          />
        ))}
      </div>
    </div>
  </motion.div>
);

// 2. Code Snippet Widget
const CodeWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute bottom-[25%] right-[5%] md:right-[8%] z-20 pointer-events-none hidden md:block"
  >
    <div className="bg-[#0d1117]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl font-mono text-[10px] w-64 transform rotate-3 hover:-rotate-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-500">hero.tsx</span>
      </div>
      <div className="text-gray-400 leading-relaxed">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">Portfolio</span> = {"{"}
        <br />
        &nbsp;&nbsp;magic: <span className="text-orange-400">true</span>,
        <br />
        &nbsp;&nbsp;style:{" "}
        <span className="text-green-400">'Creative Chaos'</span>,
        <br />
        &nbsp;&nbsp;impact: <span className="text-yellow-400">Infinity</span>
        <br />
        {"}"};
      </div>
    </div>
  </motion.div>
);

// 3. Figma Layer Widget
const LayerWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute top-[20%] right-[15%] z-10 pointer-events-none hidden lg:block"
  >
    <div className="bg-[#1e1e1e]/80 backdrop-blur-md border border-white/10 rounded-lg p-2 shadow-xl w-44 transform rotate-6 hover:rotate-3 transition-transform duration-500">
      <div className="text-[9px] text-gray-500 font-bold mb-2 uppercase tracking-wider px-1 flex justify-between">
        <span>Layers</span>
        <span className="text-white opacity-50">Shift+L</span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-1 bg-design-purple/20 rounded border border-design-purple/30 text-white">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-[10px] font-bold">Hero Composition</span>
        </div>
        <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded text-gray-400 opacity-50">
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
          <span className="text-[10px]">Background Grid</span>
        </div>
      </div>
      {/* Fake Cursor */}
      <div
        className="absolute -bottom-8 -left-8 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-design-pink drop-shadow-lg transform -rotate-12"
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute left-4 top-4 bg-design-pink text-white text-[9px] px-1.5 rounded-sm shadow-md">
          You
        </div>
      </div>
    </div>
  </motion.div>
);

// 4. Color Palette Widget
const PaletteWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute bottom-[15%] left-[20%] z-10 pointer-events-none hidden lg:block"
  >
    <div className="bg-[#1e1e1e]/90 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-2xl flex gap-2 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
      <div className="w-8 h-8 rounded-full bg-[#FF5F56] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-[#FFBD2E] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-[#27C93F] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-[#3b82f6] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs border border-white/10 shadow-inner">
        +
      </div>
    </div>
  </motion.div>
);

// 5. [NEW] Exporting Widget
const ExportWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute top-[35%] left-[15%] z-10 pointer-events-none hidden lg:block"
  >
    <div className="bg-[#2C2C2E] border border-white/10 rounded-lg p-3 shadow-2xl w-48 transform rotate-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold text-white">
          Exporting Assets...
        </span>
        <span className="text-[9px] text-gray-400">85%</span>
      </div>
      <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "85%" }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="h-full bg-design-blue"
        />
      </div>
    </div>
  </motion.div>
);

// 6. [NEW] Comment Widget
const CommentWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute bottom-[35%] left-[5%] z-10 pointer-events-none hidden lg:block"
  >
    <div className="relative">
      <div className="bg-white text-black text-[11px] font-bold px-4 py-2 rounded-2xl rounded-bl-none shadow-xl transform -rotate-6 max-w-[120px]">
        Can we make the logo bigger? 🫠
      </div>
      <div className="absolute -bottom-6 -left-2 flex items-center gap-1">
        <div className="w-5 h-5 rounded-full bg-design-orange border border-white flex items-center justify-center text-[8px] font-bold text-white">
          PM
        </div>
      </div>
    </div>
  </motion.div>
);

// 7. [NEW] 3D Shape Widget (Abstract)
const ShapeWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute top-[15%] right-[5%] z-0 pointer-events-none hidden md:block opacity-50"
  >
    {/* CSS-only pseudo 3D sphere */}
    <div
      className="w-24 h-24 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), rgba(0,0,0,0.4))",
        boxShadow:
          "inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.1)",
      }}
    />
  </motion.div>
);

// --- MAIN HERO COMPONENT ---

const Hero: React.FC = () => {
  const { setLabel } = useCursor();

  // Mouse position for Spotlight & Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse for parallax
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax Transforms - MORE EXTREME FOR CHAOS FEEL
  const xMusic = useTransform(smoothX, [0, window.innerWidth], [30, -30]);
  const yMusic = useTransform(smoothY, [0, window.innerHeight], [30, -30]);

  const xCode = useTransform(smoothX, [0, window.innerWidth], [-40, 40]);
  const yCode = useTransform(smoothY, [0, window.innerHeight], [-40, 40]);

  const xLayer = useTransform(smoothX, [0, window.innerWidth], [-20, 20]);
  const yLayer = useTransform(smoothY, [0, window.innerHeight], [20, -20]);

  const xPalette = useTransform(smoothX, [0, window.innerWidth], [50, -50]);
  const yPalette = useTransform(smoothY, [0, window.innerHeight], [-30, 30]);

  const xExport = useTransform(smoothX, [0, window.innerWidth], [15, -15]);
  const yExport = useTransform(smoothY, [0, window.innerHeight], [-15, 15]);

  const xComment = useTransform(smoothX, [0, window.innerWidth], [-60, 60]);
  const yComment = useTransform(smoothY, [0, window.innerHeight], [20, -20]);

  // Typography Parallax - The "Split Layer" Effect
  // Front layer moves WITH mouse, Back layer moves AGAINST mouse
  const textFrontX = useTransform(smoothX, [0, window.innerWidth], [15, -15]);
  const textFrontY = useTransform(smoothY, [0, window.innerHeight], [15, -15]);

  const textBackX = useTransform(smoothX, [0, window.innerWidth], [-15, 15]);
  const textBackY = useTransform(smoothY, [0, window.innerHeight], [-15, 15]);

  // Spotlight Effect Template
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.1),
      transparent 80%
    )
  `;

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Typing Effect Logic
  const roles = ["MARKETING", "DATA", "AI", "AUTOMATION"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* 0. NOISE TEXTURE OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      ></div>

      {/* 1. GRID BACKGROUND WITH SPOTLIGHT */}
      <div className="absolute inset-0 z-0">
        {/* Base Grid */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Spotlight Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: spotlightBackground }}
        />
      </div>

      {/* 2. FLOATING PARALLAX WIDGETS (SPACE JUNK) */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
        <MusicWidget x={xMusic} y={yMusic} />
        <CodeWidget x={xCode} y={yCode} />
        <LayerWidget x={xLayer} y={yLayer} />
        <PaletteWidget x={xPalette} y={yPalette} />
        <ExportWidget x={xExport} y={yExport} />
        <CommentWidget x={xComment} y={yComment} />
        <ShapeWidget x={xMusic} y={yCode} />
      </div>

      {/* 3. MAIN CENTERPIECE */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-[90vw]">
        {/* Dynamic Island / Status Pill */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="mb-12 flex items-center gap-3 bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-design-blue/50 transition-colors cursor-default"
        >
          <div className="relative w-3 h-3">
            <span className="absolute inset-0 rounded-full bg-design-green opacity-75 animate-ping" />
            <span className="relative block w-3 h-3 rounded-full bg-design-green border-2 border-[#1A1A1A]" />
          </div>
          <span className="text-xs font-medium text-gray-300">
            Open For Freelance Projects
          </span>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-gray-500 font-mono">
              HCM CITY
            </span>
            <span className="text-[10px] text-gray-500 font-mono">VN</span>
          </div>
        </motion.div>

        {/* --- MASSIVE TYPOGRAPHY (SPLIT LAYER PARALLAX) --- */}
        <div
          className="relative select-none perspective-1000"
          onMouseEnter={() => setLabel("Zoom")}
          onMouseLeave={() => setLabel(null)}
        >
          {/* ROW 1: CREATIVE */}
          <div className="relative h-[12vw] md:h-[9rem] flex items-center justify-center">
            {/* Back Layer (Stroke/Outline) - Moves Opposite */}
            <motion.h1
              style={{ x: textBackX, y: textBackY }}
              className="absolute inset-0 flex items-center justify-center text-[12vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-transparent stroke-text opacity-30 blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
            >
              PORTFOLIO
            </motion.h1>

            {/* Front Layer (Fill) - Moves With Mouse */}
            <motion.h1
              style={{ x: textFrontX, y: textFrontY }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-[12vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mix-blend-overlay"
            >
              PORTFOLIO
            </motion.h1>
          </div>

          {/* ROW 2: DYNAMIC TEXT */}
          <div className="relative h-[12vw] md:h-[9rem] flex items-center justify-center mt-2 md:mt-4">
            {/* Back Layer */}
            <motion.h1
              style={{ x: textBackX, y: textBackY }}
              className="absolute inset-0 flex items-center justify-center text-[12vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-transparent stroke-text opacity-30 blur-[1px]"
            >
              {displayText}
            </motion.h1>

            {/* Front Layer */}
            <motion.h1
              style={{ x: textFrontX, y: textFrontY }}
              className="relative z-10 text-[12vw] md:text-[9rem] leading-[0.8] font-black tracking-tighter text-white drop-shadow-2xl flex items-center"
            >
              {displayText}
              {/* Blinking Cursor */}
              <span className="ml-2 md:ml-4 inline-block w-3 md:w-6 h-[8vw] md:h-[7rem] bg-design-blue animate-pulse align-middle rounded-sm shadow-[0_0_20px_#3b82f6]" />
            </motion.h1>

            {/* Decorative Selection Box around text */}
            <motion.div
              style={{ x: textFrontX, y: textFrontY }}
              className="absolute -inset-x-8 -inset-y-4 border border-design-blue/40 rounded-3xl z-20 pointer-events-none hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-design-blue text-white text-[10px] px-2 py-0.5 rounded font-bold shadow-lg">
                H1 • Display
              </div>
              {/* Corner Handles */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-design-blue" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-design-blue" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-design-blue" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-design-blue" />
            </motion.div>
          </div>
        </div>

        {/* Subtext / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-16 text-gray-400 text-sm md:text-lg max-w-xl font-light leading-relaxed"
        >
          Bridging the gap between{" "}
          <span className="text-white font-medium border-b border-white/20">
            Design
          </span>{" "}
          and{" "}
          <span className="text-white font-medium border-b border-white/20">
            Engineering
          </span>
          . I build pixel-perfect digital experiences that live on the web.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold text-sm overflow-hidden hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            onMouseEnter={() => setLabel("View Work")}
            onMouseLeave={() => setLabel(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-design-blue via-white to-design-purple opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects <BoltIcon />
            </span>
          </button>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-[#1A1A1A] border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 hover:border-white/30 transition-colors flex items-center gap-2"
          >
            <FigmaLogo />
            <span>About Me</span>
          </button>
        </motion.div>
      </div>

      {/* 4. BOTTOM FADE OVERLAY (Seamless transition) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;

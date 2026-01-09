import React, { useState, useEffect } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useCursor } from "../GlobalCursor";
import { MusicWidget } from "./widgets/MusicWidget";
import { CodeWidget } from "./widgets/CodeWidget";
import { LayerWidget } from "./widgets/LayerWidget";
import { PaletteWidget } from "./widgets/PaletteWidget";
import { ExportWidget } from "./widgets/ExportWidget";
import { CommentWidget } from "./widgets/CommentWidget";
import { ShapeWidget } from "./widgets/ShapeWidget";
import { FigmaLogo, BoltIcon } from "./components/Icons";

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

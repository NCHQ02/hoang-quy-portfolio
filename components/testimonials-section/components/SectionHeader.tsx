import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import { FEEDBACKS } from "../config/feedbacks.config";

/**
 * Section Header Component
 * Displays the "SOCIAL PROOF" title with live viewers and verified stamp
 */
const SectionHeader: React.FC = () => {
  const { setLabel } = useCursor();

  return (
    <div className="mb-40 relative flex flex-col items-center justify-center select-none">
      {/* 1. Wireframe Number Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none z-0"
        style={{ WebkitTextStroke: "2px #fff" }}
      >
        04
      </div>

      {/* 2. Top "Live Viewers" Pill */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 flex items-center gap-4 bg-[#1e1e1e] border border-white/10 pl-2 pr-4 py-2 rounded-full shadow-2xl mb-8 group hover:border-design-green/50 transition-colors"
      >
        <div className="flex -space-x-3">
          {FEEDBACKS.map((fb, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full border-2 border-[#1e1e1e] flex items-center justify-center text-[10px] font-bold text-black shadow-sm transform group-hover:translate-x-1 transition-transform`}
              style={{
                backgroundColor: fb.color.includes("#")
                  ? fb.color.replace("bg-[", "").replace("]", "")
                  : "#888",
              }}
            >
              {fb.initials}
            </div>
          ))}
        </div>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-design-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-design-green"></span>
          </span>
          <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">
            Live Review
          </span>
        </div>
      </motion.div>

      {/* 3. Main Title & Stamp */}
      <div
        className="relative z-10 text-center"
        onMouseEnter={() => setLabel("High Five")}
        onMouseLeave={() => setLabel(null)}
      >
        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-0 md:mb-2 drop-shadow-2xl">
          SOCIAL
        </h2>
        <div className="relative inline-block">
          <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-700 tracking-tighter">
            PROOF
          </h2>

          {/* THE GIANT STAMP */}
          <motion.div
            initial={{ scale: 3, opacity: 0, rotate: 15 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -8 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.4,
            }}
            className="absolute -right-6 top-0 md:-right-24 md:top-6 z-20"
          >
            <div className="relative group/stamp cursor-pointer">
              {/* Glow */}
              <div className="absolute inset-0 bg-design-green blur-xl opacity-0 group-hover/stamp:opacity-40 transition-opacity duration-300" />

              {/* Stamp Body */}
              <div className="relative border-[6px] border-design-green text-design-green px-4 py-1 md:px-8 md:py-2 rounded-xl font-display font-black text-2xl md:text-5xl uppercase tracking-widest bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl transform group-hover/stamp:scale-105 transition-transform">
                Verified
              </div>

              {/* Star Decoration */}
              <div className="absolute -top-3 -right-3 text-2xl md:text-4xl">
                ✨
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Floating Decoration Bubbles */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 bg-[#2C2C2E] px-3 py-2 rounded-xl rounded-bl-none shadow-xl border border-white/5 z-20"
      >
        <span className="text-xl">🔥</span>
        <span className="text-xs font-bold text-white">Insane quality!</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute right-4 md:right-20 bottom-10 hidden md:flex items-center gap-2 bg-[#2C2C2E] px-3 py-2 rounded-xl rounded-br-none shadow-xl border border-white/5 z-20"
      >
        <span className="text-xl">⭐️</span>
        <span className="text-xs font-bold text-white">5 Star Rating</span>
      </motion.div>
    </div>
  );
};

export default SectionHeader;

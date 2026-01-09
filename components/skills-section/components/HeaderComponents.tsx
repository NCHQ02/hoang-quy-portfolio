import React from "react";
import { motion } from "framer-motion";

export const SectionHeader = ({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) => (
  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#2C2C2E] select-none">
    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
      {icon} {title}
    </span>
    <div className="flex gap-1">
      <div className="w-1 h-1 rounded-full bg-gray-500" />
      <div className="w-1 h-1 rounded-full bg-gray-500" />
      <div className="w-1 h-1 rounded-full bg-gray-500" />
    </div>
  </div>
);

export const FloatingSnippet = ({
  type,
  x,
  y,
  rotate,
}: {
  type: "code" | "css";
  x: string;
  y: string;
  rotate: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`absolute z-20 pointer-events-none hidden md:block`}
      style={{ left: x, top: y, rotate }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`p-3 rounded-lg border shadow-xl ${
          type === "code"
            ? "bg-[#0D1117] border-gray-700"
            : "bg-[#1E1E1E] border-white/10"
        }`}
      >
        {type === "code" ? (
          <div className="font-mono text-[10px] leading-tight">
            <div className="text-gray-500 mb-1">// Config</div>
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">skills</span> = [
            </div>
            <div className="pl-2">
              <span className="text-green-400">'React'</span>,{" "}
              <span className="text-green-400">'NextJS'</span>
            </div>
            <div>];</div>
          </div>
        ) : (
          <div className="font-mono text-[10px] leading-tight text-gray-300">
            <div className="flex items-center gap-2 mb-1 border-b border-white/10 pb-1">
              <div className="w-2 h-2 rounded-full bg-design-pink" />
              <span className="text-[8px] font-bold">COMPONENT</span>
            </div>
            <div>
              display: <span className="text-design-yellow">flex</span>;
            </div>
            <div>
              gap: <span className="text-design-blue">16px</span>;
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export const DevModeSwitch = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="relative flex items-center justify-center mb-8"
    >
      <div className="relative bg-[#2C2C2E] border border-white/10 rounded-full p-1.5 flex items-center shadow-2xl">
        {/* Background Slider Animation */}
        <motion.div
          className="absolute left-1.5 top-1.5 bottom-1.5 w-[50%] bg-design-green rounded-full z-0"
          animate={{ x: ["0%", "95%", "0%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Design Tab */}
        <div className="relative z-10 px-6 py-2 flex items-center gap-2 text-white mix-blend-difference">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">
            Design
          </span>
        </div>

        {/* Dev Tab */}
        <div className="relative z-10 px-6 py-2 flex items-center gap-2 text-white mix-blend-difference">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">
            Dev Mode
          </span>
        </div>
      </div>

      {/* Connecting Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute -right-24 top-1/2 -translate-y-1/2 flex items-center gap-2"
      >
        <div className="w-8 h-px bg-white/20" />
        <span className="text-[10px] text-design-green font-mono bg-design-green/10 px-2 py-0.5 rounded border border-design-green/20">
          Auto-Sync
        </span>
      </motion.div>
    </motion.div>
  );
};

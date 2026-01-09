import React from "react";
import { motion } from "framer-motion";

interface FloatingCursorProps {
  name: string;
  color: string;
  initialX: string;
  initialY: string;
  delay: number;
}

/**
 * Floating Cursor Component
 * Animated cursor decoration
 */
const FloatingCursor: React.FC<FloatingCursorProps> = ({
  name,
  color,
  initialX,
  initialY,
  delay,
}) => (
  <motion.div
    className="absolute z-20 pointer-events-none hidden md:block"
    style={{ left: initialX, top: initialY }}
    animate={{
      x: [0, 40, -30, 0],
      y: [0, -20, 40, 0],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay }}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="drop-shadow-lg transform -rotate-12"
    >
      <path
        d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
        fill={color}
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
    <div
      className={`absolute left-4 top-4 px-2 py-0.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap border border-white/20 shadow-sm`}
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  </motion.div>
);

export default FloatingCursor;

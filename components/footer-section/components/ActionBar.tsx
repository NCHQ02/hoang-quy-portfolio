import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import { MoveToolIcon, HandToolIcon, CommentIcon } from "../icons";

interface ActionBarProps {
  onScrollToTop: () => void;
}

/**
 * Action Bar Component
 * Figma-style toolbar with tools and actions
 */
const ActionBar: React.FC<ActionBarProps> = ({ onScrollToTop }) => {
  const { setLabel } = useCursor();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-50 flex items-center gap-2 p-1.5 bg-[#2C2C2E] border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-md mt-4"
    >
      {/* Left Tools Group */}
      <div className="flex items-center">
        <button
          onClick={onScrollToTop}
          onMouseEnter={() => setLabel("Restart")}
          onMouseLeave={() => setLabel(null)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors relative group"
        >
          <MoveToolIcon />
          {/* Tooltip */}
          <span className="absolute -top-10 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Move (V)
          </span>
        </button>
        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-grab active:cursor-grabbing">
          <HandToolIcon />
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
          <CommentIcon />
        </div>
      </div>

      <div className="w-px h-6 bg-white/10 mx-1" />

      {/* Center Context (Project Name) */}
      <div className="hidden md:flex items-center gap-3 px-2">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-xs font-bold text-white">Portfolio 2026</span>
          <span className="text-[10px] text-gray-500">/</span>
          <span className="text-xs text-gray-400">Final Prototype</span>
        </div>
      </div>

      <div className="w-px h-6 bg-white/10 mx-1 hidden md:block" />

      {/* Right Actions (Share/Play) */}
      <div className="flex items-center gap-2">
        {/* Avatars */}
        <div className="hidden sm:flex -space-x-2 mr-2">
          <div className="w-6 h-6 rounded-full border border-[#2C2C2E] bg-design-purple flex items-center justify-center text-[8px] font-bold text-white">
            HQ
          </div>
          <div className="w-6 h-6 rounded-full border border-[#2C2C2E] bg-design-green flex items-center justify-center text-[8px] font-bold text-black">
            YOU
          </div>
        </div>

        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
          className="h-8 px-4 bg-design-blue hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
        >
          Share
        </button>

        <button
          onClick={onScrollToTop}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
          title="Present"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ActionBar;

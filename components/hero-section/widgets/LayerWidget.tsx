import React from "react";
import { motion } from "framer-motion";

export const LayerWidget = ({ x, y }: { x: any; y: any }) => (
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

import React from "react";
import { motion } from "framer-motion";

const PrototypeActionsWidget = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0, x: 20 }} // Hologram Scale Start (Right) - Reduced from 50 to prevent clipping
    whileInView={{ scale: 1, opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.7 }}
    className="absolute right-6 top-1/4 flex flex-col gap-3 z-20 hidden 2xl:flex origin-top-right"
  >
    <div className="bg-[#1e1e1e] border border-white/10 p-2 rounded-lg shadow-xl flex flex-col items-center gap-4">
      <button
        className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-white"
        title="Play"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </button>
      <button
        className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-white"
        title="Share"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      </button>
      <div className="h-px w-4 bg-white/10" />
      <button
        className="w-8 h-8 rounded hover:bg-white/10 flex items-center justify-center text-design-blue"
        title="Flow 1"
      >
        <span className="text-[10px] font-bold">100%</span>
      </button>
    </div>

    <div className="bg-[#1e1e1e] border border-white/10 px-3 py-2 rounded-lg shadow-xl text-center">
      <div className="text-[9px] text-gray-500 uppercase font-bold mb-1">
        Flow starting point
      </div>
      <div className="flex items-center gap-1.5 text-white">
        <div className="w-3 h-3 bg-design-blue flex items-center justify-center text-[8px] font-bold">
          1
        </div>
        <span className="text-[10px]">Main Flow</span>
      </div>
    </div>
  </motion.div>
);

export default PrototypeActionsWidget;

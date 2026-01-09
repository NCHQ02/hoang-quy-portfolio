import React from "react";
import { motion } from "framer-motion";

export const ExportOptionsWidget = () => (
  <motion.div
    initial={{ x: 20, rotateY: -90, opacity: 0 }} // Reduced offset further
    whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.7 }}
    style={{ perspective: 1000 }}
    className="absolute right-6 top-1/3 w-56 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden xl:flex flex-col overflow-hidden z-20 origin-right"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Export Settings
      </span>
      <span className="text-[9px] text-design-blue">PDF</span>
    </div>
    <div className="p-3 space-y-3">
      <div className="space-y-1">
        <div className="text-[9px] text-gray-500 uppercase">Format</div>
        <div className="flex gap-2">
          <div className="flex-1 bg-design-blue/20 border border-design-blue text-white text-[10px] font-bold text-center py-1 rounded">
            PDF
          </div>
          <div className="flex-1 bg-white/5 border border-transparent text-gray-500 text-[10px] text-center py-1 rounded">
            JSON
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-[9px] text-gray-500 uppercase">Include</div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-3 h-3 border border-design-blue bg-design-blue rounded-sm flex items-center justify-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span>Case Studies</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-3 h-3 border border-design-blue bg-design-blue rounded-sm flex items-center justify-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span>References</span>
        </div>
      </div>
      <div className="bg-design-green text-black text-[10px] font-bold py-1.5 text-center rounded cursor-pointer hover:bg-white transition-colors">
        Export Resume
      </div>
    </div>
  </motion.div>
);

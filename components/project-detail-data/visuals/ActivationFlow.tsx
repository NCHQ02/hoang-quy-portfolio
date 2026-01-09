import React from "react";
import { motion } from "framer-motion";

export const ActivationFlow = () => {
  return (
    <div className="w-full flex items-center justify-between gap-2 md:gap-4 select-none px-4 py-8 relative">
      {/* Step 1: Warehouse */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-white/10 flex items-center justify-center shadow-lg relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>
        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
          Clean Data
        </span>
      </div>

      {/* Connector 1 */}
      <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-full bg-design-blue"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Step 2: Logic/Segment */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-12 h-12 rounded-full border-2 border-design-blue bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <span className="text-[10px] font-bold text-white">Rule</span>
        </div>
        <div className="absolute -top-2 text-[8px] bg-design-blue/20 text-design-blue px-2 py-0.5 rounded border border-design-blue/30">
          IF VIP
        </div>
      </div>

      {/* Connector 2 */}
      <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-1/3 h-full bg-design-purple"
          animate={{ x: ["-100%", "300%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.2,
          }}
        />
      </div>

      {/* Step 3: Action */}
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M22 2L11 13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
          Trigger ZNS
        </span>
      </div>
    </div>
  );
};

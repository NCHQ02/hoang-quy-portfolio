import React from "react";
import { motion } from "framer-motion";

export const SiloVisual = () => {
  return (
    <div className="w-full h-72 bg-[#0D1117]/50 backdrop-blur-sm rounded-xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center gap-6">
      {/* The Sources */}
      <div className="flex justify-center gap-8 md:gap-12 w-full px-4">
        {[
          {
            icon: "📢",
            label: "Ads Data",
            color: "text-blue-400",
            bg: "bg-blue-900/20",
            border: "border-blue-500/30",
          },
          {
            icon: "🛒",
            label: "Web/CRM",
            color: "text-purple-400",
            bg: "bg-purple-900/20",
            border: "border-purple-500/30",
          },
          {
            icon: "🧾",
            label: "POS",
            color: "text-green-400",
            bg: "bg-green-900/20",
            border: "border-green-500/30",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 relative group"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center text-2xl relative z-10`}
            >
              {item.icon}
            </div>
            <span className={`text-[10px] font-mono ${item.color} opacity-70`}>
              {item.label}
            </span>

            {/* Question Marks showing confusion */}
            <motion.div
              animate={{ y: [-5, 5, -5], opacity: [0, 1, 0] }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
              className="absolute -top-4 -right-2 text-red-500 font-bold text-xs"
            >
              ?
            </motion.div>
          </div>
        ))}
      </div>

      {/* The Disconnect */}
      <div className="w-full px-12 relative">
        <div className="h-px bg-white/10 w-full border-t border-dashed border-gray-600" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0D1117] px-3 py-1 rounded-full border border-red-500/50 text-red-400 text-[10px] font-bold flex items-center gap-2 shadow-lg">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          IDENTITY MISMATCH
        </div>
      </div>

      {/* The Resulting Chaos */}
      <div className="flex gap-2">
        <div className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">
          Dupes found
        </div>
        <div className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">
          No History
        </div>
      </div>
    </div>
  );
};

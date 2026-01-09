import React from "react";
import { motion } from "framer-motion";

export const MusicWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute top-[12%] left-[5%] md:left-[8%] z-20 pointer-events-none hidden md:block"
  >
    <div className="bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-52 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
      <div className="w-10 h-10 bg-gradient-to-br from-design-purple to-blue-500 rounded-lg flex items-center justify-center animate-pulse">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-xs font-bold text-white truncate">
          Deep Focus.mp3
        </span>
        <span className="text-[10px] text-gray-400">Lo-Fi Radio</span>
      </div>
      <div className="ml-auto flex gap-0.5 items-end h-3">
        {[1, 2, 3, 2, 4, 2].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [4, 12, 4] }}
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
            className="w-0.5 bg-design-green rounded-full"
          />
        ))}
      </div>
    </div>
  </motion.div>
);

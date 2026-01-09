import React from "react";
import { motion } from "framer-motion";

export const PaletteWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute bottom-[15%] left-[20%] z-10 pointer-events-none hidden lg:block"
  >
    <div className="bg-[#1e1e1e]/90 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-2xl flex gap-2 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
      <div className="w-8 h-8 rounded-full bg-[#FF5F56] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-[#FFBD2E] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-[#27C93F] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-[#3b82f6] border border-white/10 ring-2 ring-transparent hover:ring-white/20 transition-all" />
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs border border-white/10 shadow-inner">
        +
      </div>
    </div>
  </motion.div>
);

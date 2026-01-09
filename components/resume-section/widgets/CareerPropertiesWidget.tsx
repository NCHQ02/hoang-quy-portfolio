import React from "react";
import { motion } from "framer-motion";

export const CareerPropertiesWidget = () => (
  <motion.div
    initial={{ x: -20, rotateY: 90, opacity: 0 }} // Reduced offset further
    whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
    style={{ perspective: 1000 }}
    className="absolute left-6 top-1/4 w-64 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden xl:flex flex-col overflow-hidden z-20 origin-left"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Career Properties
      </span>
      <div className="w-2 h-2 rounded-full bg-design-green" />
    </div>
    <div className="p-3 space-y-2">
      <div className="flex justify-between items-center text-xs text-gray-300">
        <span>Role</span>
        <span className="font-mono bg-white/5 px-1.5 rounded">Specialist</span>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-300">
        <span>Status</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-500 font-bold">Open</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-gray-300">
        <span>Relocation</span>
        <span className="font-mono bg-white/5 px-1.5 rounded">Yes</span>
      </div>
      <div className="h-px bg-white/10 my-2" />
      <div className="flex justify-between items-center text-xs text-gray-300">
        <span>Contract</span>
        <div className="w-8 h-4 bg-design-blue rounded-full relative">
          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
        </div>
      </div>
    </div>
  </motion.div>
);

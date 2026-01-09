import React from "react";
import { motion } from "framer-motion";

const LayersWidget = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0, y: 50 }} // Hologram Scale Start
    whileInView={{ scale: 1, opacity: 1, y: 0 }} // Hologram Scale End
    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
    className="absolute left-4 top-1/3 w-60 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20 origin-bottom-left"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Pages & Layers
      </span>
      <span className="text-[10px] text-gray-500">Shift+L</span>
    </div>
    <div className="p-2 space-y-0.5">
      <div className="px-2 py-1 text-[11px] text-gray-300 font-bold bg-white/5 rounded">
        Page 1: Overview
      </div>
      <div className="pl-4">
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded group cursor-default">
          <div className="text-gray-500 text-[9px] group-hover:text-white">
            #
          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-white">
            Case Study: n8n
          </span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded group cursor-default">
          <div className="text-gray-500 text-[9px] group-hover:text-white">
            #
          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-white">
            Case Study: Vibe
          </span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded group cursor-default">
          <div className="text-gray-500 text-[9px] group-hover:text-white">
            #
          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-white">
            Case Study: Data
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default LayersWidget;

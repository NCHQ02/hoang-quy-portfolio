import React from "react";
import { motion } from "framer-motion";

export const SystemMonitorWidget = () => (
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
    className="absolute right-6 top-1/3 w-64 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        System Monitor
      </span>
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[9px] text-green-500">Live</span>
      </div>
    </div>
    <div className="p-4 space-y-4">
      <div>
        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
          <span>Creative Flow</span>
          <span>92%</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: ["0%", "80%", "95%", "85%"] }}
            transition={{
              duration: 3,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="h-full bg-design-purple"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
          <span>Problem Solving</span>
          <span>88%</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: ["0%", "70%", "88%", "75%"] }}
            transition={{
              duration: 4,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut",
              delay: 1,
            }}
            className="h-full bg-design-blue"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="flex-1 bg-black/20 rounded p-1 text-center">
          <div className="text-[9px] text-gray-500">PING</div>
          <div className="text-xs text-white font-mono">12ms</div>
        </div>
        <div className="flex-1 bg-black/20 rounded p-1 text-center">
          <div className="text-[9px] text-gray-500">UPTIME</div>
          <div className="text-xs text-white font-mono">99.9%</div>
        </div>
      </div>
    </div>
  </motion.div>
);

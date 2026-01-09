import React from "react";
import { motion } from "framer-motion";

export const LocalVariablesWidget = () => (
  <motion.div
    initial={{ x: -100, opacity: 0 }} // Drawer Slide Start
    whileInView={{ x: 0, opacity: 1 }} // Drawer Slide End
    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
    className="absolute left-4 top-1/4 w-64 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Local Variables
      </span>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div>
    </div>
    <div className="p-2 space-y-1">
      {[
        {
          name: "Exp.Level",
          value: "Mid-Senior",
          type: "String",
          color: "text-design-green",
        },
        {
          name: "Coffee",
          value: "100%",
          type: "Float",
          color: "text-design-orange",
        },
        {
          name: "Mode",
          value: "Dark",
          type: "Boolean",
          color: "text-design-purple",
        },
        {
          name: "Location",
          value: "VN",
          type: "String",
          color: "text-blue-400",
        },
      ].map((v, i) => (
        <div
          key={i}
          className="flex justify-between items-center px-2 py-1.5 hover:bg-white/5 rounded group cursor-default"
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 font-mono border border-white/10 px-1 rounded">
              #
            </span>
            <span className="text-xs text-gray-300 group-hover:text-white transition-colors">
              {v.name}
            </span>
          </div>
          <span className={`text-xs font-mono ${v.color}`}>{v.value}</span>
        </div>
      ))}
    </div>
    <div className="bg-[#2C2C2E]/50 px-3 py-1.5 border-t border-white/5 flex justify-between items-center text-[9px] text-gray-500">
      <span>4 variables</span>
      <span>+ Create variable</span>
    </div>
  </motion.div>
);

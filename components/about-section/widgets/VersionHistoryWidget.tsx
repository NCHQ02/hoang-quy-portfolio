import React from "react";
import { motion } from "framer-motion";

export const VersionHistoryWidget = () => (
  <motion.div
    initial={{ x: 100, opacity: 0 }} // Drawer Slide Start (Right side)
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.4 }}
    className="absolute right-4 top-1/3 w-56 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20"
  >
    <div className="bg-[#2C2C2E] px-3 py-2 border-b border-white/5 flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase">
        Version History
      </span>
      <span className="text-[10px] text-design-blue cursor-pointer">
        View all
      </span>
    </div>
    <div className="p-3 relative">
      <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10" />
      {[
        { time: "Just now", action: "Portfolio Updated", author: "You" },
        { time: "2h ago", action: "Refined UX Flows", author: "You" },
        { time: "Yesterday", action: "Integrated n8n", author: "You" },
      ].map((item, i) => (
        <div
          key={i}
          className="relative flex items-start gap-3 mb-4 last:mb-0 group"
        >
          <div className="w-2.5 h-2.5 mt-1 rounded-full bg-design-blue border-2 border-[#1e1e1e] relative z-10" />
          <div className="flex flex-col">
            <span className="text-xs text-white font-medium group-hover:text-design-blue transition-colors">
              {item.action}
            </span>
            <span className="text-[10px] text-gray-500">
              {item.time} by {item.author}
            </span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

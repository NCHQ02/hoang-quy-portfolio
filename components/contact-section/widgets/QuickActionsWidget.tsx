import React from "react";
import { motion } from "framer-motion";

const QuickActionsWidget = () => (
  <motion.div
    initial={{ y: -100, rotate: 10, opacity: 0 }} // Drop & Swing Entrance (Right)
    whileInView={{ y: 0, rotate: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.7 }}
    className="absolute right-6 top-1/4 flex flex-col gap-2 z-20 hidden 2xl:flex origin-top-right"
  >
    <div className="bg-[#1e1e1e] border border-white/10 p-2 rounded-lg shadow-xl flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded bg-[#2C2C2E] hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors group">
        <span className="text-xl group-hover:scale-110 transition-transform">
          📧
        </span>
      </div>
      <div className="w-10 h-10 rounded bg-[#2C2C2E] hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors group">
        <span className="text-xl group-hover:scale-110 transition-transform">
          📅
        </span>
      </div>
      <div className="w-10 h-10 rounded bg-[#2C2C2E] hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors group">
        <span className="text-xl group-hover:scale-110 transition-transform">
          💬
        </span>
      </div>
    </div>
    <div className="bg-design-green/20 border border-design-green/50 text-design-green text-[9px] font-bold px-2 py-1 rounded text-center">
      Quick Access
    </div>
  </motion.div>
);

export default QuickActionsWidget;

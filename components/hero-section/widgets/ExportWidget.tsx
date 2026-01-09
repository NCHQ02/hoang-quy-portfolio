import React from "react";
import { motion } from "framer-motion";

export const ExportWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute top-[35%] left-[15%] z-10 pointer-events-none hidden lg:block"
  >
    <div className="bg-[#2C2C2E] border border-white/10 rounded-lg p-3 shadow-2xl w-48 transform rotate-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold text-white">
          Exporting Assets...
        </span>
        <span className="text-[9px] text-gray-400">85%</span>
      </div>
      <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "85%" }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          className="h-full bg-design-blue"
        />
      </div>
    </div>
  </motion.div>
);

import React from "react";
import { motion } from "framer-motion";

export const CodeWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute bottom-[25%] right-[5%] md:right-[8%] z-20 pointer-events-none hidden md:block"
  >
    <div className="bg-[#0d1117]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl font-mono text-[10px] w-64 transform rotate-3 hover:-rotate-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-500">hero.tsx</span>
      </div>
      <div className="text-gray-400 leading-relaxed">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">Portfolio</span> = {"{"}
        <br />
        &nbsp;&nbsp;magic: <span className="text-orange-400">true</span>,
        <br />
        &nbsp;&nbsp;style:{" "}
        <span className="text-green-400">'Creative Chaos'</span>,
        <br />
        &nbsp;&nbsp;impact: <span className="text-yellow-400">Infinity</span>
        <br />
        {"}"};
      </div>
    </div>
  </motion.div>
);

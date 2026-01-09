import React from "react";
import { motion } from "framer-motion";

const VibeCodingVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#0D1117] rounded-b-xl overflow-hidden p-6 flex items-center justify-center">
      {/* Code Editor Layer (Background) */}
      <motion.div
        className="absolute inset-4 bg-[#161B22] border border-white/10 rounded-lg p-3 font-mono text-[10px] text-gray-400 opacity-60 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.6 }}
      >
        <div className="flex gap-2 mb-2 border-b border-white/5 pb-2">
          <span className="text-blue-400">const</span>{" "}
          <span className="text-yellow-200">eventApp</span> ={" "}
          <span className="text-blue-400">new</span>{" "}
          <span className="text-green-400">VibeApp</span>();
        </div>
        <div className="pl-4 space-y-1">
          <div>
            <span className="text-purple-400">eventApp</span>.
            <span className="text-blue-300">onScan</span>((
            <span className="text-orange-300">code</span>) ={">"} {"{"}
          </div>
          <div className="pl-4">
            <span className="text-gray-500">// Auto-tagging GTM</span>
          </div>
          <div className="pl-4">
            <span className="text-yellow-200">GTM</span>.
            <span className="text-blue-300">push</span>({"{"} event:{" "}
            <span className="text-green-300">'offline_checkin'</span> {"}"});
          </div>
          <div className="pl-4">
            <span className="text-yellow-200">CMS</span>.
            <span className="text-blue-300">validate</span>(
            <span className="text-orange-300">code</span>);
          </div>
          <div>{"}"});</div>
        </div>
      </motion.div>

      {/* Mobile App Mockup (Foreground) */}
      <motion.div
        className="relative z-10 w-32 h-56 bg-black border-4 border-gray-800 rounded-[20px] shadow-2xl overflow-hidden"
        initial={{ y: 40, rotate: 5, opacity: 0 }}
        whileInView={{ y: 0, rotate: -5, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl z-20"></div>

        {/* App Screen */}
        <div className="w-full h-full bg-gradient-to-br from-green-900 to-black p-3 pt-8 flex flex-col items-center">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M3 3h6v6H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h6v6H3z" />
            </svg>
          </div>
          <div className="text-white text-[10px] font-bold mb-1">
            QR SUCCESS
          </div>
          <div className="text-green-400 text-[8px] mb-4">
            You are checked in!
          </div>
          <div className="w-full h-8 bg-white/10 rounded-lg mb-2"></div>
          <div className="w-full h-8 bg-white/10 rounded-lg"></div>
        </div>
      </motion.div>

      {/* Selection Box Decoration */}
      <div className="absolute top-10 right-10">
        <div className="px-2 py-1 bg-green-500 text-black text-[9px] font-bold rounded-sm shadow-lg transform rotate-6">
          Affiliate CMS
        </div>
      </div>
    </div>
  );
};

export default VibeCodingVisual;

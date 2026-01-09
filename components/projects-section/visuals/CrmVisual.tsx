import React from "react";
import { motion } from "framer-motion";

const CrmVisual = () => {
  return (
    <div className="w-full h-full bg-[#050505] rounded-xl overflow-hidden relative border border-white/5 md:border-none flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent" />

      {/* Central User Avatar */}
      <motion.div
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-[2px] z-20 shadow-[0_0_40px_rgba(234,88,12,0.3)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
          {/* Abstract User Icon */}
          <div className="w-8 h-8 bg-orange-500 rounded-t-xl opacity-80" />
        </div>
        {/* Ping effect */}
        <div className="absolute inset-0 rounded-full bg-orange-500 z-[-1] animate-ping opacity-20" />
      </motion.div>

      {/* Orbiting Channels */}
      <div className="absolute w-[240px] h-[240px] animate-spin-slow opacity-80">
        {/* Channel 1: Email */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }} // Counter rotate to keep icon upright if needed, or just let it spin
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-10 h-10 bg-[#1e1e1e] border border-orange-500/50 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-sm">📧</span>
          </div>
        </motion.div>

        {/* Channel 2: Zalo */}
        <motion.div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-[#1e1e1e] border border-blue-500/50 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-sm">💬</span>
          </div>
        </motion.div>

        {/* Channel 3: Push */}
        <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-10 h-10 bg-[#1e1e1e] border border-red-500/50 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-sm">🔔</span>
          </div>
        </motion.div>
      </div>

      {/* Scan Rings */}
      <div className="absolute w-[240px] h-[240px] border border-white/5 rounded-full" />
      <div className="absolute w-[160px] h-[160px] border border-white/10 rounded-full" />

      {/* Flying Messages */}
      <motion.div
        className="absolute text-[20px]"
        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
        animate={{ x: 80, y: -80, opacity: [0, 1, 0], scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        ✉️
      </motion.div>
      <motion.div
        className="absolute text-[20px]"
        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
        animate={{ x: -80, y: 40, opacity: [0, 1, 0], scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
      >
        💬
      </motion.div>

      {/* Floating Status Label */}
      <div className="absolute bottom-4 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono text-gray-300 uppercase tracking-wider">
            Journey Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default CrmVisual;

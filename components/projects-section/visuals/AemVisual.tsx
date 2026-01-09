import React from "react";
import { motion } from "framer-motion";

const AemVisual = () => {
  return (
    <div className="w-full h-full bg-[#050505] rounded-xl overflow-hidden relative border border-white/5 md:border-none flex flex-col justify-end">
      <div className="absolute inset-0 bg-red-900/5" />

      {/* 3D-like Isometric Architecture Building */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48 transform rotate-x-60 rotate-z-45 perspective-1000">
          {/* Grid Base */}
          <div className="absolute inset-0 border border-white/5 rounded-lg bg-black/40 backdrop-blur-sm" />

          {/* Stacking Blocks Animation */}

          {/* Block 1 (Base) */}
          <motion.div
            className="absolute left-4 right-4 bottom-4 h-8 bg-red-900/80 border border-red-500/50 rounded shadow-lg"
            style={{ transform: "translateZ(0px)" }}
            initial={{ opacity: 0, z: 100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Block 2 (Middle) */}
          <motion.div
            className="absolute left-8 right-8 bottom-4 h-8 bg-orange-900/80 border border-orange-500/50 rounded shadow-lg"
            style={{ transform: "translateZ(40px)" }} // Fake Z with absolute positioning adjustment if real 3d not fully supported widely without extra CSS, but sticking to Framer logic
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: -15 }} // Manual offset for pseudo-3D
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Block 3 (Top) */}
          <motion.div
            className="absolute left-12 right-12 bottom-4 h-8 bg-white/10 border border-white/30 rounded shadow-lg backdrop-blur text-[8px] flex items-center justify-center text-white font-mono"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: -30 }} // Manual offset
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          >
            COMPONENT
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements (Overlay) */}
      <div className="relative z-10 p-4 w-full">
        <motion.div
          className="w-full bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-lg p-3 flex gap-3 shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center font-bold text-white text-xs">
            AEM
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-1.5 w-2/3 bg-white/20 rounded-full" />
            <div className="flex gap-1">
              <div className="h-1.5 w-8 bg-green-500/50 rounded-full" />
              <div className="h-1.5 w-12 bg-white/10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center text-green-400 text-xs">●</div>
        </motion.div>
      </div>
    </div>
  );
};

export default AemVisual;

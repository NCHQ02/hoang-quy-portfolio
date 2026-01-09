import React from "react";
import { motion } from "framer-motion";

export const HeroContent = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block bg-design-green/10 border border-design-green/30 text-design-green px-3 py-1 rounded mb-4 text-xs font-bold"
      >
        v2.0.0 RELEASE
      </motion.div>

      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
        PRODUCT <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-green to-emerald-600">
          ENGINEERING SUITE
        </span>
      </h1>

      <p className="text-gray-400 text-lg mb-8 leading-relaxed font-sans">
        Stop manual debugging. I build internal tools that auto-tag GTM, sync
        offline rewards, and manage affiliate notifications automatically.
      </p>

      <div className="flex gap-4">
        <button className="bg-design-green text-black px-6 py-3 rounded font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(74,222,128,0.3)]">
          npm install suite
        </button>
        <button className="bg-transparent border border-white/20 text-white px-6 py-3 rounded font-bold hover:bg-white/10 transition-colors font-sans">
          View Documentation
        </button>
      </div>
    </div>
  );
};

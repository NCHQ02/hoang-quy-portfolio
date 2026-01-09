import React from "react";
import { motion } from "framer-motion";

export const SegmentationCluster = () => {
  return (
    <div className="relative w-full h-72 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
          backgroundSize: "15px 15px",
        }}
      />

      {/* Axis Labels */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] text-gray-500 tracking-widest">
        VALUE (LTV)
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 tracking-widest">
        ENGAGEMENT
      </div>

      {/* Clusters */}
      <div className="relative w-full h-full p-8">
        {/* VIP Cluster (Top Right) */}
        <div className="absolute top-8 right-8 w-28 h-28 rounded-full border border-design-purple/30 bg-design-purple/5 flex flex-col items-center justify-center z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="text-design-purple text-xs font-bold"
          >
            CHAMPIONS
          </motion.div>
          <span className="text-[8px] text-gray-400">High Value</span>
          {/* Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-design-purple rounded-full"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: Math.random() * 50 - 25,
                y: Math.random() * 50 - 25,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Churn Risk (Top Left) */}
        <div className="absolute top-12 left-24 w-20 h-20 rounded-full border border-red-500/30 bg-red-500/5 flex flex-col items-center justify-center">
          <div className="text-red-400 text-[10px] font-bold">AT RISK</div>
          <span className="text-[8px] text-gray-500 text-center">
            High Value / Low Eng
          </span>
        </div>

        {/* New/Low (Bottom Left) */}
        <div className="absolute bottom-8 left-20 w-24 h-24 rounded-full border border-blue-500/30 bg-blue-500/5 flex flex-col items-center justify-center">
          <div className="text-blue-400 text-[10px] font-bold">NEW USERS</div>
          <span className="text-[8px] text-gray-500">Acquisition</span>
        </div>

        {/* Floating Unassigned Dots finding their home */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`u-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            initial={{ x: "50%", y: "50%", opacity: 0 }}
            whileInView={{
              x: i % 2 === 0 ? "80%" : "20%",
              y: i % 3 === 0 ? "20%" : "80%",
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
};

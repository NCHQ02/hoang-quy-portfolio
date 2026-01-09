import React from "react";
import { motion } from "framer-motion";

const N8nVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#181818] rounded-b-xl overflow-hidden p-4 grid-bg">
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Nodes */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-24 bg-[#2A2A2A] border border-design-orange rounded-lg p-2 shadow-lg z-10"
      >
        <div className="text-[9px] text-design-orange font-bold mb-1">
          WEBHOOK
        </div>
        <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
        <div className="h-1 w-2/3 bg-gray-700 rounded"></div>
        <div className="absolute -right-1 top-1/2 w-2 h-2 bg-design-orange rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 bg-[#2A2A2A] border border-design-purple rounded-lg p-2 shadow-lg z-10"
      >
        <div className="flex justify-between items-center mb-1">
          <div className="text-[9px] text-design-purple font-bold">
            AI AGENT
          </div>
          <div className="text-[8px] bg-design-purple text-white px-1 rounded">
            GEMINI
          </div>
        </div>
        <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
        <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
        <div className="h-1 w-1/2 bg-gray-700 rounded"></div>
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-design-purple rounded-full"></div>
        <div className="absolute -right-1 top-1/2 w-2 h-2 bg-design-purple rounded-full"></div>
      </motion.div>

      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <motion.path
          d="M100 100 C 150 100, 150 100, 200 100" // Simplified path for demo
          stroke="#555"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>

      {/* Output Nodes */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-10 right-4 w-24 bg-[#2A2A2A] border border-blue-400 rounded-lg p-2 shadow-lg z-10"
      >
        <div className="text-[9px] text-blue-400 font-bold mb-1">LINKEDIN</div>
        <div className="h-1 w-full bg-gray-700 rounded"></div>
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-10 right-4 w-24 bg-[#2A2A2A] border border-green-400 rounded-lg p-2 shadow-lg z-10"
      >
        <div className="text-[9px] text-green-400 font-bold mb-1">
          GO SHEETS
        </div>
        <div className="h-1 w-full bg-gray-700 rounded"></div>
        <div className="absolute -left-1 top-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default N8nVisual;

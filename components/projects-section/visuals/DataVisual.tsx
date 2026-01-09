import React from "react";
import { motion } from "framer-motion";

const DataVisual = () => {
  return (
    <div className="relative w-full h-full bg-[#1E1E2E] rounded-b-xl overflow-hidden p-4 grid grid-cols-2 gap-4">
      {/* Background with slight grid for BI feel */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Left: Data Source / Table */}
      <div className="flex flex-col gap-2 relative z-10">
        <div className="bg-[#252535] rounded border border-white/5 p-2 h-full shadow-lg overflow-hidden relative group">
          <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-1">
            <div className="text-[8px] text-gray-400 font-mono">
              CLEAN_DATA_V2.CSV
            </div>
            <div className="text-[8px] text-design-green font-bold">
              100% CLEAN
            </div>
          </div>
          {/* Fake Table Rows */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-1 mb-1 opacity-60">
              <div className="w-1/4 h-1.5 bg-gray-600 rounded-sm"></div>
              <div className="w-1/4 h-1.5 bg-gray-600 rounded-sm"></div>
              <div className="w-1/2 h-1.5 bg-blue-500/50 rounded-sm"></div>
            </div>
          ))}
          {/* Scan line effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-design-blue/10 to-transparent pointer-events-none"
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Right: Visualization Widgets */}
      <div className="flex flex-col gap-2 relative z-10">
        {/* Widget 1: Pie Chart (Segmentation) */}
        <div className="flex-1 bg-[#252535] rounded border border-white/5 p-2 flex flex-col justify-center items-center shadow-lg relative">
          <div className="absolute top-1 left-2 text-[8px] text-gray-400">
            SEGMENTS
          </div>
          <div className="w-12 h-12 rounded-full border-[3px] border-yellow-500 border-t-purple-500 border-r-blue-500 box-border rotate-45 transform"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold text-white">
            RFM
          </div>
        </div>

        {/* Widget 2: Bar Chart (Trends) */}
        <div className="flex-1 bg-[#252535] rounded border border-white/5 p-2 flex items-end justify-between gap-1 shadow-lg relative">
          <div className="absolute top-1 left-2 text-[8px] text-gray-400">
            GROWTH
          </div>
          <motion.div
            className="w-full bg-blue-900 rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: "40%" }}
          />
          <motion.div
            className="w-full bg-blue-700 rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: "60%" }}
          />
          <motion.div
            className="w-full bg-blue-500 rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: "30%" }}
          />
          <motion.div
            className="w-full bg-design-green rounded-t-sm shadow-[0_0_10px_rgba(74,222,128,0.5)]"
            initial={{ height: 0 }}
            whileInView={{ height: "80%" }}
          />
        </div>
      </div>

      {/* Floating Tooltips */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-[15%] right-[10%] bg-[#FFC107] text-black text-[8px] font-bold px-1.5 py-0.5 rounded shadow-xl z-20 transform rotate-12"
      >
        Power BI
      </motion.div>
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[20%] left-[15%] bg-[#4285F4] text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-xl z-20 transform -rotate-6"
      >
        Looker
      </motion.div>
    </div>
  );
};

export default DataVisual;

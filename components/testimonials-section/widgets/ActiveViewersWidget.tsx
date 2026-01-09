import React from "react";
import { motion } from "framer-motion";
import { ACTIVE_VIEWERS } from "../config/feedbacks.config";

/**
 * Active Viewers Widget
 * Shows currently viewing users (desktop only)
 */
const ActiveViewersWidget = () => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    className="absolute left-6 top-1/3 flex flex-col gap-2 z-20 hidden 2xl:flex"
  >
    <div className="bg-[#2C2C2E] px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-gray-400 font-bold uppercase self-start mb-1 shadow-lg">
      Currently Viewing
    </div>
    <div className="flex flex-col gap-2">
      {ACTIVE_VIEWERS.map((user, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: user.delay,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="flex items-center gap-2 group cursor-default"
        >
          <div
            className={`w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-white shadow-lg ${user.color} ring-2 ring-white/10 ring-offset-1 ring-offset-[#0a0a0a]`}
          >
            {user.initial}
          </div>
          <div className="bg-[#1e1e1e] border border-white/10 px-2 py-1 rounded text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity -ml-1 whitespace-nowrap">
            Online
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ActiveViewersWidget;

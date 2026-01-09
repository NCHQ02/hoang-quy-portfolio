import React from "react";
import { motion } from "framer-motion";
import { REACTION_EMOJIS } from "../config/feedbacks.config";

/**
 * Reaction Palette Widget
 * Shows reaction emojis (desktop only)
 */
const ReactionPaletteWidget = () => (
  <motion.div
    initial={{ x: 50, opacity: 0, scale: 0.8 }}
    whileInView={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
    className="absolute right-6 top-1/4 w-12 bg-[#2C2C2E] border border-white/10 rounded-full shadow-2xl hidden 2xl:flex flex-col items-center py-2 gap-2 z-20"
  >
    {REACTION_EMOJIS.map((emoji, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
        whileHover={{ scale: 1.4 }}
        className="w-8 h-8 flex items-center justify-center text-lg cursor-pointer hover:bg-white/10 rounded-full transition-colors relative group"
      >
        {emoji}
        {/* Tooltip on hover */}
        <span className="absolute right-10 bg-black text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          React
        </span>
      </motion.div>
    ))}
    <div className="w-8 h-px bg-white/10 my-1" />
    <motion.div
      whileHover={{ rotate: 90 }}
      className="w-8 h-8 flex items-center justify-center text-lg cursor-pointer hover:bg-white/10 rounded-full text-gray-400"
    >
      +
    </motion.div>
  </motion.div>
);

export default ReactionPaletteWidget;

import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import CommentPin from "./CommentPin";
import type { Feedback } from "../types";

interface CommentCardProps {
  feedback: Feedback;
  index: number;
}

/**
 * Comment Card Component
 * Displays a single testimonial/feedback card
 */
const CommentCard: React.FC<CommentCardProps> = ({ feedback, index }) => {
  const { setLabel } = useCursor();

  // Convert generic color class to actual hex for the cursor SVG (simplified mapping)
  const getHex = (cls: string) => {
    if (cls.includes("#")) return cls.replace("bg-[", "").replace("]", "");
    return "#000";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative group w-full md:max-w-md"
      onMouseEnter={() => setLabel("Reply")}
      onMouseLeave={() => setLabel(null)}
    >
      {/* Collaborative Cursor (Simulated) */}
      <motion.div
        className="absolute -top-8 -right-8 z-20 pointer-events-none hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10, y: 10 }}
        animate={{ x: [0, -5, 0], y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Custom SVG Cursor matching the user color */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-md"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill={getHex(feedback.color)}
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className={`absolute left-4 top-4 ${feedback.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border border-white/20`}
          >
            {feedback.name}
          </div>
        </div>
      </motion.div>

      {/* The Comment Box */}
      <div className="bg-[#2C2C2E] border border-white/10 rounded-xl p-4 shadow-2xl relative hover:border-white/20 transition-colors">
        {/* Header: Pin + Name + Time */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <CommentPin color={feedback.color} initials={feedback.initials} />
            <div>
              <h4 className="text-sm font-bold text-white leading-none mb-1">
                {feedback.name}
              </h4>
              <p className="text-[10px] text-gray-500 font-mono">
                {feedback.role}
              </p>
            </div>
          </div>
          <span className="text-[10px] text-gray-600">Now</span>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          "{feedback.text}"
        </p>

        {/* Footer: Resolve Button (Fake Interactive) */}
        <div className="border-t border-white/5 pt-3 flex items-center justify-between">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-gray-600 border border-[#2C2C2E]" />
            <div className="w-5 h-5 rounded-full bg-gray-500 border border-[#2C2C2E]" />
            <div className="w-5 h-5 rounded-full bg-gray-400 border border-[#2C2C2E] flex items-center justify-center text-[8px] text-black font-bold">
              +1
            </div>
          </div>
          <button className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
            <div className="w-3 h-3 border border-gray-500 rounded-full group-hover:border-white" />
            Mark as Resolved
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CommentCard;

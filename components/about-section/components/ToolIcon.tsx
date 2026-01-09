import React from "react";
import { motion } from "framer-motion";

export const ToolIcon = ({
  name,
  bg,
  txt,
}: {
  name: string;
  bg: string;
  txt: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: -5 }}
    className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg cursor-pointer relative group"
    style={{ backgroundColor: bg, color: txt }}
  >
    {name}
    {/* Tooltip */}
    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-black text-white px-2 py-1 rounded">
      {name}
    </span>
  </motion.div>
);

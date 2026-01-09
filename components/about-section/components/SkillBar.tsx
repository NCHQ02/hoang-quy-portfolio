import React from "react";
import { motion } from "framer-motion";

export const SkillBar = ({
  label,
  level,
  color,
  hideLabel = false,
}: {
  label: string;
  level: string;
  color: string;
  hideLabel?: boolean;
}) => (
  <div className="mb-4">
    {!hideLabel && (
      <div className="flex justify-between mb-1">
        <span className="text-sm font-bold text-gray-300">{label}</span>
        <span className="text-xs font-mono text-gray-500">{level}</span>
      </div>
    )}
    <div className="w-full bg-black/50 h-3 rounded-full overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: level }}
        transition={{ duration: 1, ease: "circOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  </div>
);

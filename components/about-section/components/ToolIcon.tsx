import React from "react";
import { motion } from "framer-motion";

interface ToolIconProps {
  name: string;
  bg?: string;
  txt?: string;
  icon?: string; // URL to external icon (e.g., icons8)
  label?: string; // Text label (e.g., "Ai", "Ps", "Fi")
  showLabel?: boolean; // Show label below icon (default: true)
}

/**
 * ToolIcon Component
 * Supports both text-based icons and external image URLs
 *
 * Usage:
 * - Text icon: <ToolIcon name="Adobe Illustrator" label="Ai" bg="#330000" txt="#FF9A00" />
 * - Image icon: <ToolIcon name="Figma" icon="https://img.icons8.com/color/96/figma.png" />
 */
export const ToolIcon: React.FC<ToolIconProps> = ({
  name,
  bg = "#2C2C2E",
  txt = "#FFFFFF",
  icon,
  label,
  showLabel = true,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 group/tool">
      {/* Icon Container */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg cursor-pointer relative overflow-hidden"
        style={{ backgroundColor: icon ? "transparent" : bg, color: txt }}
      >
        {/* Render external icon if provided */}
        {icon ? (
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          /* Render text label if no icon */
          <span>{label || name.substring(0, 2)}</span>
        )}

        {/* Hover Tooltip on Icon (full name) */}
        <span className="absolute -top-8 opacity-0 group-hover/tool:opacity-100 transition-opacity text-[10px] bg-black text-white px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none">
          {name}
        </span>
      </motion.div>

      {/* Label below icon with tooltip */}
      {showLabel && (
        <div className="relative flex items-center justify-center w-full">
          <span
            className="text-[10px] text-gray-400 text-center leading-tight max-w-[64px] truncate cursor-default"
            title={label || name} // Native HTML tooltip
          >
            {label || name}
          </span>

          {/* Enhanced Tooltip on Label Hover */}
          <span className="absolute -bottom-8 opacity-0 group-hover/tool:opacity-100 transition-opacity text-[10px] bg-black text-white px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none">
            {label || name}
          </span>
        </div>
      )}
    </div>
  );
};

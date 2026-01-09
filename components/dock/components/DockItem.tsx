import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DockItemData } from "../types";

interface DockItemProps {
  item: DockItemData;
  isActive: boolean;
  isHovered: boolean;
  isMobile: boolean;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
}

/**
 * Individual Dock Item Component
 * Displays a single item in the dock with hover and active states
 */
const DockItem: React.FC<DockItemProps> = ({
  item,
  isActive,
  isHovered,
  isMobile,
  onHover,
  onClick,
}) => {
  const showTooltip = isActive || (isHovered && !isMobile);

  return (
    <motion.div
      onClick={() => onClick(item.id)}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      className="relative group flex flex-col items-center flex-1 md:flex-none"
      whileHover={{ scale: 1.15, translateY: -10 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: isActive ? 1.1 : 1,
        translateY: isActive && !isMobile ? -5 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Tooltip / Title */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            className={`absolute -top-10 md:-top-12 px-2 py-1 md:px-3 md:py-1.5 rounded-lg bg-[#2C2C2E] border border-white/10 text-white shadow-xl whitespace-nowrap z-20 pointer-events-none ${
              isActive
                ? "text-[10px] md:text-xs font-bold"
                : "text-[10px] text-gray-400"
            }`}
          >
            {isActive && <span className="mr-1.5 text-design-green">●</span>}
            {item.shortLabel && isMobile ? item.shortLabel : item.label}

            {/* Triangle Pointer */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#2C2C2E]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon Container - Responsive Size */}
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl cursor-pointer transition-opacity duration-300 flex items-center justify-center ${
          isActive
            ? "opacity-100 ring-2 ring-white/20 bg-white/10"
            : "opacity-60 hover:opacity-100"
        }`}
      >
        {item.icon}
      </div>

      {/* Active Indicator (Desktop Only) */}
      {isActive && !isMobile && (
        <motion.div
          layoutId="activeDot"
          className="absolute -bottom-2 w-1 h-1 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      )}

      {/* Active Indicator (Mobile Only) */}
      {isActive && isMobile && (
        <motion.div
          layoutId="activeDotMobile"
          className="absolute -bottom-1 w-1 h-1 bg-design-green rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"
        />
      )}
    </motion.div>
  );
};

export default DockItem;

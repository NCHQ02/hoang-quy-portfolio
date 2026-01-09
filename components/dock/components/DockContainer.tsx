import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DockItem from "./DockItem";
import { TrashIcon } from "../icons";
import { DOCK_ITEMS } from "../config/dock-items.config";
import { useDockScroll, scrollToSection } from "../hooks/useDockScroll";

/**
 * Main Dock Container Component
 * macOS-style floating dock for navigation
 */
const DockContainer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const activeSection = useDockScroll(DOCK_ITEMS);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex justify-center pointer-events-none pb-safe-area-bottom">
      {/* Container with safe area padding for iOS home indicator */}
      <div className="relative pointer-events-auto w-full max-w-2xl px-2 md:px-4 pb-2 md:pb-6">
        {/* The Dock Itself */}
        <div
          className={`relative flex items-end justify-between md:justify-center gap-1 md:gap-3 px-2 py-2 md:px-3 md:py-3 bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 ${
            isMobile
              ? "rounded-t-2xl border-b-0 pb-4"
              : "rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]"
          } mx-0 md:mx-0`}
        >
          {DOCK_ITEMS.map((item) => (
            <DockItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              isHovered={hoveredNode === item.id}
              isMobile={isMobile}
              onHover={setHoveredNode}
              onClick={scrollToSection}
            />
          ))}

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block w-[1px] h-8 bg-white/10 mx-1 self-center" />

          {/* Trash/Reset (Hidden on Mobile to save space) */}
          <motion.div
            className="hidden md:flex w-12 h-12 rounded-xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity items-center justify-center group relative"
            whileHover={{ scale: 1.1, translateY: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setHoveredNode("reset")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <AnimatePresence>
              {hoveredNode === "reset" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.8 }}
                  className="absolute -top-12 px-3 py-1.5 rounded-lg bg-[#2C2C2E] border border-white/10 text-[10px] text-white shadow-xl whitespace-nowrap z-20 pointer-events-none"
                >
                  Scroll to Top
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#2C2C2E]" />
                </motion.div>
              )}
            </AnimatePresence>

            <TrashIcon />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DockContainer;

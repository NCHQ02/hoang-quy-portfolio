import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import { SelectionHandle } from "./Shared";

/**
 * Section Header Component
 * "ABOUT ME" title with Figma-style design
 */
const SectionHeader: React.FC = () => {
  const { setLabel } = useCursor();

  return (
    <div className="mb-32 relative flex justify-center items-center select-none">
      {/* 1. Wireframe Background Number */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-display font-bold leading-none text-transparent stroke-text opacity-[0.03] pointer-events-none"
        style={{ WebkitTextStroke: "2px #fff" }}
      >
        01
      </div>

      <div className="relative z-10 text-center">
        {/* Top Script Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 0.6 }}
          className="absolute -top-8 -left-4 md:-top-12 md:-left-24 z-20"
        >
          <div className="bg-design-yellow text-black font-script text-xl md:text-2xl px-4 py-1 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transform -rotate-3 border-2 border-black/10">
            Quy is...?
          </div>
          {/* Hand-drawn Arrow SVG */}
          <svg
            className="absolute top-full left-1/2 w-8 h-8 text-design-yellow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 0c0 12 2 12 8 18" />
            <path d="M16 14l-4 4-4-4" />
          </svg>
        </motion.div>

        {/* Main Title Group */}
        <div className="flex flex-col items-center">
          {/* "ABOUT" */}
          <div className="relative group">
            {/* Ruler Visualization */}
            <div className="absolute -top-6 left-0 w-full h-4 border-b border-white/20 flex justify-between items-end px-1 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="h-2 w-px bg-white/20"></div>
              <span className="text-[9px] text-gray-500 font-mono mb-1">
                auto-width
              </span>
              <div className="h-2 w-px bg-white/20"></div>
            </div>

            <h2
              className="text-[15vw] md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter cursor-default"
              onMouseEnter={() => setLabel("Text")}
              onMouseLeave={() => setLabel(null)}
            >
              ABOUT
            </h2>
          </div>

          {/* "ME" - Component Style */}
          <motion.div
            className="relative mt-2 md:mt-4 ml-[10vw] md:ml-40"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setLabel("Inspect")}
            onMouseLeave={() => setLabel(null)}
          >
            {/* The "Component" Frame */}
            <div className="relative border-[2px] border-dashed border-design-purple px-8 md:px-14 py-0 rounded-lg bg-design-purple/5 backdrop-blur-sm">
              {/* Component Label (Diamond) */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-design-purple text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/20">
                <div className="w-2 h-2 border border-white rotate-45 bg-design-purple" />
                <span className="uppercase tracking-wider">Master</span>
              </div>

              <h2 className="text-[15vw] md:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-design-purple to-purple-300 leading-[0.85] tracking-tighter">
                ME
              </h2>

              {/* Handles */}
              <SelectionHandle className="-top-1.5 -left-1.5 border-design-purple bg-white" />
              <SelectionHandle className="-top-1.5 -right-1.5 border-design-purple bg-white" />
              <SelectionHandle className="-bottom-1.5 -left-1.5 border-design-purple bg-white" />
              <SelectionHandle className="-bottom-1.5 -right-1.5 border-design-purple bg-white" />
            </div>

            {/* Property Inspector (Right Side) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 bg-[#1e1e1e] border border-white/10 p-2.5 rounded-lg shadow-2xl hidden md:flex flex-col gap-2 w-28"
            >
              <div className="flex justify-between items-center text-[9px] text-gray-500 border-b border-white/5 pb-1">
                <span className="font-bold">PROPERTIES</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-gray-500">State</span>
                  <span className="text-design-green font-mono bg-design-green/10 px-1 rounded">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-gray-500">Fill</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-design-purple to-purple-300" />
                    <span className="text-gray-300">100%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[9px]">
                  <span className="text-gray-500">Effects</span>
                  <span className="text-gray-300">Glow</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

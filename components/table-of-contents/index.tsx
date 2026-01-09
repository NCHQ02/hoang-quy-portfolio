import React from "react";
import { motion } from "framer-motion";
import { TOCItem } from "./components";
import { TOC_ITEMS } from "./config/items.config";

/**
 * Table of Contents Component
 * Navigation grid with section links
 */
const TableOfContents: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white relative z-10">
            <span className="font-script text-accent font-normal absolute -top-8 left-0 text-4xl md:text-5xl -rotate-6">
              Table Of
            </span>
            Contents
          </h2>
        </motion.div>

        {/* Grid Layout Container */}
        <div className="relative border border-dashed border-white/20 p-8 md:p-12 rounded-sm backdrop-blur-[2px]">
          {/* Decorative Corner Squares (Anchors) */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black border border-white/40" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black border border-white/40" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black border border-white/40" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black border border-white/40" />

          {/* Center Divider Anchor (Optional decoration) */}
          <div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-white/40" />
          <div className="hidden md:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-white/40" />

          {/* Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {TOC_ITEMS.map((item, index) => (
              <TOCItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Resize Icon Decoration (Bottom Right) */}
        <div className="absolute bottom-24 right-4 md:right-1/4 opacity-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;

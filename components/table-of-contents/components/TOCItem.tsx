import React from "react";
import { motion } from "framer-motion";
import type { TOCItem } from "../types";

interface TOCItemComponentProps {
  item: TOCItem;
  index: number;
}

/**
 * TOC Item Component
 * Individual table of contents item with animation
 */
const TOCItemComponent: React.FC<TOCItemComponentProps> = ({ item, index }) => (
  <motion.a
    href={item.href}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative flex items-center justify-center md:justify-start h-32 md:h-40 cursor-pointer"
  >
    {/* Large Background Number */}
    <span className="absolute left-0 top-0 md:-left-4 md:-top-6 text-[8rem] md:text-[10rem] font-bold leading-none text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-300 select-none z-0">
      {item.id}
    </span>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center md:items-start ml-4 md:ml-12 group-hover:translate-x-2 transition-transform duration-300">
      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <span className="font-script text-accent text-2xl md:text-3xl -mt-2 ml-8 md:ml-12 rotate-[-5deg] block">
        {item.scriptText}
      </span>
    </div>
  </motion.a>
);

export default TOCItemComponent;

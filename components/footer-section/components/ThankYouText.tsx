import React from "react";
import { motion } from "framer-motion";

/**
 * Thank You Text Component
 * Large animated "THANK YOU!" text with end-of-flow indicator
 */
const ThankYouText: React.FC = () => (
  <div className="relative mb-24 text-center select-none w-full flex justify-center">
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-[12vw] md:text-[13vw] font-display font-black leading-none tracking-tighter text-white drop-shadow-2xl whitespace-nowrap"
    >
      <span className="hover:text-design-blue transition-colors duration-300">
        THANK
      </span>
      <span className="inline-block w-[2vw]" /> {/* Spacer */}
      <span className="hover:text-design-purple transition-colors duration-300">
        YOU!
      </span>
    </motion.h1>

    {/* End of Flow Indicator */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-4 flex flex-col items-center gap-0">
      <div className="w-px h-16 bg-design-blue/50" />
      <div className="bg-design-blue text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
        End of Flow
      </div>
      {/* Connection line to Action Bar */}
      <div className="w-px h-8 bg-design-blue/30" />
    </div>
  </div>
);

export default ThankYouText;

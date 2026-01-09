import React from "react";
import { motion } from "framer-motion";

export const CommentWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute bottom-[35%] left-[5%] z-10 pointer-events-none hidden lg:block"
  >
    <div className="relative">
      <div className="bg-white text-black text-[11px] font-bold px-4 py-2 rounded-2xl rounded-bl-none shadow-xl transform -rotate-6 max-w-[120px]">
        Can we make the logo bigger? 🫠
      </div>
      <div className="absolute -bottom-6 -left-2 flex items-center gap-1">
        <div className="w-5 h-5 rounded-full bg-design-orange border border-white flex items-center justify-center text-[8px] font-bold text-white">
          PM
        </div>
      </div>
    </div>
  </motion.div>
);

import React from "react";
import { motion } from "framer-motion";

export const ShapeWidget = ({ x, y }: { x: any; y: any }) => (
  <motion.div
    style={{ x, y }}
    className="absolute top-[15%] right-[5%] z-0 pointer-events-none hidden md:block opacity-50"
  >
    {/* CSS-only pseudo 3D sphere */}
    <div
      className="w-24 h-24 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), rgba(0,0,0,0.4))",
        boxShadow:
          "inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.1)",
      }}
    />
  </motion.div>
);

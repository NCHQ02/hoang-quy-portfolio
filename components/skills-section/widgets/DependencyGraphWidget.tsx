import React from "react";
import { motion } from "framer-motion";

export const DependencyGraphWidget = () => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    className="absolute left-6 top-1/4 w-56 bg-[#0D1117] border border-white/10 rounded-lg shadow-2xl hidden 2xl:flex flex-col overflow-hidden z-20 font-mono text-[10px]"
  >
    <div className="bg-[#161B22] px-3 py-2 border-b border-white/5 flex justify-between items-center text-gray-400">
      <span className="font-bold">package.json</span>
      <span>1.2KB</span>
    </div>
    <div className="p-3 text-gray-400">
      <div>
        <span className="text-design-purple">"dependencies"</span>: {"{"}
      </div>
      <div className="pl-3 flex flex-col gap-0.5">
        {/* Staggered typing effect simulation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-design-green">"react"</span>: "^18.2.0",
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-design-green">"framer-motion"</span>: "^10.0",
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-design-green">"three"</span>: "^0.150.0",
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <span className="text-design-green">"n8n"</span>: "latest",
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <span className="text-design-green">"python"</span>: "3.11"
        </motion.div>
      </div>
      <div>{"}"}</div>
    </div>
  </motion.div>
);

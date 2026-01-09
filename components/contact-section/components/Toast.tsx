import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "../icons";

const Toast = ({ message, visible }: { message: string; visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        exit={{ opacity: 0, y: 20, x: "-50%" }}
        className="fixed bottom-10 left-1/2 z-[100] bg-[#1e1e1e] border border-white/10 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3"
      >
        <div className="w-5 h-5 bg-design-green rounded-full flex items-center justify-center text-black">
          <CheckIcon />
        </div>
        <span className="text-sm font-medium">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Toast;

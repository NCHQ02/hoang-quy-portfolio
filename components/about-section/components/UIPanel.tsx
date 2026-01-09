import React from "react";
import { motion } from "framer-motion";

interface UIPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// A container that looks like a UI Panel / Floating Window
export const UIPanel: React.FC<UIPanelProps> = ({
  children,
  className,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

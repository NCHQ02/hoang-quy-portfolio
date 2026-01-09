import React from "react";
import { motion } from "framer-motion";

const NotificationWidget = () => (
  <motion.div
    initial={{ y: -100, rotate: -10, opacity: 0 }} // Drop & Swing Entrance
    whileInView={{ y: 0, rotate: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.5 }}
    className="absolute left-0 top-1/3 w-72 bg-[#1e1e1e]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl hidden 2xl:flex items-center p-3 gap-3 z-20 origin-top-left"
  >
    <div className="w-10 h-10 rounded-full bg-design-blue flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-xs font-bold text-white">New Message</span>
        <span className="text-[9px] text-gray-400">now</span>
      </div>
      <p className="text-[10px] text-gray-400 leading-tight">
        HR: "Hey Quy Xink Dep, i saw your portfolio. Are you available for..."
      </p>
    </div>
  </motion.div>
);

export default NotificationWidget;

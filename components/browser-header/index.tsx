import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  TrafficLights,
  BrowserTab,
  NavigationControls,
  AddressBar,
} from "./components";
import { BROWSER_TABS, DEFAULT_URL } from "./config/tabs.config";

/**
 * Browser Header Component
 * Safari-style browser chrome with tabs and address bar
 */
const BrowserHeader: React.FC = () => {
  const [url] = useState(DEFAULT_URL);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? "bg-[#1e1e1e]/90 backdrop-blur-xl shadow-2xl"
          : "bg-[#1e1e1e]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "circOut" }}
    >
      <div className="flex flex-col w-full">
        {/* === ROW 1: TABS & WINDOW CONTROLS === */}
        <div className="flex items-end px-4 pt-3 pb-0 gap-6 select-none">
          {/* Traffic Lights */}
          <TrafficLights />

          {/* Tabs Container */}
          <div className="flex flex-1 items-end gap-1 overflow-hidden">
            {BROWSER_TABS.map((tab) => (
              <BrowserTab key={tab.id} tab={tab} />
            ))}

            {/* New Tab Button */}
            <div className="pb-2 pl-2 text-gray-500 hover:text-white transition-colors cursor-pointer">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
          </div>
        </div>

        {/* === ROW 2: TOOLBAR & ADDRESS BAR === */}
        <div className="flex items-center gap-3 px-4 py-2 bg-[#3a3a3a] border-b border-black/50 shadow-lg relative z-20">
          {/* Navigation Controls */}
          <NavigationControls />

          {/* Address Bar */}
          <AddressBar url={url} />

          {/* Extensions / Right Controls */}
          <div className="flex gap-4 text-gray-400 items-center">
            <button className="hover:text-design-blue transition-colors">
              {/* Share Icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
            <button className="hover:text-white transition-colors hidden sm:block">
              {/* New Tab / Plus */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default BrowserHeader;

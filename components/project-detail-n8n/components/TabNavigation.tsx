import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface Tab {
  id: number;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (id: number) => void;
  isSticky?: boolean;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  isSticky = false,
}) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  // Update indicator position based on active tab's actual dimensions
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton) {
      setIndicatorStyle({
        width: activeButton.offsetWidth,
        left: activeButton.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div
      className={`
        relative flex justify-center py-4 px-6 z-30
        ${isSticky ? "sticky top-20" : ""}
      `}
    >
      <div className="relative backdrop-blur-md rounded-full p-1.5 border border-white/10 shadow-2xl">
        {/* Background pill indicator - now uses actual button dimensions */}
        <motion.div
          className="absolute top-1.5 bottom-1.5 rounded-full z-0"
          style={{
            backgroundColor: tabs[activeTab]?.color || "#ff4500",
            boxShadow: `0 0 20px ${tabs[activeTab]?.color}40`,
          }}
          animate={{
            width: indicatorStyle.width,
            x: indicatorStyle.left,
          }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />

        {/* Tab buttons */}
        <div className="relative z-10 flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full
                font-semibold text-sm transition-colors duration-300
                ${
                  activeTab === tab.id
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {/* Icon */}
              <span className="text-lg">{tab.icon}</span>

              {/* Label - hidden on mobile */}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- TAB NAVIGATION FOOTER (Next/Prev buttons) ---
interface TabNavigationFooterProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (id: number) => void;
  onScrollToTop: () => void;
}

export const TabNavigationFooter: React.FC<TabNavigationFooterProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  onScrollToTop,
}) => {
  const prevTab = activeTab > 0 ? tabs[activeTab - 1] : null;
  const nextTab = activeTab < tabs.length - 1 ? tabs[activeTab + 1] : null;

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
    // Small delay to let state update, then scroll
    setTimeout(onScrollToTop, 50);
  };

  return (
    <div className="flex justify-between items-center max-w-5xl mx-auto px-6 py-12 border-t border-white/5 mt-12">
      {/* Previous Tab */}
      {prevTab ? (
        <motion.button
          onClick={() => handleTabChange(prevTab.id)}
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
          whileHover={{ x: -5 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:stroke-white transition-colors"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <div className="text-xs text-gray-500">Previous</div>
            <div className="font-bold flex items-center gap-2">
              <span>{prevTab.icon}</span>
              <span>{prevTab.label}</span>
            </div>
          </div>
        </motion.button>
      ) : (
        <div /> // Empty spacer
      )}

      {/* Tab indicator dots */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${activeTab === tab.id ? "w-6" : "hover:scale-125"}
            `}
            style={{
              backgroundColor: activeTab === tab.id ? tab.color : "#333",
            }}
          />
        ))}
      </div>

      {/* Next Tab */}
      {nextTab ? (
        <motion.button
          onClick={() => handleTabChange(nextTab.id)}
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
          whileHover={{ x: 5 }}
        >
          <div className="text-right">
            <div className="text-xs text-gray-500">Next</div>
            <div className="font-bold flex items-center gap-2">
              <span>{nextTab.label}</span>
              <span>{nextTab.icon}</span>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:stroke-white transition-colors"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      ) : (
        <div /> // Empty spacer
      )}
    </div>
  );
};

export default TabNavigation;

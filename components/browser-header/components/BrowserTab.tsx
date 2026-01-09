import React from "react";
import type { TabData } from "../config/tabs.config";

interface BrowserTabProps {
  tab: TabData;
}

/**
 * Browser Tab Component
 * Individual tab with close button
 */
const BrowserTab: React.FC<BrowserTabProps> = ({ tab }) => {
  const responsiveClass = {
    always: "",
    sm: "hidden sm:block",
    md: "hidden md:block",
    lg: "hidden lg:block",
  }[tab.responsive || "always"];

  const iconClass =
    tab.icon === "gradient"
      ? "bg-gradient-to-tr from-design-blue to-design-purple"
      : "bg-gray-600";

  if (tab.isActive) {
    return (
      <div className={`relative group min-w-[140px] max-w-[240px] flex-1`}>
        <div className="bg-[#3a3a3a] text-white px-4 py-2 rounded-t-lg text-xs font-medium flex items-center justify-between shadow-[-1px_-1px_2px_rgba(255,255,255,0.05)] relative z-10">
          <div className="flex items-center gap-2 truncate">
            <div className={`w-3 h-3 ${iconClass} rounded-sm`} />
            <span className="truncate">{tab.title}</span>
          </div>
          <span className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-white cursor-pointer transition-opacity">
            ×
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative group min-w-[100px] max-w-[200px] ${responsiveClass} opacity-60 hover:opacity-100 transition-opacity`}
    >
      <div className="bg-[#2a2a2a] text-gray-400 px-4 py-2 rounded-t-lg text-xs font-medium flex items-center justify-between border-r border-white/5">
        <div className="flex items-center gap-2 truncate">
          <div className={`w-3 h-3 ${iconClass} rounded-sm`} />
          <span className="truncate">{tab.title}</span>
        </div>
        <span className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-white cursor-pointer transition-opacity">
          ×
        </span>
      </div>
    </div>
  );
};

export default BrowserTab;

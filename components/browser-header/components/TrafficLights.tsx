import React from "react";

/**
 * Traffic Lights Component
 * macOS-style window control buttons
 */
const TrafficLights: React.FC = () => (
  <div className="flex gap-2 mb-3 group">
    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-inner flex items-center justify-center">
      <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">
        ×
      </span>
    </div>
    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-inner flex items-center justify-center">
      <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">
        −
      </span>
    </div>
    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-inner flex items-center justify-center">
      <span className="opacity-0 group-hover:opacity-100 text-[6px] text-black font-bold">
        sw
      </span>
    </div>
  </div>
);

export default TrafficLights;

import React from "react";
import { useCursor } from "../../GlobalCursor";

const MobilePreviewCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Mobile")}
      onMouseLeave={() => setLabel(null)}
      className="w-24 h-40 bg-black rounded-[14px] border-4 border-[#333] shadow-2xl overflow-hidden select-none pointer-events-none"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#333] rounded-b-md z-20" />
      <div className="w-full h-full bg-[#0a0a0a] pt-4 px-2 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-design-purple mb-2 opacity-80" />
        <div className="w-12 h-1.5 bg-gray-800 rounded mb-1" />
        <div className="w-8 h-1.5 bg-gray-800 rounded mb-3" />
        <div className="w-full h-10 bg-white/5 rounded mb-1" />
        <div className="w-full h-10 bg-white/5 rounded" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default MobilePreviewCard;

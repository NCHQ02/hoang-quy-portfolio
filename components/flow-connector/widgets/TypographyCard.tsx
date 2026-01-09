import React from "react";
import { useCursor } from "../../GlobalCursor";

const TypographyCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Font")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#F5F5F7] text-black rounded-lg shadow-xl p-4 select-none pointer-events-none"
    >
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-black text-white text-[12px] font-bold flex items-center justify-center rounded-full shadow-lg z-10 border-2 border-[#F5F5F7]">
        Aa
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-4xl font-display font-black tracking-tighter">
          H1
        </span>
        <div className="h-px w-full bg-gray-300 my-2" />
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-600">Inter</span>
          <span className="text-[10px] font-mono text-gray-400">8rem</span>
        </div>
      </div>
    </div>
  );
};

export default TypographyCard;

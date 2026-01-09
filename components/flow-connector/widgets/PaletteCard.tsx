import React from "react";
import { useCursor } from "../../GlobalCursor";
import { ConnectorDot } from "../components/Assets";

const PaletteCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Colors")}
      onMouseLeave={() => setLabel(null)}
      className="w-48 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-white/10 shadow-xl p-3 flex flex-col gap-2 select-none pointer-events-none"
    >
      <div className="flex justify-between items-center mb-1 border-b border-white/5 pb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Fill Styles
        </span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
        </div>
      </div>
      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm border border-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-white font-bold">Brand Blue</span>
          <span className="text-[8px] text-gray-500">100% • Linear</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-sm border border-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-white font-bold">
            Accent Gradient
          </span>
          <span className="text-[8px] text-gray-500">Mix • Radial</span>
        </div>
      </div>
      <ConnectorDot className="top-1/2 -right-1.5 translate-x-0" />
    </div>
  );
};

export default PaletteCard;

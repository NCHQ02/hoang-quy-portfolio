import React from "react";
import { useCursor } from "../../GlobalCursor";

const LayersCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Layers")}
      onMouseLeave={() => setLabel(null)}
      className="w-36 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-xl p-2 select-none pointer-events-none"
    >
      <div className="text-[9px] text-gray-500 font-bold uppercase mb-2 px-1">
        Layers
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-1 bg-design-blue/20 rounded border border-design-blue/50">
          <span className="text-[10px] text-white">Hero Section</span>
        </div>
        <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
          <span className="text-[10px] text-gray-400">Avatar</span>
        </div>
        <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
          <span className="text-[10px] text-gray-400">Footer</span>
        </div>
      </div>
    </div>
  );
};

export default LayersCard;

import React from "react";
import { useCursor } from "../../GlobalCursor";

const PropertiesPanel = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Props")}
      onMouseLeave={() => setLabel(null)}
      className="w-32 bg-[#2C2C2E] rounded-lg border border-white/10 shadow-2xl p-2 flex flex-col gap-2 select-none pointer-events-none"
    >
      <div className="flex justify-between items-center opacity-50 px-1 pt-1">
        <span className="text-[9px] font-bold">Align</span>
        <span className="text-[9px] font-bold">Distribute</span>
      </div>
      <div className="flex justify-between px-1 py-1 bg-black/20 rounded">
        <div className="w-2 h-4 bg-white/50 rounded-[1px]" />
        <div className="w-2 h-4 bg-white/50 rounded-[1px]" />
        <div className="w-2 h-4 bg-white/50 rounded-[1px]" />
      </div>
      <div className="h-px bg-white/5 w-full my-0.5" />
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5">
          <span className="text-[8px] text-gray-500 font-bold">W</span>
          <span className="text-[9px] text-gray-300 font-mono">240</span>
        </div>
        <div className="bg-black/30 rounded p-1 flex items-center gap-1 border border-white/5">
          <span className="text-[8px] text-gray-500 font-bold">H</span>
          <span className="text-[9px] text-gray-300 font-mono">120</span>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;

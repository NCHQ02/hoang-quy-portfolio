import React from "react";
import { useCursor } from "../../GlobalCursor";

const ButtonVariantsCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("UI Kit")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#1e1e1e]/90 backdrop-blur-md rounded-lg border border-dashed border-design-purple/50 p-3 flex flex-col gap-3 select-none pointer-events-none"
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-1">
        <div className="w-2 h-2 border border-design-purple rotate-45" />
        <div className="text-[9px] text-design-purple font-bold uppercase tracking-wider">
          Button Set
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-design-blue text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-sm">
          Default
        </div>
        <div className="bg-blue-400 text-white text-[10px] font-bold py-1.5 px-3 rounded text-center shadow-md border-2 border-white/20">
          Hover
        </div>
      </div>
    </div>
  );
};

export default ButtonVariantsCard;

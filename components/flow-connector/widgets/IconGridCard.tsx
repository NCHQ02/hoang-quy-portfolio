import React from "react";
import { useCursor } from "../../GlobalCursor";

const IconGridCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Throw")}
      onMouseLeave={() => setLabel(null)}
      className="w-40 bg-[#1e1e1e] rounded-lg border border-white/10 shadow-xl p-3 select-none pointer-events-none"
    >
      <div className="text-[9px] text-gray-500 font-bold uppercase mb-2">
        Icon Set / 24px
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="aspect-square bg-white/5 rounded flex items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full border border-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGridCard;

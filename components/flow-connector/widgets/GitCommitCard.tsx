import React from "react";
import { useCursor } from "../../GlobalCursor";
import { ConnectorDot } from "../components/Assets";

const GitCommitCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Grab")}
      onMouseLeave={() => setLabel(null)}
      className="w-48 bg-[#0D1117] rounded-lg border border-white/10 shadow-xl p-3 relative group select-none pointer-events-none"
    >
      <div className="flex items-center gap-2 mb-2 opacity-50">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
        <span className="text-[10px] font-mono">main branch</span>
      </div>
      <div className="space-y-2 relative">
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gray-700" />
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-design-green ring-2 ring-[#0D1117]" />
          <div className="text-[10px] text-gray-300">feat: physics engine</div>
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-500 ring-2 ring-[#0D1117]" />
          <div className="text-[10px] text-gray-500">fix: collisions</div>
        </div>
      </div>
      <ConnectorDot className="top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 bg-design-green border-design-green" />
    </div>
  );
};

export default GitCommitCard;

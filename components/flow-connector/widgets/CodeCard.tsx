import React from "react";
import { useCursor } from "../../GlobalCursor";
import { ConnectorDot } from "../components/Assets";

const CodeCard = () => {
  const { setLabel } = useCursor();
  return (
    <div
      onMouseEnter={() => setLabel("Source")}
      onMouseLeave={() => setLabel(null)}
      className="w-56 bg-[#0D1117] rounded-lg border border-gray-700 shadow-2xl p-0 overflow-hidden select-none pointer-events-none"
    >
      <div className="bg-[#161B22] px-3 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] text-gray-500 font-mono">
          physics.ts
        </span>
      </div>
      <div className="p-3 font-mono text-[10px] leading-relaxed text-gray-300">
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">gravity</span> ={" "}
          <span className="text-orange-400">false</span>;
        </p>
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">chaos</span> ={" "}
          <span className="text-green-400">"Controlled"</span>;
        </p>
        <p className="opacity-50">// Try throwing this!</p>
      </div>
      <ConnectorDot className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5" />
    </div>
  );
};

export default CodeCard;

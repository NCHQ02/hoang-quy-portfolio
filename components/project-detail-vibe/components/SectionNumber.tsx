import React from "react";

export const SectionNumber = ({ num }: { num: string }) => (
  <div className="flex items-center gap-4 mb-8 opacity-50">
    <span
      className="text-6xl font-black text-transparent stroke-text"
      style={{ WebkitTextStroke: "1px #fff" }}
    >
      {num}
    </span>
    <div className="h-px w-20 bg-white/30" />
  </div>
);

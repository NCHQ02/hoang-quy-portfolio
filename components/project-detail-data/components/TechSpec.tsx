import React from "react";

export const TechSpec = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <div className="bg-[#151515]/50 border-l-2 border-design-blue/50 p-4 my-6 font-mono text-xs text-gray-400 backdrop-blur-md">
    <div className="text-[10px] uppercase font-bold text-design-blue mb-2 tracking-widest">
      // TECHNICAL SPECS
    </div>
    <div className="text-white font-bold mb-1">{title}</div>
    <div className="leading-relaxed opacity-80">{content}</div>
  </div>
);

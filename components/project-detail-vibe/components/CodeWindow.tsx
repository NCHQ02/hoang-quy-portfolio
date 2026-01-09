import React from "react";

// A "Code Block" container for visuals
export const CodeWindow = ({
  children,
  title,
  className,
}: {
  children?: React.ReactNode;
  title: string;
  className?: string; // Added className prop for flexibility
}) => (
  <div
    className={`bg-[#0D1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs ${className}`}
  >
    <div className="bg-[#161B22] px-3 py-2 border-b border-white/5 flex items-center justify-between">
      <span className="text-gray-400">{title}</span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>
    </div>
    <div className="p-4 relative">{children}</div>
  </div>
);

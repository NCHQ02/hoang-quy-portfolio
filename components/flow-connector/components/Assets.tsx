import React from "react";

export const SelectionHandle = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-1.5 h-1.5 bg-white border border-design-blue z-20 ${className}`}
  />
);

export const ConnectorDot = ({ className }: { className?: string }) => (
  <div
    className={`absolute w-3 h-3 bg-white border-2 border-design-blue rounded-full z-10 ${className}`}
  />
);

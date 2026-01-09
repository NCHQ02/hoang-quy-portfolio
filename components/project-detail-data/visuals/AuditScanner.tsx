import React, { useState } from "react";
import { motion } from "framer-motion";

export const AuditScanner = () => {
  const [rows, setRows] = useState([
    {
      id: "CUST_01",
      issue: "Duplicate ID",
      status: "cleaning",
      fixed: "MERGED",
    },
    {
      id: "CUST_02",
      issue: "Missing Email",
      status: "fixed",
      fixed: "ENRICHED",
    },
    {
      id: "CUST_03",
      issue: "Invalid Phone",
      status: "error",
      fixed: "STANDARDIZED",
    },
  ]);

  return (
    <div className="w-full bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden font-mono text-[10px] shadow-2xl relative group">
      {/* Header */}
      <div className="bg-[#161B22] px-3 py-2 flex justify-between items-center border-b border-white/5">
        <span className="text-gray-400 font-bold">DATA_AUDIT_LOG.py</span>
        <div className="flex gap-2">
          <span className="text-design-yellow animate-pulse">
            ● Scanning...
          </span>
        </div>
      </div>

      {/* Code / Log View */}
      <div className="p-4 space-y-3 relative">
        {/* Scan Line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-design-green shadow-[0_0_10px_rgba(74,222,128,0.8)] z-10"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        <div className="text-gray-500 mb-2 border-b border-white/5 pb-1">
          &gt; initiating identity_resolution...
        </div>

        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-12 items-center gap-2 opacity-80"
          >
            <div className="col-span-3 text-blue-400">{row.id}</div>
            <div className="col-span-5 text-red-400">found: {row.issue}</div>
            <div className="col-span-4 text-right">
              <span className="text-design-green bg-design-green/10 px-1.5 py-0.5 rounded">
                [{row.fixed}]
              </span>
            </div>
          </div>
        ))}

        <div className="text-gray-500 mt-2 pt-1 border-t border-white/5">
          &gt; Single Customer View:{" "}
          <span className="text-white">BUILDING...</span>
        </div>
      </div>
    </div>
  );
};

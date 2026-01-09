import React from "react";
import { CodeWindow } from "../components/CodeWindow";

export const SuiteDashboard = () => {
  return (
    <div className="relative">
      <CodeWindow title="suite_dashboard.tsx">
        <div className="grid grid-cols-2 gap-4 h-64">
          {/* Auto-tagger status */}
          <div className="bg-[#0a0a0a] p-3 rounded border border-white/5 flex flex-col justify-between">
            <div className="text-xs text-gray-500">GTM AUTO-TAGGER</div>
            <div className="text-2xl font-bold text-design-green">98.5%</div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-design-green w-[98%]" />
            </div>
          </div>
          {/* Offline App Status */}
          <div className="bg-[#0a0a0a] p-3 rounded border border-white/5 flex flex-col justify-between">
            <div className="text-xs text-gray-500">OFFLINE SYNC</div>
            <div className="text-2xl font-bold text-blue-400">SYNCED</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Live
            </div>
          </div>
          {/* Terminal output */}
          <div className="col-span-2 bg-[#0a0a0a] p-2 rounded border border-white/5 font-mono text-[10px] text-gray-400 h-full overflow-hidden opacity-70">
            &gt; scanning urls... done (4ms)
            <br />
            &gt; detecting 404s... 0 found
            <br />
            &gt; pushing affiliate_notify... success
            <br />
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </CodeWindow>

      {/* Decorative Elements (Requires framer-motion, passing as static or simple div if simple) */}
      {/* We can import motion here */}
    </div>
  );
};

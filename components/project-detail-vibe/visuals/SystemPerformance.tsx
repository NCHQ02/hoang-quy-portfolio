import React from "react";

export const SystemPerformance = () => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-[#0D1117] border border-white/10 rounded-xl overflow-hidden font-mono text-sm">
      <div className="grid grid-cols-3 bg-[#161B22] p-4 text-gray-400 font-bold border-b border-white/5">
        <div>MODULE</div>
        <div>MANUAL PROCESS</div>
        <div className="text-design-green">VIBE SUITE</div>
      </div>
      {[
        {
          name: "GTM Tagging",
          manual: "10h / store",
          auto: "5min / container",
        },
        {
          name: "Offline Sync",
          manual: "20% Duplicates",
          auto: "100% Integrity",
        },
        {
          name: "Affiliate Msg",
          manual: "Email (Slow)",
          auto: "Push (Instant)",
        },
      ].map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-3 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
        >
          <div className="text-white">{row.name}</div>
          <div className="text-red-400">{row.manual}</div>
          <div className="text-design-green font-bold flex items-center gap-2">
            {row.auto}
            {i === 0 && (
              <span className="text-[8px] bg-design-green text-black px-1 rounded">
                FAST
              </span>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 p-6 bg-[#1e1e1e] rounded-xl border-l-4 border-design-purple">
      <p className="text-gray-300 italic font-sans text-lg">
        "We transformed from a team of freelancers debugging manually to an
        enterprise-grade operation using this suite. It handles the boring stuff
        so we can code the fun stuff."
      </p>
    </div>
  </div>
);

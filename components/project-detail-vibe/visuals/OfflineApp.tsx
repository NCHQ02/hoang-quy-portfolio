import React from "react";

export const OfflineApp = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <div className="md:col-span-7 order-2 md:order-1 relative">
      {/* Mobile Frame Mockup */}
      <div className="w-64 h-32 md:w-full md:h-64 bg-[#0a0a0a] border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black" />
        <div className="relative z-10 text-center">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="text-white font-bold">Syncing Offline Data...</div>
          <div className="text-xs text-gray-400">5000+ Records Queued</div>
        </div>
      </div>
    </div>
    <div className="md:col-span-5 order-1 md:order-2">
      <div className="text-blue-400 font-mono text-xs mb-2">
        02 // MOBILE APP
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">
        Offline Event Reward App
      </h3>
      <p className="text-gray-400 font-sans mb-4">
        React Native app handling check-ins and rewards without internet. Syncs
        seamlessly when back online, ensuring zero data loss for 5000+ pax
        events.
      </p>
    </div>
  </div>
);

import React from "react";
import { CodeWindow } from "../components/CodeWindow";
import { ErrorLog } from "../components/ErrorLog";

export const ProcessLogs = () => (
  <div className="relative">
    <CodeWindow title="manual_process_logs.txt">
      <div className="space-y-2 h-64 overflow-hidden">
        <ErrorLog text="GTM Tag mismatch on /checkout" />
        <ErrorLog text="Offline event data lost (Connection Timeout)" />
        <ErrorLog text="Affiliate payout notification delayed > 24h" />
        <div className="text-gray-500 mt-4 text-[10px]">
          // TODO: Fix this mess before Monday launch!
        </div>
      </div>
    </CodeWindow>
    <div className="absolute -inset-1 bg-red-500/10 blur-xl -z-10" />
  </div>
);

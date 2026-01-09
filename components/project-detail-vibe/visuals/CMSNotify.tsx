import React from "react";
import { CodeWindow } from "../components/CodeWindow";

export const CMSNotify = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <div className="md:col-span-5">
      <div className="text-design-purple font-mono text-xs mb-2">
        03 // INTERNAL TOOLS
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">
        Mini-CMS Affiliate Notify
      </h3>
      <p className="text-gray-400 font-sans mb-4">
        A dedicated Node.js dashboard to track commissions and trigger real-time
        push/SMS notifications, boosting affiliate engagement by 25%.
      </p>
    </div>
    <div className="md:col-span-7">
      <CodeWindow title="cms_notify.ts">
        <div className="text-gray-400">
          <span className="text-purple-400">if</span> (commission &gt; 100){" "}
          {"{\n"}
          <span className="pl-4 text-white">
            await notify.push(user_id, "You earned $100!");
          </span>
          {"\n"}
          <span className="pl-4 text-white">
            await db.updateStatus("PAID");
          </span>
          {"\n"}
          {"}"}
        </div>
      </CodeWindow>
    </div>
  </div>
);

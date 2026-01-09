import React from "react";
import { CodeWindow } from "../components/CodeWindow";

export const AutoTagger = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <div className="md:col-span-5">
      <div className="text-design-green font-mono text-xs mb-2">
        01 // AUTOMATION
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">
        Auto-Tagging GTM/GA4
      </h3>
      <p className="text-gray-400 font-sans mb-4">
        A React + Node.js tool that scans URLs, detects interactive elements,
        and automatically deploys the correct GTM tags via API.
      </p>
      <div className="flex gap-2 text-[10px] font-mono">
        <span className="bg-[#1e1e1e] px-2 py-1 rounded text-gray-300">
          Google Tag Manager API
        </span>
        <span className="bg-[#1e1e1e] px-2 py-1 rounded text-gray-300">
          Puppeteer
        </span>
      </div>
    </div>
    <div className="md:col-span-7">
      <CodeWindow title="auto_tagger.js">
        <div className="text-gray-400">
          <span className="text-purple-400">await</span> gtm.createTag({"{\n"}
          <span className="pl-4 text-white">name: 'Click_Checkout',</span>
          {"\n"}
          <span className="pl-4 text-white">type: 'ua_event',</span>
          {"\n"}
          <span className="pl-4 text-white">trigger: triggerId</span>
          {"\n"}
          {"}"});
          <div className="text-design-green mt-2">
            // Tag deployed successfully to 50 containers.
          </div>
        </div>
      </CodeWindow>
    </div>
  </div>
);

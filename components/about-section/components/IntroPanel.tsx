import React from "react";
import { UIPanel } from "./UIPanel";

/**
 * Intro Panel Component
 * Bio text with terminal-style header
 */
const IntroPanel: React.FC = () => (
  <UIPanel className="lg:col-span-7 flex flex-col justify-center bg-[#151515]">
    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
      </div>
      <span className="text-xs text-gray-500 font-mono ml-4">bio.txt</span>
    </div>

    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
      As an emerging{" "}
      <span className="text-design-yellow font-bold">
        Automation Marketing Specialist
      </span>
      , I bring a dynamic blend of{" "}
      <span className="text-design-yellow">
        analytical thinking and strategic creativity
      </span>{" "}
      to campaign deployment and optimization.
    </p>
    <p className="mt-6 text-gray-400">
      I am a Technical Automation Marketing Specialist from a Big4 Global
      Agency, specializing in high-impact CRM and Data-Driven Marketing. My core
      strength is the end-to-end execution of multi-channel CRM campaigns via
      SFMC, Zalo OA, Email, etc., designing automated customer journeys to
      optimize conversion and retention. <br></br>
      <br></br>
      My expertise is anchored in data integrity through GTM/GA4 web event
      tracking and in-depth analysis using Python (Pandas, NumPy) and SQL. I
      consistently apply AI & Automation solutions to enhance reporting and CRM
      efficiency , complemented by experience managing complex D2C ecosystems
      (Unilever, AEM Migration).
    </p>
  </UIPanel>
);

export default IntroPanel;

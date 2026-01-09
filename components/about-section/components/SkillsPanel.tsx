import React from "react";
import { UIPanel } from "./UIPanel";
import { SkillBar } from "./SkillBar";
import { useCursor } from "../../GlobalCursor";

/**
 * Skills Panel Component
 * Technical skills, languages, and resume link
 */
const SkillsPanel: React.FC = () => {
  const { setLabel } = useCursor();

  const scrollToResume = () => {
    document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
    setLabel(null);
  };

  return (
    <UIPanel className="lg:col-span-4 flex flex-col h-full" delay={0.3}>
      <h3 className="text-2xl font-display font-bold text-design-orange mb-6">
        SKILLS
      </h3>

      <div className="flex flex-wrap gap-2 mb-8">
        {[
          "CMS & CRM",
          "Digital Platform",
          "Vibe Coding",
          "Marketing Automation",
          "Data & Analytics",
          "AI & Automation",
          "Problem Solving",
          "Self Learning",
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-[#2A2A2A] text-gray-300 text-xs font-medium rounded-lg border border-white/5 hover:border-design-orange hover:text-design-orange transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-display font-bold text-design-blue mb-6">
        LANGUAGES
      </h3>
      <SkillBar label="Vietnamese" level="100%" color="#3b82f6" />
      <SkillBar label="English" level="85%" color="#60a5fa" />

      {/* Spacer to push button to bottom */}
      <div className="flex-1 min-h-[2rem]" />

      {/* Simple QR Code Placeholder / Resume Link */}
      <div
        className="mt-auto p-4 bg-white rounded-xl flex items-center gap-4 group/resume cursor-pointer hover:bg-design-blue transition-colors"
        onClick={scrollToResume}
        onMouseEnter={() => setLabel("Resume")}
        onMouseLeave={() => setLabel(null)}
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a] text-white shadow-md border border-white/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="w-6 h-6"
          >
            <path d="M12 4v14m0 0l-5-5m5 5l5-5" />
          </svg>
        </div>
        {/* QR pattern simulation */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-12 h-12 text-black"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6zM7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
        </svg>
        <div className="flex flex-col">
          <span className="text-black font-bold text-sm group-hover/resume:text-white transition-colors">
            GO TO RESUME
          </span>
          <span className="text-gray-500 text-xs group-hover/resume:text-white/80 transition-colors">
            to get Detail
          </span>
        </div>
      </div>
    </UIPanel>
  );
};

export default SkillsPanel;

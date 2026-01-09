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

      {/* Technical Skills */}
      <div className="mb-6">
        <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">
          Technical & Tools
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "CMS & CRM",
            "Marketing Automation",
            "Data & Analytics",
            "Vibe Coding",
            "AI Integration",
            "SQL / Python",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-[#2A2A2A] text-gray-300 text-xs font-medium rounded-lg border border-white/5 hover:border-design-orange hover:text-design-orange transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-8">
        <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">
          Professional
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Problem Solving",
            "Self Learning",
            "Project Management",
            "Team Collaboration",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded-lg border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-display font-bold text-design-blue mb-6">
        LANGUAGES
      </h3>
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-white font-medium text-sm">Vietnamese</span>
            <span className="text-xs text-gray-500">Native</span>
          </div>
          <SkillBar label="" level="100%" color="#3b82f6" hideLabel />
        </div>
        <div>
          <div className="flex justify-between items-end mb-1">
            <span className="text-white font-medium text-sm">English</span>
            <span className="text-xs text-gray-500">Professional Working</span>
          </div>
          <SkillBar label="" level="85%" color="#60a5fa" hideLabel />
        </div>
      </div>

      {/* Certifications Mockup */}
      <div className="mb-4">
        <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">
          Certifications
        </h4>
        <ul className="space-y-2 text-xs text-gray-400">
          <li className="flex items-start gap-2">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-design-orange shrink-0" />
            <span>Adobe Digital Experience Certificate Program (13 Cert+)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-design-orange shrink-0" />
            <span>
              Unilever Digital Marketing Analyst Professional Certificate
            </span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-design-orange shrink-0" />
            <span>30+ Certificates from completed courses</span>
          </li>
        </ul>
      </div>

      {/* Spacer to push button to bottom */}
      <div className="flex-1 min-h-[1rem]" />

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

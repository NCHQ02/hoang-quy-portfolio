import React from "react";
import { UIPanel } from "./UIPanel";

/**
 * Experience Panel Component
 * Work experience and education timeline
 */
const ExperiencePanel: React.FC = () => (
  <UIPanel className="lg:col-span-4 flex flex-col h-full" delay={0.2}>
    <h3 className="text-2xl font-display font-bold text-design-purple mb-6">
      EXPERIENCE
    </h3>

    <div className="space-y-8 flex-1">
      {/* Publicis Groupe */}
      <div className="relative pl-6 border-l border-design-purple/30">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-purple rounded-full border-4 border-[#1A1A1A]" />
        <span className="text-xs text-design-purple font-mono mb-1 block">
          Oct 2024 - Present
        </span>
        <h4 className="text-white font-bold text-lg">
          Publicis Groupe Viet Nam
        </h4>
        <p className="text-sm text-gray-400 font-medium mb-1">
          Technical (CMS & CRM) Operator Specialist
        </p>
        <p className="text-xs text-gray-500 mb-3">Data Operations Team</p>

        {/* Achievements */}
        <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 mb-3">
          <li>
            Managed CMS & CRM operations for global clients, ensuring 99.9%
            uptime.
          </li>
          <li>
            Implemented automated workflows reducing manual data entry by 30%.
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {["CRM", "Zalo Platform", "SQL", "Automation", "AI"].map((tech) => (
            <span
              key={tech}
              className="text-[10px] bg-design-purple/10 text-design-purple px-2 py-0.5 rounded border border-design-purple/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Prime Commerce */}
      <div className="relative pl-6 border-l border-design-purple/30">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-purple rounded-full border-4 border-[#1A1A1A]" />
        <span className="text-xs text-design-purple font-mono mb-1 block">
          Mar 2023 - May 2024
        </span>
        <h4 className="text-white font-bold text-lg">Prime Commerce Asia</h4>
        <p className="text-sm text-gray-400 font-medium mb-1">
          Website Operation Executive
        </p>
        <p className="text-xs text-gray-500 mb-3">Check & Audit Department</p>

        {/* Achievements */}
        <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 mb-3">
          <li>
            Audited & maintained 50+ e-commerce websites, improving tracked
            accuracy.
          </li>
          <li>Collaborated with dev teams to resolve critical UI/UX bugs.</li>
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {["AEM", "Audit", "UI/UX", "Digital Marketing"].map((tech) => (
            <span
              key={tech}
              className="text-[10px] bg-design-purple/10 text-design-purple px-2 py-0.5 rounded border border-design-purple/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    <h3 className="text-2xl font-display font-bold text-design-green mt-10 mb-6">
      EDUCATION
    </h3>
    <div className="relative pl-6 border-l border-design-green/30">
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-green rounded-full border-4 border-[#1A1A1A]" />
      <span className="text-xs text-design-green font-mono mb-1 block">
        Oct 2020 - Apr 2024 | HCMC
      </span>
      <h4 className="text-white font-bold text-lg">
        University of Finance & Marketing
      </h4>
      <p className="text-sm text-gray-400 font-medium mb-2">
        Business Administration (Project Management)
      </p>

      <div className="flex flex-col gap-1 text-xs text-gray-500">
        <p>
          <span className="text-gray-400 font-semibold">GPA:</span> 3.2/4.0
          (Good Degree)
        </p>
        <p>
          <span className="text-gray-400 font-semibold">
            Relevant Coursework:
          </span>{" "}
          Marketing Strategy, Project Management, Data Analysis.
        </p>
      </div>
    </div>
  </UIPanel>
);

export default ExperiencePanel;

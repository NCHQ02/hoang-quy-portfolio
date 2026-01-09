import React from "react";
import { UIPanel } from "./UIPanel";

/**
 * Experience Panel Component
 * Work experience and education timeline
 */
const ExperiencePanel: React.FC = () => (
  <UIPanel className="lg:col-span-4" delay={0.2}>
    <h3 className="text-2xl font-display font-bold text-design-purple mb-6">
      EXPERIENCE
    </h3>

    <div className="space-y-6">
      <div className="relative pl-6 border-l border-design-purple/30">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-purple rounded-full border-4 border-[#1A1A1A]" />
        <span className="text-xs text-design-purple font-mono mb-1 block">
          Oct 2024 - Present
        </span>
        <h4 className="text-white font-bold">Publicis Groupe Viet Nam</h4>
        <p className="text-sm text-gray-500">
          Technical (CMS & CRM) Operator Specialist
        </p>
        <p className="text-xs text-gray-600">Ho Chi Minh City</p>
      </div>

      <div className="relative pl-6 border-l border-design-purple/30">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-design-purple rounded-full border-4 border-[#1A1A1A]" />
        <span className="text-xs text-design-purple font-mono mb-1 block">
          Mar 2023 - May 2024
        </span>
        <h4 className="text-white font-bold">Prime Commerce Asia</h4>
        <p className="text-sm text-gray-500">Website Operation Executive</p>
        <p className="text-xs text-gray-600">Ho Chi Minh City</p>
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
      <h4 className="text-white font-bold">
        University of Finance & Marketing
      </h4>
      <p className="text-sm text-gray-500">
        Business Administration (Project Management)
      </p>
    </div>
  </UIPanel>
);

export default ExperiencePanel;

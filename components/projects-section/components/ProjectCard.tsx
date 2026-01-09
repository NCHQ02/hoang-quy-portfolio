import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../GlobalCursor";
import { WindowHeader, SelectionHandle, Tag } from "./SharedUI";

interface ProjectCardProps {
  id: string;
  sectionId?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  VisualComponent: React.FC;
  align?: "left" | "right";
  className?: string;
  onViewCaseStudy?: () => void;
  isComingSoon?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  sectionId,
  title,
  subtitle,
  description,
  tags,
  color,
  VisualComponent,
  align = "left",
  className,
  onViewCaseStudy,
  isComingSoon = true,
}) => {
  const { setLabel } = useCursor();

  return (
    <motion.div
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-32 ${className}`}
    >
      {/* Visual Side (Span 7) */}
      <div
        className={`lg:col-span-7 h-[300px] md:h-[400px] relative group ${
          align === "right" ? "lg:order-2" : "lg:order-1"
        }`}
        onMouseEnter={() => setLabel("Open")}
        onMouseLeave={() => setLabel(null)}
        onClick={onViewCaseStudy}
      >
        {/* The Frame/Window Container */}
        <div className="w-full h-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 border border-white/10 flex flex-col">
          <WindowHeader title={`${id}_mockup.fig`} />
          <VisualComponent />
        </div>

        {/* Decorative Selection Box (Figma Style) */}
        <div className="absolute -inset-4 border border-design-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
          <div className="absolute -top-3 left-0 bg-design-blue text-white text-[10px] font-bold px-1.5 py-0.5">
            Frame 1
          </div>
          <SelectionHandle className="-top-1.5 -left-1.5" />
          <SelectionHandle className="-top-1.5 -right-1.5" />
          <SelectionHandle className="-bottom-1.5 -left-1.5" />
          <SelectionHandle className="-bottom-1.5 -right-1.5" />
        </div>
      </div>

      {/* Content Side (Span 5) */}
      <div
        className={`lg:col-span-5 flex flex-col justify-center ${
          align === "right"
            ? "lg:order-1 lg:text-right items-end"
            : "lg:order-2 lg:text-left items-start"
        }`}
      >
        <div
          className={`flex items-center gap-3 mb-4 ${
            align === "right" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <span
            className={`text-4xl md:text-5xl font-display font-black opacity-10 select-none text-white`}
          >
            {id}
          </span>
          <div className={`h-px w-12 ${color}`} />
        </div>

        <h3
          className={`text-3xl md:text-4xl font-bold text-white mb-2 leading-tight`}
        >
          {title}
        </h3>
        <p
          className={`${color.replace(
            "bg-",
            "text-"
          )} text-sm font-bold uppercase tracking-widest mb-6`}
        >
          {subtitle}
        </p>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
          {description}
        </p>

        <div
          className={`flex flex-wrap gap-2 mb-8 ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          {tags.map((tag) => (
            <Tag
              key={tag}
              text={tag}
              color="text-gray-300 bg-white/5 hover:bg-white/10 transition-colors"
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setLabel(isComingSoon ? "Soon" : "Click")}
          onMouseLeave={() => setLabel(null)}
          onClick={onViewCaseStudy}
          className={`px-6 py-3 rounded-lg font-bold text-sm bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2 ${
            !isComingSoon ? "shadow-[0_0_20px_rgba(255,255,255,0.3)]" : ""
          }`}
        >
          {isComingSoon ? "Coming Soon" : "View Case Study"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

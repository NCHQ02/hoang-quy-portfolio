import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  efficiencyBoost?: string;
}

/**
 * Hero Section Component
 * Main hero banner with title, subtitle, and description
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  title = "AUTOMATE EVERYTHING",
  subtitle = "WITH n8n + AI AGENTS",
  description = "Stop spending 5-10 hours/week copying data. I build intelligent workflows that research trends, generate content, and sync business data automatically.",
  efficiencyBoost = "85%",
}) => {
  return (
    <section className="pt-48 pb-8 px-6 relative">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Decorative Hero Elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-20 -left-10 hidden md:block"
        >
          <div className="bg-[#2C2C2E] text-white text-xs px-3 py-1.5 rounded-lg shadow-xl border border-white/10 transform -rotate-12">
            🚀 {efficiencyBoost} Efficiency Boost
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-design-orange to-red-500">
            EVERYTHING
          </span>
          <br />
          <span className="text-4xl md:text-6xl text-gray-500">{subtitle}</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

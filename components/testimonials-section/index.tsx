import React from "react";
import { motion } from "framer-motion";
import { ActiveViewersWidget, ReactionPaletteWidget } from "./widgets";
import { CommentCard, SectionHeader } from "./components";
import { FEEDBACKS } from "./config/feedbacks.config";

/**
 * Testimonials Section Component
 * Displays social proof with FigJam-style design
 */
const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-4 relative overflow-hidden">
      {/* SIDE WIDGETS INJECTION */}
      <ActiveViewersWidget />
      <ReactionPaletteWidget />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <SectionHeader />

        {/* Grid Layout simulating a FigJam board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:px-20 relative">
          {/* Background Grid Decoration for this specific area */}
          <div className="absolute inset-0 border border-dashed border-white/5 rounded-3xl -m-8 pointer-events-none" />

          {FEEDBACKS.map((fb, idx) => (
            <div
              key={fb.id}
              className={`flex ${
                idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
              } ${idx === 1 ? "md:mt-12" : ""} ${idx === 2 ? "md:-mt-12" : ""}`}
            >
              <CommentCard feedback={fb} index={idx} />
            </div>
          ))}
        </div>

        {/* Bottom Call To Action / "Join" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative group">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#1e1e1e] border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start a Project
            </button>
            {/* Decorate with a cursor pointing to the button */}
            <div className="absolute -right-8 top-1/2 translate-x-full -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-design-blue -rotate-12"
              >
                <path
                  d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="bg-design-blue text-white text-[9px] px-1.5 py-0.5 rounded ml-2">
                You
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

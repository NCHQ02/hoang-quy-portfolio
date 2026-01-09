import React from "react";
import { useCursor } from "../../GlobalCursor";

interface FooterCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onBack: () => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

/**
 * Footer CTA (Call to Action) Component
 * Displays CTA buttons and back navigation
 */
const FooterCTA: React.FC<FooterCTAProps> = ({
  title = "READY TO SCALE?",
  description = "Start like a solopreneur, scale like a team of 10. Get these workflow templates or hire me to build custom agents.",
  primaryButtonText = "Download Workflow Templates",
  secondaryButtonText = "Book a Free Audit",
  onBack,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const { setLabel } = useCursor();

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          {title}
        </h2>
        <p
          className="text-gray-400 mb-10"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button
            onClick={onPrimaryClick}
            className="bg-design-green text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform w-full md:w-auto"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={handleSecondaryClick}
            className="bg-[#1e1e1e] border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors w-full md:w-auto"
          >
            {secondaryButtonText}
          </button>
        </div>

        {/* Back Button */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <button
            onClick={onBack}
            onMouseEnter={() => setLabel("Go Back")}
            onMouseLeave={() => setLabel(null)}
            className="text-gray-500 hover:text-white flex items-center gap-2 mx-auto transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Main Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;

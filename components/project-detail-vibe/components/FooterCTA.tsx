import React from "react";
import { useCursor } from "../../GlobalCursor";

interface Props {
  onBack: () => void;
}

export const FooterCTA: React.FC<Props> = ({ onBack }) => {
  const { setLabel } = useCursor();

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
        BUILD LIKE A PRO
      </h2>
      <p className="text-gray-400 mb-10 font-sans">
        Ready to automate your engineering workflows? <br />
        Get the Vibe Suite or book a custom demo.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="bg-design-purple text-white px-8 py-4 rounded font-bold hover:scale-105 transition-transform w-full md:w-auto shadow-lg shadow-purple-500/20">
          Get Started for Free
        </button>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#1e1e1e] border border-white/10 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-black transition-colors w-full md:w-auto"
        >
          Book Technical Demo
        </button>
      </div>

      <div className="mt-20 pt-10 border-t border-white/5">
        <button
          onClick={onBack}
          onMouseEnter={() => setLabel("Go Back")}
          onMouseLeave={() => setLabel(null)}
          className="text-gray-500 hover:text-white flex items-center gap-2 mx-auto transition-colors font-sans text-sm"
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
  );
};

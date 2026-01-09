import React from "react";

interface AddressBarProps {
  url: string;
}

/**
 * Address Bar Component
 * URL display with lock icon
 */
const AddressBar: React.FC<AddressBarProps> = ({ url }) => (
  <div className="flex-1 flex justify-center">
    <div className="bg-[#242424] hover:bg-[#2a2a2a] transition-colors border border-white/5 w-full max-w-2xl rounded-md py-1.5 px-3 flex items-center justify-center gap-2 group cursor-text">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-500 group-hover:text-white transition-colors"
      >
        <path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2 2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z" />
      </svg>
      <span className="text-[13px] text-white selection:bg-design-blue selection:text-white font-sans tracking-wide">
        {url}
      </span>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-500 hover:text-white rotate-45"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
    </div>
  </div>
);

export default AddressBar;

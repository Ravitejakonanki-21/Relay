import React from "react";

interface LogoProps {
  className?: string;
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showBadge = false }) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Geometric SVG Icon representing connection / relay transmission */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600 flex-shrink-0"
        aria-hidden="true"
      >
        <rect width="28" height="28" rx="7" fill="#0A1128" />
        <path
          d="M8 14H14M14 14L11 11M14 14L11 17"
          stroke="#2563EB"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 14H14M14 14L17 11M14 14L17 17"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2" fill="#60A5FA" />
      </svg>
      <span className="font-bold text-xl tracking-tight text-slate-900 font-sans">
        Relay
      </span>
      {showBadge && (
        <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60">
          Digital
        </span>
      )}
    </div>
  );
};

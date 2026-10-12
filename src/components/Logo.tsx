import React from "react";

interface LogoProps {
  className?: string;
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showBadge = false }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric SVG Icon representing connection / relay transmission */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#123B63" />
        <path
          d="M9 16H16M16 16L12.5 12.5M16 16L12.5 19.5"
          stroke="#2878D0"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 16H16M16 16L19.5 12.5M16 16L19.5 19.5"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="16" r="2.2" fill="#2878D0" />
      </svg>
      <div className="flex items-center gap-1.5">
        <span className="font-extrabold text-xl tracking-tight text-[#102A43]">
          Relay
        </span>
        {showBadge && (
          <span className="text-[10px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#F3F7FC] text-[#2878D0] border border-[#DCE5EF]">
            Digital
          </span>
        )}
      </div>
    </div>
  );
};

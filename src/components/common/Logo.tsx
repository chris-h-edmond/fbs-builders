import React from 'react';
import { cn } from '@/utils/cn';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  showText?: boolean;
}

/**
 * Premium brand Logo SVG.
 */
export const Logo: React.FC<LogoProps> = ({
  className,
  showText = true,
  ...props
}) => {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('text-primary-600 dark:text-primary-500 transition-colors duration-300', className)}
        {...props}
      >
        {/* Abstract structural grid builder lines & polygon shapes representing contracting/engineering */}
        <rect
          x="15"
          y="15"
          width="70"
          height="70"
          rx="12"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M40 15V85"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <path
          d="M15 60H85"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <path
          d="M15 45L55 15"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="2 2"
          opacity="0.3"
        />
        <polygon
          points="25,75 50,30 75,75"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="30" r="6" fill="currentColor" />
        <circle cx="25" cy="75" r="5" fill="currentColor" />
        <circle cx="75" cy="75" r="5" fill="currentColor" />
      </svg>
      {showText && (
        <div className="flex flex-col select-none">
          <span className="font-display text-xl font-extrabold tracking-wide uppercase leading-none text-neutral-900 dark:text-neutral-50">
            FBS
          </span>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest leading-none text-primary-600 dark:text-primary-400">
            Builders
          </span>
        </div>
      )}
    </div>
  );
};

Logo.displayName = 'Logo';
export default Logo;

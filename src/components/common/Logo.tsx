import React from 'react';
import { cn } from '@/utils/cn';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Minimalist text Logo.
 */
export const Logo: React.FC<LogoProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("select-none font-sans font-bold text-4xl sm:text-5xl lowercase tracking-tight", className)} {...props}>
      fbs builders.
    </div>
  );
};

Logo.displayName = 'Logo';
export default Logo;

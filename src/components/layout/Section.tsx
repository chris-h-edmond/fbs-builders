import React from 'react';
import { cn } from '@/utils/cn';

type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type SectionBg = 'default' | 'muted' | 'primary' | 'accent' | 'dark' | 'glass';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  padding?: SectionPadding;
  bg?: SectionBg;
  id?: string;
}

const paddingStyles: Record<SectionPadding, string> = {
  none: 'py-0',
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-24',
  lg: 'py-24 sm:py-32',
  xl: 'py-32 sm:py-48',
};

const bgStyles: Record<SectionBg, string> = {
  default: 'bg-transparent',
  muted: 'bg-accent-100/50 dark:bg-accent-900/20',
  primary: 'bg-primary-950 text-white dark:bg-primary-950',
  accent: 'bg-amber-500/10 dark:bg-amber-500/5',
  dark: 'bg-accent-950 text-white dark:bg-accent-950',
  glass: 'glass',
};

/**
 * Reusable vertical section wrapper for layout partitioning.
 */
export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  padding = 'md',
  bg = 'default',
  className,
  children,
  id,
  ...props
}) => {
  return (
    <Component
      id={id}
      className={cn(
        'relative w-full overflow-hidden transition-colors duration-300',
        paddingStyles[padding],
        bgStyles[bg],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Section.displayName = 'Section';
export default Section;

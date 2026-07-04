import React from 'react';
import { cn } from '@/utils/cn';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-accent-100 text-accent-850 dark:bg-accent-900/40 dark:text-accent-300',
  primary: 'bg-primary-50 text-primary-700 dark:bg-primary-950/40 dark:text-primary-400 border border-primary-500/20',
  secondary: 'bg-amber-500/10 text-amber-700 dark:bg-amber-500/5 dark:text-amber-400 border border-amber-500/10',
  success: 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/5 dark:text-emerald-400 border border-emerald-500/10',
  warning: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/5 dark:text-amber-450 border border-amber-500/10',
  error: 'bg-rose-500/10 text-rose-700 dark:bg-rose-500/5 dark:text-rose-400 border border-rose-500/10',
  info: 'bg-sky-500/10 text-sky-700 dark:bg-sky-500/5 dark:text-sky-400 border border-sky-500/10',
};

/**
 * Reusable layout badge tag pill.
 */
export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase font-sans select-none',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
export default Badge;

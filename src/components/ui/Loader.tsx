import React from 'react';
import { cn } from '@/utils/cn';

type LoaderVariant = 'spinner' | 'skeleton';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LoaderVariant;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeStyles = {
  sm: 'h-6 w-6 border-2',
  md: 'h-10 w-10 border-3',
  lg: 'h-16 w-16 border-4',
  full: 'h-full w-full',
};

/**
 * Reusable Loading Spinner / Skeleton Block component.
 */
export const Loader: React.FC<LoaderProps> = ({
  className,
  variant = 'spinner',
  size = 'md',
  ...props
}) => {
  if (variant === 'skeleton') {
    return (
      <div
        className={cn(
          'animate-shimmer bg-gradient-to-r from-accent-200 via-accent-100 to-accent-200 dark:from-accent-850 dark:via-accent-800 dark:to-accent-850 bg-[length:200%_100%] rounded-md w-full',
          size === 'sm' && 'h-4',
          size === 'md' && 'h-8',
          size === 'lg' && 'h-16',
          size === 'full' && 'h-full min-h-[100px]',
          className
        )}
        {...props}
      />
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={cn(
          'animate-spin rounded-full border-t-primary-600 border-r-transparent border-b-transparent border-l-transparent',
          'border-accent-200 dark:border-accent-800',
          sizeStyles[size],
          className
        )}
        role="status"
        aria-label="loading"
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

Loader.displayName = 'Loader';
export default Loader;

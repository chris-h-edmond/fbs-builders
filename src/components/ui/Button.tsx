import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-medium shadow-sm border border-transparent focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  secondary: 'bg-accent-100 hover:bg-accent-200 active:bg-accent-300 text-accent-900 font-medium dark:bg-accent-850 dark:hover:bg-accent-800 dark:active:bg-accent-750 dark:text-accent-50 border border-transparent focus-visible:ring-accent-500 focus-visible:ring-offset-2',
  outline: 'bg-transparent border border-accent-300 dark:border-accent-700 hover:bg-accent-50 dark:hover:bg-accent-900/30 text-accent-800 dark:text-accent-200 font-medium focus-visible:ring-accent-500 focus-visible:ring-offset-2',
  ghost: 'bg-transparent hover:bg-accent-100/50 dark:hover:bg-accent-900/20 text-accent-700 dark:text-accent-300 font-medium border border-transparent focus-visible:ring-accent-500',
  link: 'bg-transparent text-primary-600 dark:text-primary-400 hover:underline p-0 border-0 h-auto focus-visible:ring-primary-500',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs rounded-md gap-1.5',
  md: 'h-11 px-6 text-sm rounded-lg gap-2',
  lg: 'h-13 px-8 text-base rounded-xl gap-2.5',
};

/**
 * Reusable premium button component.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center font-sans tracking-wide transition-all duration-200 outline-none select-none cursor-pointer',
          'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          variant !== 'link' && sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;

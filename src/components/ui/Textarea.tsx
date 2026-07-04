import React, { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Reusable accessible textarea multi-line field.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, disabled, id: customId, rows = 4, ...props }, ref) => {
    const defaultId = useId();
    const inputId = customId || defaultId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full text-left">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-1.5 transition-colors duration-200 select-none',
              disabled
                ? 'text-accent-400 dark:text-accent-600'
                : 'text-accent-850 dark:text-accent-200'
            )}
          >
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          disabled={disabled}
          rows={rows}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            cn(
              error ? errorId : undefined,
              helperText ? helperId : undefined
            ) || undefined
          }
          className={cn(
            'flex w-full rounded-lg border border-accent-300 dark:border-accent-700 bg-white dark:bg-neutral-900/50 px-3.5 py-2.5 text-sm text-neutral-900 dark:text-neutral-55 placeholder:text-accent-400 dark:placeholder:text-accent-600 transition-all duration-200 resize-y',
            'focus-visible:outline-none focus-visible:border-primary-500 focus-visible:ring-1 focus-visible:ring-primary-500',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-accent-50 dark:disabled:bg-accent-950/20',
            error && 'border-rose-500 focus-visible:border-rose-500 focus-visible:ring-rose-500',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-xs text-rose-500 font-medium animate-fade-in" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="mt-1.5 text-xs text-accent-500 dark:text-accent-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;

import React from 'react';
import { cn } from '@/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  hoverable?: boolean;
  glass?: boolean;
}

/**
 * Reusable premium container card.
 */
export const Card: React.FC<CardProps> = ({
  as: Component = 'div',
  hoverable = false,
  glass = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'rounded-2xl border border-accent-200 dark:border-accent-800 bg-white dark:bg-neutral-900/40 p-6 transition-all duration-300',
        glass && 'glass',
        hoverable && 'hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-200/40 dark:hover:shadow-neutral-950/40 hover:border-primary-500/30 dark:hover:border-primary-500/20',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('flex flex-col gap-1.5 mb-4', className)} {...props} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={cn('font-display text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50', className)} {...props} />
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...props }) => (
  <p className={cn('text-xs text-accent-500 dark:text-accent-400 leading-relaxed', className)} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('text-sm text-accent-700 dark:text-accent-300 leading-relaxed', className)} {...props} />
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('flex items-center mt-6 pt-4 border-t border-accent-100 dark:border-accent-900', className)} {...props} />
);

Card.displayName = 'Card';
export default Card;

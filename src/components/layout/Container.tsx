import React from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  clean?: boolean;
}

/**
 * Reusable layout container constraint.
 */
export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  clean = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-7xl',
        !clean && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Container.displayName = 'Container';
export default Container;

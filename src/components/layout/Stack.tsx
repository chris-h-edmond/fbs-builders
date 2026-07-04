import React from 'react';
import { cn } from '@/utils/cn';

type StackDirection = 'col' | 'row' | 'col-reverse' | 'row-reverse';
type StackGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: StackDirection;
  directionSm?: StackDirection;
  directionMd?: StackDirection;
  directionLg?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
}

const directionStyles: Record<StackDirection, string> = {
  col: 'flex-col',
  row: 'flex-row',
  'col-reverse': 'flex-col-reverse',
  'row-reverse': 'flex-row-reverse',
};

const smDirectionStyles: Record<StackDirection, string> = {
  col: 'sm:flex-col',
  row: 'sm:flex-row',
  'col-reverse': 'sm:flex-col-reverse',
  'row-reverse': 'sm:flex-row-reverse',
};

const mdDirectionStyles: Record<StackDirection, string> = {
  col: 'md:flex-col',
  row: 'md:flex-row',
  'col-reverse': 'md:flex-col-reverse',
  'row-reverse': 'md:flex-row-reverse',
};

const lgDirectionStyles: Record<StackDirection, string> = {
  col: 'lg:flex-col',
  row: 'lg:flex-row',
  'col-reverse': 'lg:flex-col-reverse',
  'row-reverse': 'lg:flex-row-reverse',
};

const gapStyles: Record<StackGap, string> = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

const alignStyles: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyStyles: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

/**
 * Reusable vertical/horizontal stack system primitive.
 */
export const Stack: React.FC<StackProps> = ({
  as: Component = 'div',
  direction = 'col',
  directionSm,
  directionMd,
  directionLg,
  gap = 'sm',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'flex',
        directionStyles[direction],
        directionSm && smDirectionStyles[directionSm],
        directionMd && mdDirectionStyles[directionMd],
        directionLg && lgDirectionStyles[directionLg],
        gapStyles[gap],
        alignStyles[align],
        justifyStyles[justify],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Stack.displayName = 'Stack';
export default Stack;

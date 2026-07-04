import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

/**
 * Reusable layout breadcrumb navigation.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-xs font-medium font-sans select-none', className)}
      {...props}
    >
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link
            to="/"
            className="flex items-center text-accent-500 hover:text-primary-650 transition-colors"
            aria-label="Home"
          >
            <Home size={14} className="mr-0.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-accent-400 dark:text-accent-600 shrink-0" />
              {isLast || !item.href ? (
                <span
                  className="text-accent-700 dark:text-accent-300 font-semibold truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-accent-500 hover:text-primary-650 transition-colors truncate max-w-[200px]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
export default Breadcrumb;

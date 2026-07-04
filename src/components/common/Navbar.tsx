import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { NAVIGATION_LINKS } from '@/constants';

/**
 * Global Navigation Header Component.
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { y } = useScrollPosition();
  const location = useLocation();

  const isScrolled = y > 20;

  // Close mobile navigation drawer on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock scroll when mobile overlay drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-transparent',
          isScrolled
            ? 'glass py-3 shadow-md shadow-neutral-100/5 dark:shadow-neutral-950/20 border-accent-200 dark:border-accent-800'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" aria-label="FBS Builders Home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg p-1">
              <Logo />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {NAVIGATION_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm',
                      isActive
                        ? 'text-primary-600 dark:text-primary-400 border-primary-500'
                        : 'text-accent-600 dark:text-accent-400 border-transparent hover:text-neutral-900 dark:hover:text-white'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA & Theme toggles */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg border border-accent-200 dark:border-accent-800 text-accent-700 dark:text-accent-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link to="/contact" className="focus-visible:outline-none">
                <Button variant="primary" size="sm">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg border border-accent-200 dark:border-accent-800 text-accent-700 dark:text-accent-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-colors cursor-pointer"
                aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Hamburger Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg border border-accent-200 dark:border-accent-800 text-accent-700 dark:text-accent-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-expanded={isOpen}
                aria-label="Toggle mobile navigation menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white dark:bg-neutral-950 p-6 shadow-xl border-l border-accent-100 dark:border-accent-900 md:hidden flex flex-col pt-24"
            >
              <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
                {NAVIGATION_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        'text-lg font-medium tracking-wide py-2 border-b border-accent-100 dark:border-accent-900 transition-colors',
                        isActive
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-accent-600 dark:text-accent-400 hover:text-neutral-900 dark:hover:text-white'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <Link to="/contact" className="w-full">
                  <Button variant="primary" className="w-full" size="lg">
                    Get a Quote
                  </Button>
                </Link>
                <div className="text-center text-xs text-accent-500">
                  © {new Date().getFullYear()} FBS Builders
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;

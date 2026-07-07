import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Logo } from './Logo';
import { NAVIGATION_LINKS } from '@/constants';

/**
 * Global Navigation Header Component.
 * Minimalist luxury layout with vertical links on the left and logo on the right.
 */
export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]); // Fades out completely after 300px of scrolling

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-screen pointer-events-none p-8 md:p-12 flex justify-between">
      {/* Brand Logo (Left) */}
      <motion.div className="pointer-events-auto" style={{ opacity: logoOpacity }}>
        <Link to="/" aria-label="FBS Builders Home" className="focus-visible:outline-none text-white hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
      </motion.div>

      {/* Desktop & Mobile Navigation Links (Right) */}
      <nav className="pointer-events-auto flex flex-col gap-4 mt-24 items-end" aria-label="Main Navigation">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) =>
              cn(
                'text-2xl md:text-4xl font-bold lowercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm origin-right',
                isActive
                  ? 'text-white opacity-100 scale-105'
                  : 'text-white/70 hover:text-white hover:opacity-100 hover:scale-105'
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;

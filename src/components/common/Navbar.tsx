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

  // Fade out initial elements between 0px and 300px
  const initialOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const pointerEventsInitial = useTransform(scrollY, [0, 300], ['auto', 'none']);

  // Fade in scrolled navbar between 200px and 400px
  const scrolledOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const scrolledY = useTransform(scrollY, [200, 400], [-20, 0]);
  const pointerEventsScrolled = useTransform(scrollY, [200, 400], ['none', 'auto']);

  return (
    <>
      {/* --- INITIAL STATE (Top of page) --- */}
      <motion.header
        style={{ opacity: initialOpacity, pointerEvents: pointerEventsInitial as any }}
        className="fixed top-0 left-0 right-0 z-50 w-full h-screen p-8 md:p-12 flex justify-between"
      >
        {/* Brand Logo (Left) */}
        <div>
          <Link to="/" aria-label="FBS Builders Home" className="focus-visible:outline-none text-white hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end">
          <Link
            to="/contact"
            className="px-6 py-2 text-lg md:text-3xl rounded-full bg-white text-black font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Book a Call
          </Link>

          <nav className="flex flex-col gap-4 mt-4 items-end" aria-label="Main Navigation">
            {NAVIGATION_LINKS.filter(link => link.label.toLowerCase() !== 'contact').map((link) => (
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
        </div>
      </motion.header>

      {/* --- SCROLLED STATE (Pill Navigation) --- */}
      <motion.div
        style={{ opacity: scrolledOpacity, y: scrolledY, pointerEvents: pointerEventsScrolled as any }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
      >
        <div className="flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl">
          {/* Logo */}
          <Link to="/" className="text-white font-sans font-bold text-2xl lowercase tracking-tight hover:opacity-80 transition-opacity">
            fbs
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {NAVIGATION_LINKS.filter(link => link.label.toLowerCase() !== 'contact').map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-full font-bold lowercase tracking-wide text-sm transition-all duration-300',
                    isActive
                      ? 'bg-white text-black'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 rounded-full bg-white text-black font-bold tracking-wide text-sm hover:scale-105 transition-transform duration-300"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;

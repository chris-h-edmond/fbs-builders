import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '@/constants';
import { AnimatePresence } from 'framer-motion';

/**
 * Global Navigation Header Component.
 * Minimalist luxury layout with vertical links on the left and logo on the right.
 */
export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const checkIsActive = (href: string, defaultIsActive: boolean) => {
    if (href.includes('#')) {
      return location.pathname + location.hash === href;
    }
    return defaultIsActive;
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (location.hash) {
        window.history.pushState(null, '', '/');
      }
    }
  };

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
    setIsMobileMenuOpen(false);
  };

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
          <Link to="/" onClick={handleLogoClick} aria-label="FBS Builders Home" className="focus-visible:outline-none text-white hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu size={28} />
            </button>
            <Link
              to="/contact"
              className="hidden sm:inline-flex px-4 py-2 text-sm md:px-6 md:py-2 md:text-3xl rounded-full bg-white text-black font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Book a Call
            </Link>
          </div>

          <nav className="hidden md:flex flex-col gap-4 mt-4 items-end" aria-label="Main Navigation">
            {NAVIGATION_LINKS.filter(link => link.label.toLowerCase() !== 'contact').map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={({ isActive }) =>
                  cn(
                    'text-2xl md:text-4xl font-bold lowercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm origin-right',
                    checkIsActive(link.href, isActive)
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

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white/70 hover:text-white p-2"
              aria-label="Close menu"
            >
              <X size={40} />
            </button>
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile Navigation">
              {NAVIGATION_LINKS.filter(link => link.label.toLowerCase() !== 'contact').map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={({ isActive }) =>
                    cn(
                      'text-4xl font-bold lowercase tracking-wide transition-all duration-300',
                      checkIsActive(link.href, isActive) ? 'text-white' : 'text-white/70 hover:text-white'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold tracking-wide text-2xl hover:scale-105 transition-transform duration-300"
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SCROLLED STATE (Pill Navigation) --- */}
      <motion.div
        style={{ opacity: scrolledOpacity, y: scrolledY, pointerEvents: pointerEventsScrolled as any }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
      >
        <div className="flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="text-white font-sans font-bold text-2xl lowercase tracking-tight hover:opacity-80 transition-opacity">
            fbs
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar max-w-full">
            {NAVIGATION_LINKS.filter(link => link.label.toLowerCase() !== 'contact').map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={({ isActive }) =>
                  cn(
                    'hidden md:inline-flex px-4 py-2 rounded-full font-bold lowercase tracking-wide text-sm whitespace-nowrap transition-all duration-300',
                    checkIsActive(link.href, isActive)
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
              className="ml-2 px-5 py-2 rounded-full bg-white text-black font-bold tracking-wide text-sm whitespace-nowrap hover:scale-105 transition-transform duration-300"
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

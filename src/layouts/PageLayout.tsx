import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

/**
 * Reusable master layout wrapper.
 * Combines global headers, footers, page scroll overrides, and page entrance animations.
 */
export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top automatically when location route path changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior, // TypeScript casting support
    });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Area with page transition animation */}
      <motion.main
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="flex-grow pt-24" // Spacing padding to prevent overlaps from sticky header
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

PageLayout.displayName = 'PageLayout';
export default PageLayout;

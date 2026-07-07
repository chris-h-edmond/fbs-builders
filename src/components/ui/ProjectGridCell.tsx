import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGridCellProps {
  imageA: string;
  imageB: string;
  className?: string;
  children?: React.ReactNode;
}

export const ProjectGridCell: React.FC<ProjectGridCellProps> = ({
  imageA,
  imageB,
  className = '',
  children,
}) => {
  const [showImageA, setShowImageA] = useState(true);

  useEffect(() => {
    // Randomize the interval between 4 to 8 seconds so cells don't all flip at the same time
    const intervalTime = Math.floor(Math.random() * 4000) + 4000;
    
    const timer = setInterval(() => {
      setShowImageA((prev) => !prev);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <AnimatePresence mode="popLayout">
        {showImageA ? (
          <motion.img
            key="imgA"
            src={imageA}
            alt="Project placeholder A"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : (
          <motion.img
            key="imgB"
            src={imageB}
            alt="Project placeholder B"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </AnimatePresence>
      
      {/* Optional Overlay Content (like the Button) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ProjectGridCell;

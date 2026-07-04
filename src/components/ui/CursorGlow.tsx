import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * A soft, glowing drop shadow that follows the user's cursor.
 */
export const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[45] rounded-full mix-blend-screen blur-[20px]"
      animate={{
        x: mousePosition.x - 75, // Offset by half the width to center (150 / 2)
        y: mousePosition.y - 75, // Offset by half the height to center
      }}
      transition={{
        type: 'tween',
        ease: 'circOut',
        duration: 0.15, // Very slight delay for smooth trailing effect
      }}
      style={{
        width: 150,
        height: 150,
        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
      }}
    />
  );
};

export default CursorGlow;

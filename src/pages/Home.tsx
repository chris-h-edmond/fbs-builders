import React, { useState, useEffect } from 'react';
import { Meta } from '@/components/common/Meta';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import img1 from '@/assets/images/PS Tower.png';
import img2 from '@/assets/images/Prasanth, 1.png';
import img3 from '@/assets/images/Prasanth, 4.png';
import img4 from '@/assets/images/Roy.png';
import img5 from '@/assets/images/Sophia.png';
import img6 from '@/assets/images/Tony 1.png';
import img7 from '@/assets/images/tony 2.png';

const images = [img1, img2, img3, img4, img5, img6, img7];

export const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Crossfade every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Meta
        title="Commercial General Contracting & Construction"
        description="Premium commercial construction, tenant buildouts, and design-build workflows by FBS Builders."
      />
      {/* Immersive Fullscreen Background Slider */}
      <div className="fixed inset-0 w-full h-full bg-[#0a0a0a] overflow-hidden -z-10">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Architectural Backdrop"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;

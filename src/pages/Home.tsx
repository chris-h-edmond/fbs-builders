import React, { useState, useEffect } from 'react';
import { Meta } from '@/components/common/Meta';
import { motion, AnimatePresence } from 'framer-motion';
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel';
import { FeaturedProjectsGrid } from '@/components/ui/FeaturedProjectsGrid';

// Import images
import img1 from '@/assets/images/PS Tower.png';
import img2 from '@/assets/images/Prasanth, 1.png';
import img3 from '@/assets/images/Prasanth, 4.png';
import img4 from '@/assets/images/Roy.png';
import img5 from '@/assets/images/Sophia.png';
import img6 from '@/assets/images/Tony 1.png';
import img7 from '@/assets/images/tony 2.png';

const sliderImages = [img1, img2, img3, img4, img5, img6, img7];

export const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Enable scroll snapping only on the home page
    document.documentElement.classList.add('snap-y', 'snap-mandatory');
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 6000); // Crossfade every 6 seconds
    
    return () => {
      clearInterval(timer);
      document.documentElement.classList.remove('snap-y', 'snap-mandatory');
    };
  }, []);

  return (
    <div className="bg-[#0E0E0E] min-h-screen">
      <Meta
        title="Commercial General Contracting & Construction"
        description="Premium commercial construction, tenant buildouts, and design-build workflows by FBS Builders."
      />
      
      {/* 1st Section: Immersive Fullscreen Background Slider */}
      <section className="relative w-full h-screen overflow-hidden bg-black snap-start">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex]}
            alt="Architectural Backdrop"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Reviews Carousel */}
        <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12 lg:left-24 z-10 w-[90%] md:w-full max-w-2xl pointer-events-auto">
          <ReviewsCarousel />
        </div>
      </section>

      {/* 2nd Section: Featured Projects */}
      <FeaturedProjectsGrid />

    </div>
  );
};

export default Home;

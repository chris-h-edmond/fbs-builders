import React, { useState, useEffect } from 'react';
import { Meta } from '@/components/common/Meta';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectGridCell } from '@/components/ui/ProjectGridCell';
import { Link } from 'react-router-dom';
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel';

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
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 6000); // Crossfade every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0E0E0E] min-h-screen">
      <Meta
        title="Commercial General Contracting & Construction"
        description="Premium commercial construction, tenant buildouts, and design-build workflows by FBS Builders."
      />
      
      {/* 1st Section: Immersive Fullscreen Background Slider */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
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

      {/* 2nd Section: Main Page Grid */}
      <section className="w-full min-h-screen bg-[#0E0E0E] p-4 md:p-12 lg:p-24 flex items-center justify-center">
        {/* Masonry Flex Container matching sketch */}
        <div className="flex flex-col md:flex-row w-full md:aspect-[16/10] max-w-[1800px] gap-6">
          
          {/* Left Column (~35%) */}
          <div className="flex-1 flex flex-col gap-6 min-h-[500px] md:min-h-0">
            {/* Top Half */}
            <div className="flex-1 flex gap-6">
              <ProjectGridCell imageA={img1} imageB={img5} className="flex-1 rounded-3xl bg-neutral-900/50" />
              <ProjectGridCell imageA={img3} imageB={img6} className="flex-1 rounded-3xl bg-neutral-900/50" />
            </div>
            {/* Bottom Half */}
            <ProjectGridCell imageA={img2} imageB={img7} className="flex-1 rounded-3xl bg-neutral-900/50" />
          </div>

          {/* Middle Column (~35%) */}
          <div className="flex-1 flex flex-col gap-6 min-h-[600px] md:min-h-0">
            {/* Top Large Square */}
            <ProjectGridCell imageA={img4} imageB={img1} className="flex-[2] rounded-3xl bg-neutral-900/50" />
            {/* Middle Row of 3 */}
            <div className="flex-none h-1/4 min-h-[100px] flex gap-6">
              <ProjectGridCell imageA={img5} imageB={img2} className="flex-1 rounded-3xl bg-neutral-900/50" />
              <ProjectGridCell imageA={img7} imageB={img3} className="flex-1 rounded-3xl bg-neutral-900/50" />
              <ProjectGridCell imageA={img1} imageB={img6} className="flex-1 rounded-3xl bg-neutral-900/50" />
            </div>
            {/* Bottom Rectangle */}
            <ProjectGridCell imageA={img6} imageB={img4} className="flex-1 rounded-3xl bg-neutral-900/50" />
          </div>

          {/* Right Column (~30%) */}
          <div className="flex-[0.8] flex flex-col gap-6 min-h-[500px] md:min-h-0">
            {/* Top Large Rectangle with Button */}
            <ProjectGridCell imageA={img3} imageB={img7} className="flex-[2] min-h-[250px] md:min-h-0 rounded-3xl bg-neutral-900/50">
              <Link 
                to="/projects" 
                className="pointer-events-auto font-sans font-bold text-3xl sm:text-5xl lg:text-6xl lowercase tracking-tight text-white hover:opacity-70 transition-opacity drop-shadow-lg"
              >
                view all projects.
              </Link>
            </ProjectGridCell>
            {/* Bottom Large Rectangle */}
            <ProjectGridCell imageA={img2} imageB={img5} className="flex-[1.5] rounded-3xl bg-neutral-900/50" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;

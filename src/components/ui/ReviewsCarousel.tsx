import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { cn } from '@/utils/cn';

const REVIEWS = [
  {
    id: 1,
    name: 'Chris',
    rating: 5,
    text: 'The team was professional, attentive to detail, and delivered beyond our expectations. The whole process was smooth and stress-free.',
  },
  {
    id: 2,
    name: 'Sophia',
    rating: 5,
    text: 'FBS Builders completely transformed our commercial space. Their design-build workflow is unparalleled in efficiency and quality.',
  },
  {
    id: 3,
    name: 'Michael',
    rating: 5,
    text: 'Highly recommend their services. They stayed on budget, communicated clearly throughout the project, and the final result is stunning.',
  },
  {
    id: 4,
    name: 'Elena',
    rating: 5,
    text: 'A truly premium experience. From the initial consultation to the final walkthrough, their attention to quality craftsmanship was evident.',
  }
];

export const ReviewsCarousel: React.FC<{ className?: string }> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <div 
      className={cn(
        "relative max-w-2xl w-full",
        // "almost clear background slight black circle shadowing" -> subtle radial gradient background mask or shadow
        "bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_100%)]",
        className
      )}
    >
      <div className="flex items-center gap-2 sm:gap-8 px-2 sm:px-8 py-4 sm:py-6">
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="text-white/60 hover:text-white transition-colors focus:outline-none flex-shrink-0"
          aria-label="Previous review"
        >
          <ArrowLeft size={32} strokeWidth={1.5} />
        </button>

        {/* Central Content */}
        <div className="flex-1 flex flex-col items-center min-w-0">
          
          {/* Top Line */}
          <div className="w-full h-[1px] bg-white/40 mb-4" />

          {/* Name & Stars */}
          <div className="w-full flex justify-between items-center mb-4 px-4">
            <span className="text-white text-xl md:text-2xl font-bold tracking-wide">
              {currentReview.name}
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={i < currentReview.rating ? "text-white fill-white" : "text-white/30"} 
                />
              ))}
            </div>
          </div>

          {/* Review Text Area */}
          <div className="relative w-full px-6 md:px-12 min-h-[100px] flex items-center justify-center">
            {/* Opening Quote */}
            <Quote 
              className="absolute top-0 left-0 text-white/30 rotate-180 w-6 h-6 md:w-9 md:h-9" 
            />
            
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-white/90 text-lg md:text-xl text-center leading-relaxed font-medium"
              >
                {currentReview.text}
              </motion.p>
            </AnimatePresence>

            {/* Closing Quote */}
            <Quote 
              className="absolute bottom-0 right-0 text-white/30 w-6 h-6 md:w-9 md:h-9" 
            />
          </div>

          {/* Bottom Line */}
          <div className="w-full h-[1px] bg-white/40 mt-4" />

        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="text-white/60 hover:text-white transition-colors focus:outline-none flex-shrink-0"
          aria-label="Next review"
        >
          <ArrowRight size={32} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

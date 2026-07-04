import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Grainient } from '@/components/ui/Grainient/Grainient';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  // Triggers the transition exit animation
  const handleDismiss = () => {
    if (isExiting) return;
    setIsExiting(true);
  };

  useEffect(() => {
    // Prevent scrolling while splash screen is active
    document.body.style.overflow = 'hidden';

    // Auto-dismiss after 5 seconds (5000ms delay) if not clicked
    const autoDismissTimer = setTimeout(() => {
      setIsExiting(true);
    }, 5000);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(autoDismissTimer);
    };
  }, []);

  // Sync unmounting after the 1.1s exit transition completes
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [isExiting, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={isExiting ? { opacity: 0, scale: 0.98 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.215, 0.610, 0.355, 1.000] }}
      onClick={handleDismiss}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0E0E] text-[#FFFFFF] select-none overflow-hidden w-screen h-screen cursor-pointer"
    >
      {/* Fullscreen slowly moving WebGL grainy architectural gradient */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Grainient
          color1="#201f5c"
          color2="#000000ff"
          color3="#2a4b55"
          timeSpeed={1.3}
          colorBalance={0.01}
          warpStrength={0.65}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={49}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={260}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={4}
          grainAnimated={true}
          contrast={1.5}
          gamma={1.0}
          saturation={0.65}
          centerX={-0.03}
          centerY={0.06}
          zoom={1}
          className="w-full h-full opacity-90"
        />
      </div>

      {/* Centered Typography revealing via tracking-in-contract */}
      <div className="relative z-10 flex items-center justify-center px-6 text-center w-full">
        <motion.h1
          animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-semibold text-white tracking-widest text-4xl sm:text-6xl md:text-[72px] leading-tight select-none animate-tracking-in-contract lowercase"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          fbs builders
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

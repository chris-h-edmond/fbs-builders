import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grainient } from '@/components/ui/Grainient/Grainient';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'combining' | 'exiting'>('initial');

  const handleDismiss = () => {
    if (phase === 'exiting') return;
    setPhase('exiting');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Start combining after 2.5 seconds
    const combineTimer = setTimeout(() => {
      setPhase('combining');
    }, 2500);

    // Auto-dismiss after 4.5 seconds if not clicked
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 4500);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(combineTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  // Sync unmounting after the 1.1s exit transition completes
  useEffect(() => {
    if (phase === 'exiting') {
      const timer = setTimeout(() => {
        onComplete();
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={phase === 'exiting' ? { opacity: 0 } : { opacity: 1 }}
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

      <div className="relative z-10 w-full h-full flex px-6 text-center pointer-events-none">
        <AnimatePresence>
          {phase === 'initial' && (
            <motion.div
              key="full-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            >
              <span className="text-white/70 text-sm md:text-base uppercase tracking-widest font-medium">
                A venture by
              </span>
              <h1
                className="font-semibold text-white text-3xl sm:text-5xl md:text-7xl leading-tight select-none animate-text-shadow-drop-bottom"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Fortune Business and Synthesis
              </h1>
            </motion.div>
          )}
          {phase !== 'initial' && (
            <motion.div
              key="fbs-builders"
              initial={{ opacity: 0, scale: 1.2, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="absolute top-8 left-8 md:top-12 md:left-12"
            >
              <h1 className="font-sans font-bold text-6xl sm:text-7xl lowercase tracking-tight select-none text-white">
                fbs builders.
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

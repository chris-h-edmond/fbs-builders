import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Link } from 'react-router-dom';

// Import images
import img1 from '@/assets/images/PS Tower.png';
import img2 from '@/assets/images/Prasanth, 1.png';
import img3 from '@/assets/images/Prasanth, 4.png';
import img4 from '@/assets/images/Roy.png';
import img5 from '@/assets/images/Sophia.png';
import img6 from '@/assets/images/Tony 1.png';
import img7 from '@/assets/images/tony 2.png';

export interface Project {
  id: string;
  name: string;
  thumbnail: string;
  images: string[];
  review: string;
  features: string[];
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 'project-1',
    name: 'The Obsidian Pavilion',
    thumbnail: img1,
    images: [img1, img2, img7],
    review: "FBS Builders delivered a masterpiece. The attention to detail and modern aesthetic exceeded our highest expectations.",
    features: [
      "Custom glass facade installation",
      "Minimalist interior build-out",
      "Advanced climate control integration",
      "Bespoke lighting design"
    ]
  },
  {
    id: 'project-2',
    name: 'Aura Commercial Center',
    thumbnail: img2,
    images: [img2, img3, img1],
    review: "Their design-build approach streamlined the entire process. A truly premium experience from start to finish.",
    features: [
      "Full structural renovation",
      "Open-concept workspace design",
      "Sustainable material sourcing",
      "State-of-the-art security systems"
    ]
  },
  {
    id: 'project-3',
    name: 'Lumina Heights',
    thumbnail: img3,
    images: [img3, img4, img5],
    review: "Highly professional and efficient. The transformation of our space is nothing short of incredible.",
    features: [
      "High-end acoustic treatments",
      "Custom architectural millwork",
      "Smart building automation",
      "Premium flooring solutions"
    ]
  },
  {
    id: 'project-4',
    name: 'Equinox Plaza',
    thumbnail: img4,
    images: [img4, img6, img2],
    review: "FBS Builders brought our vision to life with unparalleled craftsmanship and dedication.",
    features: [
      "Complete exterior modernization",
      "Luxury lobby redesign",
      "Energy-efficient HVAC systems",
      "Landscaping and hardscaping"
    ]
  },
  {
    id: 'project-5',
    name: 'Vertex Innovations Hub',
    thumbnail: img5,
    images: [img5, img7, img3],
    review: "The new space perfectly reflects our brand identity. We couldn't be happier with the results.",
    features: [
      "Tech-focused infrastructure",
      "Ergonomic workstation layouts",
      "Interactive conference rooms",
      "Soundproof focus pods"
    ]
  },
  {
    id: 'project-6',
    name: 'Zenith Corporate HQ',
    thumbnail: img6,
    images: [img6, img1, img4],
    review: "A flawless execution of a complex design. FBS Builders is the gold standard for commercial construction.",
    features: [
      "Executive suite construction",
      "Custom art installations",
      "Premium cafeteria build-out",
      "Wellness and fitness center"
    ]
  }
];

export const FeaturedProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section className="w-full bg-[#0E0E0E] py-12 md:py-16 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center min-h-screen z-20 relative snap-start">
      <div className="w-full max-w-[1800px] flex flex-col justify-center h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold lowercase tracking-tight select-none"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            featured projects
          </h2>
          <Link 
            to="/projects"
            className="inline-flex px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold lowercase tracking-wide text-sm md:text-base whitespace-nowrap text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            view all
          </Link>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
          {FEATURED_PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group relative aspect-square md:aspect-[4/3] lg:aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-colors duration-500 bg-neutral-900"
              onClick={() => handleOpenModal(project)}
            >
              {/* Project Image */}
              <img 
                src={project.thumbnail} 
                alt={project.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div 
                  className="text-white text-base md:text-lg font-bold tracking-wide border border-white/40 px-6 py-2 md:py-3 rounded-full bg-black/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  Click to know more
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal (Glassmorphism Popup) */}
      <AnimatePresence>
        {selectedProject && (
          <React.Fragment key="project-modal">
            {/* Blurred Backdrop - Independent of modal content scaling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-lg cursor-pointer"
              onClick={handleCloseModal}
            />

            {/* Modal Content Container */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl max-h-full overflow-y-auto bg-black/40 border border-white/20 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row pointer-events-auto"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
              >
              {/* Close Button */}
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-50 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-2 rounded-full backdrop-blur-md transition-all border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Left Side: Image Carousel */}
              <div className="w-full md:w-1/2 relative bg-black/20 min-h-[300px] md:min-h-[500px] flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.name} - view ${currentImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                  />
                </AnimatePresence>
                
                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                  <button 
                    onClick={handlePrevImage}
                    className="pointer-events-auto text-white/70 hover:text-white bg-black/30 hover:bg-black/60 p-3 rounded-full backdrop-blur-md transition-all border border-white/10 hover:scale-105"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="pointer-events-auto text-white/70 hover:text-white bg-black/30 hover:bg-black/60 p-3 rounded-full backdrop-blur-md transition-all border border-white/10 hover:scale-105"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        idx === currentImageIndex ? "bg-white scale-125" : "bg-white/40"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side: Project Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                  {selectedProject.name}
                </h3>
                
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-white/80 italic leading-relaxed font-medium border-l-4 border-white/30 pl-4 py-1">
                    "{selectedProject.review}"
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-sm font-bold text-white mb-4 tracking-wide uppercase opacity-90">
                    What we did
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-white/90">
                        <span className="mr-3 text-white/50 mt-1">•</span>
                        <span className="text-base md:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            </div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjectsGrid;

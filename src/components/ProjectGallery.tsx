'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectDetail } from '@/data/projectsData';

interface ProjectGalleryProps {
  project: ProjectDetail;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = project.media[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mb-16">
      {/* Main media display with description */}
      <div className="relative mb-4 bg-black rounded-none border border-border-dark overflow-hidden group">
        <div className={`flex gap-6 md:gap-8 p-6 md:p-8 ${project.id === 1 ? 'flex-col' : 'flex-col md:flex-row'}`}>
          {/* Image/Video Section */}
          <div className="flex-1 flex justify-center items-center bg-black rounded-none border border-border-dark/50 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`relative h-auto bg-black flex items-center justify-center py-8 group/media ${
                  project.id === 1 ? 'w-full max-h-[800px]' : 'w-full max-w-sm max-h-[600px]'
                }`}
              >
                {currentMedia.type === 'image' ? (
                  <img
                    src={currentMedia.url}
                    alt={currentMedia.title || 'Project media'}
                    className={`h-auto object-contain ${
                      project.id === 1 ? 'w-full max-h-[800px]' : 'w-auto max-h-[600px]'
                    }`}
                  />
                ) : (
                  <video
                    src={currentMedia.url}
                    controls
                    className={`h-auto object-contain ${
                      project.id === 1 ? 'w-full max-h-[800px]' : 'w-auto max-h-[600px]'
                    }`}
                    poster={currentMedia.thumbnail}
                  />
                )}

                {/* Navigation buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 hover:bg-gold/20 rounded-none border border-gold/30 hover:border-gold transition-all opacity-0 group-hover/media:opacity-100"
                  aria-label="Previous media"
                >
                  <ChevronLeft className="w-6 h-6 text-gold" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 hover:bg-gold/20 rounded-none border border-gold/30 hover:border-gold transition-all opacity-0 group-hover/media:opacity-100"
                  aria-label="Next media"
                >
                  <ChevronRight className="w-6 h-6 text-gold" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-none border border-gold/30 text-gold text-sm font-semibold">
                  {currentIndex + 1} / {project.media.length}
                </div>

                {/* Media type indicator */}
                {currentMedia.type === 'video' && (
                  <div className="absolute top-4 left-4 bg-crimson/80 px-3 py-1 rounded-none text-bone text-sm font-semibold">
                    Vidéo
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description Section */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gold font-cinzel">
                {currentMedia.title}
              </h3>
              
              {currentMedia.description && (
                <p className="text-bone leading-relaxed text-sm md:text-base text-justify">
                  {currentMedia.description}
                </p>
              )}
              
              {/* Media type badge */}
              {currentMedia.type === 'video' && (
                <div className="inline-block px-3 py-1 bg-crimson/20 text-crimson border border-crimson/50 rounded-none text-xs font-semibold">
                  Vidéo
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Thumbnail carousel */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {project.media.map((media, index) => (
          <motion.button
            key={index}
            onClick={() => goToIndex(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex-shrink-0 w-24 h-24 rounded-none border-2 transition-all overflow-hidden ${
              index === currentIndex
                ? 'border-gold'
                : 'border-border-dark hover:border-gold/50'
            }`}
          >
            {media.type === 'image' ? (
              <img
                src={media.url}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <video
                  src={media.url}
                  className="w-full h-full object-cover"
                  poster={media.thumbnail}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-6 h-6 border-2 border-gold rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-l-gold border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1" />
                  </div>
                </div>
              </>
            )}

            {/* Media type badge */}
            {media.type === 'video' && (
              <div className="absolute top-1 right-1 bg-crimson/90 text-bone text-xs px-1.5 py-0.5 rounded-none font-semibold">
                ▶
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Info text */}
      <p className="text-ash text-xs mt-4">
        Cliquez sur les miniatures pour naviguer, ou utilisez les flèches
      </p>
    </div>
  );
}

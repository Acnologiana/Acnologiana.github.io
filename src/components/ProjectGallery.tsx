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
      {/* Main media display */}
      <div className="relative mb-4 bg-black rounded-none border border-border-dark overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-video bg-black flex items-center justify-center"
          >
            {currentMedia.type === 'image' ? (
              <img
                src={currentMedia.url}
                alt={currentMedia.title || 'Project media'}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={currentMedia.url}
                controls
                className="w-full h-full"
                poster={currentMedia.thumbnail}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 hover:bg-gold/20 rounded-none border border-gold/30 hover:border-gold transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous media"
        >
          <ChevronLeft className="w-6 h-6 text-gold" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 hover:bg-gold/20 rounded-none border border-gold/30 hover:border-gold transition-all opacity-0 group-hover:opacity-100"
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
      </div>

      {/* Media title */}
      {currentMedia.title && (
        <p className="text-bone text-sm mb-6 ml-1">{currentMedia.title}</p>
      )}

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

'use client';

import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center z-10"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Clément Lachize</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          Développeur Informatique & Futur Ingénieur IA/Robotique
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-indigo-400 font-medium mb-12 italic"
        >
          "Concevoir des solutions intelligentes pour faire le pont entre le code et le réel"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
          >
            Voir mes projets
            <IoArrowForward className="group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <motion.a
            href="/cv.pdf"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-indigo-500 rounded-full font-semibold text-indigo-400 hover:bg-indigo-500/10 transition-all"
          >
            Télécharger mon CV
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-sm mb-2">Scroll pour explorer</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center p-2">
            <div className="w-1 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

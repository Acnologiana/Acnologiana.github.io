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
      {/* Background Grid Effect - Darkest Dungeon Style */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Large Logo at Top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 z-10"
      >
        <img src="/icone/image/logoCL.png" alt="Logo Clément Lachize" className="h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-[26rem] w-auto" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center z-10"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel"
        >
          <span className="gradient-text">Clément Lachize</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-bone mb-4"
        >
          Développeur Informatique & Futur Ingénieur Informatique et Réseaux de Communication
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gold font-medium mb-12 italic"
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
            className="group px-8 py-4 bg-crimson border border-crimson rounded-none font-semibold text-bone flex items-center gap-2 hover:bg-crimson-dark transition-all"
          >
            Voir mes projets
            <IoArrowForward className="group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <motion.a
            href="/CV/CVClementLachize.pdf"
            download="CVClementLachize.pdf"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gold rounded-none font-semibold text-gold hover:bg-gold hover:text-void transition-all"
          >
            Télécharger mon CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

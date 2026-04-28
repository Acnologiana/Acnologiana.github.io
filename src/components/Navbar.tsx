'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMenu, IoClose } from 'react-icons/io5';
import { ArrowLeft } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isProjectPage = pathname.startsWith('/projects/');

  const navItems = [
    { name: 'Présentation', href: '#hero' },
    { name: 'Projets', href: '#projects' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Valeurs', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (isHomePage) {
      // On est déjà sur la page d'accueil, utiliser le lien anchor simple
      window.location.hash = href.substring(1);
    } else {
      // On est sur une page de détail, naviguer vers l'accueil avec l'anchor
      router.push(`/${href}`);
    }
    setIsOpen(false);
  };

  const handleBackClick = () => {
    router.push('/#projects');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-obsidian rounded-none max-w-4xl mx-auto px-6 py-4 flex items-center justify-center relative border border-border-dark hover:border-crimson transition-colors"
      >
        {/* Bouton Retour - Absolue à gauche (seulement si page projet) */}
        {isProjectPage && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBackClick}
            className="absolute left-6 flex items-center gap-2 text-gold hover:text-crimson transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        )}

        {/* Desktop Menu - Centré */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              variants={itemVariants}
              onClick={() => handleNavClick(item.href)}
              className="text-base text-bone hover:text-gold hover:border-b-2 border-b-2 border-b-transparent transition-colors font-medium bg-none border-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Menu Button - Absolue à droite */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-6 text-2xl text-bone hover:text-gold"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-obsidian rounded-none max-w-4xl mx-auto mt-4 px-6 py-6 flex flex-col gap-4 md:hidden border border-border-dark"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-base text-bone hover:text-gold transition-colors font-medium py-2 text-left bg-none border-none cursor-pointer"
              whileHover={{ x: 8 }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

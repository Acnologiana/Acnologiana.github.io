'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Présentation', href: '#hero' },
    { name: 'Projets', href: '#projects' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Valeurs', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

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
        className="glass rounded-2xl max-w-4xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          CL
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              variants={itemVariants}
              href={item.href}
              className="text-sm text-gray-300 hover:text-indigo-400 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-300 hover:text-indigo-400"
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
          className="glass rounded-2xl max-w-4xl mx-auto mt-4 px-6 py-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-300 hover:text-indigo-400 transition-colors font-medium py-2"
              whileHover={{ x: 8 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

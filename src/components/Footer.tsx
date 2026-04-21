'use client';

import { motion } from 'framer-motion';
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoHeart } from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <IoLogoGithub />, href: '#', label: 'GitHub' },
    { icon: <IoLogoLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <IoMail />, href: 'mailto:clement.lachize@etud.univ-lyon1.fr', label: 'Email' },
  ];

  return (
    <footer className="w-full px-6 py-12 border-t border-border-dark bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Copyright */}
        <div className="text-ash text-sm text-center md:text-left">
          <p>© {currentYear} Clément Lachize. Tous droits réservés.</p>
          <p className="flex items-center justify-center md:justify-start gap-1 mt-1">
            Conçu avec <IoHeart className="text-red-500" /> et beaucoup de code ⚙️
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className="text-ash hover:text-gold text-2xl transition-colors border border-transparent hover:border-gold rounded-sm px-2 py-2"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-ash text-sm text-center md:text-right italic">
          "Concevoir l'avenir, une ligne de code à la fois"
        </div>
      </motion.div>
    </footer>
  );
}

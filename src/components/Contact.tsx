'use client';

import { motion } from 'framer-motion';
import { IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactInfo = [
    {
      icon: <IoMail className="text-3xl" />,
      label: 'Email',
      value: 'clement.lachize@etud.univ-lyon1.fr',
      href: 'mailto:clement.lachize@etud.univ-lyon1.fr',
    },
    {
      icon: <IoLogoLinkedin className="text-3xl" />,
      label: 'LinkedIn',
      value: 'Clément Lachize',
      href: '#',
    },
    {
      icon: <IoLogoGithub className="text-3xl" />,
      label: 'GitHub',
      value: 'Acnologiana',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full px-6 py-20 bg-gradient-to-b from-indigo-500/5 to-transparent"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
        >
          Prenons Contact
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg mb-16"
        >
          Vous avez un projet en tête, une question ou simplement envie de discuter ? Je serais ravi d'échanger avec vous.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, idx) => (
            <motion.a
              key={idx}
              variants={itemVariants}
              href={contact.href}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="text-indigo-400 mb-4 group-hover:text-purple-400 transition-colors">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
              <p className="text-gray-300 text-sm break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.a
          variants={itemVariants}
          href="mailto:clement.lachize@etud.univ-lyon1.fr"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
        >
          M'envoyer un email
        </motion.a>
      </motion.div>
    </section>
  );
}

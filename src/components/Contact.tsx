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
      value: 'lachizeclement@gmail.com',
      href: 'mailto:lachizeclement@gmail.com',
    },
    {
      icon: <IoLogoLinkedin className="text-3xl" />,
      label: 'LinkedIn',
      value: 'Clément Lachize',
      href: 'https://www.linkedin.com/in/cl%C3%A9ment-lachize-620039336/',
    },
    {
      icon: <IoLogoGithub className="text-3xl" />,
      label: 'GitHub',
      value: 'Acnologiana',
      href: 'https://github.com/Acnologiana',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 sm:py-12 md:py-20 bg-black"
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
          className="text-4xl md:text-5xl font-bold font-cinzel mb-8 gradient-text"
        >
          Prenons Contact
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-bone text-lg mb-16"
        >
          Vous avez un projet en tête, une question ou simplement envie de discuter ? Je serais ravi d'échanger avec vous.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-8 mb-16">
          {contactInfo.map((contact, idx) => (
            <motion.a
              key={idx}
              variants={itemVariants}
              href={contact.href}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass rounded-sm p-8 border border-border-dark hover:border-crimson transition-colors group flex flex-col items-center text-center"
              {...((['LinkedIn', 'GitHub'].includes(contact.label)) && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <div className="text-gold mb-4 group-hover:text-gold transition-colors flex justify-center">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
              <p className="text-bone text-sm break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.a
          variants={itemVariants}
          href="mailto:lachizeclement@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gold rounded-none font-semibold text-black hover:shadow-lg hover:shadow-gold/50 transition-all border border-gold hover:border-crimson"
        >
          M'envoyer un email
        </motion.a>
      </motion.div>
    </section>
  );
}

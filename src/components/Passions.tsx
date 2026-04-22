'use client';

import { motion } from 'framer-motion';
import { IoMusicalNote, IoTennisball, IoFitness, IoBook } from 'react-icons/io5';

interface Passion {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const passions: Passion[] = [
  {
    name: 'Musique',
    icon: <IoMusicalNote className="text-4xl" />,
    color: 'from-pink-600 to-red-600',
    description: 'Exploration musicale & création sonore',
  },
  {
    name: 'Tennis',
    icon: <IoTennisball className="text-4xl" />,
    color: 'from-green-600 to-emerald-600',
    description: 'Compétition & développement personnel',
  },
  {
    name: 'Gym',
    icon: <IoFitness className="text-4xl" />,
    color: 'from-orange-600 to-yellow-600',
    description: 'Discipline & bien-être physique',
  },
  {
    name: 'Lecture',
    icon: <IoBook className="text-4xl" />,
    color: 'from-blue-600 to-purple-600',
    description: 'Connaissance & inspiration',
  },
];

export default function Passions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const passionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.05, y: -8 },
  };

  return (
    <section className="w-full px-4 sm:px-6 sm:py-12 md:py-20 bg-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-4xl md:text-5xl font-bold font-cinzel mb-16 text-center gradient-text"
        >
          Passions & Équilibre
        </motion.h2>

        <p className="text-center text-bone mb-16 text-lg max-w-2xl mx-auto">
          Pour moi, l'équilibre entre code et vie personnelle est essentiel. Ces passions façonnent qui je suis.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-8">
          {passions.map((passion, idx) => (
            <motion.div
              key={idx}
              variants={passionVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-gradient-to-r ${passion.color} pointer-events-none`}
              ></div>

              {/* Card */}
              <div className="relative glass rounded-sm p-8 h-full flex flex-col items-center justify-center text-center border border-border-dark group-hover:border-crimson transition-colors">
                <div className="text-bone mb-4 group-hover:text-gold transition-colors">
                  {passion.icon}
                </div>
                <h3 className="text-2xl font-bold font-cinzel text-white mb-2">{passion.name}</h3>
                <p className="text-ash text-sm">{passion.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

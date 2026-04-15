'use client';

import { motion } from 'framer-motion';

interface Value {
  title: string;
  emoji: string;
  description: string;
  details: string[];
  color: string;
  bgColor: string;
}

const values: Value[] = [
  {
    title: 'Éco-conception',
    emoji: '🌱',
    description: 'Green IT & Durabilité Numérique',
    details: [
      'Optimisation de l\'empreinte carbone du code',
      'Architecture légère et économe en ressources',
      'Responsabilité environnementale du numérique',
    ],
    color: 'text-green-400',
    bgColor: 'from-green-600/20 to-emerald-600/20',
  },
  {
    title: 'Accessibilité (RGAA)',
    emoji: '♿',
    description: 'Inclusion pour tous les utilisateurs',
    details: [
      'Interfaces accessibles et inclusives',
      'Respect des standards RGAA',
      'Design universel et bienveillant',
    ],
    color: 'text-blue-400',
    bgColor: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    title: 'Agilité & Collaboration',
    emoji: '⚡',
    description: 'Travail d\'équipe et Adaptation',
    details: [
      'Méthodologies Scrum/Kanban',
      'Communication transparente',
      'Capacité à s\'adapter aux changements',
    ],
    color: 'text-orange-400',
    bgColor: 'from-orange-600/20 to-yellow-600/20',
  },
  {
    title: 'Excellence Technique',
    emoji: '⭐',
    description: 'Qualité & Rigueur Ingénieur',
    details: [
      'Code propre et maintenable (Clean Code)',
      'Documentation et bonnes pratiques',
      'Amélioration continue (kaizen)',
    ],
    color: 'text-purple-400',
    bgColor: 'from-purple-600/20 to-pink-600/20',
  },
];

export default function Values() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const valueVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -8 },
  };

  return (
    <section id="values" className="w-full px-6 py-20 bg-gradient-to-b from-transparent to-indigo-500/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Engagement & Valeurs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Au-delà des compétences techniques, une posture d'ingénieur responsable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={valueVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow Background */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-gradient-to-br ${value.bgColor} pointer-events-none`}
              ></div>

              {/* Card */}
              <div className="relative glass rounded-2xl p-8 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform origin-left">
                    {value.emoji}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${value.color} group-hover:brightness-125 transition-all`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{value.description}</p>
                  </div>
                </div>

                {/* Details */}
                <ul className="space-y-3 flex-1">
                  {value.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-3 text-gray-300 text-sm"
                    >
                      <span className={`text-lg ${value.color} flex-shrink-0`}>✓</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent bar */}
                <div className={`h-1 rounded-full w-full mt-6 bg-gradient-to-r ${value.bgColor.replace('/20', '/50')}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg italic">
            "Être ingénieur, c'est concevoir avec responsabilité et <span className="text-indigo-400 font-semibold">impact positif</span>"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

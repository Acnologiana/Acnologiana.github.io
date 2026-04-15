'use client';

import { motion } from 'framer-motion';
import { IoSchool, IoBriefcase } from 'react-icons/io5';

interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  details?: string[];
  type: 'education' | 'experience';
  icon: React.ReactNode;
  accent?: string;
}

const events: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Baccalauréat Général',
    organization: 'Lycée',
    description: 'Spécialités Mathématiques & Informatique — Mention Bien',
    type: 'education',
    icon: <IoSchool className="text-2xl" />,
  },
  {
    year: '2023-2026',
    title: 'BUT Informatique - Parcours RACDV',
    organization: 'IUT Lyon 1 - Campus de Bourg-en-Bresse',
    description:
      'Réalisation d\'Applications : Conception, Développement, Validation',
    details: [
      '🎯 Coloration Mobile & 3D : Spécialisation en interfaces immersives et développement mobile',
      '📚 Apprentissage par Projet (SAE) : Situations d\'Apprentissage et d\'Évaluation simulant des contraintes réelles',
      '🔬 Approche Scientifique : Algorithmique avancée, mathématiques, gestion de projet agile',
      '📊 Actuellement en 3e année avec spécialisation en architecture et conception robuste',
    ],
    type: 'education',
    icon: <IoSchool className="text-2xl" />,
    accent: 'blue',
  },
  {
    year: '2024',
    title: 'Développeur Informatique',
    organization: 'Eliste',
    description: 'Stage en développement informatique — Apprentissage des bonnes pratiques',
    type: 'experience',
    icon: <IoBriefcase className="text-2xl" />,
  },
  {
    year: '2025-2026',
    title: 'Développeur Mobile',
    organization: 'RPC - Alternance',
    description:
      'Développement d\'applications mobiles (Bon\'App Petit, etc.) — Gestion familiale et cantine numérique',
    details: [
      '📱 Architecture MVVM avec gestion d\'état (Provider Pattern)',
      '🔗 API REST (HTTP/JSON) et intégration données en temps réel',
      '✅ Tests unitaires et validation qualité',
    ],
    type: 'experience',
    icon: <IoBriefcase className="text-2xl" />,
    accent: 'purple',
  },
];

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="w-full px-6 py-20 bg-gradient-to-b from-indigo-500/5 to-transparent"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
        >
          Expériences & Études
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 transform md:-translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative pl-20 md:pl-0 ${
                  index % 2 === 0 ? 'md:text-right md:pr-1/2 md:mr-auto' : 'md:text-left md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-0 md:left-1/2 top-2 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center text-white border-4 border-black"
                >
                  <div className="text-lg">✓</div>
                </motion.div>

                {/* Content Card */}
                <div className="glass rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors group">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`p-2 rounded-lg ${
                        event.type === 'education'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {event.icon}
                    </span>
                    <p className="text-sm font-semibold text-indigo-400">{event.year}</p>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-2 font-medium">{event.organization}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{event.description}</p>

                  {/* Details List */}
                  {event.details && (
                    <ul className="space-y-2 text-xs text-gray-400">
                      {event.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-indigo-400">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

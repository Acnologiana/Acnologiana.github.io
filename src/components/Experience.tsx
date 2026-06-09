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
    year: '2019-2023',
    title: 'Baccalauréat Général',
    organization: 'Lycée Aiguerande, Belleville',
    description: 'Spécialités Mathématiques & Informatique',
    details: [
      'Formation générale en sciences et technologie avec approfondissement en mathématiques et informatique',
      'Initiation en programmation, algorithmes et pensée computationnelle',
      'Mention Bien au baccalauréat',
    ],
    type: 'education',
    icon: <IoSchool className="text-2xl" />,
  },
  {
    year: '2023-2026',
    title: 'BUT Informatique',
    organization: 'IUT Lyon 1 - Site de Bourg-en-Bresse',
    description:
      'Réalisation d\'Applications : Conception, Développement, Validation',
    details: [
      'Formation professionnalisante en 3 ans, avec 600 h de projets et une 3e année en alternance.',
      'Développement web et mobile, bases de données, systèmes et réseaux, algorithmique, mathématiques et gestion de projet.', 
      'Mobile & 3D : Spécialisation en interfaces immersives et développement mobile',
      'Apprentissage par Projet (SAE) : Projet en Situations d\'Apprentissage et d\'Évaluation simulant des contraintes réelles',
      'Approche Scientifique : Algorithmique avancée, mathématiques, gestion de projet agile',
    ],
    type: 'education',
    icon: <IoSchool className="text-2xl" />,
    accent: 'blue',
  },
  {
    year: '2024',
    title: 'Développeur Informatique',
    organization: 'Eliste',
    description: 'Stage de 10 semaines en développement informatique — Développement d\'Orthoscan',
    details: [
      'Stage de 10 semaines en développement informatique et apprentissage des bonnes pratiques',
      'Développement de l\'application Orthoscan : plateforme de géolocalisation haute précision pour photos mobiles',
      'Génération de modèles 3D à partir de photos géolocalisées capturées avec un téléphone spécialisé',
      'Implémentation du système de géolocalisation précise et du pipeline de reconstruction 3D',
      'Optimisation des algorithmes de traitement pour performance et précision',
    ],
    type: 'experience',
    icon: <IoBriefcase className="text-2xl" />,
  },
  {
    year: '2025-2026',
    title: 'Développeur Informatique',
    organization: 'RPC - Alternance',
    description:
      'Développement d\'applications mobiles Bon\'App Petit et Ropach Mobile',
    details: [
      'Alternance école/entreprise : 2 semainbrave es en entreprise, 2 semaine à l\'université puis 5 mois en entreprise d\'avril a septembre.',
      'Reprise et maintenance de projets existants : Refactorisation du code et ajout de nouvelles fonctionnalités',
      'Architecture MVVM avec gestion d\'état (Provider Pattern)',
      'API REST (HTTP/JSON) et intégration données en temps réel',
      'Tests unitaires et validation qualité',
      'Collaboration avec l\'équipe : Codes reviews, pair programming, planification agile',
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
      className="w-full px-4 sm:px-6 sm:py-12 md:py-20 bg-black"
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
          className="text-4xl md:text-5xl font-bold font-cinzel mb-16 text-center gradient-text"
        >
          Expériences & Études
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-crimson transform md:-translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isEducation = event.type === 'education';
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-2 w-13 h-13 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center z-10`}>
                    <div className={`w-5 h-5 rounded-full border-4 border-black bg-gold`}></div>
                  </div>

                  {/* Content Wrapper */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-16 md:pl-0`}>
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className={`glass rounded-sm p-6 border-l-4 md:border-l-0 border-l-gold md:border-r-4 md:border-r-gold hover:border-opacity-100 border-opacity-50 transition-all`}
                    >
                      <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                        <span
                          className={`p-2 rounded-lg bg-gold/20 text-gold`}
                        >
                          {event.icon}
                        </span>
                        <div className="flex-1">
                          <p className={`text-xs font-bold uppercase tracking-wider text-gold`}>
                            {isEducation ? 'Études' : 'Expérience'}
                          </p>
                          <p className={`text-sm font-semibold text-gold`}>{event.year}</p>
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold font-cinzel text-white mb-1 hover:text-gold transition-colors">
                        {event.title}
                      </h3>
                      <p className={`text-gold text-sm mb-2 font-medium`}>{event.organization}</p>
                      <p className="text-bone text-sm leading-relaxed mb-3 text-left">{event.description}</p>

                      {/* Details List */}
                      {event.details && (
                        <ul className="space-y-2 text-xs text-ash text-left">
                          {event.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <span className={`text-gold font-bold flex-shrink-0`}>•</span>
                              <span className="text-left">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

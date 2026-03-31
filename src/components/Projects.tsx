'use client';

import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  color: string;
  glowColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MindVault',
    description:
      'Application d\'aide-mémoire pour personnes atteintes de troubles mnésiques. Propose une gestion complète d\'agenda, notes et listes de cours intégrées.',
    stack: ['Flutter', 'Dart', 'MySQL'],
    color: 'from-blue-600 to-cyan-600',
    glowColor: 'cyan',
  },
  {
    id: 2,
    title: 'Ropach Mobile',
    description:
      'Adaptation mobile d\'une plateforme de gestion de cantine/périscolaire. Architecture MVVM avec gestion d\'état via Provider et API REST (HTTP/JSON).',
    stack: ['Flutter', 'Dart', 'API REST'],
    color: 'from-emerald-600 to-green-600',
    glowColor: 'emerald',
  },
  {
    id: 3,
    title: 'HERA',
    description:
      'Plateforme de Réalité Augmentée améliorée. Ajout de nouvelles fonctionnalités (pop-ups), stabilité accrue et correction de bugs critiques.',
    stack: ['JavaScript', 'SQL', 'Rerun'],
    color: 'from-orange-600 to-red-600',
    glowColor: 'orange',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { y: -12, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
      className="w-full px-6 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
        >
          Showcase des Projets
        </motion.h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-gradient-to-r ${project.color} pointer-events-none`}
              ></div>

              {/* Card */}
              <div className="relative glass rounded-2xl p-8 h-full border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors flex flex-col">
                {/* Title and Color Accent */}
                <div className="mb-6">
                  <div
                    className={`w-12 h-1 rounded-full bg-gradient-to-r ${project.color} mb-4`}
                  ></div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 8 }}
                  className="text-indigo-400 font-semibold text-sm flex items-center gap-2 group/link"
                >
                  En savoir plus
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

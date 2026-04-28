'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  color: string;
  glowColor: string;
  isSAE?: boolean;
  saeDetails?: string;
  isProfessional?: boolean;
  mascotteUrl?: string;
}

const projects: Project[] = projectsData.map(p => ({
  id: p.id,
  title: p.title,
  description: p.shortDescription,
  stack: p.stack,
  color: p.color,
  glowColor: p.glowColor,
  isSAE: p.isSAE,
  saeDetails: p.saeDetails,
  isProfessional: p.isProfessional,
  mascotteUrl: p.mascotteUrl,
}));

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
      className="w-full px-4 sm:px-6 sm:py-12 md:py-20 bg-black"
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
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text font-cinzel"
        >
          Showcase des Projets
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 auto-rows-max">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="h-full">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="group relative cursor-pointer h-full"
              >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-gradient-to-r ${project.color} pointer-events-none`}
              ></div>

              {/* Card */}
              <div className="relative glass rounded-none sm:p-4 md:p-8 h-full border border-border-dark group-hover:border-crimson transition-colors flex flex-col">
                {/* Title and Color Accent */}
                {/* Title and Color Accent */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className={`w-12 h-1 rounded-full bg-gradient-to-r ${project.color}`}
                    ></div>
                    {project.isSAE && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-crimson to-gold rounded-none text-xs font-bold text-bone whitespace-nowrap"
                      >
                        <img src="/icone/image/academie.png" alt="" className="w-7 h-7" />
                        Projet Académique
                      </motion.div>
                    )}
                    {project.isProfessional && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-gold to-crimson rounded-none text-xs font-bold text-bone whitespace-nowrap"
                      >
                        <img src="/icone/image/entreprise.png" alt="" className="w-7 h-7" />
                        Projet Professionnel
                      </motion.div>
                    )}
                    {project.mascotteUrl && (
                      <motion.img
                        src={project.mascotteUrl}
                        alt={`Mascotte ${project.title}`}
                        className="w-20 h-20 object-contain rounded-lg flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-bone mb-2 font-cinzel">
                    {project.title}
                  </h3>
                  {project.saeDetails && (
                    <p className="text-xs text-gold italic">{project.saeDetails}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-bone text-sm leading-relaxed mb-8 flex-1 text-justify">
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
                      className="px-3 py-1 text-xs font-semibold rounded-none bg-crimson/30 text-gold border border-crimson/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.span
                  whileHover={{ x: 8 }}
                  className="text-gold font-semibold text-sm flex items-center gap-2 group/link cursor-pointer"
                >
                  En savoir plus
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">
                    →
                  </span>
                </motion.span>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

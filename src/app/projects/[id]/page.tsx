'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import ProjectGallery from '@/components/ProjectGallery';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-bone mb-4 font-cinzel">Projet non trouvé</h1>
          <button
            onClick={() => router.push('/#projects')}
            className="px-6 py-3 bg-gold text-black font-semibold rounded-none hover:bg-crimson transition-colors"
          >
            Retour aux projets
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full bg-black min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="relative mb-8">
            <div
              className={`absolute inset-0 rounded-2xl opacity-20 blur-3xl bg-gradient-to-r ${project.color}`}
            ></div>
            <div className="relative glass rounded-none p-8 md:p-12 border border-border-dark">
              <div className="flex items-start justify-between gap-6 mb-6">
                <div className="flex-1">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-bone font-cinzel">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gold font-semibold mb-4">
                    {project.fullDescription}
                  </p>
                </div>
                {/* Mascotte du projet */}
                {project.mascotteUrl && (
                  <motion.img
                    src={project.mascotteUrl}
                    alt={`Mascotte ${project.title}`}
                    className="w-40 h-40 md:w-56 md:h-56 object-contain flex-shrink-0 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Galerie media */}
        <motion.div variants={itemVariants} className="mb-16">
          <ProjectGallery project={project} />
        </motion.div>

        {/* Description détaillée */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-4xl font-bold text-gold mb-8 font-cinzel">À propos du projet</h2>
          <div className="space-y-6">
            {project.longDescription.map((paragraph, i) => (
              <p key={i} className="text-lg text-bone leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Grille 3 colonnes */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Fonctionnalités */}
          <div className="glass rounded-none p-8 border border-border-dark">
            <h3 className="text-2xl font-bold text-gold mb-6 font-cinzel">Fonctionnalités</h3>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-bone">
                  <span className="text-gold font-bold mt-1">•</span>
                  <span className="text-left">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Défis */}
          <div className="glass rounded-none p-8 border border-border-dark">
            <h3 className="text-2xl font-bold text-crimson mb-6 font-cinzel">Défis</h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-bone">
                  <span className="text-crimson font-bold mt-1">•</span>
                  <span className="text-left">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Résultats */}
          <div className="glass rounded-none p-8 border border-border-dark">
            <h3 className="text-2xl font-bold text-gold mb-6 font-cinzel">Résultats</h3>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3 text-bone">
                  <span className="text-gold font-bold mt-1">✓</span>
                  <span className="text-left">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Informations projet */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Stack technique */}
          <div className="glass rounded-none p-8 border border-border-dark">
            <h3 className="text-2xl font-bold text-gold mb-6 font-cinzel">Stack Technique</h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gold/20 text-gold border border-gold/50 rounded-none font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="glass rounded-none p-8 border border-border-dark">
            <h3 className="text-2xl font-bold text-gold mb-6 font-cinzel">Informations</h3>
            <div className="space-y-4 text-bone">
              {project.date && (
                <div>
                  <p className="text-gold font-semibold">Date</p>
                  <p>{project.date}</p>
                </div>
              )}
              {project.duration && (
                <div>
                  <p className="text-gold font-semibold">Durée</p>
                  <p>{project.duration}</p>
                </div>
              )}
              {project.team && (
                <div className="text-left">
                  <p className="text-gold font-semibold">Équipe</p>
                  <p className="whitespace-pre-wrap">{project.team}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bouton retour */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <button
            onClick={() => router.push('/#projects')}
            className="px-8 py-4 bg-gold text-black font-semibold rounded-none hover:bg-crimson hover:text-bone transition-all"
          >
            Voir tous les projets
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}

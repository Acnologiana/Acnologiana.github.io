'use client';

import { motion } from 'framer-motion';
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoLinkedin,
  IoLogoGithub,
  IoSchool,
  IoBriefcase,
} from 'react-icons/io5';
import { SiDart, SiFlutter, SiMysql, SiLinux, SiGit, SiDocker } from 'react-icons/si';

interface SkillPillar {
  pillar: string;
  emoji: string;
  description: string;
  items: {
    name: string;
    icon: React.ReactNode;
    color: string;
    proficiency?: 'Expert' | 'Avancé' | 'Initié';
  }[];
}

const skillPillars: SkillPillar[] = [
  {
    pillar: 'Développement & Architecture',
    emoji: '🏗️',
    description: 'Conception d\'applications robustes et scalables',
    items: [
      { name: 'Java', icon: <span>☕</span>, color: 'text-orange-500', proficiency: 'Expert' },
      { name: 'Kotlin', icon: <span>K</span>, color: 'text-purple-600', proficiency: 'Avancé' },
      { name: 'Dart', icon: <SiDart />, color: 'text-blue-500', proficiency: 'Expert' },
      { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400', proficiency: 'Avancé' },
      { name: 'React', icon: <IoLogoReact />, color: 'text-blue-400', proficiency: 'Avancé' },
      { name: 'Patterns MVVM/Clean Code', icon: <span>✨</span>, color: 'text-indigo-400' },
    ],
  },
  {
    pillar: 'Qualité & Validation (V)',
    emoji: '✅',
    description: 'Tests, optimisation et assurance qualité',
    items: [
      { name: 'JUnit', icon: <span>🧪</span>, color: 'text-cyan-400' },
      { name: 'Tests unitaires', icon: <span>🔬</span>, color: 'text-cyan-400', proficiency: 'Avancé' },
      { name: 'Tests d\'intégration', icon: <span>🔗</span>, color: 'text-cyan-400', proficiency: 'Avancé' },
      { name: 'Code Robustness', icon: <span>💪</span>, color: 'text-cyan-400' },
      { name: 'Debugging', icon: <span>🐛</span>, color: 'text-cyan-400', proficiency: 'Expert' },
    ],
  },
  {
    pillar: 'Environnement & DevOps',
    emoji: '⚙️',
    description: 'Infrastructure, déploiement et gestion de versions',
    items: [
      { name: 'Git/GitHub', icon: <IoLogoGithub />, color: 'text-gray-400', proficiency: 'Expert' },
      { name: 'Linux', icon: <SiLinux />, color: 'text-gray-300', proficiency: 'Avancé' },
      { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500', proficiency: 'Initié' },
      { name: 'CI/CD', icon: <span>🚀</span>, color: 'text-orange-500', proficiency: 'Initié' },
      { name: 'Administration système', icon: <span>🖥️</span>, color: 'text-gray-300' },
    ],
  },
  {
    pillar: 'Innovation & Données',
    emoji: '🤖',
    description: 'IA, base de données et gestion de données',
    items: [
      { name: 'SQL/MySQL', icon: <SiMysql />, color: 'text-blue-600', proficiency: 'Avancé' },
      { name: 'IA & Machine Learning', icon: <span>🧠</span>, color: 'text-purple-500', proficiency: 'Initié' },
      { name: 'IoT & Capteurs', icon: <span>📡</span>, color: 'text-green-500', proficiency: 'Initié' },
      { name: 'Manipulation données', icon: <span>📊</span>, color: 'text-green-500', proficiency: 'Avancé' },
      { name: 'API REST', icon: <span>🔌</span>, color: 'text-indigo-400', proficiency: 'Avancé' },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const proficiencyColor = {
    Expert: 'bg-green-500/20 text-green-300 border-green-500/50',
    Avancé: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
    Initié: 'bg-gray-500/20 text-gray-300 border-gray-500/50',
  };

  return (
    <section id="skills" className="w-full px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
        >
          Compétences Techniques
        </motion.h2>

        <motion.p
          variants={pillarVariants}
          className="text-center text-gray-400 mb-16 text-lg"
        >
          Organisées par piliers d'ingénierie pour une vision holistique des savoir-faire
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skillPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={pillarVariants}
              className="glass rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors overflow-hidden group"
            >
              {/* Header with emoji */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {pillar.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-400 group-hover:text-purple-400 transition-colors">
                    {pillar.pillar}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{pillar.description}</p>
                </div>
              </div>

              {/* Skills grid */}
              <div className="space-y-3">
                {pillar.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-indigo-500/5 hover:bg-indigo-500/15 transition-all border border-indigo-500/20 hover:border-indigo-500/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                      <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                    </div>

                    {skill.proficiency && (
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${
                          proficiencyColor[skill.proficiency]
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

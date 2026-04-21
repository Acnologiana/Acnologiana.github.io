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
import {
  Hammer,
  Sparkles,
  CheckCircle2,
  Beaker,
  Microscope,
  Link2,
  Zap,
  Bug,
  Brain,
  Radio,
  BarChart3,
  Plug,
  ArrowUp,
  Monitor,
  Cog,
} from 'lucide-react';

interface SkillPillar {
  pillar: string;
  emoji: React.ReactNode;
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
    emoji: <Hammer className="w-6 h-6" />,
    description: 'Conception d\'applications robustes et scalables',
    items: [
      { name: 'Java', icon: <span className="font-bold">J</span>, color: 'text-orange-500', proficiency: 'Expert' },
      { name: 'Kotlin', icon: <span className="font-bold">K</span>, color: 'text-purple-600', proficiency: 'Avancé' },
      { name: 'Dart', icon: <SiDart />, color: 'text-gold', proficiency: 'Expert' },
      { name: 'Flutter', icon: <SiFlutter />, color: 'text-gold', proficiency: 'Avancé' },
      { name: 'React', icon: <IoLogoReact />, color: 'text-gold', proficiency: 'Avancé' },
      { name: 'Patterns MVVM/Clean Code', icon: <Sparkles />, color: 'text-gold' },
    ],
  },
  {
    pillar: 'Qualité & Validation (V)',
    emoji: <CheckCircle2 className="w-6 h-6" />,
    description: 'Tests, optimisation et assurance qualité',
    items: [
      { name: 'JUnit', icon: <Beaker />, color: 'text-gold' },
      { name: 'Tests unitaires', icon: <Microscope />, color: 'text-gold', proficiency: 'Avancé' },
      { name: 'Tests d\'intégration', icon: <Link2 />, color: 'text-gold', proficiency: 'Avancé' },
      { name: 'Code Robustness', icon: <Zap />, color: 'text-gold' },
      { name: 'Debugging', icon: <Bug />, color: 'text-gold', proficiency: 'Expert' },
    ],
  },
  {
    pillar: 'Environnement & DevOps',
    emoji: <Cog className="w-6 h-6" />,
    description: 'Infrastructure, déploiement et gestion de versions',
    items: [
      { name: 'Git/GitHub', icon: <IoLogoGithub />, color: 'text-gold', proficiency: 'Expert' },
      { name: 'Linux', icon: <SiLinux />, color: 'text-bone', proficiency: 'Avancé' },
      { name: 'Docker', icon: <SiDocker />, color: 'text-gold', proficiency: 'Initié' },
      { name: 'CI/CD', icon: <ArrowUp />, color: 'text-crimson', proficiency: 'Initié' },
      { name: 'Administration système', icon: <Monitor />, color: 'text-bone' },
    ],
  },
  {
    pillar: 'Innovation & Données',
    emoji: <Brain className="w-6 h-6" />,
    description: 'IA, base de données et gestion de données',
    items: [
      { name: 'SQL/MySQL', icon: <SiMysql />, color: 'text-gold', proficiency: 'Avancé' },
      { name: 'IA & Machine Learning', icon: <Brain />, color: 'text-gold', proficiency: 'Initié' },
      { name: 'IoT & Capteurs', icon: <Radio />, color: 'text-gold', proficiency: 'Initié' },
      { name: 'Manipulation données', icon: <BarChart3 />, color: 'text-gold', proficiency: 'Avancé' },
      { name: 'API REST', icon: <Plug />, color: 'text-gold', proficiency: 'Avancé' },
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
    Expert: 'bg-gold/20 text-gold border-gold/50',
    Avancé: 'bg-crimson/20 text-crimson border-crimson/50',
    Initié: 'bg-ash/20 text-ash border-ash/50',
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
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text font-cinzel"
        >
          Compétences Techniques
        </motion.h2>

        <motion.p
          variants={pillarVariants}
          className="text-center text-ash mb-16 text-lg"
        >
          Organisées par piliers d'ingénierie pour une vision holistique des savoir-faire
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skillPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={pillarVariants}
              className="glass rounded-none p-8 border border-border-dark hover:border-crimson transition-colors overflow-hidden group"
            >
              {/* Header with emoji */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {pillar.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold group-hover:text-crimson transition-colors font-cinzel">
                    {pillar.pillar}
                  </h3>
                  <p className="text-ash text-sm mt-1">{pillar.description}</p>
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
                    className="flex items-center justify-between p-3 rounded-none bg-crimson-dark/10 hover:bg-crimson-dark/20 transition-all border border-border-dark hover:border-crimson"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                      <span className="text-bone font-medium text-sm">{skill.name}</span>
                    </div>

                    {skill.proficiency && (
                      <span
                        className={`text-xs px-2.5 py-1 rounded-none border font-semibold ${
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

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
import { SiDart, SiFlutter, SiMysql, SiLinux } from 'react-icons/si';

interface Skill {
  category: string;
  items: {
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

const skillsData: Skill[] = [
  {
    category: 'Langages',
    items: [
      { name: 'Java', icon: <span className="text-orange-500">☕</span>, color: 'text-orange-500' },
      { name: 'Dart', icon: <SiDart />, color: 'text-blue-500' },
      { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-yellow-500' },
      { name: 'Kotlin', icon: <span className="text-purple-600">K</span>, color: 'text-purple-600' },
      { name: 'SQL', icon: <SiMysql />, color: 'text-blue-600' },
    ],
  },
  {
    category: 'Frontend & Mobile',
    items: [
      { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400' },
      { name: 'React', icon: <IoLogoReact />, color: 'text-blue-400' },
      { name: 'Android', icon: <span className="text-green-500">A</span>, color: 'text-green-500' },
      { name: 'HTML/CSS', icon: <span className="text-red-500">📱</span>, color: 'text-red-500' },
    ],
  },
  {
    category: 'Outils & Environnements',
    items: [
      { name: 'GitHub', icon: <IoLogoGithub />, color: 'text-gray-400' },
      { name: 'Linux', icon: <SiLinux />, color: 'text-gray-300' },
      { name: 'Qt Creator', icon: <span className="text-green-600">⚙️</span>, color: 'text-green-600' },
      { name: 'OBS Studio', icon: <span className="text-gray-400">🎥</span>, color: 'text-gray-400' },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
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
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="glass rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-8 text-center">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors cursor-default"
                  >
                    <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-gray-200 font-medium">{skill.name}</span>
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

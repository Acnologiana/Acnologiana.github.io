'use client';

import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-transparent to-indigo-500/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          À Propos & Vision
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-8 md:p-12 mb-8 space-y-6 border border-indigo-500/20"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Je suis un développeur passionné par la création de solutions robustes et intelligentes. Mon approche va au-delà du simple "faire fonctionner" — je conçois des architectures durables, je comprends les besoins réels et j'intègre la responsabilité technique dans chaque projet.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Actuellement en 3e année de <span className="text-indigo-400 font-semibold">BUT Informatique</span> à l'IUT Lyon 1, je poursuis mes études en alternance chez <span className="text-purple-400 font-semibold">RPC</span>, où je développe des applications mobiles innovantes. Mon objectif : intégrer <span className="text-indigo-400 font-semibold">CPE Lyon</span> pour me spécialiser en <span className="text-purple-400 font-semibold">IA et Robotique Autonome</span>.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Je crois que la technologie doit être utilisée de manière réfléchie. En apprentissage constant, j'explore comment les systèmes intelligents peuvent faire le pont entre le numérique et le monde réel — qu'il s'agisse d'améliorer la vie quotidienne ou de rendre la technologie plus accessible.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "Comprendre les besoins", icon: "🎯" },
            { title: "Concevoir l'architecture", icon: "🏗️" },
            { title: "Coder avec responsabilité", icon: "⚙️" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-6 text-center border border-indigo-500/20 hover:border-indigo-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-400">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

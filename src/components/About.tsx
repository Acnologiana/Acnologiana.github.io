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
    <section className="w-full px-4 sm:px-6 sm:py-12 md:py-20 bg-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text font-cinzel"
        >
          À propos de moi
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="glass rounded-none p-8 md:p-12 mb-8 space-y-6 border border-border-dark"
        >
          <p className="text-lg text-bone leading-relaxed text-justify">
            Je suis développeur, actuellement en 3<sup>e</sup> année de BUT Informatique à l'IUT Lyon 1. Admis à <span className="text-gold font-semibold">CPE Lyon</span> pour mon cycle ingénieur en <span className="text-gold font-semibold">Informatique et Réseaux de Communication</span>, je suis à la recherche d'une <span className="text-gold font-semibold">alternance de 3 ans</span> pour poursuivre ma formation en continu.
          </p>

          <p className="text-lg text-bone leading-relaxed text-justify">
            Au départ, je me voyais surtout comme quelqu'un qui code. Mais au fil de mes projets et de mon alternance chez <span className="text-gold font-semibold">RPC</span>, j'ai compris que ce qui m'intéresse vraiment, c'est tout ce qu'il y a autour : comprendre un besoin concret, faire les bons choix techniques et construire quelque chose de fiable.
          </p>

          <p className="text-lg text-bone leading-relaxed text-justify">
            Travailler sur des applications utilisées au quotidien m'a appris à sortir de la théorie et à prendre en compte de vraies contraintes : utilisateurs, stabilité, organisation du travail.
          </p>

          <p className="text-lg text-bone leading-relaxed text-justify">
            Je souhaite évoluer vers des domaines comme l'intelligence artificielle et la robotique. J'ai envie d'aller plus loin que le développement pur, et de participer à la conception de systèmes capables d'interagir avec le réel.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "De la théorie à la pratique", icon: <img src="/icone/image/propo1.png" alt="Théorie à la pratique" className="w-16 h-16" /> },
            { title: "Faire les bons choix techniques", icon: <img src="/icone/image/propo2.png" alt="Bons choix techniques" className="w-16 h-16" /> },
            { title: "Construire durablement", icon: <img src="/icone/image/propo3.png" alt="Construire durablement" className="w-16 h-16" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="glass rounded-none p-6 text-center border border-border-dark hover:border-crimson transition-colors"
            >
              <div className="text-4xl mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gold font-cinzel">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

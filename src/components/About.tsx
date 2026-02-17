"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Globe, Award } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="glow-orb glow-orb-3 opacity-[0.05]" />

      <div className="max-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">À propos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Un profil <span className="gradient-text">hybride unique</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ingénieur informatique de formation, entrepreneur par passion.
            J&apos;allie expertise technique et vision business pour créer des
            solutions digitales à forte valeur ajoutée.
          </p>
        </motion.div>

        {/* Bio card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="glass-card p-8 md:p-10 mb-12"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-dark-300 text-base md:text-lg leading-relaxed mb-4">
              Diplômé de l&apos;<strong className="text-white">ESIEE Paris</strong> en ingénierie
              informatique et titulaire d&apos;un{" "}
              <strong className="text-white">MSc en Business Strategy</strong> de
              Heriot-Watt University (Malaisie), j&apos;ai développé une double compétence
              rare alliant maîtrise technique et compréhension stratégique des enjeux business.
            </p>
            <p className="text-dark-300 text-base md:text-lg leading-relaxed mb-4">
              Mon parcours chez <strong className="text-white">BNP Paribas</strong> m&apos;a
              permis d&apos;évoluer du développement monitoring (PHP/Python) à la coordination
              de projets en tant que Lead Tech, en passant par l&apos;automatisation DevOps.
              Cette progression témoigne de ma capacité d&apos;adaptation et de mon leadership naturel.
            </p>
            <p className="text-dark-300 text-base md:text-lg leading-relaxed">
              En parallèle, mon activité entrepreneuriale en e-commerce depuis 2019 m&apos;a
              confronté aux réalités du marché : acquisition client, conversion, SEO, et
              optimisation continue. Mes voyages au{" "}
              <strong className="text-white">Laos et au Cambodge</strong> comme professeur
              d&apos;anglais ont renforcé mon adaptabilité culturelle et ma capacité à communiquer
              dans des contextes variés.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: GraduationCap,
              title: "Formation d'excellence",
              desc: "Ingénieur ESIEE Paris + MSc Heriot-Watt University. Double diplôme international tech & business.",
              color: "text-blue-400",
              bg: "bg-blue-500/10",
            },
            {
              icon: Briefcase,
              title: "Expérience corporate",
              desc: "3 ans chez BNP Paribas — du développement au Lead Tech. Pilotage d'applications critiques en environnement exigeant.",
              color: "text-emerald-400",
              bg: "bg-emerald-500/10",
            },
            {
              icon: Globe,
              title: "Entrepreneur digital",
              desc: "15+ projets e-commerce et web lancés en freelance. Marketplaces, boutiques, sites vitrines et tunnels de vente.",
              color: "text-purple-400",
              bg: "bg-purple-500/10",
            },
            {
              icon: Award,
              title: "Ouverture internationale",
              desc: "Expérience en Malaisie, Laos, Cambodge. Anglais courant (TOEIC 890). Adaptabilité culturelle éprouvée.",
              color: "text-amber-400",
              bg: "bg-amber-500/10",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 2}
              className="glass-card-hover p-6 md:p-8"
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-4`}
              >
                <card.icon className={card.color} size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-dark-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

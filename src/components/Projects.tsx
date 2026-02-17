"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Rocket } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="glow-orb glow-orb-1 opacity-[0.05]" />

      <div className="max-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Projets</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Réalisations <span className="gradient-text">concrètes</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Une sélection de projets e-commerce et web que j&apos;ai conçus, développés
            et optimisés de A à Z.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Project header with gradient */}
              <div
                className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-center">
                  <span className="text-5xl mb-2 block">{project.icon}</span>
                  <h3 className="text-white font-bold text-2xl">{project.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{project.tagline}</p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Project content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Brief context */}
                <p className="text-dark-400 text-sm leading-relaxed mb-4">
                  {project.context}
                </p>

                {/* Expand button */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center gap-2 text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors"
                >
                  {expandedProject === project.id ? (
                    <>
                      Réduire <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Voir les détails <ChevronDown size={16} />
                    </>
                  )}
                </button>

                {/* Expanded details */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-dark-700/50 space-y-4">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">
                            Mon rôle
                          </h4>
                          <p className="text-dark-400 text-sm leading-relaxed">
                            {project.role}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">
                            Résultats
                          </h4>
                          <p className="text-dark-400 text-sm leading-relaxed">
                            {project.results}
                          </p>
                        </div>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors"
                        >
                          Visiter {project.name}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass-card p-8 md:p-10 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto mb-6">
            <Rocket className="text-primary-400" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Autres réalisations
          </h3>
          <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed mb-6">
            Au-delà de ces projets phares, j&apos;ai conçu et lancé{" "}
            <strong className="text-white">+15 projets supplémentaires</strong> incluant
            des boutiques print-on-demand, des plateformes de coaching en ligne, des
            infoproduits digitaux, des landing pages internationales multi-langues et des
            tunnels de vente automatisés. Chaque projet a été une opportunité
            d&apos;affiner mes compétences techniques et ma compréhension du marché.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Print-on-Demand",
              "Coaching en ligne",
              "Infoproduits",
              "Landing pages",
              "Tunnels de vente",
              "SaaS",
              "Dropshipping",
              "Formations digitales",
            ].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";
import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Parcours</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Expériences <span className="gradient-text">professionnelles</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Un parcours progressif du développement au leadership technique, enrichi par
            l&apos;entrepreneuriat.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-[calc(50%-2rem)] glass-card-hover p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <Building2 className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-primary-400 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-dark-400 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-dark-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 flex-shrink-0 relative z-10" />

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

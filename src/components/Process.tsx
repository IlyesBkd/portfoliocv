"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-dark-900/30">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Processus</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Ma méthode de <span className="gradient-text">travail</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Une approche structurée et éprouvée, de l&apos;analyse initiale au lancement,
            pour garantir des résultats concrets.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="glass-card-hover p-6 text-center relative group"
              >
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <span className="text-primary-400 font-bold text-lg">
                    {step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-3xl mb-3">{step.icon}</div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-dark-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

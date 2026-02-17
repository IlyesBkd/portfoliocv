"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

import {
  Code2,
  Server,
  Search,
  Workflow,
  Users,
  Languages,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Webmastering & CMS": Code2,
  "Architecture Tech": Server,
  "SEO & Analytics": Search,
  Méthodologies: Workflow,
  "Soft Skills": Users,
  Langues: Languages,
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  "Webmastering & CMS": {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  "Architecture Tech": {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  "SEO & Analytics": {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  Méthodologies: {
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  "Soft Skills": {
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  Langues: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-dark-900/30">
      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Compétences</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Stack technique <span className="gradient-text">complète</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Un éventail de compétences forgé par l&apos;ingénierie, l&apos;entrepreneuriat
            et l&apos;expérience en entreprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = iconMap[category] || Code2;
            const colors = colorMap[category] || colorMap["Webmastering & CMS"];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon size={20} className={colors.text} />
                  </div>
                  <h3 className="text-white font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-lg ${colors.bg} ${colors.text} border ${colors.border} font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

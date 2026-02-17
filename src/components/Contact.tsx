"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      color: "text-primary-400",
      bg: "bg-primary-500/10",
      hover: "group-hover:bg-primary-500/20",
      textHover: "group-hover:text-primary-400",
    },
    {
      href: `tel:${personalInfo.phone}`,
      icon: Phone,
      label: "Téléphone",
      value: personalInfo.phone,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      hover: "group-hover:bg-emerald-500/20",
      textHover: "group-hover:text-emerald-400",
    },
    {
      href: personalInfo.website,
      icon: ExternalLink,
      label: "Site personnel",
      value: "ilyesbelkadi.com",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      hover: "group-hover:bg-purple-500/20",
      textHover: "group-hover:text-purple-400",
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="glow-orb glow-orb-2 opacity-[0.05]" />

      <div className="max-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Un projet web, un besoin e-commerce ou une opportunité professionnelle ?
            N&apos;hésitez pas à me contacter. Je suis ouvert à toute discussion.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6">
              Mes coordonnées
            </h3>

            <div className="space-y-5">
              {/* Location (non-clickable) */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-400" size={20} />
                </div>
                <div>
                  <p className="text-dark-400 text-sm">Localisation</p>
                  <p className="text-white font-medium">{personalInfo.location}</p>
                </div>
              </div>

              {/* Clickable contacts */}
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} ${item.hover} flex items-center justify-center flex-shrink-0 transition-colors`}
                  >
                    <item.icon className={item.color} size={20} />
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm">{item.label}</p>
                    <p className={`text-white font-medium ${item.textHover} transition-colors`}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Availability card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white font-semibold">Disponible immédiatement</span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              Je suis actuellement à la recherche de nouvelles opportunités en
              développement web, e-commerce ou ingénierie informatique. Ouvert aux CDI,
              freelance et missions de conseil.
            </p>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-2"
          >
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              <Mail size={18} />
              M&apos;envoyer un email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

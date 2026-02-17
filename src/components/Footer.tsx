import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-dark-800/50 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
              IB
            </div>
            <span className="text-white font-semibold">
              Ilyes<span className="text-primary-400">.dev</span>
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { label: "Accueil", href: "#hero" },
              { label: "À propos", href: "#about" },
              { label: "Compétences", href: "#skills" },
              { label: "Projets", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-dark-500 text-sm">
            <span>© {currentYear} Ilyes Belkadi</span>
            <Heart size={12} className="text-primary-500 mx-1" />
            <span>Tous droits réservés</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const personalInfo = {
  name: "Ilyes Belkadi",
  title: "Webmaster | Entrepreneur E-commerce | Ingénieur Informatique",
  location: "77420 Champs-sur-Marne, Île-de-France",
  email: "ilyes.belkadi@edu.esiee.fr",
  phone: "+33 6 37 17 50 04",
  website: "https://ilyesbelkadi.com",
  birthDate: "04/11/2001",
};

export const education = [
  {
    degree: "Diplôme d'Ingénieur Informatique",
    school: "ESIEE Paris",
    location: "Cité Descartes, Champs-sur-Marne",
    period: "2019 – 2024",
    description:
      "Formation d'excellence en ingénierie informatique avec spécialisation en développement logiciel, architecture système et gestion de projets IT.",
  },
  {
    degree: "MSc Business Strategy, Leadership & Change",
    school: "Heriot-Watt University",
    location: "Malaisie",
    period: "2023 – 2024",
    description:
      "Double diplôme international alliant stratégie business, leadership et management du changement. Une vision 360° tech & business.",
  },
];

export const experiences = [
  {
    role: "Freelance Webmaster / Entrepreneur E-commerce",
    company: "Indépendant",
    period: "2019 – Présent",
    description:
      "Création de sites WordPress sur-mesure, templates PHP/JS personnalisés, intégration Elementor Pro. Optimisation Core Web Vitals, SEO technique avancé, configuration GA4/GTM, sécurisation des sites. Lancement et gestion de multiples boutiques e-commerce.",
    tags: ["WordPress", "PHP", "JavaScript", "Shopify", "SEO", "GA4"],
  },
  {
    role: "Lead Tech – Coordination de Projet",
    company: "BNP Paribas",
    period: "2023 – 2024",
    description:
      "Développement Fullstack (Java Spring Boot, Angular, JavaScript) et pilotage technique d'applications web critiques. Coordination d'équipe et prise de décisions architecturales stratégiques.",
    tags: ["Java Spring Boot", "Angular", "JavaScript", "Leadership"],
  },
  {
    role: "Ingénieur Automatisation",
    company: "BNP Paribas",
    period: "2022 – 2023",
    description:
      "Mise en place de pipelines DevOps (Ansible, Docker), automatisation des déploiements et garantie de la haute disponibilité des systèmes critiques.",
    tags: ["Ansible", "Docker", "DevOps", "CI/CD"],
  },
  {
    role: "Développeur PHP/Python Monitoring",
    company: "BNP Paribas",
    period: "2021 – 2022",
    description:
      "Développement d'outils de monitoring, conception d'architectures de données et traitement de flux complexes pour le suivi opérationnel.",
    tags: ["PHP", "Python", "Monitoring", "Architecture Données"],
  },
];

export const skills = {
  "Webmastering & CMS": [
    "WordPress",
    "PHP",
    "JavaScript",
    "Elementor Pro",
    "HTML5/CSS3",
    "SQL",
    "Shopify",
  ],
  "Architecture Tech": [
    "Java Spring Boot",
    "Angular",
    "React / Next.js",
    "Python",
    "DevOps (Ansible, Docker)",
    "API REST",
    "Git",
  ],
  "SEO & Analytics": [
    "Google Analytics 4",
    "Search Console",
    "Google Tag Manager",
    "SEO Technique",
    "Core Web Vitals",
  ],
  Méthodologies: [
    "Agile / Scrum",
    "Kanban",
    "Design Patterns",
    "SDLC",
    "Microservices",
    "Jira",
  ],
  "Soft Skills": [
    "Leadership technique",
    "Communication",
    "Négociation",
    "Adaptabilité",
    "Esprit entrepreneurial",
  ],
  Langues: ["Français (bilingue)", "Anglais courant (TOEIC 890)"],
};

export interface Project {
  id: string;
  name: string;
  url: string;
  tagline: string;
  context: string;
  role: string;
  technologies: string[];
  results: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "spotyz",
    name: "Spotyz",
    url: "https://spotyz.com",
    tagline: "Marketplace de services streaming",
    context:
      "Plateforme marketplace dédiée aux services de promotion musicale (streams Spotify, vues YouTube). Un projet ambitieux combinant e-commerce et industrie musicale pour répondre à la demande croissante des artistes indépendants.",
    role: "Développement complet de la plateforme, intégration des systèmes de paiement (Stripe), mise en place du tunnel de vente, optimisation SEO et stratégie d'acquisition.",
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Stripe",
      "Elementor Pro",
      "GA4",
      "SEO",
    ],
    results:
      "Plateforme fonctionnelle avec parcours d'achat optimisé, UX fluide et processus de commande automatisé. Interface intuitive permettant aux artistes de commander facilement des services de promotion.",
    gradient: "from-green-500 to-emerald-600",
    icon: "🎵",
  },
  {
    id: "afrobirthday",
    name: "AfroBirthday",
    url: "https://afrobirthday.com",
    tagline: "E-commerce portraits afro personnalisés",
    context:
      "Boutique e-commerce de niche proposant des portraits personnalisés célébrant la culture afro. Un concept original ciblant un marché sous-exploité avec une forte dimension émotionnelle et cadeau.",
    role: "Conception et développement du site e-commerce, création du configurateur de produit personnalisé, intégration Shopify/Stripe, optimisation du tunnel de conversion.",
    technologies: [
      "Shopify",
      "JavaScript",
      "HTML5/CSS3",
      "Stripe",
      "GA4",
      "SEO",
    ],
    results:
      "Site e-commerce performant avec un parcours client simplifié, personnalisation produit intuitive et processus de livraison digitale automatisé.",
    gradient: "from-amber-500 to-orange-600",
    icon: "🎨",
  },
  {
    id: "cartoonova",
    name: "CartooNova",
    url: "https://cartoonova.com",
    tagline: "Service photos → portraits cartoon/anime",
    context:
      "Service en ligne de transformation de photos en portraits style cartoon et anime. Positionnement premium avec un branding fort pour se différencier sur un marché concurrentiel.",
    role: "Développement complet du site vitrine et e-commerce, intégration du système de commande personnalisé, mise en place du workflow de production et livraison digitale.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "PHP",
      "JavaScript",
      "WooCommerce",
      "Stripe",
    ],
    results:
      "Expérience utilisateur fluide du upload photo à la livraison du portrait. Design attractif, conversion optimisée et processus de commande clair.",
    gradient: "from-purple-500 to-pink-600",
    icon: "✨",
  },
  {
    id: "simpsonme",
    name: "SimpsonMe",
    url: "https://simpsonme.com",
    tagline: "Portraits style Simpson personnalisés",
    context:
      "E-commerce de portraits personnalisés dans le style iconique des Simpson. Un concept viral exploitant la popularité de la franchise pour proposer des cadeaux uniques et mémorables.",
    role: "Création complète du site, développement du configurateur de portrait, intégration des paiements, optimisation SEO internationale et stratégie de contenu.",
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Elementor Pro",
      "Stripe",
      "GA4",
      "GTM",
    ],
    results:
      "Site performant avec des Core Web Vitals optimisés, tunnel de vente efficace et UX engageante. Référencement naturel solide sur les requêtes ciblées.",
    gradient: "from-yellow-400 to-amber-500",
    icon: "⭐",
  },
  {
    id: "eterngift",
    name: "EternGift",
    url: "https://eterngift.com",
    tagline: "Cadeaux personnalisés e-commerce",
    context:
      "Plateforme e-commerce de cadeaux personnalisés haut de gamme. Positionnement sur le marché émotionnel du cadeau unique avec une expérience d'achat premium.",
    role: "Développement de la boutique en ligne, intégration multi-produits avec personnalisation, mise en place du système de paiement sécurisé et optimisation de la conversion.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Stripe",
      "SEO",
    ],
    results:
      "Boutique e-commerce complète avec catalogue produits varié, personnalisation avancée et parcours d'achat optimisé pour maximiser le taux de conversion.",
    gradient: "from-rose-500 to-red-600",
    icon: "🎁",
  },
  {
    id: "selamatconsult",
    name: "Selamat Consult",
    url: "https://selamatconsult.com",
    tagline: "Site vitrine conseil & consulting",
    context:
      "Site vitrine professionnel pour un cabinet de conseil et consulting. Objectif : crédibiliser l'image de marque et générer des leads qualifiés via une présence web soignée.",
    role: "Conception UX/UI, développement du site vitrine responsive, optimisation SEO local et international, mise en place de formulaires de contact et intégration CRM.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "PHP",
      "JavaScript",
      "HTML5/CSS3",
      "SEO",
    ],
    results:
      "Site professionnel au design épuré, temps de chargement optimisé, formulaire de contact performant et positionnement SEO efficace pour la génération de leads.",
    gradient: "from-blue-500 to-cyan-600",
    icon: "💼",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Analyse & Stratégie",
    description:
      "Audit approfondi des besoins, analyse concurrentielle, définition des objectifs business et élaboration de la stratégie digitale.",
    icon: "🔍",
  },
  {
    step: 2,
    title: "Conception & Architecture",
    description:
      "Wireframes, maquettes UX/UI, choix technologiques et architecture technique adaptée aux objectifs de performance.",
    icon: "📐",
  },
  {
    step: 3,
    title: "Développement & Intégration",
    description:
      "Développement sur-mesure, intégration CMS/e-commerce, configuration des systèmes de paiement et automatisations.",
    icon: "⚡",
  },
  {
    step: 4,
    title: "Optimisation & Tests",
    description:
      "Optimisation SEO technique, Core Web Vitals, tests cross-browser, configuration analytics (GA4/GTM) et sécurisation.",
    icon: "🎯",
  },
  {
    step: 5,
    title: "Lancement & Suivi",
    description:
      "Mise en production, monitoring des performances, ajustements post-lancement et accompagnement continu.",
    icon: "🚀",
  },
];

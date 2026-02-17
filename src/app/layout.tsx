import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilyes Belkadi — Webmaster | Entrepreneur E-commerce | Ingénieur Informatique",
  description:
    "Portfolio professionnel d'Ilyes Belkadi — Développeur Web, Entrepreneur E-commerce et Ingénieur Informatique. Spécialisé WordPress, Shopify, React, Java Spring Boot.",
  keywords: [
    "Ilyes Belkadi",
    "Développeur Web",
    "Webmaster",
    "E-commerce",
    "Ingénieur Informatique",
    "WordPress",
    "Shopify",
    "Portfolio",
  ],
  authors: [{ name: "Ilyes Belkadi" }],
  openGraph: {
    title: "Ilyes Belkadi — Portfolio",
    description: "Webmaster | Entrepreneur E-commerce | Ingénieur Informatique",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

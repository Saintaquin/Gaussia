import type { Metadata } from "next"
import HomeContent from "@/components/home-content"

export const metadata: Metadata = {
  title: "GAUSSIA | Agence Digitale Paris — Automatisation, Développement Web & Odoo",
  description:
    "Agence digitale à Paris spécialisée en automatisation des processus (n8n, Make), développement web sur-mesure (Next.js), applications métiers et intégration Odoo. Consultation gratuite.",
  alternates: {
    canonical: "https://gaussia.fr",
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gaussia.fr/#organization",
        "name": "GAUSSIA",
        "url": "https://gaussia.fr",
        "logo": "https://gaussia.fr/logo.png",
        "email": "contact@gaussia.fr",
        "telephone": "+33695467881",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Paris",
          "addressCountry": "FR"
        },
        "description": "Agence digitale à Paris spécialisée en automatisation, développement web sur-mesure, applications métiers et intégration Odoo & ERP.",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://gaussia.fr/#website",
        "url": "https://gaussia.fr",
        "name": "GAUSSIA",
        "publisher": { "@id": "https://gaussia.fr/#organization" }
      },
      {
        "@type": "Service",
        "name": "Automatisation Intelligente",
        "provider": { "@id": "https://gaussia.fr/#organization" },
        "description": "Automatisation des processus métiers avec n8n, Make, bots IA. Workflows automatisés, synchronisation de données multi-plateformes et optimisation des processus.",
        "serviceType": "Automatisation des processus"
      },
      {
        "@type": "Service",
        "name": "Développement Web Moderne",
        "provider": { "@id": "https://gaussia.fr/#organization" },
        "description": "Création de sites vitrines, e-commerce et applications web avec Next.js. Architecture headless, API-first, performance et SEO optimisés.",
        "serviceType": "Développement Web"
      },
      {
        "@type": "Service",
        "name": "Applications Sur-Mesure",
        "provider": { "@id": "https://gaussia.fr/#organization" },
        "description": "Développement d'outils métiers sur-mesure : SaaS, dashboards, applications mobiles & PWA, gestion de bases de données.",
        "serviceType": "Développement d'applications"
      },
      {
        "@type": "Service",
        "name": "Intégration Odoo & ERP",
        "provider": { "@id": "https://gaussia.fr/#organization" },
        "description": "Déploiement, configuration et personnalisation d'Odoo. Modules CRM, ventes, comptabilité, RH. Développement de modules sur-mesure et migration.",
        "serviceType": "Intégration ERP"
      },
      {
        "@type": "Service",
        "name": "Formation & Montée en Compétences",
        "provider": { "@id": "https://gaussia.fr/#organization" },
        "description": "Formation professionnelle sur l'IA Générative, Power BI et Google Looker Studio. Accompagnement pratique avec anonymisation des données et ateliers adaptés à votre métier.",
        "serviceType": "Formation professionnelle"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  )
}

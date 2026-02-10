import type { Metadata } from "next"
import ContactContent from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact — Demandez votre consultation gratuite",
  description:
    "Contactez GAUSSIA, agence digitale à Paris. Demandez un audit gratuit, un devis personnalisé ou réservez une consultation de 30 minutes. Automatisation, développement web, Odoo.",
  keywords: [
    "contact agence digitale",
    "devis automatisation",
    "consultation gratuite",
    "agence web Paris",
    "devis intégration Odoo",
    "contact développeur web",
  ],
  alternates: {
    canonical: "https://gaussia.fr/contact",
  },
  openGraph: {
    title: "Contact — Demandez votre consultation gratuite | GAUSSIA",
    description: "Contactez-nous pour une consultation gratuite. Agence digitale à Paris spécialisée en automatisation et développement web.",
    url: "https://gaussia.fr/contact",
  },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels types d'entreprises accompagnez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous accompagnons les PME, ETI et grandes entreprises dans tous les secteurs d'activité. Nos solutions s'adaptent à la taille et aux besoins spécifiques de chaque organisation, de la startup à la multinationale."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps dure un projet type ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La durée varie selon la complexité du projet. Un projet d'automatisation simple peut être livré en 2 à 4 semaines, tandis qu'une application sur-mesure complète peut nécessiter 8 à 16 semaines. Nous définissons un calendrier précis dès la phase d'audit."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous un audit gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous offrons une consultation initiale gratuite de 30 minutes pour évaluer vos besoins, comprendre vos défis actuels et vous proposer des premières pistes de solution. Réservez votre créneau directement sur Calendly."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles technologies utilisez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous utilisons les technologies les plus modernes et robustes : Next.js et React pour le web, n8n et Make pour l'automatisation, Odoo pour l'ERP, Python et Node.js pour le backend, ainsi que des solutions cloud (AWS, Vercel, Railway)."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se déroule un projet avec Gaussia ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Notre méthodologie en 3 étapes garantit le succès : 1) Audit & Analyse (1-2 semaines) pour comprendre vos besoins, 2) Conception & Développement agile (2-4 semaines) avec validation continue, 3) Déploiement & Accompagnement avec formation de vos équipes."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous de la maintenance après livraison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument. Nous proposons des contrats de maintenance et de support post-déploiement incluant les mises à jour, la surveillance, la correction de bugs et l'évolution de vos outils. Nous restons votre partenaire sur le long terme."
        }
      },
      {
        "@type": "Question",
        "name": "Pouvez-vous intégrer Odoo dans notre entreprise ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, l'intégration Odoo est l'une de nos expertises principales. Nous assurons le déploiement, la configuration, la personnalisation et le développement de modules sur-mesure. Nous gérons également la migration depuis vos outils existants."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le coût d'un projet d'automatisation ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le coût dépend de la complexité et du périmètre du projet. Nous proposons des devis personnalisés après la phase d'audit gratuit. Nos solutions d'automatisation offrent un retour sur investissement rapide, souvent en quelques semaines, grâce au temps gagné sur les tâches répétitives."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  )
}

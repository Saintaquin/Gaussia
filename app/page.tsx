"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NetworkAnimation } from "@/components/brain-animation"
import { ArrowRight, Code2, Brain, Boxes, CheckCircle2, TrendingUp, Users, Award, Zap, Shield, Clock, Check } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

const pricingOffers = [
  {
    title: "Développement de SaaS",
    subtitle: "Clé en mains",
    price: "À partir de 1 790€",
    description: "Votre solution SaaS complète et opérationnelle",
    features: [
      "Architecture cloud-native",
      "Interface utilisateur moderne",
      "Authentification sécurisée",
      "API REST documentée",
      "Déploiement automatisé"
    ],
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Automatisation de Process",
    subtitle: "Gagnez du temps",
    price: "À partir de 490€",
    description: "Automatisez vos tâches répétitives",
    features: [
      "Analyse de vos processus",
      "Scripts d'automatisation",
      "Intégration d'outils existants",
      "Documentation complète",
      "Formation de l'équipe"
    ],
    gradient: "from-violet-600 to-purple-600"
  },
  {
    title: "Tests & CI/CD",
    subtitle: "Postman & Automatisation",
    price: "À partir de 590€",
    description: "Industrialisation et chaînage de tests",
    features: [
      "Configuration Postman",
      "Tests automatisés",
      "Pipeline CI/CD",
      "Monitoring des tests",
      "Rapports détaillés"
    ],
    gradient: "from-orange-600 to-red-600"
  },
  {
    title: "Site Internet",
    subtitle: "Vitrine ou E-commerce",
    price: "À partir de 1 410€",
    description: "Site web moderne et performant",
    features: [
      "Design responsive",
      "SEO optimisé",
      "Performance élevée",
      "CMS intégré",
      "Hébergement inclus (1 an)"
    ],
    gradient: "from-green-600 to-emerald-600"
  },
  {
    title: "Mise en place d'ERP",
    subtitle: "Odoo ou sur-mesure",
    price: "À partir de 4 900€",
    description: "Centralisez votre gestion d'entreprise",
    features: [
      "Analyse des besoins",
      "Configuration complète",
      "Migration des données",
      "Formation des équipes",
      "Support post-déploiement"
    ],
    gradient: "from-indigo-600 to-blue-600"
  },
  {
    title: "Reprise d'Application",
    subtitle: "Legacy ou dette technique",
    price: "Sur devis",
    description: "Modernisation de votre application",
    features: [
      "Audit de code complet",
      "Refactoring progressif",
      "Migration technologique",
      "Documentation technique",
      "Transfert de compétences"
    ],
    gradient: "from-pink-600 to-rose-600"
  },
  {
    title: "Application Blockchain",
    subtitle: "Smart contracts & DApps",
    price: "Sur devis",
    description: "Solutions décentralisées sécurisées",
    features: [
      "Smart contracts Solidity",
      "Intégration Web3",
      "Audit de sécurité",
      "Interface DApp",
      "Déploiement mainnet"
    ],
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    title: "Prédiction de données",
    subtitle: "Machine Learning & IA",
    price: "Sur devis",
    description: "Modèles prédictifs sur-mesure",
    features: [
      "Analyse exploratoire",
      "Modèles ML personnalisés",
      "API de prédiction",
      "Monitoring des performances",
      "Réentraînement automatique"
    ],
    gradient: "from-teal-600 to-cyan-600"
  }
]

function PricingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused || isDragging) return

    let animationId: number
    let currentScroll = scrollContainer.scrollLeft

    const animate = () => {
      if (!isPaused && !isDragging) {
        currentScroll += 0.5
        if (currentScroll >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          currentScroll = 0
        }
        scrollContainer.scrollLeft = currentScroll
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div 
      ref={scrollRef}
      className="flex gap-6 px-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
      style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        handleMouseLeave()
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {[...pricingOffers, ...pricingOffers].map((offer, index) => (
        <Card
          key={index}
          className="
            flex-shrink-0 w-[380px] bg-slate-900 
            border border-slate-800 shadow-2xl transform transition-all duration-300 
            hover:scale-105 hover:rotate-1 hover:shadow-3xl hover:border-slate-700
            relative overflow-hidden select-none
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {offer.title}
              </h3>
              <p className="text-white/80 text-sm font-medium">
                {offer.subtitle}
              </p>
            </div>

            <div className="text-center mb-6 pb-6 border-b border-white/20">
              <div className="text-3xl font-bold text-white">
                {offer.price}
              </div>
            </div>

            <p className="text-white/90 text-center mb-6 text-sm">
              {offer.description}
            </p>

            <ul className="space-y-3 mb-8">
              {offer.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm">
                  <Check className="h-4 w-4 text-white mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              asChild 
              className="w-full bg-white text-slate-900 hover:bg-gray-100 font-semibold shadow-lg"
            >
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>

          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 transform rotate-45 translate-x-10 -translate-y-10" />
        </Card>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Partenaire de transformation digitale
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Devenez <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">leader</span> de votre secteur
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Gaussia accompagne les <strong className="text-white">PME et ETI</strong> dans leur transformation digitale grâce à une méthodologie éprouvée et à nos 3 expertises clés :
              </p>
              <div className="flex flex-wrap gap-6 text-lg text-gray-300">
                <span>• Développement sur-mesure</span>
                <span>• Intelligence Artificielle</span>
                <span>• ERP / Odoo</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white">
                  <Link href="/expertises/audit-ia">
                    Audit IA gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <NetworkAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Credibility */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">Ils nous font confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Industrie", "Finance", "Santé", "Retail", "Services", "Tech"].map((sector) => (
                <div key={sector} className="px-6 py-3 bg-slate-800/50 rounded-lg text-gray-400 font-medium">
                  {sector}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">+40%</div>
              <p className="text-gray-400 mt-2">Gain de productivité moyen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">8-12 sem.</div>
              <p className="text-gray-400 mt-2">Délai de livraison</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">98%</div>
              <p className="text-gray-400 mt-2">Satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Expertises */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Nos 3 expertises clés</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Une approche complète pour répondre à tous vos enjeux de transformation digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Développement sur-mesure</h3>
              <p className="text-gray-400 text-sm mb-4">
                Applications web, mobile et outils internes. Du No-Code au code sur-mesure.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Web & Mobile</li>
                <li>• No-Code / Low-Code</li>
                <li>• Outils internes</li>
              </ul>
              <Link href="/expertises/developpement" className="inline-flex items-center text-blue-400 text-sm mt-4 hover:text-blue-300 transition-colors">
                En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-violet-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">Intelligence Artificielle</h3>
              <p className="text-gray-400 text-sm mb-4">
                Audit, automatisation et développement IA sur-mesure pour votre entreprise.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Audit IA</li>
                <li>• Automatisation IA</li>
                <li>• Développement IA</li>
              </ul>
              <Link href="/expertises/ia" className="inline-flex items-center text-violet-400 text-sm mt-4 hover:text-violet-300 transition-colors">
                En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3">ERP / Odoo</h3>
              <p className="text-gray-400 text-sm mb-4">
                Centralisez vos données et automatisez vos processus avec Odoo.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Intégration</li>
                <li>• Formation</li>
                <li>• Développement sur-mesure</li>
              </ul>
              <Link href="/expertises/odoo" className="inline-flex items-center text-emerald-400 text-sm mt-4 hover:text-emerald-300 transition-colors">
                En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Découvrez le potentiel IA de votre entreprise
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Notre audit IA d'une journée identifie les cas d'usage à fort impact pour votre organisation. 
                Vous repartez avec une roadmap claire et une estimation de ROI.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                  <span>Diagnostic complet de vos processus</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                  <span>Identification des tâches automatisables</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                  <span>Roadmap personnalisée + estimation ROI</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
                  <span>Livrables sous 72h</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                <Link href="/expertises/audit-ia">
                  Réserver mon audit gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-slate-700 overflow-hidden">
                <img 
                  src="/imagecorpo.jpg" 
                  alt="Équipe collaborant sur un projet de transformation digitale" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nos tarifs</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              Des solutions adaptées à chaque projet, avec des prix transparents et sans surprise
            </p>
            <p className="text-sm text-gray-500">
              💡 Faites glisser les cartes pour naviguer
            </p>
          </div>

          <PricingCarousel />

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
              <Link href="/pricing">
                Voir tous les tarifs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

      {/* FAQ Section - SEO Optimized */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Questions fréquentes</h2>
            <p className="text-xl text-gray-400">
              Tout ce que vous devez savoir sur la transformation digitale, l'IA, les ERP et nos méthodes de travail
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Pourquoi choisir Gaussia */}
            <AccordionItem value="pourquoi-gaussia" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Pourquoi choisir Gaussia pour ma transformation digitale ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4 text-lg">Gaussia n'est pas un simple prestataire technique, mais un <strong className="text-white">partenaire stratégique</strong> de votre transformation.</p>
                
                <div className="space-y-4">
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                      ROI mesurable et garanti
                    </h4>
                    <p>Nous ne vendons pas de la technologie, nous vendons de la <strong className="text-white">création de valeur</strong>. Chaque projet démarre par une analyse de ROI et nous nous engageons sur des KPIs business concrets : réduction de coûts, gain de temps, augmentation du CA.</p>
                    <p className="mt-2 text-sm text-blue-400">→ Nos clients constatent en moyenne +40% de productivité</p>
                  </div>

                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-violet-400" />
                      Expertise senior pluridisciplinaire
                    </h4>
                    <p>Notre équipe combine des profils rares : développeurs full-stack, data scientists, experts ERP Odoo et architectes cloud. Tous avec +10 ans d'expérience en <strong className="text-white">environnement startup et PME</strong>.</p>
                    <p className="mt-2 text-sm text-violet-400">→ Nous parlons business, pas seulement code</p>
                  </div>

                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-emerald-400" />
                      Time-to-market accéléré
                    </h4>
                    <p>Méthode agile éprouvée avec <strong className="text-white">livrables toutes les 2 semaines</strong>. Vous pouvez tester, valider et ajuster en continu. Exit les tunnels de 6 mois sans visibilité.</p>
                    <p className="mt-2 text-sm text-emerald-400">→ MVP en 4-6 semaines, produit complet en 8-12 semaines</p>
                  </div>

                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-amber-400" />
                      Accompagnement long terme
                    </h4>
                    <p>La livraison n'est que le début. Nous assurons <strong className="text-white">formation, support et évolutions</strong> pour garantir l'adoption et la pérennité de la solution.</p>
                    <p className="mt-2 text-sm text-amber-400">→ 98% de satisfaction client et taux de rétention de 95%</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Machine Learning */}
            <AccordionItem value="machine-learning" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Qu'est-ce que le Machine Learning et comment ça marche ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">Le <strong className="text-white">Machine Learning (ML)</strong> est une discipline de l'intelligence artificielle qui permet aux systèmes d'apprendre et de s'améliorer automatiquement à partir de l'expérience, sans être explicitement programmés pour chaque scénario.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🎯 Les 3 types d'apprentissage</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-white font-medium">1. Apprentissage supervisé</p>
                      <p className="text-sm">L'algorithme apprend sur des données étiquetées (ex: prédire si un email est spam ou non)</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">2. Apprentissage non supervisé</p>
                      <p className="text-sm">Découverte de patterns cachés dans des données non étiquetées (ex: segmentation clients)</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">3. Apprentissage par renforcement</p>
                      <p className="text-sm">L'agent apprend par essai-erreur avec un système de récompenses (ex: IA de jeux vidéo)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">⚙️ Processus de mise en œuvre</h4>
                  <ol className="space-y-2 ml-4">
                    <li className="text-sm"><strong className="text-white">Collecte & nettoyage :</strong> Rassemblement et préparation des données historiques</li>
                    <li className="text-sm"><strong className="text-white">Feature engineering :</strong> Sélection et transformation des variables pertinentes</li>
                    <li className="text-sm"><strong className="text-white">Entraînement :</strong> Le modèle apprend des patterns sur 70-80% des données</li>
                    <li className="text-sm"><strong className="text-white">Validation :</strong> Test sur 20-30% de données non vues pour mesurer la performance</li>
                    <li className="text-sm"><strong className="text-white">Déploiement :</strong> Mise en production via API avec monitoring continu</li>
                    <li className="text-sm"><strong className="text-white">Réentraînement :</strong> Mise à jour régulière avec nouvelles données</li>
                  </ol>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">💡 Approche Gaussia</h4>
                  <p className="mb-2">Nous ne faisons pas du ML "pour faire du ML". Notre méthodologie :</p>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>✓ <strong className="text-white">Audit préalable</strong> pour identifier les cas d'usage à fort ROI</li>
                    <li>✓ <strong className="text-white">POC rapide</strong> (2-3 semaines) pour valider la faisabilité</li>
                    <li>✓ <strong className="text-white">Production-ready</strong> avec API, monitoring et documentation</li>
                    <li>✓ <strong className="text-white">Formation</strong> de vos équipes pour garantir l'adoption</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong className="text-white">Exemples concrets :</strong> Prédiction de churn client (98% de précision), optimisation de stocks (-30% de coûts), scoring de leads qualifiés (+45% de conversion).</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Régression linéaire */}
            <AccordionItem value="regression-lineaire" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Comment fonctionne la régression linéaire en Machine Learning ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">La <strong className="text-white">régression linéaire</strong> est l'algorithme fondamental du Machine Learning supervisé. Elle modélise une relation mathématique entre une ou plusieurs variables explicatives (X) et une variable cible continue (y).</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">📐 Formulation mathématique</h4>
                  <div className="bg-slate-950 p-4 rounded font-mono text-sm mb-3">
                    <p className="text-blue-400">y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div><strong className="text-white">y</strong> = variable dépendante à prédire</div>
                    <div><strong className="text-white">β₀</strong> = ordonnée à l'origine (intercept)</div>
                    <div><strong className="text-white">β₁, β₂, βₙ</strong> = coefficients (poids de chaque variable)</div>
                    <div><strong className="text-white">x₁, x₂, xₙ</strong> = variables explicatives (features)</div>
                    <div><strong className="text-white">ε</strong> = terme d'erreur résiduelle</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🎯 Méthode d'optimisation : Moindres Carrés Ordinaires (MCO)</h4>
                  <p className="mb-2">L'algorithme cherche à <strong className="text-white">minimiser la somme des carrés des erreurs</strong> entre les valeurs prédites et réelles :</p>
                  <div className="bg-slate-950 p-3 rounded font-mono text-sm mb-2">
                    <p className="text-violet-400">Minimiser : Σ(yᵢ - ŷᵢ)²</p>
                  </div>
                  <p className="text-sm">Cette approche garantit la meilleure droite de régression possible selon le critère des moindres carrés.</p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">📊 Métriques d'évaluation</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-white">R² (coefficient de détermination) :</strong> Mesure la qualité de l'ajustement (0 à 1, idéalement &gt;0.7)</li>
                    <li><strong className="text-white">RMSE (Root Mean Squared Error) :</strong> Erreur moyenne en valeur absolue</li>
                    <li><strong className="text-white">MAE (Mean Absolute Error) :</strong> Erreur moyenne absolue, plus robuste aux outliers</li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">💼 Applications business chez Gaussia</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium">🏠 Prédiction de prix immobiliers</p>
                      <p>Variables : surface, localisation, année construction → Précision 92%</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">💰 Estimation de revenus</p>
                      <p>Prédiction du CA mensuel basée sur trafic web, campagnes marketing, saisonnalité</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">📦 Prévision de demande</p>
                      <p>Optimisation des stocks pour un client retail : -25% de ruptures, -18% de surstock</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Notre valeur ajoutée :</strong> Nous intégrons la régression linéaire dans des pipelines automatisés avec réentraînement mensuel et alertes en cas de dégradation de performance.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Black-Scholes */}
            <AccordionItem value="black-scholes" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Qu'est-ce que le modèle Black-Scholes en finance quantitative ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">Le <strong className="text-white">modèle Black-Scholes-Merton</strong> (1973, Prix Nobel d'économie) est l'équation différentielle stochastique de référence pour valoriser les options financières européennes.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">📐 Formule du Call européen</h4>
                  <div className="bg-slate-950 p-4 rounded font-mono text-sm mb-3 space-y-2">
                    <p className="text-blue-400">C = S₀N(d₁) - Ke⁻ʳᵗN(d₂)</p>
                    <p className="text-gray-500 text-xs">Où :</p>
                    <p className="text-violet-400 text-xs">d₁ = [ln(S₀/K) + (r + σ²/2)t] / (σ√t)</p>
                    <p className="text-violet-400 text-xs">d₂ = d₁ - σ√t</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div><strong className="text-white">C</strong> = Prix du call</div>
                    <div><strong className="text-white">S₀</strong> = Prix spot de l'actif sous-jacent</div>
                    <div><strong className="text-white">K</strong> = Strike (prix d'exercice)</div>
                    <div><strong className="text-white">r</strong> = Taux sans risque</div>
                    <div><strong className="text-white">t</strong> = Time to maturity (années)</div>
                    <div><strong className="text-white">σ</strong> = Volatilité implicite</div>
                    <div><strong className="text-white">N()</strong> = Fonction de distribution normale cumulative</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🔬 Hypothèses du modèle</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Marchés efficients et sans friction (pas de coûts de transaction)</li>
                    <li>• Volatilité et taux d'intérêt constants</li>
                    <li>• Distribution log-normale des rendements</li>
                    <li>• Possibilité de shorter l'actif sous-jacent</li>
                    <li>• Pas de dividendes pendant la durée de vie de l'option</li>
                  </ul>
                  <p className="mt-2 text-sm text-amber-400">⚠️ Ces hypothèses sont rarement vérifiées en pratique, d'où l'importance des modèles stochastiques avancés.</p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">📊 Les "Greeks" - Sensibilités du modèle</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-white font-medium">Delta (Δ)</p>
                      <p>Sensibilité au prix du sous-jacent</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Gamma (Γ)</p>
                      <p>Variation du delta</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Vega (ν)</p>
                      <p>Sensibilité à la volatilité</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Theta (Θ)</p>
                      <p>Décroissance temporelle</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Rho (ρ)</p>
                      <p>Sensibilité au taux d'intérêt</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">💼 Expertise Gaussia en finance quantitative</h4>
                  <p className="mb-3">Nous développons des solutions de <strong className="text-white">pricing d'options et gestion de risque</strong> pour fintechs et hedge funds :</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ <strong className="text-white">Moteurs de pricing temps réel</strong> avec modèles stochastiques (Heston, SABR)</li>
                    <li>✓ <strong className="text-white">Backtesting de stratégies</strong> sur données historiques avec Monte Carlo</li>
                    <li>✓ <strong className="text-white">Calcul de VaR et CVaR</strong> pour conformité réglementaire</li>
                    <li>✓ <strong className="text-white">API de pricing</strong> haute performance (&lt;50ms de latence)</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong className="text-white">Stack technique :</strong> Python (QuantLib, NumPy), C++ pour calculs intensifs, API FastAPI, déploiement cloud avec autoscaling.</p>
                  <p className="mt-2 text-sm text-blue-400">→ Projet récent : Plateforme de pricing pour 10 000+ options/seconde pour un broker parisien</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Data Science vs Data Analyst */}
            <AccordionItem value="data-science-analyst" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Quelle est la différence entre Data Scientist et Data Analyst ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">Ces deux rôles sont <strong className="text-white">complémentaires mais distincts</strong> dans la chaîne de valeur de la data. Comprendre cette différence est crucial pour recruter efficacement ou externaliser correctement.</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-900/50 border border-emerald-700/50 p-4 rounded-lg">
                    <h4 className="text-emerald-400 font-semibold mb-3 flex items-center">
                      📊 Data Analyst
                    </h4>
                    <p className="text-white font-medium mb-2">Mission : Expliquer le passé</p>
                    <p className="text-sm mb-3">Analyse descriptive et diagnostic pour répondre à des questions business précises.</p>
                    
                    <p className="text-white font-medium mb-2 mt-3">Compétences clés :</p>
                    <ul className="text-sm space-y-1">
                      <li>• SQL avancé (requêtes complexes, optimisation)</li>
                      <li>• Excel/Google Sheets (tableaux croisés, macros)</li>
                      <li>• Outils de BI (Power BI, Tableau, Looker)</li>
                      <li>• Statistiques descriptives</li>
                      <li>• Storytelling avec la data</li>
                    </ul>

                    <p className="text-white font-medium mb-2 mt-3">Livrables types :</p>
                    <ul className="text-sm space-y-1">
                      <li>→ Dashboards de suivi KPIs</li>
                      <li>→ Rapports d'analyse de campagnes</li>
                      <li>→ Études de cohortes clients</li>
                      <li>→ Analyses de A/B tests</li>
                    </ul>

                    <p className="text-white font-medium mb-2 mt-3">Salaire moyen :</p>
                    <p className="text-sm">35K-55K€ (junior-senior en France)</p>
                  </div>

                  <div className="bg-slate-900/50 border border-violet-700/50 p-4 rounded-lg">
                    <h4 className="text-violet-400 font-semibold mb-3 flex items-center">
                      🤖 Data Scientist
                    </h4>
                    <p className="text-white font-medium mb-2">Mission : Prédire le futur</p>
                    <p className="text-sm mb-3">Modélisation prédictive et prescriptive via Machine Learning et statistiques avancées.</p>
                    
                    <p className="text-white font-medium mb-2 mt-3">Compétences clés :</p>
                    <ul className="text-sm space-y-1">
                      <li>• Python/R (pandas, scikit-learn, TensorFlow)</li>
                      <li>• Algorithmes de ML (supervisé, non supervisé, deep learning)</li>
                      <li>• Statistiques inférentielles et tests d'hypothèses</li>
                      <li>• Feature engineering et data pipelines</li>
                      <li>• MLOps (déploiement, monitoring modèles)</li>
                    </ul>

                    <p className="text-white font-medium mb-2 mt-3">Livrables types :</p>
                    <ul className="text-sm space-y-1">
                      <li>→ Modèles prédictifs en production</li>
                      <li>→ Systèmes de recommandation</li>
                      <li>→ Détection d'anomalies/fraudes</li>
                      <li>→ Optimisation algorithmique</li>
                    </ul>

                    <p className="text-white font-medium mb-2 mt-3">Salaire moyen :</p>
                    <p className="text-sm">45K-80K€ (junior-senior en France)</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🎯 Quand recruter l'un ou l'autre ?</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-emerald-400 font-medium">Recruter un Data Analyst si :</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Vous avez besoin de reporting et dashboards réguliers</li>
                        <li>• Vous voulez analyser les performances passées</li>
                        <li>• Votre data est structurée (CRM, ERP, Analytics)</li>
                        <li>• Budget limité (&lt;50K€/an)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-violet-400 font-medium">Recruter un Data Scientist si :</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Vous voulez prédire churn, ventes, risques</li>
                        <li>• Vous avez des volumes de données importants (ML nécessite beaucoup de data)</li>
                        <li>• Vous cherchez à automatiser des décisions complexes</li>
                        <li>• Budget conséquent et ROI clairement identifié</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">💡 Approche Gaussia : La "Data Team as a Service"</h4>
                  <p className="mb-3">Plutôt que de recruter (process long et coûteux), nous proposons une <strong className="text-white">équipe data complète en mode projet</strong> :</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ <strong className="text-white">Phase 1 (Data Analyst) :</strong> Audit de vos données, création dashboards et reporting</li>
                    <li>✓ <strong className="text-white">Phase 2 (Data Scientist) :</strong> Identification cas d'usage ML à fort ROI, développement modèles</li>
                    <li>✓ <strong className="text-white">Phase 3 (Data Engineer) :</strong> Mise en production, automatisation pipelines, monitoring</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong className="text-white">Avantage :</strong> Vous payez uniquement ce dont vous avez besoin, sans coûts fixes de recrutement. Flexibilité totale.</p>
                  <p className="mt-2 text-sm text-blue-400">→ Exemple : Client e-commerce, 3 mois, équipe de 3 (Analyst + Scientist + Engineer) = dashboards + modèle de churn + pipeline automatisé</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Méthode SMART */}
            <AccordionItem value="methode-smart" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Qu'est-ce que la méthode SMART en gestion de projet ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">La méthode <strong className="text-white">SMART</strong> est un framework de définition d'objectifs créé par George T. Doran en 1981. C'est devenu le <strong className="text-white">standard international</strong> pour formuler des objectifs efficaces et mesurables.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🎯 Les 5 critères SMART</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-white font-semibold mb-1">S - Spécifique (Specific)</p>
                      <p className="text-sm mb-2">L'objectif doit être clair, précis et sans ambiguïté. Répondre à : Quoi ? Qui ? Où ?</p>
                      <p className="text-xs text-blue-400">❌ "Améliorer les ventes" → ✅ "Augmenter les ventes du produit X en région Île-de-France"</p>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4">
                      <p className="text-white font-semibold mb-1">M - Mesurable (Measurable)</p>
                      <p className="text-sm mb-2">Définir des indicateurs quantifiables pour suivre la progression. Répondre à : Combien ?</p>
                      <p className="text-xs text-violet-400">❌ "Augmenter les ventes" → ✅ "Augmenter les ventes de 25%"</p>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4">
                      <p className="text-white font-semibold mb-1">A - Atteignable (Achievable)</p>
                      <p className="text-sm mb-2">Objectif ambitieux mais réaliste avec les ressources disponibles. Éviter la démotivation.</p>
                      <p className="text-xs text-emerald-400">❌ "Doubler le CA en 1 mois" → ✅ "Augmenter le CA de 25% en 6 mois"</p>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4">
                      <p className="text-white font-semibold mb-1">R - Relevant (Relevant)</p>
                      <p className="text-sm mb-2">Aligné avec la stratégie globale et les priorités de l'entreprise. Répondre à : Pourquoi ?</p>
                      <p className="text-xs text-amber-400">Exemple : Améliorer la satisfaction client pour réduire le churn et augmenter le LTV</p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="text-white font-semibold mb-1">T - Temporel (Time-bound)</p>
                      <p className="text-sm mb-2">Définir une échéance précise pour créer l'urgence et prioriser. Répondre à : Quand ?</p>
                      <p className="text-xs text-red-400">❌ "Augmenter les ventes de 25%" → ✅ "Augmenter les ventes de 25% d'ici le 31/12/2026"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">📋 Exemples d'objectifs SMART</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-white font-medium mb-1">Marketing :</p>
                      <p>"Générer 500 leads qualifiés via LinkedIn Ads pour le produit Y avec un budget de 10K€ d'ici fin Q2 2026"</p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-white font-medium mb-1">RH :</p>
                      <p>"Réduire le turnover de 30% à 15% dans l'équipe tech en améliorant le processus d'onboarding d'ici 6 mois"</p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-white font-medium mb-1">Produit :</p>
                      <p>"Augmenter le NPS de 45 à 70 en intégrant 5 features prioritaires identifiées en user research d'ici Q3 2026"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🚀 Méthode SMART chez Gaussia</h4>
                  <p className="mb-3">Nous appliquons SMART à <strong className="text-white">chaque projet client</strong> dès le kickoff :</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium">Phase 1 : Workshop de cadrage (1 jour)</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Co-construction des objectifs SMART avec le client</li>
                        <li>• Identification des KPIs à suivre (technique + business)</li>
                        <li>• Définition du ROI attendu en €</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phase 2 : Découpage en sous-objectifs (sprints)</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Objectif global → Objectifs par sprint (2 semaines)</li>
                        <li>• Chaque sprint a ses propres critères SMART</li>
                        <li>• Review en fin de sprint pour mesurer l'atteinte</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phase 3 : Tracking et ajustement</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Dashboard temps réel des KPIs</li>
                        <li>• Rétrospectives hebdomadaires</li>
                        <li>• Pivot si objectif inatteignable (agilité)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Exemple concret :</strong> Client e-commerce → Objectif SMART : "Réduire le taux d'abandon panier de 65% à 45% en automatisant les relances email et optimisant le tunnel de paiement, d'ici 3 mois". Résultat : 42% atteint en 10 semaines.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Agile vs Scrum */}
            <AccordionItem value="agile-scrum" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Agile vs Scrum : quelle différence et laquelle choisir ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4"><strong className="text-white">Clarification cruciale :</strong> Agile est une <strong className="text-white">philosophie</strong>, Scrum est un <strong className="text-white">framework d'implémentation</strong> d'Agile. C'est comme comparer "être en forme" (philosophie) avec "faire du CrossFit" (méthode spécifique).</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">📜 Agile : Les 4 valeurs fondamentales (Manifeste Agile, 2001)</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">1.</span>
                      <div>
                        <p className="text-white font-medium">Individus et interactions &gt; Processus et outils</p>
                        <p className="text-xs">L'équipe prime sur les procédures rigides</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">2.</span>
                      <div>
                        <p className="text-white font-medium">Logiciel fonctionnel &gt; Documentation exhaustive</p>
                        <p className="text-xs">Livrer de la valeur rapidement plutôt que rédiger 200 pages de specs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">3.</span>
                      <div>
                        <p className="text-white font-medium">Collaboration avec le client &gt; Négociation contractuelle</p>
                        <p className="text-xs">Partenariat plutôt que relation client-fournisseur</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">4.</span>
                      <div>
                        <p className="text-white font-medium">Adaptation au changement &gt; Suivi d'un plan</p>
                        <p className="text-xs">Pivoter quand nécessaire plutôt que s'accrocher au plan initial</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-900/50 border border-blue-700/50 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-3">🔄 Scrum Framework</h4>
                    <p className="text-sm mb-3">Framework structuré pour implémenter Agile</p>
                    
                    <p className="text-white font-medium mb-2 text-sm">3 Rôles :</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>Product Owner :</strong> Définit le "quoi" (priorise le backlog)</li>
                      <li>• <strong>Scrum Master :</strong> Facilite le processus</li>
                      <li>• <strong>Dev Team :</strong> Auto-organisée, 5-9 personnes</li>
                    </ul>

                    <p className="text-white font-medium mb-2 mt-3 text-sm">5 Événements :</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Sprint (2-4 semaines, time-boxed)</li>
                      <li>• Sprint Planning (définir l'objectif)</li>
                      <li>• Daily Scrum (15min sync)</li>
                      <li>• Sprint Review (démo au client)</li>
                      <li>• Sprint Retrospective (amélioration continue)</li>
                    </ul>

                    <p className="text-white font-medium mb-2 mt-3 text-sm">3 Artefacts :</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Product Backlog (liste priorisée)</li>
                      <li>• Sprint Backlog (scope du sprint)</li>
                      <li>• Increment (produit livrable)</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 border border-violet-700/50 p-4 rounded-lg">
                    <h4 className="text-violet-400 font-semibold mb-3">📊 Autres frameworks Agile</h4>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-white font-medium">Kanban</p>
                        <p className="text-xs">Flow continu sans sprints. Limiter le WIP (Work In Progress). Idéal pour support/maintenance.</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">Extreme Programming (XP)</p>
                        <p className="text-xs">Focus sur l'excellence technique : TDD, pair programming, intégration continue.</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">SAFe (Scaled Agile)</p>
                        <p className="text-xs">Pour grandes organisations (50+ devs). Coordination de plusieurs équipes Scrum.</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">Lean Startup</p>
                        <p className="text-xs">Build-Measure-Learn. Validation rapide d'hypothèses avec MVPs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🎯 Quel framework choisir ?</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-emerald-400 font-medium">Choisir Scrum si :</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>✓ Projet avec scope défini mais évolutif</li>
                        <li>✓ Équipe de 5-9 personnes</li>
                        <li>✓ Besoin de cadence régulière et prévisible</li>
                        <li>✓ Client disponible pour reviews fréquentes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-400 font-medium">Choisir Kanban si :</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>✓ Support, maintenance ou tickets continus</li>
                        <li>✓ Priorités changeantes en temps réel</li>
                        <li>✓ Équipe habituée aux sprints et cherchant plus de flexibilité</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-violet-400 font-medium">Hybride Scrum + Kanban (Scrumban) si :</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>✓ Besoin de sprints + gestion de bugs/hotfixes urgents</li>
                        <li>✓ Équipe en transition de Scrum pur vers plus de flow</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">⚙️ Approche Gaussia : Scrum adaptatif</h4>
                  <p className="mb-3">Nous utilisons <strong className="text-white">Scrum comme base</strong> avec des adaptations pragmatiques :</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ <strong className="text-white">Sprints de 2 semaines</strong> (sweet spot entre agilité et stabilité)</li>
                    <li>✓ <strong className="text-white">Daily asynchrone</strong> via Slack pour équipes distribuées (pas de meeting quotidien inutile)</li>
                    <li>✓ <strong className="text-white">Démos client systématiques</strong> à J+14 de chaque sprint (validation continue)</li>
                    <li>✓ <strong className="text-white">Rétrospectives actionnables</strong> : 3 actions max, suivies au sprint suivant</li>
                    <li>✓ <strong className="text-white">Kanban pour les hotfixes</strong> : board séparé pour ne pas polluer le sprint</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong className="text-white">Outils :</strong> Jira pour backlog, Notion pour documentation, Figma pour design, GitHub pour code review.</p>
                  <p className="mt-2 text-sm text-blue-400">→ Résultat : Vélocité stable, prédictibilité élevée (95% des sprints livrés à temps), satisfaction client 98%</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Blockchain */}
            <AccordionItem value="blockchain" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Qu'est-ce que la Blockchain et comment peut-on l'utiliser en entreprise ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">La <strong className="text-white">blockchain</strong> est une technologie de <strong className="text-white">registre distribué</strong> (Distributed Ledger Technology - DLT) créée en 2008 avec Bitcoin. C'est une base de données partagée, immuable et sécurisée par cryptographie, sans autorité centrale.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🔗 Principes techniques fondamentaux</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium mb-1">1. Structure en blocs chaînés</p>
                      <p className="mb-2">Chaque bloc contient : transactions + hash du bloc précédent + timestamp + nonce</p>
                      <div className="bg-slate-950 p-2 rounded font-mono text-xs">
                        <p>Bloc N: hash(transactions + hash_bloc_N-1 + timestamp)</p>
                        <p className="text-blue-400">→ Modification d'un bloc = invalide tous les suivants</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-white font-medium mb-1">2. Consensus décentralisé</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>PoW (Proof of Work) :</strong> Bitcoin, Ethereum 1.0 - Mining intensif en énergie</li>
                        <li>• <strong>PoS (Proof of Stake) :</strong> Ethereum 2.0, Cardano - Validation par mise en jeu de tokens</li>
                        <li>• <strong>PBFT (Practical Byzantine Fault Tolerance) :</strong> Hyperledger - Blockchains privées</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-1">3. Cryptographie</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>Hash SHA-256 :</strong> Empreinte unique de chaque bloc (irreversible)</li>
                        <li>• <strong>Signatures numériques :</strong> ECDSA pour authentifier les transactions</li>
                        <li>• <strong>Merkle Trees :</strong> Vérification rapide de l'intégrité des données</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-1">4. Smart Contracts</p>
                      <p>Programmes auto-exécutables sur Ethereum, Solana, etc. Langages : Solidity, Rust, Vyper</p>
                      <div className="bg-slate-950 p-2 rounded font-mono text-xs mt-1">
                        <p className="text-violet-400">// Exemple : Paiement automatique si condition remplie</p>
                        <p>if (livraisonReçue == true) transfert(vendeur, 1000€);</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🏢 Types de blockchain</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-blue-400 font-semibold mb-2">Publiques</p>
                      <p className="text-xs mb-2">Bitcoin, Ethereum, Solana</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Décentralisées</li>
                        <li>✓ Transparentes</li>
                        <li>✗ Lentes (10-15 tx/s)</li>
                        <li>✗ Coûteuses (gas fees)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-violet-400 font-semibold mb-2">Privées</p>
                      <p className="text-xs mb-2">Hyperledger, Corda</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Rapides (1000+ tx/s)</li>
                        <li>✓ Confidentielles</li>
                        <li>✓ Contrôle d'accès</li>
                        <li>✗ Moins décentralisées</li>
                      </ul>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-emerald-400 font-semibold mb-2">Hybrides</p>
                      <p className="text-xs mb-2">XRP, Dragonchain</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Mix public/privé</li>
                        <li>✓ Flexibilité</li>
                        <li>✓ Scalabilité</li>
                        <li>✗ Complexité</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">💼 Cas d'usage concrets en entreprise</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="text-white font-medium">🚚 Supply Chain & Traçabilité</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• <strong>Walmart :</strong> Traçabilité alimentaire (origine produits en 2s vs 7 jours avant)</li>
                        <li>• <strong>LVMH :</strong> Aura Blockchain pour authentifier produits de luxe (anti-contrefaçon)</li>
                        <li>• <strong>Maersk :</strong> TradeLens pour digitaliser le shipping international (200M conteneurs)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-3">
                      <p className="text-white font-medium">💰 Finance & Paiements</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• <strong>Ripple (XRP) :</strong> Transferts internationaux instantanés (3-5s vs 3-5 jours SWIFT)</li>
                        <li>• <strong>JPMorgan :</strong> JPM Coin pour paiements B2B instantanés entre filiales</li>
                        <li>• <strong>DeFi :</strong> Prêts décentralisés sans banque (Aave, Compound)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-3">
                      <p className="text-white font-medium">📜 Documents & Certifications</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• <strong>Diplômes :</strong> MIT, École 42 - Diplômes infalsifiables sur blockchain</li>
                        <li>• <strong>Notariat :</strong> Ubitrust - Actes notariés horodatés et immuables</li>
                        <li>• <strong>Santé :</strong> MedRec - Dossiers médicaux partagés entre hôpitaux</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-3">
                      <p className="text-white font-medium">🏠 Immobilier & Tokenisation</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• <strong>Tokenisation d'actifs :</strong> Acheter 0.1% d'un immeuble pour 1000€</li>
                        <li>• <strong>Smart contracts :</strong> Vente automatique sans notaire (ex: Propy)</li>
                        <li>• <strong>Registre foncier :</strong> Suède, Géorgie - Cadastre sur blockchain</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-3">
                      <p className="text-white font-medium">🎮 Gaming & NFTs</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• <strong>NFTs :</strong> Propriété prouvable d'actifs numériques (art, skins, cartes)</li>
                        <li>• <strong>Play-to-earn :</strong> Axie Infinity - Gagner de l'argent réel en jouant</li>
                        <li>• <strong>Métavers :</strong> The Sandbox, Decentraland - Terrains virtuels tokenisés</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">⚠️ Quand NE PAS utiliser la blockchain</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-400">❌ Si vous répondez "non" à ces questions, une base de données classique suffit :</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Avez-vous besoin de décentralisation ? (plusieurs acteurs qui ne se font pas confiance ?)</li>
                      <li>• Avez-vous besoin d'immuabilité absolue ? (traçabilité légale obligatoire ?)</li>
                      <li>• Avez-vous besoin de transparence ? (audit public requis ?)</li>
                    </ul>
                    <p className="mt-2"><strong className="text-white">Exemple :</strong> CRM interne, app mobile classique, site e-commerce → PostgreSQL est 1000x plus simple et rapide.</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🔬 Approche Gaussia Blockchain</h4>
                  <p className="mb-3">Nous accompagnons les PME/ETI sur la blockchain avec <strong className="text-white">pragmatisme</strong> (pas de hype, que du ROI) :</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium">Phase 1 : Audit d'opportunité (2 jours)</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Analyse du use case : blockchain pertinente ou overkill ?</li>
                        <li>• Choix du type : publique (Ethereum/Polygon) vs privée (Hyperledger) vs hybride</li>
                        <li>• Estimation ROI : coûts (dev + gas fees) vs gains (efficacité + traçabilité)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phase 2 : POC (4 semaines)</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Smart contract Solidity sur testnet Ethereum/Polygon</li>
                        <li>• API REST pour interagir avec la blockchain</li>
                        <li>• Dashboard pour visualiser les transactions</li>
                        <li>• Tests de charge : combien de tx/s ? Quel coût unitaire ?</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phase 3 : Production (8-12 semaines)</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Déploiement mainnet avec sécurité renforcée (audit smart contract)</li>
                        <li>• Intégration avec SI existant (ERP, CRM, etc.)</li>
                        <li>• Formation équipes + documentation</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Stack technique :</strong> Solidity/Hardhat, Ethers.js, IPFS (stockage décentralisé), Next.js + Web3Modal pour interface utilisateur.</p>
                  <p className="mt-2 text-sm text-blue-400">→ <strong>Exemple concret :</strong> Client agroalimentaire - Blockchain privée Hyperledger pour tracer origine produits bio. Résultat : certification en 1 clic, conformité DGCCRF automatique, +35% de confiance consommateur.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Postman */}
            <AccordionItem value="postman" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Postman, c'est quoi et à quoi ça sert ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4"><strong className="text-white">Postman</strong> est la plateforme de référence mondiale pour le <strong className="text-white">développement, test et documentation d'APIs</strong> (Application Programming Interfaces). Utilisé par +30M de développeurs et 500K entreprises (Google, Microsoft, Spotify, etc.).</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🧪 Fonctionnalités principales</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium mb-1">1. Requêtes HTTP (API Testing)</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>GET :</strong> Récupérer des données (ex: liste produits)</li>
                        <li>• <strong>POST :</strong> Créer de nouvelles données (ex: créer un utilisateur)</li>
                        <li>• <strong>PUT/PATCH :</strong> Modifier des données existantes</li>
                        <li>• <strong>DELETE :</strong> Supprimer des données</li>
                      </ul>
                      <div className="bg-slate-950 p-2 rounded font-mono text-xs mt-2">
                        <p className="text-blue-400">POST https://api.example.com/users</p>
                        <p className="text-gray-500">Headers: Authorization: Bearer token123</p>
                        <p className="text-gray-500">Body: {JSON.stringify({"name": "John", "email": "john@mail.com"})}</p>
                        <p className="text-emerald-400 mt-1">✓ Status 201 Created</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-1">2. Collections & Tests automatisés</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Organiser les requêtes par projet/module</li>
                        <li>• Exécuter des séquences de tests (scenarios)</li>
                        <li>• Tests de validation avec JavaScript (pm.test)</li>
                        <li>• Variables d'environnement (dev/staging/prod)</li>
                      </ul>
                      <div className="bg-slate-950 p-2 rounded font-mono text-xs mt-2">
                        <p className="text-violet-400">// Exemple de test automatisé</p>
                        <p>pm.test("Status code is 200", function() {'{'}pm.response.to.have.status(200);{'}'});</p>
                        <p>pm.test("Email is correct", function() {'{'}pm.expect(json.email).to.eql("john@mail.com");{'}'});</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-1">3. Documentation automatique</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Génération de docs interactives à partir des collections</li>
                        <li>• Exemples de requêtes/réponses inclus automatiquement</li>
                        <li>• Publication publique ou privée (partage avec clients/partenaires)</li>
                        <li>• Sync temps réel : modif dans Postman = doc mise à jour</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-1">4. Mock Servers & Simulations</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Simuler une API avant même de la développer</li>
                        <li>• Permettre au frontend de développer en parallèle du backend</li>
                        <li>• Tester des cas limites (erreur 500, timeout, etc.)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-1">5. Intégration CI/CD</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Newman (CLI Postman) pour exécuter collections dans pipelines</li>
                        <li>• GitHub Actions, GitLab CI, Jenkins integration</li>
                        <li>• Tests automatiques à chaque commit/merge</li>
                      </ul>
                      <div className="bg-slate-950 p-2 rounded font-mono text-xs mt-2">
                        <p className="text-gray-500"># Exemple GitHub Actions</p>
                        <p>newman run collection.json -e env.json --reporters cli,json</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-1">6. Collaboration d'équipe</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Workspaces partagés (comme Google Drive pour APIs)</li>
                        <li>• Version control des collections</li>
                        <li>• Commentaires et revue de requêtes</li>
                        <li>• Gestion des rôles (admin, éditeur, viewer)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🔧 Pourquoi Postman est indispensable</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-emerald-400 font-medium mb-2">✓ Pour les développeurs Backend :</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Tester rapidement chaque endpoint créé</li>
                        <li>• Débugger les erreurs API en temps réel</li>
                        <li>• Valider les codes status (200, 404, 500, etc.)</li>
                        <li>• Vérifier l'authentification (JWT, OAuth, API keys)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-400 font-medium mb-2">✓ Pour les développeurs Frontend :</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Comprendre comment appeler l'API backend</li>
                        <li>• Tester les requêtes avant de coder l'intégration</li>
                        <li>• Voir exactement la structure JSON de la réponse</li>
                        <li>• Travailler en parallèle avec mock servers</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-violet-400 font-medium mb-2">✓ Pour les QA / Testeurs :</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Automatiser les tests de non-régression</li>
                        <li>• Exécuter des suites de tests (1000+ requêtes) en 1 clic</li>
                        <li>• Valider les contrats d'API (schema validation)</li>
                        <li>• Tests de charge basiques (via Postman Monitor)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-amber-400 font-medium mb-2">✓ Pour les Product Managers :</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Comprendre ce que les développeurs construisent</li>
                        <li>• Tester les fonctionnalités sans attendre le frontend</li>
                        <li>• Valider les user stories directement sur l'API</li>
                        <li>• Consulter la doc API en self-service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🏆 Postman vs Alternatives</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-white">Insomnia :</strong> Plus léger mais moins de fonctionnalités (pas de mock servers)</p>
                    <p><strong className="text-white">Swagger/OpenAPI :</strong> Meilleur pour la documentation auto-générée, moins bon pour les tests</p>
                    <p><strong className="text-white">cURL :</strong> Ligne de commande (difficile à utiliser, pas de GUI)</p>
                    <p><strong className="text-white">Thunder Client (VS Code) :</strong> Léger mais limité aux basiques</p>
                    <p className="text-emerald-400 mt-2">→ <strong>Postman reste le leader</strong> pour sa richesse fonctionnelle + collaboration + écosystème</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">⚙️ Utilisation Postman chez Gaussia</h4>
                  <p className="mb-3">Postman est <strong className="text-white">au cœur de notre processus de développement</strong> pour garantir la qualité des APIs :</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium">Phase Design d'API</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Création de mock servers pour valider les endpoints avec le client AVANT le dév</li>
                        <li>• Documentation interactive partagée pour align frontend/backend/client</li>
                        <li>• Validation du contrat d'API (request/response schema)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phase Développement</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• TDD (Test-Driven Development) : écrire les tests Postman AVANT le code</li>
                        <li>• Collections organisées par feature (User Management, Payments, etc.)</li>
                        <li>• Variables d'environnement pour switcher dev/staging/prod en 1 clic</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phase CI/CD</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Newman intégré dans GitHub Actions : tests automatiques à chaque PR</li>
                        <li>• Si 1 test échoue → merge bloqué (qualité garantie)</li>
                        <li>• Monitoring Postman : exécuter les tests toutes les 5 min en prod pour détecter les anomalies</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Résultat concret :</strong> Réduction de 70% des bugs en production liés aux APIs + Documentation toujours à jour + Onboarding développeurs 3x plus rapide</p>
                  <p className="mt-2 text-sm text-blue-400">→ Exemple : Client e-commerce - 120 endpoints API testés automatiquement en 2 min à chaque déploiement. 0 incident API depuis 8 mois.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ERP */}
            <AccordionItem value="erp-definition" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Un ERP, c'est quoi exactement ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">Un <strong className="text-white">ERP (Enterprise Resource Planning)</strong> ou PGI (Progiciel de Gestion Intégré) est un système logiciel qui <strong className="text-white">centralise et automatise</strong> l'ensemble des processus métier d'une entreprise dans une <strong className="text-white">base de données unique</strong>.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🧩 Modules fonctionnels clés</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-blue-400 font-medium mb-1">💰 Finance & Comptabilité</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Comptabilité générale, analytique, auxiliaire</li>
                          <li>• Facturation clients / Gestion fournisseurs</li>
                          <li>• Trésorerie, rapprochements bancaires</li>
                          <li>• Immobilisations, amortissements</li>
                          <li>• Clôtures comptables, liasses fiscales</li>
                        </ul>
                      </div>

                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-violet-400 font-medium mb-1">📦 Gestion des Stocks & Logistique</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Gestion multi-entrepôts</li>
                          <li>• Inventaires (physique vs théorique)</li>
                          <li>• Traçabilité lots/séries/numéros de série</li>
                          <li>• Réapprovisionnement automatique (seuils)</li>
                          <li>• Expéditions, réceptions, transferts</li>
                        </ul>
                      </div>

                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-emerald-400 font-medium mb-1">📊 Ventes & CRM</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Devis, commandes, bons de livraison</li>
                          <li>• Gestion commerciale (opportunités, pipeline)</li>
                          <li>• Contrats, abonnements, récurrence</li>
                          <li>• Commission commerciaux</li>
                          <li>• Portail client self-service</li>
                        </ul>
                      </div>

                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-amber-400 font-medium mb-1">🛒 Achats & Approvisionnement</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Demandes d'achat, bons de commande</li>
                          <li>• Gestion fournisseurs, catalogues</li>
                          <li>• Appels d'offres, comparaisons</li>
                          <li>• Réceptions, contrôles qualité</li>
                          <li>• Gestion contrats cadres</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-red-400 font-medium mb-1">🏭 Production & Manufacturing</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Nomenclatures (BOM), gammes opératoires</li>
                          <li>• Ordres de fabrication (OF)</li>
                          <li>• MRP (Material Requirements Planning)</li>
                          <li>• Suivi production temps réel</li>
                          <li>• Contrôle qualité, non-conformités</li>
                        </ul>
                      </div>

                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-pink-400 font-medium mb-1">👥 Ressources Humaines</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Gestion administrative personnel</li>
                          <li>• Contrôle temps de travail, absences</li>
                          <li>• Paie, charges sociales</li>
                          <li>• Formation, entretiens annuels</li>
                          <li>• Recrutement, onboarding</li>
                        </ul>
                      </div>

                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-cyan-400 font-medium mb-1">📈 Business Intelligence</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Tableaux de bord (CA, marge, tréso)</li>
                          <li>• Rapports prédéfinis + custom</li>
                          <li>• Analyse multidimensionnelle (cubes OLAP)</li>
                          <li>• Prévisionnel, budgets</li>
                          <li>• KPIs en temps réel</li>
                        </ul>
                      </div>

                      <div className="bg-slate-950 p-3 rounded">
                        <p className="text-indigo-400 font-medium mb-1">🛠️ Maintenance & SAV</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• Tickets support clients</li>
                          <li>• Maintenance préventive / corrective</li>
                          <li>• Gestion parc équipements</li>
                          <li>• Contrats de maintenance</li>
                          <li>• Intervention techniciens (planning)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">✅ Les 5 avantages décisifs d'un ERP</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="text-white font-medium">1. Source de vérité unique (Single Source of Truth)</p>
                      <p className="text-xs mt-1">❌ Avant : Données dupliquées dans Excel, CRM, logiciel compta séparé → incohérences</p>
                      <p className="text-xs text-emerald-400">✓ Avec ERP : Base de données centralisée, données saisies 1 fois, accessibles partout</p>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-3">
                      <p className="text-white font-medium">2. Automatisation des processus</p>
                      <p className="text-xs mt-1">❌ Avant : Facturation manuelle, relances clients oubliées, saisies redondantes</p>
                      <p className="text-xs text-emerald-400">✓ Avec ERP : Génération auto factures depuis BL, relances programmées, workflows automatisés</p>
                      <p className="text-xs text-blue-400 mt-1">Gain : +30% de productivité en moyenne (source Gartner)</p>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-3">
                      <p className="text-white font-medium">3. Visibilité temps réel</p>
                      <p className="text-xs mt-1">❌ Avant : Reporting hebdo/mensuel avec Excel, informations obsolètes</p>
                      <p className="text-xs text-emerald-400">✓ Avec ERP : Tableaux de bord live, alertes automatiques si stock faible ou tréso tendue</p>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-3">
                      <p className="text-white font-medium">4. Réduction des erreurs</p>
                      <p className="text-xs mt-1">❌ Avant : Saisies multiples = risque d'erreur humaine (copier-coller, typos)</p>
                      <p className="text-xs text-emerald-400">✓ Avec ERP : Saisie unique + règles de validation → -80% d'erreurs (source IDC)</p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-3">
                      <p className="text-white font-medium">5. Conformité & Traçabilité</p>
                      <p className="text-xs mt-1">❌ Avant : Difficile de reconstituer l'historique, audits chronophages</p>
                      <p className="text-xs text-emerald-400">✓ Avec ERP : Logs complets (qui/quand/quoi), conformité RGPD/fiscale facilitée, audits en 1 clic</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🎯 Quand implémenter un ERP ?</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-emerald-400 font-medium">✓ Signaux qu'il est temps d'avoir un ERP :</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Vous avez +5 outils différents pour gérer l'entreprise (Excel, logiciels indépendants)</li>
                      <li>• Vous passez du temps à consolider des données de sources multiples</li>
                      <li>• Vous découvrez des erreurs de stock ou de facturation a posteriori</li>
                      <li>• Votre équipe passe +20% de son temps sur des tâches administratives répétitives</li>
                      <li>• Vous avez du mal à piloter (manque de visibilité sur CA, marge, tréso)</li>
                      <li>• Vous voulez scaler mais vos process ne suivent pas</li>
                    </ul>
                    <p className="mt-3"><strong className="text-white">Seuil recommandé :</strong> PME +10 personnes ou CA &gt; 1M€</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🚀 Gaussia : Spécialiste intégration ERP (Odoo)</h4>
                  <p className="mb-3">Nous sommes <strong className="text-white">partenaires officiels Odoo</strong> et accompagnons les PME/ETI sur l'intégralité du parcours ERP.</p>
                  <p className="mt-2 text-sm text-blue-400">→ Exemple : PME distribution 15 personnes - Avant : 20h/semaine sur facturation + relances. Après Odoo : 4h/semaine. ROI atteint en 7 mois. 0 erreur de facturation depuis 18 mois.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Odoo */}
            <AccordionItem value="odoo" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Odoo, c'est quoi et pourquoi le choisir ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4"><strong className="text-white">Odoo</strong> est l'<strong className="text-white">ERP open-source modulaire</strong> le plus utilisé au monde (+7M utilisateurs, 40K+ entreprises). Créé en Belgique en 2005, c'est l'alternative idéale à SAP/Microsoft pour les PME/ETI.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🏆 Pourquoi Odoo domine le marché PME/ETI</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="text-white font-medium">1. Architecture modulaire (+40 modules)</p>
                      <p className="text-xs mt-1">Commencez avec 2-3 modules (CRM + Ventes + Compta) et ajoutez selon vos besoins :</p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <ul className="text-xs space-y-1">
                          <li>• CRM, Ventes, Achats</li>
                          <li>• Comptabilité, Facturation</li>
                          <li>• Stocks, Logistique, Qualité</li>
                          <li>• Production (MRP), PLM</li>
                        </ul>
                        <ul className="text-xs space-y-1">
                          <li>• E-commerce, Site web, Blog</li>
                          <li>• RH, Pointage, Recrutement</li>
                          <li>• Projet, Timesheet, Helpdesk</li>
                          <li>• Marketing automation, Email, SMS</li>
                        </ul>
                      </div>
                      <p className="text-blue-400 text-xs mt-2">→ Pas besoin de tout implémenter d'un coup : approche progressive sur 6-18 mois</p>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-3">
                      <p className="text-white font-medium">2. Prix disruptif vs concurrence</p>
                      <div className="bg-slate-950 p-2 rounded text-xs mt-2">
                        <p className="text-red-400 mb-1">SAP Business One : 50-100K€ setup + 100€/user/mois</p>
                        <p className="text-amber-400 mb-1">Microsoft Dynamics 365 : 30-80K€ setup + 70-150€/user/mois</p>
                        <p className="text-emerald-400">Odoo Enterprise : 4-15K€ setup + 20-30€/user/mois</p>
                      </div>
                      <p className="text-xs mt-2"><strong>Exemple :</strong> 10 utilisateurs sur 3 ans = SAP 100K€ vs Odoo 15K€ (85% d'économie)</p>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-3">
                      <p className="text-white font-medium">3. Interface UX moderne (vs ERP legacy)</p>
                      <ul className="text-xs space-y-1 mt-1">
                        <li>✓ Design épuré, intuitif (comme Notion/Slack)</li>
                        <li>✓ Responsive : fonctionne sur mobile/tablette</li>
                        <li>✓ Onboarding rapide : 2-3 jours de formation suffisent</li>
                        <li>✓ Adoption utilisateurs 95% (vs 60% pour SAP/Oracle)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-3">
                      <p className="text-white font-medium">4. Open-source = personnalisation totale</p>
                      <ul className="text-xs space-y-1 mt-1">
                        <li>• Code source accessible (langage Python + JavaScript)</li>
                        <li>• Développement de modules custom pour besoins spécifiques</li>
                        <li>• Pas de vendor lock-in : vous pouvez migrer/héberger ailleurs</li>
                        <li>• Communauté : 1500+ apps/plugins dans l'Odoo App Store</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-3">
                      <p className="text-white font-medium">5. All-in-one : ERP + CRM + E-commerce + Site web</p>
                      <p className="text-xs mt-1">❌ Avant : Salesforce (CRM) + Shopify (e-commerce) + WordPress (site) + Sage (compta) = 4 outils à synchroniser</p>
                      <p className="text-xs text-emerald-400">✓ Avec Odoo : 1 plateforme unifiée, données sync en temps réel, 0 intégration complexe</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🆚️ Odoo Community vs Enterprise</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-blue-400 font-semibold mb-2">Community (gratuit)</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Licence open-source LGPL</li>
                        <li>✓ Modules de base (CRM, ventes, compta basique)</li>
                        <li>✓ Auto-hébergement requis</li>
                        <li>✓ Support communautaire uniquement</li>
                        <li>✗ Pas de modules avancés (compta Fr, BI, etc.)</li>
                      </ul>
                      <p className="text-xs mt-2 text-gray-500">Pour : Startups/associations avec budget 0, compétences tech internes</p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-violet-400 font-semibold mb-2">Enterprise (20-30€/user/mois)</p>
                      <ul className="text-xs space-y-1">
                        <li>✓ Tous les modules avancés</li>
                        <li>✓ Hébergement cloud inclus (Odoo.sh ou Odoo.com)</li>
                        <li>✓ Support officiel Odoo (tickets, hotline)</li>
                        <li>✓ Mises à jour automatiques</li>
                        <li>✓ Modules spécifiques pays (compta FR, fiscalité)</li>
                      </ul>
                      <p className="text-xs mt-2 text-gray-500">Pour : PME/ETI qui veulent un ERP pro sans se soucier de l'infra</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🎯 Odoo vs autres ERP : tableau comparatif</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="text-left p-2 text-white">Critère</th>
                          <th className="text-left p-2 text-blue-400">Odoo</th>
                          <th className="text-left p-2 text-gray-400">SAP B1</th>
                          <th className="text-left p-2 text-gray-400">MS Dynamics</th>
                          <th className="text-left p-2 text-gray-400">Sage X3</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b border-slate-800">
                          <td className="p-2 text-white">Prix setup</td>
                          <td className="p-2 text-emerald-400">5-15K€</td>
                          <td className="p-2">50-100K€</td>
                          <td className="p-2">30-80K€</td>
                          <td className="p-2">20-50K€</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="p-2 text-white">Licence/user</td>
                          <td className="p-2 text-emerald-400">20-30€/mois</td>
                          <td className="p-2">100€/mois</td>
                          <td className="p-2">70-150€/mois</td>
                          <td className="p-2">50-80€/mois</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="p-2 text-white">Déploiement</td>
                          <td className="p-2 text-emerald-400">4-8 semaines</td>
                          <td className="p-2">4-6 mois</td>
                          <td className="p-2">3-5 mois</td>
                          <td className="p-2">2-4 mois</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="p-2 text-white">Courbe adoption</td>
                          <td className="p-2 text-emerald-400">Facile (2-3j)</td>
                          <td className="p-2">Difficile (2-3 sem)</td>
                          <td className="p-2">Moyenne (1 sem)</td>
                          <td className="p-2">Difficile (2 sem)</td>
                        </tr>
                        <tr className="border-b border-slate-800">
                          <td className="p-2 text-white">Personnalisation</td>
                          <td className="p-2 text-emerald-400">Open-source</td>
                          <td className="p-2">Limitée</td>
                          <td className="p-2">Moyenne</td>
                          <td className="p-2">Moyenne</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🚀 Gaussia : Partenaire Officiel Odoo Gold</h4>
                  <p className="mb-3">Nous sommes <strong className="text-white">partenaires Gold Odoo</strong> depuis 2019. +50 intégrations réalisées, taux de satisfaction 98%.</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium">Notre méthodologie "Quick Start" (4-12 semaines)</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li><strong>Semaine 1-2 :</strong> Audit processus + configuration modules prioritaires (CRM, Ventes, Compta)</li>
                        <li><strong>Semaine 3-6 :</strong> Paramétrage avancé + migration données + développements custom si nécessaire</li>
                        <li><strong>Semaine 7-8 :</strong> Formation équipes (par rôle) + documentation procédures</li>
                        <li><strong>Semaine 9-12 :</strong> Accompagnement post go-live + optimisations</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Nos spécialités Odoo</p>
                      <ul className="ml-4 space-y-1 mt-1">
                        <li>• Intégration e-commerce (Shopify/WooCommerce → Odoo stock/compta temps réel)</li>
                        <li>• Développement modules custom (workflows spécifiques, rapports avancés)</li>
                        <li>• APIs & connexions (banque, marketplace, transporteurs, etc.)</li>
                        <li>• Migration depuis autre ERP (Sage, Cegid, EBP, etc.)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Tarif all-inclusive :</strong> À partir de 4 900€ (PME 5 users, CRM + Ventes + Compta) jusqu'à 25K€ (ETI 50 users, 10+ modules, dév custom).</p>
                  <p className="mt-2 text-sm text-blue-400">→ <strong>Cas réel :</strong> E-commerce mode 12 personnes - Avant : Shopify + Pennylane + Excel + Trello (4 outils). Après : Odoo All-in-one. Résultat : -15h/semaine de saisies, stock sync temps réel, 0 erreur de facturation, ROI en 5 mois.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* SaaS */}
            <AccordionItem value="saas" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                SaaS : comment ça marche et quels avantages ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4"><strong className="text-white">SaaS (Software as a Service)</strong> est un modèle de distribution logicielle où l'application est <strong className="text-white">hébergée dans le cloud</strong> et accessible via Internet, facturée par abonnement (vs achat de licence perpétuelle).</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">☁️ Les 3 modèles cloud</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-blue-400 font-medium mb-1">SaaS (Software as a Service)</p>
                      <p className="text-xs mb-2">Application complète prête à l'emploi. Utilisateur final = focus métier, 0 gestion technique.</p>
                      <p className="text-xs"><strong>Exemples :</strong> Salesforce, Google Workspace, Slack, Netflix, Spotify</p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-violet-400 font-medium mb-1">PaaS (Platform as a Service)</p>
                      <p className="text-xs mb-2">Infrastructure + outils de développement. Développeur = déploie son code sans gérer serveurs.</p>
                      <p className="text-xs"><strong>Exemples :</strong> Heroku, Vercel, Google App Engine, AWS Elastic Beanstalk</p>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-emerald-400 font-medium mb-1">IaaS (Infrastructure as a Service)</p>
                      <p className="text-xs mb-2">Serveurs virtuels, stockage, réseau. DevOps = gère OS/logiciels mais pas hardware physique.</p>
                      <p className="text-xs"><strong>Exemples :</strong> AWS EC2, Google Compute Engine, Azure VMs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">⚙️ Fonctionnement technique SaaS</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium mb-1">Architecture multi-tenant</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• 1 seule instance de l'application sert tous les clients (vs on-premise = 1 install par client)</li>
                        <li>• Isolation des données par tenant (chaque client voit uniquement ses data)</li>
                        <li>• Mise à jour 1 fois → tous les clients en profitent instantanément</li>
                        <li>• Économies d'échelle massives (mutualisation infrastructure)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Accès via navigateur web ou API</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• Aucune installation locale (sauf apps mobiles optionnelles)</li>
                        <li>• Compatible tous OS (Windows, Mac, Linux, mobile)</li>
                        <li>• Accessible de partout avec connexion Internet</li>
                        <li>• Synchronisation temps réel entre devices</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Modèle économique récurrent</p>
                      <div className="bg-slate-950 p-2 rounded text-xs mt-1">
                        <p>❌ On-premise : Achat licence 10K€ + maintenance annuelle 20% = 12K€ sur 3 ans</p>
                        <p className="text-emerald-400 mt-1">✓ SaaS : 50€/mois × 36 mois = 1 800€ sur 3 ans (+ flexibilité d'arrêter à tout moment)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">✅ Les 8 avantages décisifs du SaaS</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">1.</span>
                      <div>
                        <p className="text-white font-medium">Coûts prévisibles & réduits</p>
                        <p className="text-xs">Pas d'investissement lourd initial. Abonnement mensuel/annuel → cash-flow maîtrisé.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">2.</span>
                      <div>
                        <p className="text-white font-medium">Time-to-market ultra-rapide</p>
                        <p className="text-xs">Inscription + configuration = opérationnel en quelques heures (vs plusieurs mois pour on-premise)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">3.</span>
                      <div>
                        <p className="text-white font-medium">Mises à jour automatiques</p>
                        <p className="text-xs">Nouvelles features, patchs de sécurité → déployés sans action utilisateur. Toujours la dernière version.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">4.</span>
                      <div>
                        <p className="text-white font-medium">Scalabilité élastique</p>
                        <p className="text-xs">Ajout/retrait d'utilisateurs en 1 clic. Infrastructure s'adapte automatiquement au traffic.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">5.</span>
                      <div>
                        <p className="text-white font-medium">Accessibilité anywhere, anytime</p>
                        <p className="text-xs">Télétravail, mobilité, multi-sites → accès depuis n'importe quel appareil connecté.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">6.</span>
                      <div>
                        <p className="text-white font-medium">Sécurité & Conformité</p>
                        <p className="text-xs">Éditeurs SaaS = experts sécu (firewall, encryption, ISO 27001, SOC 2). Mieux sécurisé que serveur PME.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">7.</span>
                      <div>
                        <p className="text-white font-medium">0 gestion infrastructure</p>
                        <p className="text-xs">Pas de serveurs à maintenir, backups automatiques, haute disponibilité (99.9% uptime).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-3 font-bold">8.</span>
                      <div>
                        <p className="text-white font-medium">Intégrations faciles</p>
                        <p className="text-xs">APIs ouvertes pour connecter CRM, ERP, compta, marketing, etc. Écosystème d'apps tierces.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">⚠️ Limites & précautions SaaS</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-400 font-medium">❌ Quand éviter le SaaS :</p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>• Données ultra-sensibles (défense, santé) avec impossibilité juridique d'externaliser</li>
                      <li>• Besoins de personnalisation extrême (SaaS = paramétrage limité vs on-premise = code modifiable)</li>
                      <li>• Pas de connexion Internet fiable dans vos locaux</li>
                      <li>• Contrôle total des données requis (souveraineté, RGPD strict)</li>
                    </ul>
                    <p className="mt-3 text-amber-400 font-medium">⚠️ Points de vigilance :</p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>• Vérifier la localisation des data centers (RGPD = data UE obligatoire pour certains secteurs)</li>
                      <li>• Lire les SLA (Service Level Agreements) : garantie de disponibilité, support</li>
                      <li>• Prévoir stratégie de sortie : export data possible ? Dans quel format ?</li>
                      <li>• Coûts cachés : intégrations, formation, consommation API peuvent faire grimper la facture</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🚀 Approche Gaussia : SaaS sur-mesure</h4>
                  <p className="mb-3">Nous développons des <strong className="text-white">SaaS B2B sur-mesure</strong> pour PME/ETI qui veulent leur propre plateforme :</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium">Cas typique : "SaaS vertical" (niche métier)</p>
                      <p className="text-xs mt-1">Vous avez un process métier spécifique, aucun SaaS du marché ne couvre 100% du besoin → on développe VOTRE SaaS.</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Notre stack technique SaaS</p>
                      <ul className="ml-4 space-y-1 mt-1 text-xs">
                        <li>• <strong>Frontend :</strong> Next.js + React + TailwindCSS (responsive web app)</li>
                        <li>• <strong>Backend :</strong> Node.js/Python + PostgreSQL + Redis</li>
                        <li>• <strong>Hébergement :</strong> AWS/GCP (multi-tenant architecture)</li>
                        <li>• <strong>Auth :</strong> SSO, 2FA, gestion rôles granulaire</li>
                        <li>• <strong>Paiement :</strong> Stripe intégré (abonnements récurrents)</li>
                        <li>• <strong>Monitoring :</strong> Sentry, DataDog (99.9% uptime garanti)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">De POC à SaaS en production</p>
                      <ul className="ml-4 space-y-1 mt-1 text-xs">
                        <li>• <strong>Phase 1 (4-6 sem) :</strong> MVP avec fonctionnalités core</li>
                        <li>• <strong>Phase 2 (6-8 sem) :</strong> Industrialisation (auth, billing, monitoring)</li>
                        <li>• <strong>Phase 3 (4 sem) :</strong> Beta testeurs + itérations</li>
                        <li>• <strong>Phase 4 :</strong> Lancement + support continu + roadmap évolutions</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Budget indicatif :</strong> 30-80K€ pour un SaaS B2B multi-tenant complet (vs 200K€+ avec ESN classique).</p>
                  <p className="mt-2 text-sm text-blue-400">→ <strong>Exemple :</strong> Client logistique - SaaS de gestion tournées livreurs. 50 clients B2B @ 99€/mois = 60K€ ARR. ROI développement atteint en 18 mois.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Scale entreprise */}
            <AccordionItem value="scale-entreprise" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Comment scaler (faire grandir) son entreprise efficacement ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4"><strong className="text-white">Scaler</strong> signifie <strong className="text-white">augmenter le CA sans augmenter proportionnellement les coûts</strong>. Objectif : marge opérationnelle croissante (+ de profits à chaque euro de CA supplémentaire).</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">📈 Les 7 piliers du scale</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="text-white font-medium">1. Automatisation massive</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Facturation, relances, reporting → automatisés (ERP, RPA)</li>
                        <li>• Support client niveau 1 → chatbot IA (80% tickets résolus)</li>
                        <li>• Workflows métiers → no-code/low-code (Zapier, Make, n8n)</li>
                      </ul>
                      <p className="text-xs text-blue-400 mt-1">Gain : -30% temps opérationnel en moyenne</p>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-3">
                      <p className="text-white font-medium">2. Standardisation des processus</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Documenter chaque process clé (playbooks, SOP)</li>
                        <li>• Utiliser des templates / checklists</li>
                        <li>• Onboarding nouveau salarié = processus réplicable</li>
                      </ul>
                      <p className="text-xs text-violet-400 mt-1">→ Permet de recruter et déléguer sans perte de qualité</p>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-3">
                      <p className="text-white font-medium">3. Data-driven : piloter par les chiffres</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Dashboards temps réel (CA, marge, tréso, KPIs métier)</li>
                        <li>• A/B testing systématique (prix, messaging, features)</li>
                        <li>• Analyse cohortes : quels clients sont rentables ?</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-3">
                      <p className="text-white font-medium">4. Pricing & Upsell / Cross-sell</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Augmenter les prix (test +10-20% : impact généralement nul sur volume)</li>
                        <li>• Créer tiers de pricing (Starter / Pro / Enterprise)</li>
                        <li>• Upsell : proposer packages premium aux clients existants</li>
                        <li>• Cross-sell : services complémentaires</li>
                      </ul>
                      <p className="text-xs text-amber-400 mt-1">Exemple : +20% prix = +20% marge sans coût supplémentaire</p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-3">
                      <p className="text-white font-medium">5. Infrastructure tech scalable</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• ERP dès 1M€ CA (Odoo) → évite le chaos à 10M€</li>
                        <li>• CRM structuré (Pipedrive, HubSpot) avec workflows automatiques</li>
                        <li>• Cloud élastique (AWS/GCP) vs serveurs physiques</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-3">
                      <p className="text-white font-medium">6. Acquisition : efficacité {'>'} volume</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Optimiser CAC (Coût d'Acquisition Client) : CAC &lt; LTV / 3</li>
                        <li>• Focus canaux rentables (SEO &gt; Ads souvent pour PME B2B)</li>
                        <li>• Referral programs : clients existants = meilleur canal</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-cyan-500 pl-3">
                      <p className="text-white font-medium">7. Délégation & recrutement stratégique</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Recruter APRES avoir automatisé/standardisé</li>
                        <li>• Profils A-players (+ chers mais 3x plus productifs)</li>
                        <li>• Externaliser non-core (compta, juridique, IT)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">⚠️ Les 3 erreurs fatales du scale</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-red-400 font-medium">❌ Erreur 1 : Recruter trop tôt</p>
                      <p className="text-xs">Passer de 5 à 15 personnes sans avoir optimisé les process = chaos + masse salariale insoutenable.</p>
                      <p className="text-xs text-emerald-400">✓ Solution : Automatiser PUIS recruter pour gérer la croissance</p>
                    </div>
                    <div>
                      <p className="text-red-400 font-medium">❌ Erreur 2 : Ignorer l'unit economics</p>
                      <p className="text-xs">Faire du CA sans regarder la marge = faillite assurée. Croissance ≠ rentabilité.</p>
                      <p className="text-xs text-emerald-400">✓ Solution : Suivre CAC, LTV, marge unitaire sur chaque produit/service</p>
                    </div>
                    <div>
                      <p className="text-red-400 font-medium">❌ Erreur 3 : Vouloir tout faire soi-même</p>
                      <p className="text-xs">Founder en burnout qui gère compta + RH + ops = croissance bloquée.</p>
                      <p className="text-xs text-emerald-400">✓ Solution : Déléguer, externaliser, utiliser SaaS. Focus sur l'essentiel : produit + clients</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🚀 Programme Scale de Gaussia</h4>
                  <p className="mb-3">Accompagnement PME/ETI pour passer de <strong className="text-white">1M€ à 10M€</strong> sans recruter 100 personnes :</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Audit complet processus + tech stack (1 semaine)</li>
                    <li>✓ Identification gains rapides (quick wins 0-3 mois)</li>
                    <li>✓ Automatisation workflows clés (facturation, support, reporting)</li>
                    <li>✓ Implémentation ERP/CRM si nécessaire (Odoo, Pipedrive)</li>
                    <li>✓ Formation équipes + documentation playbooks</li>
                    <li>✓ Suivi 12 mois avec KPIs Dashboard live</li>
                  </ul>
                  <p className="mt-3 text-sm text-blue-400">→ Exemple : Client services B2B 8 personnes, 1.5M€ CA. Après 6 mois : 3M€ CA, toujours 8 personnes. Marge opé passée de 15% à 32%.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Scale startup */}
            <AccordionItem value="scale-startup" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Comment scaler sa startup de 0 à 1M€ de CA ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">Passer de <strong className="text-white">0 à 1M€</strong> de CA requiert une <strong className="text-white">approche par phases</strong> avec des KPIs et priorités différentes à chaque stade.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🚀 Les 4 phases du scale startup</h4>
                  <div className="space-y-4 text-sm">
                    <div className="bg-slate-950 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">Phase 1 : Validation (0-50K€) - 3-6 mois</p>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="text-white font-medium">Objectif : Trouver le Product-Market Fit</p>
                          <ul className="ml-4 space-y-1 mt-1">
                            <li>• MVP (Minimum Viable Product) en 4-8 semaines max</li>
                            <li>• Tester avec 10-20 early adopters (gratuit ou prix symbolique)</li>
                            <li>• Itérer rapidement selon feedback (1 sprint = 1 amélioration)</li>
                            <li>• Focus : apprendre, pivoter si nécessaire</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-white font-medium mt-2">KPIs critiques :</p>
                          <ul className="ml-4 space-y-1">
                            <li>• Rétention {'>'} 40% à 30 jours (si {'<'} 20% = pas de PMF)</li>
                            <li>• NPS (Net Promoter Score) {'>'} 50</li>
                            <li>• Temps d'activation {'<'} 10 min (onboarding fluide)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-white font-medium mt-2">Stack minimaliste :</p>
                          <p className="ml-4">No-code/low-code (Bubble, Webflow) ou Next.js + Supabase. 0€/mois d'infra.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded">
                      <p className="text-violet-400 font-semibold mb-2">Phase 2 : Traction (50K-200K€) - 6-12 mois</p>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="text-white font-medium">Objectif : Premiers revenus récurrents</p>
                          <ul className="ml-4 space-y-1 mt-1">
                            <li>• Passer de beta gratuite à pricing payant</li>
                            <li>• Acquérir 50-100 premiers clients payants</li>
                            <li>• Structurer acquisition (SEO, content, cold outreach)</li>
                            <li>• Recruter 1-2 profils clés (dev + commercial/marketing)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-white font-medium mt-2">KPIs critiques :</p>
                          <ul className="ml-4 space-y-1">
                            <li>• MRR (Monthly Recurring Revenue) growth {'>'} 20%/mois</li>
                            <li>• CAC (Coût Acquisition Client) {'<'} 3x MRR moyen</li>
                            <li>• Churn {'<'} 5%/mois (si {'>'} 10% = problème produit)</li>
                            <li>• Runway (trésorerie) {'>'} 12 mois</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-white font-medium mt-2">Outils essentiels :</p>
                          <ul className="ml-4 space-y-1">
                            <li>• CRM : Pipedrive ou HubSpot (suivi commercial)</li>
                            <li>• Analytics : Mixpanel ou Amplitude (usage produit)</li>
                            <li>• Paiements : Stripe (abonnements récurrents)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded">
                      <p className="text-emerald-400 font-semibold mb-2">Phase 3 : Accélération (200K-500K€) - 12-18 mois</p>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="text-white font-medium">Objectif : Scalabilité des process</p>
                          <ul className="ml-4 space-y-1 mt-1">
                            <li>• Automatiser maximum (marketing, onboarding, support)</li>
                            <li>• Industrialiser l'acquisition (ads, partenariats, SEO)</li>
                            <li>• Structurer l'équipe (5-8 personnes)</li>
                            <li>• Lever fonds si besoin (ou bootstrapper si marge élevée)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-white font-medium mt-2">KPIs critiques :</p>
                          <ul className="ml-4 space-y-1">
                            <li>• CAC payback {'<'} 12 mois (rentabilité client en 1 an)</li>
                            <li>• LTV/CAC {'>'} 3 (chaque euro investi rapporte 3€)</li>
                            <li>• Net Revenue Retention {'>'} 100% (upsell {'>'} churn)</li>
                            <li>• Burn multiple {'<'} 1.5 (efficacité dépenses)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-white font-medium mt-2">Investissements tech :</p>
                          <ul className="ml-4 space-y-1">
                            <li>• ERP léger (Odoo) pour facturation + compta automatisée</li>
                            <li>• Marketing automation (Brevo, Lemlist)</li>
                            <li>• Customer success platform (Intercom, Crisp)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded">
                      <p className="text-amber-400 font-semibold mb-2">Phase 4 : Scale (500K-1M€+) - 18-30 mois</p>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="text-white font-medium">Objectif : Croissance exponentielle</p>
                          <ul className="ml-4 space-y-1 mt-1">
                            <li>• Multiplier les canaux d'acquisition (ne pas dépendre d'1 seul)</li>
                            <li>• Internationalisation si pertinent</li>
                            <li>• Équipe 10-20 personnes avec middle management</li>
                            <li>• Levée Série A (1-5M€) si hyper-croissance visée</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-white font-medium mt-2">KPIs critiques :</p>
                          <ul className="ml-4 space-y-1">
                            <li>• ARR (Annual Recurring Revenue) {'>'} 1M€</li>
                            <li>• Rule of 40 : Growth% + Profit% {'>'} 40</li>
                            <li>• Magic Number {'>'} 0.75 (efficacité sales & marketing)</li>
                            <li>• Gross Margin {'>'} 70% (modèle SaaS sain)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">💡 Les 5 erreurs qui tuent les startups</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-400 font-medium">❌ 1. Construire sans valider (18 mois de dev → 0 client)</p>
                    <p className="text-xs">→ Solution : MVP en 2 mois, vendre AVANT de construire (landing page + pré-ventes)</p>
                    
                    <p className="text-red-400 font-medium mt-2">❌ 2. Ignorer les métriques (vanity metrics vs actionable metrics)</p>
                    <p className="text-xs">→ Solution : Focus MRR, churn, CAC, LTV. Le reste est accessoire.</p>
                    
                    <p className="text-red-400 font-medium mt-2">❌ 3. Recruter trop tôt (salaires = #1 cause de mort des startups)</p>
                    <p className="text-xs">→ Solution : Bootstrapper tant que possible. Freelances {'>'} CDI en early stage.</p>
                    
                    <p className="text-red-400 font-medium mt-2">❌ 4. Négliger le customer success (churn élevé = startup morte)</p>
                    <p className="text-xs">→ Solution : Onboarding impeccable. Si churn {'>'} 5%/mois, TOUT arrêter et fixer ça.</p>
                    
                    <p className="text-red-400 font-medium mt-2">❌ 5. Vouloir tout faire en interne (réinventer la roue)</p>
                    <p className="text-xs">→ Solution : Utiliser SaaS existants (Stripe, Vercel, Supabase). Dev only ce qui différencie.</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🚀 Programme Startup de Gaussia</h4>
                  <p className="mb-3">Accompagnement <strong className="text-white">0 → 1M€ en 18-24 mois</strong> avec notre méthodologie éprouvée :</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ <strong className="text-white">Phase MVP (Mois 1-2) :</strong> Développement rapide Next.js + Supabase. Landing page + beta testeurs.</li>
                    <li>✓ <strong className="text-white">Phase PMF (Mois 3-6) :</strong> Itérations produit. Analytics avancés. Pricing strategy.</li>
                    <li>✓ <strong className="text-white">Phase Growth (Mois 7-12) :</strong> Stack acquisition (SEO, ads, cold outreach). Automatisations sales.</li>
                    <li>✓ <strong className="text-white">Phase Scale (Mois 13-24) :</strong> ERP Odoo. Marketing automation. Team structuring.</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong className="text-white">Tarif :</strong> 15-30K€ selon phase (ou equity 2-5% pour pre-seed).</p>
                  <p className="mt-2 text-sm text-blue-400">→ <strong>Success story :</strong> Startup SaaS RH - Accompagnement 20 mois. 0€ → 850K€ ARR. Série A de 3M€ levée. Équipe passée de 2 founders à 12 personnes.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Agent IA */}
            <AccordionItem value="agent-ia" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Un agent IA, comment ça marche et comment l'implémenter ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">Un <strong className="text-white">agent IA</strong> est un système logiciel <strong className="text-white">autonome</strong> capable de <strong className="text-white">percevoir son environnement, prendre des décisions et agir</strong> pour atteindre un objectif, avec une intervention humaine minimale.</p>
                
                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🧠 Architecture d'un agent IA (boucle OODA)</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-blue-400 font-medium mb-1">1. Perception (Observe)</p>
                      <p className="text-xs mb-2">L'agent collecte des données de son environnement :</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• APIs (CRM, ERP, emails, Slack, etc.)</li>
                        <li>• Bases de données (PostgreSQL, MongoDB)</li>
                        <li>• Capteurs IoT (température, stock, machines)</li>
                        <li>• Inputs utilisateurs (chat, formulaires)</li>
                      </ul>
                    </div>

                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-violet-400 font-medium mb-1">2. Compréhension (Orient)</p>
                      <p className="text-xs mb-2">Traitement des données avec IA :</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• <strong>LLMs</strong> (GPT-4, Claude) : compréhension langage naturel</li>
                        <li>• <strong>RAG</strong> (Retrieval-Augmented Generation) : recherche dans base de connaissances (Vector DB)</li>
                        <li>• <strong>ML classique</strong> : classification, régression, clustering</li>
                        <li>• <strong>Règles métiers</strong> : if/then pour décisions déterministes</li>
                      </ul>
                    </div>

                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-emerald-400 font-medium mb-1">3. Décision (Decide)</p>
                      <p className="text-xs mb-2">L'agent choisit l'action optimale :</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• <strong>Prompt engineering</strong> : guîder le LLM vers bonne décision</li>
                        <li>• <strong>Function calling</strong> : LLM décide quel outil utiliser (envoyer email, créer ticket, etc.)</li>
                        <li>• <strong>Confidence scoring</strong> : si incertitude {'>'} seuil → escalade vers humain</li>
                      </ul>
                      <div className="bg-slate-900 p-2 rounded font-mono text-xs mt-2">
                        <p className="text-gray-500">// Exemple : Agent support client</p>
                        <p>if (question_type == "FAQ") answer_from_kb()</p>
                        <p>elif (question_type == "bug") create_ticket()</p>
                        <p>else escalate_to_human()</p>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-amber-400 font-medium mb-1">4. Action (Act)</p>
                      <p className="text-xs mb-2">Exécution concrète via APIs :</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• Envoyer email/SMS (SendGrid, Twilio)</li>
                        <li>• Créer/modifier entrées BDD (SQL, NoSQL)</li>
                        <li>• Appeler API externe (CRM, ERP, paiement)</li>
                        <li>• Déclencher workflow (Zapier, Make, n8n)</li>
                      </ul>
                    </div>

                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-red-400 font-medium mb-1">5. Apprentissage (Learn)</p>
                      <p className="text-xs mb-2">Amélioration continue :</p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• <strong>Feedback loop</strong> : utilisateur valide/rejette action agent</li>
                        <li>• <strong>Fine-tuning</strong> : ré-entraînement modèle sur nouvelles données</li>
                        <li>• <strong>A/B testing</strong> : tester variantes prompts/actions</li>
                        <li>• <strong>Logging</strong> : analyser erreurs pour améliorer prompts/règles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🛠️ Stack technique agent IA (2024)</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium mb-2">LLM Providers</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>OpenAI</strong> (GPT-4) : Le plus puissant, coûteux (~0.03$/1K tokens)</li>
                        <li>• <strong>Anthropic</strong> (Claude 3) : Meilleur en raisonnement, large context (200K tokens)</li>
                        <li>• <strong>Mistral</strong> (Mixtral 8x7B) : Open-source, rapport qualité/prix excellent</li>
                        <li>• <strong>Llama 3</strong> (Meta) : Auto-hébergeable, gratuit, bon pour RAG</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-2">Frameworks orchestration</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>LangChain</strong> (Python/TypeScript) : Le plus complet, beaucoup d'intégrations</li>
                        <li>• <strong>LlamaIndex</strong> : Spécialisé RAG (recherche dans documents)</li>
                        <li>• <strong>AutoGPT / BabyAGI</strong> : Agents autonomes multi-étapes</li>
                        <li>• <strong>LangGraph</strong> : Workflows complexes avec state machine</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-2">Vector Databases (pour RAG)</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>Pinecone</strong> : SaaS simple, scalable (0.70$/1M vecteurs)</li>
                        <li>• <strong>Weaviate</strong> : Open-source, auto-hébergeable</li>
                        <li>• <strong>Qdrant</strong> : Performant, Rust, open-source</li>
                        <li>• <strong>pgvector</strong> : Extension PostgreSQL (gratuit, pratique si déjà Postgres)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-medium mb-2">Monitoring & Observability</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>LangSmith</strong> : Debug traces LLM, optimisation prompts</li>
                        <li>• <strong>Weights & Biases</strong> : Tracking expérimentations ML</li>
                        <li>• <strong>Helicone</strong> : Monitoring coûts + latence APIs LLM</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                  <h4 className="text-white font-semibold mb-3">🚀 Exemples d'agents IA en production</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="text-white font-medium">Agent Support Client 24/7</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Perception : Message utilisateur (chat, email)</li>
                        <li>• Compréhension : RAG sur base de connaissances (FAQ, docs produit)</li>
                        <li>• Décision : Répondre directement ou créer ticket si complexe</li>
                        <li>• Action : Envoyer réponse + créer ticket dans Intercom/Zendesk si besoin</li>
                      </ul>
                      <p className="text-xs text-blue-400 mt-1">ROI : 80% tickets niveau 1 résolus automatiquement = -70% charge support</p>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-3">
                      <p className="text-white font-medium">Agent Qualification Leads</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Perception : Email/formulaire prospect entrant</li>
                        <li>• Compréhension : Extraction infos (secteur, budget, timing) + scoring</li>
                        <li>• Décision : Lead qualifié ou non ? Urgence ?</li>
                        <li>• Action : Créer opportunité CRM + assigner au bon commercial + envoyer email automatisé</li>
                      </ul>
                      <p className="text-xs text-violet-400 mt-1">ROI : Temps de réponse lead {'<'} 5 min (vs 2h avant) = +40% taux conversion</p>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-3">
                      <p className="text-white font-medium">Agent Monitoring IT</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Perception : Métriques serveurs (CPU, RAM, disk, logs)</li>
                        <li>• Compréhension : Détection anomalies (ML) + analyse logs</li>
                        <li>• Décision : Niveau gravité ? Action corrective possible ?</li>
                        <li>• Action : Restart service si possible, sinon alerte DevOps avec contexte complet</li>
                      </ul>
                      <p className="text-xs text-emerald-400 mt-1">ROI : -60% incidents en production, MTTR (Mean Time To Repair) divisé par 3</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">🤖 Implémentation agents IA par Gaussia</h4>
                  <p className="mb-3">Méthodologie <strong className="text-white">POC → MVP → Production</strong> en 4-8 semaines :</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white font-medium">Semaine 1-2 : POC (Proof of Concept)</p>
                      <ul className="ml-4 space-y-1 mt-1 text-xs">
                        <li>• Atelier use case : définir objectif, inputs, outputs, seuils succès</li>
                        <li>• Prototype rapide LangChain + GPT-4</li>
                        <li>• Tests sur 10-20 cas réels</li>
                        <li>• Décision Go/No-Go basée sur accuracy (&gt;80% attendu)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Semaine 3-4 : MVP</p>
                      <ul className="ml-4 space-y-1 mt-1 text-xs">
                        <li>• Intégration APIs (CRM, ERP, communication)</li>
                        <li>• RAG si nécessaire : ingérer docs dans Vector DB</li>
                        <li>• Interface admin pour monitorer agent + human-in-the-loop</li>
                        <li>• Beta test avec 2-3 utilisateurs internes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Semaine 5-8 : Production</p>
                      <ul className="ml-4 space-y-1 mt-1 text-xs">
                        <li>• Déploiement scalable (Docker + Kubernetes ou serverless)</li>
                        <li>• Monitoring avancé (LangSmith, Sentry)</li>
                        <li>• Feedback loop : utilisateurs peuvent corriger agent</li>
                        <li>• Fine-tuning continu sur nouveaux cas</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Stack Gaussia :</strong> LangChain + Claude 3 (raisonnement) / GPT-4 (généraliste) + Pinecone (RAG) + FastAPI + Next.js (interface admin)</p>
                  <p className="mt-2 text-sm text-blue-400">→ <strong>Cas client :</strong> E-commerce mode - Agent support 24/7. 4 semaines POC → MVP. Résultat : 85% tickets résolus sans humain, CSAT 4.6/5, ROI en 3 mois.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cas d'usage IA */}
            <AccordionItem value="cas-usage-ia" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-blue-400">
                Quels sont les cas d'usage concrets de l'IA en entreprise ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-4">L'IA n'est plus réservée aux GAFA. Voici <strong className="text-white">15 cas d'usage à fort ROI</strong> (3-12 mois) déployables en PME/ETI :</p>
                
                <div className="space-y-4 text-sm">
                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-3">🤖 Automatisation (gains 20-40%)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white font-medium">1. Génération automatique de devis/propositions</p>
                        <p className="text-xs mt-1">Prompt AI + templates → Devis personnalisé en 2 min (vs 30 min manuellement)</p>
                        <p className="text-xs text-blue-400">Stack : GPT-4 + base produits + pricing rules | ROI : 3 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">2. OCR intelligent factures/documents</p>
                        <p className="text-xs mt-1">Extraction données (montant, TVA, date, fournisseur) + saisie auto ERP</p>
                        <p className="text-xs text-blue-400">Stack : Tesseract OCR + GPT-4 Vision + validation rules | ROI : 4 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">3. Classification & routage emails</p>
                        <p className="text-xs mt-1">Trier emails entrants (support/commercial/RH) + assigner automatiquement</p>
                        <p className="text-xs text-blue-400">Stack : BERT classification + Zapier/Make | ROI : 2 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">4. Génération rapports automatiques</p>
                        <p className="text-xs mt-1">Analyser data (ventes, KPIs) + générer rapport exécutif en langage naturel</p>
                        <p className="text-xs text-blue-400">Stack : GPT-4 + Pandas + Plotly | ROI : 6 mois</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-violet-400 font-semibold mb-3">📊 Prédiction (gains 15-30%)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white font-medium">5. Prévision ventes / demand forecasting</p>
                        <p className="text-xs mt-1">Prédire ventes futures (3-12 mois) pour optimiser achats/production/stocks</p>
                        <p className="text-xs text-violet-400">Stack : Prophet/XGBoost + historique ventes + saisonnalité | ROI : 6 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">6. Détection churn client (prédire désabonnements)</p>
                        <p className="text-xs mt-1">Identifier clients à risque de partir → action rétention proactive</p>
                        <p className="text-xs text-violet-400">Stack : Random Forest + features usage/paiement/support | ROI : 4 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">7. Maintenance prédictive équipements/machines</p>
                        <p className="text-xs mt-1">Anticiper pannes via capteurs IoT → maintenance avant casse (vs réparation urgente)</p>
                        <p className="text-xs text-violet-400">Stack : LSTM/Anomaly Detection + data capteurs | ROI : 8 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">8. Optimisation stocks (éviter rupture + surstock)</p>
                        <p className="text-xs mt-1">Prédire demande par SKU → ajuster réappro automatiquement</p>
                        <p className="text-xs text-violet-400">Stack : Time Series ML + ERP intégration | ROI : 6 mois</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-emerald-400 font-semibold mb-3">💬 Support Client (gains 60-80%)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white font-medium">9. Chatbot intelligent 24/7 multilingue</p>
                        <p className="text-xs mt-1">Résoudre 80% tickets niveau 1 (FAQ, tracking commande, reset MDP) sans humain</p>
                        <p className="text-xs text-emerald-400">Stack : GPT-4 + RAG (Vector DB) + escalade humain si complexe | ROI : 3 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">10. Analyse sentiment client (avis, tickets, réseaux sociaux)</p>
                        <p className="text-xs mt-1">Détecter insatisfaction/buzz négatif en temps réel → réaction rapide</p>
                        <p className="text-xs text-emerald-400">Stack : BERT Sentiment Analysis + alertes | ROI : 5 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">11. Résumés automatiques de tickets/conversations</p>
                        <p className="text-xs mt-1">Synthétiser ticket long (emails multiples) en 3 phrases pour agent</p>
                        <p className="text-xs text-emerald-400">Stack : GPT-4 summarization | ROI : 2 mois</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="text-amber-400 font-semibold mb-3">🎯 Marketing & Commercial (gains 25-50%)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white font-medium">12. Génération contenu (blogs, posts LinkedIn, newsletters)</p>
                        <p className="text-xs mt-1">Créer 10 articles SEO/mois en 1h (vs 20h manuellement). Gain traffic organique +40%</p>
                        <p className="text-xs text-amber-400">Stack : GPT-4 + SEO keywords + brand guidelines | ROI : 4 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">13. Segmentation clients avancée (RFM + comportement)</p>
                        <p className="text-xs mt-1">Clustering ML pour créer segments ultra-précis → campagnes personnalisées</p>
                        <p className="text-xs text-amber-400">Stack : K-means/DBSCAN + CRM data | ROI : 6 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">14. Lead scoring automatique (prioriser commerciaux)</p>
                        <p className="text-xs mt-1">Score 0-100 pour chaque lead (probabilité conversion) → focus meilleurs prospects</p>
                        <p className="text-xs text-amber-400">Stack : Logistic Regression + features firmographics/behavior | ROI : 5 mois</p>
                      </div>
                      <div>
                        <p className="text-white font-medium">15. Recommandations personnalisées (upsell/cross-sell)</p>
                        <p className="text-xs mt-1">\"Les clients qui ont acheté X ont aussi acheté Y\" → augmente panier moyen +20%</p>
                        <p className="text-xs text-amber-400">Stack : Collaborative Filtering + Historique achats | ROI : 4 mois</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg mt-4">
                  <h4 className="text-white font-semibold mb-3">💰 ROI moyen & Timeframes</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-emerald-400 font-medium mb-1">Quick Wins (2-4 mois)</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Classification emails</li>
                        <li>• Résumés tickets</li>
                        <li>• Chatbot FAQ</li>
                      </ul>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-blue-400 font-medium mb-1">Gains moyens (4-6 mois)</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Génération devis/contenu</li>
                        <li>• Lead scoring</li>
                        <li>• Détection churn</li>
                        <li>• OCR factures</li>
                      </ul>
                    </div>
                    <div className="bg-slate-950 p-3 rounded">
                      <p className="text-amber-400 font-medium mb-1">Projets longs (6-12 mois)</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Prévision ventes</li>
                        <li>• Maintenance prédictive</li>
                        <li>• Optimisation stocks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg mt-4">
                  <h4 className="text-blue-400 font-semibold mb-2">🔬 Méthodologie Gaussia IA</h4>
                  <p className="mb-3">Notre process <strong className="text-white\">\"Audit → POC → Production\"</strong> garantit un ROI mesurable :</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-white font-medium">Jour 1 : Audit IA (gratuit)</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Cartographie processus métier (où perd-on du temps ?)</li>
                        <li>• Identification 3-5 cas d'usage à fort impact</li>
                        <li>• Estimation ROI + faisabilité technique</li>
                        <li>• Roadmap 6-18 mois priorisée</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Semaines 2-4 : POC (Proof of Concept)</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Développement prototype sur 1 use case prioritaire</li>
                        <li>• Tests sur vraies données client (50-100 exemples)</li>
                        <li>• Mesure accuracy/performance : Go/No-Go si {'>'} 80%</li>
                        <li>• Budget : 3-8K€ selon complexité</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Semaines 5-12 : MVP → Production</p>
                      <ul className="ml-4 space-y-1 text-xs mt-1">
                        <li>• Industrialisation (API, interface, monitoring)</li>
                        <li>• Intégration SI existant (ERP, CRM, etc.)</li>
                        <li>• Formation équipes + documentation</li>
                        <li>• Suivi ROI mensuel pendant 6 mois</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><strong className="text-white">Projets IA réalisés :</strong> +40 depuis 2021. Taux de succès : 92% (Go to Prod). ROI moyen : 5.2 mois.</p>
                  <p className="mt-2 text-sm text-blue-400">→ <strong>Exemple :</strong> Distributeur BtoB 80 personnes - Chatbot support 24/7 + Lead scoring + Prévision ventes. Investissement : 45K€. Gains annuels : 180K€. ROI : 3 mois. 2 ETP économisés.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Audit IA CTA */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ce que disent nos clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic">
                  "Gaussia a transformé notre gestion avec Odoo. +30% de productivité en 3 mois et une visibilité totale sur nos opérations."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">PM</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Pierre Martin</p>
                    <p className="text-gray-500 text-sm">DG, PME Industrielle</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic">
                  "L'audit IA nous a ouvert les yeux sur les opportunités d'automatisation. Le ROI est visible dès le premier trimestre."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-violet-400 font-bold">SD</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Sophie Dupont</p>
                    <p className="text-gray-500 text-sm">COO, ETI Services</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic">
                  "Notre application mobile a été livrée en 10 semaines. Qualité irréprochable et équipe très réactive."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-400 font-bold">LB</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Laurent Bernard</p>
                    <p className="text-gray-500 text-sm">Fondateur, Startup Santé</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

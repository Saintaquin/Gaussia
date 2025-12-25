"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
    gradient: "from-blue-600 to-cyan-600",
    icon: "🚀"
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
    gradient: "from-violet-600 to-purple-600",
    icon: "⚡"
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
    gradient: "from-orange-600 to-red-600",
    icon: "🧪"
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
    gradient: "from-green-600 to-emerald-600",
    icon: "🌐"
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
    gradient: "from-indigo-600 to-blue-600",
    icon: "🏢"
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
    gradient: "from-pink-600 to-rose-600",
    icon: "🔧"
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
    gradient: "from-yellow-600 to-orange-600",
    icon: "⛓️"
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
    gradient: "from-teal-600 to-cyan-600",
    icon: "🤖"
  }
]

export default function PricingPage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused || isDragging) return

    let animationId: number
    let currentScroll = scrollContainer.scrollLeft

    const animate = () => {
      if (!isPaused && !isDragging) {
        currentScroll += 0.5 // Vitesse du défilement
        
        // Reset quand on arrive à la fin
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

  // Drag to scroll handlers
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
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Des solutions adaptées à chaque projet, avec des prix transparents et sans surprise
            </p>
            <p className="text-sm text-gray-500">
              💡 Faites glisser les cartes pour naviguer
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Cards Section */}
      <section className="py-16 bg-slate-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Découvrez nos offres</h2>
          <p className="text-gray-400">
            Survolez les cartes pour les explorer • Faites glisser pour naviguer
          </p>
        </div>

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
          {/* Duplicate cards for infinite loop effect */}
          {[...pricingOffers, ...pricingOffers].map((offer, index) => (
            <Card
              key={index}
              className={`
                flex-shrink-0 w-[380px] bg-gradient-to-br ${offer.gradient} 
                border-0 shadow-2xl transform transition-all duration-300 
                hover:scale-105 hover:rotate-1 hover:shadow-3xl
                relative overflow-hidden
                select-none
              `}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8 relative z-10">
                {/* Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">
                    {offer.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6 pb-6 border-b border-white/20">
                  <div className="text-3xl font-bold text-white">
                    {offer.price}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-center mb-6 text-sm">
                  {offer.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
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

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 transform rotate-45 translate-x-10 -translate-y-10" />
            </Card>
          ))}
        </div>

        {/* Manual scroll indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {pricingOffers.map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full bg-white/30"
            />
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Devis sur-mesure</h3>
                <p className="text-gray-400 text-sm">
                  Chaque projet est unique. Nous analysons vos besoins pour vous proposer une solution adaptée.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Livraison rapide</h3>
                <p className="text-gray-400 text-sm">
                  Méthode agile avec livrables tous les 15 jours. Vous suivez l'avancement en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Garantie qualité</h3>
                <p className="text-gray-400 text-sm">
                  Support inclus après livraison. Nous vous accompagnons sur le long terme.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Discutons de votre projet et trouvons ensemble la meilleure solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/expertises/audit-ia">
                Audit IA gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

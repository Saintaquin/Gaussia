import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, TrendingUp, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">clients & références</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Des PME et ETI qui ont transformé leur activité avec nos solutions digitales
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">98%</div>
              <div className="text-gray-400 mt-2">Satisfaction client</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">+40%</div>
              <div className="text-gray-400 mt-2">Gain productivité moyen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">50+</div>
              <div className="text-gray-400 mt-2">Projets livrés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">&lt;18 mois</div>
              <div className="text-gray-400 mt-2">ROI moyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Études de cas</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Cas 1 : ERP PME Industrielle */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">+30%</div>
                    <div className="text-gray-300 mt-2">Productivité</div>
                  </div>
                </div>
                <CardContent className="p-8 lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm mb-4">ERP / Odoo</div>
                  <h3 className="text-2xl font-bold text-white mb-4">PME Industrielle · Intégration Odoo complète</h3>
                  <div className="space-y-4 text-gray-400">
                    <div>
                      <strong className="text-white">Contexte :</strong> PME de 45 personnes spécialisée dans la fabrication de pièces industrielles. 
                      Gestion sur Excel, pas de visibilité sur les stocks, problèmes de synchronisation entre les équipes.
                    </div>
                    <div>
                      <strong className="text-white">Solution :</strong> Déploiement d'Odoo avec modules Fabrication, Stocks, Achats, Ventes, Comptabilité. 
                      Formation de 30 utilisateurs, développement de 2 modules sur-mesure pour leurs processus spécifiques.
                    </div>
                    <div>
                      <strong className="text-white">Résultats :</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>+30% de productivité des équipes</li>
                        <li>-50% d'erreurs de saisie</li>
                        <li>Visibilité temps réel sur les stocks et la production</li>
                        <li>ROI atteint en 14 mois</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Cas 2 : Plateforme SaaS */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-violet-600/20 to-pink-600/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">10 sem.</div>
                    <div className="text-gray-300 mt-2">Délai livraison</div>
                  </div>
                </div>
                <CardContent className="p-8 lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm mb-4">Développement Web</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Startup Tech · Plateforme SaaS RH</h3>
                  <div className="space-y-4 text-gray-400">
                    <div>
                      <strong className="text-white">Contexte :</strong> Startup RH souhaitant digitaliser le processus d'onboarding des nouveaux employés. 
                      Besoin d'une plateforme complète : parcours personnalisés, gestion documentaire, intégrations SIRH.
                    </div>
                    <div>
                      <strong className="text-white">Solution :</strong> Développement d'une plateforme SaaS avec React/Next.js (front) et Node.js (back). 
                      Intégrations avec 5 SIRH majeurs, système de workflows personnalisables, tableau de bord analytics.
                    </div>
                    <div>
                      <strong className="text-white">Résultats :</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Plateforme livrée en 10 semaines</li>
                        <li>500+ entreprises clientes en 6 mois</li>
                        <li>-70% de temps d'onboarding pour les RH</li>
                        <li>Note de satisfaction : 4.8/5</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Cas 3 : MVP No-Code */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">3 sem.</div>
                    <div className="text-gray-300 mt-2">MVP déployé</div>
                  </div>
                </div>
                <CardContent className="p-8 lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">No-Code</div>
                  <h3 className="text-2xl font-bold text-white mb-4">ETI Services · Outil de gestion de flotte</h3>
                  <div className="space-y-4 text-gray-400">
                    <div>
                      <strong className="text-white">Contexte :</strong> ETI avec 200 véhicules souhaitant tester un nouvel outil de gestion de flotte 
                      avant d'investir dans un développement lourd. Budget et délai contraints.
                    </div>
                    <div>
                      <strong className="text-white">Solution :</strong> MVP développé en no-code (Bubble) : suivi véhicules, planning maintenance, 
                      gestion sinistres, tableaux de bord. Test sur 50 véhicules pendant 3 mois.
                    </div>
                    <div>
                      <strong className="text-white">Résultats :</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>MVP livré en 3 semaines</li>
                        <li>Concept validé par les utilisateurs</li>
                        <li>Passage en phase 2 : développement sur-mesure</li>
                        <li>Économie de 40k€ vs développement immédiat</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Cas 4 : Projet IA */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">15h/sem</div>
                    <div className="text-gray-300 mt-2">Temps gagné</div>
                  </div>
                </div>
                <CardContent className="p-8 lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm mb-4">Intelligence Artificielle</div>
                  <h3 className="text-2xl font-bold text-white mb-4">PME E-commerce · Automatisation IA</h3>
                  <div className="space-y-4 text-gray-400">
                    <div>
                      <strong className="text-white">Contexte :</strong> E-commerce avec catalogue de 5000 produits. Équipe passant 20h/semaine 
                      à rédiger des descriptions produits et répondre aux questions clients.
                    </div>
                    <div>
                      <strong className="text-white">Solution :</strong> Audit IA révélant 3 cas d'usage. Déploiement de : génération automatique 
                      de descriptions (GPT-4), chatbot FAQ intelligent, catégorisation automatique des produits.
                    </div>
                    <div>
                      <strong className="text-white">Résultats :</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>15h/semaine gagnées sur les tâches répétitives</li>
                        <li>80% des questions clients résolues automatiquement</li>
                        <li>+25% de conversion grâce aux meilleures descriptions</li>
                        <li>ROI en 6 mois</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Témoignages clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                text: "Gaussia a transformé notre gestion avec Odoo. L'équipe est professionnelle et à l'écoute. ROI atteint en 14 mois.",
                author: "Pierre Martin",
                role: "DG, PME Industrielle"
              },
              {
                stars: 5,
                text: "Notre plateforme SaaS livrée en 10 semaines avec une qualité irréprochable. L'équipe est réactive et force de proposition.",
                author: "Sophie Dupont",
                role: "CEO, Startup RH"
              },
              {
                stars: 5,
                text: "L'audit IA a révélé des opportunités que nous n'avions pas identifiées. Résultats concrets dès le premier trimestre.",
                author: "Laurent Bernard",
                role: "COO, E-commerce"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-slate-900 border-slate-800">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.stars)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vous souhaitez voir votre entreprise ici ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et construisons ensemble votre success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
              <Link href="/contact">
                Parler à un expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              <Link href="/expertises/audit-ia">Audit IA gratuit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

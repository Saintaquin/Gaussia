import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Lightbulb, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Gaussia</span>, votre partenaire de transformation digitale
            </h1>
            <p className="text-xl text-gray-400">
              Nous aidons les PME et ETI à devenir leaders de leur secteur grâce à des solutions digitales sur-mesure
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Notre histoire</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Gaussia est né de la conviction que les PME et ETI méritent le même niveau d'expertise digitale 
                  que les grandes entreprises, sans les coûts et la complexité qui vont souvent avec.
                </p>
                <p>
                  Fondée par trois experts complémentaires — développement, IA et ERP — Gaussia propose une approche 
                  unique : des solutions technologiques de pointe, adaptées aux réalités des entreprises de taille intermédiaire.
                </p>
                <p>
                  Notre nom, inspiré de Carl Friedrich Gauss, mathématicien qui a révolutionné de nombreux domaines 
                  par des solutions élégantes et efficaces, reflète notre philosophie : transformer la complexité en simplicité.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-slate-700 overflow-hidden bg-slate-800">
                <Image 
                  src="/gaussia.jpg" 
                  alt="Gaussia" 
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre vision */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Notre vision</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Démocratiser l'accès aux meilleures technologies pour les PME et ETI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-800 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Orientés résultats</h3>
                <p className="text-gray-400">
                  Chaque projet doit générer un ROI mesurable. Nous ne développons pas de la technologie pour 
                  la technologie, mais pour résoudre des problèmes concrets.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation pragmatique</h3>
                <p className="text-gray-400">
                  Nous restons à la pointe des technologies (IA, cloud, no-code) tout en privilégiant des solutions 
                  éprouvées et maintenables.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Partenariat long terme</h3>
                <p className="text-gray-400">
                  Nous ne sommes pas juste un prestataire, mais un partenaire de votre croissance. Nous vous 
                  accompagnons dans la durée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Gaussia en chiffres</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-2">50+</div>
              <p className="text-gray-400">Projets livrés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-2">98%</div>
              <p className="text-gray-400">Satisfaction client</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-2">+40%</div>
              <p className="text-gray-400">Gain productivité moyen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-2">3M€</div>
              <p className="text-gray-400">Impact économique généré</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Rencontrons-nous pour discuter de vos enjeux et voir comment Gaussia peut vous aider.
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

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Smartphone, Apple, Blocks, CheckCircle2, Heart, DollarSign, Dumbbell, Car, Activity, Shield } from "lucide-react"
import Link from "next/link"

export default function MobilePage() {
  const sectors = [
    { name: "Finance", icon: DollarSign, color: "blue", description: "Applications bancaires, fintech, gestion de patrimoine" },
    { name: "Sport", icon: Dumbbell, color: "violet", description: "Coaching, suivi d'entraînement, compétitions" },
    { name: "Santé", icon: Heart, color: "rose", description: "Télémédecine, suivi patients, bien-être" },
    { name: "Bien-être", icon: Activity, color: "emerald", description: "Méditation, nutrition, sommeil" },
    { name: "Mobilité", icon: Car, color: "amber", description: "Transport, covoiturage, livraison" },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <Smartphone className="h-4 w-4 mr-2" />
              Développement mobile
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Applications mobiles <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">natives et cross-platform</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              iOS, Android, PWA : nous développons des applications mobiles performantes adaptées aux contraintes 
              métier de chaque secteur d'activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700">
                <Link href="/contact">
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                <Link href="/clients">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offres */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nos offres mobiles</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              La solution adaptée à votre besoin et votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Apple className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Applications natives</h3>
                <p className="text-gray-400 mb-6">
                  Performances optimales avec Swift (iOS) et Kotlin (Android). Idéal pour les applications 
                  exigeantes en termes de performance et d'expérience utilisateur.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Performance maximale</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Accès complet aux APIs natives</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> UX optimisée par plateforme</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs px-3 py-1 rounded-bl-lg">Recommandé</div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Progressive Web Apps (PWA)</h3>
                <p className="text-gray-400 mb-6">
                  Applications web installables fonctionnant offline. Le meilleur rapport coût/bénéfice pour 
                  toucher tous les utilisateurs.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Une seule codebase</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Fonctionnement offline</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Pas de store obligatoire</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Blocks className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Solutions No-Code / Low-Code</h3>
                <p className="text-gray-400 mb-6">
                  Prototypes et MVPs rapides avec FlutterFlow, Glide ou Adalo. Parfait pour valider une idée 
                  avant d'investir dans du natif.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Livraison en 2-4 semaines</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Budget réduit</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Itérations rapides</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nos secteurs d'expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Chaque secteur a ses contraintes spécifiques. Nous adaptons notre approche à vos enjeux métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sector) => (
              <Card key={sector.name} className="bg-slate-900 border-slate-800 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${sector.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <sector.icon className={`h-6 w-6 text-${sector.color}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{sector.name}</h3>
                  <p className="text-gray-500 text-sm">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Une approche centrée sur l'utilisateur
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Nous concevons des applications mobiles que vos utilisateurs aimeront utiliser, 
                avec une attention particulière à l'expérience utilisateur et aux performances.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">UX Research</span>
                    <p className="text-gray-400">Analyse des besoins utilisateurs et tests d'usabilité</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Design System</span>
                    <p className="text-gray-400">Interface cohérente et évolutive</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Performance</span>
                    <p className="text-gray-400">Optimisation du temps de chargement et de la consommation batterie</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <Shield className="h-6 w-6 text-violet-500 mr-3 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">Sécurité</span>
                    <p className="text-gray-400">Protection des données et conformité RGPD</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-violet-500/10 to-pink-500/10 rounded-2xl border border-slate-700 flex items-center justify-center">
                <Smartphone className="h-32 w-32 text-violet-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600/20 to-pink-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vous avez un projet d'application mobile ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et définissons ensemble la meilleure approche pour le réaliser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700">
              <Link href="/contact">
                Parler à un expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

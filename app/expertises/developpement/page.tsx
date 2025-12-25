import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code2, Smartphone, Blocks, CheckCircle2, Layers, Cog, Zap, GitBranch, Timer, Users } from "lucide-react"
import Link from "next/link"

export default function DeveloppementPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Code2 className="h-4 w-4 mr-2" />
              Développement sur-mesure
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Des applications <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">robustes et évolutives</span> livrées en 8-12 semaines
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Web, mobile, outils internes : nous concevons des produits digitaux adaptés à vos processus métier, 
              de la conception à la mise en production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                <Link href="/contact">
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                <Link href="/expertises/audit-ia">Audit IA gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nos services de développement</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une offre complète pour répondre à tous vos besoins digitaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Outils internes</h3>
                <p className="text-gray-400 mb-6">
                  Digitalisez et automatisez vos processus métier avec des outils sur-mesure : CRM, gestion de stocks, 
                  tableaux de bord, workflows personnalisés.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Digitalisation des processus</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Automatisation des tâches</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Tableaux de bord temps réel</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Code2 className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Applications Web</h3>
                <p className="text-gray-400 mb-6">
                  Plateformes SaaS, applications métier, portails clients : des applications web performantes, 
                  sécurisées et scalables.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Plateformes SaaS</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Applications métier</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Portails clients</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Blocks className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">No-Code / Low-Code</h3>
                <p className="text-gray-400 mb-6">
                  Prototypage rapide et MVPs fonctionnels grâce aux outils no-code. Idéal pour valider une idée 
                  avant d'investir dans du code sur-mesure.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> MVPs en 2-4 semaines</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Coûts réduits</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Évolutif vers le code</li>
                </ul>
                <Link href="/expertises/no-code" className="inline-flex items-center text-emerald-400 mt-4 hover:text-emerald-300 transition-colors">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stack Technique */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Une stack technique moderne et éprouvée
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Nous utilisons les technologies les plus performantes pour créer des applications robustes, 
                maintenables et évolutives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Frontend</h4>
                  <p className="text-gray-400 text-sm">React, Next.js, Vue.js, TypeScript</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Backend</h4>
                  <p className="text-gray-400 text-sm">Node.js, Python, FastAPI, Django</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Mobile</h4>
                  <p className="text-gray-400 text-sm">Flutter, React Native, Swift, Kotlin</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Base de données</h4>
                  <p className="text-gray-400 text-sm">PostgreSQL, MongoDB, Redis</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Cloud & DevOps</h4>
                  <p className="text-gray-400 text-sm">AWS, GCP, Docker, Kubernetes</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">APIs</h4>
                  <p className="text-gray-400 text-sm">REST, GraphQL, WebSocket</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl border border-slate-700 flex items-center justify-center">
                <Cog className="h-32 w-32 text-blue-400/50 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Notre méthodologie agile</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un processus éprouvé pour livrer des projets de qualité dans les délais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                <GitBranch className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cadrage</h3>
              <p className="text-gray-400">
                Définition des objectifs, spécifications fonctionnelles et techniques, planning détaillé.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                <Zap className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Sprints</h3>
              <p className="text-gray-400">
                Développement itératif par sprints de 2 semaines avec démos régulières et ajustements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                <Timer className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Tests & QA</h3>
              <p className="text-gray-400">
                Tests automatisés, revue de code, validation fonctionnelle avant chaque mise en production.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                <Users className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Livraison & Support</h3>
              <p className="text-gray-400">
                Déploiement, formation utilisateurs, documentation et support continu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et définissons ensemble la meilleure approche pour le réaliser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
              <Link href="/contact">
                Parler à un expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              <Link href="/clients">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

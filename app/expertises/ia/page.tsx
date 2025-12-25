import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Zap, Code2, CheckCircle2, Search, BarChart3, FileText, Bot, Sparkles, Cog, Settings } from "lucide-react"
import Link from "next/link"

export default function IAPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              Intelligence Artificielle
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Exploitez le <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">potentiel de l'IA</span> pour votre entreprise
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              De l'audit à la mise en production, nous vous accompagnons pour identifier et déployer 
              les solutions IA à fort impact pour votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
                <Link href="/expertises/audit-ia">
                  Audit IA gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent">
                <Link href="/contact">Parler à un expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Offres IA */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nos 3 offres IA</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un accompagnement progressif de la découverte à la mise en production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Audit IA */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs px-3 py-1 rounded-bl-lg">Gratuit</div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Search className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Audit IA</h3>
                <p className="text-gray-400 mb-6">
                  Diagnostic d'une journée pour identifier les cas d'usage IA à fort potentiel dans votre organisation.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> 1 journée d'observation terrain</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Identification des cas d'usage</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Roadmap + estimation ROI</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-violet-500 mr-2" /> Livrables sous 72h</li>
                </ul>
                <Button asChild className="w-full bg-violet-600 hover:bg-violet-700">
                  <Link href="/expertises/audit-ia">
                    Réserver mon audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Automatisation IA */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automatisation IA</h3>
                <p className="text-gray-400 mb-6">
                  Automatisez vos workflows et libérez vos équipes des tâches répétitives grâce à l'IA.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Automatisation de workflows</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Génération de contenu</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Connexion entre outils</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" /> Intégration GPT, Claude, etc.</li>
                </ul>
                <Button asChild variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700">
                  <Link href="/contact">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Développement IA */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Code2 className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Développement IA</h3>
                <p className="text-gray-400 mb-6">
                  Développez des plateformes et applications IA sur-mesure pour vos besoins spécifiques.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Assistants IA métier</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Moteurs de recommandation</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Outils d'analyse prédictive</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" /> Chatbots intelligents</li>
                </ul>
                <Button asChild variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700">
                  <Link href="/contact">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Notre méthodologie IA</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un processus rigoureux pour garantir le succès de vos projets IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-violet-600 text-white text-xs px-2 py-1 rounded">Étape 1</div>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">Définition des objectifs</h3>
              <p className="text-gray-400 text-sm">Identification des KPIs et définition du périmètre du projet</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs px-2 py-1 rounded">Étape 2</div>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">Analyse des données</h3>
              <p className="text-gray-400 text-sm">Audit de la qualité des données et préparation des datasets</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-emerald-600 text-white text-xs px-2 py-1 rounded">Étape 3</div>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">Proof of Concept</h3>
              <p className="text-gray-400 text-sm">Développement d'un prototype pour valider la faisabilité</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-amber-600 text-white text-xs px-2 py-1 rounded">Étape 4</div>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">Développement</h3>
              <p className="text-gray-400 text-sm">Développement itératif avec tests et validations continues</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-rose-600 text-white text-xs px-2 py-1 rounded">Étape 5</div>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">Tests & Validation</h3>
              <p className="text-gray-400 text-sm">Tests de performance, validation métier et ajustements</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-cyan-600 text-white text-xs px-2 py-1 rounded">Étape 6</div>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">Déploiement</h3>
              <p className="text-gray-400 text-sm">Mise en production progressive et formation des équipes</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative lg:col-span-2">
              <div className="absolute -top-3 left-6 bg-purple-600 text-white text-xs px-2 py-1 rounded">Continu</div>
              <h3 className="text-lg font-semibold text-white mt-2 mb-3">Support & Amélioration continue</h3>
              <p className="text-gray-400 text-sm">Monitoring, maintenance, ré-entraînement des modèles et évolutions fonctionnelles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Cas d'usage IA</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des applications concrètes pour transformer votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <BarChart3 className="h-10 w-10 text-violet-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Prédiction de la demande</h3>
                <p className="text-gray-400 text-sm">Anticipez les tendances et optimisez vos stocks et ressources</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <Bot className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Expérience client augmentée</h3>
                <p className="text-gray-400 text-sm">Chatbots, recommandations personnalisées, support 24/7</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <FileText className="h-10 w-10 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Content Factory</h3>
                <p className="text-gray-400 text-sm">Génération automatique de contenus, fiches produits, articles</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <Settings className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Automatisation de processus</h3>
                <p className="text-gray-400 text-sm">Traitement documentaire, validation automatique, workflows</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à découvrir le potentiel IA de votre entreprise ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Réservez votre audit IA gratuit et recevez votre roadmap personnalisée sous 72h.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
            <Link href="/expertises/audit-ia">
              Réserver mon audit IA gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Search, CheckCircle2, FileSearch, Target, TrendingUp, Clock, Users, Calendar, FileText } from "lucide-react"
import Link from "next/link"

export default function AuditIAPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <Search className="h-4 w-4 mr-2" />
              Audit IA gratuit
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Découvrez le <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">potentiel IA</span> de votre entreprise
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Une journée d'audit pour identifier les cas d'usage IA à fort impact. 
              Roadmap détaillée et estimation de ROI livrées sous 72h.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
              <Link href="/contact">
                Réserver mon audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">1 jour</div>
                <div className="text-gray-500 text-sm">Durée</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">72h</div>
                <div className="text-gray-500 text-sm">Livrables</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">100%</div>
                <div className="text-gray-500 text-sm">Gratuit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-400">ROI</div>
                <div className="text-gray-500 text-sm">Mesurable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Comment se déroule l'audit ?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un processus simple et structuré pour identifier rapidement vos opportunités IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 relative">
              <div className="absolute -top-3 left-6 bg-violet-600 text-white text-xs px-3 py-1 rounded-full">Jour J-7</div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Cadrage</h3>
                <p className="text-gray-400">
                  Entretien préparatoire pour comprendre vos enjeux, votre organisation et définir le périmètre de l'audit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 relative">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Jour J</div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Observation terrain</h3>
                <p className="text-gray-400">
                  Une journée complète dans vos locaux pour observer les processus, interviewer les équipes et identifier les opportunités.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 relative">
              <div className="absolute -top-3 left-6 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">J+1 à J+3</div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <FileSearch className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Analyse</h3>
                <p className="text-gray-400">
                  Analyse approfondie des processus observés, identification des tâches automatisables et priorisation par impact/effort.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 relative">
              <div className="absolute -top-3 left-6 bg-amber-600 text-white text-xs px-3 py-1 rounded-full">J+3</div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Livrables</h3>
                <p className="text-gray-400">
                  Présentation des résultats avec roadmap détaillée, estimation de ROI et recommandations priorisées.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ce que vous obtenez
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Un document actionnable pour guider votre stratégie IA
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-white">Cartographie des processus</span>
                    <p className="text-gray-400">Vue d'ensemble de vos workflows avec les points de friction identifiés</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-white">Liste des cas d'usage IA</span>
                    <p className="text-gray-400">Identification des tâches automatisables avec estimation de gain de temps</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-white">Roadmap priorisée</span>
                    <p className="text-gray-400">Plan d'action sur 6-12 mois avec priorisation impact/effort</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-white">Estimation de ROI</span>
                    <p className="text-gray-400">Calcul du retour sur investissement attendu pour chaque cas d'usage</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-violet-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-white">Recommandations techniques</span>
                    <p className="text-gray-400">Choix des technologies et outils adaptés à vos besoins</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <Target className="h-10 w-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Focus ROI</h3>
                  <p className="text-gray-400">
                    Chaque recommandation est accompagnée d'une estimation de ROI pour vous aider à prioriser vos investissements.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <Clock className="h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Rapidité d'exécution</h3>
                  <p className="text-gray-400">
                    Résultats sous 72h pour ne pas bloquer vos projets et avancer rapidement.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <TrendingUp className="h-10 w-10 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Plan d'action concret</h3>
                  <p className="text-gray-400">
                    Pas de théorie : un plan d'action prêt à être exécuté avec vos équipes ou avec notre accompagnement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ils ont fait l'audit IA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 italic">
                  "L'audit a révélé 8 cas d'usage IA dont 3 à impact immédiat. Nous avons déjà déployé le premier qui nous fait gagner 15h/semaine."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-violet-400 font-bold">MC</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Marie Christophe</p>
                    <p className="text-gray-500 text-sm">Directrice Ops, PME Services</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 italic">
                  "Un diagnostic précis et actionnable. La roadmap nous a permis de prioriser nos investissements IA sur l'année."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Jean Dupuis</p>
                    <p className="text-gray-500 text-sm">DSI, ETI Industrie</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Réservez votre audit IA gratuit
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Sans engagement. Résultats sous 72h. Commencez à exploiter le potentiel de l'IA dès aujourd'hui.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
            <Link href="/contact">
              Réserver maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-gray-500 text-sm mt-4">Disponibilités limitées · Réponse sous 24h</p>
        </div>
      </section>
    </div>
  )
}

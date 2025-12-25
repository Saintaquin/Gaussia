import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Blocks, CheckCircle2, Zap, Clock, DollarSign, Rocket, Users, Code2 } from "lucide-react"
import Link from "next/link"

export default function NoCodePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Blocks className="h-4 w-4 mr-2" />
              No-Code / Low-Code
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Lancez votre MVP en <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">2 à 4 semaines</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Validez votre idée rapidement avec le no-code. Évoluez ensuite vers du code sur-mesure si nécessaire. 
              Le meilleur des deux mondes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
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

      {/* Définition */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Qu'est-ce que le No-Code ?</h2>
              <p className="text-gray-400 mb-6">
                Le no-code permet de créer des applications complètes sans écrire une ligne de code, 
                grâce à des interfaces visuelles et des composants pré-construits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <Zap className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Rapidité :</strong> Livraison en 2-4 semaines vs 8-12 semaines en code</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <DollarSign className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Coûts réduits :</strong> 50-70% moins cher qu'un développement traditionnel</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Rocket className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Flexibilité :</strong> Itérations et modifications rapides</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Et le Low-Code ?</h2>
              <p className="text-gray-400 mb-6">
                Le low-code combine interfaces visuelles et possibilité d'ajouter du code personnalisé 
                pour des besoins plus avancés.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <Code2 className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <span><strong>Personnalisation :</strong> Fonctionnalités avancées possibles</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Blocks className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <span><strong>Évolutivité :</strong> Passage progressif vers le code si nécessaire</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <Clock className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <span><strong>Équilibre :</strong> Compromis optimal entre rapidité et puissance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Cas d'usage No-Code / Low-Code</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quand choisir le no-code pour votre projet ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "MVP / Prototype", desc: "Validez votre concept rapidement avant d'investir dans du code" },
              { title: "Side Business", desc: "Lancez un projet secondaire sans mobiliser trop de ressources" },
              { title: "Pivot stratégique", desc: "Testez une nouvelle orientation business avec agilité" },
              { title: "Centralisation des données", desc: "Créez un hub central pour toutes vos sources de données" },
              { title: "Automatisation de process", desc: "Workflows automatisés entre vos outils existants" },
              { title: "Intégration IA", desc: "Connectez GPT, Claude ou d'autres APIs IA à vos outils" },
              { title: "Configurateurs produit", desc: "Outils de configuration et devis pour vos équipes commerciales" },
              { title: "Apps terrain", desc: "Applications mobiles pour vos équipes sur le terrain" },
              { title: "Chatbots & FAQ", desc: "Support client automatisé et base de connaissance" },
              { title: "Quiz personnalisés", desc: "Parcours interactifs pour qualifier vos prospects" },
              { title: "Vue client 360°", desc: "Tableaux de bord unifiés pour vos données clients" },
            ].map((item, i) => (
              <Card key={i} className="bg-slate-900 border-slate-800 hover:border-emerald-500/50 transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Notre organisation</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une équipe pluridisciplinaire pour des projets réussis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Product Manager</h3>
                <p className="text-gray-400">
                  Cadrage, spécifications, priorisation des fonctionnalités
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Blocks className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Maker No-Code</h3>
                <p className="text-gray-400">
                  Développement sur Bubble, FlutterFlow, Webflow, etc.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code2 className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Développeur</h3>
                <p className="text-gray-400">
                  Intégrations API, code custom si nécessaire
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Architecture hybride</h3>
                <p className="text-gray-400 text-center">
                  Nous pouvons combiner no-code pour le front-end et code sur-mesure pour le back-end, 
                  offrant ainsi le meilleur des deux mondes : rapidité et puissance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limites */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Avantages du No-Code</h2>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span>Time-to-market ultra-rapide (2-4 semaines)</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span>Coûts de développement réduits de 50-70%</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span>Modifications et itérations faciles</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span>Parfait pour valider un concept</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span>Idéal pour les processus métiers standards</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Limites à considérer</h2>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-amber-500 mr-3 mt-0.5">⚠️</span>
                  <span>Moins de flexibilité pour des besoins très spécifiques</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-amber-500 mr-3 mt-0.5">⚠️</span>
                  <span>Performance limitée pour de très gros volumes</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-amber-500 mr-3 mt-0.5">⚠️</span>
                  <span>Dépendance à la plateforme no-code choisie</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-amber-500 mr-3 mt-0.5">⚠️</span>
                  <span>Migration vers du code possible mais coûteuse</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong className="text-blue-400">Notre conseil :</strong> Le no-code est idéal pour démarrer. 
                  Si votre projet décolle et nécessite plus de puissance, nous vous accompagnons dans la transition vers du code sur-mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Lancez votre MVP no-code
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et voyons ensemble si le no-code est adapté à vos besoins.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
            <Link href="/contact">
              Parler à un expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

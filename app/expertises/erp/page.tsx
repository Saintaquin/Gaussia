import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Boxes, CheckCircle2, BarChart3, Users, Package, ShoppingCart, DollarSign, Cog } from "lucide-react"
import Link from "next/link"

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Boxes className="h-4 w-4 mr-2" />
              ERP - Enterprise Resource Planning
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Centralisez et <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">automatisez</span> la gestion de votre entreprise
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Un ERP unifie toutes les fonctions de votre entreprise dans un seul système : finance, RH, production, stocks, ventes, achats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                <Link href="/expertises/odoo">
                  Découvrir Odoo
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

      {/* Qu'est-ce qu'un ERP */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Qu'est-ce qu'un ERP ?</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Un ERP (Enterprise Resource Planning) est un logiciel qui centralise et automatise la gestion de toutes 
                les ressources et processus d'une entreprise.
              </p>
              <p className="text-gray-400 mb-8">
                Au lieu d'avoir des outils séparés pour la comptabilité, les ventes, les stocks, la production et les RH, 
                un ERP unifie tout dans un seul système avec une base de données commune.
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                <p className="text-gray-300">
                  <strong className="text-emerald-400">Le résultat :</strong> Plus de double saisie, plus d'erreurs de synchronisation, 
                  une vision temps réel de votre activité et des décisions basées sur des données fiables.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl border border-slate-700 flex items-center justify-center">
                <Boxes className="h-32 w-32 text-emerald-400/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Les bénéfices d'un ERP</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pourquoi les PME et ETI choisissent un ERP ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Boxes className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Centralisation des données</h3>
                <p className="text-gray-400">
                  Une seule source de vérité pour toutes vos données. Fini les fichiers Excel éparpillés et les doublons.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Cog className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automatisation</h3>
                <p className="text-gray-400">
                  Automatisez les tâches répétitives : facturation, relances clients, réapprovisionnement stocks, paie, etc.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Pilotage en temps réel</h3>
                <p className="text-gray-400">
                  Tableaux de bord actualisés en permanence pour suivre vos KPIs et prendre les bonnes décisions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">+30%</div>
              <p className="text-gray-400 text-sm mt-2">Gain de productivité</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">-50%</div>
              <p className="text-gray-400 text-sm mt-2">Erreurs de saisie</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">100%</div>
              <p className="text-gray-400 text-sm mt-2">Visibilité temps réel</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">ROI<span className="text-lg">&lt;18 mois</span></div>
              <p className="text-gray-400 text-sm mt-2">Retour sur investissement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctions principales */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Fonctions principales d'un ERP</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un ERP couvre l'ensemble des processus de l'entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Finance & Comptabilité", desc: "Facturation, comptabilité, trésorerie, budgets" },
              { icon: Users, title: "Ressources Humaines", desc: "Paie, congés, recrutement, évaluations" },
              { icon: Cog, title: "Production & MRP", desc: "Planification, ordres de fabrication, suivi atelier" },
              { icon: Package, title: "Gestion des stocks", desc: "Inventaire, réapprovisionnement, traçabilité" },
              { icon: ShoppingCart, title: "Ventes & CRM", desc: "Devis, commandes, suivi clients, pipeline" },
              { icon: BarChart3, title: "Achats & Approvisionnement", desc: "Demandes d'achat, fournisseurs, réception" },
            ].map((item, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Odoo */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Chez Gaussia, nous recommandons Odoo
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Odoo est l'ERP open-source le plus complet du marché. Modulaire, intuitif et évolutif, 
                il est parfaitement adapté aux PME et ETI.
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>+50 modules</strong> pour couvrir tous vos besoins</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Open-source</strong> : pas de dépendance éditeur</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Interface moderne</strong> et intuitive</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                  <span><strong>Personnalisable</strong> et extensible</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                <Link href="/expertises/odoo">
                  Découvrir Odoo en détail
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à implémenter votre ERP ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et voyons ensemble comment un ERP peut transformer votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
              <Link href="/contact">
                Parler à un expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              <Link href="/ressources/comparateur-erp">Comparateur ERP</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

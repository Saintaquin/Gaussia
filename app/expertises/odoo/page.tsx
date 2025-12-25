import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Users, GraduationCap, Code2, Wrench, Target, FileText, ShoppingCart, Package, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

export default function OdooPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.803 5.731c.589 0 1.119.488 1.119 1.159 0 .664-.53 1.153-1.119 1.153-.589 0-1.124-.488-1.124-1.153 0-.671.535-1.159 1.124-1.159zm2.577 7.605h5.522v-1.153h-5.522v1.153zm0-1.975h5.522v-1.153h-5.522v1.153zm0-1.982h5.522v-1.153h-5.522v1.153z"/>
              </svg>
              Odoo - Partenaire officiel
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Odoo</span>, l'ERP modulaire adapté aux PME
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Intégration, formation, développement sur-mesure et maintenance : nous vous accompagnons de A à Z 
              dans votre projet Odoo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Link href="/contact">
                  Démarrer un projet Odoo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                <Link href="/clients">Cas clients</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Odoo */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Pourquoi choisir Odoo ?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              L'ERP open-source le plus complet et le plus flexible du marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Package className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Modulaire</h3>
                <p className="text-gray-400">
                  +50 modules disponibles. Commencez avec les fonctions essentielles et ajoutez des modules au fur et à mesure de vos besoins.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-7 w-7 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intuitif</h3>
                <p className="text-gray-400">
                  Interface moderne et ergonomique. Vos équipes l'adoptent rapidement sans formation intensive.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Code2 className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Évolutif</h3>
                <p className="text-gray-400">
                  Open-source et personnalisable. Développements sur-mesure possibles pour s'adapter à 100% à vos processus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos services */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nos services Odoo</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un accompagnement complet pour la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Intégration</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Déploiement et configuration d'Odoo adaptés à vos processus métier
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-purple-500 mr-1" /> Analyse des besoins</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-purple-500 mr-1" /> Configuration</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-purple-500 mr-1" /> Migration données</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 hover:border-pink-500/50 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Formation</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Formation de vos équipes pour une adoption rapide et efficace
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-pink-500 mr-1" /> Utilisateurs finaux</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-pink-500 mr-1" /> Administrateurs</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-pink-500 mr-1" /> Support continu</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Développement sur-mesure</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Modules personnalisés pour vos besoins spécifiques
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-blue-500 mr-1" /> Nouveaux modules</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-blue-500 mr-1" /> Intégrations API</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-blue-500 mr-1" /> Workflows custom</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 hover:border-emerald-500/50 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Maintenance & Support</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Accompagnement technique et fonctionnel au quotidien
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-emerald-500 mr-1" /> Mises à jour</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-emerald-500 mr-1" /> Support technique</li>
                  <li className="flex items-center"><CheckCircle2 className="h-3 w-3 text-emerald-500 mr-1" /> Évolutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules principaux */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Modules clés Odoo</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Les modules les plus utilisés par nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, name: "Facturation", desc: "Devis, factures, paiements, relances" },
              { icon: Users, name: "CRM", desc: "Pipeline commercial, suivi opportunités, emails" },
              { icon: Package, name: "Fabrication", desc: "MRP, ordres de fabrication, planning atelier" },
              { icon: Calendar, name: "Employés", desc: "Congés, notes de frais, évaluations" },
              { icon: FileText, name: "Projets", desc: "Gestion de projets, timesheet, planning" },
              { icon: ShoppingCart, name: "Ventes", desc: "Commandes, livraisons, retours" },
            ].map((module, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                      <module.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{module.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{module.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Et bien plus : Achats, Stocks, Point de vente, Marketing, Site web, Forum, E-learning...</p>
            <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-lg px-6 py-3">
              <span className="text-purple-400 font-semibold">+50 modules disponibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à déployer Odoo ?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et définissons ensemble les modules et fonctionnalités dont vous avez besoin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Link href="/contact">
                Parler à un expert Odoo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              <Link href="/ressources/comparateur-erp">Comparer les ERP</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

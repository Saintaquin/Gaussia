import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Database, Cloud, BarChart3, Workflow, Shield, Gauge, Brain, GitBranch } from "lucide-react"
import Link from "next/link"

export default function ExpertisesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Nos expertises</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos trois domaines d'expertise pour transformer votre entreprise et optimiser vos processus
            métiers.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="space-y-16">
          {/* Automatisation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-navy">Automatisation des processus</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Libérez le potentiel de vos équipes en automatisant les tâches répétitives et chronophages. Nous
                concevons des solutions d'automatisation intelligentes qui s'intègrent parfaitement à votre écosystème
                existant.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Workflow className="h-5 w-5 text-blue-600 mr-3" />
                  Automatisation du reporting et des tableaux de bord
                </li>
                <li className="flex items-center text-gray-700">
                  <Workflow className="h-5 w-5 text-blue-600 mr-3" />
                  Gestion automatisée des emails et notifications
                </li>
                <li className="flex items-center text-gray-700">
                  <Workflow className="h-5 w-5 text-blue-600 mr-3" />
                  Intégration et synchronisation CRM
                </li>
                <li className="flex items-center text-gray-700">
                  <Workflow className="h-5 w-5 text-blue-600 mr-3" />
                  Workflows métiers personnalisés
                </li>
              </ul>
              <Button asChild className="bg-navy hover:bg-navy-light">
                <Link href="/contact">
                  Discuter de votre projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Reporting automatisé</h3>
                  <p className="text-sm text-gray-600">Génération automatique de rapports personnalisés</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Workflow className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Workflows</h3>
                  <p className="text-sm text-gray-600">Processus métiers optimisés et automatisés</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data & Visualisation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-navy mb-2">Modélisation</h3>
                    <p className="text-sm text-gray-600">Architecture et modélisation de données</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-navy mb-2">Analytics</h3>
                    <p className="text-sm text-gray-600">Business intelligence et analyse prédictive</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-navy">Data & Analytics</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Transformez vos données en insights actionnables grâce à nos solutions de modélisation, d'analyse et de
                visualisation. Nous vous aidons à exploiter pleinement le potentiel de vos données pour optimiser vos
                performances business.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Database className="h-5 w-5 text-blue-600 mr-3" />
                  Modélisation et architecture de données
                </li>
                <li className="flex items-center text-gray-700">
                  <BarChart3 className="h-5 w-5 text-blue-600 mr-3" />
                  Dashboards interactifs et visualisations
                </li>
                <li className="flex items-center text-gray-700">
                  <GitBranch className="h-5 w-5 text-blue-600 mr-3" />
                  Intégration de sources de données multiples
                </li>
                <li className="flex items-center text-gray-700">
                  <Brain className="h-5 w-5 text-blue-600 mr-3" />
                  Solutions d'analyse avancée et business intelligence
                </li>
              </ul>
              <Button asChild className="bg-navy hover:bg-navy-light">
                <Link href="/contact">
                  Exploiter vos données
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Cloud & Déploiement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Cloud className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-navy">Cloud & Déploiement</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Modernisez votre infrastructure avec des solutions cloud scalables et sécurisées. Nous concevons et
                déployons des architectures performantes qui s'adaptent à votre croissance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Cloud className="h-5 w-5 text-blue-600 mr-3" />
                  Infrastructure serverless et microservices
                </li>
                <li className="flex items-center text-gray-700">
                  <Gauge className="h-5 w-5 text-blue-600 mr-3" />
                  Solutions scalables et haute performance
                </li>
                <li className="flex items-center text-gray-700">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  Sécurité et conformité des données
                </li>
                <li className="flex items-center text-gray-700">
                  <GitBranch className="h-5 w-5 text-blue-600 mr-3" />
                  Architecture cloud multi-plateforme
                </li>
              </ul>
              <Button asChild className="bg-navy hover:bg-navy-light">
                <Link href="/contact">
                  Moderniser votre infrastructure
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Gauge className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Performance</h3>
                  <p className="text-sm text-gray-600">Solutions haute performance et scalables</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Sécurité</h3>
                  <p className="text-sm text-gray-600">Infrastructure sécurisée et conforme</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-navy mb-6">Prêt à démarrer votre transformation ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour vous accompagner dans la mise en œuvre de solutions adaptées à vos besoins
            spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Réserver un RDV gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/methodologie">Découvrir notre méthode</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

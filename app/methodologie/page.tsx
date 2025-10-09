import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Lightbulb, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function MethodologiePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Notre méthodologie</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche structurée en 3 étapes pour garantir le succès de votre transformation digitale et maximiser
            votre retour sur investissement.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="space-y-20">
          {/* Step 1: Audit */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy">Audit & Analyse</h2>
                  <p className="text-blue-600 font-medium">Phase de découverte</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Nous commençons par une analyse approfondie de votre écosystème actuel, de vos processus métiers et de
                vos besoins spécifiques. Cette phase nous permet de comprendre vos défis et d'identifier les
                opportunités d'amélioration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Analyse des processus existants</h4>
                    <p className="text-gray-600">Cartographie complète de vos workflows actuels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Audit technique</h4>
                    <p className="text-gray-600">Évaluation de votre infrastructure et outils</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Identification des opportunités</h4>
                    <p className="text-gray-600">Détection des axes d'amélioration prioritaires</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <Search className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-navy mb-4">Durée : 1-2 semaines</h3>
                <p className="text-gray-600">
                  Entretiens avec vos équipes, analyse documentaire et audit technique pour une compréhension complète
                  de votre contexte.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <div className="text-center">
                  <Lightbulb className="h-24 w-24 text-green-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-navy mb-4">Durée : 2-4 semaines</h3>
                  <p className="text-gray-600">
                    Conception détaillée de la solution, prototypage et validation avec vos équipes avant le
                    développement.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy">Conception & Développement</h2>
                  <p className="text-green-600 font-medium">Phase de création</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Sur la base de l'audit, nous concevons une solution sur-mesure parfaitement adaptée à vos besoins. Nous
                développons ensuite la solution en respectant les meilleures pratiques et standards de qualité.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Architecture technique</h4>
                    <p className="text-gray-600">Conception de l'architecture optimale</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Développement agile</h4>
                    <p className="text-gray-600">Développement itératif avec validation continue</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Tests et validation</h4>
                    <p className="text-gray-600">Tests complets et validation utilisateur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Accompagnement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy">Déploiement & Accompagnement</h2>
                  <p className="text-purple-600 font-medium">Phase de mise en œuvre</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Nous déployons la solution dans votre environnement et accompagnons vos équipes dans la prise en main.
                Notre support continue pour garantir le succès de votre transformation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Déploiement sécurisé</h4>
                    <p className="text-gray-600">Mise en production progressive et sécurisée</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Formation des équipes</h4>
                    <p className="text-gray-600">Formation complète de vos utilisateurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Support continu</h4>
                    <p className="text-gray-600">Accompagnement post-déploiement et maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <Users className="h-24 w-24 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-navy mb-4">Durée : 1-2 semaines + suivi</h3>
                <p className="text-gray-600">
                  Déploiement, formation des utilisateurs et accompagnement pour garantir l'adoption et le succès de la
                  solution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-navy text-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Les avantages de notre approche</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une méthodologie éprouvée qui garantit des résultats concrets et un retour sur investissement optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Résultats garantis</h3>
                <p className="text-gray-300">
                  Notre approche structurée garantit l'atteinte de vos objectifs dans les délais convenus.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Accompagnement personnalisé</h3>
                <p className="text-gray-300">
                  Un suivi personnalisé et une formation adaptée pour maximiser l'adoption par vos équipes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Innovation continue</h3>
                <p className="text-gray-300">
                  Des solutions évolutives qui s'adaptent à vos besoins futurs et aux nouvelles technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et découvrons ensemble comment notre méthodologie peut transformer votre
            entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Réserver un audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertises">Découvrir nos expertises</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

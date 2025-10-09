import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NetworkAnimation } from "@/components/brain-animation"
import { ArrowRight, Zap, Database, Cloud, Users, Target, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Optimisez avec l'
                <span className="text-blue-400">automatisation</span>, sécurisez avec le
                <span className="text-blue-400"> Cloud</span> et visualisez vos
                <span className="text-blue-400"> données</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                GAUSSIA accompagne les entreprises dans leur transformation digitale grâce à des solutions sur-mesure.
                Nous automatisons vos processus, optimisons vos données et déployons des infrastructures cloud
                performantes pour accélérer votre croissance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Démarrer votre projet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-navy bg-transparent"
                >
                  <Link href="/expertises">Découvrir nos expertises</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <NetworkAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Notre vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rendre les entreprises plus efficaces en automatisant leurs processus, en exploitant intelligemment leurs
              données et en déployant des solutions cloud évolutives et performantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Automatisation</h3>
                <p className="text-gray-600">
                  Libérez vos équipes des tâches répétitives grâce à l'automatisation intelligente de vos processus
                  métiers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Data & Analytics</h3>
                <p className="text-gray-600">
                  Exploitez le potentiel de vos données avec des solutions d'analyse avancées et des outils de business
                  intelligence performants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Cloud</h3>
                <p className="text-gray-600">
                  Déployez des infrastructures cloud scalables et sécurisées pour accompagner votre croissance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Pourquoi choisir GAUSSIA ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Expertise reconnue</h3>
              <p className="text-gray-600">
                3 consultants experts avec plus de 10 ans d'expérience dans leurs domaines respectifs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Solutions sur-mesure</h3>
              <p className="text-gray-600">
                Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques et contraintes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Innovation continue</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des technologies pour vous proposer les solutions les plus performantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prêt à transformer votre entreprise ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discutons de vos défis et découvrons ensemble comment GAUSSIA peut vous accompagner dans votre
            transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Réserver un RDV gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy bg-transparent"
            >
              <Link href="/methodologie">Découvrir notre approche</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

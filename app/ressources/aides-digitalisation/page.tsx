import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AidesDigitalisationPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <DollarSign className="h-16 w-16 text-violet-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Aides à la digitalisation</h1>
            <p className="text-xl text-gray-400">
              Financez votre transformation digitale grâce aux aides publiques et subventions disponibles
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Principales aides disponibles</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white font-medium mb-1">France Num</h3>
                      <p className="text-gray-400 text-sm">Accompagnement et financement pour la transformation digitale des TPE/PME</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white font-medium mb-1">BPI France</h3>
                      <p className="text-gray-400 text-sm">Prêts et subventions pour l'innovation et la digitalisation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Aides régionales</h3>
                      <p className="text-gray-400 text-sm">Chèques numériques et subventions selon votre région</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-violet-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Crédit d'impôt innovation</h3>
                      <p className="text-gray-400 text-sm">Jusqu'à 30% de crédit d'impôt pour les projets innovants</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-slate-700 text-center">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Nous vous accompagnons</h2>
                <p className="text-gray-400 mb-6">
                  Gaussia vous aide à identifier les aides pertinentes et à constituer vos dossiers de financement.
                </p>
                <Button asChild className="bg-gradient-to-r from-violet-600 to-blue-600">
                  <Link href="/contact">
                    Parler à un expert
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

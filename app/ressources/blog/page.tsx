import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-400">
              Articles sur la transformation digitale, l'IA, les ERP et les meilleures pratiques de développement
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-800/50 border-slate-700 text-center p-12">
            <CardContent>
              <TrendingUp className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Blog en construction</h2>
              <p className="text-gray-400 mb-6">
                Nous préparons du contenu de qualité sur la transformation digitale, l'IA et l'ERP. 
                Revenez bientôt !
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-violet-600">
                <Link href="/contact">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

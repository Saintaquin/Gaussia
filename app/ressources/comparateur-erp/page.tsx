import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitCompare } from "lucide-react"
import Link from "next/link"

export default function ComparateurERPPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <GitCompare className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Comparateur ERP</h1>
            <p className="text-xl text-gray-400">
              Comparez les solutions ERP du marché pour trouver celle qui correspond à vos besoins
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-800/50 border-slate-700 text-center p-12">
            <CardContent>
              <GitCompare className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Comparateur en construction</h2>
              <p className="text-gray-400 mb-6">
                Nous préparons un comparateur complet des solutions ERP (Odoo, SAP, Microsoft Dynamics, etc.). 
                En attendant, contactez-nous pour être conseillé.
              </p>
              <Button asChild className="bg-gradient-to-r from-emerald-600 to-blue-600">
                <Link href="/contact">
                  Parler à un expert ERP
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

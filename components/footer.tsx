import Link from "next/link"
import { Mail, MapPin, Phone, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Prêt à transformer votre entreprise ?</h3>
                <p className="text-gray-400">Réservez votre audit IA gratuit et découvrez votre potentiel de croissance.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                  <Link href="/expertises/audit-ia">
                    Audit IA gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild className="bg-slate-800 text-white hover:bg-slate-700 border border-slate-600">
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-blue-500">G</span>AUSSIA
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              Gaussia accompagne les PME et ETI dans leur transformation digitale grâce au développement sur-mesure, 
              l'intelligence artificielle et l'intégration ERP / Odoo.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertises</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/expertises/developpement" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Développement sur-mesure
                </Link>
              </li>
              <li>
                <Link href="/expertises/mobile" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Développement mobile
                </Link>
              </li>
              <li>
                <Link href="/expertises/ia" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Intelligence Artificielle
                </Link>
              </li>
              <li>
                <Link href="/expertises/audit-ia" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Audit IA
                </Link>
              </li>
              <li>
                <Link href="/expertises/no-code" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  No-Code / Low-Code
                </Link>
              </li>
              <li>
                <Link href="/expertises/erp" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  ERP
                </Link>
              </li>
              <li>
                <Link href="/expertises/odoo" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Odoo
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ressources/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ressources/comparateur-erp" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Comparateur ERP
                </Link>
              </li>
              <li>
                <Link href="/ressources/aides-digitalisation" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Aides à la digitalisation
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Cas clients
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2 text-blue-500" />
                <a href="mailto:contact@gaussia.fr" className="hover:text-blue-400 transition-colors">
                  contact@gaussia.fr
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2 text-blue-500" />
                <a href="tel:+33695467881" className="hover:text-blue-400 transition-colors">
                  +33 6 95 46 78 81
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GAUSSIA. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/mentions-legales" className="text-gray-500 hover:text-gray-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-gray-500 hover:text-gray-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

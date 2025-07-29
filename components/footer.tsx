import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GAUSSIA</h3>
            <p className="text-gray-300 mb-4">
              Basés à Paris, nous aidons les entreprises à gagner du temps, automatiser leurs tâches et prendre de meilleures décisions grâce à des outils connectés et intelligents.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/expertises" className="text-gray-300 hover:text-white transition-colors">
                  Nos expertises
                </Link>
              </li>
              <li>
                <Link href="/methodologie" className="text-gray-300 hover:text-white transition-colors">
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-gray-300 hover:text-white transition-colors">
                  L'équipe
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@gaussia.fr</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+33 6 95 46 78 81</span>
               </div> 
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} GAUSSIA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

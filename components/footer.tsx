import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">GAUSSIA</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed max-w-sm">
              Basés à Paris, nous aidons les entreprises à gagner du temps, automatiser leurs tâches et prendre de meilleures décisions grâce à des outils connectés et intelligents.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-display">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "Nos expertises", href: "/expertises" },
                { name: "Formation", href: "/#formation" },
                { name: "Méthodologie", href: "/methodologie" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-display">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <span className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 mr-3 transition-colors">
                  <MapPin className="h-4 w-4 text-secondary" />
                </span>
                <span>Paris, France</span>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <span className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 mr-3 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <a href="mailto:contact@gaussia.fr">contact@gaussia.fr</a>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors group">
                <span className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 mr-3 transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                <a href="tel:+33695467881">+33 6 95 46 78 81</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} GAUSSIA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

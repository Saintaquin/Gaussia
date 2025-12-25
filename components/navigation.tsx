"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const expertises = [
  { name: "Développement sur-mesure", href: "/expertises/developpement" },
  { name: "Développement mobile", href: "/expertises/mobile" },
  { name: "Intelligence Artificielle", href: "/expertises/ia" },
  { name: "Audit IA", href: "/expertises/audit-ia" },
  { name: "No-Code / Low-Code", href: "/expertises/no-code" },
  { name: "ERP", href: "/expertises/erp" },
  { name: "Odoo", href: "/expertises/odoo" },
]

const ressources = [
  { name: "Blog", href: "/ressources/blog" },
  { name: "Comparateur ERP", href: "/ressources/comparateur-erp" },
  { name: "Aides à la digitalisation", href: "/ressources/aides-digitalisation" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expertisesOpen, setExpertisesOpen] = useState(false)
  const [ressourcesOpen, setRessourcesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-blue-500">G</span>AUSSIA
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {/* Expertises Dropdown */}
              <div className="relative group">
                <button
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-blue-400",
                    pathname.startsWith("/expertises") ? "text-blue-400" : "text-gray-300",
                  )}
                >
                  Expertises
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-xl py-2">
                    {expertises.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/clients"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  pathname === "/clients" ? "text-blue-400" : "text-gray-300",
                )}
              >
                Clients
              </Link>

              <Link
                href="/pricing"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  pathname === "/pricing" ? "text-blue-400" : "text-gray-300",
                )}
              >
                Tarifs
              </Link>

              {/* Ressources Dropdown */}
              <div className="relative group">
                <button
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-blue-400",
                    pathname.startsWith("/ressources") ? "text-blue-400" : "text-gray-300",
                  )}
                >
                  Ressources
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-xl py-2">
                    {ressources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/a-propos"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  pathname === "/a-propos" ? "text-blue-400" : "text-gray-300",
                )}
              >
                À propos
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  pathname === "/contact" ? "text-blue-400" : "text-gray-300",
                )}
              >
                Contact
              </Link>

              <Button asChild className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white">
                <Link href="/expertises/audit-ia">Audit IA gratuit</Link>
              </Button>
            </div>
          </div>

          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1">
              {/* Expertises Mobile */}
              <div>
                <button
                  onClick={() => setExpertisesOpen(!expertisesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400"
                >
                  Expertises
                  <ChevronDown className={cn("h-4 w-4 transition-transform", expertisesOpen && "rotate-180")} />
                </button>
                {expertisesOpen && (
                  <div className="pl-4 space-y-1">
                    {expertises.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-blue-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/clients"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clients
              </Link>

              <Link
                href="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </Link>

              {/* Ressources Mobile */}
              <div>
                <button
                  onClick={() => setRessourcesOpen(!ressourcesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400"
                >
                  Ressources
                  <ChevronDown className={cn("h-4 w-4 transition-transform", ressourcesOpen && "rotate-180")} />
                </button>
                {ressourcesOpen && (
                  <div className="pl-4 space-y-1">
                    {ressources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-blue-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/a-propos"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 py-2">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-violet-600">
                  <Link href="/expertises/audit-ia" onClick={() => setMobileMenuOpen(false)}>
                    Audit IA gratuit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

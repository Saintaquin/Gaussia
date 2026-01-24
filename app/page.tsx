"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, ArrowRight, Zap, Play } from "lucide-react"
import { SlideSection } from "@/components/slide-section"
import { AnimatedIcon } from "@/components/animated-icon"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const index = Math.floor(scrollPosition / window.innerHeight)
      setActiveSlide(index)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-background text-foreground snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Slide 1: Hero */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden snap-start bg-background p-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="z-10 max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4 animate-pulse-slow">
            <Zap className="inline-block w-4 h-4 mr-2" /> Innovation Digitale
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50">
            GAUSSIA
          </h1>

          <p className="text-xl md:text-3xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Architectes de <span className="text-primary font-medium">solutions digitales</span> et d'<span className="text-secondary font-medium">automatisation</span> intelligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(255,107,91,0.3)] hover:shadow-[0_0_30px_rgba(255,107,91,0.5)] transition-all animate-float">
              <Link href="/contact">
                Démarrer votre projet <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg border-muted hover:bg-muted/50 transition-all">
              <Link href="#automation">
                Découvrir <Play className="ml-2 h-4 w-4 fill-current" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce cursor-pointer p-2 hover:bg-muted/50 rounded-full transition-colors" onClick={scrollToNext}>
          <ArrowDown className="text-muted-foreground w-8 h-8" />
        </div>
      </section>

      {/* Slide 2: Custom Apps */}
      <SlideSection
        id="apps"
        title="Applications Sur-Mesure"
        description="Des outils métiers développés spécifiquement pour vos besoins. De la conception à la mise en production, nous créons l'outil parfait pour votre activité."
        features={[
          "SaaS & Outils internes",
          "Tableaux de bord (Dashboards)",
          "Applications Mobiles & PWA",
          "Gestion de bases de données"
        ]}
        icon={<AnimatedIcon name="app" className="w-24 h-24 md:w-32 md:h-32" />}
        variant="accent"
      />

      {/* Slide 3: Web Development */}
      <SlideSection
        id="web"
        title="Développement Web Moderne"
        description="Des sites et applications web ultra-rapides, conçus pour convertir. Une architecture robuste et une expérience utilisateur soignée."
        features={[
          "Sites vitrines & E-commerce (Next.js)",
          "Interfaces réactives et accessibles",
          "Architecture Headless & API-first",
          "Performance & SEO optimisés"
        ]}
        icon={<AnimatedIcon name="web" className="w-24 h-24 md:w-32 md:h-32" />}
        variant="secondary"
        reverse
      />

      {/* Slide 4: Automation */}
      <SlideSection
        id="automation"
        title="Automatisation Intelligente"
        description="Transformez vos processus manuels en workflows automatisés performants. Gagnez du temps et réduisez les erreurs pour vous concentrer sur votre valeur ajoutée."
        features={[
          "Workflows automatisés (n8n, Make)",
          "Intégration CRM & ERP",
          "Bots & Assistants IA",
          "Optimisation des processus métiers"
        ]}
        icon={<AnimatedIcon name="automation" className="w-24 h-24 md:w-32 md:h-32" />}
        variant="primary"
        cta={{ text: "Voir nos réalisations", href: "/expertises" }}
      />

      {/* Slide 5: CTA Final */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden snap-start bg-foreground text-background text-center p-4">
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="z-10 max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Prêt à <span className="text-primary italic">innover</span> ?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Ne laissez pas la technologie vous ralentir. Faites-en votre meilleur atout avec GAUSSIA.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-xl bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(255,107,91,0.4)] hover:shadow-[0_0_40px_rgba(255,107,91,0.6)] transition-all hover:scale-105">
              <Link href="/contact">
                Discuter de mon projet <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
      </section>

      {/* Dots Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden lg:flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              activeSlide === i ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-primary/50"
            )}
          />
        ))}
      </div>
    </div>
  )
}


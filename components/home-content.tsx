"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, ArrowRight, Play } from "lucide-react"
import { SlideSection } from "@/components/slide-section"
import { AnimatedIcon } from "@/components/animated-icon"
import { useEffect, useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

const TOTAL_SLIDES = 6

export default function HomeContent() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slidesRef = useRef<(HTMLElement | null)[]>([])

  // Use IntersectionObserver to reliably detect which slide is visible
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSlide(index)
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(slide)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Register a slide element ref by index
  const setSlideRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      slidesRef.current[index] = el
    },
    []
  )

  // Scroll to a specific slide index
  const scrollToSlide = useCallback((index: number) => {
    const target = slidesRef.current[index]
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  // Scroll to the next slide from current position
  const scrollToNext = useCallback(() => {
    const nextIndex = Math.min(activeSlide + 1, TOTAL_SLIDES - 1)
    scrollToSlide(nextIndex)
  }, [activeSlide, scrollToSlide])

  return (
    <div className="bg-background text-foreground snap-y snap-mandatory">
      {/* Slide 1: Hero */}
      <section
        ref={setSlideRef(0)}
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden snap-start bg-background p-4 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="z-10 max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">


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

        <div
          className="absolute bottom-10 animate-bounce cursor-pointer p-2 hover:bg-muted/50 rounded-full transition-colors"
          onClick={scrollToNext}
          role="button"
          aria-label="Slide suivante"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') scrollToNext() }}
        >
          <ArrowDown className="text-muted-foreground w-8 h-8" />
        </div>
      </section>

      {/* Slide 2: Custom Apps */}
      <SlideSection
        ref={setSlideRef(1)}
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
        ref={setSlideRef(2)}
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
        ref={setSlideRef(3)}
        id="automation"
        title="Automatisation Intelligente"
        description="Transformez vos processus manuels en workflows automatisés performants. Gagnez du temps et réduisez les erreurs pour vous concentrer sur votre valeur ajoutée."
        features={[
          "Workflows automatisés (n8n, Make)",
          "Bots & Assistants IA",
          "Optimisation des processus métiers",
          "Synchronisation de données multi-plateformes"
        ]}
        icon={<AnimatedIcon name="automation" className="w-24 h-24 md:w-32 md:h-32" />}
        variant="primary"
      />

      {/* Slide 5: Odoo & ERP Integration */}
      <SlideSection
        ref={setSlideRef(4)}
        id="erp"
        title="Intégration Odoo & ERP"
        description="Centralisez la gestion de votre entreprise avec Odoo, l'ERP open-source le plus complet. Nous déployons, configurons et personnalisons Odoo pour répondre parfaitement à vos besoins métiers."
        features={[
          "Déploiement & configuration Odoo",
          "Modules CRM, Ventes, Comptabilité & RH",
          "Développement de modules sur-mesure",
          "Migration & intégration avec vos outils existants"
        ]}
        icon={<AnimatedIcon name="erp" className="w-24 h-24 md:w-32 md:h-32" />}
        variant="secondary"
        reverse
        cta={{ text: "Voir nos réalisations", href: "/expertises" }}
      />

      {/* Slide 6: CTA Final */}
      <section
        ref={setSlideRef(5)}
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden snap-start bg-foreground text-background text-center p-4"
      >
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
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 hidden lg:flex" aria-label="Navigation slides">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            aria-label={`Aller à la slide ${i + 1}`}
            aria-current={activeSlide === i ? "true" : undefined}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activeSlide === i ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-primary/50"
            )}
          />
        ))}
      </nav>
    </div>
  )
}

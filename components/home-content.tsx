"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ArrowDown, ArrowRight, Play } from "lucide-react"
import { SlideSection } from "@/components/slide-section"
import { AnimatedIcon } from "@/components/animated-icon"
import { useEffect, useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

const TOTAL_SLIDES = 8

const homeFaqItems = [
  {
    question: "Nous n'avons pas encore digitalisé nos processus. Par où commencer ?",
    answer: "C'est justement le meilleur moment pour agir. Nous réalisons un audit gratuit de vos workflows existants pour identifier les quick wins : les tâches répétitives à automatiser en priorité. Pas besoin de tout transformer d'un coup — on commence petit, avec un ROI mesurable dès les premières semaines."
  },
  {
    question: "Comment convaincre ma direction d'investir dans ces technologies ?",
    answer: "Nous préparons avec vous un business case chiffré : temps gagné, erreurs évitées, coûts réduits. Nos projets pilotes sont conçus pour démontrer rapidement la valeur ajoutée, avec des résultats concrets en 2 à 4 semaines. C'est souvent suffisant pour déclencher un déploiement plus large."
  },
  {
    question: "Nos données sont sensibles. Comment garantissez-vous leur sécurité ?",
    answer: "La sécurité est au cœur de notre approche. Nous travaillons avec des infrastructures hébergées en Europe (RGPD), mettons en place des protocoles d'anonymisation pour les formations IA, et auditons systématiquement les flux de données. Aucune donnée client ne transite par des serveurs tiers non autorisés."
  },
  {
    question: "Peut-on commencer par un petit projet avant de s'engager davantage ?",
    answer: "Absolument, c'est même ce que nous recommandons. Un premier projet pilote (automatisation d'un processus, dashboard, mini-app) permet de valider l'approche, mesurer les gains et construire la confiance. La majorité de nos clients élargissent ensuite le périmètre naturellement."
  },
  {
    question: "Quelle est la différence entre Gaussia et une ESN classique ?",
    answer: "Nous ne vendons pas du temps-homme. Nous concevons des solutions clé en main, avec un interlocuteur unique de A à Z. Notre taille nous permet d'être agiles, réactifs et transparents — pas de reporting superflu, pas de couches hiérarchiques. Vous parlez directement aux experts qui construisent votre solution."
  },
]

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

      {/* Slide 6: Formation */}
      <SlideSection
        ref={setSlideRef(5)}
        id="formation"
        title="Formation & Montée en Compétences"
        description="Formez vos équipes aux outils qui transforment le quotidien professionnel. IA Générative, Power BI, Google Looker Studio : nous vous accompagnons dans leur adoption concrète, avec des méthodes pratiques et un cadre sécurisé garantissant l'anonymisation de vos données."
        features={[
          "IA Générative (ChatGPT, Gemini, Claude)",
          "Power BI & Google Looker Studio",
          "Bonnes pratiques & anonymisation des données",
          "Ateliers pratiques adaptés à votre métier"
        ]}
        icon={<AnimatedIcon name="formation" className="w-24 h-24 md:w-32 md:h-32" />}
        variant="primary"
        reverse
        cta={{ text: "Demander un programme", href: "/contact" }}
      />

      {/* Slide 7: FAQ */}
      <section
        ref={setSlideRef(6)}
        className="min-h-screen flex items-center justify-center px-4 py-16 sm:p-6 md:p-12 relative overflow-hidden snap-start bg-background"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16 items-start z-10">
          {/* Left: Title */}
          <div className="lg:col-span-2 lg:sticky lg:top-1/3">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight text-foreground">
              Tout ce que vous devez savoir sur{" "}
              <span className="text-primary">Gaussia</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Des réponses concrètes pour vous aider à prendre la bonne décision.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" className="rounded-full px-6 border-muted hover:bg-muted/50">
                <Link href="/contact">Plus de questions ? Contactez-nous</Link>
              </Button>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {homeFaqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-lg data-[state=open]:border-primary/20 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline py-5 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary [&>svg]:shrink-0">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Slide 8: CTA Final */}
      <section
        ref={setSlideRef(7)}
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

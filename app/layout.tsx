import type React from "react"
import type { Metadata } from "next"
import { Instrument_Sans, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-clash", // Mapping to internal name 'clash' for tailwind config compatibility
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gaussia.fr"),
  title: {
    default: "GAUSSIA | Agence Digitale Paris — Automatisation, Développement Web & Odoo",
    template: "%s | GAUSSIA",
  },
  description:
    "Agence digitale à Paris spécialisée en automatisation des processus (n8n, Make), développement web sur-mesure (Next.js), applications métiers, intégration Odoo & ERP. Consultation gratuite.",
  keywords: [
    "agence digitale Paris",
    "automatisation entreprise",
    "développement web sur-mesure",
    "intégration Odoo",
    "application métier",
    "transformation digitale",
    "automatisation processus",
    "n8n Make workflows",
    "ERP open source",
    "développement Next.js",
    "agence web Paris",
    "solutions digitales",
  ],
  authors: [{ name: "GAUSSIA", url: "https://gaussia.fr" }],
  creator: "GAUSSIA",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gaussia.fr",
    siteName: "GAUSSIA",
    title: "GAUSSIA | Agence Digitale Paris — Automatisation & Développement Web",
    description:
      "Agence digitale à Paris : automatisation, développement web, applications sur-mesure et intégration Odoo. Consultation gratuite.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GAUSSIA — Agence Digitale Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAUSSIA | Agence Digitale Paris",
    description:
      "Automatisation, développement web sur-mesure, applications métiers et intégration Odoo. Agence digitale à Paris.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://gaussia.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/20`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>

    </html>
  )
}

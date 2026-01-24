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
  title: "GAUSSIA | Architectes de Solutions Digitales",
  description:
    "Cabinet d'innovation digitale spécialisé en Automatisation, Développement Web et Applications Sur-Mesure.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/20`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>

    </html>
  )
}

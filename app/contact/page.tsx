"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2, Check } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    expertise: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formspree.io/f/xrblaldo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Erreur:", error)
    }
    setIsSubmitting(false)
  }

  const pricingPlans = [
    {
      name: "Audit IA",
      price: "Gratuit",
      description: "Évaluez le potentiel IA de votre entreprise",
      features: [
        "Analyse de vos processus actuels",
        "Identification des opportunités IA",
        "Estimation du ROI potentiel",
        "Roadmap personnalisée",
        "Appel de 30 minutes inclus"
      ],
      cta: "Demander l'audit gratuit",
      href: "/expertises/audit-ia",
      highlighted: true
    },
    {
      name: "Projet sur-mesure",
      price: "Sur devis",
      description: "Développement adapté à vos besoins",
      features: [
        "Cahier des charges détaillé",
        "Méthodologie agile",
        "Livraison en 8-12 semaines",
        "Formation des équipes",
        "Support post-livraison"
      ],
      cta: "Demander un devis",
      href: "#form",
      highlighted: false
    },
    {
      name: "Accompagnement",
      price: "À partir de 1 500€/mois",
      description: "Support continu et évolutions",
      features: [
        "Maintenance applicative",
        "Évolutions mensuelles",
        "Support prioritaire",
        "Reporting mensuel",
        "Comité de pilotage"
      ],
      cta: "En savoir plus",
      href: "#form",
      highlighted: false
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Parlons de votre projet</h1>
            <p className="text-xl text-gray-400">
              PME, ETI ou startup : nous vous accompagnons dans votre transformation digitale avec des solutions concrètes et mesurables.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nos formules</h2>
            <p className="text-gray-400">Des offres adaptées à chaque étape de votre projet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-slate-700 flex flex-col h-full ${
                  plan.highlighted 
                    ? "bg-slate-800 border-blue-500" 
                    : "bg-slate-800/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Recommandé
                    </span>
                  </div>
                )}
                <CardContent className="p-6 pt-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full mt-auto ${
                      plan.highlighted 
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700" 
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="form" className="py-16 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulaire */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                    <p className="text-gray-400">
                      Merci pour votre message. Nous vous répondrons sous 24h.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="mt-1.5 bg-slate-900 border-slate-600 text-white placeholder:text-gray-500"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="mt-1.5 bg-slate-900 border-slate-600 text-white placeholder:text-gray-500"
                          placeholder="jean@entreprise.fr"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-gray-300">Entreprise</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="mt-1.5 bg-slate-900 border-slate-600 text-white placeholder:text-gray-500"
                          placeholder="Nom de l'entreprise"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="mt-1.5 bg-slate-900 border-slate-600 text-white placeholder:text-gray-500"
                          placeholder="+33 6 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="expertise" className="text-gray-300">Domaine d'intérêt</Label>
                      <Select onValueChange={(value) => handleChange("expertise", value)}>
                        <SelectTrigger className="mt-1.5 bg-slate-900 border-slate-600 text-white">
                          <SelectValue placeholder="Sélectionnez un domaine" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="developpement">Développement sur-mesure</SelectItem>
                          <SelectItem value="mobile">Applications mobiles</SelectItem>
                          <SelectItem value="ia">Intelligence Artificielle</SelectItem>
                          <SelectItem value="erp">ERP / Odoo</SelectItem>
                          <SelectItem value="nocode">No-Code / Low-Code</SelectItem>
                          <SelectItem value="audit">Audit IA gratuit</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="expertise" value={formData.expertise} />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-300">Votre message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        rows={4}
                        className="mt-1.5 bg-slate-900 border-slate-600 text-white placeholder:text-gray-500"
                        placeholder="Décrivez votre projet, vos enjeux et vos objectifs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Infos contact + Calendly */}
            <div className="space-y-6">
              {/* Calendly CTA */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3">Réservez un appel découverte</h3>
                  <p className="text-gray-400 mb-6">
                    30 minutes pour comprendre vos enjeux et vous proposer une première approche. Sans engagement.
                  </p>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white">
                    <a href="https://calendly.com/optibot-world/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4 mr-2" />
                      Choisir un créneau sur Calendly
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Coordonnées */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Nos coordonnées</h3>
                  <div className="space-y-5">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href="mailto:contact@gaussia.fr" className="text-white hover:text-blue-400 transition-colors">
                          contact@gaussia.fr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Téléphone</p>
                        <a href="tel:+33695467881" className="text-white hover:text-blue-400 transition-colors">
                          +33 6 95 46 78 81
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Localisation</p>
                        <p className="text-white">Paris, France</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ rapide */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Questions fréquentes</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-1">Quel est le délai moyen d'un projet ?</h4>
                      <p className="text-gray-400 text-sm">
                        Entre 8 et 12 semaines selon la complexité, avec des livrables intermédiaires.
                      </p>
                    </div>
                    <div className="border-t border-slate-700 pt-4">
                      <h4 className="font-medium text-white mb-1">L'audit IA est-il vraiment gratuit ?</h4>
                      <p className="text-gray-400 text-sm">
                        Oui, c'est un premier diagnostic sans engagement pour évaluer le potentiel de votre entreprise.
                      </p>
                    </div>
                    <div className="border-t border-slate-700 pt-4">
                      <h4 className="font-medium text-white mb-1">Travaillez-vous en remote ?</h4>
                      <p className="text-gray-400 text-sm">
                        Oui, nous travaillons avec des clients dans toute la France et à l'international.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à accélérer votre transformation digitale ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Rejoignez les 50+ entreprises qui ont fait confiance à Gaussia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              <a href="https://calendly.com/optibot-world/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4 mr-2" />
                Réserver un appel
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Link href="/expertises/audit-ia">
                Demander un audit IA gratuit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from "lucide-react"

const faqItems = [
    {
        question: "Quels types d'entreprises accompagnez-vous ?",
        answer: "Nous accompagnons les PME, ETI et grandes entreprises dans tous les secteurs d'activité. Nos solutions s'adaptent à la taille et aux besoins spécifiques de chaque organisation, de la startup à la multinationale."
    },
    {
        question: "Combien de temps dure un projet type ?",
        answer: "La durée varie selon la complexité du projet. Un projet d'automatisation simple peut être livré en 2 à 4 semaines, tandis qu'une application sur-mesure complète peut nécessiter 8 à 16 semaines. Nous définissons un calendrier précis dès la phase d'audit."
    },
    {
        question: "Proposez-vous un audit gratuit ?",
        answer: "Oui, nous offrons une consultation initiale gratuite de 30 minutes pour évaluer vos besoins, comprendre vos défis actuels et vous proposer des premières pistes de solution. Réservez votre créneau directement sur Calendly."
    },
    {
        question: "Quelles technologies utilisez-vous ?",
        answer: "Nous utilisons les technologies les plus modernes et robustes : Next.js et React pour le web, n8n et Make pour l'automatisation, Odoo pour l'ERP, Python et Node.js pour le backend, ainsi que des solutions cloud (AWS, Vercel, Railway)."
    },
    {
        question: "Comment se déroule un projet avec Gaussia ?",
        answer: "Notre méthodologie en 3 étapes garantit le succès : 1) Audit & Analyse (1-2 semaines) pour comprendre vos besoins, 2) Conception & Développement agile (2-4 semaines) avec validation continue, 3) Déploiement & Accompagnement avec formation de vos équipes."
    },
    {
        question: "Proposez-vous de la maintenance après livraison ?",
        answer: "Absolument. Nous proposons des contrats de maintenance et de support post-déploiement incluant les mises à jour, la surveillance, la correction de bugs et l'évolution de vos outils. Nous restons votre partenaire sur le long terme."
    },
    {
        question: "Pouvez-vous intégrer Odoo dans notre entreprise ?",
        answer: "Oui, l'intégration Odoo est l'une de nos expertises principales. Nous assurons le déploiement, la configuration, la personnalisation et le développement de modules sur-mesure. Nous gérons également la migration depuis vos outils existants."
    },
    {
        question: "Quel est le coût d'un projet d'automatisation ?",
        answer: "Le coût dépend de la complexité et du périmètre du projet. Nous proposons des devis personnalisés après la phase d'audit gratuit. Nos solutions d'automatisation offrent un retour sur investissement rapide, souvent en quelques semaines, grâce au temps gagné sur les tâches répétitives."
    },
]

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        expertise: "",
        message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch("https://formspree.io/f/mykelvzj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setIsSubmitted(true)
                setTimeout(() => setIsSubmitted(false), 4000)
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    expertise: "",
                    message: "",
                })
            } else {
                alert("Erreur lors de l'envoi. Merci de réessayer.")
            }
        } catch (err) {
            alert("Erreur réseau. Merci de vérifier votre connexion.")
        }
    }

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <div className="min-h-screen py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Contactez-nous</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Prêt à transformer votre entreprise ? Discutons de votre projet et découvrons ensemble les solutions
                        adaptées à vos besoins.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="border-0 shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl text-navy">Parlez-nous de votre projet</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-navy mb-2">Message envoyé !</h3>
                                    <p className="text-gray-600">
                                        Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name">Nom complet *</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => handleChange("name", e.target.value)}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="company">Entreprise</Label>
                                            <Input
                                                id="company"
                                                value={formData.company}
                                                onChange={(e) => handleChange("company", e.target.value)}
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="phone">Téléphone</Label>
                                            <Input
                                                id="phone"
                                                value={formData.phone}
                                                onChange={(e) => handleChange("phone", e.target.value)}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="expertise">Domaine d&apos;intérêt</Label>
                                        <Select onValueChange={(value) => handleChange("expertise", value)}>
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Sélectionnez un domaine" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="automatisation">Automatisation des processus</SelectItem>
                                                <SelectItem value="web">Développement Web</SelectItem>
                                                <SelectItem value="apps">Applications Sur-Mesure</SelectItem>
                                                <SelectItem value="odoo">Intégration Odoo & ERP</SelectItem>
                                                <SelectItem value="data">Data & Visualisation</SelectItem>
                                                <SelectItem value="cloud">Cloud & Déploiement</SelectItem>
                                                <SelectItem value="all">Tous les domaines</SelectItem>
                                                <SelectItem value="other">Autre</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            required
                                            rows={5}
                                            className="mt-1"
                                            placeholder="Décrivez-nous votre projet, vos défis actuels et vos objectifs..."
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                                        <Send className="h-4 w-4 mr-2" />
                                        Envoyer le message
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>

                    {/* Contact Info & Calendar */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <Card className="border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl text-navy">Nos coordonnées</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-navy">Adresse</h4>
                                        <p className="text-gray-600">Paris, France</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-navy">Email</h4>
                                        <p className="text-gray-600">contact@gaussia.fr</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-navy">Téléphone</h4>
                                        <p className="text-gray-600">+33 6 95 46 78 81 </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Calendar Booking */}
                        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
                            <CardHeader>
                                <CardTitle className="text-2xl text-navy flex items-center">
                                    <Calendar className="h-6 w-6 mr-2" />
                                    Réservez un RDV
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-6">
                                    Planifiez un appel de 30 minutes avec nos experts pour discuter de votre projet en détail et obtenir
                                    des conseils personnalisés.
                                </p>
                                <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                                    <a href="https://calendly.com/optibot-world/30min" target="_blank" rel="noopener noreferrer">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Réserver sur Calendly
                                    </a>
                                </Button>
                                <p className="text-sm text-gray-600 mt-4 text-center">Consultation gratuite • Sans engagement</p>
                            </CardContent>
                        </Card>

                        {/* FAQ */}
                        <Card className="border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl text-navy">Questions fréquentes</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {faqItems.map((item, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <h4 className="font-semibold text-navy mb-2">{item.question}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center bg-slate-900 text-white rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre transformation ?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Rejoignez les entreprises qui ont déjà fait confiance à GAUSSIA pour optimiser leurs processus et accélérer
                        leur croissance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <a href="https://calendly.com/optibot-world/30min" target="_blank" rel="noopener noreferrer">
                                <Calendar className="h-4 w-4 mr-2" />
                                Réserver maintenant
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-navy bg-transparent"
                        >
                            <a href="mailto:contact@gaussia.fr">
                                <Mail className="h-4 w-4 mr-2" />
                                Nous écrire
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Database, Cloud, Zap } from "lucide-react"
import Link from "next/link"

export default function EquipePage() {
  const team = [
    {
      name: "Rayane",
      role: "Expert Data & DevOps",
      expertise: "Data Science, Business Intelligence, Visualisation",
      description:
        "3 années d'expérience dans la modélisation de données et l'analyse business. Spécialiste des solutions d'analyse prédictive et de visualisation de données pour l'aide à la décision.",
      skills: ["Python", "SQL", "Analytics", "Power BI", "Tableau", "Azure Data"],
      icon: Cloud,
      color: "orange",
    },
    {
      name: "Faiçal",
      role: "Spécialiste IA, modèles LLM",
      expertise: "IA, Infrastructure, Machine learning ",
      description:
        "Specialiste intelligence artificielle et modèles prédictifs LLM.",
      skills: ["Java","Phoenix"],
      icon: Database,
      color: "green",
    },
    {
      name: "Assane",
      role: "Expert Automatisation",
      expertise: "RPA, Intégrations, Workflows",
      description:
        "Consultant en automatisation des processus métiers. Expert en intégrations système et développement de workflows intelligents.",
      skills: ["MAKE", "Zapier", "API", "Java", "N8N", "RPA"],
      icon: Zap,
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Notre équipe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois experts passionnés unis par une vision commune : transformer les entreprises grâce à la technologie et
            l'innovation.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-16">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 bg-${member.color}-100 rounded-full flex items-center justify-center mr-4`}
                  >
                    <member.icon className={`h-8 w-8 text-${member.color}-600`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-navy">{member.name}</h2>
                    <p className={`text-${member.color}-600 font-medium text-lg`}>{member.role}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-6">{member.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Domaines d'expertise :</h4>
                  <p className="text-gray-700 mb-4">{member.expertise}</p>

                  <h4 className="font-semibold text-navy mb-3">Compétences techniques :</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-${member.color}-100 text-${member.color}-800 rounded-full text-sm font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={`h-80 bg-gradient-to-br from-${member.color}-100 to-${member.color}-200 flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <div
                          className={`w-32 h-32 bg-${member.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <member.icon className="h-16 w-16 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                        <p className={`text-${member.color}-700 font-medium`}>{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Nos valeurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ce qui nous unit et guide notre approche dans chaque projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans chaque projet, en appliquant les meilleures pratiques et technologies de
                pointe.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Technologie</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des technologies pour proposer des solutions innovantes et créatives à nos
                clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Précision</h3>
              <p className="text-gray-600">
                Nous plaçons la précision au cœur de notre démarche pour garantir des solutions métiers adaptées à chaque projet.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Rencontrons-nous !</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Vous avez un projet ? Nos experts sont là pour vous accompagner et transformer vos idées en solutions
            concrètes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Réserver un RDV
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertises">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

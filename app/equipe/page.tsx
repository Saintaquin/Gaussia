import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail, Database, Cloud, Zap } from "lucide-react"
import Link from "next/link"

const colorMap = {
  orange: {
    bg100: "bg-orange-100",
    bg200: "bg-orange-200",
    text600: "text-orange-600",
    text700: "text-orange-700",
    text800: "text-orange-800",
    gradient: "bg-gradient-to-br from-orange-100 to-orange-200",
  },
  green: {
    bg100: "bg-green-100",
    bg200: "bg-green-200",
    text600: "text-green-600",
    text700: "text-green-700",
    text800: "text-green-800",
    gradient: "bg-gradient-to-br from-green-100 to-green-200",
  },
  purple: {
    bg100: "bg-purple-100",
    bg200: "bg-purple-200",
    text600: "text-purple-600",
    text700: "text-purple-700",
    text800: "text-purple-800",
    gradient: "bg-gradient-to-br from-purple-100 to-purple-200",
  },
}

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
      description: "Specialiste intelligence artificielle et modèles prédictifs LLM.",
      skills: ["Java", "Phoenix"],
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
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Notre équipe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trois experts passionnés unis par une vision commune : transformer les entreprises grâce à la technologie et
            l'innovation.
          </p>
        </div>

        <div className="space-y-16">
          {team.map((member, index) => {
            const colors = colorMap[member.color as keyof typeof colorMap]
            return (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${colors.bg100} rounded-full flex items-center justify-center mr-4`}>
                      <member.icon className={`h-8 w-8 ${colors.text600}`} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-navy">{member.name}</h2>
                      <p className={`${colors.text600} font-medium text-lg`}>{member.role}</p>
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
                          className={`px-3 py-1 ${colors.bg100} ${colors.text800} rounded-full text-sm font-medium`}
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
                      <div className={`h-80 ${colors.gradient} flex items-center justify-center`}>
                        <div className="text-center">
                          <div className={`w-32 h-32 ${colors.text600} rounded-full flex items-center justify-center mx-auto mb-4`}>
                            <member.icon className="h-16 w-16 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                          <p className={`${colors.text700} font-medium`}>{member.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

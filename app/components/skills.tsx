import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Java", level: 70 },
      ],
    },
    {
      title: "Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "MySQL", level: 70 },
        { name: "Express.js", level: 65 },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 75 },
        { name: "Docker", level: 60 },
        { name: "Figma", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here are the technologies and tools I'm proficient in and continuously learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-6">Also Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "AWS", "Machine Learning"].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

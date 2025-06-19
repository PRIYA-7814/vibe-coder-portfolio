import { Code, Database, Globe, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "React", level: 75 },
      { name: "Node.js", level: 65 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 70 },
      { name: "Docker", level: 60 },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "PostgreSQL", level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

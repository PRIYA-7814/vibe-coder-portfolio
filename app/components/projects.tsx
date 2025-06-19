import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Personal Finance Tracker",
      description:
        "A web application to track personal expenses and income with interactive charts and budget planning features.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and beautiful UI animations.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["JavaScript", "HTML/CSS", "Weather API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Flask", "SQLite", "Bootstrap"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website built with modern web technologies and best practices.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Student Grade Calculator",
      description: "A simple yet effective grade calculator for students with GPA computation and progress tracking.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["C++", "Qt", "SQLite"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false,
    },
    {
      title: "Recipe Finder App",
      description:
        "Mobile-friendly web app to find recipes based on available ingredients with nutritional information.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Recipe API", "CSS3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? "ring-2 ring-blue-200" : ""
              }`}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-slate-800">{project.title}</CardTitle>

                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>

                  {project.liveUrl && (
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product catalog, and payment integration.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application with drag-and-drop functionality, built using React and local storage for data persistence.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "CSS3", "JavaScript", "Local Storage"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A clean weather dashboard that displays current weather and forecasts using OpenWeatherMap API with location-based services.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Student Portal System",
    description:
      "A comprehensive student management system with features for attendance tracking, grade management, and course enrollment.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Django", "SQLite", "Bootstrap"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing projects and skills, built with modern web technologies and best practices.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with multiple rooms, user authentication, and message history using Socket.io and Express.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Socket.io", "Express", "React", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

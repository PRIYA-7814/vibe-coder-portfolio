import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">PRIYA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Passionate engineering student with a love for problem-solving and innovation. Currently pursuing B.Tech
              in Computer Science Engineering at Punjabi University.
            </p>
            <p className="text-lg text-gray-500 mb-8">B.Tech CSE, Punjabi University • Third Year</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:priya@example.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Priya's profile photo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

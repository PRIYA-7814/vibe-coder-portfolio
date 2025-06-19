"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4">
                Hi, I'm <span className="text-blue-600">Alex Johnson</span>
              </h1>
              <p className="text-xl text-slate-600 mb-2">
                Aspiring Software Engineer passionate about creating innovative solutions
              </p>
              <p className="text-lg text-slate-500">Building the future, one line of code at a time</p>
            </div>

            {/* Academic Status */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-slate-600">
              <GraduationCap className="w-5 h-5" />
              <span>B.Tech CSE, Punjabi University - First Year</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 text-green-600" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                Let's Connect
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg">
                View Projects
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Alex Johnson - Profile Photo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

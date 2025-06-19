import Header from "./components/header"
import Hero from "./components/hero"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ScrollToTop from "./components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

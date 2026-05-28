import { useEffect } from 'react'
import { useScrollRevealAll } from '@/hooks/useScrollReveal'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/shared/CustomCursor'
import Preloader from '@/components/shared/Preloader'
import ScrollProgress from '@/components/shared/ScrollProgress'
import BackToTop from '@/components/shared/BackToTop'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function App() {
  useScrollRevealAll()

  // Re-run scroll reveal after preloader hides
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.classList.add('visible')
        }
      })
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}

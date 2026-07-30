import { useState, useCallback, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
import ProjectDetail from '@/components/sections/ProjectDetail'
import type { Project } from '@/data/portfolio-data'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project)
    window.scrollTo({ top: 0 })
  }, [])

  const handleBackToPortfolio = useCallback(() => {
    setSelectedProject(null)
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  return (
    <div className="relative">
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBackToPortfolio} />
      ) : (
        <>
          <Preloader />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects onSelectProject={handleSelectProject} />
            <Contact />
          </main>
          <BackToTop />
          <Footer />
        </>
      )}
    </div>
  )
}

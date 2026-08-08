import { useState, useCallback, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
import { projects, type Project } from '@/data/portfolio-data'

gsap.registerPlugin(ScrollTrigger)

function getProjectFromHash(): Project | null {
  const match = window.location.hash.match(/^#\/project\/(.+)$/)
  if (!match) return null
  const title = decodeURIComponent(match[1])
  return projects.find((p) => p.title === title) ?? null
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(getProjectFromHash)

  const handleSelectProject = useCallback((project: Project) => {
    window.history.pushState(null, '', `#/project/${encodeURIComponent(project.title)}`)
    setSelectedProject(project)
    window.scrollTo({ top: 0 })
  }, [])

  const handleBackToPortfolio = useCallback(() => {
    if (window.location.hash) {
      window.history.back()
    } else {
      setSelectedProject(null)
    }
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const project = getProjectFromHash()
      if (project) {
        setSelectedProject(project)
        window.scrollTo({ top: 0 })
      } else {
        setSelectedProject(null)
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        }, 50)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="relative">
      <ScrollProgress />
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBackToPortfolio} />
      ) : (
        <>
          <Preloader />
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

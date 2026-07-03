import { useState, useRef } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { projects, type Project } from '@/data/portfolio-data'
import { ExternalLink, Github } from 'lucide-react'
import ProjectModal from '@/components/ui/ProjectModal'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalClosing(false)
  }

  const handleCloseModal = () => {
    setIsModalClosing(true)
    setTimeout(() => {
      setSelectedProject(null)
      setIsModalClosing(false)
    }, 400) // Match this duration with CSS transitions (400ms)
  }

  useGSAP(() => {
    // Header
    gsap.from('.proj-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })

    // Project cards
    gsap.from('.proj-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.proj-grid',
        start: 'top 80%',
      }
    })

    // Footer button
    gsap.from('.proj-footer', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.proj-footer',
        start: 'top 90%',
      }
    })
  }, { scope: containerRef })

  return (
    <section id="projects" ref={containerRef} className="py-28 bg-surface/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="proj-header">
          <SectionHeader label="Proyek" title="Karya" highlight="Pilihan" description="Proyek-proyek yang menunjukkan kemampuan saya dalam membangun produk digital yang fungsional dan berdesain menarik." />
        </div>

        <div className="proj-grid bento-grid">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="proj-card bento-4 project-card glass-card rounded-3xl overflow-hidden cursor-pointer" 
              onClick={() => handleOpenModal(project)}
            >
              <div className="relative h-48 overflow-hidden group">
                <img src={project.image} alt={`${project.title} Preview`} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
              </div>
              <div className="p-6 pt-4 flex flex-col h-[calc(100%-12rem)] min-h-[300px]">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${project.colorClass} flex items-center justify-center text-2xl flex-shrink-0`}>{project.emoji}</div>
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a href={project.demoUrl} aria-label="Demo" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/[0.15] transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} aria-label="GitHub" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/[0.15] transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-text-primary text-xl">{project.title}</h3>
                  <span className="px-2 py-0.5 rounded-lg bg-green-500/15 border border-green-500/25 text-[10px] text-green-300 font-medium uppercase tracking-wide">{project.status}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-grow line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-lg border text-xs ${project.techColorClass}`}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradientClass}`} />
            </div>
          ))}
        </div>

        <div className="proj-footer text-center mt-12">
          <a href="https://github.com/dimsdevv" target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-semibold glass border border-border text-text-primary hover:border-white/[0.15]">
            <Github className="w-5 h-5" />
            Lihat Semua Proyek di GitHub
          </a>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
          isClosing={isModalClosing} 
        />
      )}
    </section>
  )
}

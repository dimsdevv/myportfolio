import { useRef } from 'react'
import { ArrowLeft, ExternalLink, Github, Check, Zap, Lightbulb } from 'lucide-react'
import { Landmark, Rocket, Coffee, ShoppingCart, type LucideIcon } from 'lucide-react'
import type { Project } from '@/data/portfolio-data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, LucideIcon> = { Landmark, Rocket, Coffee, ShoppingCart }

const FALLBACK_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="600"%3E%3Crect fill="%23111111" width="1200" height="600"/%3E%3Ctext fill="%2352525b" font-family="monospace" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPreview Not Available%3C/text%3E%3C/svg%3E'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const containerRef = useRef<HTMLElement>(null)
  const ProjectIcon = iconMap[project.icon] ?? Landmark

  useGSAP(() => {
    const sections = gsap.utils.toArray('.pd-section')
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      )
    })

    gsap.fromTo('.pd-hero-img',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="min-h-screen bg-[#030303]">
      {/* ── Top Bar ── */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#030303]/70 border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Kembali
          </button>
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-text-secondary text-xs font-medium hover:bg-white/[0.1] hover:text-text-primary hover:border-white/[0.15] transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-text-secondary text-xs font-medium hover:bg-white/[0.1] hover:text-text-primary hover:border-white/[0.15] transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/60 to-[#030303] z-10 pointer-events-none" />
        <div className="relative h-[360px] sm:h-[480px] lg:h-[540px] overflow-hidden">
          <img
            src={project.image}
            alt={`Tampilan ${project.title}`}
            onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
            className="pd-hero-img w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-28 relative z-20 pb-24">

        {/* Title block */}
        <div className="pd-section mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className={`w-14 h-14 rounded-2xl ${project.colorClass} flex items-center justify-center flex-shrink-0`}>
              <ProjectIcon className="w-6 h-6 text-text-secondary" />
            </div>
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.05]">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-green-500/15 border border-green-500/25 text-[10px] text-green-300 font-medium uppercase tracking-wide">
                  {project.status}
                </span>
                <span className="text-xs text-text-muted uppercase tracking-wider">{project.category}</span>
              </div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* The Story */}
        <div className="pd-section mb-20">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-text-primary to-transparent" />
            The Story
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              {project.description} Proyek ini lahir dari kebutuhan nyata — sesuatu yang saya rancang untuk diselesaikan, bukan sekadar demonstrasi teknologi. Setiap fitur ada karena ada masalah yang harus dijawab.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="pd-section mb-20">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-text-primary to-transparent" />
            Yang Saya Bangun
          </h2>
          <div className="space-y-4">
            {project.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-text-secondary" />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pd-section mb-20">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-text-primary to-transparent" />
            Under the Hood
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2.5 rounded-xl border text-sm font-medium ${project.techColorClass}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="pd-section mb-20 grid sm:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Zap className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="font-display font-bold text-text-primary">Tantangan</h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="font-display font-bold text-text-primary">Solusi</h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pd-section text-center pt-8 border-t border-white/[0.04]">
          <p className="text-text-muted text-sm mb-6">Tertarik dengan project ini?</p>
          <div className="flex flex-wrap justify-center gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-text-primary text-sm font-semibold hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Buka Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-transparent border border-white/[0.05] text-text-secondary text-sm font-semibold hover:bg-white/[0.04] hover:border-white/[0.1] hover:text-text-primary transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                Lihat Source Code
              </a>
            )}
          </div>
          <button
            onClick={onBack}
            className="mt-8 inline-flex items-center gap-2 text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke Proyek Lain
          </button>
        </div>

      </div>
    </section>
  )
}

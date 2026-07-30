import { useRef, useState, useEffect, useCallback } from 'react'
import { ArrowLeft, ExternalLink, Github, Check, Zap, Lightbulb, ChevronDown } from 'lucide-react'
import { Landmark, Rocket, Coffee, ShoppingCart, Printer, type LucideIcon } from 'lucide-react'
import type { Project } from '@/data/portfolio-data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, LucideIcon> = { Landmark, Rocket, Coffee, ShoppingCart, Printer }

const FALLBACK_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="600"%3E%3Crect fill="%23111111" width="1200" height="600"/%3E%3Ctext fill="%2352525b" font-family="monospace" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPreview Not Available%3C/text%3E%3C/svg%3E'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const containerRef = useRef<HTMLElement>(null)
  const ProjectIcon = iconMap[project.icon] ?? Landmark
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [showScrollHint, setShowScrollHint] = useState(true)

  // Swipe down to go back
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      setTouchStart(e.touches[0].clientY)
    }
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = e.changedTouches[0].clientY - touchStart
    if (diff > 120 && window.scrollY === 0) {
      onBack()
    }
    setTouchStart(null)
  }, [touchStart, onBack])

  // Hide scroll hint after first scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowScrollHint(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    const sections = gsap.utils.toArray('.pd-section')
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
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
    <section
      ref={containerRef}
      className="min-h-screen bg-[#030303]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Top Bar ── */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#030303]/80 border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 group min-h-[44px] px-2 -ml-2 rounded-lg active:scale-95"
            aria-label="Kembali ke proyek"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="hidden sm:inline">Kembali</span>
          </button>
          <div className="flex items-center gap-2 sm:gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-text-secondary text-xs font-medium min-h-[44px] active:bg-white/[0.12] active:border-white/[0.15] transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Live</span>
                <span className="xs:hidden">Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-text-secondary text-xs font-medium min-h-[44px] active:bg-white/[0.12] active:border-white/[0.15] transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303] z-10 pointer-events-none" />
        <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] overflow-hidden">
          <img
            src={project.image}
            alt={`Tampilan ${project.title}`}
            onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
            className="pd-hero-img w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* ── Scroll Hint (mobile only) ── */}
      {showScrollHint && (
        <div className="sm:hidden flex justify-center -mt-6 relative z-20 pb-4">
          <div className="flex items-center gap-1.5 text-text-muted text-xs animate-bounce">
            <span>Scroll untuk detail</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 -mt-20 sm:-mt-28 relative z-20 pb-20 sm:pb-24">

        {/* Title block */}
        <div className="pd-section mb-12 sm:mb-16">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${project.colorClass} flex items-center justify-center flex-shrink-0`}>
              <ProjectIcon className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 sm:gap-3 mt-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-lg bg-green-500/15 border border-green-500/25 text-[10px] text-green-300 font-medium uppercase tracking-wide">
                  {project.status}
                </span>
                <span className="text-xs text-text-muted capitalize">{project.category}</span>
              </div>
            </div>
          </div>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* The Story */}
        <div className="pd-section mb-14 sm:mb-20">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-text-primary to-transparent" />
            The Story
          </h2>
          <div className="space-y-3 sm:space-y-4 text-text-secondary leading-relaxed">
            <p className="text-sm sm:text-base">
              {project.description} Proyek ini lahir dari kebutuhan nyata — sesuatu yang saya rancang untuk diselesaikan, bukan sekadar demonstrasi teknologi. Setiap fitur ada karena ada masalah yang harus dijawab.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="pd-section mb-14 sm:mb-20">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-text-primary to-transparent" />
            Yang Saya Bangun
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {project.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] active:bg-white/[0.06] active:border-white/[0.1] transition-all duration-300"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-secondary" />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pd-section mb-14 sm:mb-20">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-text-primary to-transparent" />
            Under the Hood
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-xs sm:text-sm font-medium active:scale-95 transition-transform duration-150 ${project.techColorClass}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="pd-section mb-14 sm:mb-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-5 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary" />
              </div>
              <h3 className="font-display font-bold text-text-primary text-sm sm:text-base">Tantangan</h3>
            </div>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div className="p-5 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary" />
              </div>
              <h3 className="font-display font-bold text-text-primary text-sm sm:text-base">Solusi</h3>
            </div>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pd-section text-center pt-6 sm:pt-8 border-t border-white/[0.04]">
          <p className="text-text-muted text-xs sm:text-sm mb-5 sm:mb-6">Tertarik dengan project ini?</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 rounded-xl bg-white/[0.06] border border-white/[0.08] text-text-primary text-sm font-semibold min-h-[48px] active:bg-white/[0.12] active:border-white/[0.15] active:scale-[0.98] transition-all duration-150"
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
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 rounded-xl bg-transparent border border-white/[0.05] text-text-secondary text-sm font-semibold min-h-[48px] active:bg-white/[0.04] active:border-white/[0.1] active:scale-[0.98] transition-all duration-150"
              >
                <Github className="w-4 h-4" />
                Lihat Source Code
              </a>
            )}
          </div>
          <button
            onClick={onBack}
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-text-muted text-xs sm:text-sm min-h-[44px] px-4 rounded-lg active:text-text-primary active:scale-95 transition-all duration-150"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Kembali ke Proyek Lain
          </button>
        </div>

        {/* ── Swipe Hint (mobile only) ── */}
        <div className="sm:hidden mt-12 text-center">
          <p className="text-text-muted/50 text-[10px] uppercase tracking-widest">
            Swipe ke bawah untuk kembali
          </p>
        </div>

      </div>
    </section>
  )
}

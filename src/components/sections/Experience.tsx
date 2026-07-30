import { useRef } from 'react'
import { experiences } from '@/data/portfolio-data'
import { Calendar, Building, GraduationCap, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const iconMap = { Building, GraduationCap }

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.exp-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    )
    gsap.fromTo('.exp-timeline-line',
      { scaleY: 0 },
      { scaleY: 1, duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: '.exp-timeline', start: 'top 80%' } }
    )
    gsap.fromTo('.exp-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.exp-timeline', start: 'top 80%' } }
    )
    gsap.fromTo('.exp-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.exp-cta', start: 'top 90%' } }
    )
  }, { scope: containerRef })

  return (
    <section id="experience" ref={containerRef} className="py-28 sm:py-32 max-w-6xl mx-auto px-5 sm:px-6">
      {/* Header */}
      <div className="exp-header mb-16 sm:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-gradient-to-r from-text-primary to-transparent" />
          <span className="text-[11px] font-medium text-text-muted tracking-[0.2em] uppercase">Pengalaman</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
          Perjalanan <span className="gradient-text">Profesional</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="exp-timeline relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-[1px]">
          <div className="exp-timeline-line w-full h-full bg-gradient-to-b from-text-primary/20 via-text-primary/10 to-transparent origin-top" />
        </div>

        <div className="space-y-10 sm:space-y-14">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon as keyof typeof iconMap] ?? Building
            const isLast = i === experiences.length - 1

            return (
              <div key={exp.title} className="exp-item relative pl-14 sm:pl-18">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 z-10">
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${exp.colorClass} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary" />
                    </div>
                    {!isLast && (
                      <div className="absolute -bottom-10 sm:-bottom-14 left-1/2 -translate-x-1/2 w-[1px] h-10 sm:h-14 bg-gradient-to-b from-text-primary/10 to-transparent" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="group">
                  {/* Top row: Title + Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-text-primary text-lg sm:text-xl leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-text-secondary text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${exp.badgeColorClass} text-[11px] whitespace-nowrap self-start border`}>
                      <Calendar className="w-3 h-3" />
                      {exp.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-lg">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="space-y-2.5 mb-4">
                    {exp.responsibilities.map((resp, j) => (
                      <div key={j} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed">
                        <span className="text-text-muted/40 mt-1 flex-shrink-0 font-mono text-[10px]">{String(j + 1).padStart(2, '0')}</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  {exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-text-secondary group-hover:border-white/[0.12] transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="exp-cta mt-16 sm:mt-20 text-center">
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-text-secondary text-sm font-medium hover:bg-white/[0.06] hover:text-text-primary hover:border-white/[0.15] transition-all duration-300"
        >
          Mari Berkolaborasi
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { experiences } from '@/data/portfolio-data'
import { Calendar } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Header
    gsap.from('.exp-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })

    // Experience cards
    gsap.from('.exp-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.exp-list',
        start: 'top 80%',
      }
    })
  }, { scope: containerRef })

  return (
    <section id="experience" ref={containerRef} className="py-28 max-w-6xl mx-auto px-6">
      <div className="exp-header">
        <SectionHeader
          label="Pengalaman"
          title="Pengalaman"
          highlight="Kerja"
        />
      </div>

      <div className="exp-list max-w-3xl mx-auto space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="exp-card glass-card rounded-3xl p-8 relative overflow-hidden group hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300"
          >
            {/* Left gradient border */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.gradientClass} rounded-l-3xl`} />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex gap-4 items-start">
                <div className={`w-12 h-12 rounded-2xl ${exp.colorClass} flex-shrink-0 flex items-center justify-center text-2xl`}>
                  {exp.emoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary text-lg">{exp.title}</h3>
                  <p className="text-text-secondary text-sm font-medium">{exp.company}</p>
                  <p className="text-text-muted text-xs mt-1">{exp.description}</p>
                </div>
              </div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${exp.badgeColorClass} text-xs whitespace-nowrap self-start sm:self-center border`}>
                <Calendar className="w-3 h-3" />
                {exp.year}
              </span>
            </div>

            <div className="mt-6 pl-16">
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j} className="flex gap-2 text-text-secondary text-sm">
                    <span className={`${exp.bulletColorClass} mt-0.5 flex-shrink-0`}>▸</span>
                    {resp}
                  </li>
                ))}
              </ul>
              {exp.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-text-secondary group-hover:border-white/[0.1] transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

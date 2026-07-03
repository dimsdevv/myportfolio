import { useState, useRef } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { skillCategories } from '@/data/portfolio-data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Skills() {
  const [filter, setFilter] = useState('all')
  const containerRef = useRef<HTMLElement>(null)

  const filters = [
    { label: 'Semua', value: 'all' },
    { label: 'Web Dev', value: 'webdev' },
    { label: 'Data & Sistem', value: 'data' },
  ]

  useGSAP(() => {
    // Header
    gsap.fromTo('.skills-header', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    )

    // Filters
    gsap.fromTo('.skills-filters', 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-filters',
          start: 'top 85%',
        }
      }
    )

    // Skill cards
    gsap.fromTo('.skill-card', 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        }
      }
    )
  }, { scope: containerRef })

  // Animate filtering state changes
  useGSAP(() => {
    gsap.to('.skill-card', {
      opacity: (_, target) => {
        const cat = target.dataset.category
        return filter === 'all' || filter === cat ? 1 : 0.25
      },
      scale: (_, target) => {
        const cat = target.dataset.category
        return filter === 'all' || filter === cat ? 1 : 0.97
      },
      pointerEvents: (_, target) => {
        const cat = target.dataset.category
        return filter === 'all' || filter === cat ? 'auto' : 'none'
      },
      duration: 0.35,
      ease: 'power2.out'
    })
  }, { dependencies: [filter], scope: containerRef })

  return (
    <section id="skills" ref={containerRef} className="py-28 bg-surface/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="skills-header">
          <SectionHeader
            label="Keahlian"
            title="Peralatan"
            highlight="Teknologi Saya"
            description="Alat dan teknologi yang saya gunakan untuk menciptakan pengalaman digital dan mengekstrak wawasan dari data."
          />
        </div>

        {/* Filters */}
        <div className="skills-filters flex flex-wrap gap-3 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`filter-btn px-5 py-2 rounded-xl text-sm font-medium glass border border-border
                ${filter === f.value ? 'active' : 'text-text-secondary'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid bento-grid">
          {skillCategories.map((cat) => {
            return (
              <div
                key={cat.title}
                data-category={cat.category}
                className="skill-card bento-6 glass-card rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${cat.colorClass} flex items-center justify-center text-xl`}>
                    {cat.emoji}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary">{cat.title}</h3>
                    <p className="text-text-muted text-xs">{cat.subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-icon-card group/icon flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-8 h-8 group-hover/icon:scale-110 transition-transform duration-300 ease-out ${skill.invert ? 'invert opacity-80 group-hover/icon:opacity-100' : ''}`}
                      />
                      <span className="text-[10px] text-text-secondary group-hover/icon:text-white transition-colors duration-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

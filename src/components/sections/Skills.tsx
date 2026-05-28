import { useState } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { skillCategories } from '@/data/portfolio-data'

export default function Skills() {
  const [filter, setFilter] = useState('all')

  const filters = [
    { label: 'Semua', value: 'all' },
    { label: 'Web Dev', value: 'webdev' },
    { label: 'Data & Sistem', value: 'data' },
  ]

  return (
    <section id="skills" className="py-28 bg-surface/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <SectionHeader
            label="Keahlian"
            title="Peralatan"
            highlight="Teknologi Saya"
            description="Alat dan teknologi yang saya gunakan untuk menciptakan pengalaman digital dan mengekstrak wawasan dari data."
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 reveal">
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
        <div className="bento-grid">
          {skillCategories.map((cat, catIdx) => {
            const isVisible = filter === 'all' || cat.category === filter
            return (
              <div
                key={cat.title}
                className="bento-6 glass-card rounded-3xl p-6 sm:p-8 reveal"
                style={{
                  transitionDelay: `${catIdx * 0.1}s`,
                  opacity: isVisible ? 1 : 0.25,
                  transform: isVisible ? 'scale(1)' : 'scale(0.97)',
                  pointerEvents: isVisible ? 'auto' : 'none',
                  transition: 'opacity .35s ease, transform .35s ease',
                }}
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
                      className="skill-icon-card flex flex-col items-center gap-2 p-3 rounded-xl bg-surface/50 border border-border"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-8 h-8 ${skill.invert ? 'invert' : ''}`}
                      />
                      <span className="text-[10px] text-text-secondary">{skill.name}</span>
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

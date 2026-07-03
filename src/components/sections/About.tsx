import { useRef } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { aboutHighlights, education } from '@/data/portfolio-data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function About() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 1024

    // Left content text
    gsap.from('.about-text', {
      x: isMobile ? 0 : -40,
      y: isMobile ? 40 : 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-left-container',
        start: 'top 85%',
      }
    })

    // Highlight cards
    gsap.from('.about-highlight', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-highlights-grid',
        start: 'top 85%',
      }
    })

    // Education title
    gsap.from('.about-edu-title', {
      x: isMobile ? 0 : 40,
      y: isMobile ? 40 : 0,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-right-container',
        start: 'top 85%',
      }
    })

    // Education timeline items
    gsap.from('.about-edu-item', {
      x: isMobile ? 0 : 40,
      y: isMobile ? 40 : 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-edu-timeline',
        start: 'top 85%',
      }
    })

    // Photos
    gsap.from('.about-photo', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-photos-grid',
        start: 'top 85%',
      }
    })

  }, { scope: containerRef })

  return (
    <section id="about" ref={containerRef} className="relative py-28 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="about-left-container">
          <div className="about-text">
            <SectionHeader
              label="Tentang Saya"
              title="Dari"
              highlight="RPL hingga Sistem Informasi"
              centered={false}
            />
          </div>

          <p className="about-text text-text-secondary leading-relaxed mb-5">
            Perjalanan saya dimulai dari bangku <strong className="text-text-primary">SMK Rekayasa Perangkat Lunak (RPL)</strong>,
            di mana saya pertama kali jatuh cinta dengan dunia coding — membangun website sederhana
            hingga aplikasi berbasis database.
          </p>
          <p className="about-text text-text-secondary leading-relaxed mb-5">
            Kini saya menempuh studi <strong className="text-text-primary">Sistem Informasi di Institut Teknologi Nasional (Itenas) Bandung</strong>,
            memperluas perspektif ke ranah arsitektur sistem, manajemen data, dan analitik.
          </p>
          <p className="about-text text-text-secondary leading-relaxed mb-8">
            Di luar kuliah, saya aktif mengeksplorasi <strong className="text-text-primary">Data Science dengan Python</strong> —
            dari manipulasi data dengan Pandas hingga visualisasi dan model machine learning sederhana.
            Saya percaya kombinasi Web Development dan Data Science adalah senjata masa depan.
          </p>

          {/* Highlights Grid */}
          <div className="about-highlights-grid grid grid-cols-2 gap-3">
            {aboutHighlights.map((item) => (
              <div key={item.title} className="about-highlight glass-card rounded-xl p-4">
                <p className="text-lg mb-1">{item.emoji}</p>
                <p className="font-display font-semibold text-text-primary text-sm">{item.title}</p>
                <p className="text-text-muted text-xs mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="about-right-container">
          <h3 className="about-edu-title font-display font-semibold text-text-primary mb-6 text-lg">Perjalanan Pendidikan</h3>
          <div className="about-edu-timeline relative pl-6">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-zinc-400 via-zinc-600 to-transparent" />

            {education.map((edu, i) => (
              <div key={i} className={`about-edu-item relative ${i < education.length - 1 ? 'mb-8' : ''}`}>
                <div className={`absolute -left-[26px] w-4 h-4 rounded-full ${edu.dotColorClass} border-2 border-bg`} />
                <div className={`glass-card rounded-2xl p-5 ${edu.isDashed ? 'border-dashed' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${edu.badgeColorClass}`}>{edu.period}</span>
                  </div>
                  <h4 className="font-display font-semibold text-text-primary">{edu.title}</h4>
                  <p className="text-text-secondary text-sm">{edu.institution}</p>
                  <p className="text-text-muted text-xs mt-2">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          <div className="about-photos-grid grid grid-cols-3 gap-3 mt-10">
            {['foto2.jpeg', 'foto3.jpeg', 'foto4.jpeg'].map((foto, i) => (
              <div
                key={foto}
                className={`about-photo group rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500
                  ${i === 1 ? 'mt-6' : ''}`}
                style={{ aspectRatio: '9/16' }}
              >
                <img
                  src={`/${foto}`}
                  alt={`Dimas - Foto ${i + 1}`}
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { aboutHighlights, education } from '@/data/portfolio-data'
import { BarChart3, Code2, Layers, ShieldCheck, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLElement>(null)

  const iconMap = {
    Code2,
    BarChart3,
    Layers,
    ShieldCheck,
  }

  useGSAP(() => {
    const isMobile = window.innerWidth < 1024

    // Image reveal for the About section
    gsap.utils.toArray('.about-image-card').forEach((card: any) => {
      gsap.fromTo(card,
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0 },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      )

      const imageInner = card.querySelector('img')
      if (imageInner) {
        gsap.fromTo(imageInner,
          { scale: 1.05 },
          {
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        )
      }
    })

    // Typography Reveal
    const texts = gsap.utils.toArray('.reveal-text')
    texts.forEach((text: any) => {
      gsap.fromTo(text,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 90%',
          }
        }
      )
    })

    // Timeline Line Drawing
    gsap.fromTo('.timeline-line-fill',
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-edu-timeline',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: true
        }
      }
    )

    // Timeline Items
    gsap.utils.toArray('.timeline-item').forEach((item: any) => {
      gsap.fromTo(item,
        { opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 30 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      )
    })

    // Highlights staggered reveal
    gsap.fromTo('.highlight-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.highlights-container',
          start: 'top 85%',
        }
      }
    )

  }, { scope: containerRef })

  return (
    <section id="about" ref={containerRef} className="relative py-32 max-w-7xl mx-auto px-6 overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 items-start">
        
        {/* Left Column (7 cols): Text & Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <div className="mb-16">
            <div className="reveal-text">
              <SectionHeader
                label="Tentang Saya"
                title="Menerjemahkan"
                highlight="Kreativitas & Logika"
                centered={false}
              />
            </div>
            
            {/* Statement Text - Editorial Typography */}
            <div className="mt-10 space-y-8">
              <p className="reveal-text font-display text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.3] text-text-primary tracking-tight">
                Saya memulai perjalanan dari bangku <span className="text-accent-primary">SMK Rekayasa Perangkat Lunak</span>, tempat pertama kali saya jatuh cinta pada proses membangun aplikasi dari awal.
              </p>
              
              <p className="reveal-text text-lg text-text-secondary leading-relaxed max-w-2xl">
                Saat ini saya fokus sebagai Web Developer dan Software Engineer sambil menempuh studi Sistem Informasi di Itenas Bandung. Pendidikan ini membantu saya memahami lebih jauh tentang arsitektur sistem, basis data, dan cara merancang solusi yang dapat bertahan dalam jangka panjang.
              </p>

              <p className="reveal-text text-lg text-text-secondary leading-relaxed max-w-2xl">
                Saya bekerja dengan pendekatan yang pragmatis: kode yang bersih, alur pengguna yang jelas, dan struktur yang mudah dipelihara. Selain itu, saya juga memanfaatkan pemahaman dasar data untuk mendukung keputusan teknis yang lebih matang.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mt-8">
            <h3 className="reveal-text font-display text-xl font-semibold text-text-primary mb-12 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white/20"></span>
              Jejak Pendidikan
            </h3>
            
            <div className="about-edu-timeline relative pl-8 md:pl-10">
              {/* Timeline Track */}
              <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-white/5 rounded-full overflow-hidden">
                 <div className="timeline-line-fill w-full h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent origin-top" />
              </div>

              {education.map((edu, i) => (
                <div key={i} className={`timeline-item relative ${i < education.length - 1 ? 'mb-14' : ''} group`}>
                  {/* Timeline Dot */}
                  <div className="absolute -left-[37px] md:-left-[45px] top-1.5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white/20 group-hover:border-accent-primary transition-colors duration-500 z-10" />
                    <div className="absolute inset-0 rounded-full bg-accent-primary/30 blur-sm scale-0 group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  <div className="bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-500 rounded-3xl p-7 md:p-8 backdrop-blur-sm">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 text-text-secondary border border-white/10 group-hover:text-accent-primary transition-colors duration-300">
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-medium text-text-primary mb-2">{edu.title}</h4>
                    <p className="text-text-secondary text-sm mb-4">{edu.institution}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Photo and Highlights */}
        <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
          <div className="about-image-card overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] shadow-[0_32px_80px_-52px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:-translate-y-1">
            <img
              src="/foto2.jpeg"
              alt="Dimas Sholihulhadi bekerja di sebuah proyek web"
              className="w-full h-[420px] object-cover sm:h-[520px]"
            />
            <div className="p-6 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent">
              <p className="text-xs uppercase tracking-[0.28em] text-text-muted mb-3">Software Engineering</p>
              <h3 className="text-2xl font-semibold text-white">Fokus pada kualitas kode dan solusi yang dapat berkembang.</h3>
              <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-md">
                Saya mendesain aplikasi web yang dapat dipelihara, memiliki alur pengguna yang jelas, dan mendukung produk dengan fondasi teknis yang kuat.
              </p>
            </div>
          </div>

          <div className="highlights-container grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Code2
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h5 className="font-display font-semibold text-text-primary text-sm mb-2">{item.title}</h5>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <a
          href="#skills"
          onClick={(e) => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-text-secondary text-sm font-medium hover:bg-white/[0.06] hover:text-text-primary hover:border-white/[0.15] transition-all duration-300"
        >
          Lihat Keahlian Saya
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { aboutHighlights, education } from '@/data/portfolio-data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 1024

    // Parallax & Reveal for Images
    gsap.utils.toArray('.about-image-wrapper').forEach((img: any) => {
      gsap.fromTo(img, 
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.5,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
          }
        }
      )
      
      const imageInner = img.querySelector('img')
      if (imageInner) {
        gsap.fromTo(imageInner,
          { scale: 1.3 },
          {
            scale: 1,
            duration: 1.5,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: img,
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
                Saya memulai perjalanan dari bangku <span className="text-accent-primary">SMK Rekayasa Perangkat Lunak</span>, tempat saya pertama kali jatuh cinta pada seni membangun sesuatu dari nol.
              </p>
              
              <p className="reveal-text text-lg text-text-secondary leading-relaxed max-w-2xl">
                Saat ini, saya mendalami <strong className="text-text-primary font-medium">Sistem Informasi di Institut Teknologi Nasional (Itenas) Bandung</strong>. Pendidikan ini memperluas wawasan saya dari sekadar penulisan kode, menjadi arsitektur sistem, pengelolaan basis data, dan penyelesaian masalah bisnis.
              </p>

              <p className="reveal-text text-lg text-text-secondary leading-relaxed max-w-2xl">
                Di samping web development, saya bereksperimen dengan <strong className="text-text-primary font-medium">Data Science menggunakan Python</strong>. Dari manipulasi data dengan Pandas hingga machine learning prediktif. Saya percaya bahwa pengalaman digital terbaik lahir dari perpaduan antara rekayasa perangkat lunak dan data.
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

        {/* Right Column (5 cols): Photos & Highlights */}
        <div className="lg:col-span-5 flex flex-col gap-16 lg:sticky lg:top-32">
          
          {/* Photo Gallery - Collage */}
          <div className="relative h-[350px] md:h-[450px] w-full max-w-[400px] mx-auto lg:mx-0">
            {/* Main large photo */}
            <div className="about-image-wrapper absolute top-0 left-0 w-3/4 h-[250px] md:h-[320px] rounded-3xl overflow-hidden border border-white/10 group z-10 shadow-2xl">
              <img src="/foto2.jpeg" alt="Dimas" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
            </div>
            
            {/* Secondary small photo right */}
            <div className="about-image-wrapper absolute top-12 right-0 w-2/5 h-[180px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 group z-20 shadow-xl">
              <img src="/foto3.jpeg" alt="Dimas" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 ease-out" />
            </div>

            {/* Tertiary small photo bottom */}
            <div className="about-image-wrapper absolute bottom-0 right-8 w-1/2 h-[160px] md:h-[200px] rounded-2xl overflow-hidden border border-white/10 group z-30 shadow-xl">
              <img src="/foto4.jpeg" alt="Dimas" className="w-full h-full object-cover opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 ease-out" />
            </div>
          </div>

          {/* Highlights Bento */}
          <div className="highlights-container grid grid-cols-2 gap-4">
            {aboutHighlights.map((item, i) => (
              <div 
                key={item.title} 
                className="highlight-card group relative bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-500 rounded-3xl p-6 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)] transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col h-full justify-between gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 group-hover:bg-white/[0.06] group-hover:rotate-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    {item.emoji}
                  </div>
                  <div>
                    <h5 className="font-display font-medium text-text-primary text-sm mb-2">{item.title}</h5>
                    <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

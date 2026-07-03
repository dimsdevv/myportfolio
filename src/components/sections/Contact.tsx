import { useRef } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 1024

    // Left container
    gsap.fromTo('.contact-left', 
      { x: isMobile ? 0 : -40, y: isMobile ? 40 : 0, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-left',
          start: 'top 80%',
        }
      }
    )

    // Contact items stagger
    gsap.fromTo('.contact-item', 
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-items-container',
          start: 'top 85%',
        }
      }
    )

    // Right container
    gsap.fromTo('.contact-right', 
      { x: isMobile ? 0 : 40, y: isMobile ? 40 : 0, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-right',
          start: 'top 80%',
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section id="contact" ref={containerRef} className="py-28 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="contact-left">
          <SectionHeader label="Kontak" title="Mari Bangun" highlight="Sesuatu yang Hebat" centered={false} />
          <p className="text-text-secondary leading-relaxed mb-10">
            Terbuka untuk peluang magang, proyek freelance, kolaborasi, atau sekadar ngobrol tentang teknologi dan data. Jangan ragu untuk menghubungi saya!
          </p>

          <div className="contact-items-container space-y-4 mb-10">
            <a href="mailto:dmscmail0@gmail.com" className="contact-item flex items-center gap-4 glass-card rounded-2xl p-4 group hover:border-white/[0.12] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-text-secondary flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-text-muted">Email</p>
                <p className="text-text-primary text-sm font-medium">dmscmail0@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/dimassholihulhadi" target="_blank" rel="noopener noreferrer" className="contact-item flex items-center gap-4 glass-card rounded-2xl p-4 group hover:border-white/[0.12] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-text-secondary flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <p className="text-xs text-text-muted">LinkedIn</p>
                <p className="text-text-primary text-sm font-medium">linkedin.com/in/dimassholihulhadi</p>
              </div>
            </a>

            <a href="https://github.com/dimsdevv" target="_blank" rel="noopener noreferrer" className="contact-item flex items-center gap-4 glass-card rounded-2xl p-4 group hover:border-white/[0.12] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-text-secondary flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div>
                <p className="text-xs text-text-muted">GitHub</p>
                <p className="text-text-primary text-sm font-medium">github.com/dimsdevv</p>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-2 text-text-muted text-sm">
            <MapPin className="w-4 h-4 text-text-secondary flex-shrink-0" />
            Bandung, Jawa Barat — Indonesia 🇮🇩
          </div>
        </div>

        <div className="contact-right flex flex-col justify-center">
          <div className="glass-card rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="w-16 h-16 mx-auto bg-white/[0.06] rounded-2xl flex items-center justify-center text-text-secondary mb-6 relative z-10">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.476 0 1.46 1.065 2.871 1.213 3.069.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              
              <h3 className="font-display font-bold text-text-primary text-2xl mb-3 relative z-10">Kirim Pesan Langsung</h3>
              <p className="text-text-secondary text-sm mb-8 leading-relaxed relative z-10">
                Untuk respons yang lebih cepat dan simpel, mari mengobrol langsung melalui WhatsApp.
              </p>
              
              <a
                href="https://wa.me/6289654297309?text=Halo%20Dimas,%20saya%20tertarik%20untuk%20berdiskusi..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex w-full sm:w-auto py-4 px-8 rounded-xl font-display font-semibold text-sm
                           bg-white/[0.1] border border-white/[0.15] text-text-primary items-center justify-center gap-3 relative z-10
                           hover:bg-white/[0.15] transition-colors"
              >
                Chat via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

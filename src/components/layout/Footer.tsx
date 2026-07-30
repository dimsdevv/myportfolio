import { useRef } from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useGSAP(() => {
    gsap.from('.footer-content', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 95%',
      }
    })
  }, { scope: footerRef })

  return (
    <footer ref={footerRef} className="border-t border-border">
      <div className="footer-content max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Brand */}
          <div className="sm:col-span-1">
            <span className="font-display font-bold text-text-primary tracking-tight">Dimas<span className="text-text-muted">Sholihulhadi</span></span>
            <p className="text-text-muted text-sm mt-2 leading-relaxed max-w-xs">
              Merancang dan membangun produk digital yang bersih, fungsional, dan dapat bertahan lama.
            </p>
          </div>

          {/* Navigation */}
          <div className="sm:col-span-1">
            <p className="text-[11px] font-semibold text-text-muted uppercase tracking-widest mb-4">Navigasi</p>
            <div className="flex flex-col gap-2.5 text-sm">
              {[
                { label: 'Tentang', href: '#about' },
                { label: 'Keahlian', href: '#skills' },
                { label: 'Pengalaman', href: '#experience' },
                { label: 'Proyek', href: '#projects' },
                { label: 'Kontak', href: '#contact' },
              ].map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-text-secondary hover:text-text-primary transition-colors duration-200 w-fit">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Back to top */}
          <div className="sm:col-span-1">
            <p className="text-[11px] font-semibold text-text-muted uppercase tracking-widest mb-4">Terhubung</p>
            <div className="flex gap-3 mb-6">
              <a href="https://github.com/dimsdevv" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/dimassholihulhadi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:dimas.sholihulhadi@mhs.itenas.ac.id" className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <button onClick={scrollToTop} className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-text-primary transition-colors duration-200">
              Kembali ke atas
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-[13px]">
            &copy; {currentYear} <span className="text-text-primary">Dimas Sholihulhadi</span>. All rights reserved.
          </p>
          <p className="text-text-muted/50 text-[11px]">
            Designed &amp; built with purpose
          </p>
        </div>
      </div>
    </footer>
  )
}

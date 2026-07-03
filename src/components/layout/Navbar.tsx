import { useEffect, useState, useRef } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isLight, setIsLight] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check saved theme
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('light')
      setIsLight(true)
    }
  }, [])

  useGSAP(() => {
    // Detect if scrolled past 30px
    ScrollTrigger.create({
      start: 30,
      onToggle: (self) => setScrolled(self.isActive)
    })

    // Active section detection
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 30%',
        end: 'bottom 30%',
        onToggle: (self) => {
          if (self.isActive) {
            setActiveSection(section.id)
          }
        }
      })
    })
  }, [])

  // Mobile menu animation
  useGSAP(() => {
    if (mobileOpen) {
      gsap.to(menuRef.current, { y: 0, autoAlpha: 1, duration: 0.4, ease: 'var(--ease-spring)' })
    } else {
      gsap.to(menuRef.current, { y: -16, autoAlpha: 0, duration: 0.3, ease: 'power2.inOut' })
    }
  }, { dependencies: [mobileOpen] })

  const toggleTheme = () => {
    const next = !isLight
    setIsLight(next)
    document.documentElement.classList.toggle('light', next)
    localStorage.setItem('theme', next ? 'light' : 'dark')
  }

  const closeMobile = () => setMobileOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    closeMobile()
  }

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[var(--ease-spring)]" aria-label="Navigation utama">
      {/* ── Centered Floating Pill ── */}
      <div className={`flex justify-center px-4 transition-all duration-700 ease-[var(--ease-spring)] ${scrolled ? 'pt-4 md:pt-6' : 'pt-6 md:pt-8'}`}>
        <div
          className={`
            flex items-center justify-between gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full
            transition-all duration-700 ease-[var(--ease-spring)] w-full max-w-4xl
            ${scrolled
              ? 'bg-[#09090b]/70 backdrop-blur-2xl border border-white/[0.04] shadow-2xl md:w-auto md:min-w-[640px]'
              : 'bg-transparent border border-transparent'
            }
          `}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-display font-bold text-base tracking-tight group mr-auto flex items-center gap-2 pl-2"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-colors duration-500 ${scrolled ? 'bg-white/10 border-white/5 text-white' : 'bg-transparent border-transparent text-text-primary'}`}>
              D
            </div>
            <span className="text-text-primary group-hover:text-text-secondary transition-colors duration-300">
              DimsDevv
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 text-[13px] font-medium" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`
                      relative px-4 py-2 rounded-full transition-colors duration-300
                      ${isActive
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.03]'
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white/[0.06] rounded-full -z-10" />
                    )}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-2 ml-auto pr-1">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle tema"
              className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-colors"
            >
              {isLight ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-glow inline-flex items-center justify-center h-8 px-4 rounded-full text-[13px] font-medium
                         bg-white text-zinc-900 transition-transform duration-500 ease-[var(--ease-spring)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-colors ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden mx-4 mt-2 rounded-2xl p-6 bg-[#09090b]/95 backdrop-blur-3xl border border-white/[0.04] shadow-2xl invisible opacity-0"
      >
        <ul className="flex flex-col gap-1 text-sm font-medium" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  block px-4 py-3.5 rounded-xl transition-colors
                  ${activeSection === item.href.slice(1)
                    ? 'text-text-primary bg-white/[0.04]'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.02]'
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.04]">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary bg-white/[0.02]"
            >
              {isLight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex-1 flex items-center justify-center h-12 rounded-xl text-sm font-medium
                         bg-white text-zinc-900 hover:scale-[1.02] transition-transform duration-300 ease-[var(--ease-spring)]"
            >
              Hire Me →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

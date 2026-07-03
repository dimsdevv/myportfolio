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
      gsap.to(menuRef.current, { y: 0, autoAlpha: 1, duration: 0.3, ease: 'power2.out' })
    } else {
      gsap.to(menuRef.current, { y: -16, autoAlpha: 0, duration: 0.2, ease: 'power2.in' })
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
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" aria-label="Navigation utama">
      {/* ── Centered Floating Pill ── */}
      <div className="flex justify-center px-4 pt-4 md:pt-6">
        <div
          className={`
            flex items-center justify-between gap-1 px-4 md:px-6 py-2.5 md:py-3 rounded-full
            transition-all duration-500 ease-[var(--ease-spring)] w-full max-w-3xl
            ${scrolled
              ? 'bg-zinc-900/50 backdrop-blur-md border border-white/10 shadow-xl md:w-auto md:min-w-[600px]'
              : 'bg-transparent border border-transparent'
            }
          `}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-display font-bold text-lg tracking-tight group mr-auto flex items-center gap-2"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors duration-300 ${scrolled ? 'bg-white/10 border-white/10 text-white' : 'bg-transparent border-transparent text-text-primary'}`}>
              D
            </div>
            <span className="text-text-primary group-hover:text-text-secondary transition-colors duration-200">
              DimsDevv
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    nav-link px-3 py-2 rounded-lg transition-colors duration-200
                    ${activeSection === item.href.slice(1)
                      ? 'text-text-primary bg-white/[0.08]'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle tema"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/[0.06] transition-colors"
            >
              {isLight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                         bg-white text-zinc-900 hover:bg-zinc-200 hover:scale-105 transition-all duration-300 ease-[var(--ease-spring)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary ml-auto"
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
        className="md:hidden mx-4 mt-2 rounded-2xl p-6 bg-[rgba(15,15,17,0.9)] backdrop-blur-2xl border border-white/[0.08] invisible opacity-0"
      >
        <ul className="flex flex-col gap-2 text-sm font-medium" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`
                  block px-4 py-3 rounded-xl transition-colors
                  ${activeSection === item.href.slice(1)
                    ? 'text-text-primary bg-white/[0.06]'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 mt-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary bg-white/[0.06]"
            >
              {isLight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex-1 text-center px-5 py-3 rounded-xl text-sm font-medium
                         bg-white/[0.08] border border-white/[0.12] text-text-primary
                         hover:bg-white/[0.14] transition-colors"
            >
              Hire Me →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

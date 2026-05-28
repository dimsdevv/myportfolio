export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {currentYear} <span className="text-text-primary">Dimas Sholihulhadi</span>. Dibuat dengan 💙 &amp; COPYRIGHT.
        </p>
        <div className="flex items-center gap-6 text-text-muted text-xs">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-text-primary transition-colors">Beranda</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-text-primary transition-colors">Tentang</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-text-primary transition-colors">Proyek</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-text-primary transition-colors">Kontak</a>
        </div>
      </div>
    </footer>
  )
}

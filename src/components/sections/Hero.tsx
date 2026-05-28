import { useCounterAnimation } from '@/hooks/useCounterAnimation'
import { Download } from 'lucide-react'
import ProfileCard from '@/components/ui/ProfileCard'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useCounterAnimation(target)
  return (
    <span>
      <span ref={ref}>0</span>{suffix}
    </span>
  )
}

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0 L0 0 0 60' fill='none' stroke='%2327272a' stroke-width='0.5'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Glow orbs — gray/white tones */}
      <div className="orb w-96 h-96 bg-zinc-500/10 top-10 -left-24" style={{ animationDelay: '0s' }} />
      <div className="orb w-80 h-80 bg-zinc-400/8 bottom-20 right-0" style={{ animationDelay: '2s' }} />
      <div className="orb w-64 h-64 bg-zinc-300/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />

      {/* Decorative circles */}
      <div className="absolute top-28 right-16 w-48 h-48 border border-white/[0.04] rounded-full animate-spin-slow pointer-events-none hidden lg:block" />
      <div className="absolute top-36 right-24 w-32 h-32 border border-white/[0.02] rounded-full animate-spin-slow pointer-events-none hidden lg:block" style={{ animationDirection: 'reverse' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="gradient-text">Web Developer</span>
            <br />
            <span className="text-text-muted">& Data Science</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md mb-10">
            Halo, saya <span className="text-text-primary font-medium">Dimas Sholihulhadi</span>, mahasiswa Sistem Informasi di Itenas yang memiliki fokus di bidang Web Development dan antusiasme tinggi terhadap Data Science. Saya senang merancang dan membangun solusi digital yang tidak hanya berfungsi dengan baik, tetapi juga memberikan dampak nyata bagi pengguna.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="btn-glow px-7 py-3.5 rounded-xl font-display font-semibold text-sm
                         bg-white/[0.1] border border-white/[0.15] text-text-primary hover:bg-white/[0.15] transition-colors"
            >
              Lihat Karya Saya ↓
            </a>
            <a
              href="/CV DIMAS SHOLIHULHADI.pdf"
              download
              className="btn-glow px-7 py-3.5 rounded-xl font-display font-semibold text-sm
                         glass border border-white/[0.08] text-text-primary hover:border-white/[0.15]
                         inline-flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border">
            <div>
              <p className="font-display font-bold text-2xl text-text-primary"><Counter target={2} suffix="+" /></p>
              <p className="text-text-muted text-xs mt-0.5">Tahun Ngoding</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-text-primary"><Counter target={8} suffix="+" /></p>
              <p className="text-text-muted text-xs mt-0.5">Proyek Selesai</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-text-primary"><Counter target={22} /></p>
              <p className="text-text-muted text-xs mt-0.5">Teknologi</p>
            </div>
          </div>
        </div>

        {/* Right — Profile Card */}
        <div className="flex justify-center lg:justify-end relative z-20">
          <div className="animate-float">
            <ProfileCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs animate-bounce">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

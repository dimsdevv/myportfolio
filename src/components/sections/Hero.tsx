import { useRef } from 'react'
import { Download } from 'lucide-react'
import ProfileCard from '@/components/ui/ProfileCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    gsap.to(ref.current, {
      textContent: target,
      duration: 2,
      ease: 'expo.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
      }
    })
  }, { scope: ref })

  return (
    <span>
      <span ref={ref}>0</span>{suffix}
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3.8 }) // wait for preloader to fade

    // Title staggered lines
    tl.from('.hero-title-line', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'expo.out'
    })
    
    // Description
    .from('.hero-desc', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'expo.out'
    }, '-=0.8')
    
    // Buttons
    .from('.hero-btn', {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out'
    }, '-=0.8')
    
    // Stats
    .from('.hero-stats', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'expo.out'
    }, '-=0.8')
    
    // Profile Card
    .from(profileRef.current, {
      x: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out'
    }, '-=1')

    // Continuous float animation for profile
    gsap.to(profileRef.current, {
      y: -10,
      duration: 4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 4.6
    })

    // Continuous bounce for scroll indicator
    gsap.from(indicatorRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 4.6
    })
    gsap.to(indicatorRef.current, {
      y: 8,
      duration: 1,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 4.6
    })

  }, { scope: containerRef })

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 w-full h-full bg-[#030303] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 md:pt-44 lg:pt-20 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center">
        {/* Left — Text */}
        <div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <div className="hero-title-line"><span className="gradient-text">Web Developer</span></div>
            <div className="hero-title-line"><span className="text-text-muted">& Data Science</span></div>
          </h1>

          <p className="hero-desc text-text-secondary text-base sm:text-lg leading-relaxed max-w-md mb-10">
            Halo, saya <span className="text-text-primary font-medium">Dimas Sholihulhadi</span>, mahasiswa Sistem Informasi di Itenas yang memiliki fokus di bidang Web Development dan antusiasme tinggi terhadap Data Science. Saya senang merancang dan membangun solusi digital yang tidak hanya berfungsi dengan baik, tetapi juga memberikan dampak nyata bagi pengguna.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="hero-btn btn-glow px-7 py-3.5 rounded-xl font-display font-semibold text-sm
                         bg-white/[0.1] border border-white/[0.15] text-text-primary hover:bg-white/[0.15] transition-colors"
            >
              Lihat Karya Saya ↓
            </a>
            <a
              href="/CV DIMAS SHOLIHULHADI.pdf"
              download
              className="hero-btn btn-glow px-7 py-3.5 rounded-xl font-display font-semibold text-sm
                         glass border border-white/[0.08] text-text-primary hover:border-white/[0.15]
                         inline-flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex gap-8 mt-12 pt-8 border-t border-white/[0.1]">
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
          <div ref={profileRef}>
            <ProfileCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={indicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted text-xs">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

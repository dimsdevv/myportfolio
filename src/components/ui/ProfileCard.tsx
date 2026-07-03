import { Mail, Github, Linkedin } from 'lucide-react'

const Card = () => {
  return (
    <div className="group relative w-[340px] rounded-[32px] p-3 bg-zinc-900/40 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/60 hover:-translate-y-1">
      {/* Mail Icon */}
      <a href="mailto:dimas.sholihulhadi@gmail.com" className="absolute top-7 right-7 z-10 text-zinc-400 hover:text-white transition-colors duration-300">
        <Mail className="w-5 h-5" />
      </a>

      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-5">
        <img 
          src="/foto1.jpeg" 
          alt="Dimas Sholihulhadi" 
          className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-spring)] group-hover:scale-105"
        />
        {/* Subtle gradient overlay to blend image into card */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent opacity-80" />
      </div>

      {/* Info Content */}
      <div className="px-3 pb-3">
        <h3 className="text-xl font-bold text-white mb-1.5">Dimas Sholihulhadi</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          Mahasiswa Sistem Informasi di Itenas Bandung · Web Developer & Data Science Enthusiast.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <a 
              href="https://github.com/Dss02" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 ease-[var(--ease-spring)]"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/dimassholihulhadi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 ease-[var(--ease-spring)]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <a 
            href="mailto:dimas.sholihulhadi@gmail.com"
            className="px-5 py-2.5 rounded-full bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 hover:scale-105 ease-[var(--ease-spring)] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card

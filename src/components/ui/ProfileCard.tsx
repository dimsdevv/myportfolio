import { Github, Linkedin, ArrowUpRight } from 'lucide-react'

const Card = () => {
  return (
    <div className="group relative w-[300px] sm:w-[320px] rounded-3xl p-2.5 bg-white/[0.02] backdrop-blur-md border border-white/[0.06] shadow-2xl transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-zinc-900">
        <img 
          src="/foto1.jpeg" 
          alt="Dimas Sholihulhadi" 
          className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105"
        />
        {/* ID Badge Details Overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-medium tracking-[0.2em] uppercase text-white/90">
            ID: DS-2024
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      {/* Info Content */}
      <div className="px-3 pb-2">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-display font-semibold text-text-primary mb-1 tracking-tight">Dimas S.</h3>
            <p className="text-[10px] text-text-muted uppercase tracking-[0.15em] font-medium">Software Engineer</p>
          </div>
          <a 
            href="mailto:dimas.sholihulhadi@gmail.com"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] text-text-muted hover:text-white hover:bg-white/[0.1] transition-all duration-300 group-hover:rotate-45"
            aria-label="Email Me"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-white/[0.06]">
          <a 
            href="https://github.com/Dss02" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-text-secondary hover:text-white hover:bg-white/[0.06] transition-all duration-300 text-xs font-medium"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/dimassholihulhadi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-text-secondary hover:text-white hover:bg-white/[0.06] transition-all duration-300 text-xs font-medium"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card

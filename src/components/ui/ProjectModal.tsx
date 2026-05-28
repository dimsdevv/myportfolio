import { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/portfolio-data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  isClosing: boolean;
}

export default function ProjectModal({ project, onClose, isClosing }: ProjectModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 transition-all duration-400 ease-in-out ${isClosing ? 'opacity-0 delay-100' : 'opacity-100'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#18181b]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col md:flex-row transform transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1) ${isClosing ? 'scale-95 translate-y-8 opacity-0' : 'scale-100 translate-y-0 opacity-100 modal-enter'}`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white/70 hover:text-white hover:bg-black/80 transition-colors border border-white/10 backdrop-blur-md"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-[45%] relative h-64 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex-shrink-0">
           <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#18181b]/20 md:to-[#18181b]" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[55%] p-6 sm:p-8 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl ${project.colorClass} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                {project.emoji}
              </div>
              <div>
                <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight">
                  {project.title}
                </h2>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-green-500/15 border border-green-500/25 text-[10px] text-green-300 font-medium uppercase tracking-wide">
                    {project.status}
                  </span>
                  <span className="text-xs text-zinc-400 px-2 py-0.5 bg-white/5 rounded-md border border-white/5 capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none flex-grow">
            <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div className="mb-8 mt-auto">
            <h3 className="text-[11px] font-semibold text-zinc-500 mb-3 tracking-widest uppercase">Teknologi Utama</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${project.techColorClass}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/10">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-200 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

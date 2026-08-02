import { useRef } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import SectionHeader from '@/components/shared/SectionHeader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GithubActivity() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo('.github-card', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      )
    });
  }, { scope: containerRef })

  // Custom colors to match the portfolio's dark theme
  const explicitTheme = {
    light: ['#18181b', '#3f3f46', '#52525b', '#a1a1aa', '#fafafa'],
    dark: ['#18181b', '#27272a', '#3f3f46', '#71717a', '#a1a1aa'],
  }

  return (
    <section id="activity" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeader label="Aktivitas" title="Kontribusi" highlight="GitHub" description="Aktivitas coding harian dan kontribusi pada repositori terbuka (open-source) dan tertutup (private)." />
        </div>
        
        <div className="github-card glass-card rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 flex justify-center overflow-x-auto shadow-[0_32px_80px_-52px_rgba(0,0,0,0.5)]">
          <div className="min-w-fit">
            <GitHubCalendar 
              username="dimsdevv" 
              colorScheme="dark"
              theme={explicitTheme}
              fontSize={14}
              blockSize={13}
              blockMargin={5}
              labels={{
                totalCount: '{{count}} kontribusi pada setahun terakhir',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

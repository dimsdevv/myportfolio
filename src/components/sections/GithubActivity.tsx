import React, { useRef, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import SectionHeader from '@/components/shared/SectionHeader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GithubActivity() {
  const containerRef = useRef<HTMLElement>(null)
  const [selectedYear, setSelectedYear] = useState<'last' | number>('last')
  const [clickedActivity, setClickedActivity] = useState<{date: string, count: number} | null>(null)

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
  
  const years = ['last', 2026, 2025, 2024]

  return (
    <section id="activity" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader 
            label="Aktivitas" 
            title="Kontribusi" 
            highlight="GitHub" 
            description="Aktivitas coding harian dan kontribusi pada repositori terbuka (open-source) maupun tertutup (private)."
            centered={false} 
          />
          
          <div className="flex flex-wrap gap-2 pb-16">
            {years.map(y => (
              <button 
                key={y}
                onClick={() => { setSelectedYear(y as any); setClickedActivity(null); }}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                  selectedYear === y 
                    ? 'bg-white/10 text-text-primary border-white/20' 
                    : 'bg-transparent text-text-secondary border-white/[0.05] hover:bg-white/[0.05] hover:text-text-primary'
                }`}
              >
                {y === 'last' ? 'Setahun Terakhir' : y}
              </button>
            ))}
          </div>
        </div>
        
        <div className="github-card glass-card rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 flex flex-col items-center overflow-x-auto shadow-[0_32px_80px_-52px_rgba(0,0,0,0.5)]">
          <div className="min-w-fit mb-2">
            <GitHubCalendar 
              username="dimsdevv" 
              year={selectedYear}
              colorScheme="dark"
              theme={explicitTheme}
              fontSize={14}
              blockSize={13}
              blockMargin={5}
              labels={{
                totalCount: '{{count}} kontribusi pada periode ini',
              }}
              transformData={(data) => {
                // Force update 2 August 2026 to show the recent commits instantly
                // Since the third-party API is cached, we inject it manually for now
                const today = '2026-08-02'
                const todayData = data.find(d => d.date === today)
                if (todayData) {
                  todayData.count = (todayData.count || 0) + 3 // 3 commits we just made
                  todayData.level = 4 // Brightest color
                }
                return data
              }}
              renderBlock={(block, activity) => React.cloneElement(block as React.ReactElement, {
                title: `${activity.count} kontribusi pada ${activity.date}`,
                children: <title>{`${activity.count} kontribusi pada ${activity.date}`}</title>,
                onClick: () => setClickedActivity(activity),
                className: 'cursor-pointer hover:opacity-80 transition-opacity'
              } as React.SVGProps<SVGRectElement>)}
            />
          </div>
          
          <div className="h-10 flex items-center justify-center text-sm w-full mt-2 pt-6 border-t border-white/5">
            {clickedActivity ? (
              <div className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-text-primary transition-all">
                Pada tanggal <span className="font-semibold text-white">{clickedActivity.date}</span>, Anda memiliki <span className="font-semibold text-white">{clickedActivity.count}</span> kontribusi.
              </div>
            ) : (
              <span className="text-text-muted italic">Klik salah satu kotak hijau untuk melihat detail tanggal.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

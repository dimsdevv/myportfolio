import { useEffect, useState } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => setProgress(100), 100)

    // Hide preloader after animation
    const hideTimer = setTimeout(() => setHidden(true), 1800)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500"
      style={{
        background: '#09090b',
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? 'none' : 'auto',
      }}
    >
      <div className="text-center">
        <div className="font-display font-bold text-3xl mb-4">
          <span className="text-text-primary">DimsDevv</span>
          <span className="text-text-muted">.</span>
        </div>
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden mx-auto">
          <div
            className="h-full rounded-full transition-all duration-[1500ms] ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #3f3f46, #a1a1aa)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

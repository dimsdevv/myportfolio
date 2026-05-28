import { useEffect, useRef } from 'react'

export function useCounterAnimation(target: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now()
            function step(now: number) {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
              if (element) {
                element.textContent = Math.floor(eased * target).toString()
              }
              if (progress < 1) {
                requestAnimationFrame(step)
              } else if (element) {
                element.textContent = target.toString()
              }
            }
            requestAnimationFrame(step)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [target, duration])

  return ref
}

import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Trigger progress bars
            entry.target.querySelectorAll('.progress-fill').forEach((bar) => {
              const el = bar as HTMLElement
              el.style.width = el.dataset.width + '%'
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useScrollRevealAll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.querySelectorAll('.progress-fill').forEach((bar) => {
              const el = bar as HTMLElement
              el.style.width = el.dataset.width + '%'
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    // Staggered delay for bento grid children
    document.querySelectorAll('.bento-grid').forEach((grid) => {
      grid.querySelectorAll('.reveal').forEach((child, i) => {
        const el = child as HTMLElement
        if (!el.style.transitionDelay) {
          el.style.transitionDelay = `${i * 0.08}s`
        }
      })
    })

    return () => observer.disconnect()
  }, [])
}

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) return

    // Create highly optimized quickTo functions
    const xDot = gsap.quickTo(dot, 'left', { duration: 0, ease: 'none' })
    const yDot = gsap.quickTo(dot, 'top', { duration: 0, ease: 'none' })
    
    const xRing = gsap.quickTo(ring, 'left', { duration: 0.15, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'top', { duration: 0.15, ease: 'power3.out' })
    
    const xGlow = gsap.quickTo(glow, 'left', { duration: 0.3, ease: 'power3.out' })
    const yGlow = gsap.quickTo(glow, 'top', { duration: 0.3, ease: 'power3.out' })

    const handleMouseMove = (e: MouseEvent) => {
      // GSAP quickTo expects numbers and will append 'px' for left/top
      const x = e.clientX
      const y = e.clientY
      
      xDot(x)
      yDot(y)
      
      xRing(x)
      yRing(y)
      
      xGlow(x)
      yGlow(y)
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Enlarge on interactive elements using event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        document.body.classList.add('cursor-hover')
      } else {
        document.body.classList.remove('cursor-hover')
      }
    }

    document.addEventListener('mouseover', handleMouseOver)

    // Hide on leave window
    const handleDocLeave = () => {
      gsap.to([dot, ring, glow], { opacity: 0, duration: 0.3 })
    }
    const handleDocEnter = () => {
      gsap.to([dot, ring, glow], { opacity: 1, duration: 0.3 })
    }

    document.addEventListener('mouseleave', handleDocLeave)
    document.addEventListener('mouseenter', handleDocEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleDocLeave)
      document.removeEventListener('mouseenter', handleDocEnter)
      document.body.classList.remove('cursor-hover')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  )
}

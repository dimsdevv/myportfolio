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

    const xDot = gsap.quickTo(dot, 'left', { duration: 0, ease: 'none' })
    const yDot = gsap.quickTo(dot, 'top', { duration: 0, ease: 'none' })

    const xRing = gsap.quickTo(ring, 'left', { duration: 0.15, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'top', { duration: 0.15, ease: 'power3.out' })

    const xGlow = gsap.quickTo(glow, 'left', { duration: 0.3, ease: 'power3.out' })
    const yGlow = gsap.quickTo(glow, 'top', { duration: 0.3, ease: 'power3.out' })

    const handleMouseMove = (e: MouseEvent) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
      xGlow(e.clientX)
      yGlow(e.clientY)
    }

    document.addEventListener('mousemove', handleMouseMove)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')

      gsap.to(dot, {
        width: isInteractive ? 60 : 6,
        height: isInteractive ? 60 : 6,
        background: isInteractive ? 'rgba(250,250,250,0.08)' : '#fafafa',
        duration: 0.3,
        ease: 'power3.out',
        overwrite: 'auto',
      })
      gsap.to(ring, {
        width: isInteractive ? 60 : 40,
        height: isInteractive ? 60 : 40,
        borderColor: isInteractive ? 'rgba(250,250,250,0.5)' : 'rgba(250,250,250,0.3)',
        background: isInteractive ? 'rgba(250,250,250,0.03)' : 'transparent',
        duration: 0.3,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }

    document.addEventListener('mouseover', handleMouseOver)

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
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[#fafafa] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          border: '1.5px solid rgba(250,250,250,0.3)',
          background: 'transparent',
        }}
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(161,161,170,0.04) 0%, transparent 70%)',
        }}
      />
    </>
  )
}

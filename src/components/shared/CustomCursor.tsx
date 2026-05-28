import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let glowX = 0
    let glowY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    function animateCursor() {
      // Ring follows with smooth lag
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring!.style.left = ringX + 'px'
      ring!.style.top = ringY + 'px'

      // Glow follows with even more lag (ultra smooth)
      glowX += (mouseX - glowX) * 0.06
      glowY += (mouseY - glowY) * 0.06
      glow!.style.left = glowX + 'px'
      glow!.style.top = glowY + 'px'

      requestAnimationFrame(animateCursor)
    }
    animateCursor()

    document.addEventListener('mousemove', handleMouseMove)

    // Enlarge on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea')
    const handleEnter = () => {
      document.body.classList.add('cursor-hover')
    }
    const handleLeave = () => {
      document.body.classList.remove('cursor-hover')
    }

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    // Hide on leave
    const handleDocLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
      glow.style.opacity = '0'
    }
    const handleDocEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
      glow.style.opacity = '1'
    }

    document.addEventListener('mouseleave', handleDocLeave)
    document.addEventListener('mouseenter', handleDocEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleDocLeave)
      document.removeEventListener('mouseenter', handleDocEnter)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
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

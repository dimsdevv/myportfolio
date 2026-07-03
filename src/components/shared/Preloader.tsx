import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // The liquid fill animation in CSS takes 4s. 
    // We start fading out at 3.5s for a smooth transition.
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 3.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setHidden(true)
      }
    })
  }, { scope: containerRef })

  if (hidden) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: '#09090b' }}
    >
      <div className="liquid-loader">
        <div className="loading-text">
          Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
        </div>
        <div className="loader-track">
          <div className="liquid-fill" />
        </div>
      </div>
    </div>
  )
}

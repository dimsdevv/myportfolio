import { useRef } from 'react'
import { ArrowUp } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function BackToTop() {
  const btnRef = useRef<HTMLButtonElement>(null)

  useGSAP(() => {
    // Hide initially
    gsap.set(btnRef.current, { autoAlpha: 0, y: 20 })

    ScrollTrigger.create({
      start: 500, // Trigger after 500px scroll
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(btnRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' })
        } else {
          gsap.to(btnRef.current, { autoAlpha: 0, y: 20, duration: 0.2, ease: 'power2.in' })
        }
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className="back-to-top"
      ref={btnRef}
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      style={{ visibility: 'hidden' }} 
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

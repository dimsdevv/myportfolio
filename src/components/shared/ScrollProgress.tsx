import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(progressRef.current, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3, // Adds a slight smooth delay
      }
    })
  }, [])

  return <div id="scroll-progress" ref={progressRef} style={{ width: '0%' }} />
}

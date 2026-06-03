import React, { useEffect } from 'react'

export default function FloatingParticles() {
  useEffect(() => {
    const colors = [
      'rgba(155,126,200,0.45)',
      'rgba(196,168,232,0.55)',
      'rgba(201,168,76,0.28)',
      'rgba(107,79,142,0.22)',
      'rgba(234,224,248,0.65)',
      'rgba(245,240,255,0.5)',
    ]
    const particles = []
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div')
      el.className = 'particle'
      const size = Math.random() * 9 + 3
      Object.assign(el.style, {
        width: `${size}px`,
        height: `${size}px`,
        background: colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 14 + 10}s`,
        animationDelay: `${Math.random() * 10}s`,
      })
      document.body.appendChild(el)
      particles.push(el)
    }
    return () => particles.forEach(p => p.remove())
  }, [])
  return null
}

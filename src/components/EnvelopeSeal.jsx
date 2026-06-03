import React, { useState } from 'react'

export default function EnvelopeSeal({ onOpen }) {
  const [phase, setPhase] = useState('idle')

  const handleTap = () => {
    if (phase !== 'idle') return
    setPhase('open')
    setTimeout(() => onOpen(), 1050)
  }

  return (
    <div
      className={`env-screen${phase === 'open' ? ' phase-open' : ''}`}
      onClick={handleTap}
    >
      <div className="env-texture" />
      <span className="env-floral tl">✿</span>
      <span className="env-floral tr">✿</span>
      <span className="env-floral bl">✿</span>
      <span className="env-floral br">✿</span>

      <svg className="env-svg" viewBox="0 0 400 800" preserveAspectRatio="none">
        <polygon points="0,0 200,420 0,800" fill="rgba(0,0,0,0.13)" />
        <polygon points="400,0 200,420 400,800" fill="rgba(0,0,0,0.13)" />
        <polyline points="0,800 200,420 400,800" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
        <polyline points="0,0 200,360 400,0" stroke="rgba(255,255,255,0.09)" strokeWidth="1" fill="none" />
        <line x1="0" y1="200" x2="200" y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="400" y1="200" x2="200" y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      </svg>

      <div className="env-content">
        <p className="env-tap">Tap to Reveal</p>
        <div className="wax-seal">
          <span className="seal-initials">A&amp;S</span>
        </div>
        <p className="env-tagline">To new beginnings!</p>
      </div>
    </div>
  )
}

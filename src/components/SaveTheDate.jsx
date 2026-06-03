import React, { useState, useCallback } from 'react'
import ScratchCard from './ScratchCard'

function fireConfetti() {
  const colors = ['#9B7EC8','#C4A8E8','#C9A84C','#E8C97A','#EAE0F8','#6B4F8E','#F5F0FF']
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const el = document.createElement('div')
      el.className = 'confetti-piece'
      const size = Math.random() * 9 + 5
      Object.assign(el.style, {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 25 + 15}vh`,
        width: `${size}px`, height: `${size}px`,
        background: colors[Math.floor(Math.random() * colors.length)],
        borderRadius: Math.random() > .5 ? '50%' : '2px',
        transform: `rotate(${Math.random()*360}deg)`,
        animationDuration: `${Math.random()*1.8+1.4}s`,
        animationDelay: `${Math.random()*.3}s`,
      })
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 3200)
    }, i * 18)
  }
}

export default function SaveTheDate() {
  const [done, setDone] = useState({month:false,day:false,year:false})
  const [fired, setFired] = useState(false)

  const mark = useCallback((key) => {
    setDone(prev => {
      const next = {...prev, [key]:true}
      if (next.month && next.day && next.year && !fired) {
        setFired(true)
        setTimeout(fireConfetti, 100)
      }
      return next
    })
  }, [fired])

  return (
    <section className="std-sec reveal">
      <p className="sec-label">The Date</p>
      <h2 className="sec-title">Save the Date</h2>
      <p className="std-sub">Scratch below to reveal our wedding date</p>
      <div className="scratch-row">
        <ScratchCard label="Month" value="July"  color="#A07CC8" onScratched={()=>mark('month')} />
        <ScratchCard label="Day"   value="5"     color="#8B6DB8" onScratched={()=>mark('day')}   />
        <ScratchCard label="Year"  value="2026"  color="#7558A8" onScratched={()=>mark('year')}  />
      </div>
      {done.month && done.day && done.year && (
        <p className="std-reveal">🎉 July 5, 2026 — Mark your calendars!</p>
      )}
    </section>
  )
}

import React, { useState, useEffect, useRef, useCallback } from 'react'
import EnvelopeSeal from './components/EnvelopeSeal'
import HeroSection from './components/HeroSection'
import SaveTheDate from './components/SaveTheDate'
import Countdown from './components/Countdown'
import OurStory from './components/OurStory'
import Ceremonies from './components/Ceremonies'
import Schedule from './components/Schedule'
// import RSVPSection from './components/RSVPSection'
import Footer from './components/Footer'
import FloatingParticles from './components/FloatingParticles'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [muted, setMuted]   = useState(false)
  const audioRef  = useRef(null)
  const playedRef = useRef(false)

  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    if (!opened) return
    // Small delay so DOM is painted
    const timer = setTimeout(() => {
      const io = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.reveal').forEach(el => io.observe(el))
      return () => io.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [opened])

  /* ── Music ── */
  const startMusic = useCallback(() => {
    if (playedRef.current) return
    playedRef.current = true
    const a = audioRef.current
    if (!a) return
    a.currentTime = 38
    a.loop  = true
    a.volume = 0
    a.play().then(() => {
      let v = 0
      const tick = setInterval(() => {
        v = Math.min(v + 0.04, 0.55)
        a.volume = v
        if (v >= 0.55) clearInterval(tick)
      }, 80)
    }).catch(() => { /* autoplay blocked — icon will prompt user */ })
  }, [])

  const onEnvelopeOpen = useCallback(() => {
    setOpened(true)
    setTimeout(startMusic, 500)
  }, [startMusic])

  const toggleSound = () => {
    const a = audioRef.current
    if (!a) return
    if (muted) {
      a.muted = false
      setMuted(false)
      if (!playedRef.current) startMusic()
    } else {
      a.muted = true
      setMuted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/Mella-Sirithai.mp3" preload="auto" />
      <FloatingParticles />

      {!opened && <EnvelopeSeal onOpen={onEnvelopeOpen} />}

      {opened && (
        <div className="app-main" style={{ minHeight: '100vh', background: 'var(--lav-20)' }}>

          {/* Fixed sound button */}
          <button
            className="sound-btn"
            onClick={toggleSound}
            aria-label={muted ? 'Unmute' : 'Mute'}
            title={muted ? 'Unmute music' : 'Mute music'}
          >
            {muted ? '🔇' : '🔊'}
          </button>

          <div className="app-content">
            <HeroSection />
            <SaveTheDate />
            <Countdown />
            <OurStory />
            <Ceremonies />
            <Schedule />
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}
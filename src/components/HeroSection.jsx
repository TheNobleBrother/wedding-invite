import React from 'react'

export default function HeroSection() {
  return (
    <div className="hero reveal in">
      <div className="hero-frame" />
      <span className="hero-corner tl" /><span className="hero-corner tr" />
      <span className="hero-corner bl" /><span className="hero-corner br" />

      <div className="hero-om">ॐ</div>

      <blockquote className="hero-quote">
        "அன்பிலார் எல்லாம் தமக்குரியார் அன்புடையார்<br/>
        என்பும் உரியர் பிறர்க்கு"
        <cite>— திருக்குறள் 72 · Thirukkural</cite>
      </blockquote>

      <div className="hero-names">
        <div style={{textAlign:'center'}}>
          <div className="hero-name" style={{animationDelay:'.15s'}}>Subash</div>
          <div className="hero-family">Son of Suresh &amp; Rama</div>
        </div>
        <div className="hero-amp">&amp;</div>
        <div style={{textAlign:'center'}}>
          <div className="hero-name" style={{animationDelay:'.4s'}}>Abinaya</div>
          <div className="hero-family">Daughter of Dt. Senthilkumar &amp; Kavitha</div>
        </div>
      </div>

      <div className="scroll-cta">
        <span>Scroll to Reveal</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </div>
  )
}

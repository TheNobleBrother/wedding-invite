import React from 'react'

const CHAPTERS = [
  {
    badge: 'How It Started',
    text: 'Two souls, one unexpected moment — and suddenly the world felt a little different. A shy smile, a quiet conversation, and the beginning of something truly extraordinary.',
    img: '/First-meet.jpg',
    cap: 'the beginning...',
    rot: '-1.8deg',
  },
  {
    badge: 'Making It Official',
    text: 'Somewhere between the laughter and the late-night conversations, they knew — this was it. The one they had been waiting for, in the most unexpected and beautiful way.',
    img: '/Engaged.jpg',
    cap: 'engaged ♡',
    rot: '1.6deg',
  },
  {
    badge: 'Tied for Eternity',
    text: 'From the sacred thread that binds to the vows that last a lifetime — this is not just a wedding. It is the beginning of a forever written in the stars.',
    img: '/Forever.jpg',
    cap: 'forever starts here...',
    rot: '-1.2deg',
  },
]

export default function OurStory() {
  return (
    <section className="story-sec">
      <div style={{textAlign:'center'}}>
        <p className="sec-label">A Glimpse of Our Journey</p>
        <h2 className="sec-title">Our Story</h2>
      </div>
      {CHAPTERS.map((c,i) => (
        <div className="chapter reveal" key={i}>
          <div style={{textAlign:'center',marginBottom:16}}>
            <span className="chapter-badge">{c.badge}</span>
            <p className="chapter-text">{c.text}</p>
          </div>
          <div className="polaroid" style={{transform:`rotate(${c.rot})`}}>
            <img src={c.img} alt={c.badge} loading="lazy" />
            <div className="polaroid-footer">
              <span className="polaroid-cap">{c.cap}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

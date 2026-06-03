import React from 'react'

const ITEMS = [
  { time: '6:30 AM',           event: 'Coffee',      emoji: '☕',  hl: false },
  { time: '7:00 AM',           event: 'Breakfast',   emoji: '🍽️', hl: false },
  { time: '7:00 – 7:30 AM',   event: 'Muhurtham',   emoji: '🌸',  hl: true  },
  { time: '12:00 PM',          event: 'Lunch',       emoji: '🍛',  hl: false },
]

export default function Schedule() {
  return (
    <section className="sched-sec reveal">
      <p className="sec-label">Muhurtham Day Schedule</p>
      <p className="sched-date">July 5, 2026</p>
      <p className="sched-sub">Sri Ahirami Marriage Hall · Mayiladuthurai</p>

      <div className="timeline">
        {ITEMS.map((item, i) => (
          <div className={`tl-item${item.hl ? ' hl' : ''}`} key={i}>
            <div className="tl-dot" />
            <div className="tl-card">
              <p className="tl-time">{item.emoji}&nbsp; {item.time}</p>
              <p className="tl-event">{item.event}</p>
              {item.hl && <span className="hl-badge">⭐ Main Ceremony</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

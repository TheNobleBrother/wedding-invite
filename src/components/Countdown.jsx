import React, { useState, useEffect } from 'react'

const TARGET = new Date('2026-07-05T06:00:00+05:30').getTime()
function getLeft() {
  const d = TARGET - Date.now()
  if (d <= 0) return {days:0,hours:0,mins:0,secs:0}
  return {
    days:  Math.floor(d/86400000),
    hours: Math.floor((d%86400000)/3600000),
    mins:  Math.floor((d%3600000)/60000),
    secs:  Math.floor((d%60000)/1000),
  }
}

export default function Countdown() {
  const [t, setT] = useState(getLeft())
  useEffect(() => { const id = setInterval(()=>setT(getLeft()),1000); return ()=>clearInterval(id) }, [])
  const units = [{v:t.days,l:'Days'},{v:t.hours,l:'Hours'},{v:t.mins,l:'Mins'},{v:t.secs,l:'Secs'}]
  return (
    <div style={{width:'100%',maxWidth:480,margin:'0 auto',padding:'0 24px 56px'}}>
      <div className="cntd-card reveal">
        <p className="cntd-quote">A lifetime of togetherness begins with one sacred step</p>
        <p className="cntd-event">Marriage</p>
        <div className="cntd-grid">
          {units.map(({v,l})=>(
            <div className="cntd-unit" key={l}>
              <span className="cntd-num">{String(v).padStart(2,'0')}</span>
              <span className="cntd-lbl">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

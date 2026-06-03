import React from 'react'

const VENUE = 'Sri Ahirami Marriage Hall'
const ADDR  = '43, Mahadhana St, Kamarajar Salai\nMayiladuthurai, Tamil Nadu 609001'
const GMAP  = 'https://www.google.com/maps/place/ABHIRAMI+MARRIAGE+HALL/data=!4m2!3m1!1s0x0:0x63784acc0d9d4aea'
const EMBED = 'https://maps.google.com/maps?q=11.1020,79.6460&output=embed&z=16'

/* ── Feast Illustration ── warm golden banana-leaf feast */
function FeastIllus() {
  return (
    <svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" width="100%" height="170">
      <defs>
        <linearGradient id="fg0" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8EC"/><stop offset="100%" stopColor="#FFE0A0"/>
        </linearGradient>
      </defs>
      <rect width="340" height="170" fill="url(#fg0)"/>
      {/* banana leaves top corners */}
      <ellipse cx="30" cy="10" rx="44" ry="13" fill="#4A8830" opacity=".5" transform="rotate(-35 30 10)"/>
      <ellipse cx="310" cy="10" rx="44" ry="13" fill="#4A8830" opacity=".5" transform="rotate(35 310 10)"/>
      <ellipse cx="0" cy="40" rx="36" ry="11" fill="#5A9A40" opacity=".4" transform="rotate(-50 0 40)"/>
      <ellipse cx="340" cy="40" rx="36" ry="11" fill="#5A9A40" opacity=".4" transform="rotate(50 340 40)"/>
      {/* plantain leaf plate */}
      <ellipse cx="170" cy="112" rx="105" ry="26" fill="#3A7828" opacity=".75"/>
      <ellipse cx="170" cy="109" rx="102" ry="23" fill="#4A8830" opacity=".7"/>
      {/* leaf vein */}
      <line x1="68" y1="109" x2="272" y2="109" stroke="#3A7020" strokeWidth="1.2" opacity=".6"/>
      {[78,100,122,144,166,188,210,232,254].map((x,i)=>(
        <line key={i} x1={x} y1="109" x2={x+(i<4?-6:6)} y2="122" stroke="#3A7020" strokeWidth=".7" opacity=".5"/>
      ))}
      {/* rice mound */}
      <ellipse cx="170" cy="94" rx="34" ry="16" fill="white" opacity=".92"/>
      <ellipse cx="170" cy="90" rx="28" ry="11" fill="#FAFAFA"/>
      {/* texture on rice */}
      {[155,163,171,179,187].map((x,i)=>(
        <ellipse key={i} cx={x} cy={90+(i%2)*3-1} rx="3" ry="2" fill="#EEE" opacity=".6"/>
      ))}
      {/* sambar bowl */}
      <ellipse cx="100" cy="104" rx="20" ry="10" fill="#E07A10" opacity=".9"/>
      <ellipse cx="100" cy="100" rx="18" ry="8" fill="#F09020"/>
      {/* rasam bowl */}
      <ellipse cx="240" cy="104" rx="20" ry="10" fill="#C83010" opacity=".85"/>
      <ellipse cx="240" cy="100" rx="18" ry="8" fill="#D84020"/>
      {/* kootu bowl small */}
      <ellipse cx="145" cy="120" rx="13" ry="7" fill="#8B6020" opacity=".8"/>
      <ellipse cx="145" cy="117" rx="11" ry="5" fill="#A07030"/>
      {/* sweet/payasam */}
      <ellipse cx="195" cy="120" rx="13" ry="7" fill="#E8C040" opacity=".8"/>
      <ellipse cx="195" cy="117" rx="11" ry="5" fill="#F0D050"/>
      {/* papad */}
      <ellipse cx="125" cy="130" rx="14" ry="5" fill="#F5E0A0" opacity=".8" transform="rotate(-12 125 130)"/>
      <ellipse cx="215" cy="130" rx="14" ry="5" fill="#F5E0A0" opacity=".8" transform="rotate(12 215 130)"/>
      {/* banana */}
      <path d="M72 85 Q84 70 96 80" stroke="#F5C020" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M74 83 Q86 72 94 78" stroke="#F0B010" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".5"/>
      {/* kolam dots bottom */}
      {[60,100,140,170,200,240,280].map((x,i)=>(
        <circle key={i} cx={x} cy="158" r={i%2===0?2.5:1.8} fill="#C9A84C" opacity=".5"/>
      ))}
      {/* nilavilakku lamps */}
      {[40,300].map((x,i)=>(
        <g key={i}>
          <rect x={x-4} y="128" width="8" height="18" rx="2" fill="#C9A84C" opacity=".75"/>
          <ellipse cx={x} cy="126" rx="9" ry="5" fill="#B89040" opacity=".8"/>
          <circle cx={x} cy="122" r="4" fill="#FFD060" opacity=".95"/>
          <ellipse cx={x} cy="120" rx="2" ry="3" fill="#FF8020" opacity=".7"/>
        </g>
      ))}
    </svg>
  )
}

/* ── Groom Welcome Illustration ── nadaswaram, marigolds, groom */
function GroomIllus() {
  return (
    <svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" width="100%" height="170">
      <defs>
        <linearGradient id="gg0" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDE0FF"/><stop offset="100%" stopColor="#C0A8F0"/>
        </linearGradient>
      </defs>
      <rect width="340" height="170" fill="url(#gg0)"/>
      {/* toran top */}
      <path d="M0 22 Q42 40 85 22 Q127 4 170 22 Q213 40 255 22 Q297 4 340 22" stroke="#E8306090" strokeWidth="3" fill="none"/>
      {[20,62,105,148,192,234,277,320].map((x,i)=>(
        <circle key={i} cx={x} cy={i%2===0?24:20} r="5.5"
          fill={i%3===0?'#F060A0':i%3===1?'#FFD060':'#9B40E0'} opacity=".85"/>
      ))}
      {/* marigold hanging strings */}
      {[70,270].map((sx,si)=>(
        <g key={si}>
          <line x1={sx} y1="22" x2={sx+(si===0?10:-10)} y2="115" stroke="#F0A020" strokeWidth="1.5" opacity=".55"/>
          {[35,52,68,84,100].map((y,j)=>(
            <circle key={j} cx={sx+(si===0?j*2:-j*2)} cy={y} r="4.5"
              fill={j%2===0?'#F5C020':'#F08010'} opacity=".78"/>
          ))}
        </g>
      ))}
      {/* Groom silhouette */}
      <ellipse cx="170" cy="72" rx="19" ry="21" fill="#3A1A5A" opacity=".9"/>
      <rect x="152" y="90" width="36" height="58" rx="9" fill="#5A2A8A" opacity=".9"/>
      {/* sherwani gold buttons */}
      <line x1="170" y1="90" x2="170" y2="148" stroke="#C9A84C" strokeWidth="2" opacity=".65"/>
      {[95,105,115,125,135].map((y,i)=>(
        <circle key={i} cx="170" cy={y} r="2.5" fill="#E8C060" opacity=".8"/>
      ))}
      {/* safa turban */}
      <ellipse cx="170" cy="55" rx="22" ry="13" fill="#C9A84C" opacity=".9"/>
      <ellipse cx="170" cy="50" rx="14" ry="9" fill="#E0B840" opacity=".85"/>
      <circle cx="170" cy="47" r="6" fill="#F5D060" opacity=".95"/>
      {/* kalgi feather */}
      <path d="M183 48 Q192 38 188 28" stroke="#C9A84C" strokeWidth="2" fill="none"/>
      <circle cx="188" cy="27" r="3" fill="#F5D060"/>
      {/* nadaswaram players */}
      {[30,310].map((x,si)=>(
        <g key={si}>
          <ellipse cx={x} cy="95" rx="10" ry="12" fill="#6B3A9A" opacity=".8"/>
          <rect x={x-5} y="105" width="10" height="38" rx="4" fill="#5A2A8A" opacity=".8"/>
          {/* nadaswaram instrument */}
          <rect x={si===0?x+6:x-14} y="90" width="3" height="28" rx="1.5" fill="#C9A84C" opacity=".85"/>
          <ellipse cx={si===0?x+18:x-19} cy="103" rx="8" ry="5" fill="#B89040" opacity=".75"/>
        </g>
      ))}
      {/* rose petals ground */}
      {[110,130,150,170,190,210,230].map((x,i)=>(
        <ellipse key={i} cx={x} cy={158+(i%3)*4} rx="5.5" ry="3"
          fill={i%2===0?'#F080A0':'#F5C030'} opacity=".65"
          transform={`rotate(${i*28-40} ${x} ${158+(i%3)*4})`}/>
      ))}
      {/* kolam */}
      {[80,130,170,210,260].map((x,i)=>(
        <circle key={i} cx={x} cy="165" r="2.5" fill="#9B40E0" opacity=".4"/>
      ))}
    </svg>
  )
}

/* ── Reception Illustration ── midnight ballroom with chandeliers */
function ReceptionIllus() {
  return (
    <svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" width="100%" height="190">
      <defs>
        <linearGradient id="rg0" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0C0820"/><stop offset="100%" stopColor="#221050"/>
        </linearGradient>
        <radialGradient id="rspot" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="rgba(201,168,76,0.15)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect width="340" height="190" fill="url(#rg0)"/>
      <rect width="340" height="190" fill="url(#rspot)"/>
      {/* stars */}
      {[25,55,88,118,145,175,210,248,285,315,10,42,95,162,222,298].map((x,i)=>(
        <circle key={i} cx={x} cy={8+(i%5)*9} r={i%3===0?1.5:1} fill="white" opacity={.35+.4*(i%3)/2}/>
      ))}
      {/* main chandelier */}
      <line x1="170" y1="0" x2="170" y2="26" stroke="#C9A84C" strokeWidth="2"/>
      <ellipse cx="170" cy="28" rx="30" ry="9" fill="none" stroke="#C9A84C" strokeWidth="1.8" opacity=".9"/>
      <ellipse cx="170" cy="30" rx="18" ry="5" fill="none" stroke="#E8C060" strokeWidth="1" opacity=".7"/>
      {[-22,-11,0,11,22].map((dx,i)=>(
        <g key={i}>
          <line x1={170+dx} y1="28" x2={170+dx*1.3} y2={42+Math.abs(dx*0.8)} stroke="#C9A84C" strokeWidth="1.2" opacity=".7"/>
          <circle cx={170+dx*1.3} cy={44+Math.abs(dx*0.8)} r="3.5" fill="#FFD060" opacity=".92"/>
        </g>
      ))}
      {/* side mini chandeliers */}
      {[60,280].map((x,ci)=>(
        <g key={ci}>
          <line x1={x} y1="0" x2={x} y2="30" stroke="#C9A84C" strokeWidth="1.2" opacity=".6"/>
          <ellipse cx={x} cy="32" rx="16" ry="6" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity=".65"/>
          {[-10,0,10].map((dx,i)=>(
            <g key={i}>
              <line x1={x+dx} y1="32" x2={x+dx} y2={40+Math.abs(dx*0.7)} stroke="#C9A84C" strokeWidth=".9" opacity=".6"/>
              <circle cx={x+dx} cy={42+Math.abs(dx*0.7)} r="2.5" fill="#FFD060" opacity=".85"/>
            </g>
          ))}
        </g>
      ))}
      {/* string lights */}
      <path d="M10 62 Q85 74 170 62 Q255 50 330 62" stroke="#44444490" strokeWidth="1" fill="none"/>
      {[10,47,85,122,160,198,236,273,310].map((x,i)=>(
        <g key={i}>
          <circle cx={x} cy={64+(i%2)*9} r="4.5" fill="#FFD060" opacity=".85"/>
          <ellipse cx={x} cy={62+(i%2)*9} rx="2" ry="1.5" fill="#FFF" opacity=".5"/>
        </g>
      ))}
      {/* decorative arch */}
      <path d="M50 190 Q50 95 170 78 Q290 95 290 190" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity=".45"/>
      {/* flowers on arch */}
      {[70,95,120,145,170,195,220,245,270].map((x,i)=>{
        const t = (x-50)/240, y = 190-112*Math.sin(t*Math.PI)
        return <circle key={i} cx={x} cy={Math.max(80,y)} r="4" fill={i%2===0?'#F060A0':'#9B40E0'} opacity=".65"/>
      })}
      {/* couple silhouette */}
      {/* groom */}
      <ellipse cx="148" cy="128" rx="13" ry="15" fill="#1A0A38" opacity=".95"/>
      <rect x="136" y="142" width="25" height="38" rx="6" fill="#1A0A38" opacity=".95"/>
      {/* bow tie */}
      <path d="M147 143 L145 140 L148 142 L151 140 L149 143Z" fill="#C9A84C" opacity=".8"/>
      {/* bride */}
      <ellipse cx="192" cy="125" rx="13" ry="15" fill="#2A1055" opacity=".9"/>
      <path d="M178 140 Q175 168 162 190 L222 190 Q208 168 205 140Z" fill="#C060A0" opacity=".72"/>
      {/* dress shimmer */}
      {[168,175,182,189,196,203,212].map((x,i)=>(
        <line key={i} x1={x} y1="160" x2={x-6+(i*2)} y2="190" stroke="#E090C0" strokeWidth=".8" opacity=".45"/>
      ))}
      {/* joined hands */}
      <ellipse cx="170" cy="148" rx="7" ry="4" fill="#C9A84C" opacity=".55"/>
      {/* floating lanterns */}
      {[75,265].map((x,i)=>(
        <g key={i}>
          <ellipse cx={x} cy="90" rx="10" ry="13" fill="#E07020" opacity=".5"/>
          <ellipse cx={x} cy="86" rx="7" ry="5" fill="#F09030" opacity=".4"/>
          <line x1={x} y1="103" x2={x} y2="112" stroke="#C06010" strokeWidth="1" opacity=".45"/>
        </g>
      ))}
    </svg>
  )
}

/* ── Muhurtham Illustration ── golden mandap with couple under sacred fire */
function MuhurthamIllus() {
  return (
    <svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" width="100%" height="210">
      <defs>
        <linearGradient id="mg0" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDF4E0"/><stop offset="100%" stopColor="#F5D88A"/>
        </linearGradient>
        <radialGradient id="fire" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#FFE060"/><stop offset="100%" stopColor="#FF6010"/>
        </radialGradient>
      </defs>
      <rect width="340" height="210" fill="url(#mg0)"/>
      {/* hanging jasmine / marigold strings */}
      {[20,55,90,125,160,195,230,265,300,335].map((x,i)=>(
        <g key={i}>
          <line x1={x} y1="0" x2={x} y2={22+i%3*7} stroke={i%2===0?'#C83070':'#F0A020'} strokeWidth="1.3" opacity=".65"/>
          <circle cx={x} cy={24+i%3*7} r={i%2===0?5:4.5} fill={i%2===0?'#F060A0':'#F5C020'} opacity=".82"/>
          <circle cx={x} cy={24+i%3*7} r={i%2===0?2.5:2} fill={i%2===0?'#FF90C0':'#FFE060'} opacity=".9"/>
        </g>
      ))}
      {/* Mandap pillars — 4 ornate */}
      {[42,298].map((x,si)=>(
        <g key={si}>
          {/* base */}
          <rect x={x-10} y="168" width="20" height="14" rx="3" fill="#B89040" opacity=".8"/>
          {/* pillar shaft */}
          <rect x={x-8} y="52" width="16" height="118" rx="5" fill="#C9A84C" opacity=".82"/>
          {/* gold rings on pillar */}
          {[65,80,95,115,135,155].map((y,j)=>(
            <rect key={j} x={x-8} y={y} width="16" height="5" rx="2" fill="#E8C060" opacity=".6"/>
          ))}
          {/* capital top */}
          <rect x={x-12} y="46" width="24" height="10" rx="4" fill="#E8C060" opacity=".88"/>
          {/* flower at top */}
          <circle cx={x} cy="44" r="12" fill="#F060A0" opacity=".72"/>
          <circle cx={x} cy="44" r="7" fill="#FF90C0" opacity=".8"/>
          <circle cx={x} cy="44" r="3.5" fill="#FFD060" opacity=".95"/>
        </g>
      ))}
      {/* Mandap crossbeam roof */}
      <rect x="34" y="44" width="272" height="14" rx="5" fill="#C9A84C" opacity=".88"/>
      <rect x="34" y="44" width="272" height="6" rx="3" fill="#E8C060" opacity=".65"/>
      {/* fringe / latkans hanging from beam */}
      {[50,70,90,110,130,150,170,190,210,230,250,270,290].map((x,i)=>(
        <g key={i}>
          <line x1={x} y1="58" x2={x} y2={70+i%3*5} stroke={i%2===0?'#F060A0':'#C9A84C'} strokeWidth="1.2" opacity=".7"/>
          <circle cx={x} cy={72+i%3*5} r="4" fill={i%3===0?'#F060A0':i%3===1?'#FFD060':'#9B40E0'} opacity=".8"/>
        </g>
      ))}
      {/* temple gopuram silhouette in background */}
      <polygon points="170,55 152,80 188,80" fill="#C9A84C" opacity=".25"/>
      <rect x="156" y="80" width="28" height="12" rx="2" fill="#C9A84C" opacity=".18"/>
      <polygon points="170,70 162,82 178,82" fill="#E8C060" opacity=".2"/>
      {/* Bride silhouette */}
      <ellipse cx="138" cy="130" rx="14" ry="17" fill="#C83070" opacity=".88"/>
      <path d="M124 146 Q120 182 108 210 L170 210 Q158 182 152 146Z" fill="#E83080" opacity=".78"/>
      {/* saree drape detail */}
      <path d="M124 146 Q128 170 112 210" stroke="#C9A84C" strokeWidth="2.5" fill="none" opacity=".7"/>
      <path d="M124 150 Q126 165 118 185" stroke="#FFD060" strokeWidth="1" fill="none" opacity=".5"/>
      {/* jewellery */}
      <ellipse cx="138" cy="120" rx="7" ry="3" fill="#C9A84C" opacity=".7"/>
      {/* Groom silhouette */}
      <ellipse cx="202" cy="128" rx="14" ry="17" fill="#4A2860" opacity=".88"/>
      <path d="M188 144 Q185 178 174 210 L232 210 Q220 178 216 144Z" fill="#6A3890" opacity=".85"/>
      {/* dhoti line */}
      <line x1="188" y1="165" x2="216" y2="165" stroke="#C9A84C" strokeWidth="2" opacity=".6"/>
      {/* angavastram */}
      <path d="M202 144 Q215 152 220 144" stroke="#C9A84C" strokeWidth="2" fill="none" opacity=".65"/>
      {/* sacred fire / havan kund */}
      <rect x="158" y="168" width="24" height="22" rx="4" fill="#8B6010" opacity=".78"/>
      <rect x="160" y="166" width="20" height="6" rx="2" fill="#A07020" opacity=".7"/>
      {/* flames */}
      <path d="M163 168 Q170 150 177 168" fill="url(#fire)" opacity=".88"/>
      <path d="M165 168 Q170 155 175 168" fill="#FFD060" opacity=".8"/>
      <path d="M167 168 Q170 158 173 168" fill="#FFFAAA" opacity=".75"/>
      {/* sacred thread between hands */}
      <path d="M148 148 Q170 155 190 148" stroke="#C83070" strokeWidth="1.8" fill="none" opacity=".6" strokeDasharray="3,2"/>
      {/* petals scattered all around */}
      {[85,110,132,208,228,252,95,220].map((x,i)=>(
        <ellipse key={i} cx={x} cy={195+(i%3)*6} rx="6" ry="3.5"
          fill={i%3===0?'#F080A0':i%3===1?'#F5C030':'#FF6090'} opacity=".68"
          transform={`rotate(${i*35} ${x} ${195+(i%3)*6})`}/>
      ))}
      {/* small oil lamps */}
      {[58,282].map((x,i)=>(
        <g key={i}>
          <ellipse cx={x} cy="185" rx="9" ry="5" fill="#C9A84C" opacity=".72"/>
          <ellipse cx={x} cy="182" rx="6" ry="3.5" fill="#E8C060" opacity=".75"/>
          <circle cx={x} cy="178" r="4" fill="#FFD060" opacity=".92"/>
          <ellipse cx={x} cy="175" rx="2" ry="3.5" fill="#FF8020" opacity=".75"/>
        </g>
      ))}
    </svg>
  )
}

function VenueBlock() {
  return (
    <div className="venue-block">
      <p className="venue-name">{VENUE}</p>
      <p className="venue-addr">{ADDR}</p>
      <a className="map-btn" href={GMAP} target="_blank" rel="noreferrer">
        📍 View on Map
      </a>
      <iframe
        title="Venue Map"
        src={EMBED}
        className="map-embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

function EventCard({ cardClass, Illus, sacred, name, day, num, my, time, theme }) {
  return (
    <div className={`evt-card ${cardClass} reveal`}>
      <div style={{lineHeight:0}}><Illus /></div>
      <div className="evt-body">
        {sacred && <p className="evt-sacred">{sacred}</p>}
        <h3 className="evt-name">{name}</h3>
        <div className="evt-date">
          <span className="evt-day">{day}</span>
          <span className="evt-sep">|</span>
          <span className="evt-num">{num}</span>
          <span className="evt-sep">|</span>
          <span className="evt-my">{my}</span>
        </div>
        <div className="evt-divider" />
        <p className="evt-time">{time}</p>
        <p className="evt-theme">{theme}</p>
      </div>
    </div>
  )
}

export default function Ceremonies() {
  return (
    <div className="cer-sec">
      <div className="cer-inner">
        <div style={{textAlign:'center'}}>
          <p className="sec-label">The Celebrations Unfold</p>
          <h2 className="sec-title">Sacred Ceremonies</h2>
        </div>

        <div className="day-divider">Day 1 · 04/07/2026 · Saturday</div>

        <EventCard cardClass="feast-card"     Illus={FeastIllus}
          name="Day Feast"
          day="Saturday" num="4" my="July 2026"
          time="11:00 AM" theme="Traditional South Indian Feast" />

        <EventCard cardClass="groom-card"     Illus={GroomIllus}
          name="Welcoming the Groom"
          day="Saturday" num="4" my="July 2026"
          time="6:30 PM" theme="Traditional Ceremony" />

        <EventCard cardClass="reception-card" Illus={ReceptionIllus}
          name="Reception"
          day="Saturday" num="4" my="July 2026"
          time="6:00 PM – 7:00 PM" theme="Bing, Indo-Western" />

        <VenueBlock />

        <div className="day-divider">Day 2 · 05/07/2026 · Sunday</div>

        <EventCard cardClass="muhu-card" Illus={MuhurthamIllus}
          sacred="Sacred Vows · Eternal Bond · Blessed Beginnings"
          name="Muhurtham"
          day="Sunday" num="5" my="July 2026"
          time="6:00 AM – 7:30 AM" theme="South Indian Traditional" />

        <VenueBlock />
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const SVC  = 'service_01g5mxt'
const TMPL = 'template_h858owp'
const KEY  = '9k08aC9Cu6rvqEMce'

const EVENTS = [
  { id:'feast',    label:'Day Feast',           date:'July 4 · 11:00 AM' },
  { id:'groom',    label:'Welcoming the Groom', date:'July 4 · 6:30 PM'  },
  { id:'recep',    label:'Reception',           date:'July 4 · 6:00 PM'  },
  { id:'muhu',     label:'Muhurtham (Marriage)',date:'July 5 · 6:00 AM'  },
]

export default function RSVPSection() {
  const [form, setForm]   = useState({ name:'', phone:'', guests:'2', message:'' })
  const [chk, setChk]     = useState({ feast:true, groom:true, recep:true, muhu:true })
  const [status, setStatus] = useState('idle')

  const onChange = e => setForm(p => ({...p, [e.target.name]: e.target.value}))
  const toggle   = id => setChk(p => ({...p, [id]: !p[id]}))

  const onSubmit = async e => {
    e.preventDefault()
    if (!form.name.trim()) return
    setStatus('sending')

    const attending = EVENTS.filter(ev => chk[ev.id]).map(ev => `• ${ev.label} — ${ev.date}`).join('\n')
    const skipping  = EVENTS.filter(ev => !chk[ev.id]).map(ev => `• ${ev.label}`).join('\n') || 'None'

    const params = {
      to_email:    'rohithsenthilkumar03@gmail.com',
      subject:     `💌 RSVP — ${form.name} for Abinaya & Subash's Wedding`,
      guest_name:  form.name,
      guest_phone: form.phone || 'Not provided',
      guest_count: `${form.guests} guest${+form.guests > 1 ? 's' : ''}`,
      attending_events: attending || 'No events selected',
      not_attending:    skipping,
      guest_message:    form.message.trim() || 'No message provided',
      rsvp_summary: `
💌 New RSVP — Abinaya & Subash Wedding
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Guest Name      : ${form.name}
📱 Phone/WhatsApp  : ${form.phone || 'Not provided'}
👥 No. of Guests   : ${form.guests}

📅 EVENTS ATTENDING:
${attending || 'No events selected'}
${skipping !== 'None' ? `\n⬜ NOT ATTENDING:\n${skipping}` : ''}

💬 Message & Blessings:
"${form.message.trim() || 'No message provided'}"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Wedding : Abinaya Senthilkumar ♡ Subash Chandhra Bose
Date    : July 4–5, 2026
Venue   : Sri Ahirami Marriage Hall, Mayiladuthurai, TN 609001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim()
    }

    try {
      await emailjs.send(SVC, TMPL, params, KEY)
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <section className="rsvp-sec reveal">
      <div className="rsvp-ok">
        <div className="rsvp-ok-icon">🎊</div>
        <h3>We're Overjoyed!</h3>
        <p>Thank you, <strong>{form.name}</strong>! Your RSVP is confirmed.<br/>
          We can't wait to celebrate with you on this beautiful day.</p>
        <p style={{marginTop:12,fontSize:'.82rem',color:'var(--pale)'}}>
          July 4–5, 2026 · Sri Ahirami Marriage Hall, Mayiladuthurai
        </p>
      </div>
      <Contacts />
    </section>
  )

  return (
    <section className="rsvp-sec reveal">
      <p className="sec-label">Join the Celebration</p>
      <h2 className="sec-title">Rsvp</h2>
      <p className="rsvp-deadline">Kindly respond by July 3, 2026</p>

      <form className="rsvp-form" onSubmit={onSubmit}>
        {/* Name */}
        <div className="fg">
          <label className="fl">Your Full Name</label>
          <input className="fi" type="text" name="name" placeholder="Enter your name" value={form.name} onChange={onChange} required />
        </div>

        {/* Phone */}
        <div className="fg">
          <label className="fl">Phone / WhatsApp Number</label>
          <input className="fi" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={onChange} />
        </div>

        {/* Guests */}
        <div className="fg">
          <label className="fl">Number of Guests</label>
          <select className="fs" name="guests" value={form.guests} onChange={onChange}>
            {Array.from({length:10},(_,i)=>i+1).map(n=>(
              <option key={n} value={String(n)}>{n} {n===1?'Guest':'Guests'}</option>
            ))}
          </select>
        </div>

        {/* Events */}
        <div className="fg">
          <label className="fl">Events You Will Join</label>
          <div className="evt-checks">
            {EVENTS.map(ev => (
              <div
                key={ev.id}
                className={`evt-chk${chk[ev.id]?' on':''}`}
                onClick={() => toggle(ev.id)}
              >
                <div className="chk-box"><span className="chk-tick">✓</span></div>
                <span className="chk-lbl">{ev.label}</span>
                <span className="chk-date">{ev.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="fg">
          <label className="fl">Message &amp; Blessings <span style={{textTransform:'none',letterSpacing:0,color:'var(--pale)'}}>(Optional)</span></label>
          <textarea className="ft" name="message" placeholder="Send your heartfelt wishes to the couple..." value={form.message} onChange={onChange} />
        </div>

        {status === 'error' && (
          <p className="err-msg">Something went wrong. Please try again or contact us directly.</p>
        )}

        <button type="submit" className="rsvp-btn" disabled={status==='sending'}>
          {status==='sending' ? 'Sending...' : 'Confirm RSVP →'}
        </button>
      </form>

      <Contacts />
    </section>
  )
}

function Contacts() {
  return (
    <div className="contacts">
      <p className="contacts-title">— Contact Details —</p>
      <p className="contact-row"><strong>Bride's Family (Kavitha):</strong> +91 XXXXX XXXXX</p>
      <p className="contact-row"><strong>Groom's Family (Suresh):</strong> +91 XXXXX XXXXX</p>
      <p style={{fontSize:'.72rem',color:'var(--pale)',marginTop:10,fontStyle:'italic'}}>
        Sri Ahirami Marriage Hall · Mayiladuthurai · Tamil Nadu
      </p>
    </div>
  )
}

# 💜 Abinaya & Subash — Wedding Invitation

A pixel-perfect, fully animated digital wedding invitation.
**Stack:** React 18 + Vite + vanilla CSS (no Tailwind)

---

## 🚀 Run Locally in 3 steps

```bash
npm install
npm run dev
# Open http://localhost:5173
```

---

## 📁 Project Structure

```
wedding-invite/
├── public/
│   ├── First-meet.jpg        ← Couple photo 1 (How It Started)
│   ├── Engaged.jpg           ← Couple photo 2 (Making It Official)
│   ├── Forever.jpg           ← Couple photo 3 (Tied for Eternity)
│   └── Mella-Sirithai.mp3   ← Background music (starts at 0:38)
├── src/
│   ├── components/
│   │   ├── EnvelopeSeal.jsx  ← Red envelope + wax seal "A&S" (tap to open)
│   │   ├── HeroSection.jsx   ← OM symbol, Thirukkural quote, names
│   │   ├── ScratchCard.jsx   ← Canvas-based scratch card widget
│   │   ├── SaveTheDate.jsx   ← 3 scratch cards + confetti burst
│   │   ├── Countdown.jsx     ← Live countdown to July 5 6:00 AM IST
│   │   ├── OurStory.jsx      ← 3 polaroid photos with captions
│   │   ├── Ceremonies.jsx    ← 4 SVG event cards + Google Maps embeds
│   │   ├── Schedule.jsx      ← Muhurtham day timeline
│   │   ├── RSVPSection.jsx   ← Full RSVP form → EmailJS
│   │   ├── Footer.jsx        ← Closing with OM + couple names
│   │   └── FloatingParticles.jsx ← Ambient lavender particles
│   ├── App.jsx               ← Orchestrator: music, scroll-reveal, sound toggle
│   ├── main.jsx              ← React root
│   └── index.css             ← All styles (lavender palette, 120+ classes)
├── index.html
├── package.json
├── vite.config.js
└── vercel.json               ← Deploy-ready Vercel config
```

---

## 📧 EmailJS — CRITICAL SETUP (do this before sharing the link)

Your credentials are wired in `RSVPSection.jsx`. But you must configure
the **email template** in the EmailJS dashboard to actually send the email.

### Step 1 — Log in to EmailJS
Go to: https://dashboard.emailjs.com

### Step 2 — Edit your template
- Go to **Email Templates** → click `template_h858owp`
- Set the **To Email** field to: `rohithsenthilkumar03@gmail.com`
- Set the **Subject** field to: `{{subject}}`
- In the **Body** (plain text or HTML), paste exactly this:

```
{{rsvp_summary}}
```

That's it. The `rsvp_summary` variable already contains the full formatted
RSVP with all guest details, events attended, and blessings message.

### What you'll receive per RSVP:

```
💌 New RSVP — Abinaya & Subash Wedding
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Guest Name       : Priya Rajan
📱 Phone/WhatsApp   : +91 98765 43210
👥 No. of Guests    : 3

📅 EVENTS ATTENDING:
• Day Feast — July 4 · 11:00 AM
• Welcoming the Groom — July 4 · 6:30 PM
• Reception — July 4 · 6:00 PM
• Muhurtham (Marriage) — July 5 · 6:00 AM

💬 Message & Blessings:
"Wishing you a lifetime of love and happiness!"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Wedding : Abinaya Senthilkumar ♡ Subash Chandhra Bose
Date    : July 4–5, 2026
Venue   : Sri Ahirami Marriage Hall, Mayiladuthurai, TN 609001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (30 seconds)
```bash
npm install -g vercel
vercel          # follow prompts
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new → Import repo
3. Framework preset: **Vite** (auto-detected)
4. Click **Deploy**

Your URL will be: `https://your-project-name.vercel.app`

---

## ✏️ Customise

| What | Where |
|------|-------|
| Contact phone numbers | `RSVPSection.jsx` → `Contacts` component |
| Music start time | `App.jsx` → `a.currentTime = 38` |
| Countdown target date | `Countdown.jsx` → `TARGET` constant |
| Event details | `Ceremonies.jsx` → `EventCard` calls |
| Schedule times | `Schedule.jsx` → `ITEMS` array |
| Lavender colours | `index.css` → `:root` CSS variables |
| Couple photos | Replace files in `public/` (keep same filenames) |

---

## ✨ Features Checklist

- [x] 🔴 **Envelope seal** — red embossed envelope, wax seal "A&S", zoom-open animation
- [x] 🎵 **Music** — Mella Sirithai starts at 0:38, fade-in, loops
- [x] 🔊 **Sound toggle** — floating button bottom-right
- [x] ✨ **Floating particles** — ambient lavender background throughout
- [x] 🌸 **Hero** — OM symbol, Thirukkural quote, Subash & Abinaya names, family names, scroll CTA
- [x] 🎴 **Scratch cards** — 3 interactive canvas cards reveal July / 5 / 2026
- [x] 🎊 **Confetti** — burst when all 3 cards scratched
- [x] ⏱  **Live countdown** — real-time days/hours/mins/secs to July 5 6:00 AM IST
- [x] 📸 **Our Story** — 3 polaroid photos, tilted, hover effect, captions
- [x] 🎪 **4 Event cards** — SVG illustrated: Feast, Welcoming Groom, Reception, Muhurtham
- [x] 🗺  **Google Maps** — embedded for Sri Ahirami Marriage Hall + "View on Map" buttons
- [x] ⏰ **Day schedule** — Coffee → Breakfast → Muhurtham (highlighted gold) → Lunch
- [x] 📋 **RSVP form** — Name, phone, guests 1–10, 4 event checkboxes, blessings → EmailJS
- [x] 💌 **RSVP email** — sends formatted email to rohithsenthilkumar03@gmail.com
- [x] 💜 **Lavender palette** — throughout: `--lav-700` deep, `--lav-300` soft, gold accents
- [x] 📱 **Mobile-first** — responsive, touch scratch, max-width 480px
- [x] 🎞  **Scroll animations** — every section fades up on enter
- [x] 🏛  **Vercel-ready** — `vercel.json` configured, `npm run build` tested ✅

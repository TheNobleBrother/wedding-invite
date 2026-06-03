import React, { useRef, useEffect, useState } from 'react'

export default function ScratchCard({ value, subValue, label, color = '#9B7EC8', onScratched }) {
  const canvasRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const drawing = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth || 100
    canvas.height = canvas.offsetHeight || 100

    // Lavender scratch layer
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Subtle shimmer dots
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = 'rgba(255,255,255,0.18)'
      ctx.beginPath()
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2.5 + 0.5, 0, Math.PI * 2)
      ctx.fill()
    }

    // Hint text
    ctx.fillStyle = 'rgba(255,255,255,0.55)'
    ctx.font = '500 8.5px Jost, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('✦ SCRATCH', canvas.width / 2, canvas.height / 2 + 3.5)
  }, [color])

  const getXY = (e, canvas) => {
    const r = canvas.getBoundingClientRect()
    const src = e.touches ? e.touches[0] : e
    return { x: src.clientX - r.left, y: src.clientY - r.top }
  }

  const scratch = (e) => {
    if (!drawing.current || revealed) return
    e.preventDefault()
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { x, y } = getXY(e, canvas)
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 24, 0, Math.PI * 2)
    ctx.fill()

    // Sample pixels to check coverage
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let clear = 0
    for (let i = 3; i < img.data.length; i += 4) if (img.data[i] < 128) clear++
    if (clear / (canvas.width * canvas.height) > 0.62) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setRevealed(true)
      onScratched && onScratched()
    }
  }

  return (
    <div className="scratch-wrap">
      <span className="scratch-lbl">{label}</span>
      <div className="scratch-card">
        <div className="scratch-inner">
          <span className="scratch-val">{value}</span>
          {subValue && <span className="scratch-sub-val">{subValue}</span>}
        </div>
        <canvas
          ref={canvasRef}
          className="scratch-canvas"
          style={{ display: revealed ? 'none' : 'block' }}
          onMouseDown={() => { drawing.current = true }}
          onMouseUp={() => { drawing.current = false }}
          onMouseLeave={() => { drawing.current = false }}
          onMouseMove={scratch}
          onTouchStart={(e) => { drawing.current = true; e.preventDefault() }}
          onTouchEnd={() => { drawing.current = false }}
          onTouchMove={scratch}
        />
      </div>
      {revealed && <span className="scratch-done">✓ Revealed!</span>}
    </div>
  )
}

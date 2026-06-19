import { useRef, useEffect } from 'react'

export default function Counter({ value, suffix, label, inView }: {
  value: number; suffix: string; label: string; inView: boolean
}) {
  const numRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current || !numRef.current) return
    started.current = true
    const el = numRef.current
    const duration = 1800
    const start = performance.now()
    const run = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      el.textContent = Math.floor(eased * value).toString()
      if (t < 1) requestAnimationFrame(run)
    }
    requestAnimationFrame(run)
  }, [inView, value])

  return (
    <div className="flex flex-col gap-2">
      <div className="font-outfit font-black text-white leading-none"
        style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}>
        <span ref={numRef}>0</span>
        <span className="text-[#F97316]">{suffix}</span>
      </div>
      <p className="text-white/35 text-xs font-semibold uppercase tracking-[0.15em]">{label}</p>
    </div>
  )
}

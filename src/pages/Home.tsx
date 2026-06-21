import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks'
import Counter from '../Counter'
import { COUNTRIES, TICKER } from '../data'

interface Brand {
  name: string
  logoUrl?: string
  wm: string
  wmSize: number
  wmWeight: number
  wmLS?: string
}

const BRANDS: Brand[] = [
  { name: 'All Saints',        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Allsaints_logo.svg',
                                wm: 'ALLSAINTS',           wmSize: 17, wmWeight: 900, wmLS: '0.08em' },
  { name: 'French Connection', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/French_Connection_logo.svg',
                                wm: 'FRENCH\nCONNECTION', wmSize: 11, wmWeight: 300, wmLS: '0.18em' },
  { name: 'Banana Republic',   logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Banana_Republic_Logo.svg',
                                wm: 'BANANA\nREPUBLIC',   wmSize: 14, wmWeight: 600, wmLS: '0.1em'  },
  { name: 'Kellwood',          wm: 'KELLWOOD',             wmSize: 22, wmWeight: 700, wmLS: '0.04em' },
  { name: 'Gap',               logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Gap_logo.svg',
                                wm: 'GAP',                 wmSize: 44, wmWeight: 900, wmLS: '-0.02em' },
  { name: 'Old Navy',          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Old_Navy_logo.svg',
                                wm: 'OLD NAVY',            wmSize: 21, wmWeight: 900, wmLS: '0.04em' },
  { name: 'Adidas',            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
                                wm: 'adidas',              wmSize: 28, wmWeight: 700, wmLS: '-0.01em' },
  { name: 'Reebok',            logoUrl: 'https://cdn.simpleicons.org/reebok/111111',
                                wm: 'REEBOK',              wmSize: 26, wmWeight: 900, wmLS: '0.06em' },
  { name: 'Nordstrom',         logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Nordstrom_Logo_2019.svg',
                                wm: 'NORDSTROM',           wmSize: 15, wmWeight: 700, wmLS: '0.06em' },
  { name: "Dillard's",         logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Dillard%27s_Logo.svg",
                                wm: "DILLARD'S",           wmSize: 18, wmWeight: 700, wmLS: '0.04em' },
  { name: 'New Look',          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/New_Look_logo_2012.svg',
                                wm: 'NEW LOOK',            wmSize: 26, wmWeight: 900, wmLS: '0.02em' },
  { name: 'Needle & Thread',   logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdWBHjbjdy0yfEJlsh-0dbpXbeA5rOK1fVv_oiFiJYvjoUgrqPaKTESNO&s=10',
                                wm: 'Needle &\nThread',    wmSize: 15, wmWeight: 400, wmLS: '0.04em' },
]

// ── Hero ─────────────────────────────────────────────────────────────

function Hero() {
  const WORDS = ['On Quality.', 'On Margin.', 'On-Time.']
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<'in' | 'out'>('in')

  useEffect(() => {
    const t = setInterval(() => {
      setPhase('out')
      setTimeout(() => { setIdx(i => (i + 1) % WORDS.length); setPhase('in') }, 260)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="min-h-[100dvh] relative overflow-hidden flex items-center" style={{ paddingTop: '68px' }}>

      {/* Video background */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.65 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark base so page doesn't flash white on load */}
      <div className="absolute inset-0 bg-[#0A0A0A] -z-10" />

      {/* Left-heavy overlay — keeps text readable, lets right side breathe */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(100deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.15) 100%)' }} />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)' }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full py-20 lg:py-28 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">Fashion Sourcing · India</span>
          </div>

          <h1 className="font-outfit font-black text-white leading-[0.88] tracking-[-0.035em] mb-8"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 8.5rem)' }}>
            THE NEW<br />WAY TO<br />
            <span className="text-[#F97316]">FASHION.</span>
          </h1>

          <div className="flex flex-wrap items-baseline gap-3 mb-8 overflow-hidden">
            <span className="text-white/50 font-medium" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>We Deliver</span>
            <span key={idx} className={`text-[#F97316] font-semibold ${phase === 'in' ? 'word-in' : 'word-out'}`}
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              {WORDS[idx]}
            </span>
          </div>

          <p className="text-white/38 text-lg leading-relaxed max-w-[500px] mb-10">
            One-stop fashion sourcing with 200+ years of combined management expertise.
            Design, production, quality, and compliance across six manufacturing countries.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#F97316] text-white font-bold text-sm tracking-wide hover:bg-[#EA580C] transition-colors duration-150 active:scale-[0.97]">
              Start a Partnership
            </Link>
            <Link to="/portfolio"
              className="inline-flex items-center gap-3 px-7 py-4 border border-white/12 text-white/60 font-semibold text-sm hover:border-white/25 hover:text-white transition-all duration-200">
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Ticker ────────────────────────────────────────────────────────────

function Ticker() {
  return (
    <div className="bg-[#F97316] py-3 overflow-hidden select-none">
      <div className="marquee-track">
        {[...TICKER, ...TICKER].map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-5 text-[#0A0A0A] font-black text-[11px] tracking-[0.2em] uppercase whitespace-nowrap">
            {item}
            <span className="w-1 h-1 bg-[#0A0A0A]/25 rounded-full flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────

function Stats() {
  const [ref, inView] = useInView(0.2)
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-10 reveal ${inView ? 'in-view' : ''}`}>
          {[
            { value: 200, suffix: '+', label: 'Years Combined Experience' },
            { value: 30,  suffix: '+', label: 'Global Clients' },
            { value: 3,   suffix: '',  label: 'In-House Designers' },
            { value: 30,  suffix: '+', label: 'Master Artisans' },
          ].map(s => <Counter key={s.label} {...s} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}

// ── Brand Grid ────────────────────────────────────────────────────────

function BrandGrid() {
  const [ref, inView] = useInView(0.1)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[#0D0D0D] py-28 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className={`inline-flex items-center gap-2 mb-5 reveal ${inView ? 'in-view' : ''}`}>
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">Our Clients</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className={`font-outfit font-black text-white leading-tight tracking-tight reveal reveal-d1 ${inView ? 'in-view' : ''}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Brands We've<br />Worked With
            </h2>
            <p className={`text-white/35 text-[15px] max-w-sm leading-relaxed reveal reveal-d2 ${inView ? 'in-view' : ''}`}>
              Long-lasting relationships built over two decades with the world's most recognised fashion and retail names.
            </p>
          </div>
        </div>

        {/* Logo grid — white containers so logos appear correctly */}
        <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 reveal reveal-d3 ${inView ? 'in-view' : ''}`}>
          {BRANDS.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>

        <div className={`mt-12 reveal reveal-d5 ${inView ? 'in-view' : ''}`}>
          <Link to="/contact"
            className="inline-flex items-center gap-3 text-white/35 hover:text-[#F97316] text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200">
            Become a Client
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0 4H12M9 1L12 4L9 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function BrandWordmark({ brand }: { brand: Brand }) {
  const lines = brand.wm.split('\n')
  const lineH = brand.wmSize * 1.25
  const totalH = lines.length * lineH
  const startY = 40 - totalH / 2 + lineH / 2
  return (
    <svg viewBox="0 0 200 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {lines.map((line, i) => (
        <text
          key={i}
          x="100"
          y={startY + i * lineH}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Outfit', system-ui, sans-serif"
          fontWeight={brand.wmWeight}
          fontSize={brand.wmSize}
          letterSpacing={brand.wmLS ?? '0'}
          fill="#111111"
        >
          {line}
        </text>
      ))}
    </svg>
  )
}

function BrandCard({ brand }: { brand: Brand }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImg = !!brand.logoUrl && !imgFailed

  return (
    <div className="flex flex-col items-center gap-2.5 group cursor-default">
      <div className="w-full aspect-[3/2] bg-white flex items-center justify-center p-4 group-hover:outline group-hover:outline-2 group-hover:outline-[#F97316] transition-all duration-300 overflow-hidden">
        {showImg ? (
          <img
            src={brand.logoUrl}
            alt={brand.name}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="eager"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <BrandWordmark brand={brand} />
          </div>
        )}
      </div>
      <span className="text-white/35 group-hover:text-white/65 text-[10px] md:text-[11px] font-semibold tracking-wide text-center leading-tight transition-colors duration-300">
        {brand.name}
      </span>
    </div>
  )
}

// ── Scroll Video ──────────────────────────────────────────────────────

const PHASES = [
  {
    line1: 'CRAFTED TO',
    line2: 'PERFECTION.',
    body:  'In-house craftsmen and 30+ master artisans behind every product we deliver.',
  },
  {
    line1: 'QUALITY IN',
    line2: 'EVERY STITCH.',
    body:  'Multi-stage QC — Pilot, Inline, Midline, Final. Nothing ships without passing inspection.',
  },
  {
    line1: 'YOUR BRAND.',
    line2: 'OUR CRAFT.',
    body:  'From first design brief to delivered shipment, we are your end-to-end sourcing partner.',
  },
]

function ScrollVideoSection() {
  const wrapRef        = useRef<HTMLDivElement>(null)
  const videoRef       = useRef<HTMLVideoElement>(null)
  const textBlockRef   = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const progressRef    = useRef(0)
  const targetRef      = useRef(0)
  const phaseRef       = useRef(0)
  const rafId          = useRef(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top
      const scrollable = el.offsetHeight - window.innerHeight
      targetRef.current = Math.max(0, Math.min(1, -top / scrollable))
    }

    const tick = () => {
      // Lerp — video lags scroll slightly for a weighted, cinematic feel
      progressRef.current += (targetRef.current - progressRef.current) * 0.07

      const video = videoRef.current
      if (video && video.readyState >= 2 && video.duration) {
        video.currentTime = progressRef.current * video.duration
      }

      // Parallax: text drifts up 40px across full scroll — direct DOM, no re-render
      if (textBlockRef.current) {
        textBlockRef.current.style.transform =
          `translateY(calc(-50% + ${progressRef.current * -40}px))`
      }

      // Progress bar — direct DOM
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progressRef.current * 100}%`
      }

      // Phase — React state only updates on boundary (~2 times per scroll)
      const next = progressRef.current < 0.35 ? 0 : progressRef.current < 0.70 ? 1 : 2
      if (next !== phaseRef.current) {
        phaseRef.current = next
        setPhase(next)
      }

      rafId.current = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafId.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  const p = PHASES[phase]

  return (
    <div ref={wrapRef} style={{ height: '300vh' }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Dark base */}
        <div className="absolute inset-0 bg-black" />

        {/* Video — all-I-frame re-encode for smooth seeking */}
        <video
          ref={videoRef}
          src="/craft-bag-cropped.mp4"
          muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.78 }}
        />

        {/* Left gradient — keeps text legible over video */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.60) 42%, rgba(0,0,0,0.12) 100%)' }} />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0A0A0A 0%, transparent 100%)' }} />

        {/* ── Text block (parallax via ref) ── */}
        <div
          ref={textBlockRef}
          className="absolute left-[7%] top-1/2"
          style={{ transform: 'translateY(-50%)', maxWidth: 580 }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-7">
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">
              Our Craft
            </span>
          </div>

          {/* key=phase forces CSS re-mount → phase-in animation plays on each change */}
          <div key={phase} className="phase-in">
            <h2
              className="font-outfit font-black text-white leading-[0.88] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 7rem)' }}
            >
              {p.line1}<br />
              <span className="text-[#F97316]">{p.line2}</span>
            </h2>
            <p className="text-white/48 text-[15px] md:text-[17px] leading-relaxed mt-6 max-w-[380px]">
              {p.body}
            </p>
          </div>
        </div>


        {/* ── Phase indicator — right edge ── */}
        <div className="absolute right-7 md:right-11 top-1/2 -translate-y-1/2 flex flex-col gap-3.5">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="transition-all duration-500 ease-out"
              style={{
                width:      6,
                height:     i === phase ? 28 : 6,
                background: i === phase ? '#F97316' : 'rgba(255,255,255,0.18)',
              }}
            />
          ))}
        </div>

        {/* ── Progress bar — bottom ── */}
        <div className="absolute bottom-9 left-[7%] flex items-center gap-4">
          <div className="w-52 h-px bg-white/12 relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="absolute inset-y-0 left-0 bg-[#F97316]"
              style={{ width: '0%' }}
            />
          </div>
          <span className="text-white/22 text-[10px] font-bold tracking-[0.22em] uppercase">
            Scroll
          </span>
        </div>

      </div>
    </div>
  )
}

// ── Homepage ──────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <BrandGrid />
      <ScrollVideoSection />
    </>
  )
}

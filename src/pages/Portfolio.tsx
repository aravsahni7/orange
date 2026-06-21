import { useState } from 'react'
import { useInView } from '../hooks'
import { PORTFOLIO, FILTERS } from '../data'

export default function PortfolioPage() {
  const [ref, inView] = useInView(0.04)
  const [activeFilter, setActiveFilter] = useState('All')
  const [opacity, setOpacity] = useState(1)

  const filtered = activeFilter === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === activeFilter)

  const switchFilter = (cat: string) => {
    setOpacity(0)
    setTimeout(() => { setActiveFilter(cat); setOpacity(1) }, 180)
  }

  const catCounts = FILTERS.reduce((acc, f) => {
    acc[f] = f === 'All' ? PORTFOLIO.length : PORTFOLIO.filter(p => p.cat === f).length
    return acc
  }, {} as Record<string, number>)

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Page banner */}
      <div className="bg-[#0A0A0A] pt-20 pb-16 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute right-1/4 top-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 20%, rgba(249,115,22,0.045) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">Our Work</span>
          </div>
          <h1 className="font-outfit font-black text-white leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            WHAT WE<br />
            <span className="text-[#F97316]">MAKE.</span>
          </h1>
          <p className="text-white/55 mt-6 text-[15px] max-w-2xl leading-relaxed">
            From womenswear to home textiles, leather goods to sustainable basics — a cross-section of product categories produced across our global factory network.
          </p>
        </div>
      </div>

      {/* Category stat bar */}
      <div className="bg-[#0D0D0D] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-6">
            {FILTERS.map(f => (
              <div key={f} className="flex items-baseline gap-1.5">
                <span className="font-outfit font-black text-white/28 text-2xl">{catCounts[f]}</span>
                <span className="text-white/42 text-[11px] font-semibold uppercase tracking-wider">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio grid */}
      <section ref={ref as React.RefObject<HTMLElement>} className="bg-[#0A0A0A] py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className={`flex flex-wrap gap-2 mb-10 reveal ${inView ? 'in-view' : ''}`}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => switchFilter(f)}
                className={`px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-150 cursor-pointer ${
                  activeFilter === f
                    ? 'bg-[#F97316] text-white'
                    : 'border border-white/12 text-white/55 hover:border-white/25 hover:text-white/60'
                }`}>
                {f}
                <span className="ml-1.5 opacity-50">{catCounts[f]}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            style={{ opacity, transition: 'opacity 0.18s ease' }}>
            {filtered.map((item, i) => (
              <div key={item.id}
                className={`group relative overflow-hidden cursor-pointer reveal reveal-d${Math.min(i + 1, 7)} ${inView ? 'in-view' : ''}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#161616]">
                  <img src={item.img} alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.07]"
                    style={{ opacity: 0.82, filter: 'grayscale(5%)' }}
                    loading="lazy" />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 50%)' }} />
                  <div className="absolute inset-0 bg-[#F97316] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300" />
                  {/* Orange top bar slide-in */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-[#F97316] text-[9px] font-bold tracking-[0.2em] uppercase mb-1">{item.cat}</div>
                    <div className="text-white font-semibold text-[12px] leading-snug">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Count */}
          <div className="mt-8 text-white/28 text-[12px] font-semibold tracking-wide">
            Showing {filtered.length} of {PORTFOLIO.length} pieces
          </div>
        </div>
      </section>

    </div>
  )
}

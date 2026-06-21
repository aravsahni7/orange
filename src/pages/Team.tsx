import { Link } from 'react-router-dom'
import { useInView } from '../hooks'
import Counter from '../Counter'

export default function TeamPage() {
  const [ref1, inView1] = useInView(0.08)
  const [ref2, inView2] = useInView(0.08)
  const [ref3, inView3] = useInView(0.08)

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Page banner */}
      <div className="bg-[#0A0A0A] pt-20 pb-16 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute left-1/2 top-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 30%, rgba(249,115,22,0.04) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">Leadership</span>
          </div>
          <h1 className="font-outfit font-black text-white leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            THE PEOPLE<br />BEHIND THE<br />
            <span className="text-[#F97316]">SOURCING.</span>
          </h1>
          <p className="text-white/55 mt-6 text-[15px] max-w-2xl leading-relaxed">
            Our founder spent his career inside the brands he now serves — bringing genuine client-side empathy to every sourcing decision.
          </p>
        </div>
      </div>

      {/* CEO Profile */}
      <section ref={ref1 as React.RefObject<HTMLElement>} className="bg-[#0D0D0D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            {/* Photo */}
            <div className={`reveal ${inView1 ? 'in-view' : ''}`}>
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/5] bg-[#111]">
                  <img src="/vikram.png"
                    alt="Vikram Bagga"
                    className="w-full h-full object-cover object-top"
                    style={{ opacity: 0.92 }}
                    loading="lazy" />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, #0D0D0D 0%, rgba(13,13,13,0.05) 45%, transparent 100%)' }} />
                  {/* Experience badge */}
                  <div className="absolute bottom-5 left-5 bg-[#F97316] px-4 py-2.5">
                    <span className="text-[#0A0A0A] text-[11px] font-black tracking-[0.2em] uppercase">20+ Years</span>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#F97316]/40" />
              </div>

              {/* Brand tags below photo */}
              <div className="mt-6">
                <div className="text-white/38 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Notable Past Clients</div>
                <div className="flex flex-wrap gap-2">
                  {['Gap', 'Old Navy', 'Adidas', 'Reebok', 'Nordstrom', "Dillard's", 'New Look'].map(b => (
                    <span key={b} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] text-white/55 text-[11px] font-medium">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className={`reveal reveal-d1 ${inView1 ? 'in-view' : ''}`}>
                <div className="text-white/38 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Chief Executive Officer</div>
                <h2 className="font-outfit font-black text-white leading-tight mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  Vikram Bagga
                </h2>
                <div className="w-12 h-[2px] bg-[#F97316] mb-8 mt-4" />
              </div>

              <div className={`space-y-5 text-white/60 text-[15px] leading-relaxed reveal reveal-d2 ${inView1 ? 'in-view' : ''}`}>
                <p>
                  Vikram has been associated with apparel sourcing for over 20 years, building deep expertise across
                  woven fabrics, knitwear, sportswear, denim, and premium leather goods. His career has taken him
                  to some of the world's most demanding fashion and retail brands.
                </p>
                <p>
                  Over the years, Vikram worked with Gap, Old Navy, Adidas, Reebok, Nordstrom, Dillard's, and New Look —
                  gaining the rare perspective of a buyer who understands supply chain from the inside out. That experience
                  now sits at the core of how Orange Sourcing operates.
                </p>
                <p>
                  He brings vast experience across sourcing markets in India, Sri Lanka, Bangladesh, China, Mauritius,
                  and Madagascar. His strengths lie in operations and setting up sustainable processes that lead to smooth
                  workflow across the organisation — from factory selection to final inspection.
                </p>
                <p>
                  Vikram's guiding philosophy: the best sourcing relationships are built on trust, transparency, and
                  the ability to solve problems before the client even knows they exist.
                </p>
              </div>

              {/* Key areas */}
              <div className={`mt-10 pt-10 border-t border-white/[0.08] grid grid-cols-2 gap-5 reveal reveal-d3 ${inView1 ? 'in-view' : ''}`}>
                {[
                  { label: 'Apparel Sourcing',   note: 'Woven, knitwear, denim' },
                  { label: 'Operations',         note: 'SOPs and process design' },
                  { label: 'Leather & Goods',    note: 'Bags, footwear, accessories' },
                  { label: 'Sustainable Prod.',  note: 'Ethical factory programs' },
                  { label: 'Multi-Country Ops',  note: '6 manufacturing markets' },
                  { label: 'Cost Engineering',   note: 'Transparent margin management' },
                ].map(item => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <div className="text-white font-semibold text-[13px]">{item.label}</div>
                    <div className="text-white/42 text-[11px]">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team stats */}
      <section ref={ref2 as React.RefObject<HTMLElement>} className="bg-[#0A0A0A] py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
            <h2 className={`font-outfit font-black text-white leading-tight tracking-tight reveal ${inView2 ? 'in-view' : ''}`}
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              An extended team<br />of specialists.
            </h2>
            <p className={`text-white/55 text-[15px] leading-relaxed reveal reveal-d1 ${inView2 ? 'in-view' : ''}`}>
              Beyond leadership, Orange Sourcing operates with an in-house design studio, country-level operations teams, and a craft centre staffed by master artisans.
            </p>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 reveal reveal-d2 ${inView2 ? 'in-view' : ''}`}>
            {[
              { value: 20,  suffix: '+', label: 'Years of CEO Experience' },
              { value: 30,  suffix: '+', label: 'Master Artisans' },
              { value: 6,   suffix: '',  label: 'Country Operations' },
              { value: 3,   suffix: '',  label: 'In-House Designers' },
            ].map(s => <Counter key={s.label} {...s} inView={inView2} />)}
          </div>
        </div>
      </section>

      {/* Team structure */}
      <section ref={ref3 as React.RefObject<HTMLElement>} className="bg-[#0D0D0D] py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`font-outfit font-black text-white text-2xl md:text-3xl mb-10 reveal ${inView3 ? 'in-view' : ''}`}>
            The disciplines behind the work.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {[
              { dept: 'Design Studio',      lead: 'In-house Gurgaon',  skills: '3 senior designers + 30+ artisans working from our craft centre' },
              { dept: 'Merchandise',        lead: 'Retail DNA',        skills: 'Product selection, range planning, and trend intelligence' },
              { dept: 'Technical & QC',     lead: 'Factory-level',     skills: 'Pattern, fit, SOPs, and 4-stage inspection on every order' },
              { dept: 'Compliance',         lead: 'Global standards',  skills: 'Social accountability, ethical audits, and COC monitoring' },
              { dept: 'Leather Division',   lead: 'Specialist unit',   skills: 'Bags, footwear, accessories, and small leather goods' },
              { dept: 'Country Teams',      lead: '6 markets',         skills: 'On-the-ground communication and production oversight' },
            ].map((d, i) => (
              <div key={d.dept}
                className={`bg-[#0D0D0D] p-8 group hover:bg-[#111] transition-colors duration-300 reveal reveal-d${Math.min(i + 1, 7)} ${inView3 ? 'in-view' : ''}`}>
                <div className="w-6 h-[2px] bg-[#F97316] mb-5 group-hover:w-12 transition-all duration-400" />
                <div className="font-outfit font-black text-white text-[15px] mb-1">{d.dept}</div>
                <div className="text-[#F97316] text-[10px] font-bold tracking-[0.16em] uppercase mb-3">{d.lead}</div>
                <p className="text-white/48 text-[13px] leading-relaxed group-hover:text-white/40 transition-colors duration-300">{d.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0A0A0A] border-t border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-outfit font-black text-white text-2xl md:text-3xl mb-2">Work with our team.</h3>
            <p className="text-white/55 text-[15px]">20+ years of sourcing expertise, entirely at your disposal.</p>
          </div>
          <Link to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#F97316] text-white font-bold text-sm tracking-wide hover:bg-[#EA580C] transition-colors duration-150">
            Start a Conversation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

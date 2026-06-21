import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks'
import { Globe } from '../components/ui/cobe-globe-pulse'

const CLIENT_REGIONS = [
  {
    region: 'United Kingdom',
    location: [51.51, -0.13] as [number, number],
    clients: ['TedBaker', 'White Stuff', 'Crew Clothing', 'Saltrock', 'Whistles', 'Reiss', 'Hope and Ivy', 'Karen Millen', 'TJX', 'Jenny Packham', 'French Connection'],
  },
  {
    region: 'France',
    location: [48.86, 2.35] as [number, number],
    clients: ['Etam', 'Zapa', 'Sandro', 'CDC', 'Chevignon'],
  },
  {
    region: 'Rest of Europe',
    location: [55.68, 12.57] as [number, number],
    clients: ['Day Birger (Denmark)', 'Zalando (Germany)', 'Hoss Intropia (Spain)', 'Niza moda (Spain)'],
  },
  {
    region: 'USA',
    location: [40.71, -74.01] as [number, number],
    clients: ['Alice & Olivia', 'Zac Posen', 'Bebe', 'Parker', 'DVF', 'Elle Tahari Collections', 'Rachel Zoe', 'Ella Moss/Splendid', 'Ecru', 'Ramy Brook', 'Echo', 'Marshalls'],
  },
]

const GLOBE_MARKERS = CLIENT_REGIONS.map(r => ({ location: r.location, size: 0.065 }))

export default function AboutPage() {
  const [ref1, inView1] = useInView(0.08)
  const [ref3, inView3] = useInView(0.08)
  const [ref4, inView4] = useInView(0.08)
  const [openRegion, setOpenRegion] = useState<string>('United Kingdom')

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Page banner */}
      <div className="bg-[#0A0A0A] pt-20 pb-16 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 85% 20%, rgba(249,115,22,0.05) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">Our Story</span>
          </div>
          <h1 className="font-outfit font-black text-white leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            A DIFFERENT<br />KIND OF<br />
            <span className="text-[#F97316]">PARTNER.</span>
          </h1>
          <p className="text-white/55 mt-6 text-[15px] max-w-2xl leading-relaxed">
            Orange Sourcing is a one-stop destination for all your fashion needs, built on over 200 years of combined management experience.
          </p>
        </div>
      </div>

      {/* Story */}
      <section ref={ref1 as React.RefObject<HTMLElement>} className="bg-[#0A0A0A] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className={`reveal ${inView1 ? 'in-view' : ''}`}>
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img src={import.meta.env.BASE_URL + 'about-office.png'}
                    alt="Orange Sourcing office, Gurgaon"
                    className="w-full h-full object-cover object-center"
                    style={{ opacity: 0.85 }}
                    loading="lazy" />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, transparent 40%, #0A0A0A 100%)' }} />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[#F97316] px-6 py-5 shadow-2xl">
                  <div className="font-outfit font-black text-[#0A0A0A] text-3xl leading-none">6</div>
                  <div className="text-[#0A0A0A]/65 text-[10px] font-bold uppercase tracking-widest mt-1 leading-tight">Manufacturing<br />Countries</div>
                </div>
                {/* Corner accents */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#F97316]/40" />
              </div>
            </div>

            <div>
              <h2 className={`font-outfit font-black text-white leading-tight tracking-tight mb-2 reveal reveal-d1 ${inView1 ? 'in-view' : ''}`}
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                Progressive outlook.
              </h2>
              <h2 className={`font-outfit font-black text-[#F97316] leading-tight tracking-tight mb-8 reveal reveal-d2 ${inView1 ? 'in-view' : ''}`}
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                Seasoned professionals.
              </h2>

              <div className={`space-y-5 text-white/60 leading-relaxed text-[15px] reveal reveal-d3 ${inView1 ? 'in-view' : ''}`}>
                <p>
                  Orange Sourcing is a one-stop destination for all of your fashion needs. With a progressive
                  outlook and a well-balanced team of seasoned professionals across design, merchandise,
                  technical, quality, and leather — we bring together 200+ years of combined management experience.
                </p>
                <p>
                  We customise every aspect of our service. We are a partner in design and product development
                  while reducing cost and optimising speed to market. From our in-house craft centre in Gurgaon
                  to factories across six countries, every detail is handled by people who have done it before.
                </p>
                <p>
                  Our founder Vikram Bagga — with 20+ years inside brands like Gap, Adidas, Nordstrom and Reebok —
                  brings client-side empathy to every sourcing decision. We don't just ship garments; we protect brands.
                </p>
              </div>

              <div className={`mt-10 pt-10 border-t border-white/[0.08] grid grid-cols-2 gap-6 reveal reveal-d4 ${inView1 ? 'in-view' : ''}`}>
                {[
                  { label: 'Gurgaon, India', sub: 'Corporate headquarters' },
                  { label: 'Since 2010',     sub: 'Over a decade of sourcing' },
                  { label: '30+ clients',    sub: 'Global fashion brands' },
                  { label: 'Full-service',   sub: 'Design to delivery' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-white/48 text-xs mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clientele */}
      <section ref={ref3 as React.RefObject<HTMLElement>} className="bg-[#0A0A0A] py-28 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">

            {/* Left: accordion */}
            <div>
              <div className={`inline-flex items-center gap-2 mb-5 reveal ${inView3 ? 'in-view' : ''}`}>
                <div className="w-4 h-[1px] bg-[#F97316]" />
                <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">Our Clientele</span>
              </div>
              <h2 className={`font-outfit font-black text-white leading-tight tracking-tight mb-4 reveal reveal-d1 ${inView3 ? 'in-view' : ''}`}
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Brands that<br />
                <span className="text-[#F97316]">trust us.</span>
              </h2>
              <p className={`text-white/58 text-[15px] leading-relaxed mb-10 reveal reveal-d2 ${inView3 ? 'in-view' : ''}`}>
                We have developed and nurtured long-lasting relationships with many global fashion brands across the UK, Europe, and the USA.
              </p>

              <div className={`reveal reveal-d3 ${inView3 ? 'in-view' : ''}`}>
                {CLIENT_REGIONS.map((reg) => {
                  const isOpen = openRegion === reg.region
                  return (
                    <div key={reg.region} className="border-b border-white/[0.06]">
                      <button
                        onClick={() => setOpenRegion(isOpen ? '' : reg.region)}
                        className="w-full flex items-center justify-between py-4 group/acc text-left">
                        <div className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 flex-shrink-0 transition-colors duration-200 ${isOpen ? 'bg-[#F97316]' : 'bg-white/18'}`} />
                          <span className={`font-semibold text-[15px] transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/45 group-hover/acc:text-white/75'}`}>
                            {reg.region}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-white/38 text-[11px] font-medium tracking-wide">{reg.clients.length} brands</span>
                          <svg
                            className={`w-3.5 h-3.5 text-white/42 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                            <path d="M1 1l5 5 5-5"/>
                          </svg>
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[280px] pb-5' : 'max-h-0'}`}>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 pl-[18px]">
                          {reg.clients.map(c => (
                            <span key={c} className="text-white/45 text-[13px] leading-snug">{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: Globe */}
            <div className={`reveal reveal-d2 ${inView3 ? 'in-view' : ''} lg:sticky lg:top-24`}>
              <div className="relative">
                <div className="absolute inset-[-10%] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)' }} />
                <Globe
                  markers={GLOBE_MARKERS}
                  className="w-full max-w-[500px] mx-auto"
                  speed={0.003}
                  phi={0.3}
                />
                <p className="text-center text-white/38 text-[11px] font-semibold tracking-widest uppercase mt-4">
                  Drag to rotate
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref4 as React.RefObject<HTMLElement>} className="bg-[#0D0D0D] py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
            <h2 className={`font-outfit font-black text-white leading-tight tracking-tight reveal ${inView4 ? 'in-view' : ''}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              What drives us.
            </h2>
            <p className={`text-white/55 text-[15px] leading-relaxed reveal reveal-d1 ${inView4 ? 'in-view' : ''}`}>
              Three core principles that run through every decision we make — from factory selection to final inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.05]">
            {[
              {
                title: 'Transparency',
                icon: '01',
                body: 'We operate with full cost transparency — no hidden margins, no opaque processes. Our clients see exactly what they pay for and why.',
              },
              {
                title: 'Partnership',
                icon: '02',
                body: 'We are not a transactional vendor. We invest in understanding your brand, your customer, and your seasonal cadence to become a genuine extension of your team.',
              },
              {
                title: 'Excellence',
                icon: '03',
                body: 'We hold every garment to the same standards your QC team would. Our multi-stage inspection process means issues are caught on the floor, not at the port.',
              },
            ].map((v, i) => (
              <div key={v.title}
                className={`bg-[#0D0D0D] p-10 group hover:bg-[#111] transition-colors duration-300 reveal reveal-d${i + 1} ${inView4 ? 'in-view' : ''}`}>
                <div className="text-[#F97316]/30 font-mono text-xs font-bold mb-6">{v.icon}</div>
                <div className="w-8 h-[2px] bg-[#F97316] mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-outfit font-black text-white text-xl mb-4">{v.title}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0A0A0A] border-t border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-outfit font-black text-white text-2xl md:text-3xl mb-2">Ready to partner with us?</h3>
            <p className="text-white/55 text-[15px]">Let's start with a conversation about your sourcing needs.</p>
          </div>
          <Link to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-[#F97316] text-white font-bold text-sm tracking-wide hover:bg-[#EA580C] transition-colors duration-150">
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useInView } from '../hooks'
import { SERVICES } from '../data'

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  '01': (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.72a2 2 0 0 0 1.98-1.61L23 6H6"/>
    </svg>
  ),
  '02': (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  '03': (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  '04': (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  '05': (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  '06': (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <circle cx="12" cy="20" r="1" fill="currentColor"/>
    </svg>
  ),
  '07': (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
}

export default function ServicesPage() {
  const [ref1, inView1] = useInView(0.05)
  const [ref2, inView2] = useInView(0.05)
  const [ref3, inView3] = useInView(0.05)

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Page banner */}
      <div className="bg-[#0A0A0A] pt-20 pb-16 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 10% 90%, rgba(249,115,22,0.04) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">What We Offer</span>
          </div>
          <h1 className="font-outfit font-black text-white leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            SEVEN<br />CAPABILITIES.<br />
            <span className="text-[#F97316]">ONE PARTNER.</span>
          </h1>
          <p className="text-white/55 mt-6 text-[15px] max-w-2xl leading-relaxed">
            Each capability is staffed by specialists with decades of domain experience. Together, they form a complete, end-to-end sourcing solution — from first sketch to final shipment.
          </p>
        </div>
      </div>

      {/* Service cards grid */}
      <section ref={ref1 as React.RefObject<HTMLElement>} className="bg-[#0D0D0D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {SERVICES.map((svc, i) => (
              <div key={svc.id}
                className={`bg-[#0D0D0D] p-8 lg:p-10 group relative overflow-hidden hover:bg-[#111] transition-all duration-300 reveal reveal-d${Math.min(i + 1, 7)} ${inView1 ? 'in-view' : ''}`}>
                {/* Orange expanding top bar */}
                <div className="absolute top-0 left-0 h-[2px] bg-[#F97316] w-8 group-hover:w-full transition-all duration-500 ease-out" />

                {/* Icon */}
                {SERVICE_ICONS[svc.id] && (
                  <div className="text-[#F97316] mb-5 mt-1 opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                    {SERVICE_ICONS[svc.id]}
                  </div>
                )}

                {/* Number */}
                <div className="text-[#F97316] font-mono text-[11px] font-bold tracking-[0.18em] mb-6">{svc.id}</div>

                {/* Title */}
                <h3 className="font-outfit font-black text-white text-xl leading-tight mb-4 group-hover:text-white transition-colors duration-300">
                  {svc.title}
                </h3>

                {/* Body */}
                <p className="text-white/55 text-[14px] leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {svc.body}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-service breakdown — visual highlight row */}
      <section ref={ref2 as React.RefObject<HTMLElement>} className="bg-[#0A0A0A] py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <h2 className={`font-outfit font-black text-white leading-tight tracking-tight reveal ${inView2 ? 'in-view' : ''}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              End-to-end.<br />Start to finish.
            </h2>
            <p className={`text-white/55 text-[15px] leading-relaxed reveal reveal-d1 ${inView2 ? 'in-view' : ''}`}>
              We handle every stage of the supply chain — so you can focus on brand, sales, and growth rather than managing a fragmented vendor list.
            </p>
          </div>

          {/* Timeline-style process */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-white/[0.06] md:hidden" />

            <div className="space-y-0 md:space-y-0 md:grid md:grid-cols-4 md:gap-px md:bg-white/[0.05]">
              {[
                { step: '01', label: 'Brief',     body: 'Share your requirements, targets, and timelines. We listen.' },
                { step: '02', label: 'Develop',   body: 'Our design and tech teams create samples, fits, and cost sheets.' },
                { step: '03', label: 'Produce',   body: 'We oversee every stage of production across our factory network.' },
                { step: '04', label: 'Deliver',   body: 'Goods are inspected, packed, and shipped — on time, every time.' },
              ].map((p, i) => (
                <div key={p.step}
                  className={`md:bg-[#0A0A0A] p-8 md:p-10 flex gap-6 md:flex-col md:gap-0 reveal reveal-d${i + 1} ${inView2 ? 'in-view' : ''}`}>
                  <div className="flex-shrink-0 w-10 h-10 border border-[#F97316]/30 flex items-center justify-center md:mb-6">
                    <span className="text-[#F97316] font-mono text-[11px] font-bold">{p.step}</span>
                  </div>
                  <div>
                    <div className="font-outfit font-black text-white text-lg mb-2 md:mb-3">{p.label}</div>
                    <p className="text-white/32 text-[13px] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section ref={ref3 as React.RefObject<HTMLElement>} className="bg-[#0D0D0D] py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className={`font-outfit font-black text-white leading-tight tracking-tight mb-6 reveal ${inView3 ? 'in-view' : ''}`}
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                We've been on<br />your side of the table.
              </h2>
              <p className={`text-white/58 text-[15px] leading-relaxed mb-8 reveal reveal-d1 ${inView3 ? 'in-view' : ''}`}>
                Our leadership spent years as country managers and buying managers for the same brands that now rely on us for sourcing. We don't just understand the supplier side — we understand what it feels like to be the client.
              </p>
              <p className={`text-white/58 text-[15px] leading-relaxed reveal reveal-d2 ${inView3 ? 'in-view' : ''}`}>
                That empathy changes everything: how we communicate, how we handle problems, how we protect your margin, and how we represent your brand in the factory.
              </p>
              <div className={`mt-8 reveal reveal-d3 ${inView3 ? 'in-view' : ''}`}>
                <Link to="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F97316] text-white font-bold text-sm tracking-wide hover:bg-[#EA580C] transition-colors duration-150">
                  Start a Conversation
                </Link>
              </div>
            </div>

            <div className={`relative reveal reveal-d2 ${inView3 ? 'in-view' : ''}`}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src="https://picsum.photos/seed/os-factory/600/450"
                  alt="Factory production"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.5, filter: 'grayscale(20%)' }}
                  loading="lazy" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, transparent 50%, #0D0D0D 100%)' }} />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-4 -left-4 bg-[#F97316] p-6">
                <div className="font-outfit font-black text-[#0A0A0A] text-3xl leading-none">200<span className="text-xl">+</span></div>
                <div className="text-[#0A0A0A]/65 text-[10px] font-bold uppercase tracking-widest mt-1 leading-tight">
                  Years<br />Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0A0A0A] border-t border-white/[0.06] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-outfit font-black text-white text-2xl md:text-3xl mb-2">Ready to get started?</h3>
            <p className="text-white/55 text-[15px]">Tell us about your product — we'll tell you how we can help.</p>
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

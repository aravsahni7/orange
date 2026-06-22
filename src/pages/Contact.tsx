import { useState } from 'react'
import { useInView } from '../hooks'

const REASONS = [
  'New collection development',
  'Existing supplier challenges',
  'Quality & technical issues',
  'Speed-to-market optimisation',
  'Sustainable sourcing',
  'Cost reduction',
]

export default function ContactPage() {
  const [ref1, inView1] = useInView(0.05)
  const [sent, setSent] = useState(false)
  const [selectedReason, setSelectedReason] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const inputClass = `w-full bg-[#161616] border border-white/[0.09] text-white text-[14px] px-4 py-3.5 outline-none focus:border-[#F97316] transition-colors duration-200 placeholder:text-white/35`

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Page banner */}
      <div className="bg-[#0A0A0A] pt-20 pb-16 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at 80% 80%, rgba(249,115,22,0.05) 0%, transparent 65%)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-4 h-[1px] bg-[#F97316]" />
            <span className="text-[#F97316] text-[11px] font-bold tracking-[0.22em] uppercase">Reach Out</span>
          </div>
          <h1 className="font-outfit font-black text-white leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            START A<br />
            <span className="text-[#F97316]">CONVERSATION.</span>
          </h1>
          <p className="text-white/55 mt-6 text-[15px] max-w-2xl leading-relaxed">
            Whether you're developing a new collection, improving sourcing margins, or looking for a long-term partner — we would like to hear from you.
          </p>
        </div>
      </div>

      {/* What brings you here */}
      <section className="bg-[#0D0D0D] border-b border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-white/38 text-[10px] font-bold tracking-[0.22em] uppercase mb-4">What brings you here?</div>
          <div className="flex flex-wrap gap-2">
            {REASONS.map(r => (
              <button key={r} onClick={() => setSelectedReason(selectedReason === r ? null : r)}
                className={`px-4 py-2 text-[12px] font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                  selectedReason === r
                    ? 'bg-[#F97316] text-white'
                    : 'border border-white/10 text-white/55 hover:border-white/22 hover:text-white/55'
                }`}>
                {r}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section ref={ref1 as React.RefObject<HTMLElement>} className="bg-[#0D0D0D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
            {/* Left: details */}
            <div>
              <h2 className={`font-outfit font-black text-white text-2xl md:text-3xl mb-8 reveal ${inView1 ? 'in-view' : ''}`}>
                Get in touch.
              </h2>

              <div className={`space-y-8 reveal reveal-d1 ${inView1 ? 'in-view' : ''}`}>
                {[
                  {
                    label: 'Corporate Office',
                    value: 'Plot No. 252 (GF), Udyog Vihar Phase - I,\nGurgaon, Haryana, 122016, India',
                    href: undefined,
                    icon: (
                      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path d="M6 0C3 0 0 2.6 0 6C0 10 6 14 6 14C6 14 12 10 12 6C12 2.6 9 0 6 0ZM6 8.5C4.6 8.5 3.5 7.4 3.5 6C3.5 4.6 4.6 3.5 6 3.5C7.4 3.5 8.5 4.6 8.5 6C8.5 7.4 7.4 8.5 6 8.5Z" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Phone',
                    value: '+91-124-427-7219',
                    href: 'tel:+911244277219',
                    icon: (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1.5 1.5C1.5 1.5 3 1 3.5 2.8L4 4.5C4 4.5 4.3 5.5 3.5 6.2C3.5 6.2 5 8.5 7 9C7 9 7.9 8 8.7 8.4L10.5 9.2C10.5 9.2 11.5 9.8 10.5 10.8C9.5 11.8 7.5 11.5 6.2 10.8C4.9 10.1 1 7 0.5 5C0 3 1.5 1.5 1.5 1.5Z" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Email',
                    value: 'info@orangesourcing.com',
                    href: 'mailto:info@orangesourcing.com',
                    icon: (
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <rect x="0.5" y="0.5" width="13" height="9" stroke="currentColor" strokeWidth="0.8" />
                        <path d="M0.5 0.5L7 5.5L13.5 0.5" stroke="currentColor" strokeWidth="0.8" />
                      </svg>
                    ),
                  },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 border border-white/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5 text-white/50">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/38 text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-white/55 text-[14px] hover:text-[#F97316] transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white/55 text-[14px] leading-relaxed whitespace-pre-line">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response note */}
              <div className={`mt-12 p-6 bg-[#111] border border-white/[0.06] reveal reveal-d2 ${inView1 ? 'in-view' : ''}`}>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#F97316] mt-1.5 flex-shrink-0 animate-pulse" />
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Typical response time</div>
                    <div className="text-white/55 text-[13px] leading-relaxed">
                      We respond within 2 business days. For urgent enquiries, please call directly.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className={`reveal reveal-d2 ${inView1 ? 'in-view' : ''}`}>
              {sent ? (
                <div className="flex flex-col items-start justify-center h-full py-12 gap-4">
                  <div className="w-14 h-14 bg-[#F97316] flex items-center justify-center mb-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10L8 15L17 5" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                  </div>
                  <h3 className="font-outfit font-black text-white text-3xl">Message sent.</h3>
                  <p className="text-white/58 text-[15px]">We will be in touch within 2 business days.</p>
                  <button onClick={() => { setSent(false); setSelectedReason(null) }}
                    className="mt-4 text-[#F97316] text-sm font-semibold hover:text-[#EA580C] transition-colors cursor-pointer">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-5">
                  {selectedReason && (
                    <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-[12px] font-semibold">
                      Re: {selectedReason}
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/48 text-[10px] font-bold tracking-[0.18em] uppercase mb-2">Name *</label>
                      <input type="text" required value={form.name} onChange={set('name')}
                        className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-white/48 text-[10px] font-bold tracking-[0.18em] uppercase mb-2">Company</label>
                      <input type="text" value={form.company} onChange={set('company')}
                        className={inputClass} placeholder="Your company" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/48 text-[10px] font-bold tracking-[0.18em] uppercase mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={set('email')}
                      className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-white/48 text-[10px] font-bold tracking-[0.18em] uppercase mb-2">Message *</label>
                    <textarea required rows={6} value={form.message} onChange={set('message')}
                      className={`${inputClass} resize-none`}
                      placeholder={selectedReason ? `Tell us more about your ${selectedReason.toLowerCase()} needs...` : 'Tell us about your sourcing needs...'} />
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-[#F97316] text-white font-bold text-sm tracking-wide hover:bg-[#EA580C] transition-colors duration-150 active:scale-[0.99] cursor-pointer">
                    Send Message
                  </button>
                  <p className="text-white/35 text-[11px] text-center">
                    By submitting, you agree to be contacted by the Orange Sourcing team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width map */}
      <div className="w-full border-t border-white/[0.06]">
        <iframe
          title="Orange Sourcing Office Location"
          src="https://maps.google.com/maps?q=Plot+No+252+Udyog+Vihar+Phase+I+Gurugram+Haryana+122016+India&t=&z=18&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="480"
          style={{ display: 'block', border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

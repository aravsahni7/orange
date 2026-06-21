import { Link } from 'react-router-dom'
import { SERVICES } from './data'

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/[0.06]">
      {/* Top decorative strip */}
      <div className="border-b border-white/[0.06] overflow-hidden select-none py-6">
        <div className="font-outfit font-black text-white/[0.03] whitespace-nowrap leading-none"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', letterSpacing: '-0.04em' }}>
          THE&nbsp;NEW&nbsp;WAY&nbsp;TO&nbsp;FASHION.&nbsp;&nbsp;&nbsp;THE&nbsp;NEW&nbsp;WAY&nbsp;TO&nbsp;FASHION.
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr_1.2fr] gap-12 lg:gap-8">

          {/* Brand column */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src="https://orangesourcing.com/wp-content/uploads/2020/04/Orange-Sourcing-White-Logo-Web.png"
                alt="Orange Sourcing"
                className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="text-white/50 text-[13px] leading-relaxed max-w-[260px] mb-8">
              One-stop fashion sourcing destination. Design, quality control, compliance, and speed to market across six manufacturing countries.
            </p>
            <div className="space-y-2">
              <a href="tel:+911244277219" className="flex items-center gap-3 text-white/48 hover:text-white text-[12px] transition-colors duration-200 group">
                <div className="w-7 h-7 border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-[#F97316]/40 transition-colors duration-200">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1.5C1 1.5 2.5 1 3 2.5L3.5 4C3.5 4 3.8 4.8 3 5.5C3 5.5 4.5 7.5 6 8C6 8 6.8 7.2 7.5 7.5L9 8C9 8 10 8.5 9 9.5C8 10.5 6 10 5 9.5C4 9 1 6.5 0.5 4.5C0 2.5 1 1.5 1 1.5Z" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </div>
                +91-124-427-7219
              </a>
              <a href="mailto:info@orangesourcing.com" className="flex items-center gap-3 text-white/48 hover:text-white text-[12px] transition-colors duration-200 group">
                <div className="w-7 h-7 border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:border-[#F97316]/40 transition-colors duration-200">
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <rect x="0.5" y="0.5" width="10" height="7" stroke="currentColor" strokeWidth="0.8" />
                    <path d="M0.5 0.5L5.5 4.5L10.5 0.5" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </div>
                info@orangesourcing.com
              </a>
              <div className="flex items-start gap-3 text-white/48 text-[12px] leading-relaxed">
                <div className="w-7 h-7 border border-white/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                    <path d="M4 0C2 0 0 1.8 0 4C0 7 4 10 4 10C4 10 8 7 8 4C8 1.8 6 0 4 0ZM4 5.5C3.2 5.5 2.5 4.8 2.5 4C2.5 3.2 3.2 2.5 4 2.5C4.8 2.5 5.5 3.2 5.5 4C5.5 4.8 4.8 5.5 4 5.5Z" fill="currentColor" />
                  </svg>
                </div>
                <span>Plot 252, Udyog Vihar Phase-I<br />Gurgaon, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Navigate column */}
          <div>
            <div className="text-white/38 text-[10px] font-bold tracking-[0.22em] uppercase mb-5">Navigate</div>
            <div className="w-6 h-[1px] bg-[#F97316] mb-6" />
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home',      to: '/' },
                { label: 'About',     to: '/about' },
                { label: 'Services',  to: '/services' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Team',      to: '/team' },
                { label: 'Contact',   to: '/contact' },
              ].map(l => (
                <Link key={l.label} to={l.to}
                  className="text-white/58 hover:text-white text-[13px] font-medium transition-colors duration-200 hover:translate-x-1 inline-block" style={{ transition: 'color 0.2s, transform 0.2s' }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services column */}
          <div>
            <div className="text-white/38 text-[10px] font-bold tracking-[0.22em] uppercase mb-5">Services</div>
            <div className="w-6 h-[1px] bg-[#F97316] mb-6" />
            <div className="flex flex-col gap-3">
              {SERVICES.map(s => (
                <Link key={s.id} to="/services"
                  className="text-white/48 hover:text-white/60 text-[12px] leading-snug transition-colors duration-200">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Countries column */}
          <div>
            <div className="text-white/38 text-[10px] font-bold tracking-[0.22em] uppercase mb-5">Manufacturing</div>
            <div className="w-6 h-[1px] bg-[#F97316] mb-6" />
            <div className="flex flex-col gap-3 mb-8">
              {['India', 'Sri Lanka', 'Bangladesh', 'China', 'Mauritius', 'Madagascar'].map(c => (
                <div key={c} className="flex items-center gap-2.5 text-white/48 text-[12px]">
                  <div className="w-1 h-1 bg-[#F97316]/50 flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#F97316] text-white text-[12px] font-bold tracking-wide hover:bg-[#EA580C] transition-colors duration-150">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-white/28 text-[11px] font-medium">
            © 2024 Orange Sourcing Private Limited. All rights reserved.
          </div>
          <a
            href="https://futuresource.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span className="text-white/35 text-[11px]">Powered by</span>
            <div className="bg-white px-4 py-2 group-hover:opacity-90 transition-opacity duration-200">
              <img
                src="https://www.futuresource.ca/assets/logo-B2ylbOep.webp"
                alt="FutureSource"
                className="h-5 w-auto"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

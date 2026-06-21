import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useScrolled } from './hooks'

const NAV_LINKS = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Team',      to: '/team' },
  { label: 'Contact',   to: '/contact' },
]

export default function Nav() {
  const scrolled = useScrolled(48)
  const [open, setOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0A0A0A]/92 backdrop-blur-xl border-b border-white/[0.06]' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <img
            src={import.meta.env.BASE_URL + 'logo-os-full.png'}
            alt="Orange Sourcing"
            className="h-8 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <NavLink key={l.label} to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-[#F97316]' : 'text-white/45 hover:text-white'}`
              }>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] text-white text-[13px] font-bold tracking-wide hover:bg-[#EA580C] transition-colors duration-150 active:scale-[0.97]">
          Get in Touch
        </Link>

        {/* Mobile burger */}
        <button className="md:hidden p-2 cursor-pointer" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className={`w-5 h-[1.5px] bg-white mb-1.5 transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <div className={`w-5 h-[1.5px] bg-white mb-1.5 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-[1.5px] bg-white transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[400px] border-b border-white/[0.06]' : 'max-h-0'}`}>
        <div className="bg-[#0A0A0A] px-6 pb-8 flex flex-col gap-5">
          {NAV_LINKS.map(l => (
            <NavLink key={l.label} to={l.to} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg font-semibold border-b border-white/5 pb-5 last:border-0 transition-colors ${isActive ? 'text-[#F97316]' : 'text-white'}`
              }>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            className="mt-2 py-3.5 bg-[#F97316] text-white text-center font-bold tracking-wide">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}

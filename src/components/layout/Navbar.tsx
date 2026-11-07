import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Shield, AlertTriangle, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'INÍCIO' },
  { to: '/golpes', label: 'GOLPES' },
  { to: '/fui-vitima', label: 'FUI VÍTIMA' },
  { to: '/proteja-se', label: 'PROTEJA-SE' },
  { to: '/feedbacks', label: 'FEEDBACKS' },
  { to: '/sobre', label: 'SOBRE O PROJETO' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Fechar menu ao pressionar tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Fechar menu ao redimensionar tela para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-xl">
      <nav ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-1 -ml-1"
            aria-label="Manual de Sobrevivência Digital — página inicial"
          >
            <Shield className="w-8 h-8 text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-all" />
            <div className="leading-none">
              <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Manual de</p>
              <p className="text-sm font-bold tracking-tight">
                <span className="text-white">SOBREVIVÊNCIA </span>
                <span className="text-cyan-400">DIGITAL</span>
              </p>
              <p className="text-[10px] text-gray-500">Entenda. Proteja. Reaja.</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-[11px] xl:text-xs font-bold tracking-wider transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-1.5 py-1 ${
                    isActive
                      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5'
                      : 'text-gray-300 hover:text-cyan-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/fui-vitima"
              className="hidden sm:flex items-center gap-2 bg-brand-red hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold px-3.5 py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black whitespace-nowrap shadow-sm"
            >
              <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>FUI VÍTIMA DE UM GOLPE</span>
            </Link>

            <button
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div
            id="mobile-menu"
            aria-label="Menu de navegação móvel"
            className="lg:hidden pb-5 pt-3 border-t border-white/10 space-y-1 bg-black/95 animate-fadeIn"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-3 rounded-lg text-sm font-bold tracking-wide transition-colors ${
                    isActive ? 'text-cyan-400 bg-white/10' : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/fui-vitima"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 active:bg-red-800 text-white text-sm font-bold px-4 py-3.5 rounded-xl w-full shadow-md transition-colors"
              >
                <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>FUI VÍTIMA DE UM GOLPE</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

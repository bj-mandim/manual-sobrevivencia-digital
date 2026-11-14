import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Shield, AlertTriangle, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'INÍCIO' },
  { to: '/golpes', label: 'GOLPES' },
  { to: '/reconhecer-mensagem', label: 'MENSAGENS FALSAS' },
  { to: '/links-legitimos', label: 'LINKS LEGÍTIMOS' },
  { to: '/fui-vitima', label: 'FUI VÍTIMA' },
  { to: '/proteja-se', label: 'PROTEJA-SE' },
  { to: '/feedbacks', label: 'FEEDBACKS' },
  { to: '/sobre', label: 'SOBRE' },
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
      if (window.innerWidth >= 1280 && isOpen) {
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
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-1 -ml-1"
            aria-label="Manual de Sobrevivência Digital — página inicial"
          >
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-all" />
            <div className="leading-none">
              <p className="text-[9px] sm:text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Manual de</p>
              <p className="text-xs sm:text-sm font-bold tracking-tight">
                <span className="text-white">SOBREVIVÊNCIA </span>
                <span className="text-cyan-400">DIGITAL</span>
              </p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 hidden sm:block">Entenda. Proteja. Reaja.</p>
            </div>
          </Link>

          {/* Desktop nav links (exibidos a partir de 1280px para conforto total) */}
          <div className="hidden xl:flex items-center gap-3.5 2xl:gap-5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-[11px] 2xl:text-xs font-bold tracking-wider transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-1.5 py-1 ${
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
              className="hidden sm:inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black whitespace-nowrap shadow-sm min-h-[40px]"
            >
              <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">FUI VÍTIMA DE UM GOLPE</span>
              <span className="md:hidden">FUI VÍTIMA</span>
            </Link>

            <button
              className="xl:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
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
            className="xl:hidden pb-5 pt-3 border-t border-white/10 space-y-1 bg-black/95 max-h-[85vh] overflow-y-auto"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-sm font-bold tracking-wide transition-colors min-h-[48px] ${
                    isActive ? 'text-cyan-400 bg-white/10' : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5'
                  }`
                }
              >
                <span>{label}</span>
                {(label === 'MENSAGENS FALSAS' || label === 'LINKS LEGÍTIMOS') && (
                  <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                    Novo
                  </span>
                )}
              </NavLink>
            ))}
            <div className="pt-3 px-1">
              <Link
                to="/fui-vitima"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 active:bg-red-800 text-white text-sm font-bold px-4 py-3.5 rounded-xl w-full shadow-md transition-colors min-h-[48px]"
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

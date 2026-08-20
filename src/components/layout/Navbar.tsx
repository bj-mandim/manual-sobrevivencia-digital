import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Shield, AlertTriangle, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'INÍCIO' },
  { to: '/golpes', label: 'GOLPES' },
  { to: '/fui-vitima', label: 'FUI VÍTIMA' },
  { to: '/proteja-se', label: 'PROTEJA-SE' },
  { to: '/sobre', label: 'SOBRE O PROJETO' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Manual de Sobrevivência Digital — página inicial"
          >
            <Shield className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform" />
            <div className="leading-none">
              <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Manual de</p>
              <p className="text-sm font-bold text-brand-green">SOBREVIVÊNCIA DIGITAL</p>
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
                  `text-[11px] xl:text-xs font-bold tracking-wider transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-brand-green border-b-2 border-brand-green pb-0.5'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/fui-vitima"
              className="hidden sm:flex items-center gap-2 bg-brand-red hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-navy whitespace-nowrap"
            >
              <AlertTriangle className="w-4 h-4 shrink-0" />
              FUI VÍTIMA DE UM GOLPE
            </Link>

            <button
              className="lg:hidden text-gray-300 hover:text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-white/30"
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-label="Abrir menu de navegação"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-white/10 space-y-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 px-2 rounded text-sm font-bold tracking-wide ${
                    isActive ? 'text-brand-green bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/fui-vitima"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center gap-2 bg-brand-red text-white text-sm font-bold px-4 py-3 rounded-lg"
            >
              <AlertTriangle className="w-5 h-5" />
              FUI VÍTIMA DE UM GOLPE
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

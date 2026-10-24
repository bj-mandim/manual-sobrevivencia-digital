import { Link } from 'react-router-dom'
import { Shield, ArrowRight } from 'lucide-react'

export const InfoBanner = () => {
  return (
    <div className="bg-white border-t border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
          <p className="text-xs sm:text-sm text-gray-500">
            Este projeto é informativo e educativo. Em caso de emergência, entre em contato com as autoridades competentes.
          </p>
        </div>
        <Link
          to="/sobre"
          className="flex items-center gap-1.5 text-sm font-semibold text-black hover:text-cyan-500 transition-colors whitespace-nowrap"
        >
          Saiba mais sobre o projeto <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

import {
  Phone, Link2, CircleDollarSign, MessageCircle, Share2,
  UserX, Briefcase, ScanFace, TrendingUp, ShoppingBag,
  Building2, QrCode, Newspaper, ShieldAlert, LucideIcon,
} from 'lucide-react'
import { Situacao } from '../../types'

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Link2,
  CircleDollarSign,
  MessageCircle,
  Share2,
  UserX,
  Briefcase,
  ScanFace,
  TrendingUp,
  ShoppingBag,
  Building2,
  QrCode,
  Newspaper,
  ShieldAlert,
}

interface SituationCardProps {
  situacao: Situacao
  selected?: boolean
  onClick: (id: string) => void
}

export const SituationCard = ({ situacao, selected, onClick }: SituationCardProps) => {
  const Icon = iconMap[situacao.iconName] ?? Phone

  return (
    <button
      type="button"
      onClick={() => onClick(situacao.id)}
      className={`group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border-2 text-left transition-all duration-200 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${
        selected
          ? 'border-cyan-500 bg-cyan-50/60 shadow-md ring-1 ring-cyan-500/50'
          : 'border-gray-200 bg-white hover:border-cyan-400 hover:shadow-sm'
      }`}
      aria-pressed={selected}
      aria-label={`Selecionar caso: ${situacao.label}`}
    >
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-transform group-hover:scale-105 ${situacao.corFundo}`}
        aria-hidden="true"
      >
        <Icon className={`w-5 h-5 ${situacao.corIcone}`} />
      </span>
      <div className="flex-1 min-w-0">
        <span className="text-sm font-bold text-gray-900 leading-snug block">
          {situacao.label}
        </span>
      </div>
    </button>
  )
}

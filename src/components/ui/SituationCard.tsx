import {
  Phone, Link2, CircleDollarSign, MessageCircle, Share2,
  UserX, Briefcase, ScanFace, LucideIcon,
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
      onClick={() => onClick(situacao.id)}
      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 w-full focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 ${
        selected
          ? 'border-navy bg-navy/5 shadow-md'
          : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'
      }`}
      aria-pressed={selected}
    >
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${situacao.corFundo}`}
      >
        <Icon className={`w-5 h-5 ${situacao.corIcone}`} />
      </span>
      <span className="text-sm font-semibold text-gray-800 leading-snug">{situacao.label}</span>
    </button>
  )
}

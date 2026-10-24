import { NivelRisco } from '../../types'

interface BadgeProps {
  nivel: NivelRisco
  size?: 'sm' | 'md'
}

const styles: Record<NivelRisco, string> = {
  Crítico: 'bg-red-100 text-red-700 border-red-200',
  Alto: 'bg-orange-100 text-orange-700 border-orange-200',
  Médio: 'bg-yellow-100 text-yellow-700 border-yellow-200',
}

const dots: Record<NivelRisco, string> = {
  Crítico: 'bg-red-500',
  Alto: 'bg-orange-500',
  Médio: 'bg-yellow-500',
}

export const Badge = ({ nivel, size = 'md' }: BadgeProps) => {
  const sizeClass = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold rounded-full border ${styles[nivel]} ${sizeClass}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dots[nivel]}`} />
      Risco {nivel}
    </span>
  )
}

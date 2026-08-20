import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Badge } from './Badge'
import { Golpe } from '../../types'

interface ScamCardProps {
  golpe: Golpe
}

const categoriaLabel: Record<string, string> = {
  financeiro: 'Financeiro',
  identidade: 'Identidade',
  'redes-sociais': 'Redes Sociais',
  'ia-tecnologia': 'IA & Tecnologia',
}

const categoriaColor: Record<string, string> = {
  financeiro: 'bg-green-100 text-green-700',
  identidade: 'bg-blue-100 text-blue-700',
  'redes-sociais': 'bg-pink-100 text-pink-700',
  'ia-tecnologia': 'bg-purple-100 text-purple-700',
}

export const ScamCard = ({ golpe }: ScamCardProps) => {
  return (
    <Link
      to={`/golpes/${golpe.slug}`}
      className="group card-base flex flex-col p-5 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex flex-col gap-1.5">
          <span
            className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full ${categoriaColor[golpe.categoria]}`}
          >
            {categoriaLabel[golpe.categoria]}
          </span>
          <Badge nivel={golpe.nivelRisco} size="sm" />
        </div>
        <span className="text-xs font-bold text-navy opacity-50 shrink-0">#{golpe.id.toString().padStart(2, '0')}</span>
      </div>

      <h3 className="font-display font-bold text-navy text-sm sm:text-base leading-snug mb-2 group-hover:text-brand-green transition-colors">
        {golpe.nome}
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1">{golpe.descricao}</p>

      <div className="mt-4 flex items-center gap-1 text-xs font-bold text-navy group-hover:text-brand-green transition-colors">
        Ver detalhes <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

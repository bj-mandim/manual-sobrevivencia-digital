import { useNavigate } from 'react-router-dom'
import { SituationCard } from '../ui/SituationCard'
import { situacoes } from '../../data/situacoes'

export const SituationGrid = () => {
  const navigate = useNavigate()

  const handleSelect = (situacaoId: string) => {
    navigate(`/fui-vitima?situacao=${situacaoId}`)
  }

  return (
    <section className="py-16 bg-gray-50" aria-label="Situações de emergência e seleção de golpes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title mb-2">O que aconteceu com você?</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Selecione o golpe abaixo para receber orientações emergenciais de contenção e recuperação passo a passo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {situacoes.map((s) => (
            <SituationCard key={s.id} situacao={s} onClick={handleSelect} />
          ))}
        </div>
      </div>
    </section>
  )
}

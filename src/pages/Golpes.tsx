import { useState } from 'react'
import { ScamCard } from '../components/ui/ScamCard'
import { golpes } from '../data/golpes'
import { CategoriaGolpe } from '../types'

type FilterId = 'todos' | CategoriaGolpe

const filters: { id: FilterId; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'financeiro', label: '💰 Financeiro' },
  { id: 'identidade', label: '🪪 Identidade' },
  { id: 'redes-sociais', label: '📱 Redes Sociais' },
  { id: 'ia-tecnologia', label: '🤖 IA & Tecnologia' },
]

export const Golpes = () => {
  const [activeFilter, setActiveFilter] = useState<FilterId>('todos')

  const filtered = activeFilter === 'todos'
    ? golpes
    : golpes.filter((g) => g.categoria === activeFilter)

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page header */}
      <div className="bg-navy py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Os 10 Golpes Mais Perigosos
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Conheça cada golpe em detalhes: como funciona, sinais de alerta e como se proteger.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 ${
                activeFilter === id
                  ? 'bg-navy text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-gray-400 mb-5">
          {filtered.length} {filtered.length === 1 ? 'golpe encontrado' : 'golpes encontrados'}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((golpe) => (
            <ScamCard key={golpe.id} golpe={golpe} />
          ))}
        </div>
      </div>
    </div>
  )
}

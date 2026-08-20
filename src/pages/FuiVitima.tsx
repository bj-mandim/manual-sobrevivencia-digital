import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Printer, ExternalLink, CheckSquare, Square } from 'lucide-react'
import { SituationCard } from '../components/ui/SituationCard'
import { situacoes } from '../data/situacoes'
import { fases } from '../data/contencao'

export const FuiVitima = () => {
  const [searchParams] = useSearchParams()
  const [selectedSituacao, setSelectedSituacao] = useState<string | null>(null)
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const checklistRef = useRef<HTMLDivElement>(null)

  // Pre-select from URL param
  useEffect(() => {
    const param = searchParams.get('situacao')
    if (param && situacoes.find((s) => s.id === param)) {
      setSelectedSituacao(param)
    }
  }, [searchParams])

  // Scroll to checklist when situation is selected
  useEffect(() => {
    if (selectedSituacao && checklistRef.current) {
      setTimeout(() => {
        checklistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [selectedSituacao])

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const totalItems = fases.reduce((acc, f) => acc + f.itens.length, 0)
  const progress = Math.round((checked.size / totalItems) * 100)

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-brand-red py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2">Emergência</p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Fui Vítima de um Golpe
          </h1>
          <p className="text-red-100 text-base sm:text-lg max-w-xl mx-auto">
            Mantenha a calma. Siga este checklist passo a passo para minimizar os danos.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Step 1 — Situation selector */}
        <section className="mb-10">
          <h2 className="section-title mb-2">O que aconteceu?</h2>
          <p className="text-gray-500 text-sm mb-6">
            Selecione a situação mais próxima da sua para receber orientações específicas abaixo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {situacoes.map((s) => (
              <SituationCard
                key={s.id}
                situacao={s}
                selected={selectedSituacao === s.id}
                onClick={(id) => setSelectedSituacao((prev) => (prev === id ? null : id))}
              />
            ))}
          </div>
        </section>

        {/* Step 2 — Checklist (shown after selection) */}
        {selectedSituacao && (
          <div ref={checklistRef}>
            {/* Progress bar */}
            <div className="mb-8 bg-white rounded-xl p-5 border border-gray-100 shadow-sm no-print">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-navy">Progresso do checklist</span>
                <span className="text-sm font-bold text-brand-green">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-green rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {checked.size} de {totalItems} itens concluídos
              </p>
            </div>

            {/* Phases */}
            <div className="space-y-6">
              {fases.map((fase) => (
                <div
                  key={fase.id}
                  className={`rounded-xl border-2 p-6 ${fase.corBg} ${fase.corBorda}`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold shrink-0 ${fase.corNum}`}
                    >
                      {fases.indexOf(fase) + 1}
                    </span>
                    <div>
                      <h3 className={`font-display font-bold text-base sm:text-lg ${fase.cor}`}>
                        {fase.titulo}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">{fase.descricao}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 ml-11">
                    {fase.itens.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="flex items-start gap-3 text-left w-full group focus:outline-none"
                          aria-pressed={checked.has(item.id)}
                        >
                          <span className="shrink-0 mt-0.5 text-gray-400 group-hover:text-navy transition-colors">
                            {checked.has(item.id) ? (
                              <CheckSquare className={`w-5 h-5 ${fase.cor}`} />
                            ) : (
                              <Square className="w-5 h-5" />
                            )}
                          </span>
                          <div>
                            <p
                              className={`text-sm sm:text-base font-medium leading-snug transition-colors ${
                                checked.has(item.id) ? 'line-through text-gray-400' : 'text-gray-800'
                              }`}
                            >
                              {item.texto}
                            </p>
                            {item.complemento && (
                              <p className="text-xs text-gray-500 mt-0.5">{item.complemento}</p>
                            )}
                            {item.link && (
                              <a
                                href={item.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline mt-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-3 h-3" />
                                {item.link.label}
                              </a>
                            )}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Print button */}
            <div className="mt-8 flex justify-center no-print">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              >
                <Printer className="w-5 h-5" />
                Imprimir / Salvar checklist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

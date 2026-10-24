import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { VideoEmbed } from '../components/ui/VideoEmbed'
import { StepTimeline } from '../components/ui/StepTimeline'
import { AlertList } from '../components/ui/AlertList'
import { golpeBySlug, golpes } from '../data/golpes'
import { situacoes } from '../data/situacoes'

export const GolpeDetalhe = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const golpe = golpeBySlug(slug ?? '')

  useEffect(() => {
    if (!golpe) navigate('/golpes', { replace: true })
  }, [golpe, navigate])

  if (!golpe) return null

  const currentIndex = golpes.findIndex((g) => g.slug === slug)
  const prev = currentIndex > 0 ? golpes[currentIndex - 1] : null
  const next = currentIndex < golpes.length - 1 ? golpes[currentIndex + 1] : null

  // Encontra a situação correspondente para carregar o checklist exato
  const situacaoCorrespondente = situacoes.find((s) => s.golpeSlug === golpe.slug)?.id

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-black py-10 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5" aria-label="Navegação">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Início</Link>
            <span>/</span>
            <Link to="/golpes" className="hover:text-cyan-400 transition-colors">Golpes</Link>
            <span>/</span>
            <span className="text-gray-300">{golpe.nome}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <Badge nivel={golpe.nivelRisco} />
            <span className="text-gray-400 text-xs">Golpe #{golpe.id.toString().padStart(2, '0')}</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
            {golpe.nome}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">{golpe.descricao}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* Video */}
        <section>
          <h2 className="section-title mb-5">Assista e entenda</h2>
          <VideoEmbed url={golpe.videoUrl} title={`Vídeo explicativo — ${golpe.nome}`} />
        </section>

        {/* How it works */}
        <section>
          <h2 className="section-title mb-6">Como funciona</h2>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <StepTimeline steps={golpe.comoFunciona} />
          </div>
        </section>

        {/* Two-column: alerts + prevention */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-red-50 border border-red-100 rounded-xl p-6">
            <h2 className="font-display font-bold text-lg text-red-700 mb-5 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Sinais de alerta
            </h2>
            <AlertList items={golpe.sinaisDeAlerta} type="danger" />
          </section>

          <section className="bg-teal-50 border border-teal-100 rounded-xl p-6">
            <h2 className="font-display font-bold text-lg text-teal-700 mb-5">
              ✅ Como se prevenir
            </h2>
            <AlertList items={golpe.comoEvitar} type="success" />
          </section>
        </div>

        {/* Statistic */}
        {golpe.estatistica && (
          <div className="bg-black border border-white/10 rounded-xl p-6 text-center">
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Dado importante</p>
            <p className="text-white text-base sm:text-lg font-semibold">{golpe.estatistica}</p>
          </div>
        )}

        {/* Emergency CTA */}
        <div className="bg-brand-red/10 border-2 border-brand-red rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
          <AlertTriangle className="w-10 h-10 text-brand-red shrink-0" aria-hidden="true" />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-black text-lg mb-1">Você caiu neste golpe?</h3>
            <p className="text-gray-600 text-sm">Siga o checklist de emergência — saiba o que fazer agora.</p>
          </div>
          <Link
            to={situacaoCorrespondente ? `/fui-vitima?situacao=${situacaoCorrespondente}` : '/fui-vitima'}
            className="btn-danger shrink-0 text-sm"
          >
            Ver o que fazer
          </Link>
        </div>

        {/* Prev / Next navigation */}
        <nav aria-label="Navegação entre golpes" className="flex justify-between gap-4 pt-4 border-t border-gray-200">
          {prev ? (
            <Link
              to={`/golpes/${prev.slug}`}
              aria-label={`Ir para o golpe anterior: ${prev.nome}`}
              className="flex items-center gap-2 text-sm font-semibold text-black hover:text-cyan-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" /> {prev.nome}
            </Link>
          ) : <span />}

          {next && (
            <Link
              to={`/golpes/${next.slug}`}
              aria-label={`Ir para o próximo golpe: ${next.nome}`}
              className="flex items-center gap-2 text-sm font-semibold text-black hover:text-cyan-500 transition-colors"
            >
              {next.nome} <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>
    </div>
  )
}

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Search,
  ExternalLink,
  Copy,
  Check,
  Phone,
  AlertTriangle,
  Globe,
  Building2,
  Landmark,
  Scale,
  ShieldAlert,
  ShoppingBag,
  Share2,
  CheckCircle2,
  Info
} from 'lucide-react'
import { linksLegitimos, CATEGORIAS_LINKS, CategoriaLink, LinkLegitimo } from '../data/linksLegitimos'
import { ShareWhatsAppButton } from '../components/ui/ShareWhatsAppButton'

export const LinksLegitimos = () => {
  const [busca, setBusca] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaLink | 'todas'>('todas')
  const [linkCopiadoId, setLinkCopiadoId] = useState<string | null>(null)

  const linksFiltrados = useMemo(() => {
    return linksLegitimos.filter((item) => {
      const matchCategoria = categoriaAtiva === 'todas' || item.categoria === categoriaAtiva
      const termo = busca.toLowerCase().trim()
      const matchBusca =
        !termo ||
        item.nome.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo) ||
        item.dominioOficial.toLowerCase().includes(termo) ||
        (item.telefoneOficial && item.telefoneOficial.toLowerCase().includes(termo))
      return matchCategoria && matchBusca
    })
  }, [busca, categoriaAtiva])

  const handleCopiarLink = (item: LinkLegitimo) => {
    navigator.clipboard.writeText(item.url)
    setLinkCopiadoId(item.id)
    setTimeout(() => {
      setLinkCopiadoId((current) => (current === item.id ? null : current))
    }, 2000)
  }

  // Ícone da categoria correspondente
  const renderIconCategoria = (cat: string) => {
    switch (cat) {
      case 'governo':
        return <Building2 className="w-4 h-4" />
      case 'bancos':
        return <Landmark className="w-4 h-4" />
      case 'judiciario':
        return <Scale className="w-4 h-4" />
      case 'denuncia':
        return <ShieldAlert className="w-4 h-4" />
      case 'comercio':
        return <ShoppingBag className="w-4 h-4" />
      case 'redes':
        return <Share2 className="w-4 h-4" />
      default:
        return <Globe className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-black py-12 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5" aria-label="Navegação">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-gray-300">Canais e Links Oficiais</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Diretório Anti-Phishing Verificado</span>
            </div>
            <ShareWhatsAppButton
              title="Diretório de Links Legítimos e Canais Oficiais de Segurança"
              variant="compact"
            />
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Links Legítimos e Canais Oficiais
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Evite cair em sites falsos patrocinados no Google ou links perigosos recebidos no WhatsApp. Acesse aqui os endereços autênticos e telefones oficiais de bancos, órgãos públicos, tribunais e delegacias.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* Card Didático: Como saber se o link é verdadeiro */}
        <section className="bg-gradient-to-r from-cyan-950 via-slate-900 to-black rounded-2xl p-6 sm:p-8 text-white border border-cyan-500/20 shadow-xl">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Info className="w-4 h-4" />
            <span>Regra de Ouro da Cibersegurança</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-4">
            Como saber se um site é oficial antes de clicar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Domínios Oficiais (.gov.br e .jus.br)
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Nenhum golpista consegue criar um endereço terminado em <strong className="text-white">.gov.br</strong> ou <strong className="text-white">.jus.br</strong>. Se o site do INSS ou Receita não terminar exatamente nisso, é golpe.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                Cuidado com Links Patrocinados
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Ao pesquisar no Google, os primeiros resultados com etiqueta <strong className="text-white">"Patrocinado"</strong> ou <strong className="text-white">"Anúncio"</strong> podem ser sites clonados de bancos ou leilões. Role até os resultados orgânicos.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-bold text-red-300 mb-1 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                Extensões Estranhas (.site, .xyz, .top)
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Grandes bancos e empresas brasileiras usam <strong className="text-white">.com.br</strong> ou domínios próprios (como <strong className="text-white">banco.bradesco</strong> ou <strong className="text-white">inter.co</strong>). Nunca use links com hífen falso como <code className="text-cyan-200">nubank-suporte.com</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Barra de Busca e Filtros */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquise por banco, órgão, serviço ou telefone (ex: INSS, Caixa, OAB, Rastreamento, Nubank)..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-sm sm:text-base transition-all"
            />
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Abas de categorias */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {CATEGORIAS_LINKS.map((cat) => {
              const ativa = categoriaAtiva === cat.id
              const contagem =
                cat.id === 'todas'
                  ? linksLegitimos.length
                  : linksLegitimos.filter((l) => l.categoria === cat.id).length

              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaAtiva(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    ativa
                      ? 'bg-black text-cyan-400 shadow-md ring-2 ring-cyan-400'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {renderIconCategoria(cat.id)}
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                      ativa ? 'bg-cyan-400 text-black' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {contagem}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Lista de Resultados */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Mostrando <strong className="text-gray-900">{linksFiltrados.length}</strong> {linksFiltrados.length === 1 ? 'canal oficial' : 'canais oficiais'}
            </p>
            {busca && (
              <span className="text-xs text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                Filtro: "{busca}"
              </span>
            )}
          </div>

          {linksFiltrados.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-200">
              <ShieldAlert className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-700 font-bold text-lg mb-1">Nenhum canal oficial encontrado</p>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-5">
                Não localizamos nenhum serviço correspondente à busca "{busca}". Verifique a ortografia ou limpe os filtros.
              </p>
              <button
                onClick={() => {
                  setBusca('')
                  setCategoriaAtiva('todas')
                }}
                className="btn-primary text-xs"
              >
                Ver todos os links
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {linksFiltrados.map((item) => {
                const foiCopiado = linkCopiadoId === item.id

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Topo do Card */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-xl bg-gray-100 text-gray-700">
                            {renderIconCategoria(item.categoria)}
                          </span>
                          <div>
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                              Canal Verificado
                            </span>
                          </div>
                        </div>

                        <div>
                          <span className="font-mono text-xs font-bold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-lg border border-gray-200 inline-block">
                            {item.dominioOficial}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-2 leading-snug">
                        {item.nome}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.descricao}
                      </p>

                      {/* Telefone Oficial */}
                      {item.telefoneOficial && (
                        <div className="mb-4 flex items-start gap-2 text-xs font-semibold text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                          <Phone className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                          <span className="break-words">SAC / Telefone: <strong>{item.telefoneOficial}</strong></span>
                        </div>
                      )}

                      {/* Alerta de Golpe Comum */}
                      {item.alertaGolpeComum && (
                        <div className="mb-5 flex items-start gap-2.5 text-xs text-red-900 bg-red-50/90 p-3 rounded-xl border border-red-200 leading-relaxed">
                          <AlertTriangle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-red-950 font-bold">Golpe comum:</strong> {item.alertaGolpeComum}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Ações */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                      <button
                        onClick={() => handleCopiarLink(item)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
                          foiCopiado
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        }`}
                        title="Copiar link seguro para a área de transferência"
                      >
                        {foiCopiado ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Link copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-gray-500" />
                            <span>Copiar link</span>
                          </>
                        )}
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-black hover:bg-gray-800 text-cyan-400 transition-colors shadow-sm min-h-[40px]"
                      >
                        <span>Acessar oficial</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Rodapé da Seção */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-display font-bold text-gray-900 text-lg mb-1">
              Ajude a proteger sua família e amigos
            </h3>
            <p className="text-gray-600 text-sm">
              Envie este diretório para parentes, idosos e colegas de trabalho. Ter acesso rápido aos canais oficiais é a forma mais eficaz de blindagem contra falsas centrais e phishing.
            </p>
          </div>
          <ShareWhatsAppButton
            title="Diretório de Links Legítimos contra Golpes Digitais"
            variant="primary"
          />
        </div>
      </div>
    </div>
  )
}

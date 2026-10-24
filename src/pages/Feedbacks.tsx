import { useState } from 'react'
import { MessageSquare, ExternalLink, HelpCircle, CheckCircle2, Sparkles, Send, ShieldQuestion } from 'lucide-react'

// ============================================================================
// CONFIGURAÇÃO DO FORMULÁRIO (GOOGLE FORMS EMBED)
// ============================================================================
// Formulário oficial de feedbacks do Manual de Sobrevivência Digital
// Link encurtado fornecido: https://forms.gle/PXEKpru17gxPSdk27
// URL resolvida para incorporação direta (embedded=true) sem redirecionamento externo:
const FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScdIjFOf7qlpdsD_UbzGIPqWu5jh3x3PB1glkuOCE1EyOHt7Q/viewform?embedded=true'

export const Feedbacks = () => {
  const [customUrl, setCustomUrl] = useState(FORM_EMBED_URL)
  const [inputUrl, setInputUrl] = useState('')

  const activeUrl = customUrl.trim()

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputUrl.trim()) {
      setCustomUrl(inputUrl.trim())
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-black py-12 px-4 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            <MessageSquare className="w-4 h-4" />
            Canal de Ouvidoria & Melhoria Contínua
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Envie seu Feedback
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sua opinião é fundamental para aprimorarmos o <strong>Manual de Sobrevivência Digital</strong>.
            Compartilhe críticas, sugestões de novos golpes ou seu depoimento.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-black text-sm mb-1">Novos Golpes</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Viu um golpe novo que ainda não está listado? Conte para nós para incluirmos nos guias.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-teal-50 text-brand-green flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-black text-sm mb-1">Experiência de Uso</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              O checklist foi fácil de usar? As orientações ajudaram a conter o problema a tempo?
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <ShieldQuestion className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-black text-sm mb-1">Dúvidas & Sugestões</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Tem alguma dúvida ou sugestão de parceria institucional ou acadêmica? Fale conosco.
            </p>
          </div>
        </div>

        {/* Formulário ou Guia de Configuração */}
        {activeUrl ? (
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Formulário de Resposta Aberto
                </span>
              </div>
              <a
                href={activeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 hover:underline"
              >
                Abrir em tela cheia <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-inner">
              <iframe
                src={activeUrl}
                title="Formulário de Feedback dos Usuários"
                aria-label="Formulário de Feedback do Manual de Sobrevivência Digital"
                className="w-full min-h-[850px] sm:min-h-[920px] border-0"
                loading="lazy"
              >
                Carregando formulário de feedback...
              </iframe>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display font-bold text-black text-xl mb-1">
                  Espaço reservado para o Google Forms
                </h2>
                <p className="text-sm text-gray-600">
                  Esta aba está pronta para exibir seu formulário de feedback. Siga o passo a passo abaixo para atrelar seu Google Forms ou testar uma URL agora:
                </p>
              </div>
            </div>

            {/* Como configurar */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-6 space-y-3">
              <h3 className="font-bold text-black text-sm">Como atrelar seu Google Forms permanentemente:</h3>
              <ol className="list-decimal list-inside text-xs sm:text-sm text-gray-700 space-y-2">
                <li>
                  Crie ou abra seu formulário no{' '}
                  <a
                    href="https://forms.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 font-semibold underline inline-flex items-center gap-1"
                  >
                    Google Forms <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>Clique no botão roxo <strong>"Enviar"</strong> no canto superior direito.</li>
                <li>Selecione a aba com o ícone de código HTML (<strong>&lt; &gt;</strong>).</li>
                <li>
                  Copie a URL presente no atributo <code className="bg-gray-200 px-1 py-0.5 rounded text-xs">src="..."</code> (exemplo: <code className="bg-gray-200 px-1 py-0.5 rounded text-xs text-brand-red">https://docs.google.com/forms/d/e/.../viewform?embedded=true</code>).
                </li>
                <li>
                  Abra o arquivo <code className="bg-gray-200 px-1 py-0.5 rounded text-xs text-black font-mono">src/pages/Feedbacks.tsx</code> e cole o link na constante <code className="bg-gray-200 px-1 py-0.5 rounded text-xs text-black font-mono">FORM_EMBED_URL</code>.
                </li>
              </ol>
            </div>

            {/* Teste Imediato de URL */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-black text-sm mb-2">Quer testar um formulário agora?</h3>
              <p className="text-xs text-gray-500 mb-4">
                Cole abaixo o link do Google Forms (ou de qualquer outro formulário web) para pré-visualizar:
              </p>
              <form onSubmit={handleApplyUrl} className="flex flex-col sm:flex-row gap-2">
                <label htmlFor="form-url-input" className="sr-only">
                  URL de incorporação do formulário Google Forms
                </label>
                <input
                  id="form-url-input"
                  type="url"
                  placeholder="https://docs.google.com/forms/d/e/.../viewform?embedded=true"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  aria-label="Carregar e pré-visualizar formulário"
                  className="btn-success inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shrink-0"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Carregar Formulário
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

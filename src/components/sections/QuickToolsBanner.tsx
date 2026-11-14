import { Link } from 'react-router-dom'
import { Smartphone, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

export const QuickToolsBanner = () => {
  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 border-y border-white/10 relative overflow-hidden">
      {/* Glows de ambientação */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ferramentas Interativas de Autodefesa</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 leading-tight">
            Duas Ferramentas Prontas para Proteger Você Agora
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Não fique na dúvida diante de uma mensagem estranha ou link patrocinado. Use nossas soluções práticas e gratuitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: Reconhecer Mensagem / Desconfiômetro */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/50 transition-all flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="p-2.5 sm:p-3 rounded-2xl bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-800">
                  Desconfiômetro Interativo
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Como Reconhecer uma Mensagem Falsa no Celular
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                Recebeu um SMS de compra suspeita ou mensagem no WhatsApp de suposto advogado cobrando custas? Teste no simulador e veja o raio-x dissecando as fraudes mais comuns.
              </p>

              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Calculadora instantânea de risco de golpe (0% a 100%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Análise aprofundada do golpe do Falso Advogado e Alvará</span>
                </li>
              </ul>
            </div>

            <Link
              to="/reconhecer-mensagem"
              className="inline-flex items-center justify-between w-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all shadow-md min-h-[44px]"
            >
              <span>Testar Mensagem no Desconfiômetro</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Links Legítimos */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-2xl p-5 sm:p-7 hover:border-emerald-400/50 transition-all flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="p-2.5 sm:p-3 rounded-2xl bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-300 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                  Diretório Anti-Phishing
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Links Legítimos e Canais Oficiais
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                Não clique em anúncios falsos no Google. Tenha em mãos a lista verificada com os sites autênticos e telefones de SAC da Caixa, Banco do Brasil, INSS, Receita Federal e OAB.
              </p>

              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Botão de cópia rápida de links seguros com 1 clique</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Telefones oficiais de atendimento e delegacias eletrônicas</span>
                </li>
              </ul>
            </div>

            <Link
              to="/links-legitimos"
              className="inline-flex items-center justify-between w-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all shadow-md min-h-[44px]"
            >
              <span>Consultar Links e Canais Oficiais</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

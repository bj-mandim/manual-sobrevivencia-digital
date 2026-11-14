import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, PhoneCall, ShieldAlert, FileText, KeyRound, Lock, ChevronDown, ChevronUp, Printer, ArrowRight } from 'lucide-react'

export const EmergencyUrgentAction = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const urgentSteps = [
    {
      num: 1,
      title: 'Ligue imediatamente para o seu Banco',
      desc: 'Bloqueie o aplicativo, cartões e limites de transferência. Anote o número de protocolo do atendimento.',
      icon: PhoneCall,
      urgency: 'Prioridade Máxima — Primeiros minutos',
      color: 'bg-red-600 text-white',
    },
    {
      num: 2,
      title: 'Acione o MED do Pix (Mecanismo Especial de Devolução)',
      desc: 'Se o dinheiro saiu por Pix, peça no SAC do banco a contestação imediata via MED para tentar travar o saldo na conta receptora.',
      icon: ShieldAlert,
      urgency: 'Até 80 dias (mas cada minuto conta)',
      color: 'bg-orange-600 text-white',
    },
    {
      num: 3,
      title: 'Registre o Boletim de Ocorrência (B.O.) Online',
      desc: 'Entre na Delegacia Eletrônica do seu Estado. Anexe prints da conversa, comprovante do Pix e o número do protocolo do banco.',
      icon: FileText,
      urgency: 'Exigido pelo banco e pela justiça',
      color: 'bg-amber-600 text-white',
    },
    {
      num: 4,
      title: 'Troque senhas e desconecte aparelhos',
      desc: 'De outro aparelho seguro, mude as senhas do seu e-mail principal, contas bancárias e deslogue de todos os navegadores.',
      icon: KeyRound,
      urgency: 'Evita novos acessos indevidos',
      color: 'bg-blue-600 text-white',
    },
    {
      num: 5,
      title: 'Ative a Verificação em Duas Etapas (2FA)',
      desc: 'No WhatsApp e no e-mail, ative a confirmação em 2 etapas com PIN de 6 dígitos ou aplicativo autenticador.',
      icon: Lock,
      urgency: 'Blindagem definitiva',
      color: 'bg-emerald-600 text-white',
    },
  ]

  return (
    <section
      id="urgencia-golpe"
      aria-label="Ação emergencial para vítimas de golpes"
      className="bg-brand-red text-white py-4 px-4 sm:px-6 shadow-lg border-b-2 border-red-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="p-2.5 bg-black/30 rounded-xl shrink-0 ring-2 ring-white/30">
              <AlertTriangle className="w-6 h-6 text-white animate-bounce" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight uppercase flex items-center gap-2 justify-center md:justify-start">
                Fui vítima de golpe, e agora?
                <span className="bg-black/40 text-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-300/40">
                  Ação Imediata
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-red-100 font-medium">
                Siga estes 5 passos em ordem estrita de urgência para conter o prejuízo.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2 justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="passos-urgencia"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-brand-red hover:bg-red-50 text-xs sm:text-sm font-black transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{isExpanded ? 'Ocultar os 5 passos' : 'Ver os 5 passos de urgência'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <Link
              to="/fui-vitima"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/80 hover:bg-black text-cyan-300 text-xs sm:text-sm font-bold border border-cyan-400/50 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300 min-h-[44px]"
            >
              <span>Checklist Completo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Painel expandido com os 5 passos em ordem de urgência */}
        {isExpanded && (
          <div
            id="passos-urgencia"
            className="mt-6 pt-6 border-t border-white/20 grid grid-cols-1 md:grid-cols-5 gap-4 animate-fadeIn"
          >
            {urgentSteps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.num}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/15 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-7 h-7 rounded-lg ${step.color} font-black text-xs flex items-center justify-center shadow`}>
                        #{step.num}
                      </span>
                      <Icon className="w-4 h-4 text-red-200" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 block mb-1">
                      {step.urgency}
                    </span>
                    <h3 className="font-bold text-sm text-white leading-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-red-100 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            <div className="md:col-span-5 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 mt-1 border-t border-white/10 text-xs">
              <span className="text-red-100">
                ⚠️ Não transfira mais nenhum valor sob a promessa de "desbloqueio" ou "devolução".
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Imprimir este guia</span>
                </button>
                <Link
                  to="/fui-vitima"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black text-cyan-400 font-bold hover:underline"
                >
                  Ir para checklist interativo por situação →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

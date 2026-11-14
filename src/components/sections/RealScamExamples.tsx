import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Mail, MessageSquare, ShieldAlert, Check, ArrowRight } from 'lucide-react'
import { ShareWhatsAppButton } from '../ui/ShareWhatsAppButton'

interface ScamExample {
  id: string
  title: string
  category: string
  channel: 'whatsapp' | 'sms' | 'email'
  sender: string
  date: string
  messageBody: string
  redFlags: {
    highlight: string
    explanation: string
  }[]
  howToReact: string
}

const examples: ScamExample[] = [
  {
    id: 'falso-advogado',
    title: 'Falso Advogado (Liberação de Alvará e Custas)',
    category: 'WhatsApp & Engenharia Social Jurídica',
    channel: 'whatsapp',
    sender: 'Dr. Roberto Advocacia • +55 (11) 98765-4321',
    date: 'Hoje, 11:30',
    messageBody:
      'Olá, informamos que seu processo judicial nº 0014285-88 teve o alvará de R$ 48.750,00 liberado pelo juiz. Para emissão da certidão de liberação e TED imediata, recolha as custas de R$ 940,00 até as 16h via Pix para a chave: financeiro.cartorio@gmail.com.',
    redFlags: [
      {
        highlight: 'alvará de R$ 48.750,00 liberado',
        explanation: 'Golpistas monitoram processos públicos no Diário Oficial e Jusbrasil para atrair a vítima com valores reais.',
      },
      {
        highlight: 'recolha as custas de R$ 940,00 até as 16h via Pix',
        explanation: 'Nenhum tribunal do Brasil cobra custas de alvará via Pix direto! Custas oficiais são recolhidas por guias oficiais do Estado (DARE/GRU).',
      },
      {
        highlight: 'financeiro.cartorio@gmail.com',
        explanation: 'E-mails gratuitos e chaves Pix de pessoas físicas estranhas são a assinatura do estelionato.',
      },
    ],
    howToReact:
      'NUNCA transfira dinheiro. Desligue a conversa e ligue para o telefone fixo histórico do seu advogado ou consulte o cna.oab.org.br.',
  },
  {
    id: 'whatsapp-filho',
    title: 'Golpe do Número Novo (Falso Filho ou Parente)',
    category: 'WhatsApp & Engenharia Social',
    channel: 'whatsapp',
    sender: '+55 (11) 98765-4321 • "Lucas (Filho)"',
    date: 'Hoje, 14:22',
    messageBody:
      'Oi mãe, salva meu número novo aí! Meu outro celular caiu e quebrou a tela, tô usando esse provisório. Mãe, você consegue me pagar uma conta de R$ 1.250 pelo Pix agora? Tentei acessar o app do banco aqui e não tô conseguindo por causa do aparelho novo. Te devolvo amanhã cedinho!',
    redFlags: [
      {
        highlight: 'Mãe, salva meu número novo aí!',
        explanation: 'Golpista pega foto de perfil pública em redes sociais e cria um número pré-pago sem vínculo.',
      },
      {
        highlight: 'consegue me pagar uma conta de R$ 1.250 pelo Pix agora?',
        explanation: 'Criação artificial de urgência financeira para que a vítima aja sem pensar.',
      },
      {
        highlight: 'não tô conseguindo por causa do aparelho novo',
        explanation: 'Desculpa clássica para não atender ligações comuns ou de vídeo.',
      },
    ],
    howToReact:
      'LIGUE IMEDIATAMENTE para o número antigo do seu familiar ou faça uma chamada de vídeo. Nunca transfira antes de ouvir a voz da pessoa!',
  },
  {
    id: 'sms-banco',
    title: 'Falsa Notificação de Compra no Cartão (0800 Falso)',
    category: 'SMS (Smishing) & Falsa Central',
    channel: 'sms',
    sender: 'SMS • 28450 ou Número Desconhecido',
    date: 'Ontem, 09:15',
    messageBody:
      'BANCO SEU: Compra APROVADA no valor de R$ 3.890,00 nas Casas Bahia em 14/11 as 09:12. Caso NAO reconheca, ligue IMEDIATAMENTE para a Central de Seguranca: 0800 777 9820.',
    redFlags: [
      {
        highlight: 'Compra APROVADA no valor de R$ 3.890,00',
        explanation: 'Valor alto proposital para causar susto imediato e fazer a vítima perder o discernimento.',
      },
      {
        highlight: 'Caso NAO reconheca, ligue IMEDIATAMENTE',
        explanation: 'Apressamento psicológico para você ligar antes de consultar o app oficial do cartão.',
      },
      {
        highlight: '0800 777 9820',
        explanation: 'Número 0800 alugado por criminosos com atendimento gravado idêntico ao do banco real.',
      },
    ],
    howToReact:
      'NUNCA ligue para o telefone indicado na mensagem. Abra o aplicativo oficial do seu banco ou vire seu cartão e ligue para o número impresso no verso.',
  },
  {
    id: 'email-encomenda',
    title: 'Falsa Taxa de Entrega dos Correios ou Receita',
    category: 'Phishing & Taxa Falsa',
    channel: 'email',
    sender: 'atendimento@rastreio-correios-taxa.com',
    date: 'Hoje, 08:04',
    messageBody:
      'Aviso importante: Sua encomenda internacional número BR984321200SP foi retida no centro de distribuição de Curitiba. Identificamos pendência de taxa alfandegária no valor de R$ 48,90. Para evitar que o produto seja devolvido ao remetente ou destruído em até 24 horas, pague via Pix pela chave abaixo.',
    redFlags: [
      {
        highlight: 'atendimento@rastreio-correios-taxa.com',
        explanation: 'Endereço falso! O domínio oficial dos Correios termina rigorosamente em ".com.br" ou "correios.com.br".',
      },
      {
        highlight: 'destruído em até 24 horas',
        explanation: 'Ameaça de perda do bem para coagir o pagamento imediato sem verificação.',
      },
      {
        highlight: 'pague via Pix pela chave abaixo',
        explanation: 'Órgãos oficiais e Correios recolhem taxas alfandegárias exclusivamente pelo portal "Minhas Importações" via boleto oficial ou cartão.',
      },
    ],
    howToReact:
      'Acesse diretamente o site oficial correios.com.br e digite o código no rastreamento oficial. Não clique em links de e-mails.',
  },
]

export const RealScamExamples = () => {
  const [selectedExample, setSelectedExample] = useState<ScamExample>(examples[0])

  return (
    <section
      id="exemplos-reais"
      aria-label="Exemplos reais de mensagens golpistas"
      className="py-14 bg-white border-y border-gray-150"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-red-100 text-red-700 uppercase tracking-widest mb-3">
            <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
            Análise Visual de Golpes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-black tracking-tight mb-3">
            Como reconhecer uma mensagem falsa no celular
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Veja na prática como os golpistas escrevem para tentar te enganar. Clique nos exemplos abaixo para ver os truques mais comuns e aprender a nunca cair:
          </p>
        </div>

        {/* Abas dos 3 exemplos */}
        <div
          role="tablist"
          aria-label="Selecione um exemplo de mensagem golpista"
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {examples.map((ex) => {
            const isSelected = selectedExample.id === ex.id
            const Icon = ex.channel === 'whatsapp' ? MessageSquare : ex.channel === 'sms' ? Smartphone : Mail
            return (
              <button
                key={ex.id}
                role="tab"
                id={`tab-${ex.id}`}
                aria-selected={isSelected}
                aria-controls="painel-exemplo"
                onClick={() => setSelectedExample(ex)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isSelected
                    ? 'bg-black text-cyan-400 shadow-md ring-2 ring-cyan-400'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black border border-gray-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-gray-500'}`} aria-hidden="true" />
                <span>{ex.title}</span>
              </button>
            )
          })}
        </div>

        {/* Card do Exemplo Selecionado */}
        <div
          id="painel-exemplo"
          role="tabpanel"
          aria-labelledby={`tab-${selectedExample.id}`}
          className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Lado Esquerdo: Simulação Visual do Celular / Mensagem */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Header do App Simulado */}
              <div
                className={`px-4 py-3 flex items-center justify-between text-white ${
                  selectedExample.channel === 'whatsapp'
                    ? 'bg-emerald-700'
                    : selectedExample.channel === 'sms'
                    ? 'bg-sky-700'
                    : 'bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                    ⚠️
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs font-bold truncate max-w-[200px]">{selectedExample.sender}</p>
                    <p className="text-[10px] text-white/80">{selectedExample.date}</p>
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded text-amber-300">
                  Simulação
                </span>
              </div>

              {/* Corpo da Mensagem com Destaques Visuais */}
              <div className="p-4 sm:p-5 bg-stone-100 space-y-3 min-h-[180px] text-sm">
                <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm border border-gray-200 text-gray-800 leading-relaxed font-sans">
                  {selectedExample.messageBody}
                </div>
                <p className="text-[10px] text-right text-gray-400">Mensagem fraudulenta típica</p>
              </div>
            </div>

            {/* Alerta de Como Reagir */}
            <div className="w-full max-w-md mt-4 bg-emerald-50 border border-emerald-300 rounded-xl p-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-800 mb-1 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" /> O que fazer na hora:
              </p>
              <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                {selectedExample.howToReact}
              </p>
            </div>
          </div>

          {/* Lado Direito: Dissecando os Sinais de Alerta */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-red-600 block mb-1">
                Sinais Evidentes de Perigo
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                Por que este texto é uma fraude descarada?
              </h3>
            </div>

            <div className="space-y-3.5">
              {selectedExample.redFlags.map((flag, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 border-l-4 border-l-red-500 border border-gray-150 shadow-sm"
                >
                  <div className="flex items-start gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-red-950 font-mono bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      "{flag.highlight}"
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 pl-7 leading-relaxed">
                    {flag.explanation}
                  </p>
                </div>
              ))}
            </div>

            {/* Ação de Compartilhar no WhatsApp com a Família + Link para o Desconfiômetro */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <ShareWhatsAppButton
                title={`Alerta de Golpe: ${selectedExample.title}`}
                textCustom={`⚠️ *Atenção Família*: Vi um exemplo real de golpe (${selectedExample.title}) que criminosos estão usando no WhatsApp e celular. Veja como não cair:`}
                variant="primary"
                className="w-full sm:w-auto"
              />
              <Link
                to="/reconhecer-mensagem"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-cyan-400 text-xs sm:text-sm font-bold transition-all border border-cyan-400/40 min-h-[44px]"
              >
                <span>Abrir Desconfiômetro Completo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

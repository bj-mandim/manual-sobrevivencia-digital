import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Smartphone,
  AlertTriangle,
  XCircle,
  ShieldAlert,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Eye
} from 'lucide-react'
import { ShareWhatsAppButton } from '../components/ui/ShareWhatsAppButton'

// Perguntas para a calculadora interativa ("Desconfiômetro")
interface PerguntaDesconfiometro {
  id: string
  texto: string
  detalhe: string
  peso: number
}

const PERGUNTAS: PerguntaDesconfiometro[] = [
  {
    id: 'urgencia',
    texto: 'A mensagem cria urgência extrema para você agir rápido?',
    detalhe: 'Exemplos: "Bloqueio hoje", "Vence em 2 horas", "Última chance de cancelamento", "Se não pagar o valor volta ao governo".',
    peso: 25,
  },
  {
    id: 'remetente',
    texto: 'O remetente é um número de celular comum (com DDD e 9 dígitos) se passando por empresa ou tribunal?',
    detalhe: 'Grandes bancos e operadoras usam números curtos de 4 a 6 dígitos (Shortcode, ex: 28400). Celulares comuns fingindo ser a Caixa ou o Nubank são 99% fraudulentos.',
    peso: 25,
  },
  {
    id: 'link_estranho',
    texto: 'A mensagem traz um link para você clicar com final suspeito ou encurtado?',
    detalhe: 'Exemplos: links com .site, .xyz, .online, .top, bit.ly, ou nomes como "itau-seguranca.com" em vez de "itau.com.br".',
    peso: 30,
  },
  {
    id: 'cobranca_pix',
    texto: 'Estão cobrando pagamento de taxa, custas ou tributo prévio via Pix?',
    detalhe: 'Exigir Pix para "liberar alvará de processo", "pagar taxa de alfândega dos Correios" ou "liberar empréstimo" é a marca registrada do golpe.',
    peso: 35,
  },
  {
    id: 'segredo_emocional',
    texto: 'A pessoa pede segredo ("não comente com ninguém") ou finge ser familiar com "número novo"?',
    detalhe: 'Manipulação emocional para impedir que você consulte outra pessoa ou telefone para o número original.',
    peso: 25,
  },
  {
    id: 'documento_justica',
    texto: 'Enviaram fotos de certidões com timbres da Justiça, Receita Federal ou OAB?',
    detalhe: 'Criminosos forjam timbres públicos e usam dados que pegaram em consultas abertas da internet para assustar você.',
    peso: 20,
  },
]

// Exemplos de mensagens dissecadas (Raio-X)
interface ExemploMensagem {
  id: string
  titulo: string
  app: 'whatsapp' | 'sms'
  contato: string
  horario: string
  textoMensagem: string
  golpeAssociado: {
    nome: string
    slug: string
    ancoragem?: string
  }
  pontosFraude: {
    termo: string
    explicacao: string
    ancoraGolpe?: string
  }[]
  veredito: string
  acaoRecomendada: string
}

const EXEMPLOS_MENSAGENS: ExemploMensagem[] = [
  {
    id: 'falso-advogado',
    titulo: 'WhatsApp do Falso Advogado (Processo e Alvará)',
    app: 'whatsapp',
    contato: 'Dr. Roberto Advocacia (OAB/SP 234.567) • +55 11 98765-4321',
    horario: '14:32',
    textoMensagem:
      'Olá Sr(a). Informamos que seu processo judicial nº 0014285-88.2023.8.26.0100 foi finalizado com êxito! Foi emitido o alvará de soltura de valores no montante de R$ 48.750,00.\n\nPara emissão da Certidão de Desoneração Tributária e liberação imediata da TED pelo cartório, faz-se necessário o recolhimento das custas de R$ 980,00 até as 16h.\n\nChave Pix do responsável cartorário: financeiro.cartorio@gmail.com. Por favor envie o comprovante assim que concluir para darmos baixa.',
    golpeAssociado: {
      nome: 'Golpe #12: Falso Advogado e Precatórios',
      slug: 'falso-advogado',
      ancoragem: 'Combina as táticas do Golpe #01 (Engenharia Social / Phishing) e Golpe #08 (Falsificação de Documentos Públicos e Tribunais).',
    },
    pontosFraude: [
      {
        termo: 'Uso de dados reais de processo',
        explicacao: 'Os golpistas pegam o número do processo, o nome do cliente e o nome do advogado em consultas públicas do Diário Oficial ou Jusbrasil para criar confiança.',
        ancoraGolpe: 'Ligação direta com o Golpe #01 (Phishing Direcionado).',
      },
      {
        termo: 'Termos jurídicos forjados ("alvará de soltura de valores")',
        explicacao: 'Inventam nomenclaturas difíceis para soar oficial. "Alvará de soltura" é para pessoas presas, não para dinheiro! Para dinheiro o termo correto é apenas Alvará Judicial.',
        ancoraGolpe: 'Ligação direta com o Golpe #08 (Falsos Órgãos Públicos).',
      },
      {
        termo: 'Chave Pix pessoal / e-mail gratuito (@gmail)',
        explicacao: 'Custas judiciais reais NUNCA são pagas via chave Pix aleatória para e-mail particular. São recolhidas EXCLUSIVAMENTE por guia oficial do Tribunal (como DARE, GRU ou GRERJ).',
      },
      {
        termo: 'Prazo apertado ("até as 16h")',
        explicacao: 'Prazos irreais servem apenas para você não ter tempo de ligar no telefone fixo do seu advogado de verdade.',
      },
    ],
    veredito: '🚨 FRAUDE CRÍTICA — Tentativa de estelionato com falsidade ideológica do escritório de advocacia.',
    acaoRecomendada: 'NÃO PAGUE NADA. Ligue imediatamente para o telefone fixo histórico do seu advogado ou consulte o cna.oab.org.br.',
  },
  {
    id: 'falsa-central',
    titulo: 'SMS de Falsa Compra Bancária (Falsa Central)',
    app: 'sms',
    contato: '+55 11 97123-9988',
    horario: '10:15',
    textoMensagem:
      'BB / NUBANK: Compra aprovada no valor de R$ 3.890,00 nas LOJAS AMERICANAS em 14/11. Caso nao reconheca esta transacao, ligue imediatamente para a Central de Seguranca: 0800 591 0023.',
    golpeAssociado: {
      nome: 'Golpe #01: Phishing, Smishing e Falsa Central',
      slug: 'phishing',
      ancoragem: 'O golpe do SMS indutor de chamada telefônica (Vishing).',
    },
    pontosFraude: [
      {
        termo: 'Número remetente celular (+55 11 9...)',
        explicacao: 'Bancos brasileiros enviam SMS por canais de shortcode de 5 dígitos (ex: 28400, 28028). Remetente com número de celular comum é fraudulento.',
      },
      {
        termo: 'Falso 0800',
        explicacao: 'Os criminosos alugam linhas 0800 virtuais para simular um call center profissional. Quem atende é o próprio golpista com barulho de atendimento de fundo.',
      },
      {
        termo: 'Valor alto e loja conhecida',
        explicacao: 'Colocam valores de R$ 3.000 a R$ 5.000 para gerar pânico imediato e fazer a vítima ligar sem pensar.',
      },
    ],
    veredito: '🚨 FRAUDE CLÁSSICA — A compra não existe; o objetivo é fazer você ligar para a falsa central.',
    acaoRecomendada: 'Não ligue para o 0800 da mensagem. Abra diretamente o aplicativo do seu banco no celular e confira seu extrato.',
  },
  {
    id: 'correios-taxa',
    titulo: 'SMS de Falsa Taxa Alfandegária dos Correios',
    app: 'sms',
    contato: '+55 41 99112-4455',
    horario: '08:45',
    textoMensagem:
      'CORREIOS AVISO: Seu pacote internacional cód BR882910398 foi retido na fiscalizacao alfandegaria. Evite a devolucao pagando a taxa em: https://correios-rastreio-taxas.online',
    golpeAssociado: {
      nome: 'Golpe #07: Lojas Falsas e Falsos Rastreios',
      slug: 'ecommerce',
      ancoragem: 'Phishing massivo direcionado a pessoas que compram na internet.',
    },
    pontosFraude: [
      {
        termo: 'Domínio falso (.online ao invés de correios.com.br)',
        explicacao: 'O site oficial dos Correios é SEMPRE "correios.com.br". Links com "correios-taxas.online" ou ".site" são páginas clonadas.',
      },
      {
        termo: 'Pagamento exclusivo por Pix em página fake',
        explicacao: 'No site falso, geram um Pix no nome de uma empresa de fachada que vai direto para a conta do estelionatário.',
      },
    ],
    veredito: '🚨 SITE CLONADO — Se você pagar, a taxa vai para o golpista e sua encomenda nunca esteve lá.',
    acaoRecomendada: 'Consulte o código de rastreamento digitando manualmente "rastreamento.correios.com.br" no seu navegador.',
  },
  {
    id: 'gov-bloqueio',
    titulo: 'SMS de Falso Bloqueio de Benefício / Receita Federal',
    app: 'sms',
    contato: '+55 61 98223-1100',
    horario: '16:02',
    textoMensagem:
      'RECEITA FEDERAL / GOV.BR: Identificamos irregularidade gravissima no seu CPF. Seu beneficio do INSS e contas estao com ordem de bloqueio judicial. Regularize em: https://gov-regularizacao-cpf.xyz',
    golpeAssociado: {
      nome: 'Golpe #08: Falsificação de Órgãos Públicos',
      slug: 'orgaos-publicos',
      ancoragem: 'Uso de medo institucional e intimidação com supostos bloqueios de CPF.',
    },
    pontosFraude: [
      {
        termo: 'Extensão suspeita (.xyz)',
        explicacao: 'Qualquer órgão do governo brasileiro opera OBRIGATORIAMENTE sob a extensão oficial ".gov.br". Domínios .xyz, .site ou .top são golpes.',
      },
      {
        termo: 'Ameaça de bloqueio automático de contas',
        explicacao: 'A Receita Federal não bloqueia contas bancárias nem aposentadorias por mensagem de SMS com link direto para pagamento.',
      },
    ],
    veredito: '🚨 ENGENHARIA SOCIAL PELO MEDO — Tentativa de captura de senhas do Gov.br e roubo de dados pessoais.',
    acaoRecomendada: 'Acesse o site oficial gov.br ou o aplicativo Meu INSS para verificar a real situação do seu CPF.',
  },
  {
    id: 'whatsapp-familiar',
    titulo: 'WhatsApp do "Novo Número do Filho/Parente"',
    app: 'whatsapp',
    contato: 'Filho (Foto copiada do perfil real) • +55 19 99988-7766',
    horario: '11:20',
    textoMensagem:
      'Oi mãe, salva meu número novo, o outro celular caiu na água e mandei pro conserto. Vou ficar usando esse temporário.\n\nMãe, preciso pagar a parcela do carro agora e meu app do banco não tá liberado nesse aparelho ainda. Vc consegue fazer um Pix de R$ 1.650 pra mim? Às 18h quando chegar em casa eu te devolvo!',
    golpeAssociado: {
      nome: 'Golpe #02: Sequestro e Falso Perfil de WhatsApp',
      slug: 'whatsapp',
      ancoragem: 'Clonagem de foto e perfil para extorquir familiares com histórico de carinho.',
    },
    pontosFraude: [
      {
        termo: 'História do "celular quebrou/caiu na água"',
        explicacao: 'Desculpa padrão para justificar por que o golpista está usando um número de telefone diferente com a foto da pessoa.',
      },
      {
        termo: 'Pedido urgente de dinheiro sem falar por voz',
        explicacao: 'Se você pedir áudio ou ligar por chamada de vídeo, o golpista inventará que o microfone está quebrado ou que está em reunião.',
      },
      {
        termo: 'Chave Pix no nome de um terceiro',
        explicacao: 'Alegam que o Pix é "do mecânico", "do amigo" ou "da loja", mas na verdade é uma conta laranja alugada pela quadrilha.',
      },
    ],
    veredito: '🚨 GOLPE DO NOVO NÚMERO — Não é seu filho; é um fraudador que baixou a foto dele das redes sociais.',
    acaoRecomendada: 'Ligue imediatamente para o NÚMERO ANTIGO da pessoa ou faça chamada de voz comum para confirmar a identidade antes de qualquer Pix.',
  },
]

export const ReconhecerMensagem = () => {
  const [respostas, setRespostas] = useState<Record<string, boolean>>({})
  const [exemploSelecionadoId, setExemploSelecionadoId] = useState<string>('falso-advogado')

  const toggleResposta = (id: string) => {
    setRespostas((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const limparRespostas = () => {
    setRespostas({})
  }

  // Cálculo da pontuação do Desconfiômetro
  const pontuacaoTotal = PERGUNTAS.reduce((acc, p) => {
    return respostas[p.id] ? acc + p.peso : acc
  }, 0)

  const qtdMarcadas = Object.values(respostas).filter(Boolean).length

  const getDiagnostico = () => {
    if (qtdMarcadas === 0) {
      return {
        nivel: 'Nenhum sinal marcado',
        corBadge: 'bg-gray-100 text-gray-700 border-gray-300',
        corBarra: 'bg-gray-300',
        porcentagem: 0,
        texto: 'Selecione os elementos presentes na mensagem que você recebeu para testar.',
      }
    }
    if (qtdMarcadas === 1) {
      return {
        nivel: 'Suspeita Leve — Atenção Necessária',
        corBadge: 'bg-amber-100 text-amber-800 border-amber-300',
        corBarra: 'bg-amber-500',
        porcentagem: Math.min(pontuacaoTotal, 45),
        texto: 'Há ao menos um indício clássico de fraude. Não clique em nenhum link e verifique a informação por outros canais.',
      }
    }
    if (qtdMarcadas === 2) {
      return {
        nivel: 'Alto Risco de Fraude (75%)',
        corBadge: 'bg-orange-100 text-orange-900 border-orange-300',
        corBarra: 'bg-orange-600',
        porcentagem: Math.min(pontuacaoTotal, 80),
        texto: 'Combinação perigosa de fatores. A probabilidade de ser uma tentativa de golpe é altíssima. Não forneça dados nem senhas.',
      }
    }
    return {
      nivel: '🚨 ALERTA CRÍTICO: GOLPE IMINENTE (99%)',
      corBadge: 'bg-red-100 text-red-900 border-red-300 font-extrabold',
      corBarra: 'bg-brand-red',
      porcentagem: 100,
      texto: 'NÃO FAÇA NADA DO QUE A MENSAGEM PEDE! Trata-se de uma fraude deliberada de estelionato digital. Bloqueie o remetente.',
    }
  }

  const diag = getDiagnostico()
  const exemploAtivo = EXEMPLOS_MENSAGENS.find((ex) => ex.id === exemploSelecionadoId) || EXEMPLOS_MENSAGENS[0]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-black py-12 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5" aria-label="Navegação">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-gray-300">Como Reconhecer Mensagem Falsa</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 w-fit">
              <Smartphone className="w-4 h-4" />
              <span>Laboratório Prático de Detecção de Golpes no Celular</span>
            </div>
            <ShareWhatsAppButton
              title="Como Reconhecer uma Mensagem Falsa no Celular — Desconfiômetro"
              variant="compact"
            />
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Como Reconhecer uma Mensagem Falsa no Celular
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Recebeu um SMS suspeito ou uma mensagem de WhatsApp cobrando taxas ou anunciando dinheiro inesperado? Use o nosso <strong>Desconfiômetro Interativo</strong> e veja o <strong>Raio-X de mensagens falsas reais</strong> para não cair em fraudes.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* ============================================================== */}
        {/* FERRAMENTA 1: O DESCONFIÔMETRO INTERATIVO                      */}
        {/* ============================================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Ferramenta Interativa</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              O "Desconfiômetro" de Mensagens
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Marque os itens abaixo de acordo com o que você leu na mensagem recebida no seu celular. Nosso algoritmo avalia na hora o nível de perigo.
            </p>
          </div>

          {/* Painel do Termômetro */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Veredito do Desconfiômetro</p>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{diag.nivel}</h3>
              </div>
              <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-extrabold border ${diag.corBadge}`}>
                {qtdMarcadas} de {PERGUNTAS.length} indícios detectados
              </span>
            </div>

            {/* Barra de progresso visual */}
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-3">
              <div
                className={`h-full transition-all duration-500 ${diag.corBarra}`}
                style={{ width: `${diag.porcentagem}%` }}
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {diag.texto}
            </p>
          </div>

          {/* Checklist interativo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {PERGUNTAS.map((pergunta) => {
              const checked = !!respostas[pergunta.id]
              return (
                <button
                  key={pergunta.id}
                  onClick={() => toggleResposta(pergunta.id)}
                  type="button"
                  className={`text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 ${
                    checked
                      ? 'border-brand-red bg-red-50/60 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs transition-colors ${
                      checked
                        ? 'bg-brand-red text-white'
                        : 'border border-gray-300 text-transparent bg-gray-50'
                    }`}
                  >
                    ✓
                  </div>
                  <div>
                    <p className={`text-sm font-bold leading-snug mb-1 ${checked ? 'text-red-950' : 'text-gray-900'}`}>
                      {pergunta.texto}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {pergunta.detalhe}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {qtdMarcadas > 0 && (
            <div className="flex justify-end">
              <button
                onClick={limparRespostas}
                className="text-xs font-bold text-gray-500 hover:text-gray-800 underline transition-colors"
              >
                Limpar teste e recomeçar
              </button>
            </div>
          )}
        </section>

        {/* ============================================================== */}
        {/* FERRAMENTA 2: RAIO-X DE MENSAGENS REAIS DISSECADAS             */}
        {/* ============================================================== */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 uppercase tracking-widest mb-1">
              <Eye className="w-4 h-4" />
              <span>Exemplos Práticos e Reais</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              Raio-X de Mensagens Fraudulentas
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              Clique nos modelos abaixo para ver como os golpistas redigem as mensagens e veja a dissecação técnica de cada mentira contada no texto.
            </p>
          </div>

          {/* Abas seletoras de mensagens */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {EXEMPLOS_MENSAGENS.map((ex) => {
              const ativo = ex.id === exemploSelecionadoId
              return (
                <button
                  key={ex.id}
                  onClick={() => setExemploSelecionadoId(ex.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    ativo
                      ? 'bg-black text-cyan-400 shadow-md ring-2 ring-cyan-400'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {ex.app === 'whatsapp' ? (
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Smartphone className="w-4 h-4 text-blue-500" />
                  )}
                  <span>{ex.titulo}</span>
                </button>
              )
            })}
          </div>

          {/* Layout de Dissecação: Celular na Esquerda + Análise na Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visualizador de Celular */}
            <div className="lg:col-span-5 bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-5 shadow-2xl border-4 border-slate-800 text-white relative w-full max-w-full overflow-hidden">
              {/* Entalhe do celular (notch) */}
              <div className="w-28 sm:w-32 h-3.5 sm:h-4 bg-slate-800 rounded-full mx-auto mb-4" />

              {/* Cabeçalho do App (WhatsApp / SMS) */}
              <div className="bg-slate-800/90 rounded-2xl p-3 mb-3 flex items-center justify-between border border-white/10 gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    exemploAtivo.app === 'whatsapp' ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {exemploAtivo.app === 'whatsapp' ? 'WA' : 'SMS'}
                  </div>
                  <div className="overflow-hidden min-w-0">
                    <p className="text-xs font-bold truncate">
                      {exemploAtivo.contato.split('•')[0]}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {exemploAtivo.contato.split('•')[1] || 'Número desconhecido'}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-mono shrink-0">{exemploAtivo.horario}</span>
              </div>

              {/* Corpo da Mensagem (Balão do chat) */}
              <div className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-white/10 min-h-[220px] flex flex-col justify-between overflow-hidden">
                <div className="space-y-2">
                  <div className="inline-block bg-white/10 px-2 py-0.5 rounded text-[10px] text-cyan-300 font-bold uppercase tracking-wider mb-1">
                    Mensagem Recebida
                  </div>
                  <p className="text-xs sm:text-sm text-gray-100 whitespace-pre-line leading-relaxed font-sans select-all break-words">
                    {exemploAtivo.textoMensagem}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 gap-2">
                  <span className="flex items-center gap-1 text-red-400 font-bold text-[10px] sm:text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> Mensagem Fraudulenta
                  </span>
                  <span className="shrink-0">{exemploAtivo.horario} ✓✓</span>
                </div>
              </div>

              {/* Aviso inferior do frame */}
              <p className="text-[10px] text-center text-gray-500 mt-3">
                Simulação visual baseada em denúncias reais registradas pela população.
              </p>
            </div>

            {/* Análise Técnica e Conexões com os Golpes */}
            <div className="lg:col-span-7 space-y-6">
              {/* Card do Golpe Associado */}
              <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-black rounded-2xl p-6 text-white border border-indigo-500/30 shadow-lg">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Golpe Catalogado no Manual
                  </span>
                  <Link
                    to={`/golpes/${exemploAtivo.golpeAssociado.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-cyan-200 underline"
                  >
                    <span>Ver análise completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <h3 className="font-display font-extrabold text-xl text-white mb-2">
                  {exemploAtivo.golpeAssociado.nome}
                </h3>
                {exemploAtivo.golpeAssociado.ancoragem && (
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                    <strong className="text-cyan-300">Conexão Cruzada:</strong> {exemploAtivo.golpeAssociado.ancoragem}
                  </p>
                )}
              </div>

              {/* Pontos de Fraude Dissecados */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
                <h4 className="font-display font-bold text-base text-gray-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-brand-red" />
                  O que entrega que esta mensagem é um golpe?
                </h4>

                <div className="space-y-3">
                  {exemploAtivo.pontosFraude.map((pt, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-3.5 border border-gray-200/80">
                      <p className="text-xs sm:text-sm font-bold text-red-900 mb-1 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 text-brand-red shrink-0" />
                        {pt.termo}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-5">
                        {pt.explicacao}
                      </p>
                      {pt.ancoraGolpe && (
                        <p className="text-[11px] font-semibold text-cyan-800 bg-cyan-50/80 px-2.5 py-1 rounded-md mt-2 ml-5 border border-cyan-200 inline-block">
                          {pt.ancoraGolpe}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Veredito e Ação */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="bg-red-50 p-3.5 rounded-xl border border-red-200">
                    <p className="text-xs font-bold text-red-950 uppercase tracking-wider mb-0.5">Veredito</p>
                    <p className="text-sm font-bold text-red-900">{exemploAtivo.veredito}</p>
                  </div>
                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-0.5">O que você deve fazer</p>
                    <p className="text-sm font-bold text-emerald-900">{exemploAtivo.acaoRecomendada}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* GUIA: AS 5 REGRAS DE OURO PARA MENSAGENS NO CELULAR             */}
        {/* ============================================================== */}
        <section className="bg-black text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-6">
          <div className="max-w-2xl">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Cartilha de Autodefesa</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
              As 5 Regras de Ouro para Mensagens no Celular
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Memorize estes 5 princípios e compartilhe com pessoas que têm menor intimidade com a tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-cyan-400 text-black font-extrabold text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-bold text-base text-white mb-2">A Regra do Remetente</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Empresas sérias e bancos nunca enviam SMS através de números normais de celular de 9 dígitos. Eles usam códigos curtos de 5 dígitos (Shortcode). Se veio de um celular comum (+55 ...), é golpe.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-cyan-400 text-black font-extrabold text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-bold text-base text-white mb-2">A Regra da Ponta do Link</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Olhe o que vem imediatamente antes da primeira barra <code className="text-cyan-300">/</code>. Se tiver palavras como <code className="text-red-300">-gov</code>, <code className="text-red-300">.online</code>, <code className="text-red-300">.site</code> ou <code className="text-red-300">.xyz</code>, trata-se de um site falso.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-cyan-400 text-black font-extrabold text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-bold text-base text-white mb-2">A Regra do Pix de Terceiro</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Nenhum órgão público, advogado honesto ou tribunal exige Pix direto para pessoa física estranha para "liberar alvarás" ou "evitar bloqueio de benefício". Custas oficiais são sempre por guias de arrecadação.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-cyan-400 text-black font-extrabold text-sm flex items-center justify-center mb-3">
                4
              </div>
              <h3 className="font-bold text-base text-white mb-2">A Regra do Contra-Ataque</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Nunca use os telefones informados na própria mensagem recebida. Desligue ou feche a mensagem e ligue você mesmo para o número histórico e oficial que você já tinha salvo.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-cyan-400 text-black font-extrabold text-sm flex items-center justify-center mb-3">
                5
              </div>
              <h3 className="font-bold text-base text-white mb-2">A Regra dos 5 Minutos de Calma</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Todo golpe de engenharia social depende do seu pânico imediato. Pare, respire 5 minutos e consulte um parente antes de transferir qualquer valor ou informar senhas.
              </p>
            </div>

            {/* Card com atalho para Links Legítimos */}
            <div className="bg-gradient-to-br from-cyan-900 to-black border border-cyan-400/40 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-cyan-300 text-[10px] font-bold uppercase tracking-wider">Recurso Essencial</span>
                <h3 className="font-bold text-base text-white mt-1 mb-2">Dúvidas sobre o link oficial?</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  Consulte nossa lista verificada com os links reais de bancos, INSS, Receita Federal e Cadastro Nacional dos Advogados (OAB).
                </p>
              </div>
              <Link
                to="/links-legitimos"
                className="btn-primary text-xs w-full text-center"
              >
                Acessar Diretório de Links Legítimos →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

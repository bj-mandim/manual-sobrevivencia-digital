import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react'
import { PerfilProtecao } from '../types'

const perfis: PerfilProtecao[] = [
  {
    id: 'idosos',
    label: 'Idosos e Familiares',
    emoji: '👴',
    golpesPrincipais: ['Vishing de falsas centrais bancárias', 'Falsificação de órgãos públicos (INSS)', 'Sequestro de WhatsApp'],
    dicas: [
      'Nunca forneça códigos SMS por telefone, nem para "atendentes do banco"',
      'O INSS não liga pedindo dados pessoais ou pagamentos',
      'Antes de qualquer transferência urgente, ligue para o familiar diretamente',
      'Ative a verificação em dois fatores no WhatsApp agora',
      'Peça a um familiar de confiança para revisar mensagens suspeitas',
      'Desconfie de sorteios, prêmios e heranças que chegam por mensagem',
    ],
  },
  {
    id: 'jovens',
    label: 'Jovens e Adultos',
    emoji: '👩‍💻',
    golpesPrincipais: ['Sequestro de Instagram/TikTok', 'Investimentos falsos e plataformas de tarefas', 'Lojas virtuais falsas'],
    dicas: [
      'Ative o 2FA em TODAS as suas redes sociais agora',
      'Nunca clique em links recebidos por DM, mesmo de amigos',
      'Retorno diário acima de 1% é pirâmide financeira — fuja',
      'Confira o CNPJ de qualquer loja online antes de comprar',
      'Use um gerenciador de senhas e senhas únicas por plataforma',
      'Verifique QR codes físicos antes de escanear em locais públicos',
    ],
  },
  {
    id: 'empresas',
    label: 'Microempreendedores',
    emoji: '🏢',
    golpesPrincipais: ['Fraude no Pix com comprovante falso', 'Phishing com dados reais vazados (spear phishing)', 'Falsas vagas de emprego para coletar dados da empresa'],
    dicas: [
      'Só libere produtos ou serviços após confirmar o Pix NO APP DO BANCO',
      'Treine sua equipe a nunca abrir links de e-mails não solicitados',
      'Use e-mail corporativo com autenticação SPF/DKIM ativo',
      'Verifique fornecedores por telefone antes de qualquer transferência',
      'Faça backup dos dados da empresa semanalmente fora da rede local',
      'Consulte seu banco sobre seguros contra fraudes empresariais',
    ],
  },
]

export const Proteja = () => {
  const [activePerfil, setActivePerfil] = useState<string>('idosos')
  const perfil = perfis.find((p) => p.id === activePerfil)!

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-brand-green py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-100 text-xs font-bold uppercase tracking-widest mb-2">Prevenção</p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Proteja-se
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto">
            Boas práticas de segurança digital personalizadas para o seu perfil.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Profile tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {perfis.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePerfil(p.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 ${
                activePerfil === p.id
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
              }`}
            >
              <span className="text-base">{p.emoji}</span>
              {p.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Top 3 scams for this profile */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-display font-bold text-navy text-lg mb-4 flex items-center gap-2">
              <span className="text-xl">{perfil.emoji}</span>
              Golpes mais comuns para {perfil.label}
            </h2>
            <ul className="space-y-2">
              {perfil.golpesPrincipais.map((g, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <Link
              to="/golpes"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-brand-green transition-colors"
            >
              Ver todos os golpes em detalhe <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Prevention tips */}
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
            <h2 className="font-display font-bold text-teal-800 text-lg mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Checklist de boas práticas
            </h2>
            <ul className="space-y-3">
              {perfil.dicas.map((dica, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{dica}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency CTA */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display font-bold text-navy text-base mb-1">Aconteceu mesmo assim?</h3>
              <p className="text-gray-500 text-sm">Siga o checklist de emergência imediatamente.</p>
            </div>
            <Link
              to="/fui-vitima"
              className="btn-danger shrink-0 text-sm"
            >
              Fui vítima — o que fazer?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { FaseContencao } from '../types'

export const fases: FaseContencao[] = [
  {
    id: 'financeiro',
    titulo: '1. Contenção Financeira Imediata',
    descricao: 'Bloqueie o dinheiro e impeça novas transferências.',
    cor: 'text-red-700',
    corBg: 'bg-red-50',
    corBorda: 'border-red-200',
    corNum: 'bg-brand-red',
    itens: [
      {
        id: 'f1',
        texto: 'Ligue para o banco e solicite bloqueio IMEDIATO da conta e cartões',
        complemento: 'Use o número no verso do cartão ou acesse o app bancário.',
      },
      {
        id: 'f2',
        texto: 'Acione o Mecanismo Especial de Devolução (MED) para transferências Pix indevidas',
        complemento: 'Disponível no app do banco em até 80 minutos após a transação.',
      },
      {
        id: 'f3',
        texto: 'Cancele pagamentos pendentes (boletos ainda não compensados)',
        complemento: 'Contate o banco imediatamente.',
      },
      {
        id: 'f4',
        texto: 'Registre todos os valores e datas das transações suspeitas',
        complemento: 'Anote ou tire print do extrato bancário completo.',
      },
    ],
  },
  {
    id: 'provas',
    titulo: '2. Preservação de Provas',
    descricao: 'Guarde tudo antes de deletar qualquer mensagem ou contato.',
    cor: 'text-amber-700',
    corBg: 'bg-amber-50',
    corBorda: 'border-amber-200',
    corNum: 'bg-brand-amber',
    itens: [
      {
        id: 'p1',
        texto: 'Tire prints das conversas, e-mails, SMS e chamadas envolvidas',
        complemento: 'Capture o número, data, horário e conteúdo completo.',
      },
      {
        id: 'p2',
        texto: 'Anote o número de telefone ou e-mail do golpista',
        complemento: 'Não delete o contato ainda — é prova fundamental.',
      },
      {
        id: 'p3',
        texto: 'Salve URLs de sites falsos visitados',
        complemento: 'Copie o link completo e guarde em um arquivo de texto.',
      },
      {
        id: 'p4',
        texto: 'Registre dados do comprovante falso (se houver)',
        complemento: 'Valor, chave Pix de destino e banco receptor.',
      },
    ],
  },
  {
    id: 'bo',
    titulo: '3. Boletim de Ocorrência',
    descricao: 'Registre formalmente para acionar investigação policial.',
    cor: 'text-blue-700',
    corBg: 'bg-blue-50',
    corBorda: 'border-blue-200',
    corNum: 'bg-blue-600',
    itens: [
      {
        id: 'b1',
        texto: 'Registre o Boletim de Ocorrência na Delegacia Eletrônica do seu estado',
        link: { label: 'Delegacias Eletrônicas por Estado', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
      },
      {
        id: 'b2',
        texto: 'Informe o banco sobre o Boletim de Ocorrência registrado',
        complemento: 'Muitos bancos exigem o BO para iniciar o processo de ressarcimento.',
      },
      {
        id: 'b3',
        texto: 'Denuncie o golpe ao PROCON do seu estado',
        link: { label: 'Portal Nacional do Consumidor.gov', url: 'https://www.consumidor.gov.br' },
      },
      {
        id: 'b4',
        texto: 'Em casos de Pix, denuncie também ao Banco Central',
        link: { label: 'BACEN — Registrar Reclamação', url: 'https://www.bcb.gov.br/meubc/fazerreclamacao' },
      },
    ],
  },
  {
    id: 'recuperacao',
    titulo: '4. Recuperação de Acessos e Segurança',
    descricao: 'Proteja suas contas e impeça que novos ataques ocorram.',
    cor: 'text-teal-700',
    corBg: 'bg-teal-50',
    corBorda: 'border-teal-200',
    corNum: 'bg-brand-green',
    itens: [
      {
        id: 'r1',
        texto: 'Troque imediatamente todas as senhas das contas comprometidas',
        complemento: 'Use senha forte: mínimo 12 caracteres com letras, números e símbolos.',
      },
      {
        id: 'r2',
        texto: 'Ative a autenticação em dois fatores (2FA) em todas as suas contas',
        complemento: 'Use um app autenticador (Google Authenticator ou Microsoft Authenticator).',
      },
      {
        id: 'r3',
        texto: 'Encerre sessões ativas em dispositivos desconhecidos',
        complemento: 'Disponível nas configurações de segurança de cada plataforma.',
      },
      {
        id: 'r4',
        texto: 'Monitore seu CPF nos serviços de crédito por 90 dias',
        link: { label: 'Consultar CPF no Serasa', url: 'https://www.serasa.com.br' },
      },
      {
        id: 'r5',
        texto: 'Avise familiares e contatos próximos sobre o ocorrido',
        complemento: 'Para que não caiam em golpes usando seu nome ou conta comprometida.',
      },
    ],
  },
]

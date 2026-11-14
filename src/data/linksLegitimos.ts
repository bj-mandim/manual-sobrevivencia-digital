export type CategoriaLink = 'bancos' | 'governo' | 'judiciario' | 'comercio' | 'redes' | 'denuncia'

export interface LinkLegitimo {
  id: string
  nome: string
  descricao: string
  categoria: CategoriaLink
  url: string
  dominioOficial: string
  telefoneOficial?: string
  alertaGolpeComum?: string
  appOficialAndroid?: string
  appOficialIos?: string
}

export const CATEGORIAS_LINKS: { id: CategoriaLink | 'todas'; label: string; icon: string }[] = [
  { id: 'todas', label: 'Todos os Canais', icon: 'Globe' },
  { id: 'governo', label: 'Governo & INSS', icon: 'Building2' },
  { id: 'bancos', label: 'Bancos & Fintechs', icon: 'Landmark' },
  { id: 'judiciario', label: 'Justiça & OAB', icon: 'Scale' },
  { id: 'denuncia', label: 'Denúncia & BO', icon: 'ShieldAlert' },
  { id: 'comercio', label: 'E-commerce & Rastreio', icon: 'ShoppingBag' },
  { id: 'redes', label: 'Redes Sociais & Contas', icon: 'Share2' },
]

export const linksLegitimos: LinkLegitimo[] = [
  // ==========================================
  // GOVERNO & UTILIDADE PÚBLICA
  // ==========================================
  {
    id: 'gov-br',
    nome: 'Portal Gov.br (Governo Federal)',
    descricao: 'Acesso unificado a todos os serviços digitais federais, carteira de trabalho, CPF e declarações.',
    categoria: 'governo',
    url: 'https://www.gov.br',
    dominioOficial: 'gov.br',
    alertaGolpeComum: 'Golpistas criam sites como gov-br.online ou portal-gov.site para roubar sua senha e CPF.',
  },
  {
    id: 'meu-inss',
    nome: 'Meu INSS (Oficial)',
    descricao: 'Consulta de aposentadoria, extrato de pagamento de benefícios e agendamento de perícias.',
    categoria: 'governo',
    url: 'https://meu.inss.gov.br',
    dominioOficial: 'meu.inss.gov.br',
    telefoneOficial: '135 (Central Oficial do INSS)',
    alertaGolpeComum: 'O INSS NUNCA liga ou envia SMS pedindo confirmação de dados ou pagamento de taxa via Pix.',
  },
  {
    id: 'receita-federal',
    nome: 'Receita Federal do Brasil',
    descricao: 'Situação cadastral do CPF, consulta de restituição do IRPF e certidões negativas oficiais.',
    categoria: 'governo',
    url: 'https://www.gov.br/receitafederal',
    dominioOficial: 'gov.br/receitafederal',
    alertaGolpeComum: 'A Receita NUNCA envia e-mails ou mensagens ameaçando "bloqueio do CPF" com link de pagamento.',
  },
  {
    id: 'registrato-bcb',
    nome: 'Registrato — Banco Central do Brasil',
    descricao: 'Descubra todas as contas bancárias abertas em seu CPF, chaves Pix cadastradas e empréstimos contratados.',
    categoria: 'governo',
    url: 'https://www.bcb.gov.br/meubc/registrato',
    dominioOficial: 'bcb.gov.br',
    alertaGolpeComum: 'Ferramenta indispensável para verificar se criminosos abriram contas laranjas no seu nome após vazamento de dados.',
  },
  {
    id: 'correios-rastreio',
    nome: 'Correios — Rastreamento Oficial de Encomendas',
    descricao: 'Página oficial para rastrear cartas e encomendas nacionais e internacionais.',
    categoria: 'governo',
    url: 'https://rastreamento.correios.com.br',
    dominioOficial: 'correios.com.br',
    telefoneOficial: '0800 725 7282',
    alertaGolpeComum: 'SMS falsos avisando que sua "encomenda foi retida por taxa alfandegária" usam links falsos como correios-taxas.online.',
  },
  {
    id: 'senatran-cnh',
    nome: 'Portal de Serviços da SENATRAN (Carteira Digital de Trânsito)',
    descricao: 'Consulta oficial de multas, pontuação na CNH e documentação do veículo (CRLV-e).',
    categoria: 'governo',
    url: 'https://portalservicos.senatran.serpro.gov.br',
    dominioOficial: 'senatran.serpro.gov.br',
    alertaGolpeComum: 'Mensagens falsas de suspensão imediata de CNH exigindo pagamento via Pix são golpes comuns.',
  },

  // ==========================================
  // JUSTIÇA, TRIBUNAIS & OAB (CONTRA GOLPE DO FALSO ADVOGADO)
  // ==========================================
  {
    id: 'cna-oab',
    nome: 'CNA — Cadastro Nacional dos Advogados (OAB)',
    descricao: 'Consulte gratuitamente se o advogado realmente existe, se a inscrição na OAB está ativa e o telefone oficial.',
    categoria: 'judiciario',
    url: 'https://cna.oab.org.br',
    dominioOficial: 'cna.oab.org.br',
    telefoneOficial: '(61) 2193-9600 (Conselho Federal OAB)',
    alertaGolpeComum: 'Use ANTES de fazer qualquer pagamento de alvará solicitado pelo WhatsApp para confirmar o contato real.',
  },
  {
    id: 'cnj-portal',
    nome: 'CNJ — Conselho Nacional de Justiça',
    descricao: 'Portal unificado de transparência e regras dos tribunais de justiça brasileiros.',
    categoria: 'judiciario',
    url: 'https://www.cnj.jus.br',
    dominioOficial: 'cnj.jus.br',
    alertaGolpeComum: 'Nenhum tribunal de justiça cobra taxa de liberação de precatórios ou indenizações por chave Pix avulsa.',
  },
  {
    id: 'pje-consulta',
    nome: 'Processo Judicial Eletrônico (PJe) — Consulta Pública',
    descricao: 'Acesso e consulta pública de processos judiciais nos tribunais do Brasil.',
    categoria: 'judiciario',
    url: 'https://www.pje.jus.br',
    dominioOficial: 'pje.jus.br',
    alertaGolpeComum: 'Golpistas pegam o número do seu processo na consulta pública para montar o golpe do falso advogado.',
  },

  // ==========================================
  // BANCOS & FINTECHS (CANAIS E SAC DE FRAUDE)
  // ==========================================
  {
    id: 'caixa',
    nome: 'Caixa Econômica Federal',
    descricao: 'Canal oficial para FGTS, Bolsa Família, PIS/PASEP e contas bancárias da Caixa.',
    categoria: 'bancos',
    url: 'https://www.caixa.gov.br',
    dominioOficial: 'caixa.gov.br',
    telefoneOficial: '4004 0104 (Capitais) | 0800 104 0104 (Demais) | 0800 726 0101 (SAC)',
    alertaGolpeComum: 'A Caixa NUNCA envia SMS pedindo atualização de cadastro com links encurtados.',
  },
  {
    id: 'banco-do-brasil',
    nome: 'Banco do Brasil',
    descricao: 'Portal oficial do Banco do Brasil para correntistas, empresas e agronegócio.',
    categoria: 'bancos',
    url: 'https://www.bb.com.br',
    dominioOficial: 'bb.com.br',
    telefoneOficial: '4004 0001 (Capitais) | 0800 729 0001 (Demais) | 0800 729 0722 (SAC)',
    alertaGolpeComum: 'Falsas mensagens sobre pontos Livelo expirando ou compra suspeita de R$ 3.000 são phishing.',
  },
  {
    id: 'itau',
    nome: 'Banco Itaú',
    descricao: 'Site institucional e internet banking oficial do Banco Itaú.',
    categoria: 'bancos',
    url: 'https://www.itau.com.br',
    dominioOficial: 'itau.com.br',
    telefoneOficial: '4004 4828 (Capitais) | 0800 970 4828 (Demais) | 0800 728 0728 (SAC)',
    alertaGolpeComum: 'O Itaú nunca solicita que você digite senhas de cartão ou iToken em ligações recebidas.',
  },
  {
    id: 'bradesco',
    nome: 'Banco Bradesco',
    descricao: 'Página oficial de acesso bancário, cartões e investimentos do Bradesco.',
    categoria: 'bancos',
    url: 'https://banco.bradesco',
    dominioOficial: 'banco.bradesco',
    telefoneOficial: '4002 0022 (Capitais) | 0800 570 0022 (Demais) | 0800 727 9977 (SAC)',
    alertaGolpeComum: 'Cuidado com anúncios patrocinados no Google com URLs parecidas (ex: bradesco-atendimento.com).',
  },
  {
    id: 'nubank',
    nome: 'Nubank (Nu Pagamentos)',
    descricao: 'Portal oficial, atendimento e blog com comunicados de segurança do Nubank.',
    categoria: 'bancos',
    url: 'https://nubank.com.br',
    dominioOficial: 'nubank.com.br',
    telefoneOficial: '4020 0185 (Capitais) | 0800 591 2117 (Demais) | 0800 887 0463 (Ouvidoria)',
    alertaGolpeComum: 'Falso SMS do Nubank sobre "compra aprovada nas Lojas Americanas ou Magalu" com número 0800 falso para você ligar.',
  },
  {
    id: 'banco-inter',
    nome: 'Banco Inter',
    descricao: 'Acesso e canais oficiais da conta digital Inter.',
    categoria: 'bancos',
    url: 'https://inter.co',
    dominioOficial: 'inter.co',
    telefoneOficial: '3003 4070 (Capitais) | 0800 940 0007 (Demais) | 0800 940 9999 (SAC)',
    alertaGolpeComum: 'Nunca repasse o código recebido via SMS ou token do aplicativo do Inter a ninguém.',
  },
  {
    id: 'mercado-pago',
    nome: 'Mercado Pago',
    descricao: 'Canal oficial da conta digital, maquininhas e cobranças do Mercado Pago.',
    categoria: 'bancos',
    url: 'https://www.mercadopago.com.br',
    dominioOficial: 'mercadopago.com.br',
    telefoneOficial: '0800 637 7246 (SAC Oficial)',
    alertaGolpeComum: 'Golpistas mandam falsos e-mails dizendo que você recebeu um Pix para induzir à entrega de mercadoria.',
  },

  // ==========================================
  // DENÚNCIA, RESPOSTA & BOLETIM DE OCORRÊNCIA
  // ==========================================
  {
    id: 'delegacias-safernet',
    nome: 'Delegacias Eletrônicas de Crimes Cibernéticos (SaferNet)',
    descricao: 'Mapa nacional completo com links diretos para a Delegacia Virtual da Polícia Civil de todos os estados do Brasil.',
    categoria: 'denuncia',
    url: 'https://new.safernet.org.br/content/delegacias-cibercrimes',
    dominioOficial: 'safernet.org.br',
    alertaGolpeComum: 'Fazer o Boletim de Ocorrência é obrigatório para pedir restituição de prejuízos via MED no banco.',
  },
  {
    id: 'consumidor-gov',
    nome: 'Consumidor.gov.br (Ministério da Justiça)',
    descricao: 'Portal público para abrir reclamações formais contra bancos, operadoras e e-commerces que não resolveram sua demanda.',
    categoria: 'denuncia',
    url: 'https://www.consumidor.gov.br',
    dominioOficial: 'consumidor.gov.br',
    alertaGolpeComum: 'Os bancos monitoram este canal de perto e têm prazo legal obrigatório para responder.',
  },
  {
    id: 'bacen-reclamacao',
    nome: 'Fazer Reclamação no Banco Central do Brasil',
    descricao: 'Registre queixa formal contra o banco que se recusou a ativar o MED ou permitiu abertura de conta com dados falsos.',
    categoria: 'denuncia',
    url: 'https://www.bcb.gov.br/meubc/fazerreclamacao',
    dominioOficial: 'bcb.gov.br',
    telefoneOficial: '145 (Central BACEN)',
    alertaGolpeComum: 'Canal de pressão de alto nível caso o banco descumpra as normas de segurança do Pix.',
  },

  // ==========================================
  // E-COMMERCE & MARKETPLACES CONFIÁVEIS
  // ==========================================
  {
    id: 'mercado-livre',
    nome: 'Mercado Livre Brasil',
    descricao: 'Plataforma oficial de compras, vendas e garantias do Mercado Livre.',
    categoria: 'comercio',
    url: 'https://www.mercadolivre.com.br',
    dominioOficial: 'mercadolivre.com.br',
    alertaGolpeComum: 'Nunca combine pagamento "por fora" do site oficial, pois você perde toda a garantia de compra protegida.',
  },
  {
    id: 'amazon-brasil',
    nome: 'Amazon Brasil',
    descricao: 'Página oficial de e-commerce e entregas da Amazon Brasil.',
    categoria: 'comercio',
    url: 'https://www.amazon.com.br',
    dominioOficial: 'amazon.com.br',
    alertaGolpeComum: 'Falsos anúncios patrocinados no Instagram usam nomes parecidos como amazon-promos.site.',
  },
  {
    id: 'shopee-brasil',
    nome: 'Shopee Brasil',
    descricao: 'Portal de compras e aplicativo oficial da Shopee.',
    categoria: 'comercio',
    url: 'https://shopee.com.br',
    dominioOficial: 'shopee.com.br',
    alertaGolpeComum: 'Golpe da falsa vaga na Shopee pedindo para depositar dinheiro para "avaliar produtos" é pirâmide financeira.',
  },

  // ==========================================
  // REDES SOCIAIS & RECUPERAÇÃO DE CONTAS
  // ==========================================
  {
    id: 'instagram-recuperacao',
    nome: 'Recuperação de Conta do Instagram (Oficial)',
    descricao: 'Página direta da Meta para recuperar contas invadidas, roubadas ou com senha alterada por invasores.',
    categoria: 'redes',
    url: 'https://www.instagram.com/hacked',
    dominioOficial: 'instagram.com/hacked',
    alertaGolpeComum: 'Desconfie de perfis que prometem "hackear de volta sua conta por uma taxa" — são novos golpistas.',
  },
  {
    id: 'google-seguranca',
    nome: 'Central de Segurança da Conta Google (Gmail / Android)',
    descricao: 'Verifique quais celulares e computadores têm acesso ao seu Gmail e ative a verificação em duas etapas.',
    categoria: 'redes',
    url: 'https://myaccount.google.com/security',
    dominioOficial: 'google.com',
    alertaGolpeComum: 'Se perder o acesso ao Gmail, criminosos podem redefinir as senhas de todos os seus bancos.',
  },
  {
    id: 'whatsapp-suporte',
    nome: 'Suporte Oficial do WhatsApp',
    descricao: 'Canal de atendimento direto para recuperar conta clonada ou desativar conta em caso de furto do celular.',
    categoria: 'redes',
    url: 'https://www.whatsapp.com/contact',
    dominioOficial: 'whatsapp.com',
    alertaGolpeComum: 'O WhatsApp NUNCA liga nem envia mensagens pedindo confirmação de código de 6 dígitos.',
  },
]

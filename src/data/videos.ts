/**
 * ============================================================================
 * GUIA DE VÍDEOS — MANUAL DE SOBREVIVÊNCIA DIGITAL
 * ============================================================================
 *
 * Este arquivo centraliza todos os links de vídeos do YouTube do projeto.
 * 
 * COMO ADICIONAR OU ATUALIZAR UM VÍDEO:
 * 1. Cole a URL do YouTube correspondente na propriedade `url`.
 *    Formatos suportados:
 *    - https://youtu.be/saO2Nbjss80
 *    - https://www.youtube.com/watch?v=saO2Nbjss80
 *    - https://www.youtube.com/embed/saO2Nbjss80
 *    - https://www.youtube.com/shorts/saO2Nbjss80
 *
 * 2. Enquanto um vídeo não tiver link definitivo, mantenha `url: ""` ou `url: "placeholder"`.
 *    O sistema exibirá automaticamente a moldura informativa de "Espaço Reservado"
 *    com o título e a descrição contextual daquele vídeo.
 */

export interface VideoInfo {
  url: string
  titulo: string
  descricao: string
}

/**
 * Vídeos da aba Proteja-se
 */
export const VIDEOS_PROTEJA = {
  // Vídeo principal de prevenção geral exibido no topo da página Proteja-se
  principal: {
    url: 'https://youtu.be/saO2Nbjss80',
    titulo: 'Guia em Vídeo: Como se Proteger no Dia a Dia',
    descricao: 'Orientações fundamentais de cibersegurança que todo cidadão deve conhecer, válidas para todas as idades.',
  },
  // Vídeos opcionais específicos por perfil de público (insira os links futuros aqui):
  idosos: {
    url: '', // Ex: 'https://youtu.be/...'
    titulo: 'Vídeo: Segurança Digital para Idosos e Familiares',
    descricao: 'Orientações práticas para proteger idosos contra falsas centrais telefônicas, golpes do INSS e sequestro de WhatsApp.',
  },
  jovens: {
    url: '', // Ex: 'https://youtu.be/...'
    titulo: 'Vídeo: Segurança Digital para Jovens e Adultos',
    descricao: 'Como blindar redes sociais com autenticação em duas etapas, evitar falsos investimentos e compras em lojas fraudulentas.',
  },
  empresas: {
    url: '', // Ex: 'https://youtu.be/...'
    titulo: 'Vídeo: Segurança Digital para Microempreendedores',
    descricao: 'Boas práticas contra fraudes no Pix, spear phishing e proteção dos dados corporativos e clientes.',
  },
}

/**
 * Vídeos individuais para cada um dos 11 golpes detalhados (/golpe/:slug)
 * Cole os links do YouTube nos campos abaixo conforme os vídeos forem publicados:
 */
export const VIDEOS_GOLPES: Record<string, string> = {
  // 1. Phishing, Smishing e Vishing
  phishing: 'https://youtu.be/8f3Gvs6UZQA',
  // 2. Sequestro de WhatsApp
  whatsapp: '',
  // 3. Golpe do Pix e Comprovante Falso
  pix: 'https://youtu.be/S2UFe33gGiU',
  // 4. Invasão de Redes Sociais
  'redes-sociais': 'https://youtu.be/MXvgQ6rGitM',
  // 5. Falsos Investimentos e Pirâmides
  investimentos: 'https://youtu.be/dmUaGGUn4Zw',
  // 6. Falsa Vaga de Emprego / Tarefas
  emprego: 'https://youtu.be/Btu4qHnUt8w',
  // 7. Loja Virtual Falsa / E-commerce
  ecommerce: 'https://youtu.be/9x8HQKBB1Vs',
  // 8. Falsos Órgãos Públicos (INSS / Gov.br)
  'orgaos-publicos': 'https://youtu.be/DMYJeqSIV5Q',
  // 9. QR Code Malicioso (Quishing)
  qrcode: 'https://youtu.be/SnWfUNtPOg8',
  // 10. Deepfake e Clonagem de Voz por IA
  deepfake: 'https://youtu.be/QVMDWems03c',
  // 11. Fake News e Desinformação
  'fake-news': '',
}

/**
 * Vídeos da aba Fui Vítima (/fui-vitima)
 * Exibidos condicionalmente no topo do checklist de emergência para cada situação:
 */
export const VIDEOS_FUI_VITIMA: Record<string, VideoInfo> = {
  geral: {
    url: '',
    titulo: 'Orientações Gerais: O Que Fazer ao Cair em um Golpe',
    descricao: 'Instruções preliminares importantes para manter a calma, evitar decisões impulsivas e proteger seus dados.',
  },
  phishing: {
    url: 'https://youtu.be/8f3Gvs6UZQA',
    titulo: '1. Phishing, SMS ou Ligação Falsa (Falsa Central)',
    descricao: 'Como agir caso tenha atendido ligações de supostos bancos, clicado em links falsos ou fornecido senhas por engano.',
  },
  whatsapp: {
    url: '',
    titulo: '2. WhatsApp Invadido ou Clonado',
    descricao: 'Como desconectar invasores pelo WhatsApp Web, recuperar sua conta via código SMS e alertar contatos para evitar novas vítimas.',
  },
  pix: {
    url: 'https://youtu.be/S2UFe33gGiU',
    titulo: '3. Golpe do Pix ou Comprovante Falso',
    descricao: 'Como acionar imediatamente o MED (Mecanismo Especial de Devolução) do Banco Central nas primeiras horas para tentar reaver os valores.',
  },
  'redes-sociais': {
    url: 'https://youtu.be/MXvgQ6rGitM',
    titulo: '4. Rede Social Invadida ou Roubada (Instagram / TikTok / Facebook)',
    descricao: 'Procedimentos oficiais de recuperação de perfil, revogação de acessos de criminosos e denúncia de contas usurpadas.',
  },
  investimentos: {
    url: 'https://youtu.be/dmUaGGUn4Zw',
    titulo: '5. Falso Investimento ou Pirâmide Financeira',
    descricao: 'Instruções urgentes: não pague taxas para liberação de saque, preserve todas as provas e registre queixa formal na CVM e na polícia.',
  },
  emprego: {
    url: 'https://youtu.be/Btu4qHnUt8w',
    titulo: '6. Falsa Vaga de Emprego ou Plataforma de Tarefas',
    descricao: 'Como cessar o contato com falsos recrutadores sem pagar "taxas de exame", proteger seus documentos e denunciar o esquema.',
  },
  ecommerce: {
    url: 'https://youtu.be/9x8HQKBB1Vs',
    titulo: '7. Loja Virtual Falsa / Comprei e Não Recebi',
    descricao: 'Como acionar o chargeback com a operadora do seu cartão de crédito, cancelar o cartão exposto e registrar no Procon.',
  },
  'orgaos-publicos': {
    url: 'https://youtu.be/DMYJeqSIV5Q',
    titulo: '8. Falso Órgão Público (INSS / Receita Federal / Gov.br)',
    descricao: 'Como verificar pendências diretamente nos portais oficiais .gov.br, blindar sua conta Gov.br e bloquear empréstimos indevidos.',
  },
  qrcode: {
    url: 'https://youtu.be/SnWfUNtPOg8',
    titulo: '9. QR Code Malicioso (Quishing)',
    descricao: 'Passos imediatos para fechar páginas maliciosas, verificar extratos bancários e denunciar o código adulterado no local físico.',
  },
  deepfake: {
    url: 'https://youtu.be/QVMDWems03c',
    titulo: '10. Deepfake de Voz ou Imagem com Inteligência Artificial',
    descricao: 'Como registrar provas com fé pública (ata notarial), acionar ferramentas de remoção rápida e denunciar na Delegacia Especializada.',
  },
  'fake-news': {
    url: '',
    titulo: '11. Fake News, Desinformação e Falsos Alertas (Bônus)',
    descricao: 'Como checar boatos em agências profissionais de fact-checking, quebrar a cadeia de compartilhamento e agir em caso de difamação.',
  },
  // Aliases para compatibilidade retroativa com seletores
  ligacao: {
    url: 'https://youtu.be/8f3Gvs6UZQA',
    titulo: '1. Phishing e Ligação Falsa (Falsa Central)',
    descricao: 'Como agir caso tenha conversado com falsos gerentes bancários ou fornecido dados por telefone.',
  },
  link: {
    url: 'https://youtu.be/8f3Gvs6UZQA',
    titulo: '1. Phishing por Link Malicioso ou SMS',
    descricao: 'Passos urgentes de contenção para desinfectar o dispositivo, alterar senhas e revogar permissões.',
  },
  'rede-social': {
    url: 'https://youtu.be/MXvgQ6rGitM',
    titulo: '4. Rede Social Invadida ou Roubada',
    descricao: 'Procedimentos oficiais para recuperação de conta invadida e denúncia de perfis usurpados.',
  },
  conta: {
    url: 'https://youtu.be/MXvgQ6rGitM',
    titulo: '4. Perdi Acesso a uma Conta Importante',
    descricao: 'Como restabelecer acesso com autenticação forte, recuperar e-mail de recuperação e proteger dados pessoais.',
  },
}

import { FaseContencao } from '../types'

// Checklists didáticos, acolhedores e detalhados para cada situação de ataque
// Projetados para serem compreendidos facilmente por qualquer pessoa (de adolescentes a idosos)
export const fasesPorSituacao: Record<string, FaseContencao[]> = {
  // 1. LIGAÇÃO SUSPEITA / FALSA CENTRAL TELEFÔNICA
  ligacao: [
    {
      id: 'ligacao-fase1',
      titulo: '1. Desligue e Não Dê Acesso ao seu Aparelho',
      descricao: 'A primeira regra de ouro: corte o contato imediatamente e não instale nada.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'lig-1',
          texto: 'Desligue a ligação na mesma hora',
          complemento: 'Não tenha vergonha ou medo de ser indelicado. Golpistas usam vozes educadas, barulho de call center e fingem urgência para te assustar. Desligue sem confirmar nenhum dado pessoal.',
        },
        {
          id: 'lig-2',
          texto: 'NUNCA instale aplicativos que o atendente pedir no celular ou computador',
          complemento: 'Nenhum banco pede para você baixar programas como AnyDesk, TeamViewer, RustDesk ou QuickSupport. Esses apps dão acesso à sua tela e ao seu dinheiro. Se você já baixou, desligue o Wi-Fi e o 4G/5G agora mesmo e apague o app.',
        },
        {
          id: 'lig-3',
          texto: 'Atenção ao "golpe da linha presa": não ligue do mesmo telefone em seguida',
          complemento: 'Se a pessoa disser "ligue no número do seu cartão para confirmar", NÃO disque no mesmo aparelho imediatamente. Os golpistas conseguem segurar a chamada com uma gravação falsa. Espere 10 minutos ou use o celular de um familiar.',
        },
      ],
    },
    {
      id: 'ligacao-fase2',
      titulo: '2. Fale com seu Banco de Verdade',
      descricao: 'Use os canais oficiais para conferir seu saldo e bloquear acessos em segurança.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'lig-4',
          texto: 'Ligue para o banco usando o telefone oficial impresso no seu cartão físico',
          complemento: 'Olhe o número no verso do seu cartão plástico ou consulte o site oficial do seu banco digitando o endereço na barra do navegador.',
        },
        {
          id: 'lig-5',
          texto: 'Se você digitou senhas durante a chamada, peça o bloqueio preventivo imediato',
          complemento: 'Informe ao atendente real: "Recebi uma ligação suspeita e acho que minhas senhas foram comprometidas. Quero bloquear o acesso ao aplicativo e cartões".',
        },
        {
          id: 'lig-6',
          texto: 'Confira o extrato da sua conta bancária',
          complemento: 'Veja se saiu algum dinheiro, se fizeram Pix ou se há transferências agendadas para os próximos dias que você não reconhece.',
        },
      ],
    },
    {
      id: 'ligacao-fase3',
      titulo: '3. Guarde Provas e Registre o Ocorrido',
      descricao: 'Tire fotos das informações para ajudar a polícia e garantir seus direitos.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'lig-7',
          texto: 'Tire um print (foto da tela) do histórico de chamadas do seu celular',
          complemento: 'Guarde o registro mostrando o número que te ligou, o dia e a hora exata da ligação.',
        },
        {
          id: 'lig-8',
          texto: 'Guarde mensagens de SMS ou e-mails recebidos',
          complemento: 'Não apague mensagens que o golpista mandou com "protocolos", "códigos" ou "confirmações de cancelamento". Elas provam a fraude.',
        },
        {
          id: 'lig-9',
          texto: 'Faça um Boletim de Ocorrência (B.O.) pela internet',
          complemento: 'Você não precisa ir até a delegacia física. A maioria dos estados tem Delegacia Eletrônica gratuita na internet (crime de Estelionato Eletrônico).',
          link: { label: 'Encontrar a Delegacia Eletrônica do seu estado', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
    {
      id: 'ligacao-fase4',
      titulo: '4. Troque Senhas e Fique Protegido',
      descricao: 'Feche as portas para que os golpistas não tentem te enganar novamente.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'lig-10',
          texto: 'Troque as senhas do seu aplicativo do banco e do seu e-mail',
          complemento: 'Crie senhas que misturem letras e números. Evite usar seu ano de nascimento, nome de filhos ou sequências fáceis como "123456".',
        },
        {
          id: 'lig-11',
          texto: 'Diminua o limite diário e noturno de Pix no app do banco',
          complemento: 'Deixe um valor baixo para o dia a dia. Se precisar fazer um pagamento maior no futuro, você pode aumentar o limite com calma.',
        },
        {
          id: 'lig-12',
          texto: 'Cadastre seu número no site oficial "Não Me Perturbe" da Anatel',
          complemento: 'Esse serviço gratuito bloqueia ligações indesejadas de telemarketing e ajuda a filtrar chamadas chatas ou fraudulentas.',
          link: { label: 'Acessar o Não Me Perturbe (Anatel)', url: 'https://www.naomeperturbe.com.br' },
        },
      ],
    },
  ],

  // 2. CLIQUEI EM UM LINK SUSPEITO / VÍRUS / PÁGINA FALSA
  link: [
    {
      id: 'link-fase1',
      titulo: '1. Desligue a Internet e Feche a Página',
      descricao: 'Ação rápida para impedir que vírus enviem seus dados ou acessem suas fotos.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'lnk-1',
          texto: 'Desconecte seu aparelho da internet na mesma hora',
          complemento: 'Coloque o celular no "Modo Avião" ou desligue o Wi-Fi e os Dados Móveis (4G/5G). Sem internet, qualquer programa espião é impedido de mandar suas informações para fora.',
        },
        {
          id: 'lnk-2',
          texto: 'Feche o navegador e não digite nada',
          complemento: 'Se abriu uma página pedindo CPF, senha do banco, código recebido por SMS ou número de cartão, feche a janela imediatamente sem preencher.',
        },
        {
          id: 'lnk-3',
          texto: 'Se baixou algum arquivo, NÃO clique nele e apague da pasta Downloads',
          complemento: 'Vá na pasta "Downloads" do celular ou computador. Se você vir arquivos terminados em .apk, .exe, .zip ou nomes estranhos, exclua-os e esvazie a lixeira.',
        },
      ],
    },
    {
      id: 'link-fase2',
      titulo: '2. Limpeza do Aparelho',
      descricao: 'Verifique se não ficou nenhum aplicativo ou arquivo espião escondido.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'lnk-4',
          texto: 'No celular: Confira a lista de aplicativos instalados',
          complemento: 'Vá em Configurações > Aplicativos. Se encontrar algum aplicativo que você não lembra de ter instalado, desinstale-o na hora.',
        },
        {
          id: 'lnk-5',
          texto: 'No computador: Faça uma varredura completa com seu antivírus',
          complemento: 'Ligue a internet apenas para atualizar o antivírus (como o Segurança do Windows ou antivírus de sua preferência) e faça uma verificação completa.',
        },
        {
          id: 'lnk-6',
          texto: 'Limpe o histórico e os cookies do seu navegador',
          complemento: 'Abra o Chrome, Safari ou Edge, vá em "Histórico" e clique em "Limpar dados de navegação". Isso remove rastros deixados pela página falsa.',
        },
      ],
    },
    {
      id: 'link-fase3',
      titulo: '3. Troque Senhas Usando OUTRO Aparelho',
      descricao: 'Mude suas senhas mais importantes de forma 100% segura.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'lnk-7',
          texto: 'Troque a senha do seu e-mail e das suas redes sociais por outro aparelho',
          complemento: 'Use o celular de uma pessoa de confiança ou outro computador seguro para mudar as senhas do seu e-mail principal, Google/Apple e redes.',
        },
        {
          id: 'lnk-8',
          texto: 'Desconecte sua conta de outros aparelhos',
          complemento: 'Nas configurações de segurança do Google, Instagram ou Facebook, clique na opção "Sair de todos os outros dispositivos conectados".',
        },
        {
          id: 'lnk-9',
          texto: 'Ative a "Verificação em Duas Etapas" (aquela segunda camada de proteção)',
          complemento: 'Sempre que possível, use um aplicativo autenticador (como Google Authenticator ou Microsoft Authenticator) em vez de apenas código por SMS.',
        },
      ],
    },
    {
      id: 'link-fase4',
      titulo: '4. Cuidados com Cartão e CPF',
      descricao: 'Proteja seus cartões de crédito e fique atento ao seu nome.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'lnk-10',
          texto: 'Digitou dados de cartão na página falsa? Bloqueie o cartão no app do banco',
          complemento: 'Cancele o cartão atual no aplicativo e peça uma nova via. Se for cartão virtual de compras na internet, apague e crie um novo na mesma hora.',
        },
        {
          id: 'lnk-11',
          texto: 'Faça um Boletim de Ocorrência na Delegacia Eletrônica',
          complemento: 'Guarde o link da mensagem falsa recebida (por SMS ou WhatsApp) e tire fotos para anexar ao boletim.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
        {
          id: 'lnk-12',
          texto: 'Consulte gratuitamente o seu CPF no Registrato do Banco Central',
          complemento: 'O Registrato é um site oficial e gratuito do Banco Central onde você pode conferir se alguém tentou abrir contas ou fazer empréstimos no seu nome.',
          link: { label: 'Acessar o Registrato do Banco Central', url: 'https://registrato.bcb.gov.br' },
        },
      ],
    },
  ],

  // 3. TRANSFERÊNCIA PIX INDEVIDA / GOLPE DO PIX
  pix: [
    {
      id: 'pix-fase1',
      titulo: '1. Peça a Devolução Imediata (Acione o MED no Banco)',
      descricao: 'Corra contra o tempo: quanto mais rápido você pedir o bloqueio, maior a chance de recuperar o valor.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'px-1',
          texto: 'Abra o app do seu banco e clique em "Contestar / Relatar Problema no Pix"',
          complemento: 'Essa ferramenta se chama MED (Mecanismo Especial de Devolução do Banco Central). Ela avisa o banco de quem recebeu o dinheiro para congelar o saldo da conta do golpista imediatamente.',
        },
        {
          id: 'px-2',
          texto: 'Se não achar o botão no app, ligue URGENTE para o SAC do seu banco',
          complemento: 'Diga com clareza: "Fui vítima de golpe do Pix e quero acionar o MED agora mesmo (Resolução 103 do Banco Central)". Anote o número de protocolo do atendimento.',
        },
        {
          id: 'px-3',
          texto: 'Anote o ID da transação e os dados de quem recebeu o Pix',
          complemento: 'Abra o comprovante do Pix e anote o código comprido (ID fim-a-fim), o nome da pessoa/empresa que recebeu, a chave Pix e o banco de destino.',
        },
      ],
    },
    {
      id: 'pix-fase2',
      titulo: '2. Avise o Banco de Destino e Proteja sua Conta',
      descricao: 'Feche o cerco contra a conta do golpista e proteja o restante do seu dinheiro.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'px-4',
          texto: 'Ligue para o canal de atendimento do banco que recebeu o Pix',
          complemento: 'Informe que a conta daquele titular é uma "conta laranja" usada para aplicar golpes e passe o ID da transação para que eles bloqueiem a conta receptora.',
        },
        {
          id: 'px-5',
          texto: 'Reduza os limites diários e noturnos de transferência Pix no seu aplicativo',
          complemento: 'Coloque um valor pequeno de limite diário para evitar que novas quantias saiam da sua conta caso seu aparelho tenha sido invadido.',
        },
        {
          id: 'px-6',
          texto: 'Verifique se não há agendamentos de pagamentos futuros',
          complemento: 'Abra a aba de "Agendamentos" ou "Extrato Futuro" no seu banco e cancele qualquer Pix ou boleto programado que você não tenha feito.',
        },
      ],
    },
    {
      id: 'pix-fase3',
      titulo: '3. Guarde Provas e Registre o B.O.',
      descricao: 'Junte todas as conversas e comprovantes para a investigação policial.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'px-7',
          texto: 'Salve o comprovante completo do Pix em PDF ou foto',
          complemento: 'O comprovante deve conter o nome do favorecido, CPF/CNPJ mascarado, banco de destino e o código de autenticação da transação.',
        },
        {
          id: 'px-8',
          texto: 'Tire prints de todas as conversas de WhatsApp, anúncios ou mensagens',
          complemento: 'Não apague o chat com o golpista. As mensagens, áudios, perfil e número de telefone são as principais provas do crime.',
        },
        {
          id: 'px-9',
          texto: 'Registre o Boletim de Ocorrência na Delegacia Eletrônica pela internet',
          complemento: 'Classifique como "Estelionato Eletrônico" e descreva passo a passo o que aconteceu, colocando os dados de quem recebeu o Pix.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
    {
      id: 'pix-fase4',
      titulo: '4. Reclamação Formal e Seus Direitos',
      descricao: 'Se o banco não resolver ou demorar, use os canais oficiais de proteção ao consumidor.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'px-10',
          texto: 'Envie o Boletim de Ocorrência para a equipe de segurança do seu banco',
          complemento: 'Mande o B.O. por e-mail ou pelo chat oficial do banco para reforçar a contestação do MED.',
        },
        {
          id: 'px-11',
          texto: 'Abra uma reclamação no site oficial do Banco Central (BACEN)',
          complemento: 'Se o seu banco demorar para dar resposta ou negar ajuda sem justificativa, registre uma reclamação formal no portal do Banco Central.',
          link: { label: 'Registrar Reclamação no Banco Central', url: 'https://www.bcb.gov.br/meubc/fazerreclamacao' },
        },
        {
          id: 'px-12',
          texto: 'Registre queixa no Consumidor.gov.br e no PROCON',
          complemento: 'A lei brasileira (Súmula 479 do STJ) diz que os bancos são responsáveis pela segurança das transações e pela abertura de contas falsas/laranjas usadas em fraudes.',
          link: { label: 'Portal Nacional Consumidor.gov.br', url: 'https://www.consumidor.gov.br' },
        },
      ],
    },
  ],

  // 4. MEU WHATSAPP FOI INVADIDO / CLONADO / SIM SWAP
  whatsapp: [
    {
      id: 'whatsapp-fase1',
      titulo: '1. Desconecte o Invasor no seu Próprio Celular',
      descricao: 'O jeito mais rápido de expulsar o golpista do seu WhatsApp.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'wpp-1',
          texto: 'Abra o WhatsApp no seu aparelho e peça o código SMS de 6 dígitos',
          complemento: 'Digite seu número no WhatsApp e peça o código por SMS. Assim que você digitar o código recebido, a sessão no celular do golpista será DESCONECTADA automaticamente.',
        },
        {
          id: 'wpp-2',
          texto: 'Pediu um PIN de 6 dígitos que você não sabe? Fique tranquilo, o golpista já foi expulso',
          complemento: 'Se o invasor ativou a confirmação em duas etapas, o WhatsApp pedirá um código que você não sabe. Você terá que esperar 7 dias para entrar, mas o GOLPISTA JÁ FOI DESCONECTADO e não consegue mais ler nem mandar mensagens.',
        },
        {
          id: 'wpp-3',
          texto: 'NUNCA compartilhe códigos SMS recebidos com ninguém',
          complemento: 'Nenhuma empresa de entregas, hotel, restaurante ou suporte do WhatsApp pede código de 6 dígitos que chega por SMS no seu celular.',
        },
      ],
    },
    {
      id: 'whatsapp-fase2',
      titulo: '2. Avise Familiares e Amigos com Urgência',
      descricao: 'Impeça que seus parentes façam transferências achando que é você.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'wpp-4',
          texto: 'Ligue para seus parentes mais próximos (pais, filhos, cônjuge, amigos)',
          complemento: 'Use o telefone fixo ou peça o celular de alguém emprestado e avise: "Meu WhatsApp foi invadido. Não façam nenhum Pix e não mandem dinheiro se me pedirem!".',
        },
        {
          id: 'wpp-5',
          texto: 'Poste um aviso nos Stories do Instagram, Facebook e LinkedIn',
          complemento: 'Coloque um texto simples em letras grandes: "ATENÇÃO: Meu WhatsApp foi hackeado. Desconsiderem qualquer mensagem pedindo dinheiro ou favores".',
        },
        {
          id: 'wpp-6',
          texto: 'Peça para seus amigos denunciarem o número no WhatsApp',
          complemento: 'Quando várias pessoas denunciam o chat clicando em "Denunciar > Golpe ou Spam", a inteligência do WhatsApp suspende a conta mais rápido.',
        },
      ],
    },
    {
      id: 'whatsapp-fase3',
      titulo: '3. Peça a Desativação ao Suporte Oficial do WhatsApp',
      descricao: 'Envie um e-mail direto para a equipe de segurança do aplicativo.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'wpp-7',
          texto: 'Mande um e-mail urgente para support@whatsapp.com',
          complemento: 'No assunto do e-mail escreva: "Conta clonada/perdida: Por favor, desative minha conta". No texto, coloque seu número completo com o código do país: ex: +55 (DDD) 9XXXX-XXXX.',
        },
        {
          id: 'wpp-8',
          texto: 'Aguarde a confirmação de desativação temporária da conta',
          complemento: 'A conta ficará desativada por até 30 dias. Quando você colocar o chip no celular novamente, poderá reativá-la e recuperar suas mensagens.',
        },
        {
          id: 'wpp-9',
          texto: 'Faça um Boletim de Ocorrência na Delegacia Eletrônica',
          complemento: 'O registro do crime (Invasão de Dispositivo - Art. 154-A) comprova que não era você pedindo dinheiro aos seus contatos.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
    {
      id: 'whatsapp-fase4',
      titulo: '4. Verifique a Operadora e Blinde seu WhatsApp',
      descricao: 'Ative a senha secreta de duas etapas para nunca mais ser invadido.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'wpp-10',
          texto: 'O celular ficou "Sem Serviço"? Verifique se seu chip foi clonado (SIM Swap)',
          complemento: 'Se o sinal do celular sumiu e diz "Sem Serviço", ligue imediatamente para sua operadora (Vivo, Claro, TIM) de outro aparelho. Criminosos podem ter transferido sua linha para outro chip.',
        },
        {
          id: 'wpp-11',
          texto: 'Ative a "Confirmação em Duas Etapas" dentro do WhatsApp',
          complemento: 'Assim que recuperar o acesso, abra o WhatsApp > Configurações > Conta > Confirmação em duas etapas. Crie uma senha de 6 números que só você sabe e adicione seu e-mail.',
        },
        {
          id: 'wpp-12',
          texto: 'Confira a lista de "Aparelhos Conectados" (WhatsApp Web)',
          complemento: 'Vá em Configurações > Aparelhos Conectados e clique em "Desconectar de todas as sessões" para garantir que nenhum computador estranho continue conectado.',
        },
      ],
    },
  ],

  // 5. ROUBARAM MINHA REDE SOCIAL / INSTAGRAM / FACEBOOK / TIKTOK
  'rede-social': [
    {
      id: 'redes-fase1',
      titulo: '1. Reversão Rápida pelo seu E-mail de Cadastro',
      descricao: 'Procure os e-mails automáticos de segurança para desfazer a invasão.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'red-1',
          texto: 'Abra seu e-mail e procure mensagens de segurança da rede social',
          complemento: 'Pesquise por mensagens com assunto "Seu endereço de e-mail foi alterado" enviadas por security@mail.instagram.com ou security@facebookmail.com.',
        },
        {
          id: 'red-2',
          texto: 'Clique no link "Reverter alteração" ou "Proteger minha conta"',
          complemento: 'Esse link oficial cancela a mudança de e-mail feita pelo golpista e envia um código de recuperação para o seu e-mail verdadeiro.',
        },
        {
          id: 'red-3',
          texto: 'Troque a senha da sua conta de e-mail imediatamente',
          complemento: 'Muitos golpistas invadem o e-mail primeiro para apagar os alertas da rede social. Mude a senha do e-mail por outro aparelho e ative a verificação em duas etapas.',
        },
      ],
    },
    {
      id: 'redes-fase2',
      titulo: '2. Use o Reconhecimento Facial Oficial da Plataforma',
      descricao: 'O aplicativo usa inteligência artificial para confirmar seu rosto e devolver a conta.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'red-4',
          texto: 'Para Instagram: Acesse o link oficial instagram.com/hacked',
          complemento: 'Escolha a opção "Minha conta foi invadida", digite seu @ e siga as instruções para gravar um vídeo selfie do seu rosto (para contas onde você já publicou fotos suas).',
          link: { label: 'Central de Recuperação do Instagram (instagram.com/hacked)', url: 'https://www.instagram.com/hacked' },
        },
        {
          id: 'red-5',
          texto: 'Para Facebook: Acesse facebook.com/hacked',
          complemento: 'Siga os passos na tela para confirmar sua identidade com documento com foto e redefinir seu e-mail e senha de acesso.',
          link: { label: 'Central de Ajuda do Facebook (facebook.com/hacked)', url: 'https://www.facebook.com/hacked' },
        },
        {
          id: 'red-6',
          texto: 'Para TikTok / X: Abra chamado pelo suporte do aplicativo',
          complemento: 'Envie um pedido de suporte informando a data aproximada de criação da conta e o modelo de celular que você usava para postar.',
        },
      ],
    },
    {
      id: 'redes-fase3',
      titulo: '3. Avise seus Seguidores e Evite Golpes',
      descricao: 'Não deixe que seus amigos comprem produtos falsos ou caiam em golpes de investimento.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'red-7',
          texto: 'Peça para amigos avisarem que seu perfil foi hackeado',
          complemento: 'Peça que postem: "O perfil @seu_nome foi invadido. Não comprem eletrodomésticos, não façam investimentos nem enviem Pix!".',
        },
        {
          id: 'red-8',
          texto: 'Peça para várias pessoas denunciarem o perfil invadido',
          complemento: 'No perfil hackeado, clicar nos 3 pontinhos > Denunciar > Está fingindo ser outra pessoa / Golpe ou Fraude.',
        },
        {
          id: 'red-9',
          texto: 'Tire prints de todas as postagens e stories que o golpista fizer',
          complemento: 'Guarde fotos dos anúncios de "tabela de Pix", fotos de produtos à venda e números de WhatsApp que o golpista publicar.',
        },
      ],
    },
    {
      id: 'redes-fase4',
      titulo: '4. Registre o B.O. e Acione a Justiça se Necessário',
      descricao: 'A lei brasileira obriga as plataformas a oferecerem suporte e segurança.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'red-10',
          texto: 'Faça um Boletim de Ocorrência na Delegacia Eletrônica',
          complemento: 'Anexe os prints dos posts e o link do seu perfil para comprovar a invasão de dispositivo (Art. 154-A do Código Penal).',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
        {
          id: 'red-11',
          texto: 'Abra queixa contra a plataforma no Consumidor.gov.br e no PROCON',
          complemento: 'As empresas de redes sociais têm dever legal de dar resposta rápida aos usuários para reaver suas contas (Marco Civil da Internet).',
          link: { label: 'Reclamar no Consumidor.gov.br', url: 'https://www.consumidor.gov.br' },
        },
        {
          id: 'red-12',
          texto: 'Se a rede não devolver a conta: Procure o Juizado Especial Cível (JEC)',
          complemento: 'No JEC você não precisa pagar advogado para causas de pequeno valor e pode conseguir uma ordem judicial rápida para a plataforma devolver sua conta.',
        },
      ],
    },
  ],

  // 6. PERDI ACESSO A UMA CONTA / GOOGLE / APPLE / GOV.BR
  conta: [
    {
      id: 'conta-fase1',
      titulo: '1. Recuperação Oficial de Identidade',
      descricao: 'Use os caminhos oficiais criados pelas próprias empresas para recuperar o acesso.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'cnt-1',
          texto: 'Para Conta Google (Gmail/YouTube): Acesse accounts.google.com/signin/recovery',
          complemento: 'Tente fazer o processo usando um computador, celular e rede Wi-Fi que você usava sempre. A inteligência do Google reconhece seu aparelho de costume.',
          link: { label: 'Página de Recuperação de Conta Google', url: 'https://accounts.google.com/signin/recovery' },
        },
        {
          id: 'cnt-2',
          texto: 'Para Conta Apple (iPhone/iCloud): Acesse iforgot.apple.com',
          complemento: 'Use o aplicativo "Suporte Apple" no aparelho de um familiar ou siga os passos no site oficial iforgot.apple.com.',
          link: { label: 'Recuperar ID Apple no iForgot', url: 'https://iforgot.apple.com' },
        },
        {
          id: 'cnt-3',
          texto: 'Para Conta Gov.br: Use o Reconhecimento Facial no aplicativo de celular',
          complemento: 'Abra o app gov.br no smartphone e faça a leitura do seu rosto. O sistema cruza com a foto da sua CNH ou Título de Eleitor para resetar sua senha com segurança.',
        },
      ],
    },
    {
      id: 'conta-fase2',
      titulo: '2. Desconecte Invasores e Remova Acessos Estranhos',
      descricao: 'Expulse qualquer pessoa que esteja conectada sem sua autorização.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'cnt-4',
          texto: 'Clique em "Desconectar de todos os outros aparelhos"',
          complemento: 'Assim que conseguir entrar, vá no painel de segurança e encerre todas as sessões ativas em celulares ou navegadores desconhecidos.',
        },
        {
          id: 'cnt-5',
          texto: 'Confira seu e-mail e telefone de recuperação cadastrados',
          complemento: 'Veja se o golpista não colocou o e-mail ou número de telefone dele como opção de recuperação. Apague dados estranhos e coloque os seus.',
        },
        {
          id: 'cnt-6',
          texto: 'Gere "Códigos de Backup" e anote em um papel guardado em casa',
          complemento: 'Esses códigos de 8 números servem como chave mestra para você entrar na conta mesmo se perder o celular.',
        },
      ],
    },
    {
      id: 'conta-fase3',
      titulo: '3. Evite Danos Financeiros e Governamentais',
      descricao: 'Verifique se ninguém tentou usar seus dados para abrir contas ou pedir empréstimos.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'cnt-7',
          texto: 'Se a conta invadida foi o Gov.br: Consulte o Registrato do Banco Central',
          complemento: 'Com a conta Gov.br, golpistas podem tentar abrir contas digitais em bancos. Entre no Registrato e confira o relatório de contas e empréstimos.',
          link: { label: 'Consultar Registrato do Banco Central', url: 'https://registrato.bcb.gov.br' },
        },
        {
          id: 'cnt-8',
          texto: 'Confira a Receita Federal (e-CAC) e o Meu INSS',
          complemento: 'Veja se ninguém alterou seus dados cadastrais, conta bancária de restituição do Imposto de Renda ou pedidos de benefícios.',
        },
        {
          id: 'cnt-9',
          texto: 'Confira se não criaram regras de encaminhamento no seu e-mail',
          complemento: 'No Gmail/Outlook, vá em Configurações > Filtros e veja se o invasor não programou o e-mail para desviar mensagens de bancos para a lixeira.',
        },
      ],
    },
    {
      id: 'conta-fase4',
      titulo: '4. Ative a Verificação em Duas Etapas e Faça o B.O.',
      descricao: 'Coloque um cadeado digital impenetrável na sua conta.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'cnt-10',
          texto: 'Ative a confirmação em duas etapas usando um Aplicativo Autenticador',
          complemento: 'Baixe o Google Authenticator ou Microsoft Authenticator na loja de aplicativos. É muito mais seguro do que receber códigos por SMS.',
        },
        {
          id: 'cnt-11',
          texto: 'Troque as senhas dos sites em que você usava "Entrar com Google/Apple"',
          complemento: 'Mude as senhas dos aplicativos e lojas virtuais que estavam vinculados à sua conta principal.',
        },
        {
          id: 'cnt-12',
          texto: 'Faça um Boletim de Ocorrência na Delegacia Eletrônica',
          complemento: 'O B.O. te protege legalmente caso tentem contrair dívidas ou usar seus dados para cometer crimes.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
  ],

  // 7. FALSA VAGA DE EMPREGO / TAREFAS PAGAS / FALSO RECRUTADOR
  emprego: [
    {
      id: 'emprego-fase1',
      titulo: '1. Não Pague Nada e Bloqueie os Contatos',
      descricao: 'Lembre-se: NENHUMA empresa séria cobra dinheiro para te dar um emprego.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'emp-1',
          texto: 'NUNCA pague taxas de inscrição, uniforme, exame médico ou "liberação de tarefas"',
          complemento: 'A lei brasileira (CLT) proíbe qualquer cobrança do candidato para contratação ou exame admissional. Golpes de "tarefas de curtidas" no Telegram ou WhatsApp sempre pedem depósitos para liberar saques falsos.',
        },
        {
          id: 'emp-2',
          texto: 'Se você fez algum pagamento por Pix ou cartão: Acione seu banco imediatamente',
          complemento: 'Peça a abertura do MED para devolução do Pix ou conteste a compra no cartão de crédito por fraude.',
        },
        {
          id: 'emp-3',
          texto: 'Bloqueie os supostos recrutadores e saia dos grupos de mensagens',
          complemento: 'Corte todo o contato no WhatsApp ou Telegram e não caia em promessas de devolução se você fizer novos depósitos.',
        },
      ],
    },
    {
      id: 'emprego-fase2',
      titulo: '2. Proteja seus Documentos e seu Nome',
      descricao: 'Evite que usem fotos do seu RG ou CNH para abrir contas falsas.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'emp-4',
          texto: 'Enviou fotos de documentos ou selfie segurando documento? Faça B.O. Preventivo',
          complemento: 'Registre um Boletim de Ocorrência relatando que enviou fotos de documentos acreditando ser uma vaga de emprego. Isso anula fraudes futuras feitas no seu nome.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
        {
          id: 'emp-5',
          texto: 'Monitore seu CPF no Registrato do Banco Central gratuitamente',
          complemento: 'Consulte o relatório de contas (CCS) e empréstimos (SCR) para ter certeza de que nenhuma conta digital foi aberta com seus documentos.',
          link: { label: 'Consultar Registrato do Banco Central', url: 'https://registrato.bcb.gov.br' },
        },
        {
          id: 'emp-6',
          texto: 'Cadastre alerta de documentos nos órgãos de crédito (Serasa / SPC)',
          complemento: 'Ative o alerta para ser notificado sempre que alguma loja ou banco consultar seu CPF para conceder crédito.',
          link: { label: 'Monitorar CPF no Serasa', url: 'https://www.serasa.com.br' },
        },
      ],
    },
    {
      id: 'emprego-fase3',
      titulo: '3. Guarde Provas e Denuncie a Falsa Vaga',
      descricao: 'Ajude a derrubar o golpe para que outras pessoas desempregadas não caiam.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'emp-7',
          texto: 'Tire prints do anúncio de emprego, das conversas e dos comprovantes de Pix',
          complemento: 'Guarde links de sites, perfis no LinkedIn/Facebook e números de telefone dos fraudadores.',
        },
        {
          id: 'emp-8',
          texto: 'Denuncie o anúncio no site onde você encontrou a vaga',
          complemento: 'Use o botão "Denunciar" no LinkedIn, InfoJobs, Catho, Facebook ou Instagram para que a publicação seja excluída.',
        },
        {
          id: 'emp-9',
          texto: 'Denuncie no Ministério Público do Trabalho (MPT)',
          complemento: 'O MPT recebe denúncias anônimas de falsas vagas e abusos cometidos contra trabalhadores.',
          link: { label: 'Canal de Denúncias do Ministério Público do Trabalho', url: 'https://mpt.mp.br/pgt/servicos/servico-denuncie' },
        },
      ],
    },
    {
      id: 'emprego-fase4',
      titulo: '4. Dicas de Ouro para Vagas Futuras',
      descricao: 'Como identificar vagas seguras de verdade daqui para frente.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'emp-10',
          texto: 'Monitore seu CPF com frequência nos próximos meses',
          complemento: 'Acompanhe as movimentações no Registrato do Banco Central para garantir total tranquilidade.',
        },
        {
          id: 'emp-11',
          texto: 'Desconfie de processos seletivos apenas por mensagens de texto com salários altos',
          complemento: 'Empresas idôneas fazem entrevistas por vídeo ou presenciais e usam e-mails corporativos (@empresa.com.br), nunca @gmail.com ou @hotmail.com.',
        },
        {
          id: 'emp-12',
          texto: 'Denuncie a empresa de fachada no Consumidor.gov.br e no PROCON',
          complemento: 'Isso ajuda as autoridades a rastrear os CNPJs e contas bancárias fraudulentas.',
          link: { label: 'Portal Nacional Consumidor.gov.br', url: 'https://www.consumidor.gov.br' },
        },
      ],
    },
  ],

  // 8. DEEPFAKE / CLONAGEM DE VOZ / USO INDEVIDO DE IMAGEM / EXTORSÃO
  deepfake: [
    {
      id: 'deepfake-fase1',
      titulo: '1. Não Pague Chantagens e Confirme com a Família',
      descricao: 'Não se desespere. Chantagistas usam o susto para tirar dinheiro rápido.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'dp-1',
          texto: 'NUNCA pague nenhum valor exigido por chantagistas',
          complemento: 'Pagar não garante que eles vão apagar o conteúdo. Ao pagar, o criminoso percebe que você tem dinheiro e passa a exigir quantias cada vez maiores.',
        },
        {
          id: 'dp-2',
          texto: 'Recebeu áudio ou ligação de familiar pedindo dinheiro urgente? Desligue e ligue de volta',
          complemento: 'Golpistas usam Inteligência Artificial para imitar a voz de parentes. Desligue e ligue para o número habitual da pessoa ou faça uma pergunta secreta de família que só ela sabe responder.',
        },
        {
          id: 'dp-3',
          texto: 'Mantenha a calma e pare de responder ao chantagista',
          complemento: 'Não ameace nem demonstre desespero. Deixe de responder enquanto você reúne as provas para a polícia.',
        },
      ],
    },
    {
      id: 'deepfake-fase2',
      titulo: '2. Guarde Provas sem Apagar Nada',
      descricao: 'Os arquivos originais e fotos de tela são a prova fundamental do crime.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'dp-4',
          texto: 'NÃO apague as mensagens, áudios, fotos ou vídeos recebidos',
          complemento: 'Esses arquivos contêm informações técnicas (metadados) que os peritos da polícia usam para comprovar que a mídia foi manipulada por IA e descobrir o autor.',
        },
        {
          id: 'dp-5',
          texto: 'Tire prints completos mostrando número, data, hora e mensagens',
          complemento: 'Capture a tela inteira com o número de quem mandou, o @ do perfil nas redes e a chave Pix que pediram para transferência.',
        },
        {
          id: 'dp-6',
          texto: 'Salve os vídeos e áudios originais em um pen drive ou nuvem segura',
          complemento: 'Guarde os arquivos sem edição. Se possível, faça uma Ata Notarial em cartório ou use ferramentas digitais de preservação de provas.',
        },
      ],
    },
    {
      id: 'deepfake-fase3',
      titulo: '3. Exija a Remoção Imediata nas Redes Sociais',
      descricao: 'A lei brasileira exige que conteúdos íntimos ou montagens sejam apagados rapidamente.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'dp-7',
          texto: 'Denuncie o conteúdo na rede social (Instagram, TikTok, YouTube, WhatsApp)',
          complemento: 'No caso de montagens íntimas ou deepfakes de nudez, a lei brasileira (Art. 21 do Marco Civil da Internet) obriga as plataformas a removerem o conteúdo na hora após seu aviso.',
        },
        {
          id: 'dp-8',
          texto: 'Faça uma denúncia na SaferNet Brasil',
          complemento: 'A SaferNet é uma instituição que ajuda a catalogar e remover crimes digitais e violações de direitos humanos na internet.',
          link: { label: 'Canal de Denúncias da SaferNet Brasil', url: 'https://new.safernet.org.br/denuncie' },
        },
        {
          id: 'dp-9',
          texto: 'Use as ferramentas mundiais de bloqueio de imagens íntimas (TakeItDown / StopNCII)',
          complemento: 'Para menores de 18 anos, use o Take It Down. Para adultos, use o StopNCII.org. Elas criam um código seguro que impede a foto ou vídeo de ser postado na maioria das redes sociais.',
          link: { label: 'Take It Down (Menores de 18 anos)', url: 'https://takeitdown.nii.org' },
        },
      ],
    },
    {
      id: 'deepfake-fase4',
      titulo: '4. Registre o Crime na Delegacia Especializada',
      descricao: 'Crimes com Inteligência Artificial e extorsão são punidos severamente pela lei.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'dp-10',
          texto: 'Registre Boletim de Ocorrência na Delegacia de Crimes Cibernéticos (DRCI)',
          complemento: 'O crime pode ser enquadrado como Extorsão (Art. 158 do CP), Pornografia Falsa Não Consentida (Art. 218-C do CP) ou Crimes contra a Honra.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
        {
          id: 'dp-11',
          texto: 'Em casos envolvendo violência contra a mulher: Procure a DEAM',
          complemento: 'A Delegacia da Mulher atua com medidas protetivas de urgência da Lei Maria da Penha para conter abusos e perseguições digitais.',
        },
        {
          id: 'dp-12',
          texto: 'Consulte a Defensoria Pública ou advogado para quebra de sigilo do criminoso',
          complemento: 'A Justiça pode obrigar as operadoras e redes sociais a entregarem o endereço de IP e os dados da pessoa que criou o conteúdo falso para que ela pague indenização.',
        },
      ],
    },
  ],

  // 1. PHISHING, SMISHING E VISHING (LIGAÇÕES E LINKS FALSOS)
  phishing: [
    {
      id: 'phishing-fase1',
      titulo: '1. Desconecte e Interrompa o Contato na Hora',
      descricao: 'Corte a comunicação imediatamente e não confirme senhas ou dados pessoais.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'ph-1',
          texto: 'Desligue a ligação ou feche a página/SMS suspeito imediatamente',
          complemento: 'Não continue a conversa e nunca clique em links que prometem "cancelamento urgente de compra" ou "regularização de conta".',
        },
        {
          id: 'ph-2',
          texto: 'NUNCA instale programas de acesso remoto (AnyDesk, TeamViewer, RustDesk)',
          complemento: 'Se você já instalou algum aplicativo a pedido do suposto atendente, desligue o Wi-Fi e os dados móveis agora e desinstale o app.',
        },
        {
          id: 'ph-3',
          texto: 'Atenção ao golpe da falsa central: não ligue de volta no mesmo telefone de imediato',
          complemento: 'Espere pelo menos 10 minutos ou use outro telefone para falar com seu banco de verdade.',
        },
      ],
    },
    {
      id: 'phishing-fase2',
      titulo: '2. Contate seu Banco pelos Canais Oficiais',
      descricao: 'Bloqueie senhas expostas e confira se houve movimentações não autorizadas.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'ph-4',
          texto: 'Ligue para o SAC oficial impresso no verso do seu cartão bancário',
          complemento: 'Solicite o bloqueio preventivo de senhas e cartões caso tenha informado dados sigilosos durante o contato.',
        },
        {
          id: 'ph-5',
          texto: 'Verifique o extrato da sua conta bancária',
          complemento: 'Confira se há saques, transferências Pix ou pagamentos agendados não reconhecidos.',
        },
        {
          id: 'ph-6',
          texto: 'Caso tenha ocorrido Pix fraudulento, solicite o acionamento imediato do MED',
          complemento: 'O Mecanismo Especial de Devolução (MED) deve ser pedido nas primeiras horas após o golpe.',
        },
      ],
    },
    {
      id: 'phishing-fase3',
      titulo: '3. Registre Provas e Faça o Boletim de Ocorrência',
      descricao: 'Guarde todas as evidências para comprovar a fraude e respaldar o ressarcimento.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'ph-7',
          texto: 'Tire prints do histórico de chamadas, SMS ou e-mail recebido',
          complemento: 'Guarde o cabeçalho completo, o número de telefone de origem e os links falsos visitados.',
        },
        {
          id: 'ph-8',
          texto: 'Registre Boletim de Ocorrência na Delegacia Eletrônica',
          complemento: 'Classifique a ocorrência como Estelionato Eletrônico. Guarde o protocolo oficial para apresentar ao banco.',
          link: { label: 'Acessar Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
    {
      id: 'phishing-fase4',
      titulo: '4. Troque Senhas e Ative Autenticação em Duas Etapas',
      descricao: 'Proteja suas contas e dispositivos contra novos acessos indevidos.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'ph-9',
          texto: 'Redefina as senhas dos seus bancos e e-mails de recuperação',
          complemento: 'Crie senhas longas e fortes com letras, números e símbolos.',
        },
        {
          id: 'ph-10',
          texto: 'Ative a autenticação em duas etapas por aplicativo autenticador',
          complemento: 'Prefira apps autenticadores (Google Authenticator ou Microsoft Authenticator) em vez de SMS.',
        },
      ],
    },
  ],

  // 5. FALSOS INVESTIMENTOS E PIRÂMIDES FINANCEIRAS
  investimentos: [
    {
      id: 'invest-fase1',
      titulo: '1. Interrompa Aportes e Não Pague Taxas de "Desbloqueio"',
      descricao: 'Corte transferências imediatamente: golpistas sempre inventam novas taxas para liberar saques.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'inv-1',
          texto: 'NUNCA pague taxas extras de "IOF", "custódia" ou "desbloqueio de saldo"',
          complemento: 'Em pirâmides e plataformas falsas, essas taxas são pretextos para roubar ainda mais dinheiro. O saldo que você vê na tela é fictício e manipulado pelos criminosos.',
        },
        {
          id: 'inv-2',
          texto: 'Cancele transferências agendadas ou compras recorrentes no seu banco',
          complemento: 'Se você cadastrou cartão de crédito na plataforma, bloqueie o cartão imediatamente pelo aplicativo do banco para evitar cobranças futuras.',
        },
        {
          id: 'inv-3',
          texto: 'Tente contestar o Pix ou pagamento no banco onde foi realizada a transferência',
          complemento: 'Contate o SAC e Ouvidoria do seu banco relatando fraude financeira e solicite o bloqueio cautelar da conta beneficiária.',
        },
      ],
    },
    {
      id: 'invest-fase2',
      titulo: '2. Preserve Todas as Provas Digitais do Golpe',
      descricao: 'Documente chats, saldos falsos, comprovantes e links da plataforma.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'inv-4',
          texto: 'Tire prints de todas as conversas com os "assessores" ou recrutadores',
          complemento: 'Salve mensagens de WhatsApp, Telegram, áudios e promessas de retorno garantido. Não delete o chat nem bloqueie antes de registrar tudo.',
        },
        {
          id: 'inv-5',
          texto: 'Salve todos os comprovantes de depósitos e transferências Pix',
          complemento: 'Guarde os comprovantes com chaves Pix, nomes dos recebedores, CPFs/CNPJs e bancos de destino.',
        },
        {
          id: 'inv-6',
          texto: 'Anote o endereço completo do site da plataforma e tire prints da tela de login e extrato',
          complemento: 'Essas informações ajudam a polícia e a CVM a derrubarem o site e identificarem os operadores.',
        },
      ],
    },
    {
      id: 'invest-fase3',
      titulo: '3. Registre Denúncia na CVM e Boletim de Ocorrência',
      descricao: 'Acione os órgãos reguladores e as autoridades policiais especializadas.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'inv-7',
          texto: 'Denuncie a empresa no portal da CVM (Comissão de Valores Mobiliários)',
          complemento: 'A CVM investiga esquemas ilegais de investimentos e atua para emitir alertas e multar infratores.',
          link: { label: 'Canal de Denúncias da CVM', url: 'https://www.gov.br/cvm/pt-br/canais_atendimento/consultas-reclamacoes-denuncias' },
        },
        {
          id: 'inv-8',
          texto: 'Faça um Boletim de Ocorrência por Estelionato e Crime contra a Economia Popular',
          complemento: 'Pirâmides financeiras são enquadradas na Lei 1.521/1951 e no Art. 171 do Código Penal. Anexe todos os comprovantes ao B.O.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
    {
      id: 'invest-fase4',
      titulo: '4. Proteja seus Dados Pessoais e Alerte Outras Pessoas',
      descricao: 'Impeça que seus documentos sejam usados em novas fraudes.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'inv-9',
          texto: 'Se enviou foto do documento (RG/CPF) para a plataforma, monitore seu CPF no Registrato',
          complemento: 'Consulte o Registrato do Banco Central para verificar se não abriram contas ou solicitaram empréstimos no seu nome.',
          link: { label: 'Acessar o Registrato do Banco Central', url: 'https://registrato.bcb.gov.br' },
        },
        {
          id: 'inv-10',
          texto: 'Alerte amigos e familiares para que não façam aportes na mesma plataforma',
          complemento: 'Muitas vítimas acabam indicando parentes antes de perceberem a fraude. Avise-os com urgência.',
        },
      ],
    },
  ],

  // 7. LOJAS VIRTUAIS FALSAS E COMPRAS NÃO ENTREGUES
  ecommerce: [
    {
      id: 'ecom-fase1',
      titulo: '1. Conteste a Compra no seu Banco ou Cartão Imediatamente',
      descricao: 'Agir rápido aumenta as chances de cancelar a cobrança e reaver o dinheiro.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'ec-1',
          texto: 'Se pagou com Cartão de Crédito: Peça o Chargeback (Cancelamento por Fraude)',
          complemento: 'Abra o app do seu cartão ou ligue no SAC e informe: "Fiz uma compra em um site falso e caí em um golpe. Solicito a contestação da compra por fraude imediatamente".',
        },
        {
          id: 'ec-2',
          texto: 'Se pagou com Pix: Acione o Mecanismo Especial de Devolução (MED)',
          complemento: 'Entre em contato com o banco nas primeiras horas. O banco emitirá alerta ao banco receptor para tentar bloquear os valores.',
        },
        {
          id: 'ec-3',
          texto: 'Se digitou os dados do cartão de crédito no site falso: Cancele o cartão agora',
          complemento: 'Lojas falsas costumam clonar os números do cartão para fazer compras futuras. Bloqueie o cartão e peça uma nova via com novo código de segurança.',
        },
      ],
    },
    {
      id: 'ecom-fase2',
      titulo: '2. Salve Todas as Evidências do Golpe',
      descricao: 'Guarde prints do site, ofertas, comprovantes e conversas para comprovar a fraude.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'ec-4',
          texto: 'Tire prints da página do produto, do carrinho e do comprovante de pagamento',
          complemento: 'Capture o endereço completo da loja na barra de navegação (URL) e eventuais e-mails de confirmação recebidos.',
        },
        {
          id: 'ec-5',
          texto: 'Guarde os dados de contato e o CNPJ anunciado no rodapé da loja falsa',
          complemento: 'Golpistas costumam roubar CNPJ de empresas honestas. Guarde o registro para demonstrar o estelionato à polícia.',
        },
      ],
    },
    {
      id: 'ecom-fase3',
      titulo: '3. Registre Boletim de Ocorrência e Denuncie no Procon',
      descricao: 'Formalize a denúncia para respaldar a devolução e alertar outros consumidores.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'ec-6',
          texto: 'Faça o Boletim de Ocorrência pela Delegacia Eletrônica',
          complemento: 'Registre o B.O. de Estelionato Eletrônico. O comprovante do B.O. é frequentemente exigido pelas operadoras de cartão para concluir o estorno.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
        {
          id: 'ec-7',
          texto: 'Registre queixa no portal Consumidor.gov.br e no Reclame Aqui',
          complemento: 'Ajude a alertar outros compradores e a documentar a atuação do intermediador de pagamentos.',
          link: { label: 'Portal Consumidor.gov.br', url: 'https://www.consumidor.gov.br' },
        },
      ],
    },
    {
      id: 'ecom-fase4',
      titulo: '4. Denuncie o Anúncio e a Página na Rede Social',
      descricao: 'Evite que o anúncio enganoso continue circulando para outras pessoas.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'ec-8',
          texto: 'Denuncie a conta ou anúncio falso na rede social onde encontrou o link',
          complemento: 'No Instagram, Facebook, TikTok ou Google, clique nos três pontinhos e selecione "Denunciar" → "Golpe ou Fraude".',
        },
        {
          id: 'ec-9',
          texto: 'Ative o uso exclusivo de cartões virtuais temporários para compras online',
          complemento: 'Em compras futuras, nunca use o número do cartão físico. Gere um cartão virtual de uso único que expira após a compra.',
        },
      ],
    },
  ],

  // 8. FALSIFICAÇÃO DE ÓRGÃOS PÚBLICOS (INSS, RECEITA FEDERAL, GOV.BR)
  'orgaos-publicos': [
    {
      id: 'orgao-fase1',
      titulo: '1. Não Pague Guias Recebidas e Corte o Contato',
      descricao: 'Órgãos públicos nunca exigem transferências imediatas por Pix ou telefone.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'op-1',
          texto: 'NUNCA pague taxas ou multas recebidas por SMS, WhatsApp ou e-mail',
          complemento: 'A Receita Federal, o INSS e o Poder Judiciário nunca mandam Pix ou links com chave bancária para "regularizar CPF" ou "liberar aposentadoria".',
        },
        {
          id: 'op-2',
          texto: 'Não forneça senhas, códigos SMS ou fotos de documentos para o atendente',
          complemento: 'Mesmo que o interlocutor saiba seus dados pessoais (nome, CPF, endereço), isso não prova que ele é servidor público. Desligue a chamada.',
        },
      ],
    },
    {
      id: 'orgao-fase2',
      titulo: '2. Acesse os Portais Oficiais (.gov.br) por Conta Própria',
      descricao: 'Verifique a real situação cadastral diretamente na fonte oficial.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'op-3',
          texto: 'Para aposentadorias e benefícios: acesse o app oficial "Meu INSS"',
          complemento: 'Verifique extratos e solicitações no app oficial ou ligue diretamente para a Central Oficial do INSS pelo número 135.',
          link: { label: 'Portal Oficial Meu INSS', url: 'https://meu.inss.gov.br' },
        },
        {
          id: 'op-4',
          texto: 'Para pendências fiscais ou CPF: acesse o portal e-CAC da Receita Federal',
          complemento: 'Consulte a situação do seu CPF de forma gratuita e segura diretamente no site oficial da Receita Federal.',
          link: { label: 'Portal Oficial e-CAC Receita Federal', url: 'https://cav.receita.fazenda.gov.br' },
        },
      ],
    },
    {
      id: 'orgao-fase3',
      titulo: '3. Registre Boletim de Ocorrência por Falsa Identidade',
      descricao: 'Preserve prints das mensagens fraudulentas para instruir a investigação policial.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'op-5',
          texto: 'Tire prints da mensagem, do remetente e do falso documento recebido',
          complemento: 'Guarde todas as mensagens antes de bloquear o contato do golpista.',
        },
        {
          id: 'op-6',
          texto: 'Registre Boletim de Ocorrência na Delegacia Eletrônica',
          complemento: 'O crime se enquadra em Falsa Identidade (Art. 307 do CP) e Estelionato Eletrônico.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
    {
      id: 'orgao-fase4',
      titulo: '4. Reforce a Segurança da sua Conta Gov.br',
      descricao: 'Proteja seu login único que dá acesso a benefícios, Receita e saúde.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'op-7',
          texto: 'Troque a senha da sua conta Gov.br e eleve para nível Prata ou Ouro',
          complemento: 'Níveis Prata e Ouro exigem validação facial ou bancária, dificultando invasões por golpistas.',
        },
        {
          id: 'op-8',
          texto: 'Ative o bloqueio de empréstimos consignados no Meu INSS',
          complemento: 'No app Meu INSS, utilize a função "Bloqueio/Desbloqueio de Benefício para Empréstimo" para impedir que criminosos façam consignados no seu nome.',
        },
      ],
    },
  ],

  // 9. QR CODES MALICIOSOS (QUISHING)
  qrcode: [
    {
      id: 'qr-fase1',
      titulo: '1. Feche o Navegador e Não Autorize Pagamentos',
      descricao: 'Interrompa qualquer transação aberta após a leitura do código suspeito.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'qr-1',
          texto: 'Feche imediatamente a aba do navegador aberta pelo QR Code',
          complemento: 'Não digite senhas, dados de cartão ou códigos de verificação em páginas abertas por QR Codes de procedência duvidosa.',
        },
        {
          id: 'qr-2',
          texto: 'Se houve download de arquivo automático (.apk ou .exe): delete sem abrir',
          complemento: 'Acesse a pasta "Downloads" do celular ou computador e exclua qualquer arquivo recente baixado sem sua autorização.',
        },
      ],
    },
    {
      id: 'qr-fase2',
      titulo: '2. Verifique Extratos Bancários e Sessões Abertas',
      descricao: 'Confira se houve movimentações e limpe dados temporários do navegador.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'qr-3',
          texto: 'Abra o app do seu banco de forma independente e confira o extrato',
          complemento: 'Veja se alguma transferência Pix foi concluída. Se foi, solicite a abertura de chamado no SAC do banco para contestação (MED).',
        },
        {
          id: 'qr-4',
          texto: 'Limpe o histórico, cache e cookies do navegador do celular',
          complemento: 'Nas configurações do Chrome/Safari, limpe os dados de navegação para fechar conexões com servidores maliciosos.',
        },
      ],
    },
    {
      id: 'qr-fase3',
      titulo: '3. Alerte o Estabelecimento Físico e Guarde Evidências',
      descricao: 'Evite que outras pessoas caiam no mesmo adesivo fraudulento.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'qr-5',
          texto: 'Alerte o gerente ou funcionários do local imediatamente',
          complemento: 'Se o QR code estava colado sobre o cardápio, na mesa de restaurante ou totem de estacionamento, peça para removerem o adesivo criminoso.',
        },
        {
          id: 'qr-6',
          texto: 'Tire uma foto do QR code adulterado e anote o link para onde ele apontava',
          complemento: 'Esses dados servem de prova para investigações policiais e estornos bancários.',
        },
      ],
    },
    {
      id: 'qr-fase4',
      titulo: '4. Configure seu Leitor de QR Code com Segurança',
      descricao: 'Previna redirecionamentos automáticos em leituras futuras.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'qr-7',
          texto: 'Desative a opção "Abrir links automaticamente" no app de câmera/QR Code',
          complemento: 'Configure o aparelho para sempre exibir o link completo na tela e exigir seu toque antes de abrir qualquer página.',
        },
        {
          id: 'qr-8',
          texto: 'Verifique fisicamente qualquer QR code antes de escanear',
          complemento: 'Passe o dedo sobre a placa para checar se não há um adesivo colado por cima do código original.',
        },
      ],
    },
  ],

  // 11. FAKE NEWS, DESINFORMAÇÃO E FALSOS ALERTAS (BÔNUS)
  'fake-news': [
    {
      id: 'fn-fase1',
      titulo: '1. Interrompa a Corrente e Não Repasse o Conteúdo',
      descricao: 'A primeira medida contra a desinformação é quebrar a cadeia de compartilhamento.',
      cor: 'text-red-700',
      corBg: 'bg-red-50',
      corBorda: 'border-red-200',
      corNum: 'bg-brand-red',
      itens: [
        {
          id: 'fn-1',
          texto: 'Não compartilhe a mensagem em grupos ou redes sociais, nem para "alertar"',
          complemento: 'Mesmo mensagens compartilhadas com boas intenções espalham pânico e impulsionam o engajamento dos criadores do boato.',
        },
        {
          id: 'fn-2',
          texto: 'Se você já compartilhou: apague a mensagem para todos ou publique um desmentido',
          complemento: 'Escreva de forma simples no grupo: "Pessoal, conferi a informação e ela é falsa. Por favor, não repassem".',
        },
        {
          id: 'fn-3',
          texto: 'NUNCA clique em links incluídos na mensagem alarmista',
          complemento: 'Frequentemente, boatos sobre "benefícios extras", "saques esquecidos" ou "falsas leis" escondem links que roubam senhas ou instalam vírus.',
        },
      ],
    },
    {
      id: 'fn-fase2',
      titulo: '2. Cheque em Agências Especializadas de Fact-Checking',
      descricao: 'Confira se a notícia já foi investigada e desmentida por profissionais.',
      cor: 'text-amber-700',
      corBg: 'bg-amber-50',
      corBorda: 'border-amber-200',
      corNum: 'bg-brand-amber',
      itens: [
        {
          id: 'fn-4',
          texto: 'Pesquise o tema no Google acompanhado de "fato ou fake" ou "é verdade"',
          complemento: 'Os principais boatos virais do Brasil são desmentidos em poucas horas por agências sérias de jornalismo investigativo.',
        },
        {
          id: 'fn-5',
          texto: 'Consulte os portais de checagem confiáveis',
          complemento: 'Acesse Agência Lupa, Aos Fatos, Fato ou Fake (G1), UOL Confere ou o portal oficial de boatos do Governo Federal (gov.br/brasilcontrafake).',
          link: { label: 'Acessar Brasil Contra Fake (Gov.br)', url: 'https://www.gov.br/secom/pt-br/assuntos/brasilcontrafake' },
        },
      ],
    },
    {
      id: 'fn-fase3',
      titulo: '3. Preserve Provas (caso o boato atinja você ou seu negócio)',
      descricao: 'Se a notícia falsa difama sua honra, imagem ou comércio, registre as provas legalmente.',
      cor: 'text-cyan-800',
      corBg: 'bg-cyan-50/70',
      corBorda: 'border-cyan-200',
      corNum: 'bg-cyan-600',
      itens: [
        {
          id: 'fn-6',
          texto: 'Tire prints completos com data, horário, número do remetente e link da postagem',
          complemento: 'Capture o perfil exato de quem publicou e os comentários. Não edite as imagens para não perder validade jurídica.',
        },
        {
          id: 'fn-7',
          texto: 'Denuncie a publicação dentro da própria rede social',
          complemento: 'No WhatsApp, Instagram, Facebook ou X, use a ferramenta de denúncia selecionando "Informação falsa" ou "Assédio/Difamação".',
        },
      ],
    },
    {
      id: 'fn-fase4',
      titulo: '4. Medidas Jurídicas e Nota de Esclarecimento',
      descricao: 'Restabeleça a verdade dos fatos e responsabilize civil e penalmente os autores.',
      cor: 'text-teal-700',
      corBg: 'bg-teal-50',
      corBorda: 'border-teal-200',
      corNum: 'bg-brand-green',
      itens: [
        {
          id: 'fn-8',
          texto: 'Emita uma nota de esclarecimento oficial e objetiva',
          complemento: 'Publique em seus canais oficiais um comunicado curto explicando os fatos comprovados, com links para fontes oficiais.',
        },
        {
          id: 'fn-9',
          texto: 'Registre Boletim de Ocorrência por Calúnia, Difamação ou Injúria',
          complemento: 'A propagação de mentiras que lesam pessoas ou empresas configura crime contra a honra (Artigos 138 a 140 do Código Penal) e estelionato.',
          link: { label: 'Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
        },
      ],
    },
  ],
}

// Checklist Padrão / Emergencial Geral (para quando nenhuma situação específica for selecionada)
export const fasesPadrao: FaseContencao[] = [
  {
    id: 'financeiro',
    titulo: '1. Bloqueie o Dinheiro e Contas Imediatamente',
    descricao: 'Impeça que novos pagamentos ou saques aconteçam na sua conta.',
    cor: 'text-red-700',
    corBg: 'bg-red-50',
    corBorda: 'border-red-200',
    corNum: 'bg-brand-red',
    itens: [
      {
        id: 'f1',
        texto: 'Ligue para o seu banco e peça o bloqueio imediato do app e dos cartões',
        complemento: 'Use o número de SAC oficial do verso do cartão a partir de outro telefone confiável.',
      },
      {
        id: 'f2',
        texto: 'Acione o Mecanismo de Devolução do Pix (MED) no seu banco',
        complemento: 'Clique sobre a transação no extrato do app para contestar ou solicite ao atendente do banco.',
      },
      {
        id: 'f3',
        texto: 'Cancele pagamentos agendados e boletos futuros',
        complemento: 'Confira no aplicativo se há transferências futuras programadas e exclua-as na hora.',
      },
      {
        id: 'f4',
        texto: 'Anote valores, datas e dados de quem recebeu o dinheiro',
        complemento: 'Guarde os comprovantes completos com os códigos de identificação das transações.',
      },
    ],
  },
  {
    id: 'provas',
    titulo: '2. Guarde Todas as Provas',
    descricao: 'Não apague nada: fotos, áudios e mensagens são provas essenciais.',
    cor: 'text-amber-700',
    corBg: 'bg-amber-50',
    corBorda: 'border-amber-200',
    corNum: 'bg-brand-amber',
    itens: [
      {
        id: 'p1',
        texto: 'Tire prints (fotos da tela) de todas as conversas, SMS, e-mails e chamadas',
        complemento: 'Capture o número completo de quem te procurou, dia, horário e o texto integral das mensagens.',
      },
      {
        id: 'p2',
        texto: 'Anote o número de telefone, e-mail e chave Pix do golpista',
        complemento: 'Não apague o contato nem a conversa — a polícia usará esses dados para rastrear os criminosos.',
      },
      {
        id: 'p3',
        texto: 'Salve o link completo dos sites ou perfis falsos visitados',
        complemento: 'Copie o endereço da barra do navegador e anote em um bloco de notas.',
      },
      {
        id: 'p4',
        texto: 'Guarde os dados bancários da conta receptora do golpista',
        complemento: 'Nome completo do favorecido, CPF/CNPJ mascarado, banco de destino e agência/conta.',
      },
    ],
  },
  {
    id: 'bo',
    titulo: '3. Faça o Boletim de Ocorrência pela Internet',
    descricao: 'Registre o caso oficialmente para acionar a polícia e fundamentar o ressarcimento.',
    cor: 'text-cyan-800',
    corBg: 'bg-cyan-50/70',
    corBorda: 'border-cyan-200',
    corNum: 'bg-cyan-600',
    itens: [
      {
        id: 'b1',
        texto: 'Registre o Boletim de Ocorrência na Delegacia Eletrônica do seu estado',
        complemento: 'Classifique como Estelionato Eletrônico ou Invasão de Dispositivo. É gratuito e feito direto pelo computador ou celular.',
        link: { label: 'Encontrar Delegacias Eletrônicas por Estado (SaferNet)', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
      },
      {
        id: 'b2',
        texto: 'Envie uma cópia do Boletim de Ocorrência para o seu banco',
        complemento: 'O banco precisa do número do B.O. para dar andamento formal ao pedido de devolução do dinheiro.',
      },
      {
        id: 'b3',
        texto: 'Denuncie a fraude no Consumidor.gov.br e no PROCON',
        link: { label: 'Portal Nacional Consumidor.gov.br', url: 'https://www.consumidor.gov.br' },
      },
      {
        id: 'b4',
        texto: 'Em caso de golpe bancário ou Pix, registre queixa no Banco Central',
        link: { label: 'Registrar Reclamação no Banco Central', url: 'https://www.bcb.gov.br/meubc/fazerreclamacao' },
      },
    ],
  },
  {
    id: 'recuperacao',
    titulo: '4. Troque Senhas e Avise as Pessoas Próximas',
    descricao: 'Restaure a tranquilidade e impeça que seus contatos sejam enganados.',
    cor: 'text-teal-700',
    corBg: 'bg-teal-50',
    corBorda: 'border-teal-200',
    corNum: 'bg-brand-green',
    itens: [
      {
        id: 'r1',
        texto: 'Troque imediatamente todas as senhas das contas afetadas',
        complemento: 'Crie senhas fortes usando outro aparelho seguro. Misture letras maiúsculas, minúsculas, números e símbolos.',
      },
      {
        id: 'r2',
        texto: 'Ative a Confirmação em Duas Etapas com Aplicativo Autenticador',
        complemento: 'Baixe o Google Authenticator ou Microsoft Authenticator para proteger suas contas sem depender de SMS.',
      },
      {
        id: 'r3',
        texto: 'Desconecte sua conta de todos os outros aparelhos',
        complemento: 'Nas opções de segurança da sua conta, clique em "Encerrar todas as outras sessões abertas".',
      },
      {
        id: 'r4',
        texto: 'Consulte gratuitamente o seu CPF no Registrato do Banco Central',
        complemento: 'Confira se não abriram contas ou empréstimos indevidos no seu nome.',
        link: { label: 'Acessar o Registrato do Banco Central', url: 'https://registrato.bcb.gov.br' },
      },
      {
        id: 'r5',
        texto: 'Avise seus parentes e amigos próximos sobre o ocorrido',
        complemento: 'Para que ninguém transfira dinheiro acreditando ser você pedindo socorro financeiro.',
      },
    ],
  },
]

// Exporta as fases padrão para compatibilidade retroativa
export const fases: FaseContencao[] = fasesPadrao

// Função utilitária para obter o checklist correspondente à situação
export const getFasesPorSituacao = (situacaoId?: string | null): FaseContencao[] => {
  if (!situacaoId) return fasesPadrao
  if (situacaoId === 'ligacao' || situacaoId === 'link') return fasesPorSituacao.phishing || fasesPorSituacao.ligacao
  if (situacaoId === 'rede-social' || situacaoId === 'conta') return fasesPorSituacao['redes-sociais'] || fasesPorSituacao['rede-social']
  return fasesPorSituacao[situacaoId] || fasesPadrao
}



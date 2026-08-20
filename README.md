# 🛡️ Manual de Sobrevivência contra Golpes Digitais e Engenharia Social

> **Trabalho de Conclusão de Curso (TCC)**  
> **Tema:** Cibersegurança Popular, Engenharia Social e Resposta a Incidentes Digitais  
> **Equipe:** Beatriz, Emilly, Jéssica e Beatriz Negrão

---

## 📌 Sobre o Projeto

O **Manual de Sobrevivência Digital** é uma plataforma web interativa, acessível e educativa projetada para capacitar a população geral — incluindo jovens, adultos, idosos e microempreendedores — a identificar, prevenir e reagir diante das principais ameaças cibernéticas da atualidade.

O projeto une rigor técnico com uma linguagem didática, visual e inclusiva, com foco em:
- **Mapeamento dos 10 golpes mais frequentes e danosos** no Brasil.
- **Análise da relação com mega vazamentos de dados** e engenharia social.
- **Guias práticos de contenção e mitigação pós-incidente** (checklist de emergência).
- **Disponibilização pública** para uso por delegacias, prefeituras, escolas e empresas.

---

## 🚀 Tecnologias Utilizadas

- **[React 18](https://react.dev/)**: Biblioteca componentizada para interface reativa e performática.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para robustez e manutenção do código.
- **[Vite](https://vitejs.dev/)**: Bundler ultrarrápido para desenvolvimento e build otimizado.
- **[Tailwind CSS v3](https://tailwindcss.com/)**: Estilização utility-first com Design System personalizado.
- **[React Router DOM v6](https://reactrouter.com/)**: Navegação SPA (Single Page Application) fluida com rotas dinâmicas.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones modernos e leves.
- **Google Fonts (Sora & Inter)**: Tipografia otimizada para legibilidade e acessibilidade.

---

## ✨ O que foi Desenvolvido (Atualizações do Projeto)

### 1. 🏠 Página Inicial (`/`)
- **Hero Section**: Baseada fielmente no layout do projeto, com títulos de alto impacto, canais de ataque (Celular, Computador, Redes sociais, Dinheiro, Dados pessoais) e CTAs de ação rápida.
- **Ilustração Vetorial Nativa em SVG**: Gráficos de dispositivos (celular, notebook, cartões, escudos) leves e sem dependência de imagens externas pesadas.
- **Seção "O que aconteceu?"**: Grid com 8 situações emergenciais interativas com redirecionamento direto para orientações específicas.
- **Faixa de Rodapé Educativa**: Mensagem institucional com link para informações acadêmicas.

### 2. 📚 Catálogo dos 10 Golpes (`/golpes`)
- Listagem dos 10 golpes catalogados no TCC com badges de severidade de risco (**Crítico**, **Alto**, **Médio**).
- **Filtros por Categoria**: *Financeiro*, *Identidade*, *Redes Sociais* e *IA & Tecnologia*.
- Cards interativos com animação de hover e direcionamento para a página detalhada.

### 3. 🎬 Páginas Dinâmicas de Detalhe do Golpe (`/golpes/:slug`)
Página universal modular e reutilizável com foco em conteúdo multimídia:
- **Player de Vídeo Responsivo** (com suporte a vídeos do YouTube e fallback amigável).
- **Linha do Tempo Visual (*StepTimeline*)**: Passo a passo de como o vetor de ataque funciona.
- **Sinais de Alerta (🚩)**: Principais indícios para identificar a fraude.
- **Como se Prevenir (✅)**: Medidas preventivas essenciais.
- **Estatísticas Reais do Cenário Brasileiro**: Dados de impacto sobre cada golpe.
- **CTA de Emergência**: Acesso direto ao checklist caso o usuário tenha caído no golpe.
- **Navegação Entre Módulos**: Botões de anterior/próximo golpe.

#### 📋 Lista dos 10 Módulos Catalogados:
1. Phishing, Smishing e Vishing de Falsas Centrais Bancárias
2. Sequestro de Conta de WhatsApp e Clonagem de Perfil
3. Fraude no Pix e Devoluções Enganosas (MED)
4. Sequestro e Perda de Redes Sociais (Instagram/Facebook/TikTok)
5. Investimentos Falsos e Plataformas de Tarefas (Pirâmides)
6. Falsas Ofertas de Emprego e Vagas Fraudulentas
7. Vendas Falsas em Lojas Virtuais e E-commerce
8. Falsificação de Identidade de Órgãos Públicos (INSS, Receita, Serasa)
9. QR Codes Maliciosos (*Quishing*)
10. Deepfake e Clonagem de Voz por Inteligência Artificial

### 4. 🚨 Fluxo de Emergência — Fui Vítima (`/fui-vitima`)
- **Seletor de Situação Pré-integrado**: Reconhece parâmetros de URL vindos da Home.
- **Checklist Interativo de Resposta a Incidentes em 4 Fases**:
  1. *Contenção Financeira Imediata* (Acionamento do MED, bloqueio cautelar).
  2. *Preservação de Provas* (Captura de prints, históricos, URLs).
  3. *Boletim de Ocorrência e Órgãos Oficiais* (Links diretos para Delegacias Eletrônicas, BACEN, Consumidor.gov).
  4. *Recuperação de Credenciais e Segurança* (Troca de senhas, ativação de 2FA).
- **Barra de Progresso Dinâmica**: Indicador percentual em tempo real das ações concluídas.
- **Recurso de Impressão**: Botão para imprimir ou salvar em PDF o checklist com estilos adaptados para impressão.

### 5. 🛡️ Guia Preventivo — Proteja-se (`/proteja-se`)
- Abas segmentadas por perfil de usuário:
  - **👴 Idosos e Familiares**
  - **👩‍💻 Jovens e Adultos**
  - **🏢 Microempreendedores**
- Top golpes mais frequentes por perfil e checklists de boas práticas de ciber-higiene.

### 6. 👥 Sobre o Projeto (`/sobre`)
- Detalhamento dos objetivos e missão da plataforma.
- **Metodologia das 5 Fases de Execução do TCC**:
  1. *Fase 1*: Levantamento de Dados Primários (BOs e questionários).
  2. *Fase 2*: Análise de Engenharia Social & Vazamentos.
  3. *Fase 3*: Arquitetura de Conteúdo e Soluções.
  4. *Fase 4*: Desenvolvimento da Plataforma Digital.
  5. *Fase 5*: Disseminação e Retorno Comunitário.
- **Divisão de Atribuições da Equipe** (Beatriz, Emilly, Jéssica e Beatriz Negrão).
- Chamada para integração aberta do material em órgãos públicos e instituições privadas.

---

## 🎨 Design System e Identidade Visual

| Token | Cor | Hexadecimal | Finalidade |
|---|---|---|---|
| **Navy Principal** | Azul Escuro | `#0F2547` | Navbar, cabeçalhos, botões neutros |
| **Danger / Alerta** | Vermelho | `#E63946` | Botões de emergência, alertas, risco crítico |
| **Success / Proteção**| Verde Petróleo | `#2A9D8F` | Botões de prevenção, checks, itens seguros |
| **Warning** | Âmbar | `#F4A261` | Avisos moderados, sinais de atenção |
| **Surface** | Cinza Claro | `#F8F9FA` | Fundo de telas e cards |

---

## 📁 Estrutura de Pastas

```
manual-sobrevivencia-digital/
├── public/
│   └── favicon.svg             # Ícone do site (escudo de segurança)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Barra de navegação fixa com menu mobile
│   │   │   └── Footer.tsx      # Rodapé com links e órgãos externos
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Seção principal com ilustração SVG
│   │   │   ├── SituationGrid.tsx # Grade "O que aconteceu?"
│   │   │   └── InfoBanner.tsx  # Faixa informativa inferior
│   │   └── ui/
│   │       ├── AlertList.tsx   # Lista com ícones de perigo ou sucesso
│   │       ├── Badge.tsx       # Badge de nível de risco
│   │       ├── ScamCard.tsx    # Card para o catálogo dos golpes
│   │       ├── SituationCard.tsx # Card para situações emergenciais
│   │       ├── StepTimeline.tsx # Linha do tempo explicativa de funcionamento
│   │       └── VideoEmbed.tsx  # Player de vídeo responsivo com fallback
│   ├── data/
│   │   ├── contencao.ts        # Dados das 4 fases do plano de emergência
│   │   ├── golpes.ts           # Informações detalhadas dos 10 golpes
│   │   └── situacoes.ts        # 8 situações da página inicial
│   ├── pages/
│   │   ├── Home.tsx            # Página inicial
│   │   ├── Golpes.tsx          # Catálogo com filtros
│   │   ├── GolpeDetalhe.tsx    # Detalhe dinâmico por golpe (/golpes/:slug)
│   │   ├── FuiVitima.tsx       # Checklist de emergência interativo
│   │   ├── Proteja.tsx         # Guia preventivo por perfil
│   │   └── Sobre.tsx           # Informações institucionais e equipe
│   ├── types/
│   │   └── index.ts            # Interfaces TypeScript
│   ├── App.tsx                 # Roteamento e layout
│   ├── main.tsx                # Ponto de entrada React
│   └── index.css               # Diretivas do Tailwind e estilos globais
├── index.html                  # HTML base com fontes Google
├── package.json                # Dependências e scripts
├── tailwind.config.js          # Configurações do Tailwind CSS
├── tsconfig.json               # Configurações do TypeScript
└── vite.config.ts              # Configurações do Vite
```

---

## 💻 Passo a Passo para Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina (versão 18 ou superior recomendada).
- Gerenciador de pacotes `npm` (já incluso com o Node.js).

---

### 1. Clonar o repositório ou abrir a pasta
Abra o terminal na pasta do projeto:
```bash
cd manual-sobrevivencia-digital
```

### 2. Instalar as dependências
Execute o comando abaixo para instalar todas as bibliotecas necessárias:
```bash
npm install
```

### 3. Executar o projeto em modo de desenvolvimento
Inicie o servidor local do Vite:
```bash
npm run dev
```

Após executar o comando, o terminal exibirá a URL local:
```
  VITE v5.4.21  ready in ... ms

  ➜  Local:   http://localhost:5173/
```
Abra o link **[http://localhost:5173/](http://localhost:5173/)** no seu navegador.

---

### 4. Gerar a versão final para produção (Build)
Para gerar a versão otimizada pronta para publicação (ex: GitHub Pages ou Vercel):
```bash
npm run build
```
Os arquivos prontos serão gerados na pasta `dist/`.

### 5. Testar a versão de produção localmente
Para testar a versão compilada antes de publicar:
```bash
npm run preview
```

---

## 📄 Licença e Uso Institucional

Projeto desenvolvido para fins estritamente **acadêmicos, sociais e educativos**. É livre para distribuição e divulgação por órgãos públicos, instituições de ensino e empresas para promoção da segurança cibernética e conscientização digital.
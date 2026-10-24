import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Printer, ExternalLink, CheckSquare, Square, AlertCircle, ArrowLeft, RefreshCw, ShieldAlert, PlayCircle } from 'lucide-react'
import { SituationCard } from '../components/ui/SituationCard'
import { VideoEmbed } from '../components/ui/VideoEmbed'
import { situacoes } from '../data/situacoes'
import { getFasesPorSituacao } from '../data/contencao'

// ============================================================================
// CONFIGURAÇÃO DOS VÍDEOS POR CASO/SITUAÇÃO (FUI VÍTIMA)
// ============================================================================
// Ao clicar em cada caso, o vídeo é atualizado condicionalmente.
// Substitua o campo 'url' de cada caso pelo link correspondente do YouTube.
export interface VideoCasoInfo {
  url: string
  titulo: string
  descricao: string
}

export const VIDEOS_POR_SITUACAO: Record<string, VideoCasoInfo> = {
  // Vídeo geral (quando nenhuma opção específica estiver selecionada)
  geral: {
    url: 'https://www.youtube.com/watch?v=placeholder',
    titulo: 'Orientações Gerais: O Que Fazer ao Cair em um Golpe',
    descricao: 'Instruções preliminares importantes para manter a calma, evitar decisões impulsivas e proteger seus dados.',
  },
  // 1. Phishing
  phishing: {
    url: 'https://www.youtube.com/watch?v=placeholder1',
    titulo: '1. Phishing, SMS ou Ligação Falsa (Falsa Central)',
    descricao: 'Como agir caso tenha atendido ligações de supostos bancos, clicado em links falsos ou fornecido senhas por engano.',
  },
  // 2. WhatsApp
  whatsapp: {
    url: 'https://www.youtube.com/watch?v=placeholder2',
    titulo: '2. WhatsApp Invadido ou Clonado',
    descricao: 'Como desconectar invasores pelo WhatsApp Web, recuperar sua conta via código SMS e alertar contatos para evitar novas vítimas.',
  },
  // 3. Pix
  pix: {
    url: 'https://www.youtube.com/watch?v=placeholder3',
    titulo: '3. Golpe do Pix ou Comprovante Falso',
    descricao: 'Como acionar imediatamente o MED (Mecanismo Especial de Devolução) do Banco Central nas primeiras horas para tentar reaver os valores.',
  },
  // 4. Redes Sociais
  'redes-sociais': {
    url: 'https://www.youtube.com/watch?v=placeholder4',
    titulo: '4. Rede Social Invadida ou Roubada (Instagram / TikTok / Facebook)',
    descricao: 'Procedimentos oficiais de recuperação de perfil, revogação de acessos de criminosos e denúncia de contas usurpadas.',
  },
  // 5. Investimentos
  investimentos: {
    url: 'https://www.youtube.com/watch?v=placeholder5',
    titulo: '5. Falso Investimento ou Pirâmide Financeira',
    descricao: 'Instruções urgentes: não pague taxas para liberação de saque, preserve todas as provas e registre queixa formal na CVM e na polícia.',
  },
  // 6. Emprego
  emprego: {
    url: 'https://www.youtube.com/watch?v=placeholder6',
    titulo: '6. Falsa Vaga de Emprego ou Plataforma de Tarefas',
    descricao: 'Como cessar o contato com falsos recrutadores sem pagar "taxas de exame", proteger seus documentos e denunciar o esquema.',
  },
  // 7. E-commerce
  ecommerce: {
    url: 'https://www.youtube.com/watch?v=placeholder7',
    titulo: '7. Loja Virtual Falsa / Comprei e Não Recebi',
    descricao: 'Como acionar o chargeback com a operadora do seu cartão de crédito, cancelar o cartão exposto e registrar no Procon.',
  },
  // 8. Órgãos Públicos
  'orgaos-publicos': {
    url: 'https://www.youtube.com/watch?v=placeholder8',
    titulo: '8. Falso Órgão Público (INSS / Receita Federal / Gov.br)',
    descricao: 'Como verificar pendências diretamente nos portais oficiais .gov.br, blindar sua conta Gov.br e bloquear empréstimos indevidos.',
  },
  // 9. QR Code
  qrcode: {
    url: 'https://www.youtube.com/watch?v=placeholder9',
    titulo: '9. QR Code Malicioso (Quishing)',
    descricao: 'Passos imediatos para fechar páginas maliciosas, verificar extratos bancários e denunciar o código adulterado no local físico.',
  },
  // 10. Deepfake
  deepfake: {
    url: 'https://www.youtube.com/watch?v=placeholder10',
    titulo: '10. Deepfake de Voz ou Imagem com Inteligência Artificial',
    descricao: 'Como registrar provas com fé pública (ata notarial), acionar ferramentas de remoção rápida e denunciar na Delegacia Especializada.',
  },
  // 11. Fake News
  'fake-news': {
    url: 'https://www.youtube.com/watch?v=placeholder11',
    titulo: '11. Fake News, Desinformação e Falsos Alertas (Bônus)',
    descricao: 'Como checar boatos em agências profissionais de fact-checking, quebrar a cadeia de compartilhamento e agir em caso de difamação.',
  },
  // Aliases para compatibilidade retroativa
  ligacao: {
    url: 'https://www.youtube.com/watch?v=placeholder1',
    titulo: '1. Phishing e Ligação Falsa (Falsa Central)',
    descricao: 'Como agir caso tenha conversado com falsos gerentes bancários ou fornecido dados por telefone.',
  },
  link: {
    url: 'https://www.youtube.com/watch?v=placeholder1',
    titulo: '1. Phishing por Link Malicioso ou SMS',
    descricao: 'Passos urgentes de contenção para desinfectar o dispositivo, alterar senhas e revogar permissões.',
  },
  'rede-social': {
    url: 'https://www.youtube.com/watch?v=placeholder4',
    titulo: '4. Rede Social Invadida ou Roubada',
    descricao: 'Procedimentos oficiais para recuperação de conta invadida e denúncia de perfis usurpados.',
  },
  conta: {
    url: 'https://www.youtube.com/watch?v=placeholder4',
    titulo: '4. Perdi Acesso a uma Conta Importante',
    descricao: 'Como restabelecer acesso com autenticação forte, recuperar e-mail de recuperação e proteger dados pessoais.',
  },
}

export const FuiVitima = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedSituacao, setSelectedSituacao] = useState<string | null>(null)
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const checklistRef = useRef<HTMLDivElement>(null)

  // Pre-select from URL param
  useEffect(() => {
    const param = searchParams.get('situacao')
    if (param && situacoes.find((s) => s.id === param)) {
      setSelectedSituacao(param)
    }
  }, [searchParams])

  // Scroll to checklist when situation is selected
  useEffect(() => {
    if (selectedSituacao && checklistRef.current) {
      setTimeout(() => {
        checklistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [selectedSituacao])

  const handleSelectSituacao = (id: string) => {
    if (selectedSituacao === id) {
      setSelectedSituacao(null)
      setSearchParams({})
    } else {
      setSelectedSituacao(id)
      setSearchParams({ situacao: id })
    }
  }

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const handleResetChecklist = () => {
    setChecked(new Set())
  }

  // Get specialized phases based on selected situation
  const currentFases = getFasesPorSituacao(selectedSituacao)
  const currentSituacaoObj = situacoes.find((s) => s.id === selectedSituacao)

  // Vídeo condicional correspondente à opção selecionada (ou geral como fallback)
  const currentVideo = (selectedSituacao && VIDEOS_POR_SITUACAO[selectedSituacao])
    ? VIDEOS_POR_SITUACAO[selectedSituacao]
    : VIDEOS_POR_SITUACAO.geral

  const totalItems = currentFases.reduce((acc, f) => acc + f.itens.length, 0)
  const checkedCurrentCount = currentFases.reduce((acc, f) => {
    return acc + f.itens.filter((item) => checked.has(item.id)).length
  }, 0)
  const progress = totalItems > 0 ? Math.round((checkedCurrentCount / totalItems) * 100) : 0

  const currentDateFormatted = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* =========================================================================
          PRINT-ONLY DOCUMENT HEADER
          Renderiza exclusivamente na folha de impressão A4 com formatação limpa
          ========================================================================= */}
      <div className="hidden print:block text-black p-4 mb-4 border-b-2 border-black">
        <div className="flex items-center justify-between border-b pb-2 mb-3">
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight">Manual de Sobrevivência Digital</h1>
            <p className="text-xs font-semibold text-gray-700">
              Protocolo Emergencial de Resposta a Incidentes & Preservação de Direitos
            </p>
          </div>
          <div className="text-right text-[10px] text-gray-600">
            <p>Gerado em: {currentDateFormatted}</p>
            <p>manualdesobrevivenciadigital.com.br</p>
          </div>
        </div>

        {/* Informações do Incidente Selecionado */}
        <div className="bg-gray-100 p-2.5 rounded border border-gray-300 mb-3 text-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-gray-900">
              INCIDENTE / SITUAÇÃO:{' '}
              <span className="uppercase text-red-700 font-extrabold">
                {currentSituacaoObj ? currentSituacaoObj.label : 'Plano Geral de Contenção e Resposta'}
              </span>
            </span>
            <span className="text-[10px] text-gray-600">Documento Oficial de Registro</span>
          </div>
          <p className="text-[11px] text-gray-700 leading-tight">
            Siga os passos rigorosamente. Preencha os campos abaixo com os números de protocolo para apresentar a bancos,
            delegacias e órgãos reguladores.
          </p>
        </div>

        {/* Quadro de Metadados do Incidente (Preenchimento pela Vítima / Autoridades) */}
        <div className="grid grid-cols-2 gap-2 text-[11px] border border-gray-300 p-2 rounded bg-white mb-2">
          <div>
            <p><span className="font-bold">Nome da Vítima:</span> _________________________________________</p>
            <p className="mt-1.5"><span className="font-bold">CPF:</span> ___________________ <span className="font-bold ml-2">Data/Hora do Fato:</span> ___/___/___ ___:___</p>
            <p className="mt-1.5"><span className="font-bold">Instituição / Banco Atingido:</span> ___________________________</p>
          </div>
          <div>
            <p><span className="font-bold">Nº Protocolo no Banco / SAC / MED:</span> ______________________</p>
            <p className="mt-1.5"><span className="font-bold">Nº Boletim de Ocorrência (B.O.):</span> _________________________</p>
            <p className="mt-1.5"><span className="font-bold">Delegacia / Órgão:</span> ___________________________________</p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SCREEN HEADER (Oculto na impressão)
          ========================================================================= */}
      <div className="bg-brand-red py-10 px-4 no-print">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 bg-red-800/60 text-red-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            <ShieldAlert className="w-4 h-4 text-red-300" />
            Guia de Emergência Passo a Passo
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Fui Vítima de um Golpe — O Que Fazer Agora?
          </h1>
          <p className="text-red-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            <strong>Mantenha a calma.</strong> Golpistas usam truques psicológicos profissionais e qualquer pessoa pode cair. Selecione abaixo o que aconteceu com você para seguir um passo a passo simples e direto para proteger seu dinheiro e suas contas.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 print:p-0 print:max-w-none">
        {/* =========================================================================
            STEP 1 — SELETOR DE SITUAÇÕES (Oculto na impressão)
            ========================================================================= */}
        <section className="mb-10 no-print">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="section-title text-xl sm:text-2xl">1. O que aconteceu com você?</h2>
              <p className="text-gray-500 text-sm">
                Clique na opção mais parecida com o seu caso. O checklist abaixo será ajustado automaticamente para te ajudar.
              </p>
            </div>
            {selectedSituacao && (
              <button
                onClick={() => handleSelectSituacao(selectedSituacao)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-cyan-600 self-start sm:self-auto bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Escolher outra situação
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {situacoes.map((s) => (
              <SituationCard
                key={s.id}
                situacao={s}
                selected={selectedSituacao === s.id}
                onClick={handleSelectSituacao}
              />
            ))}
          </div>
        </section>

        {/* =========================================================================
            STEP 2 — CHECKLIST PERSONALIZADO
            ========================================================================= */}
        <div ref={checklistRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
          {/* Banner de Contexto da Situação Ativa na Tela */}
          {selectedSituacao && currentSituacaoObj && (
            <div className="mb-6 p-4 rounded-xl border border-cyan-200 bg-cyan-50/80 flex items-start gap-3 no-print shadow-sm">
              <AlertCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-900">
                  Checklist Personalizado Carregado
                </p>
                <h3 className="font-bold text-black text-base sm:text-lg">
                  {currentSituacaoObj.label}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 mt-1">
                  As 4 fases abaixo foram calibradas com base nas melhores práticas da Polícia Civil, Banco Central (MED), SaferNet e Marco Civil da Internet para este tipo de ataque.
                </p>
              </div>
            </div>
          )}

          {/* Espaço para Vídeo Instrutivo Condicional por Situação */}
          <section className="mb-6 bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm no-print">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 text-brand-red shrink-0">
                  <PlayCircle className="w-5 h-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-brand-red border border-red-200">
                      {selectedSituacao && currentSituacaoObj ? `Vídeo para: ${currentSituacaoObj.label}` : 'Vídeo Geral de Emergência'}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-black text-base sm:text-lg">
                    Assista antes de iniciar o checklist!
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
              {currentVideo.descricao}
            </p>

            <div className="mt-2">
              <VideoEmbed
                key={selectedSituacao || 'geral'}
                url={currentVideo.url}
                title={currentVideo.titulo}
                placeholderTitle={currentVideo.titulo}
                placeholderDesc={`Vídeo explicativo específico para: ${selectedSituacao && currentSituacaoObj ? currentSituacaoObj.label : 'Plano Geral de Resposta'}.`}
              />
            </div>
          </section>

          {/* Barra de Progresso e Ações de Tela */}
          <div className="mb-6 bg-white rounded-xl p-5 border border-gray-100 shadow-sm no-print">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-black">Progresso do checklist</span>
                {checkedCurrentCount > 0 && (
                  <button
                    type="button"
                    onClick={handleResetChecklist}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 hover:text-red-600 ml-2 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 rounded px-1"
                    title="Desmarcar todos os itens"
                    aria-label="Desmarcar todos os itens preenchidos do checklist"
                  >
                    <RefreshCw className="w-3 h-3" aria-hidden="true" /> Limpar
                  </button>
                )}
              </div>
              <span className="text-sm font-bold text-cyan-600" aria-live="polite">{progress}%</span>
            </div>
            <div
              className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progresso do checklist: ${progress}% concluído`}
            >
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-2" aria-live="polite">
              <span>{checkedCurrentCount} de {totalItems} passos concluídos</span>
              <span>{progress === 100 ? '✅ Todas as etapas concluídas!' : 'Siga passo a passo com atenção'}</span>
            </div>
          </div>

          {/* Fases do Checklist */}
          <div className="space-y-4 print:space-y-3">
            {currentFases.map((fase, faseIndex) => (
              <div
                key={fase.id}
                className={`rounded-xl border p-5 sm:p-6 print:p-3 print:border-gray-300 print:bg-white print-avoid-break ${fase.corBg} ${fase.corBorda}`}
              >
                <div className="flex items-start gap-3 mb-3 print:mb-2">
                  <span
                    className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-white text-xs sm:text-sm font-bold shrink-0 print:bg-gray-800 print:text-white print:w-6 print:h-6 print:text-[11px] ${fase.corNum}`}
                  >
                    {faseIndex + 1}
                  </span>
                  <div>
                    <h3 className={`font-display font-bold text-base sm:text-lg print:text-black print:text-sm ${fase.cor}`}>
                      {fase.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 print:text-gray-700 mt-0.5 print:text-[11px] leading-tight">
                      {fase.descricao}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 sm:space-y-3 ml-2 sm:ml-10 print:ml-2 print:space-y-2">
                  {fase.itens.map((item) => {
                    const isChecked = checked.has(item.id)
                    return (
                      <li key={item.id} className="print-avoid-break">
                        {/* Interactive button on screen */}
                        <div className="flex items-start gap-2.5 text-left w-full group">
                          {/* Screen checkbox */}
                          <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            className="shrink-0 mt-0.5 text-gray-400 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded p-0.5 no-print transition-colors"
                            role="checkbox"
                            aria-checked={isChecked}
                            aria-label={`${isChecked ? 'Passo concluído' : 'Marcar como concluído'}: ${item.texto}`}
                          >
                            {isChecked ? (
                              <CheckSquare className={`w-5 h-5 ${fase.cor}`} aria-hidden="true" />
                            ) : (
                              <Square className="w-5 h-5" aria-hidden="true" />
                            )}
                          </button>

                          {/* Print-only square box */}
                          <span className="hidden print:inline-block w-4 h-4 border-2 border-gray-800 rounded-sm shrink-0 mt-0.5 text-center leading-none text-[10px] font-bold">
                            {isChecked ? '✓' : ''}
                          </span>

                          <div className="flex-1 cursor-pointer select-none" onClick={() => toggleItem(item.id)}>
                            <p
                              className={`text-sm sm:text-base print:text-[11.5px] font-semibold leading-snug transition-colors print:text-black ${
                                isChecked ? 'line-through text-gray-400 print:no-underline' : 'text-gray-800'
                              }`}
                            >
                              {item.texto}
                            </p>
                            {item.complemento && (
                              <p className="text-xs sm:text-xs print:text-[10.5px] text-gray-600 print:text-gray-700 mt-1 leading-relaxed">
                                {item.complemento}
                              </p>
                            )}
                            {item.link && (
                              <div className="mt-1.5">
                                <a
                                  href={item.link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 hover:underline print:text-[10px] print:text-gray-900 print:font-bold"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="w-3.5 h-3.5 no-print shrink-0" aria-hidden="true" />
                                  <span className="no-print">{item.link.label}</span>
                                  <span className="hidden print:inline">
                                    {item.link.label} — (Acesse: {item.link.url})
                                  </span>
                                </a>
                              </div>
                            )}
                            {item.links && item.links.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {item.links.map((lnk, lIdx) => (
                                  <a
                                    key={lIdx}
                                    href={lnk.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 hover:text-cyan-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200/80 px-2.5 py-1 rounded-lg transition-colors print:text-[10px] print:text-gray-900 print:font-bold"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <ExternalLink className="w-3 h-3 no-print shrink-0 text-cyan-600" aria-hidden="true" />
                                    <span className="no-print">{lnk.label}</span>
                                    <span className="hidden print:inline">
                                      {lnk.label} — (Acesse: {lnk.url})
                                    </span>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* =========================================================================
              PRINT-ONLY FOOTER
              ========================================================================= */}
          <div className="hidden print:block mt-4 pt-3 border-t border-gray-300 text-center text-[9px] text-gray-600">
            <p className="font-semibold text-gray-800">
              Manual de Sobrevivência contra Golpes Digitais e Engenharia Social • Trabalho Educativo de Cibersegurança
            </p>
            <p className="mt-0.5">
              Este checklist tem caráter informativo e de apoio emergencial para preservação de provas e contenção de danos cibernéticos.
            </p>
          </div>

          {/* =========================================================================
              PRINT BUTTON ON SCREEN
              ========================================================================= */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 no-print">
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold px-7 py-3.5 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 border border-white/10"
            >
              <Printer className="w-5 h-5 text-cyan-400" />
              Imprimir / Salvar Checklist em PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

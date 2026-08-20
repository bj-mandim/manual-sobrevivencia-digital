import { Link } from 'react-router-dom'
import { Shield, Users, BookOpen, Target, ArrowRight } from 'lucide-react'

const fases = [
  {
    numero: 1,
    titulo: 'Levantamento de Dados',
    descricao: 'Coleta de dados com a Secretaria de Segurança Pública e formulário anônimo com a população.',
    icon: BookOpen,
  },
  {
    numero: 2,
    titulo: 'Análise de Engenharia Social',
    descricao: 'Mapeamento de como vazamentos de dados alimentam ataques personalizados.',
    icon: Target,
  },
  {
    numero: 3,
    titulo: 'Arquitetura de Conteúdo',
    descricao: 'Elaboração dos 10 módulos, guias de prevenção e checklists de emergência.',
    icon: Shield,
  },
  {
    numero: 4,
    titulo: 'Desenvolvimento da Plataforma',
    descricao: 'Criação desta plataforma digital responsiva, acessível e de uso público.',
    icon: Users,
  },
]

const equipe = [
  { nome: 'Beatriz', funcao: 'Pesquisa Estatística & Relação Institucional' },
  { nome: 'Emilly', funcao: 'Análise Técnica de Cibersegurança & Engenharia Social' },
  { nome: 'Jéssica', funcao: 'Guias de Prevenção & Planos de Contenção' },
  { nome: 'Beatriz Negrão', funcao: 'Desenvolvimento Web, UX/UI & Mídia' },
]

export const Sobre = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-navy py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-brand-green" />
            </div>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Sobre o Projeto
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Uma plataforma educativa desenvolvida como Trabalho de Conclusão de Curso,
            unindo rigor técnico de cibersegurança com linguagem acessível para toda a população.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Mission */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <h2 className="section-title mb-4">Nossa Missão</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            O <strong>Manual de Sobrevivência contra Golpes Digitais e Engenharia Social</strong> tem
            como objetivo capacitar a população — desde jovens usuários até idosos e microempresários —
            a identificar, prevenir e reagir adequadamente a ameaças de crimes cibernéticos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A plataforma é de acesso público e pode ser utilizada por delegacias, prefeituras, escolas,
            bancos comunitários e empresas privadas como material de conscientização digital.
          </p>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="section-title mb-7">Metodologia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fases.map((fase) => (
              <div
                key={fase.numero}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                  <fase.icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Fase {fase.numero}</p>
                  <h3 className="font-bold text-navy text-sm mb-1">{fase.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{fase.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="section-title mb-7">A Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {equipe.map((membro) => (
              <div
                key={membro.nome}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">{membro.nome[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{membro.nome}</p>
                  <p className="text-xs text-gray-500 leading-snug mt-0.5">{membro.funcao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Distribution banner */}
        <section className="bg-navy rounded-xl p-8 text-center">
          <h2 className="font-display font-bold text-white text-xl mb-3">Distribua este conteúdo</h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Este projeto é de uso livre para fins educativos. Prefeituras, delegacias, escolas e
            empresas podem divulgar e integrar este conteúdo em seus canais de comunicação.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/golpes" className="btn-success text-sm">
              Explorar os golpes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/fui-vitima" className="btn-danger text-sm">
              Checklist de emergência
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  BookOpen,
  Target,
  ArrowRight,
  Linkedin,
  Instagram,
} from "lucide-react";

const fases = [
  {
    numero: 1,
    titulo: "Levantamento de Dados",
    descricao:
      "Coleta de dados com a Secretaria de Segurança Pública e formulário anônimo com a população.",
    icon: BookOpen,
  },
  {
    numero: 2,
    titulo: "Análise de Engenharia Social",
    descricao:
      "Mapeamento de como vazamentos de dados alimentam ataques personalizados.",
    icon: Target,
  },
  {
    numero: 3,
    titulo: "Arquitetura de Conteúdo",
    descricao:
      "Elaboração dos 11 módulos, guias de prevenção e checklists de emergência.",
    icon: Shield,
  },
  {
    numero: 4,
    titulo: "Desenvolvimento da Plataforma",
    descricao:
      "Criação desta plataforma digital responsiva, acessível e de uso público.",
    icon: Users,
  },
];

export interface MembroEquipe {
  nome: string;
  funcao: string;
  foto?: string; // Caminho ou URL da foto (ex: '/equipe/beatriz.jpg' ou link web)
  linkedin?: string; // URL do perfil no LinkedIn
  instagram?: string; // URL do perfil no Instagram
}

const equipe: MembroEquipe[] = [
  {
    nome: "Beatriz Mandim",
    funcao: "Tech Lead & Análise Técnica de Cibersegurança",
    foto: "/fotos_equipe/foto_beatriz_mandim.jpeg",
    linkedin: "https://www.linkedin.com/in/beatrizmandim/",
    instagram: "https://www.instagram.com/bj_mandim/",
  },
  {
    nome: "Emily Bandeira",
    funcao: "Pesquisa de Engenharia Social & Conteúdo Educativo",
    foto: "/fotos_equipe/foto_emily_bandeira.jpeg",
    linkedin: "https://www.linkedin.com/in/emily-bandeira-72615122b",
    instagram: "https://www.instagram.com/emilybalv/",
  },
  {
    nome: "Jessica Mertiek",
    funcao: "Desenvolvimento Web & UX/UI",
    foto: "/fotos_equipe/foto_jessica_mertiek.jpeg",
    linkedin: "https://www.linkedin.com/in/jessica-alves-duo-insight-885202203",
    instagram: "https://www.instagram.com/jessicamertiek/",
  },
  {
    nome: "Beatriz Negrão",
    funcao: "Pesquisa de Engenharia Social & Conteúdo Educativo",
    foto: "/fotos_equipe/foto_beatriz_negrao.jpeg",
    linkedin: "https://www.linkedin.com/in/beatriz-negrão-braz",
    instagram: "https://www.instagram.com/bianegraobraz_/",
  },
];

const getInstagramUrl = (handleOrUrl?: string) => {
  if (!handleOrUrl) return "";
  if (handleOrUrl.startsWith("http://") || handleOrUrl.startsWith("https://"))
    return handleOrUrl;
  return `https://www.instagram.com/${handleOrUrl.replace(/^@/, "").trim()}/`;
};

export const Sobre = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-black py-14 px-4 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Sobre o Projeto
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Uma plataforma educativa desenvolvida como Trabalho de Conclusão de
            Curso, unindo rigor técnico de cibersegurança com linguagem
            acessível para toda a população.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Mission */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <h2 className="section-title mb-4">Nossa Missão</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            O{" "}
            <strong>
              Manual de Sobrevivência contra Golpes Digitais e Engenharia Social
            </strong>{" "}
            tem como objetivo capacitar a população — desde jovens usuários até
            idosos e microempresários — a identificar, prevenir e reagir
            adequadamente a ameaças de crimes cibernéticos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A plataforma é de acesso público e pode ser utilizada por
            delegacias, prefeituras, escolas, bancos comunitários e empresas
            privadas como material de conscientização digital.
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
                <div className="w-10 h-10 rounded-full bg-black border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <fase.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    Fase {fase.numero}
                  </p>
                  <h3 className="font-bold text-black text-sm mb-1">
                    {fase.titulo}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {fase.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section aria-label="Equipe do projeto">
          <h2 className="section-title mb-7">A Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {equipe.map((membro) => (
              <div
                key={membro.nome}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-all hover:shadow-md hover:border-cyan-500/20"
              >
                {/* Foto / Avatar */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-black border-2 border-cyan-500/30 flex items-center justify-center shadow-inner relative group">
                  {membro.foto ? (
                    <img
                      src={membro.foto}
                      alt={`Foto de ${membro.nome}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <span
                      className="text-cyan-400 font-display font-black text-2xl select-none"
                      aria-hidden="true"
                    >
                      {membro.nome.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Dados & Redes */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-display font-bold text-black text-base sm:text-lg leading-tight">
                    {membro.nome}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug mt-1">
                    {membro.funcao}
                  </p>

                  {/* Redes Sociais */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-3.5">
                    {membro.linkedin ? (
                      <a
                        href={membro.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${membro.nome}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-black text-gray-700 hover:text-cyan-400 text-xs font-semibold border border-gray-200 hover:border-cyan-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>LinkedIn</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50/70 text-gray-400 text-xs font-medium border border-gray-200/60 cursor-default"
                        title="LinkedIn em breve"
                      >
                        <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>LinkedIn</span>
                      </span>
                    )}

                    {membro.instagram ? (
                      <a
                        href={getInstagramUrl(membro.instagram)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram de ${membro.nome}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-black text-gray-700 hover:text-cyan-400 text-xs font-semibold border border-gray-200 hover:border-cyan-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Instagram</span>
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50/70 text-gray-400 text-xs font-medium border border-gray-200/60 cursor-default"
                        title="Instagram em breve"
                      >
                        <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Instagram</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Distribution banner */}
        <section className="bg-black border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-display font-bold text-white text-xl mb-3 relative z-10">
            Distribua este conteúdo
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed relative z-10">
            Este projeto é de uso livre para fins educativos. Prefeituras,
            delegacias, escolas e empresas podem divulgar e integrar este
            conteúdo em seus canais de comunicação.
          </p>
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
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
  );
};

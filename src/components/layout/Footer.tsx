import { Link } from "react-router-dom";
import { Shield, ExternalLink, Calendar } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-cyan-400" aria-hidden="true" />
              <span className="text-sm font-bold tracking-tight">
                <span className="text-white">SOBREVIVÊNCIA </span>
                <span className="text-cyan-400">DIGITAL</span>
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Este projeto é de utilidade pública, gratuito e educativo. Em caso de emergência ou crime financeiro, acione imediatamente seu banco e as autoridades competentes.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              <span>Última atualização: <strong>Novembro de 2026</strong></span>
            </div>
          </div>

          {/* Links de Navegação */}
          <div>
            <h3 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-3">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Início" },
                { to: "/golpes", label: "Os 11 Golpes mais perigosos" },
                { to: "/fui-vitima", label: "Fui Vítima — O que fazer agora" },
                { to: "/proteja-se", label: "Proteja-se (Dicas por perfil)" },
                { to: "/feedbacks", label: "Feedbacks & Sugestões" },
                { to: "/sobre", label: "Sobre o Projeto" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded py-0.5 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos Oficiais e Bancários */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-3">
              Canais Oficiais e Autoridades
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                {
                  label: "BACEN — Reclamações & MED do Pix",
                  url: "https://www.bcb.gov.br/meubc/fazerreclamacao",
                },
                {
                  label: "FEBRABAN — Portal Antifraudes",
                  url: "https://antifraudes.febraban.org.br/",
                },
                {
                  label: "Delegacias Eletrônicas (SaferNet)",
                  url: "https://new.safernet.org.br/content/delegacias-cibercrimes",
                },
                {
                  label: "Delegacia Eletrônica (Polícia Civil)",
                  url: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/",
                },
                {
                  label: "BACEN — Consultar Registrato",
                  url: "https://www.bcb.gov.br/meubc/registrato",
                },
                {
                  label: "Procon — Defesa do Consumidor",
                  url: "https://www.procon.sp.gov.br/",
                },
                {
                  label: "Consumidor.gov.br",
                  url: "https://www.consumidor.gov.br/",
                },
                {
                  label: "Central da Mulher — Ligue 180 (Gov.br)",
                  url: "https://www.gov.br/mulheres/pt-br/ligue180",
                },
                {
                  label: "CVM — Canal do Cidadão",
                  url: "https://www.cvm.gov.br/",
                },
                {
                  label: "StopNCII.org — Proteção de Imagens",
                  url: "https://stopncii.org/",
                },
              ].map(({ label, url }) => (
                <div key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-cyan-400 transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
                  >
                    <ExternalLink className="w-3 h-3 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span className="truncate">{label}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linha final com copyright e aviso legal */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Manual de Sobrevivência Digital — Conteúdo 100% público e gratuito.
          </p>
          <p className="text-xs text-gray-400">
            Material educativo. Não substitui assessoria jurídica formal ou atendimento policial imediato.
          </p>
        </div>
      </div>
    </footer>
  );
};

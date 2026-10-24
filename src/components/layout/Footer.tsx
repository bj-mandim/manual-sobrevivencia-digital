import { Link } from "react-router-dom";
import { Shield, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-bold tracking-tight">
                <span className="text-white">SOBREVIVÊNCIA </span>
                <span className="text-cyan-400">DIGITAL</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Este projeto é informativo e educativo. Em caso de emergência,
              entre em contato com as autoridades competentes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Início" },
                { to: "/golpes", label: "Os 11 Golpes mais perigosos" },
                { to: "/fui-vitima", label: "Fui Vítima, o que fazer?" },
                { to: "/proteja-se", label: "Proteja-se" },
                { to: "/feedbacks", label: "Feedbacks & Sugestões" },
                { to: "/sobre", label: "Sobre o Projeto" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External resources */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">
              Recursos Oficiais
            </h3>
            <ul className="space-y-2">
              {[
                {
                  label: "Delegacias Eletrônicas (SaferNet)",
                  url: "https://new.safernet.org.br/content/delegacias-cibercrimes",
                },
                {
                  label: "BACEN — Consultar Registrato",
                  url: "https://www.bcb.gov.br/meubc/registrato",
                },
                {
                  label: "BACEN — Reclamações & MED do Pix",
                  url: "https://www.bcb.gov.br/meubc/fazerreclamacao",
                },
                {
                  label: "Central da Mulher — Ligue 180 (Gov.br)",
                  url: "https://www.gov.br/mulheres/pt-br/ligue180",
                },
                {
                  label: "Justiça Eleitoral — Fato ou Boato",
                  url: "https://www.justicaeleitoral.jus.br/fato-ou-boato/",
                },
                {
                  label: "StopNCII.org — Bloqueio de Imagens",
                  url: "https://stopncii.org/",
                },
                {
                  label: "Consumidor.gov.br",
                  url: "https://www.consumidor.gov.br",
                },
                {
                  label: "CVM — Canal do Cidadão",
                  url: "https://www.cvm.gov.br",
                },
              ].map(({ label, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2025 Manual de Sobrevivência Digital — Trabalho de Conclusão de
            Curso
          </p>
          <p className="text-xs text-gray-500">
            Conteúdo educativo. Não substitui orientação jurídica ou policial.
          </p>
        </div>
      </div>
    </footer>
  );
};

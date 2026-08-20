import { Link } from 'react-router-dom'
import { Shield, ExternalLink } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="text-sm font-bold text-brand-green">SOBREVIVÊNCIA DIGITAL</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Este projeto é informativo e educativo. Em caso de emergência, entre em
              contato com as autoridades competentes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">Navegação</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Início' },
                { to: '/golpes', label: 'Os 10 Golpes' },
                { to: '/fui-vitima', label: 'Fui Vítima' },
                { to: '/proteja-se', label: 'Proteja-se' },
                { to: '/sobre', label: 'Sobre o Projeto' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External resources */}
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">Recursos Oficiais</h3>
            <ul className="space-y-2">
              {[
                { label: 'Delegacias Eletrônicas', url: 'https://new.safernet.org.br/content/delegacias-cibercrimes' },
                { label: 'BACEN — Registrar Reclamação', url: 'https://www.bcb.gov.br/meubc/fazerreclamacao' },
                { label: 'Consumidor.gov', url: 'https://www.consumidor.gov.br' },
                { label: 'Serasa — Consultar CPF', url: 'https://www.serasa.com.br' },
                { label: 'CVM — Verificar Investimentos', url: 'https://www.cvm.gov.br' },
              ].map(({ label, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
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
            © 2025 Manual de Sobrevivência Digital — Trabalho de Conclusão de Curso
          </p>
          <p className="text-xs text-gray-500">
            Conteúdo educativo. Não substitui orientação jurídica ou policial.
          </p>
        </div>
      </div>
    </footer>
  )
}

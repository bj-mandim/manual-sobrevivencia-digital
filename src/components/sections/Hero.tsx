import { Link } from 'react-router-dom'
import { AlertTriangle, ShieldCheck, Smartphone, Monitor, Share2, CreditCard, Database } from 'lucide-react'

const channels = [
  { icon: Smartphone, label: 'Celular' },
  { icon: Monitor, label: 'Computador' },
  { icon: Share2, label: 'Redes sociais' },
  { icon: CreditCard, label: 'Dinheiro' },
  { icon: Database, label: 'Dados pessoais' },
]

const HeroIllustration = () => (
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto" aria-hidden="true">
    {/* Glow */}
    <ellipse cx="250" cy="200" rx="175" ry="155" fill="#1a3a6b" opacity="0.35" />

    {/* === LAPTOP === */}
    <rect x="95" y="175" width="242" height="152" rx="10" fill="#1e3560" />
    <rect x="70" y="324" width="292" height="13" rx="6.5" fill="#1a3060" />
    <rect x="107" y="187" width="218" height="128" rx="5" fill="#0a1830" />
    {/* Shield on laptop */}
    <path d="M216 204 L240 213 L240 233 C240 247 231 255 216 261 C201 255 192 247 192 233 L192 213 Z" fill="#2A9D8F" />
    <path d="M207 236 L214 243 L227 224" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* === PHONE === */}
    <rect x="320" y="118" width="88" height="172" rx="14" fill="#1e3560" />
    <rect x="330" y="133" width="68" height="145" rx="6" fill="#0a1830" />
    {/* Lock on phone */}
    <rect x="344" y="172" width="40" height="34" rx="5" fill="#E63946" opacity="0.9" />
    <path d="M354 172 L354 165 C354 159 370 159 370 165 L370 172" stroke="#E63946" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="364" cy="185" r="5" fill="white" opacity="0.75" />
    <rect x="362" y="185" width="4" height="8" rx="2" fill="white" opacity="0.75" />

    {/* === CHECK SHIELD (top right) === */}
    <circle cx="293" cy="103" r="38" fill="#2A9D8F" />
    <circle cx="293" cy="103" r="28" fill="#229080" />
    <path d="M281 103 L290 113 L307 91" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* === CREDIT CARD === */}
    <rect x="62" y="103" width="120" height="76" rx="10" fill="#1e3560" />
    <rect x="73" y="123" width="48" height="30" rx="5" fill="#F4A261" opacity="0.65" />
    <circle cx="156" cy="128" r="12" fill="#E63946" opacity="0.4" />
    <circle cx="145" cy="128" r="12" fill="#F4A261" opacity="0.4" />

    {/* === FLOATING ICONS === */}
    {/* Warning bubble */}
    <circle cx="88" cy="238" r="24" fill="#1e3560" />
    <path d="M88 227L80 247H96Z" fill="#F4A261" opacity="0.85" />
    <rect x="86.5" y="237" width="3" height="6" rx="1.5" fill="white" opacity="0.8" />
    <circle cx="88" cy="246" r="1.5" fill="white" opacity="0.8" />
    {/* Lock bubble */}
    <circle cx="412" cy="242" r="24" fill="#1e3560" />
    <rect x="402" y="244" width="20" height="14" rx="3" fill="#2A9D8F" />
    <path d="M404 244 L404 238 C404 234 418 234 418 238 L418 244" stroke="#2A9D8F" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* Decorative dots */}
    {[173, 190, 205].map((x, i) => (
      <circle key={x} cx={x} cy={163 - i * 7} r={2.5 - i * 0.4} fill="#2A9D8F" opacity={0.5 - i * 0.1} />
    ))}
    {[340, 328, 318].map((x, i) => (
      <circle key={x} cx={x} cy={175 + i * 7} r={2.5 - i * 0.4} fill="#E63946" opacity={0.5 - i * 0.1} />
    ))}
  </svg>
)

export const Hero = () => {
  return (
    <section className="bg-navy min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
            Golpes digitais estão cada vez mais{' '}
            <span className="text-brand-gradient">sofisticados.</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Aprenda a identificar, prevenir e reagir.
          </p>

          {/* Channel icons */}
          <div className="flex flex-wrap gap-5 mb-10">
            {channels.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-200" />
                </div>
                <span className="text-[10px] text-gray-400">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/fui-vitima"
              className="btn-danger justify-center sm:justify-start text-sm"
            >
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>
                <strong className="block">SUSPEITO QUE CAÍ EM UM GOLPE</strong>
                <span className="font-normal text-xs opacity-80">Preciso de ajuda agora</span>
              </span>
            </Link>

            <Link
              to="/proteja-se"
              className="btn-success justify-center sm:justify-start text-sm"
            >
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>
                <strong className="block">QUERO ME PROTEGER</strong>
                <span className="font-normal text-xs opacity-80">Quero aprender como me prevenir</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Right illustration */}
        <div className="hidden lg:block">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

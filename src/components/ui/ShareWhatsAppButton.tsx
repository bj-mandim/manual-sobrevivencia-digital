import React from 'react'
import { Share2 } from 'lucide-react'

interface ShareWhatsAppButtonProps {
  title: string
  url?: string
  textCustom?: string
  variant?: 'primary' | 'secondary' | 'compact'
  className?: string
}

export const ShareWhatsAppButton: React.FC<ShareWhatsAppButtonProps> = ({
  title,
  url,
  textCustom,
  variant = 'primary',
  className = '',
}) => {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://manualdesobrevivenciadigital.vercel.app/')
  
  const shareMessage = textCustom
    ? `${textCustom}\n\n${currentUrl}`
    : `*Manual de Sobrevivência Digital*: ${title}\n\nVeja como se proteger de golpes e compartilhe com sua família:\n${currentUrl}`

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`

  if (variant === 'compact') {
    return (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Compartilhar "${title}" no WhatsApp`}
        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 min-h-[44px] ${className}`}
      >
        <Share2 className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>Enviar no WhatsApp</span>
      </a>
    )
  }

  if (variant === 'secondary') {
    return (
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Compartilhar "${title}" no WhatsApp com amigos e familiares`}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-emerald-500/40 hover:border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[44px] ${className}`}
      >
        <Share2 className="w-4 h-4 shrink-0 text-emerald-400" aria-hidden="true" />
        <span>Compartilhar alerta no WhatsApp</span>
      </a>
    )
  }

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Compartilhar "${title}" no WhatsApp com a família`}
      className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black min-h-[44px] ${className}`}
    >
      <Share2 className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>Compartilhar no WhatsApp</span>
    </a>
  )
}

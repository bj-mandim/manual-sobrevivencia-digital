import { Play } from 'lucide-react'

export interface VideoEmbedProps {
  url?: string
  title?: string
  placeholderTitle?: string
  placeholderDesc?: string
}

/**
 * Converte qualquer formato comum de link do YouTube para o link seguro de embed Privacy-Enhanced.
 * Retorna null se a URL for vazia, indefinida, placeholder ou link inválido.
 */
export const getYouTubeEmbedUrl = (rawUrl?: string): string | null => {
  if (!rawUrl) return null
  const url = rawUrl.trim()
  if (!url || url.toLowerCase().includes('placeholder')) return null

  // Se já for uma URL de embed do YouTube (ex: https://www.youtube.com/embed/saO2Nbjss80)
  const embedMatch = url.match(/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?\.com\/embed\/([\w-]{11})/i)
  if (embedMatch && embedMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}`
  }

  // Formato encurtado: https://youtu.be/<id>
  const youtuBeMatch = url.match(/youtu\.be\/([\w-]{11})/i)
  if (youtuBeMatch && youtuBeMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${youtuBeMatch[1]}`
  }

  // Formato padrão: https://www.youtube.com/watch?v=<id> ou /shorts/<id> ou /v/<id>
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|v\/))([\w-]{11})/i)
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`
  }

  return null
}

export const VideoEmbed = ({
  url,
  title = 'Vídeo explicativo',
  placeholderTitle = 'Vídeo em breve',
  placeholderDesc = 'O conteúdo em vídeo será adicionado em breve.',
}: VideoEmbedProps) => {
  const embedUrl = getYouTubeEmbedUrl(url)
  const isPlaceholder = !embedUrl

  if (isPlaceholder) {
    return (
      <div className="relative w-full aspect-video bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl overflow-hidden flex flex-col items-center justify-center border border-white/10 shadow-xl p-6 text-center select-none">
        {/* Padrão decorativo de fundo com grid suave */}
        <div className="absolute inset-0 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-md px-4">
          {/* Botão de Play ilustrativo com glow ciano */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_24px_rgba(0,229,255,0.18)]">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5 fill-cyan-400/20" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-cyan-300 uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Espaço Reservado para Vídeo
          </div>

          <p className="text-base sm:text-lg font-bold text-white mb-1.5 line-clamp-2">
            {placeholderTitle}
          </p>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm line-clamp-3">
            {placeholderDesc}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-black">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  )
}

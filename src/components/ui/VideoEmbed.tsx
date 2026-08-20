interface VideoEmbedProps {
  url: string
  title?: string
}

export const VideoEmbed = ({ url, title = 'Vídeo explicativo' }: VideoEmbedProps) => {
  // Convert watch URL to embed URL if needed
  const embedUrl = url.includes('watch?v=')
    ? url.replace('watch?v=', 'embed/')
    : url

  const isPlaceholder = embedUrl.includes('placeholder')

  if (isPlaceholder) {
    return (
      <div className="relative w-full aspect-video bg-navy-dark rounded-xl overflow-hidden flex items-center justify-center border border-white/10">
        <div className="text-center text-gray-400 p-8">
          <svg
            className="w-16 h-16 mx-auto mb-3 opacity-40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-sm font-medium">Vídeo em breve</p>
          <p className="text-xs mt-1 opacity-60">O conteúdo em vídeo será adicionado em breve.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

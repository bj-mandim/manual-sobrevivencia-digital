import { useEffect } from 'react'

/**
 * Vercel Web Analytics (Plano Gratuito)
 * Respeita a privacidade dos usuários e a LGPD (sem cookies ou coleta de dados pessoais).
 * Carrega em produção de forma não intrusiva.
 */
export const VercelAnalytics = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.hostname.includes('localhost')) {
      // Injeta de forma segura sem quebrar o bundler Vite local
      const pkg = '@vercel/analytics'
      import(/* @vite-ignore */ pkg)
        .then((mod) => {
          if (mod && typeof mod.inject === 'function') {
            mod.inject()
          }
        })
        .catch(() => {
          // Silencioso se o pacote não estiver disponível
        })
    }
  }, [])

  return null
}

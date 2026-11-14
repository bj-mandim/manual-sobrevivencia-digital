import { useEffect } from 'react'

/**
 * Vercel Web Analytics (Plano Gratuito)
 * Respeita a privacidade dos usuários e a LGPD (sem cookies ou coleta de dados pessoais).
 * Carrega em produção de forma não intrusiva.
 */
export const VercelAnalytics = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.hostname.includes('localhost')) {
      // Carregamento dinâmico seguro
      import('@vercel/analytics')
        .then((mod) => {
          if (mod && typeof mod.inject === 'function') {
            mod.inject()
          }
        })
        .catch(() => {
          // Silencioso se o pacote ainda não tiver sido compilado localmente
        })
    }
  }, [])

  return null
}

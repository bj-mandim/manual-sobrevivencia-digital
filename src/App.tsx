import { Routes, Route, useLocation, Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { VercelAnalytics } from './components/analytics/VercelAnalytics'
import { Home } from './pages/Home'
import { Golpes } from './pages/Golpes'
import { GolpeDetalhe } from './pages/GolpeDetalhe'
import { FuiVitima } from './pages/FuiVitima'
import { Proteja } from './pages/Proteja'
import { Sobre } from './pages/Sobre'
import { Feedbacks } from './pages/Feedbacks'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Redirecionador para links com /golpe/:slug (compatibilidade singular/plural)
const GolpeRedirect = () => {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={`/golpes/${slug ?? ''}`} replace />
}

// Google Analytics 4 Pageview Tracker (rastreia cada mudança de aba/rota no SPA)
const AnalyticsTracker = () => {
  const location = useLocation()

  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  }, [location])

  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Skip to main content for accessibility (Leitores de tela e navegação por teclado) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-cyan-400 focus:text-black focus:font-extrabold focus:rounded-xl focus:shadow-2xl focus:ring-4 focus:ring-black focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <ScrollToTop />
      <AnalyticsTracker />
      <VercelAnalytics />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/golpes" element={<Golpes />} />
          <Route path="/golpes/:slug" element={<GolpeDetalhe />} />
          <Route path="/golpe/:slug" element={<GolpeRedirect />} />
          <Route path="/golpe" element={<Navigate to="/golpes" replace />} />
          <Route path="/fui-vitima" element={<FuiVitima />} />
          <Route path="/proteja-se" element={<Proteja />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="text-center max-w-md">
                  <p className="text-6xl sm:text-7xl font-display font-extrabold text-black mb-3">404</p>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Página não encontrada</h1>
                  <p className="text-sm sm:text-base text-gray-500 mb-6">
                    O link que você tentou acessar não existe ou foi movido.
                  </p>
                  <Link to="/" className="btn-success inline-flex justify-center">
                    Voltar ao início
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Golpes } from './pages/Golpes'
import { GolpeDetalhe } from './pages/GolpeDetalhe'
import { FuiVitima } from './pages/FuiVitima'
import { Proteja } from './pages/Proteja'
import { Sobre } from './pages/Sobre'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/golpes" element={<Golpes />} />
          <Route path="/golpes/:slug" element={<GolpeDetalhe />} />
          <Route path="/fui-vitima" element={<FuiVitima />} />
          <Route path="/proteja-se" element={<Proteja />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <p className="text-6xl font-display font-bold text-navy mb-4">404</p>
                  <p className="text-gray-500 mb-6">Página não encontrada.</p>
                  <a href="/" className="btn-success inline-flex">Voltar ao início</a>
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

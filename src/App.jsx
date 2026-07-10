import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Quran from './pages/Quran'
import Hadiths from './pages/Hadiths'
import History from './pages/History'
import Figures from './pages/Figures'

function App() {
  const location = useLocation()
  const isQuranPage = location.pathname === '/quran'

  return (
    <div className="min-h-screen bg-sand-50 font-[Inter,sans-serif] flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isQuranPage ? '' : 'min-h-[calc(100vh-4rem)]'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/hadiths" element={<Hadiths />} />
          <Route path="/history" element={<History />} />
          <Route path="/figures" element={<Figures />} />
        </Routes>
      </main>
      {!isQuranPage && (
        <footer className="bg-emerald-900 text-white py-8 px-6 text-center">
          <p className="text-emerald-200 text-sm">
            Islamic Platform — An educational resource for understanding Islam
          </p>
          <p className="text-emerald-400 text-xs mt-2">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>
        </footer>
      )}
    </div>
  )
}

export default App

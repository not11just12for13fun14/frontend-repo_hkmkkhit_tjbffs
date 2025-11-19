import React from 'react'
import HeaderHero from './components/HeaderHero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeaderHero />
      <Services />
      <About />
      <Contact />
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Klinikk Steli • Privat spesialistklinikk i Bjerkvik</p>
        </div>
      </footer>
    </div>
  )
}

export default App

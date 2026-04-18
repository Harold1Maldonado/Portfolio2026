import { useState } from 'react'
import { translations } from './lib/translations'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Embeds } from './components/sections/Embeds'
import { Experience } from './components/sections/Experience'
import { FocusCards } from './components/sections/FocusCards'
import { Contact } from './components/sections/Contact'

export default function App() {
  const [lang, setLang] = useState('es')
  const t = translations[lang]

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <div className="min-h-screen bg-grid bg-[size:42px_42px]">
      <Header t={t} lang={lang} onToggleLang={toggleLang} />
      <main id="home">
        <Hero t={t} />
        <About t={t} />
        <Stack t={t} />
        <Projects t={t} />
        <Embeds t={t} />
        <Experience t={t} />
        <FocusCards t={t} />
        <Contact t={t} />
      </main>
    </div>
  )
}

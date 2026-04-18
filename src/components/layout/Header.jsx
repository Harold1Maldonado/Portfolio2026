export function Header({ t, lang, onToggleLang }) {
  const toggleBtn = (extraClass = '') => (
    <button
      type="button"
      role="switch"
      aria-checked={lang === 'en'}
      onClick={onToggleLang}
      className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white transition hover:bg-white/10 ${extraClass}`}
    >
      {t.langSwitch}
    </button>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          Harold Maldonado<span className="text-sky-400">.</span>
        </a>

        {toggleBtn('md:hidden')}

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">{t.nav.about}</a>
          <a href="#stack" className="hover:text-white">{t.nav.stack}</a>
          <a href="#projects" className="hover:text-white">{t.nav.projects}</a>
          <a href="#embed" className="hover:text-white">{t.nav.embeds}</a>
          <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
          {toggleBtn()}
        </div>
      </nav>
    </header>
  )
}

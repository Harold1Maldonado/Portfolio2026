import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useContactForm } from '../../hooks/useContactForm'

export function Contact({ t }) {
  const { form, status, statusMessage, handleChange, handleSubmit } = useContactForm(t.contact)

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
      <motion.div
        className="card p-10 md:p-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{t.contact.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{t.contact.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{t.contact.copy}</p>

        <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t.contact.name}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t.contact.email}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t.contact.message}
            className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400 md:col-span-2"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:justify-self-start"
          >
            <Mail size={18} />
            {status === 'loading' ? t.contact.sending : t.contact.send}
          </button>
        </form>

        {statusMessage && (
          <p className={`mt-4 text-sm ${status === 'success' ? 'text-emerald-400' : 'text-amber-300'}`}>
            {statusMessage}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/harold-maldonado/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/Harold1Maldonado"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}

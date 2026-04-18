import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Rocket } from 'lucide-react'
import profilePhoto from '../../foto perfil.png'
import { fadeUp, staggerContainer } from '../../constants/animations'

const SKILL_CHIPS = ['REST APIs', 'Authentication', 'React UI', 'Flask Backend', 'Generative AI', 'Kotlin Basics']

export function Hero({ t }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeUp}>
          <img
            src={profilePhoto}
            alt="Harold Maldonado"
            className="h-60 w-60 rounded-full object-cover object-[center_15%] ring-2 ring-sky-400/40 ring-offset-4 ring-offset-slate-950"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300"
        >
          <Rocket size={16} /> {t.hero.role}
        </motion.div>

        <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          {t.hero.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-300">
          {t.hero.copy}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
          >
            {t.hero.viewProjects} <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            {t.hero.contactMe}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="card relative overflow-hidden p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-fuchsia-500/10" />
        <div className="relative space-y-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <div>
              <p className="text-sm text-slate-400">{t.summaryCard.currentFocus}</p>
              <p className="text-lg font-semibold text-white">{t.summaryCard.focusValue}</p>
            </div>
            <BrainCircuit className="text-sky-400" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SKILL_CHIPS.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400">{t.summaryCard.professionalSummary}</p>
            <p className="mt-2 leading-7 text-slate-200">{t.summaryCard.summary}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import profilePhoto from '../../foto perfil.png'
import { fadeUp } from '../../constants/animations'
import { SectionHeading } from '../ui/SectionHeading'

export function About({ t }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid gap-8 lg:grid-cols-[220px_1fr]"
      >
        <div className="card flex flex-col items-center gap-5 p-8">
          <img
            src={profilePhoto}
            alt="Harold Maldonado"
            className="h-40 w-40 rounded-full object-cover ring-2 ring-sky-400/40 ring-offset-4 ring-offset-slate-900"
          />
          <div className="text-center">
            <p className="text-lg font-semibold text-white">Harold Maldonado</p>
            <p className="text-sm text-sky-400">{t.hero.role}</p>
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} copy={t.about.copy} />
          <div className="card p-8 text-slate-300">
            <p className="leading-7">{t.about.body}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience({ t }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} copy={t.experience.copy} />
      <div className="mt-12 space-y-6 border-l border-white/10 pl-6">
        {t.experience.items.map((item, index) => (
          <motion.div
            key={`${item.title}-${item.period}`}
            className="card relative p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full bg-sky-400" />
            <p className="text-sm uppercase tracking-[0.2em] text-sky-400">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

export function Embeds({ t }) {
  return (
    <section id="embed" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow={t.embeds.eyebrow} title={t.embeds.title} copy={t.embeds.copy} />
      <div className="mt-12 space-y-8">
        {t.embeds.items.map((item, index) => (
          <motion.div
            key={item.title}
            className="card overflow-hidden p-4 md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.note}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                {t.embeds.openProject} <ExternalLink size={16} />
              </a>
            </div>
            <div className="rounded-2xl border border-dashed border-white/20 bg-slate-900/80 p-6">
              <p className="text-sm leading-6 text-slate-300">{t.embeds.previewDisabled}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

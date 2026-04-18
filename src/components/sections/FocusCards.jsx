import { motion } from 'framer-motion'
import { BrainCircuit, Briefcase, Smartphone } from 'lucide-react'

const ICONS = [BrainCircuit, Smartphone, Briefcase]

export function FocusCards({ t }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {t.cards.map((card, idx) => {
          const Icon = ICONS[idx]
          return (
            <motion.div
              key={card.title}
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <Icon className="text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{card.copy}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function Stack({ t }) {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow={t.stack.eyebrow} title={t.stack.title} copy={t.stack.copy} />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {t.stack.groups.map((group, index) => (
          <motion.div
            key={group.title}
            className="card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="badge">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

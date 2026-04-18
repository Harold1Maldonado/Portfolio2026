import { motion } from 'framer-motion'
import { Code2, ExternalLink, Github } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

function ProjectCard({ project, index, t }) {
  const hasDemo = project.demo && project.demo !== '#'
  const hasRepo = project.repo && project.repo !== '#'

  return (
    <motion.article
      className="card p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-sky-400">{t.label}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <Code2 className="text-slate-400" />
      </div>

      <p className="mt-5 leading-7 text-slate-300">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.stack.map((item) => (
          <span key={`${project.title}-${item}`} className="badge">{item}</span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {hasDemo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
          >
            {t.liveDemo} <ExternalLink size={16} />
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-slate-500/40 px-5 py-3 font-medium text-slate-200">
            {t.pending}
          </span>
        )}

        {hasRepo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            {t.repo} <Github size={16} />
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-500">
            {t.repo} <Github size={16} />
          </span>
        )}
      </div>
    </motion.article>
  )
}

export function Projects({ t }) {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow={t.project.eyebrow} title={t.project.title} copy={t.project.copy} />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {t.project.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} t={t.project} />
        ))}
      </div>
    </section>
  )
}

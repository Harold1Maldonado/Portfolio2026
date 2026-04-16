import { motion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Smartphone,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const techGroups = [
  {
    title: 'Core Stack',
    items: ['JavaScript', 'React', 'Python', 'Flask', 'HTML', 'CSS', 'SQL', 'JWT', 'SQLAlchemy', 'Git', 'GitHub', 'Bootstrap'],
  },
  {
    title: 'Additional Knowledge',
    items: ['Next.js', 'Node.js', 'Kotlin', 'Android Studio'],
  },
  {
    title: 'AI & Exploration',
    items: ['Generative AI', 'Agentic AI', 'Gemini API', 'Prompt Engineering', 'AI Integrations'],
  },
  {
    title: 'Workflow',
    items: ['REST APIs', 'Authentication', 'Responsive Design', 'Database Design', 'Version Control'],
  },
]

const projects = [
  {
    title: 'Gift Suggestion Platform',
    description:
      'Full stack application for generating personalized gift ideas. Built with Python, Flask, JavaScript, React, SQLAlchemy, and third-party integrations.',
    stack: ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy', 'Gemini API'],
    demo: 'https://sample-service-name-e9kt.onrender.com/',
    repo: 'https://github.com/Harold1Maldonado',
  },
  {
    title: 'Project Placeholder',
    description:
      'Replace this card with your next strongest project. Add a clear result, the technical challenge, and what part you owned end to end.',
    stack: ['React', 'REST API', 'JWT'],
    demo: '#',
    repo: 'https://github.com/Harold1Maldonado',
  },
]

const embeddedProjects = [
  {
    title: 'Live Project Embed',
    url: 'https://sample-service-name-e9kt.onrender.com/',
    note: 'Use this section to embed live demos, product prototypes, or public project previews.',
  },
]

const experience = [
  {
    period: '2025 — 2026',
    title: 'Full Stack Developer',
    description:
      'Development of a gift recommendation platform with frontend, backend, API integrations, authentication, and database management.',
  },
  {
    period: '2021 — 2025',
    title: 'Restaurant Manager',
    description:
      'Led teams of 20+ people, managed operations, purchasing, inventory, and private events. Strong foundation in leadership, communication, and execution under pressure.',
  },
  {
    period: '2018 — 2020',
    title: 'Restaurant Manager',
    description:
      'Coordinated teams, daily operations, and service execution. Built transferable skills in ownership, organization, and problem solving.',
  },
]

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-grid bg-[size:42px_42px]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white">
            Harold<span className="text-sky-400">.</span>
          </a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#embed" className="hover:text-white">Embeds</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
              <Rocket size={16} /> Full Stack Developer · Madrid
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
              Building modern web experiences with React, Python, Flask, and a growing focus on AI.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-300">
              I create full stack applications with strong fundamentals in frontend and backend development, and I am currently expanding into Next.js, Generative AI, agentic systems, and Kotlin for Android.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                Contact Me
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-slate-300">
              <a href="https://github.com/Harold1Maldonado" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/harold-maldonado/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:haroldmaldonado1@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
                <Mail size={18} /> Email
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
                  <p className="text-sm text-slate-400">Current Focus</p>
                  <p className="text-lg font-semibold text-white">Full Stack + AI Exploration</p>
                </div>
                <BrainCircuit className="text-sky-400" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'REST APIs',
                  'Authentication',
                  'React UI',
                  'Flask Backend',
                  'Generative AI',
                  'Kotlin Basics',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Professional Summary</p>
                <p className="mt-2 leading-7 text-slate-200">
                  Full Stack Developer with practical experience building web applications, designing APIs, integrating external services, and delivering scalable features with clean code and strong learning velocity.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="About"
              title="A developer profile built on execution, learning, and product thinking."
              copy="I bring together technical training, practical full stack development, and years of operational leadership. That combination helps me build with structure, communicate clearly, and stay focused on real results."
            />
            <div className="card p-8 text-slate-300">
              <p className="leading-7">
                My current core stack includes JavaScript, React, Python, Flask, SQL, JWT, and SQLAlchemy. I am also expanding into Next.js, Generative AI, agentic workflows, and Android development with Kotlin. I am especially interested in roles where I can keep building modern web products while growing into AI-integrated applications.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Stack"
            title="All the technologies in your profile, clearly organized."
            copy="This section is structured to show your complete stack without making the page feel noisy or inflated."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {techGroups.map((group, index) => (
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

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Featured projects with clean presentation and strong technical framing."
            copy="Use this section to highlight your best work, focusing on technical decisions, real functionality, and your contribution to the final product."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-400">{project.type || 'Project'}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <Code2 className="text-slate-400" />
                </div>
                <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10">
                    Repository <Github size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="embed" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Project Embeds"
            title="A dedicated area to embed your live projects."
            copy="When a project allows iframe embedding, you can preview it directly here. If a site blocks embedding, replace it with a browser mockup image and external link."
          />
          <div className="mt-12 space-y-8">
            {embeddedProjects.map((item, index) => (
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
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                    Open Project <ExternalLink size={16} />
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <iframe
                    src={item.url}
                    title={item.title}
                    className="h-[420px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="A trajectory that combines technical growth and leadership under pressure."
            copy="This is where your professional transition becomes an advantage. It shows responsibility, team leadership, adaptability, and commitment to growth."
          />
          <div className="mt-12 space-y-6 border-l border-white/10 pl-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.title + item.period}
                className="relative card p-6"
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

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: <BrainCircuit className="text-sky-400" />,
                title: 'AI Exploration',
                copy: 'Exploring Generative AI, Gemini-based integrations, prompt design, and agentic workflows as part of a long-term technical direction.',
              },
              {
                icon: <Smartphone className="text-sky-400" />,
                title: 'Mobile Learning',
                copy: 'Hands-on experimentation with Kotlin and Android Studio to broaden product-building capabilities beyond the web.',
              },
              {
                icon: <Briefcase className="text-sky-400" />,
                title: 'Professional Focus',
                copy: 'Open to full stack, React, Python backend, and web + AI integration opportunities where growth and execution matter.',
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
          <motion.div
            className="card p-10 md:p-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Contact</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let’s build something valuable.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              I am looking for opportunities where I can contribute as a full stack developer, keep sharpening my frontend and backend skills, and grow into AI-powered product development.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:haroldmaldonado1@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400">
                <Mail size={18} /> haroldmaldonado1@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/harold-maldonado/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/Harold1Maldonado" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

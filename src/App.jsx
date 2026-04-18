import { useState } from 'react'
import { motion } from 'framer-motion'
import profilePhoto from './foto perfil.png'
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

const giftDemoUrl = 'https://sample-service-name-e9kt.onrender.com/'
const animalStoreDemoUrl = 'https://tiendaanimal.onrender.com/'

const translations = {
  en: {
    nav: { about: 'About', stack: 'Stack', projects: 'Projects', embeds: 'Embeds', contact: 'Contact' },
    hero: {
      role: 'Full Stack Developer · Madrid',
      title: 'Building modern web experiences with React, Python, Flask, and a growing focus on AI.',
      copy: 'I create full stack applications with strong frontend and backend foundations, while expanding into Next.js, Generative AI, agentic systems, and Kotlin for Android.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    summaryCard: {
      currentFocus: 'Current Focus',
      focusValue: 'Full Stack + AI Exploration',
      professionalSummary: 'Professional Summary',
      summary:
        'Full Stack Developer with practical experience building web applications, designing APIs, integrating external services, and delivering scalable features with clean code and strong learning velocity.',
    },
    about: {
      eyebrow: 'About',
      title: 'A developer profile built on execution, learning, and product thinking.',
      copy: 'I combine technical training, practical full stack development, and years of operational leadership. That combination helps me build with structure, communicate clearly, and stay focused on real results.',
      body: 'My current core stack includes JavaScript, React, Python, Flask, SQL, JWT, and SQLAlchemy. I am also expanding into Next.js, Generative AI, agentic workflows, and Android development with Kotlin. I am especially interested in roles where I can keep building modern web products while growing into AI-integrated applications.',
    },
    stack: {
      eyebrow: 'Stack',
      title: 'All the technologies in your profile, clearly organized.',
      copy: 'This section is structured to show your complete stack without making the page feel noisy or inflated.',
      groups: [
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
      ],
    },
    project: {
      eyebrow: 'Projects',
      title: 'Featured projects with clean presentation and strong technical framing.',
      copy: 'Use this section to highlight your best work, focusing on technical decisions, real functionality, and your contribution to the final product.',
      liveDemo: 'Live Demo',
      repo: 'Repository',
      pending: 'Demo Pending',
      label: 'Project',
      items: [
        {
          title: 'Gift Suggestion Platform',
          description:
            'Full stack application for generating personalized gift ideas. Built with Python, Flask, JavaScript, React, SQLAlchemy, and third-party integrations.',
          stack: ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy', 'Gemini API'],
          demo: giftDemoUrl,
          repo: 'https://github.com/HA-HA-Team/Final_Project-4Giifts',
        },
        {
          title: 'Animal Store',
          description:
            'E-commerce style project focused on pet products with product catalog, shopping flow, and responsive UI for real users.',
          stack: ['React', 'JavaScript', 'REST API', 'Responsive UI'],
          demo: animalStoreDemoUrl,
          repo: 'https://github.com/HA-HA-Team/Proyecto-TiendaAnimal',
        },
        {
          title: 'Landing Page - Travel Agency',
          description:
            'Paid landing page for a travel agency, optimized to present services, attract clients, and improve conversion.',
          stack: ['React', 'JavaScript', 'UI/UX', 'Landing Design'],
          demo: '#',
          repo: '#',
        },
        {
          title: 'MindFullSleep (Android)',
          description:
            'Android app for relaxation and sleep with nature sounds and guided meditations to improve rest and wellbeing.',
          stack: ['Kotlin', 'Android Studio', 'UX Mobile', 'Audio Playback'],
          demo: '#',
          repo: '#',
        },
      ],
    },
    embeds: {
      eyebrow: 'Project Embeds',
      title: 'Live projects',
      copy: 'For reliability, demos open in a new tab. This avoids blank iframe previews when hosting providers block embedding.',
      openProject: 'Open Project',
      previewDisabled:
        'Preview mode disabled to avoid blank screens caused by iframe restrictions. Use Open Project to view the live app.',
      items: [
        {
          title: '4Giift - Live Project',
          url: giftDemoUrl,
          note: 'Live demo hosted on Render. Open in a new tab for the full experience.',
        },
        {
          title: 'Animal Store - Live Project',
          url: animalStoreDemoUrl,
          note: 'If iframe is blocked by browser security headers, use the Open Project button.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'A trajectory that combines technical growth and leadership under pressure.',
      copy: 'This is where your professional transition becomes an advantage. It shows responsibility, team leadership, adaptability, and commitment to growth.',
      items: [
        {
          period: 'Mar 2026 — Present',
          title: 'Collaborator · Temotiva',
          description:
            'Collaborator at Temotiva (https://temotiva.com/), contributing to product and digital experience for “Smart micro-practices designed by experts to help you regain calm in seconds.”',
        },
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
      ],
    },
    cards: [
      {
        title: 'AI Exploration',
        copy: 'Exploring Generative AI, Gemini-based integrations, prompt design, and agentic workflows as part of a long-term technical direction.',
      },
      {
        title: 'Mobile Learning',
        copy: 'Hands-on experimentation with Kotlin and Android Studio to broaden product-building capabilities beyond the web.',
      },
      {
        title: 'Professional Focus',
        copy: 'Open to full stack, React, Python backend, and web + AI integration opportunities where growth and execution matter.',
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something valuable.',
      copy: 'I am looking for opportunities where I can contribute as a full stack developer, keep sharpening my frontend and backend skills, and grow into AI-powered product development.',
      name: 'Your name',
      email: 'Your email',
      message: 'Write your message',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message sent successfully.',
      sendError: 'Could not send the message right now. Try again in a moment.',
      noName: 'No name',
      notProvided: 'Not provided',
      noMessage: 'No message',
      mailSubject: 'New portfolio message',
      openMailError: 'Unable to open mail app automatically.',
    },
    langSwitch: 'ES / EN',
  },
  es: {
    nav: { about: 'Sobre mí', stack: 'Tecnologías', projects: 'Proyectos', embeds: 'Demos', contact: 'Contacto' },
    hero: {
      role: 'Desarrollador Full Stack · Madrid',
      title: 'Construyendo experiencias web modernas con React, Python, Flask y foco creciente en IA.',
      copy: 'Creo aplicaciones full stack con bases sólidas en frontend y backend, mientras sigo creciendo en Next.js, IA generativa, sistemas agénticos y Kotlin para Android.',
      viewProjects: 'Ver Proyectos',
      contactMe: 'Contáctame',
    },
    summaryCard: {
      currentFocus: 'Enfoque actual',
      focusValue: 'Full Stack + Exploración en IA',
      professionalSummary: 'Resumen profesional',
      summary:
        'Desarrollador Full Stack con experiencia práctica creando aplicaciones web, diseñando APIs, integrando servicios externos y entregando funcionalidades escalables con código limpio y alta velocidad de aprendizaje.',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Un perfil de desarrollo construido con ejecución, aprendizaje y visión de producto.',
      copy: 'Combino formación técnica, desarrollo full stack práctico y años de liderazgo operativo. Esa mezcla me ayuda a construir con estructura, comunicar con claridad y enfocarme en resultados reales.',
      body: 'Mi stack principal actual incluye JavaScript, React, Python, Flask, SQL, JWT y SQLAlchemy. También sigo creciendo en Next.js, IA generativa, flujos agénticos y desarrollo Android con Kotlin. Me interesan especialmente roles donde pueda seguir creando productos web modernos mientras evoluciono hacia aplicaciones integradas con IA.',
    },
    stack: {
      eyebrow: 'Tecnologías',
      title: 'Todas las tecnologías de tu perfil, organizadas con claridad.',
      copy: 'Esta sección está estructurada para mostrar tu stack completo sin que la página se sienta saturada.',
      groups: [
        {
          title: 'Stack principal',
          items: ['JavaScript', 'React', 'Python', 'Flask', 'HTML', 'CSS', 'SQL', 'JWT', 'SQLAlchemy', 'Git', 'GitHub', 'Bootstrap'],
        },
        {
          title: 'Conocimientos adicionales',
          items: ['Next.js', 'Node.js', 'Kotlin', 'Android Studio'],
        },
        {
          title: 'IA y exploración',
          items: ['IA Generativa', 'IA Agéntica', 'Gemini API', 'Prompt Engineering', 'Integraciones IA'],
        },
        {
          title: 'Flujo de trabajo',
          items: ['APIs REST', 'Autenticación', 'Diseño Responsive', 'Diseño de Base de Datos', 'Control de Versiones'],
        },
      ],
    },
    project: {
      eyebrow: 'Proyectos',
      title: 'Proyectos destacados con presentación clara y enfoque técnico sólido.',
      copy: 'Usa esta sección para mostrar tus mejores proyectos, destacando decisiones técnicas, funcionalidad real y tu aporte al producto final.',
      liveDemo: 'Demo en vivo',
      repo: 'Repositorio',
      pending: 'Demo pendiente',
      label: 'Proyecto',
      items: [
        {
          title: 'Plataforma de Recomendación de Regalos',
          description:
            'Aplicación full stack para generar ideas de regalos personalizadas. Construida con Python, Flask, JavaScript, React, SQLAlchemy e integraciones de terceros.',
          stack: ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy', 'Gemini API'],
          demo: giftDemoUrl,
          repo: 'https://github.com/HA-HA-Team/Final_Project-4Giifts',
        },
        {
          title: 'Tienda Animal',
          description:
            'Proyecto estilo e-commerce enfocado en productos para mascotas, con catálogo de productos, flujo de compra e interfaz responsive para usuarios reales.',
          stack: ['React', 'JavaScript', 'API REST', 'UI Responsive'],
          demo: animalStoreDemoUrl,
          repo: 'https://github.com/HA-HA-Team/Proyecto-TiendaAnimal',
        },
        {
          title: 'Landing Page - Agencia de Viajes',
          description:
            'Landing page de pago para agencia de turismo/viajes, optimizada para presentar servicios, captar clientes y mejorar conversión.',
          stack: ['React', 'JavaScript', 'UI/UX', 'Diseño Landing'],
          demo: '#',
          repo: '#',
        },
        {
          title: 'MindFullSleep (Android)',
          description:
            'Aplicación Android para relajación y sueño con sonidos de naturaleza y meditaciones guiadas para mejorar descanso y bienestar.',
          stack: ['Kotlin', 'Android Studio', 'UX Mobile', 'Reproducción de Audio'],
          demo: '#',
          repo: '#',
        },
      ],
    },
    embeds: {
      eyebrow: 'Demos de proyectos',
      title: 'Proyectos en vivo',
      copy: 'Para mayor fiabilidad, los demos se abren en una pestaña nueva. Esto evita iframes en blanco cuando el hosting bloquea la incrustación.',
      openProject: 'Abrir proyecto',
      previewDisabled:
        'Vista previa desactivada para evitar pantallas en blanco causadas por restricciones de iframe. Usa Abrir proyecto para ver la app en vivo.',
      items: [
        {
          title: '4Giift - Proyecto en vivo',
          url: giftDemoUrl,
          note: 'Demo alojada en Render. Ábrela en una nueva pestaña para la experiencia completa.',
        },
        {
          title: 'Tienda Animal - Proyecto en vivo',
          url: animalStoreDemoUrl,
          note: 'Si el iframe es bloqueado por cabeceras de seguridad del navegador, usa el botón Abrir proyecto.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Una trayectoria que combina crecimiento técnico y liderazgo bajo presión.',
      copy: 'Aquí tu transición profesional se convierte en ventaja. Demuestra responsabilidad, liderazgo de equipos, adaptabilidad y compromiso con el crecimiento.',
      items: [
        {
          period: 'Mar 2026 — Presente',
          title: 'Colaborador · Temotiva',
          description:
            'Colaborador en Temotiva (https://temotiva.com/), contribuyendo en producto y experiencia digital para “Microprácticas inteligentes diseñadas por expertos para recuperar tu calma en segundos.”',
        },
        {
          period: '2025 — 2026',
          title: 'Desarrollador Full Stack',
          description:
            'Desarrollo de una plataforma de recomendación de regalos con frontend, backend, integraciones API, autenticación y gestión de base de datos.',
        },
        {
          period: '2021 — 2025',
          title: 'Gerente de Restaurante',
          description:
            'Lideré equipos de más de 20 personas, gestioné operaciones, compras, inventario y eventos privados. Base sólida en liderazgo, comunicación y ejecución bajo presión.',
        },
        {
          period: '2018 — 2020',
          title: 'Gerente de Restaurante',
          description:
            'Coordiné equipos, operaciones diarias y ejecución de servicio. Desarrollé habilidades transferibles en ownership, organización y resolución de problemas.',
        },
      ],
    },
    cards: [
      {
        title: 'Exploración en IA',
        copy: 'Explorando IA Generativa, integraciones con Gemini, diseño de prompts y flujos agénticos como parte de una dirección técnica a largo plazo.',
      },
      {
        title: 'Aprendizaje móvil',
        copy: 'Experimentación práctica con Kotlin y Android Studio para ampliar capacidades de creación de producto más allá de la web.',
      },
      {
        title: 'Enfoque profesional',
        copy: 'Abierto a oportunidades full stack, React, backend Python e integración web + IA donde importen el crecimiento y la ejecución.',
      },
    ],
    contact: {
      eyebrow: 'Contacto',
      title: 'Construyamos algo valioso.',
      copy: 'Estoy buscando oportunidades donde pueda aportar como desarrollador full stack, seguir perfeccionando frontend y backend, y crecer en productos potenciados por IA.',
      name: 'Tu nombre',
      email: 'Tu correo',
      message: 'Escribe tu mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      sent: 'Mensaje enviado correctamente.',
      sendError: 'No se pudo enviar el mensaje ahora mismo. Inténtalo de nuevo en unos minutos.',
      noName: 'Sin nombre',
      notProvided: 'No especificado',
      noMessage: 'Sin mensaje',
      mailSubject: 'Nuevo mensaje de portfolio',
      openMailError: 'No se pudo abrir automáticamente la app de correo.',
    },
    langSwitch: 'EN / ES',
  },
}

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
  const [lang, setLang] = useState('es')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const t = translations[lang]

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus('loading')
    setSubmitMessage('')

    try {
      // Nota de error funcional:
      // Para enviar sin abrir Outlook/Gmail local, se usa un endpoint HTTP externo (FormSubmit).
      // Si el servicio está caído o bloqueado por red/CORS, se activa fallback a mailto.
      const response = await fetch('https://formsubmit.co/ajax/haroldmaldonado1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          _subject: `${t.contact.mailSubject} - ${contactForm.name || t.contact.noName}`,
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('formsubmit request failed')
      }

      setSubmitStatus('success')
      setSubmitMessage(t.contact.sent)
      setContactForm({ name: '', email: '', message: '' })
      return
    } catch (_error) {
      setSubmitStatus('error')
      setSubmitMessage(t.contact.sendError)
    }
  }

  return (
    <div className="min-h-screen bg-grid bg-[size:42px_42px]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white">Harold Maldonado<span className="text-sky-400">.</span></a>
          <button type="button" role="switch" aria-checked={lang === 'en'} onClick={() => setLang((prev) => (prev === 'es' ? 'en' : 'es'))} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white transition hover:bg-white/10 md:hidden">
            {t.langSwitch}
          </button>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">{t.nav.about}</a>
            <a href="#stack" className="hover:text-white">{t.nav.stack}</a>
            <a href="#projects" className="hover:text-white">{t.nav.projects}</a>
            <a href="#embed" className="hover:text-white">{t.nav.embeds}</a>
            <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
            <button type="button" role="switch" aria-checked={lang === 'en'} onClick={() => setLang((prev) => (prev === 'es' ? 'en' : 'es'))} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white transition hover:bg-white/10">
              {t.langSwitch}
            </button>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="space-y-8">
            <motion.div variants={fadeUp}>
              <img src={profilePhoto} alt="Harold Maldonado" className="h-60 w-60 rounded-full object-cover object-[center_15%] ring-2 ring-sky-400/40 ring-offset-4 ring-offset-slate-950" />
            </motion.div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300"><Rocket size={16} /> {t.hero.role}</motion.div>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">{t.hero.title}</motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-300">{t.hero.copy}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400">{t.hero.viewProjects} <ArrowRight size={18} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">{t.hero.contactMe}</a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="card relative overflow-hidden p-8">
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
                {['REST APIs', 'Authentication', 'React UI', 'Flask Backend', 'Generative AI', 'Kotlin Basics'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">{item}</div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">{t.summaryCard.professionalSummary}</p>
                <p className="mt-2 leading-7 text-slate-200">{t.summaryCard.summary}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="grid gap-8 lg:grid-cols-[220px_1fr]">
            <div className="card flex flex-col items-center gap-5 p-8">
              <img src={profilePhoto} alt="Harold Maldonado" className="h-40 w-40 rounded-full object-cover ring-2 ring-sky-400/40 ring-offset-4 ring-offset-slate-900" />
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Harold Maldonado</p>
                <p className="text-sm text-sky-400">{t.hero.role}</p>
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} copy={t.about.copy} />
              <div className="card p-8 text-slate-300"><p className="leading-7">{t.about.body}</p></div>
            </div>
          </motion.div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow={t.stack.eyebrow} title={t.stack.title} copy={t.stack.copy} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {t.stack.groups.map((group, index) => (
              <motion.div key={group.title} className="card p-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => <span key={item} className="badge">{item}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow={t.project.eyebrow} title={t.project.title} copy={t.project.copy} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {t.project.items.map((project, index) => {
              const hasValidDemo = project.demo && project.demo !== '#'
              return (
                <motion.article key={project.title} className="card p-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-sky-400">{t.project.label}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <Code2 className="text-slate-400" />
                  </div>
                  <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">{project.stack.map((item) => <span key={`${project.title}-${item}`} className="badge">{item}</span>)}</div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {hasValidDemo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200">{t.project.liveDemo} <ExternalLink size={16} /></a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-slate-500/40 px-5 py-3 font-medium text-slate-200">{t.project.pending}</span>
                    )}
                    {project.repo !== '#' ? (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10">{t.project.repo} <Github size={16} /></a>
                    ) : (
                      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-500">{t.project.repo} <Github size={16} /></span>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="embed" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow={t.embeds.eyebrow} title={t.embeds.title} copy={t.embeds.copy} />
          <div className="mt-12 space-y-8">
            {t.embeds.items.map((item, index) => (
              <motion.div key={`${item.title}-${index}`} className="card overflow-hidden p-4 md:p-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.note}</p>
                  </div>
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">{t.embeds.openProject} <ExternalLink size={16} /></a>
                </div>
                <div className="rounded-2xl border border-dashed border-white/20 bg-slate-900/80 p-6">
                  {/* Nota de error funcional:
                      Varios despliegues en Render envían cabeceras X-Frame-Options/CSP
                      y eso puede causar iframes en blanco aunque el proyecto sí funcione.
                      Se usa apertura en nueva pestaña para evitar falsa impresión de caída. */}
                  <p className="text-sm leading-6 text-slate-300">{t.embeds.previewDisabled}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} copy={t.experience.copy} />
          <div className="mt-12 space-y-6 border-l border-white/10 pl-6">
            {t.experience.items.map((item, index) => (
              <motion.div key={`${item.title}-${item.period}`} className="relative card p-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }}>
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
            {t.cards.map((card, idx) => (
              <motion.div key={card.title} className="card p-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
                <div className="mb-4">{idx === 0 ? <BrainCircuit className="text-sky-400" /> : idx === 1 ? <Smartphone className="text-sky-400" /> : <Briefcase className="text-sky-400" />}</div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.copy}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
          <motion.div className="card p-10 md:p-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{t.contact.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{t.contact.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{t.contact.copy}</p>
            <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleContactSubmit}>
              <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} placeholder={t.contact.name} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400" required />
              <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder={t.contact.email} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400" required />
              <textarea name="message" value={contactForm.message} onChange={handleContactChange} placeholder={t.contact.message} className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400 md:col-span-2" required />
              <button type="submit" disabled={submitStatus === 'loading'} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:justify-self-start"><Mail size={18} /> {submitStatus === 'loading' ? t.contact.sending : t.contact.send}</button>
            </form>
            {submitMessage ? (
              <p className={`mt-4 text-sm ${submitStatus === 'success' ? 'text-emerald-400' : 'text-amber-300'}`}>
                {submitMessage}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/harold-maldonado/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"><Linkedin size={18} /> LinkedIn</a>
              <a href="https://github.com/Harold1Maldonado" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"><Github size={18} /> GitHub</a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

const giftDemoUrl = 'https://sample-service-name-e9kt.onrender.com/'
const animalStoreDemoUrl = 'https://tiendaanimal.onrender.com/'
const moroccoTourismUrl = 'https://morocco-tourism-web.onrender.com'
const jtransnoroesteDemoUrl = 'https://jtransnoroeste.com/'
const presenciaDigitalProUrl = 'https://presenciadigitalpro.es/'

export const translations = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      embeds: 'Embeds',
      contact: 'Contact',
    },
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
          demo: moroccoTourismUrl,
          repo: 'https://github.com/Harold1Maldonado/LandingPage-AgenciaViajes',
        },
        {
          title: 'Jtransnoroeste',
          description:
            'Landing page development for a nationwide motorcycle transport company in Spain.',
          stack: ['React', 'Vite', 'JavaScript', 'Landing Design'],
          demo: jtransnoroesteDemoUrl,
          repo: 'https://github.com/Harold1Maldonado/Jtransnoroeste',
        },
        {
          title: 'Presencia Digital Pro',
          description:
            'Professional landing page for a digital services agency targeting local businesses and freelancers. Built with Next.js 14, Framer Motion, and Tailwind CSS, with animated sections, pricing packages, and a conversion-focused contact form.',
          stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Landing Design'],
          demo: presenciaDigitalProUrl,
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
            'Collaborator at Temotiva (https://temotiva.com/), contributing to product and digital experience for "Smart micro-practices designed by experts to help you regain calm in seconds."',
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
      title: 'Let\u2019s build something valuable.',
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
    nav: {
      about: 'Sobre mí',
      stack: 'Tecnologías',
      projects: 'Proyectos',
      embeds: 'Demos',
      contact: 'Contacto',
    },
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
          demo: moroccoTourismUrl,
          repo: 'https://github.com/Harold1Maldonado/LandingPage-AgenciaViajes',
        },
        {
          title: 'Jtransnoroeste',
          description:
            'Desarrollo de landing page para empresa de transporte de motos a nivel nacional en España.',
          stack: ['React', 'Vite', 'JavaScript', 'Diseño Landing'],
          demo: jtransnoroesteDemoUrl,
          repo: 'https://github.com/Harold1Maldonado/Jtransnoroeste',
        },
        {
          title: 'Presencia Digital Pro',
          description:
            'Landing page profesional para agencia de servicios digitales dirigida a negocios locales y autónomos. Construida con Next.js 14, Framer Motion y Tailwind CSS, con secciones animadas, paquetes de precios y formulario optimizado para conversión.',
          stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Diseño Landing'],
          demo: presenciaDigitalProUrl,
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
            'Colaborador en Temotiva (https://temotiva.com/), contribuyendo en producto y experiencia digital para "Microprácticas inteligentes diseñadas por expertos para recuperar tu calma en segundos."',
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

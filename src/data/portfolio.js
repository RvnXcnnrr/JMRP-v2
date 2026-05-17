export const profile = {
  name: 'Javy M. Rodillon',
  brandName: 'JMRP',
  logo: {
    srcLight: '/logo/JR-logo-lightmode.png',
    srcDark: '/logo/JR-logo-darkmode.png',
    alt: 'Javy Rodillon Logo',
    showInHero: false,
    glowOnDark: true,
  },
  title: 'IT Professional | Developer + System Administrator',
  availability: 'Available for IT roles',
  footer: 'Crafted for calm, reliable IT systems',
  imageAlt: 'Portrait of Javy M. Rodillon',
  badge: 'Dev + SysAdmin',
  location: 'Cagay de Oro Misamis Oriental',
  email: 'rodillon.javy.32181@gmail.com',
  phone: '+63 916 165 2279',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  subtitle: 'I build, manage, and optimize real-world systems.',
  typingPhrases: [
    'Building dependable apps and infrastructure',
    'Managing systems with uptime-first discipline',
    'Turning operational issues into stable workflows',
  ],
  highlights: [
    'System builder with hands-on troubleshooting experience',
    'Adaptable across IT support, networking, and web delivery',
    'Focused on reliable systems and smooth user experiences',
  ],
  ctas: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Contact', href: '#contact', variant: 'secondary' },
    {
      label: 'Download Resume',
      href: '/resume/Rodillon-resume.pdf',
      variant: 'ghost',
      download: true,
    },
  ],
}

export const about = {
  eyebrow: 'About',
  title: 'Grounded in systems, curious about people',
  subtitle:
    'I focus on building dependable environments, guiding users through change, and keeping technology quietly reliable.',
  intro:
    'I work across development and operations, building and customizing workflow-driven systems using Frappe Framework v11 and v15. Alongside feature delivery, I handle deployment, maintenance, and troubleshooting to keep services stable and responsive. This hybrid approach helps improve data accuracy, operational reliability, and day-to-day system usability.',
  focusLabel: 'Focus Areas',
  focusTitle: 'Reliable systems, real-world impact',
  focusItems: [
    'Service desk readiness and client-first communication',
    'Network and device setup that stays maintainable',
    'Continuous learning for modern IT workflows',
  ],
}

export const skills = {
  eyebrow: 'Skills',
  title: 'Hybrid toolkit for development and operations',
  subtitle:
    'Core capabilities across system development, administration, and production-ready tooling.',
  groups: [
    {
      title: 'Development',
      items: [
        'Frappe Framework (v11, v15)',
        'Web Development',
        'Workflow Customization',
        'Data Validation Logic',
      ],
    },
    {
      title: 'System Administration',
      items: [
        'System Deployment',
        'Server Configuration',
        'Troubleshooting',
        'Performance Monitoring',
      ],
    },
    {
      title: 'Tools',
      items: ['Windows & Linux', 'Git/GitHub', 'Microsoft 365', 'Monitoring Utilities'],
    },
  ],
}

export const experience = {
  eyebrow: 'Experience',
  title: 'Experience timeline with real-world impact',
  subtitle: 'A focused look at roles, projects, and hands-on IT work over time.',
  items: [
    {
      title: 'Product Developer Intern',
      company: 'Livro Wela School Systems - Grading Department',
      date: '2024',
      description:
        'Developed and customized grading system features using Frappe Framework v11 and v15, with a focus on accurate records and reliable academic workflows. Maintained and improved core functionality through structured troubleshooting and debugging of system issues. Assisted optimization and upgrade activities between framework versions to strengthen performance and long-term maintainability.',
      tags: [
        'FRAPPE FRAMEWORK',
        'SYSTEM DEVELOPMENT',
        'DATA MANAGEMENT',
        'TROUBLESHOOTING',
        'VERSION MIGRATION',
      ],
      icon: 'PD',
    },
    {
      title: 'Capstone Project - Smart IoT System',
      company: 'Smart Anom Monitoring',
      date: '2025',
      description:
        'Built an ESP32-based real-time monitoring system with a web dashboard for sensor data and alert tracking.',
      tags: ['ESP32', 'Sensors', 'Dashboard'],
      icon: 'IoT',
    },
    {
      title: 'Freelance / Personal Projects',
      company: 'Independent',
      date: '2023 - Present',
      description:
        'Developed small systems, handled technical troubleshooting, and delivered reliable support for local clients.',
      tags: ['Support', 'Automation', 'Web'],
      icon: 'FP',
      current: true,
    },
  ],
}

export const certifications = {
  eyebrow: 'Certifications',
  title: 'Verified credentials with privacy-first previews',
  subtitle: 'Blurred previews keep sensitive details protected while still proving expertise.',
  items: [
    {
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      image: '/certificates/CCNA.png',
      alt: 'Blurred CCNA certification preview',
      description:
        'Validated networking, security, and automation competencies for configuring and maintaining modern enterprise infrastructures.',
    },
    {
      title: 'CyberOps Associate',
      image: '/certificates/CYBEROPS.png',
      alt: 'Blurred CyberOps Associate certification preview',
      description:
        'Demonstrated operational cybersecurity skills including monitoring, incident analysis, and defensive response workflows.',
    },
    {
      title: 'NCII CSS',
      image: '/certificates/ncii-css.jpg',
      alt: 'Blurred NCII CSS certification preview',
      description:
        'Certified in computer systems servicing with hands-on capability in hardware setup, diagnostics, and technical support procedures.',
    },
    {
      title: 'Hube OJT',
      image: '/certificates/hube-ojt.jpg',
      alt: 'Blurred HUBE OJT certificate preview',
      description:
        'Completed on-the-job training focused on practical IT support, troubleshooting tasks, and day-to-day system maintenance.',
    },
    {
      title: 'Wela OJT',
      image: '/certificates/wela-ojt.jpg',
      alt: 'Placeholder WELA OJT certificate preview',
      description:
        'Participated in structured OJT activities covering operational workflows, user support, and foundational system administration tasks.',
    },
    {
      title: 'College Diploma',
      subtitle: 'Bachelor of Science in Information Technology',
      description:
        'Completed foundational and advanced IT coursework across systems, networking, and software development.',
      alt: 'Blurred College Diploma preview',
      badge: 'Official Diploma',
      highlight: true,
    },
  ],
}

export const projects = {
  eyebrow: 'Projects',
  title: 'Selected builds that solve real IT workflows',
  subtitle: 'Focused on clarity, system reliability, and faster support delivery.',
  items: [
    {
      title: 'Divine Mercy School of Bukidnon INC.',
      description:
        'A private school website for updates, events, and advertising school programs.',
      stack: ['React', 'Tailwind', 'Netlify'],
      live: 'https://dmsb.netlify.app/',
      repo: null,
    },
    {
      title: 'RMTI TESDA School Website',
      description:
        'A private TESDA school website for ads, events, and news updates.',
      stack: ['React', 'Tailwind', 'Vercel'],
      live: 'https://rmti.vercel.app/',
      repo: null,
    },
    {
      title: 'Smart Anom Hydroponics Monitoring (Capstone)',
      description:
        'An ESP32 and water sensor system for monitoring hydroponics plants, paired with a school website.',
      stack: ['ESP32', 'Sensors', 'Django', 'Web Dashboard'],
      live: 'https://smartanom.me/',
      repo: null,
    },
  ],
}

export const services = {
  eyebrow: 'Services',
  title: 'Development and operations support that keeps teams moving',
  subtitle: 'Hybrid services that combine delivery speed, stability, and practical system ownership.',
  items: [
    {
      title: 'System Development',
      description:
        'Design and customize business workflows, forms, and modules for reliable day-to-day operations.',
    },
    {
      title: 'System Administration',
      description:
        'Deploy, configure, and maintain systems with uptime-focused monitoring and controlled updates.',
    },
    {
      title: 'PC Troubleshooting',
      description:
        'Diagnose slowdowns, hardware issues, and software conflicts with clear fixes.',
    },
    {
      title: 'Network Setup',
      description: 'Configure routers, switches, and secure connectivity for small teams.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: "Let's keep your systems running",
  subtitle: 'Reach out for support, collaboration, or the next opportunity.',
  directLabel: 'Direct Contact',
  socialLabel: 'Social',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'GitHub', href: 'https://github.com/RvnXcnnrr' },
    { label: 'Behance', href: 'https://www.behance.net' },
  ],
}

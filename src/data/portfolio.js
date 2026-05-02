export const profile = {
  name: 'Javy M. Rodillon',
  brandName: 'JMRP',
  title: 'IT Graduate | System Builder | Problem Solver',
  availability: 'Available for IT roles',
  footer: 'Crafted for calm, reliable IT systems',
  imageAlt: 'Portrait of Javy M. Rodillon',
  badge: 'Available for Work',
  location: 'Cagay de Oro Misamis Oriental',
  email: 'rodillon.javy.32181@gmail.com',
  phone: '+63 916 165 2279',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  typingPhrases: [
    'Optimizing systems for people',
    'Building resilient networks',
    'Turning issues into solutions',
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
    'As an IT graduate, I blend hands-on troubleshooting with a calm, service-first mindset. I enjoy translating technical needs into clear steps, whether I am configuring a workstation, strengthening a network, or collaborating on a web experience. My goal is to keep systems stable, people supported, and processes easy to follow.',
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
  title: 'Toolbox built for modern IT work',
  subtitle:
    'Solid fundamentals across infrastructure, productivity tooling, and web delivery.',
  groups: [
    {
      title: 'Technical',
      items: [
        'Networking basics',
        'Hardware diagnostics',
        'System imaging',
        'IT documentation',
      ],
    },
    {
      title: 'Tools',
      items: ['Windows & Linux', 'Active Directory', 'Microsoft 365', 'Git/GitHub'],
    },
    {
      title: 'Development',
      items: ['HTML/CSS', 'JavaScript fundamentals', 'React basics', 'API integration'],
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
    },
    {
      title: 'CyberOps Associate',
      image: '/certificates/CYBEROPS.png',
      alt: 'Blurred CyberOps Associate certification preview',
    },
    {
      title: 'NCII CSS',
      image: '/certificates/ncii-css.jpg',
      alt: 'Blurred NCII CSS certification preview',
    },
    {
      title: 'HUBE OJT',
      image: '/certificates/hube-ojt.jpg',
      alt: 'Blurred HUBE OJT certificate preview',
    },
    {
      title: 'WELA OJT',
      alt: 'Placeholder WELA OJT certificate preview',
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
  title: 'Support that keeps teams moving',
  subtitle: 'Practical services for individuals, labs, and small teams.',
  items: [
    {
      title: 'PC Troubleshooting',
      description:
        'Diagnose slowdowns, hardware issues, and software conflicts with clear fixes.',
    },
    {
      title: 'Network Setup',
      description: 'Configure routers, switches, and secure connectivity for small teams.',
    },
    {
      title: 'System Setup',
      description: 'Deploy clean workstation builds with consistent tools and updates.',
    },
    {
      title: 'Basic Web Development',
      description: 'Build clean, responsive sites that connect people to services quickly.',
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

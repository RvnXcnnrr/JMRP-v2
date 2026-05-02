import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../../data/portfolio'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-40">
      <div className="glass border-b border-black/10 px-5 py-4 dark:border-white/10 sm:px-6 sm:py-5 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 lg:gap-8 xl:max-w-7xl">
          <a href="#home" aria-label="Go to hero section" className="group inline-flex items-center">
            <Logo
              theme={theme}
              src={profile.logo?.src}
              srcLight={profile.logo?.srcLight}
              srcDark={profile.logo?.srcDark}
              alt={profile.logo?.alt}
              tone={profile.logo?.tone}
              glowOnDark={profile.logo?.glowOnDark}
              sizeClassName="h-7 sm:h-9 lg:h-10"
            />
          </a>
          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-4 text-xs md:flex lg:gap-6"
          >
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/resume/Rodillon-resume.pdf"
              download
              className="btn-primary btn-sm hidden md:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-ink transition hover:border-sun/70 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-pearl md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="relative h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition duration-300 ${
                    isOpen ? 'translate-y-1.5 rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-full bg-current transition duration-300 ${
                    isOpen ? '-translate-y-1.5 -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.aside
              id="mobile-menu"
              className="absolute right-0 top-0 h-full w-[78%] max-w-xs bg-pearl p-6 shadow-soft dark:bg-graphite"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-slate dark:text-pearl/60">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-full border border-black/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-ink dark:border-white/10 dark:text-pearl"
                >
                  Close
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-2xl border border-black/10 px-4 py-3 text-sm font-medium text-ink transition hover:border-sun/70 hover:shadow-glow dark:border-white/10 dark:text-pearl"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8">
                <a href="/resume/Rodillon-resume.pdf" download className="btn-primary w-full">
                  Resume
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

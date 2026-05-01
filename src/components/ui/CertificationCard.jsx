import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Card from './Card'

const CertificationCard = ({ imageSrc, alt, title, issuer, year }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <>
      <Card className="group relative flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 transition duration-300 group-hover:ring-2 group-hover:ring-sun/70 dark:ring-white/10">
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover blur-lg transition duration-300 group-hover:scale-105 group-hover:blur-md"
          />
          <div className="absolute inset-0 bg-ink/30 dark:bg-ink/45" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.4em] text-pearl/70">
              Protected Preview
            </span>
          </div>
        </div>
        <div className="mt-4 flex-1">
          <h3 className="text-base font-semibold text-ink dark:text-pearl sm:text-lg">
            {title}
          </h3>
          {(issuer || year) && (
            <p className="mt-2 text-sm text-ink/60 dark:text-pearl/60">
              {issuer && <span>{issuer}</span>}
              {issuer && year && <span className="mx-2">•</span>}
              {year && <span>{year}</span>}
            </p>
          )}
        </div>
        <button type="button" onClick={() => setOpen(true)} className="btn-secondary mt-5 w-full">
          Preview
        </button>
      </Card>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${title} preview`}
              className="glass w-full max-w-2xl rounded-3xl p-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-slate dark:text-pearl/60">
                    Protected Preview
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-ink dark:text-pearl">
                    {title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-black/10 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-ink transition hover:border-sun/70 hover:shadow-glow dark:border-white/10 dark:text-pearl"
                >
                  Close
                </button>
              </div>
              <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
                <img
                  src={imageSrc}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-ink/30 dark:bg-ink/45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-pearl/70">
                    Protected Preview
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CertificationCard

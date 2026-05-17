import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Card from './Card'

const CertificationCard = ({
  imageSrc,
  alt,
  title,
  subtitle,
  description,
  issuer,
  year,
  badge,
  highlight = false,
}) => {
  const [open, setOpen] = useState(false)

  const downloadWithWatermark = async () => {
    try {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = imageSrc
      await new Promise((res, rej) => {
        img.onload = res
        img.onerror = rej
      })

      const canvas = document.createElement('canvas')
      const maxDim = 2500
      const scale = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight))
      canvas.width = Math.round(img.naturalWidth * scale)
      canvas.height = Math.round(img.naturalHeight * scale)
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      const ownerName = '© Javy M. Rodillon' // change this text if you want a different name
      const padding = Math.round(canvas.width / 50)

      // Create a small canvas used as a repeating diagonal watermark pattern
      const patternCanvas = document.createElement('canvas')
      patternCanvas.width = 480
      patternCanvas.height = 160
      const pctx = patternCanvas.getContext('2d')
      pctx.clearRect(0, 0, patternCanvas.width, patternCanvas.height)
      pctx.translate(patternCanvas.width / 2, patternCanvas.height / 2)
      pctx.rotate((-20 * Math.PI) / 180)
      pctx.translate(-patternCanvas.width / 2, -patternCanvas.height / 2)

      const patternFontSize = Math.round(patternCanvas.height * 0.32)
      pctx.font = `${patternFontSize}px Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial`
      pctx.textAlign = 'center'
      pctx.textBaseline = 'middle'
      // stroke lightly for contrast, then fill with higher opacity
      pctx.strokeStyle = 'rgba(255,255,255,0.06)'
      pctx.lineWidth = Math.max(1, Math.round(patternFontSize * 0.12))
      pctx.strokeText(ownerName, patternCanvas.width / 2, patternCanvas.height / 2)
      pctx.fillStyle = 'rgba(0,0,0,0.12)'
      pctx.fillText(ownerName, patternCanvas.width / 2, patternCanvas.height / 2)

      // Apply the repeating pattern over the whole image with subtle opacity
      const pattern = ctx.createPattern(patternCanvas, 'repeat')
      ctx.save()
      ctx.globalAlpha = 0.48
      ctx.fillStyle = pattern
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      // Large centered watermark (diagonal) like the sample image
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate((-20 * Math.PI) / 180)
      const bigFontSize = Math.round(canvas.width / 6)
      ctx.font = `${bigFontSize}px Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial`
      // draw a subtle white stroke for contrast, then darker fill
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx.lineWidth = Math.max(2, Math.round(bigFontSize * 0.04))
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.strokeText(ownerName, 0, 0)
      ctx.fillStyle = 'rgba(0,0,0,0.14)'
      ctx.fillText(ownerName, 0, 0)
      ctx.restore()

      // Bottom small caption (optional ID or URL)
      ctx.save()
      const smallFontSize = Math.max(12, Math.round(canvas.width / 80))
      ctx.font = `${smallFontSize}px Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial`
      ctx.fillStyle = 'rgba(0,0,0,0.55)'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      const bottomText = `www.javyrodillon.dev` // change if you want different footer text
      ctx.fillText(bottomText, canvas.width / 2, canvas.height - padding)
      ctx.restore()

      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${title.replace(/\s+/g, '_')}_cert.jpg`
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(url)
      }, 'image/jpeg', 0.92)
    } catch (err) {
      // fallback: open the original image in new tab
      window.open(imageSrc, '_blank', 'noopener')
    }
  }

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
      <Card
        className={`group relative flex h-full flex-col ${
          highlight
            ? 'ring-1 ring-sun/50 shadow-[0_0_20px_rgba(255,214,10,0.2)]'
            : ''
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 transition duration-300 group-hover:ring-2 group-hover:ring-sun/70 dark:ring-white/10">
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            // Crop the thumbnail by scaling and translating so the full sensitive area isn't visible
            style={{ transform: 'scale(1.35) translateX(-12%) translateY(-8%)' }}
          />
          <div className="absolute inset-0 bg-ink/30 dark:bg-ink/45" />
          {badge && (
            <div className="absolute left-3 top-3">
              <span className="rounded-full border border-sun/70 bg-sun/90 px-3 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.26em] text-ink shadow-glow">
                {badge}
              </span>
            </div>
          )}
          {/* removed Protected Preview label per user request */}
        </div>
        <div className="mt-4 flex-1">
          <h3 className="text-base font-semibold text-ink dark:text-pearl sm:text-lg">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-sm font-medium text-ink/75 dark:text-pearl/75">{subtitle}</p>
          )}
          {(issuer || year) && (
            <p className="mt-2 text-sm text-ink/60 dark:text-pearl/60">
              {issuer && <span>{issuer}</span>}
              {issuer && year && <span className="mx-2">•</span>}
              {year && <span>{year}</span>}
            </p>
          )}
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-pearl/70">
              {description}
            </p>
          )}
        </div>
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Preview"
            title="Preview"
            className="rounded-full border border-black/10 bg-transparent p-2 transition hover:border-sun/70 hover:shadow-glow dark:border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink dark:text-pearl">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
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
                    {/* preview header intentionally left blank */}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-ink dark:text-pearl">
                    {title}
                  </h4>
                </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close"
                      title="Close"
                      className="rounded-full border border-black/10 bg-transparent p-2 transition hover:border-sun/70 hover:shadow-glow dark:border-white/10 mr-3"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink dark:text-pearl">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={downloadWithWatermark}
                      aria-label="Download"
                      title="Download"
                      className="rounded-full border border-black/10 bg-transparent p-2 transition hover:border-sun/70 hover:shadow-glow dark:border-white/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink dark:text-pearl">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </button>
                  </div>
              </div>
              <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
                <img
                  src={imageSrc}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
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

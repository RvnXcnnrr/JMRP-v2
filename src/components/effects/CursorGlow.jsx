import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

const CursorGlow = ({ theme }) => {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 120, damping: 20 })
  const springY = useSpring(y, { stiffness: 120, damping: 20 })
  const rafRef = useRef(null)
  const latestPosition = useRef({ x: -200, y: -200 })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateEnabled = (event) => setEnabled(event.matches)

    setEnabled(media.matches)
    media.addEventListener('change', updateEnabled)

    return () => media.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const handleMove = (event) => {
      latestPosition.current = { x: event.clientX - 160, y: event.clientY - 160 }
      if (rafRef.current) {
        return
      }

      rafRef.current = window.requestAnimationFrame(() => {
        x.set(latestPosition.current.x)
        y.set(latestPosition.current.y)
        rafRef.current = null
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [enabled, x, y])

  const glow = useMemo(() => {
    return theme === 'dark'
      ? 'radial-gradient(circle, rgba(255, 214, 10, 0.35), transparent 65%)'
      : 'radial-gradient(circle, rgba(255, 214, 10, 0.45), rgba(11, 11, 11, 0.12) 55%, transparent 70%)'
  }, [theme])

  if (!enabled) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-0 h-[320px] w-[320px] rounded-full opacity-70 blur-3xl ${
        theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'
      }`}
      style={{ translateX: springX, translateY: springY, background: glow }}
    />
  )
}

export default CursorGlow

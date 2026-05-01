export const easing = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
}

export const stagger = (staggerChildren = 0.12, delayChildren = 0.08) => ({
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

const SectionWrapper = ({ id, eyebrow, title, subtitle, children }) => {
  return (
    <section id={id} className="relative scroll-mt-32 py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 xl:max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            {eyebrow && (
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate dark:text-pearl/60">
                {eyebrow}
              </p>
            )}
            <div className="mt-5 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              {title && (
                <h2 className="text-3xl font-semibold leading-[1.1] text-ink dark:text-pearl sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-base leading-relaxed text-ink/70 dark:text-pearl/70 sm:text-lg">
                  {subtitle}
                </p>
              )}
            </div>
          </motion.div>
        )}
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}

export default SectionWrapper

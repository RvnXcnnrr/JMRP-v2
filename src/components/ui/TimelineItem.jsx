import { motion } from 'framer-motion'
import { easing } from '../../utils/motion'

const itemVariants = {
  hidden: (isLeft) => ({
    opacity: 0,
    y: 24,
    x: isLeft ? -20 : 20,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: easing },
  },
}

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0
  const alignment = isLeft ? 'md:justify-start' : 'md:justify-end'
  const spacing = isLeft ? 'md:pr-12' : 'md:pl-12'
  const cardAlign = isLeft ? 'md:ml-auto' : 'md:mr-auto'

  return (
    <motion.div
      variants={itemVariants}
      custom={isLeft}
      className={`relative md:flex ${alignment}`}
    >
      <span className="absolute left-4 top-7 h-3.5 w-3.5 rounded-full bg-sun shadow-glow ring-4 ring-ink/80 dark:ring-graphite md:left-1/2" />
      <div className={`ml-12 md:ml-0 md:w-[calc(50%-1.5rem)] ${spacing}`}>
          <div
          className={`rounded-2xl border border-white/10 bg-ink/95 p-6 text-pearl shadow-soft transition duration-300 hover:scale-105 hover:border-sun/70 hover:shadow-glow dark:bg-graphite ${cardAlign}`}
        >
          <div className="flex items-start gap-4">
            {item.icon && (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sun/50 bg-sun/10 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-sun">
                {item.icon}
              </span>
            )}
            <div>
              <h3 className="text-lg font-semibold text-pearl sm:text-xl">
                {item.title}
              </h3>
              {item.company && (
                <p className="mt-1 text-sm text-pearl/70 sm:text-base">{item.company}</p>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-pearl/60">
            <span>{item.date}</span>
            {item.current && (
              <span className="rounded-full border border-sun/70 bg-sun/15 px-3 py-1 text-[0.55rem] text-sun">
                Present
              </span>
            )}
          </div>

          <p className="mt-3 text-sm text-pearl/80 sm:text-base">
            {item.description}
          </p>

          {item.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.55rem] uppercase tracking-[0.28em] text-pearl/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}

export default TimelineItem

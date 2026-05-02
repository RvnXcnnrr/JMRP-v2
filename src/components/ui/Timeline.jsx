import { motion } from 'framer-motion'
import { stagger } from '../../utils/motion'
import TimelineItem from './TimelineItem'

const Timeline = ({ items = [] }) => {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-0 h-full w-px bg-sun/30 dark:bg-sun/40 md:left-1/2" />
      <motion.div
        variants={stagger(0.18, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-8 sm:space-y-10 lg:space-y-12"
      >
        {items.map((item, index) => (
          <TimelineItem key={`${item.title}-${index}`} item={item} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default Timeline

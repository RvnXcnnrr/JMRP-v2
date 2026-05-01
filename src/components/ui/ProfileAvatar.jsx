import { motion } from 'framer-motion'

const ProfileAvatar = ({ imageSrc, alt, showBadge = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-48 w-48 rounded-full bg-sun/20 blur-3xl sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72" />
      </div>

      <div className="group relative flex items-center justify-center md:animate-float">
        <div className="relative rounded-full border-[3px] border-sun/90 p-1 shadow-glow transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(255,214,10,0.55)] sm:border-[4px]">
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-[120px] w-[120px] rounded-full object-cover sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:h-[240px] lg:w-[240px] xl:h-[280px] xl:w-[280px]"
          />
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-sun/25 via-transparent to-white/20 opacity-70" />
        </div>

        {showBadge && (
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-sun/70 bg-sun/95 px-4 py-1 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-ink shadow-glow">
            Available for Work
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default ProfileAvatar

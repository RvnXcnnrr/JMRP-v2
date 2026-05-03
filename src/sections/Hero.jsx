import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TypingText from '../components/effects/TypingText'
import Logo from '../components/ui/Logo'
import ProfileAvatar from '../components/ui/ProfileAvatar'
import { hero, profile } from '../data/portfolio'
import { fadeUp, stagger } from '../utils/motion'

const profileImage = '/profile/proflie-image.jpg'

const ctaClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const Hero = ({ theme }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const floatUp = useTransform(scrollYProgress, [0, 1], [0, -90])
  const floatDown = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pt-40"
    >
      <motion.div
        style={{ y: floatUp }}
        className="pointer-events-none absolute left-4 top-24 h-48 w-48 rounded-full bg-sun/30 blur-3xl"
      />
      <motion.div
        style={{ y: floatDown }}
        className="pointer-events-none absolute right-6 top-36 h-64 w-64 rounded-full bg-white/25 blur-3xl dark:bg-sun/15"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 text-center md:order-1 md:text-left">
            <motion.div variants={stagger(0.14, 0.05)} initial="hidden" animate="show">
              <motion.p
                variants={fadeUp}
                className="text-[0.65rem] uppercase tracking-[0.4em] text-slate dark:text-pearl/60"
              >
                {profile.availability}
              </motion.p>
              {profile.logo?.showInHero && (
                <motion.div
                  variants={fadeUp}
                  className="mt-5 flex justify-center md:justify-start"
                >
                  <Logo
                    theme={theme}
                    src={profile.logo?.src}
                    srcLight={profile.logo?.srcLight}
                    srcDark={profile.logo?.srcDark}
                    alt={profile.logo?.alt}
                    tone={profile.logo?.tone}
                    glowOnDark={profile.logo?.glowOnDark}
                    sizeClassName="h-14 sm:h-16 lg:h-20"
                    className="opacity-90"
                  />
                </motion.div>
              )}
              <motion.h1
                variants={fadeUp}
                className="mt-4 mx-auto max-w-3xl text-3xl font-semibold leading-[1.05] text-ink dark:text-pearl sm:text-5xl md:mx-0 lg:text-7xl"
              >
                {profile.name}
              </motion.h1>
              <motion.div variants={fadeUp} className="mt-4 flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-ink shadow-glow">
                  <span aria-hidden="true">⚙</span>
                  {profile.badge}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 mx-auto max-w-3xl text-base font-medium text-ink/80 dark:text-pearl/80 sm:text-xl md:mx-0 lg:text-2xl"
              >
                {profile.title}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 mx-auto max-w-3xl text-sm text-ink/75 dark:text-pearl/75 sm:text-base md:mx-0"
              >
                {hero.subtitle}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-6">
                <TypingText
                  phrases={hero.typingPhrases}
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ink/70 dark:text-pearl/70 sm:text-xs"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
              >
                {hero.ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    download={cta.download}
                    className={`${ctaClasses[cta.variant] || 'btn-secondary'} w-full sm:w-auto`}
                  >
                    {cta.label}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger(0.12, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {hero.highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="glass rounded-2xl p-5 text-sm text-ink/70 dark:text-pearl/70"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <ProfileAvatar imageSrc={profileImage} alt={profile.imageAlt} showBadge />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import { about } from '../data/portfolio'

const About = () => {
  return (
    <SectionWrapper
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      subtitle={about.subtitle}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="text-base leading-relaxed text-ink/80 dark:text-pearl/80 sm:text-lg">
            {about.intro}
          </p>
        </Card>
        <Card className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate dark:text-pearl/60">
              {about.focusLabel}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-ink dark:text-pearl sm:text-xl">
              {about.focusTitle}
            </h3>
          </div>
          <div className="space-y-3 text-sm text-ink/70 dark:text-pearl/70 sm:text-base">
            {about.focusItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  )
}

export default About

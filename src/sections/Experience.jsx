import SectionWrapper from '../components/ui/SectionWrapper'
import Timeline from '../components/ui/Timeline'
import { experience } from '../data/portfolio'

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      eyebrow={experience.eyebrow}
      title={experience.title}
      subtitle={experience.subtitle}
    >
      <Timeline items={experience.items} />
    </SectionWrapper>
  )
}

export default Experience

import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import { skills } from '../data/portfolio'

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      eyebrow={skills.eyebrow}
      title={skills.title}
      subtitle={skills.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <Card key={group.title} className="flex h-full flex-col gap-4">
            <h3 className="text-lg font-semibold text-ink dark:text-pearl sm:text-xl">
              {group.title}
            </h3>
            <ul className="grid gap-3 text-sm text-ink/70 dark:text-pearl/70">
              {group.items.map((item) => (
                <li key={item} className="chip text-center">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills

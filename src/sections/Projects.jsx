import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import { projects } from '../data/portfolio'

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      eyebrow={projects.eyebrow}
      title={projects.title}
      subtitle={projects.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <Card key={project.title} className="flex h-full flex-col">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-ink dark:text-pearl sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70 dark:text-pearl/70 sm:text-base">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full sm:flex-1"
                >
                  View
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full sm:flex-1"
                >
                  GitHub
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects

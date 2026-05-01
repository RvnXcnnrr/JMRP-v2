import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import { services } from '../data/portfolio'

const Services = () => {
  return (
    <SectionWrapper
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
      subtitle={services.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.items.map((service) => (
          <Card key={service.title}>
            <h3 className="text-lg font-semibold text-ink dark:text-pearl sm:text-xl">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-ink/70 dark:text-pearl/70 sm:text-base">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Services

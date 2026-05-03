import CertificationCard from '../components/ui/CertificationCard'
import SectionWrapper from '../components/ui/SectionWrapper'
import { certifications } from '../data/portfolio'
import certPlaceholder from '../assets/certification-placeholder.svg'

const Certifications = () => {
  const sortedItems = [...certifications.items].sort((a, b) => {
    if (Boolean(a.highlight) !== Boolean(b.highlight)) {
      return a.highlight ? -1 : 1
    }

    return a.title.localeCompare(b.title)
  })

  return (
    <SectionWrapper
      id="certifications"
      eyebrow={certifications.eyebrow}
      title={certifications.title}
      subtitle={certifications.subtitle}
    >
      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item) => (
          <CertificationCard
            key={item.title}
            imageSrc={item.image || certPlaceholder}
            alt={item.alt}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            issuer={item.issuer}
            year={item.year}
            badge={item.badge}
            highlight={item.highlight}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Certifications

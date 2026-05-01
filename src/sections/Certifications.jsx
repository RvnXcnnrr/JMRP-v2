import CertificationCard from '../components/ui/CertificationCard'
import SectionWrapper from '../components/ui/SectionWrapper'
import { certifications } from '../data/portfolio'
import certPlaceholder from '../assets/certification-placeholder.svg'

const Certifications = () => {
  return (
    <SectionWrapper
      id="certifications"
      eyebrow={certifications.eyebrow}
      title={certifications.title}
      subtitle={certifications.subtitle}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certifications.items.map((item) => (
          <CertificationCard
            key={item.title}
            imageSrc={item.image || certPlaceholder}
            alt={item.alt}
            title={item.title}
            issuer={item.issuer}
            year={item.year}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Certifications

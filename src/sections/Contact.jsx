import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import { contact, profile } from '../data/portfolio'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const phoneLink = profile.phone.replace(/[^+\d]/g, '')

  return (
    <SectionWrapper
      id="contact"
      eyebrow={contact.eyebrow}
      title={contact.title}
      subtitle={contact.subtitle}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="field mt-2"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="field mt-2"
              />
            </div>
            <div>
              <label className="label">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project or support request"
                className="field mt-2"
              />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about the challenge"
                className="field mt-2"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </Card>
        <div className="space-y-6">
          <Card>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate dark:text-pearl/60">
              {contact.directLabel}
            </p>
            <div className="mt-4 space-y-3 text-sm text-ink/80 dark:text-pearl/80 sm:text-base">
              <a
                href={`mailto:${profile.email}`}
                className="block text-ink/80 transition hover:text-ink dark:text-pearl/80 dark:hover:text-pearl"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${phoneLink}`}
                className="block text-ink/80 transition hover:text-ink dark:text-pearl/80 dark:hover:text-pearl"
              >
                {profile.phone}
              </a>
              <p>{profile.location}</p>
            </div>
          </Card>
          <Card>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate dark:text-pearl/60">
              {contact.socialLabel}
            </p>
            <div className="mt-4 space-y-3 text-sm sm:text-base">
              {contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-ink/80 transition hover:text-ink dark:text-pearl/80 dark:hover:text-pearl"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact

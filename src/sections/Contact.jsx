import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Card from '../components/ui/Card'
import SectionWrapper from '../components/ui/SectionWrapper'
import { contact, profile } from '../data/portfolio'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Contact = () => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' })
    }
  }

  const validate = () => {
    const nextErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSending) {
      return
    }

    if (!validate()) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' })
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured. Add your EmailJS keys to .env.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: 'idle', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          from_name: values.name.trim(),
          reply_to: values.email.trim(),
          to_name: profile.name,
        },
        publicKey
      )

      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
      setValues(initialValues)
      setErrors({})
    } catch (error) {
      setStatus({
        type: 'error',
        message: error?.text || 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
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
                value={values.name}
                onChange={handleChange}
                className={`field mt-2 ${
                  errors.name ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-200' : ''
                }`}
                aria-invalid={Boolean(errors.name)}
                required
              />
              {errors.name && (
                <p className="mt-2 text-xs text-rose-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={values.email}
                onChange={handleChange}
                className={`field mt-2 ${
                  errors.email ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-200' : ''
                }`}
                aria-invalid={Boolean(errors.email)}
                required
              />
              {errors.email && (
                <p className="mt-2 text-xs text-rose-500" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="label">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about the challenge"
                value={values.message}
                onChange={handleChange}
                className={`field mt-2 ${
                  errors.message
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-200'
                    : ''
                }`}
                aria-invalid={Boolean(errors.message)}
                required
              />
              {errors.message && (
                <p className="mt-2 text-xs text-rose-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary w-full transition disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSending}
            >
              {isSending ? <span className="animate-pulse">Sending...</span> : 'Send Message'}
            </button>
            {status.message && (
              <p
                className={`text-sm transition-opacity duration-300 ${
                  status.type === 'success' ? 'text-emerald-600' : 'text-rose-500'
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
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

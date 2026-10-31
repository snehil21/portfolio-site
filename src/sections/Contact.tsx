import { motion } from 'framer-motion'
import BorderBeam from '@components/BorderBeam'
import Container from '@components/Container'
import LocationMap from '@components/LocationMap'
import Section from '@components/Section'
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { SECTION_CONTENT, SECTION_COPY } from '@data/sections'

type FormData = {
  name: string
  email: string
  message: string
}

type FormField = keyof FormData
type FormErrors = Partial<Record<FormField, string>>
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialFormData: FormData = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateField = (field: FormField, value: string) => {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return `${field.charAt(0).toUpperCase()}${field.slice(1)} is required.`
  }

  if (field === 'name' && trimmedValue.length < 2) {
    return 'Name must be at least 2 characters.'
  }

  if (field === 'name' && trimmedValue.length > 80) {
    return 'Name must be 80 characters or fewer.'
  }

  if (field === 'email' && !emailPattern.test(trimmedValue)) {
    return 'Enter a valid email address.'
  }

  if (field === 'email' && trimmedValue.length > 254) {
    return 'Email must be 254 characters or fewer.'
  }

  if (field === 'message' && trimmedValue.length < 10) {
    return 'Message must be at least 10 characters.'
  }

  if (field === 'message' && trimmedValue.length > 2000) {
    return 'Message must be 2,000 characters or fewer.'
  }

  return ''
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const field = name as FormField

    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))

    if (submissionStatus !== 'idle') {
      setSubmissionStatus('idle')
      setSubmissionMessage('')
    }
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as FormField
    const error = validateField(field, e.target.value)
    setErrors((prev) => ({ ...prev, [field]: error || undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = (Object.keys(formData) as FormField[]).reduce<FormErrors>(
      (result, field) => {
        const error = validateField(field, formData[field])
        if (error) result[field] = error
        return result
      },
      {},
    )

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmissionStatus('error')
      setSubmissionMessage('Please correct the highlighted fields.')
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setSubmissionStatus('error')
      setSubmissionMessage(
        'The contact form is not configured yet. Please use the email link beside the form.',
      )
      return
    }

    setSubmissionStatus('submitting')
    setSubmissionMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio message from ${formData.name.trim()}`,
          from_name: 'Snehil Kumar Portfolio',
        }),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message.')
      }

      setFormData(initialFormData)
      setErrors({})
      setSubmissionStatus('success')
      setSubmissionMessage('Thanks! Your message has been sent successfully.')
    } catch {
      setSubmissionStatus('error')
      setSubmissionMessage(
        'Your message could not be sent right now. Please try again or use the email link.',
      )
    }
  }

  return (
    <Section id="contact" className="py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center">{SECTION_CONTENT.contact.title}</h2>
            <p className="section-subtitle text-center mb-8 sm:mb-12 mx-auto">
              {SECTION_CONTENT.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <motion.article
              className="group relative isolate overflow-hidden rounded-2xl border border-dark-200 bg-white shadow-sm dark:border-dark-700 dark:bg-dark-900"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BorderBeam delay={0.8} />
              <LocationMap />
              <div className="relative z-10 border-t border-dark-200 p-5 dark:border-dark-700 sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary-400/25 bg-primary-100/70 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700 dark:text-primary-300">
                        Based in
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-dark-900 dark:text-white">
                        Bengaluru, India
                      </h3>
                      <p className="mt-1 text-sm text-dark-500 dark:text-dark-400">
                        Karnataka · India Standard Time
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+Karnataka%2C+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-300"
                  >
                    View map
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <a
                  href={`mailto:${SECTION_COPY.contact.email}`}
                  className="mt-6 flex items-center gap-3 rounded-xl border border-dark-200 bg-dark-50 p-4 transition-colors hover:border-primary-400/40 hover:bg-primary-50 dark:border-dark-700 dark:bg-dark-950 dark:hover:bg-primary-400/5"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-300" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-dark-500 dark:text-dark-400">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate font-medium text-dark-800 dark:text-dark-100">
                      {SECTION_COPY.contact.email}
                    </span>
                  </span>
                </a>
              </div>
            </motion.article>

            {/* Contact Form */}
            <motion.div 
              className="group relative isolate overflow-hidden rounded-2xl border border-dark-200 bg-white p-5 shadow-sm dark:border-dark-700 dark:bg-dark-900 sm:p-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BorderBeam delay={1.6} />
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-400/10 blur-2xl transition-transform duration-300 group-hover:scale-125"
              />
              <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">Start a conversation</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-600 dark:text-dark-400">
                  Share a little context about the role, project, or engineering problem.
                </p>
              </div>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                    {SECTION_CONTENT.contact.nameLabel}
                  </label>
                  <motion.input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    maxLength={80}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`w-full px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 border outline-none transition-all focus:ring-2 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-dark-300 dark:border-dark-600 focus:ring-primary-500'
                    }`}
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-sm text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    {SECTION_CONTENT.contact.emailLabel}
                  </label>
                  <motion.input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    maxLength={254}
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`w-full px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 border outline-none transition-all focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-dark-300 dark:border-dark-600 focus:ring-primary-500'
                    }`}
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-sm text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                    {SECTION_CONTENT.contact.messageLabel}
                  </label>
                  <motion.textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength={10}
                    maxLength={2000}
                    required
                    rows={4}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-4 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 border outline-none transition-all focus:ring-2 resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-dark-300 dark:border-dark-600 focus:ring-primary-500'
                    }`}
                    placeholder="Your message here..."
                    whileFocus={{ scale: 1.02 }}
                  />
                  <div className="mt-1.5 flex items-start justify-between gap-4">
                    {errors.message ? (
                      <p id="contact-message-error" className="text-sm text-red-500" role="alert">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="shrink-0 text-xs text-dark-500 dark:text-dark-400">
                      {formData.message.length}/2000
                    </span>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="w-full button-primary flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    animate={
                      submissionStatus === 'submitting'
                        ? { rotate: 360 }
                        : { rotate: 0 }
                    }
                    transition={
                      submissionStatus === 'submitting'
                        ? { duration: 1, repeat: Infinity, ease: 'linear' }
                        : { duration: 0.2 }
                    }
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                  <span>
                    {submissionStatus === 'submitting'
                      ? 'Sending...'
                      : submissionStatus === 'success'
                        ? SECTION_CONTENT.contact.sentButtonText
                        : SECTION_CONTENT.contact.sendButtonText}
                  </span>
                </motion.button>

                {submissionMessage && (
                  <p
                    className={`text-sm ${
                      submissionStatus === 'success'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-red-500'
                    }`}
                    role={submissionStatus === 'error' ? 'alert' : 'status'}
                  >
                    {submissionMessage}
                  </p>
                )}
              </form>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

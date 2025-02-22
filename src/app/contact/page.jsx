'use client'

import { useId, useState } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

function StatusMessage({ type, message }) {
  return (
    <div className={`mt-6 p-4 rounded-lg ${type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
      <div className="flex items-center">
        {type === 'success' ? (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        )}
        <p>{message}</p>
      </div>
    </div>
  )
}

function TextInput({ label, error, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className={`peer block w-full border ${error ? 'border-red-500' : 'border-neutral-300'} bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
      {error && (
        <p className="absolute -bottom-6 left-6 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [inquiryType, setInquiryType] = useState('support')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    inquiryType: 'support'
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success' | 'error', message: string }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (formData.inquiryType === 'project' && !formData.budget) {
      newErrors.budget = 'Please select a budget range'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://n8n.milucid.com/webhook/ca082b10-9fb7-46d7-936f-4ef7ee59ff1e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: formData.message,
          budget: formData.budget || '',
          type: formData.inquiryType,
          source: 'website_contact_form',
          timestamp: new Date().toISOString()
        }),
      })

      // Check if the response is ok, regardless of the content type
      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        budget: '',
        inquiryType: 'support'
      })
      setInquiryType('support')
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'inquiryType') {
      setInquiryType(value)
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950 mb-6">
          Work inquiries
        </h2>

        <div className="isolate rounded-2xl bg-white/50">
          <div className="border border-neutral-300 first:rounded-t-2xl px-6 py-4">
            <label
              htmlFor="inquiryType"
              className="block text-base/6 text-neutral-500 mb-2"
            >
              Inquiry Type
            </label>
            <div className="relative">
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full bg-transparent pr-10 py-2 text-lg text-neutral-950 border-0 focus:outline-none appearance-none"
              >
                <option value="support">Support Inquiry</option>
                <option value="project">New Project</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <TextInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            autoComplete="name"
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            autoComplete="organization"
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
          />
          {inquiryType === 'project' && (
            <div className="border border-neutral-300 px-6 py-8 last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">Budget</legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput
                    label="$25K – $50K"
                    name="budget"
                    value="25"
                    checked={formData.budget === '25'}
                    onChange={handleInputChange}
                  />
                  <RadioInput
                    label="$50K – $100K"
                    name="budget"
                    value="50"
                    checked={formData.budget === '50'}
                    onChange={handleInputChange}
                  />
                  <RadioInput
                    label="$100K – $150K"
                    name="budget"
                    value="100"
                    checked={formData.budget === '100'}
                    onChange={handleInputChange}
                  />
                  <RadioInput
                    label="More than $150K"
                    name="budget"
                    value="150"
                    checked={formData.budget === '150'}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.budget && (
                  <p className="mt-2 text-sm text-red-600">{errors.budget}</p>
                )}
              </fieldset>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col items-start gap-y-4">
          {status && <StatusMessage type={status.type} message={status.message} />}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <Border className="pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm">
          <div>
            <dt className="font-semibold text-neutral-950">General inquiries</dt>
            <dd>
              <Link
                href="mailto:hey@milucid.com"
                className="text-neutral-600 hover:text-neutral-950"
              >
                hey@milucid.com
              </Link>
            </dd>
          </div>
        </dl>
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let&rsquo;s work together">
        <p>We can&rsquo;t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}

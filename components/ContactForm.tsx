'use client'

import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm({ contactEmail }: { contactEmail?: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [captchaDone, setCaptchaDone] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''
  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (siteKey && !captchaDone) return

    const form = e.currentTarget
    const formData = new FormData(form)
    const fields = Object.fromEntries(formData)

    setStatus('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          subject: 'New inquiry — Kairos Capital website',
          from_name: 'Kairos Capital Website',
          ...fields,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
        recaptchaRef.current?.reset()
        setCaptchaDone(false)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-success">
        <p>Message received. We&apos;ll be in touch within one business day.</p>
      </div>
    )
  }

  const canSubmit = status !== 'submitting' && (!siteKey || captchaDone)

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — additional bot protection */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="cf-name">Your Name *</label>
          <input id="cf-name" name="name" type="text" required placeholder="Jane Smith" />
        </div>
        <div className="contact-field">
          <label htmlFor="cf-email">Email Address *</label>
          <input id="cf-email" name="email" type="email" required placeholder="jane@example.com" />
        </div>
      </div>

      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="cf-phone">Phone Number</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="(555) 000-0000" />
        </div>
        <div className="contact-field">
          <label htmlFor="cf-business">Business Name</label>
          <input id="cf-business" name="business" type="text" placeholder="Acme Services LLC" />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="cf-message">Tell us about your business *</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="What does your business do, how long have you been operating, and what's prompting you to explore a sale?"
        />
      </div>

      {siteKey && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          theme="dark"
          onChange={(token) => setCaptchaDone(!!token)}
          onExpired={() => setCaptchaDone(false)}
        />
      )}

      <button type="submit" className="btn-primary contact-submit" disabled={!canSubmit}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="contact-error">
          Something went wrong. Please try again
          {contactEmail ? (
            <> or email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a></>
          ) : ''}.
        </p>
      )}
    </form>
  )
}

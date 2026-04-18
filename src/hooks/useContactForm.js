import { useState } from 'react'

export function useContactForm(t) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/haroldmaldonado1@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `${t.mailSubject} - ${form.name || t.noName}`,
          _template: 'table',
        }),
      })

      if (!response.ok) throw new Error('formsubmit request failed')

      setStatus('success')
      setStatusMessage(t.sent)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setStatusMessage(t.sendError)
    }
  }

  return { form, status, statusMessage, handleChange, handleSubmit }
}

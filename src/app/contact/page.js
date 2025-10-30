'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill all fields.' })
      return
    }
    setStatus({ type: 'success', message: 'Message sent (demo).' })
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 h-28" />
          </div>
          <div>
            <button type="submit" className="bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white px-4 py-2 rounded-full">Send Message</button>
          </div>
          {status && (
            <p className={status.type === 'error' ? 'text-red-600' : 'text-green-600'}>{status.message}</p>
          )}
        </form>
      </div>
    </main>
  )
}
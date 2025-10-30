"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setStatus({ type: 'error', message: 'Please enter email and password.' })
      return
    }
    // Demo login - no real auth
    setStatus({ type: 'success', message: 'Logged in (demo).' })
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-gray-100 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-4 text-brand">Sign in to Nextmycart</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-brand text-white px-4 py-2 rounded-md">Sign in</button>
            <Link href="/contact" className="text-sm text-brand">Need help?</Link>
          </div>
          {status && (
            <p className={status.type === 'error' ? 'text-red-600' : 'text-green-600'}>{status.message}</p>
          )}
        </form>
      </div>
    </main>
  )
}

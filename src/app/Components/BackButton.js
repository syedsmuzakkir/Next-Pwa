"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function BackButton({ children = 'Back', className = '' }) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm hover:opacity-90 ${className}`}
      aria-label="Go back"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6 6-6" />
      </svg>
      <span>{children}</span>
    </button>
  )
}

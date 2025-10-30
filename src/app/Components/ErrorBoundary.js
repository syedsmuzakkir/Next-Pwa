'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl p-8 text-center">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
          <p className="text-lg text-gray-600">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
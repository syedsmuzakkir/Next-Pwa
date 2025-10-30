'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Offline() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    setIsOnline(navigator.onLine)
    
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (isOnline) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">You&apos;re back online!</h1>
          <Link 
            href="/"
            className="bg-brand text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl p-8 text-center">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">You&apos;re Offline</h1>
          <p className="text-lg text-gray-600 mb-4">
            Please check your internet connection and try again.
          </p>
          <p className="text-gray-500">
            Don&apos;t worry - your data is saved and will sync when you&apos;re back online.
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-brand text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
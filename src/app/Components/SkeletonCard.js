'use client'

export default function SkeletonCard() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="animate-pulse">
        <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="h-8 bg-gray-200 rounded w-24"></div>
          <div className="h-8 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>
  )
}
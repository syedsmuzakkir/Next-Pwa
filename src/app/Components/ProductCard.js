"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [isLoading, setIsLoading] = useState(true)

  const image = product.thumbnail || product.images?.[0] || '/icon-192x192.png'

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="relative pb-[75%]">
        <img
          src={image}
          alt={product.title || product.name}
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title || product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <Link
            href={`/product/${product.id}`}
            className="bg-brand text-white px-3 py-2 rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}
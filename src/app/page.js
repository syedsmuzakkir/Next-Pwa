'use client'

import { useState, useEffect } from 'react'
import ProductCard from './Components/ProductCard'
import SkeletonCard from './Components/SkeletonCard'

export default function Home() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('https://dummyjson.com/products?limit=12')
        const data = await res.json()
        setProducts(data.products || [])
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <>
              {[...Array(8)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          ) : (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </main>
  )
}

import BackButton from '../../Components/BackButton'

export default async function ProductPage({ params }) {
  const { id } = params

  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: 'no-store' })
    if (!res.ok) return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <p className="text-gray-600">We couldn&apos;t find the product you&apos;re looking for.</p>
        </div>
      </main>
    )

    const product = await res.json()

    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton className="border-gray-300" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <img src={product.thumbnail || product.images?.[0]} alt={product.title} className="max-h-80 object-contain" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-xl font-semibold mb-4">${product.price}</p>
              <button className="bg-brand text-white px-4 py-2 rounded-md">Add to cart</button>
            </div>
          </div>
        </div>
      </main>
    )
  } catch (e) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">Error</h2>
          <p className="text-gray-600">There was an error loading the product.</p>
        </div>
      </main>
    )
  }
}
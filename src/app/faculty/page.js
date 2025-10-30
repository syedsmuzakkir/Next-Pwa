export default async function Faculty() {
  try {
    const res = await fetch('https://dummyjson.com/users?limit=9', { cache: 'no-store' })
    const data = await res.json()
    const users = data.users || []

    return (
      <main className="min-h-screen p-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-brand">Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {users.map(u => (
              <div key={u.id} className="border rounded-lg p-4 shadow-sm bg-white">
                <div className="h-28 w-full bg-gray-100 rounded mb-4 flex items-center justify-center text-xl font-bold text-gray-600">{u.firstName[0]}{u.lastName[0]}</div>
                <h3 className="font-semibold">{u.firstName} {u.lastName}</h3>
                <p className="text-sm text-gray-600">{u.company?.title || 'Instructor'}</p>
                <p className="mt-2 text-sm text-gray-500">{u.maidenName || u.email}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  } catch (e) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold">Faculty</h2>
          <p className="text-gray-600">Unable to load faculty at this time.</p>
        </div>
      </main>
    )
  }
}
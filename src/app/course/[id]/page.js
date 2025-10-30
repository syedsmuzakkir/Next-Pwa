import { courses } from '../../../data/courses'
import BackButton from '../../Components/BackButton'

export default function CourseDetail({ params }) {
  const { id } = params
  const course = courses.find(c => c.id === id)

  if (!course) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">Course not found</h2>
          <p className="text-gray-600">We couldn't find the course you're looking for.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <BackButton className="border-gray-300" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start bg-white p-6 rounded-lg shadow">
          <div>
            <img src={course.image} alt={course.title} className="w-full rounded shadow" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{course.level} • {course.duration}</p>
            <p className="text-gray-700 mb-4">{course.summary}</p>

            <h3 className="font-semibold mb-2">What you'll learn</h3>
            <ul className="list-disc ml-5 text-gray-700 mb-4">
              <li>Core concepts and practical, hands-on labs</li>
              <li>Real-world project to demonstrate skills</li>
              <li>Deployment and best practices for production</li>
            </ul>

            <div className="flex items-center gap-3">
              <button className="bg-brand text-white px-4 py-2 rounded-md">Enroll</button>
              <a href="/contact" className="text-brand underline">Contact us for enterprise training</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

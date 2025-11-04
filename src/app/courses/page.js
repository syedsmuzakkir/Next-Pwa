import { courses } from '../../data/courses'

export default function COURSES() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-brand">Courses</h2>
        <p className="text-gray-600 mb-6">Explore our curated IT courses — from beginner to advanced. Click a course to view details.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(course => (
            <article key={course.id} className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <img src={course.image} alt={course.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.level} • {course.duration}</p>
                  <p className="mt-2 text-gray-700">{course.summary}</p>
                  <div className="mt-4">
                    <a href={`/course/${course.id}`} className="inline-block px-3 py-2 bg-brand text-white rounded-md text-sm">View Course</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
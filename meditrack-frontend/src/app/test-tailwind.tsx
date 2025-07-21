export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tailwind Test</h1>
        <p className="text-gray-600 mb-6">If this is styled beautifully, Tailwind is working!</p>
        <button className="btn-primary w-full">
          Beautiful Button
        </button>
      </div>
    </div>
  )
}
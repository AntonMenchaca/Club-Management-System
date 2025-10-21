import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          Club Management System
        </h1>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Built with React, TypeScript, Express, and Tailwind CSS
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
            >
              Count is {count}
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            Click the button to test the counter
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import AppleLayout from '../components/AppleLayout'

const samplePeople = [
  { id: 1, name: 'Ravi Kumar', role: 'Manager', email: 'ravi@shreenija.com' },
  { id: 2, name: 'Anita Rao', role: 'Team Leader', email: 'anita@shreenija.com' },
  { id: 3, name: 'Suresh', role: 'Driver', email: 'suresh@shreenija.com' },
]

export default function CompanyPeople() {
  const [people] = useState(samplePeople)

  return (
    <AppleLayout>
      <div className="min-h-[60vh] bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Company People</h1>
            <button className="px-4 py-2 border rounded">Add Person</button>
          </div>

          <div className="space-y-3">
            {people.map((p) => (
              <div key={p.id} className="border rounded p-4 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{p.name}</div>
                  <div className="text-sm text-gray-500">{p.role} • {p.email}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 border rounded">Edit</button>
                  <button className="px-3 py-1 text-red-600 border rounded">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-gray-500">This is a demo list — in a real app you'd manage people with invitation and role assignment flows.</div>
        </div>
      </div>
    </AppleLayout>
  )
}

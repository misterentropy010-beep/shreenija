import { useState } from 'react'
import AppleLayout from '../components/AppleLayout'

const sampleBookings = [
  { id: 'BKG-1001', from: 'MG Road', to: 'Airport', date: '2025-11-05', status: 'Scheduled', price: '₹450' },
  { id: 'BKG-1002', from: 'Indiranagar', to: 'Railway Station', date: '2025-10-28', status: 'Completed', price: '₹220' },
  { id: 'BKG-1003', from: 'Koramangala', to: 'IT Park', date: '2025-11-10', status: 'Cancelled', price: '₹0' },
]

export default function PassengerBookings() {
  const [bookings] = useState(sampleBookings)

  return (
    <AppleLayout>
      <div className="min-h-[60vh] bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>

          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="border rounded p-4 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">{b.id} • {b.date}</div>
                  <div className="text-lg font-semibold text-gray-900">{b.from} → {b.to}</div>
                  <div className="text-sm text-gray-600">Fare: <span className="font-medium">{b.price}</span></div>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${b.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' : b.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {b.status}
                  </div>
                  <div className="mt-3">
                    <button className="px-4 py-2 bg-gray-900 text-white rounded">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-500 mt-6">This is a demo bookings list for the Apple-style theme.</div>
        </div>
      </div>
    </AppleLayout>
  )
}

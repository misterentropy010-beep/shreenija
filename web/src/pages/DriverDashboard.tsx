import { useAuth } from '../hooks/useAuth'
import { useState, useEffect } from 'react'
import { apiClient } from '../services/api'

interface Trip {
  id: string
  pickup: string
  destination: string
  scheduledTime: string
  status: 'assigned' | 'in_progress' | 'completed'
  fare: number
}

export default function DriverDashboard() {
  const { user, logout } = useAuth()
  const [trips, setTrips] = useState<Trip[]>([])
  const [monthlyEarnings, setMonthlyEarnings] = useState(0)

  useEffect(() => {
    // Fetch driver trips and earnings
    apiClient.get('/driver/trips').then(response => setTrips(response.data))
    apiClient.get('/driver/earnings').then(response => setMonthlyEarnings(response.data.monthly))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Driver Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome, {user?.name}</span>
              <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Earnings Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Monthly Earnings</h3>
              <p className="text-3xl font-bold text-green-600">₹{monthlyEarnings.toLocaleString()}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
                View Payslip
              </button>
            </div>
          </div>

          {/* Navigation Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Navigation</h3>
              <p className="text-sm text-gray-500 mb-4">Get directions for your trips</p>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md text-sm">
                Open Navigation
              </button>
            </div>
          </div>

          {/* Trip Details */}
          <div className="lg:col-span-1">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Trips</h3>
                <div className="space-y-4">
                  {trips.map((trip) => (
                    <div key={trip.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{trip.pickup} → {trip.destination}</p>
                          <p className="text-sm text-gray-500">{trip.scheduledTime}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          trip.status === 'assigned' ? 'bg-blue-100 text-blue-800' :
                          trip.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {trip.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">₹{trip.fare}</span>
                        {trip.status === 'assigned' && (
                          <button className="bg-primary-600 text-white px-3 py-1 rounded text-sm">
                            Start Trip
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
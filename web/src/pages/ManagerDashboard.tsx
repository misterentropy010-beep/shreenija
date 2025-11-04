import { useAuth } from '../hooks/useAuth'
import { useState, useEffect } from 'react'
import { apiClient } from '../services/api'
import AppleLayout from '../components/AppleLayout'

export default function ManagerDashboard() {
  const { user, logout } = useAuth()

  const features = [
    { title: 'Team Management', description: 'Manage your teams', action: 'View Teams' },
    { title: 'Admin Reporting', description: 'Report to admin with data', action: 'Send Reports' },
    { title: 'Performance Analytics', description: 'Track team performance', action: 'View Analytics' },
  ]

  const [pendingBookings, setPendingBookings] = useState<any[]>([])
  const [pendingDrivers, setPendingDrivers] = useState<any[]>([])

  useEffect(() => {
    // fetch manager pending items
    apiClient.get('/manager/pending-bookings')
      .then(res => setPendingBookings(res.data || []))
      .catch(() => setPendingBookings([]))
    apiClient.get('/manager/pending-drivers')
      .then(res => setPendingDrivers(res.data || []))
      .catch(() => setPendingDrivers([]))
  }, [])

  const approveBooking = async (id: string) => {
    try {
      await apiClient.post(`/manager/approve-booking/${id}`, { approve: true })
      setPendingBookings(prev => prev.filter(b => b.id !== id))
    } catch (err) { console.error(err) }
  }

  const approveDriver = async (id: string) => {
    try {
      await apiClient.post(`/manager/approve-driver/${id}`, { approve: true })
      setPendingDrivers(prev => prev.filter(d => d.id !== id))
    } catch (err) { console.error(err) }
  }

  // Render pending approvals under the features

  return (
    <AppleLayout>
      <div className="max-w-6xl mx-auto">
      <main className="py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{feature.description}</p>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md text-sm font-medium">
                {feature.action}
              </button>
            </div>
          ))}
        </div>

        {/* Pending corporate bookings */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Pending Corporate Bookings</h2>
          {pendingBookings.length === 0 ? (
            <div className="text-sm text-gray-500">No pending corporate bookings.</div>
          ) : (
            <div className="grid gap-3">
              {pendingBookings.map(b => (
                <div key={b.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                  <div>
                    <div className="font-medium">{b.companyName}</div>
                    <div className="text-sm text-gray-500">{b.from} → {b.to} • {b.date}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => approveBooking(b.id)} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pending driver registrations */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Pending Driver Registrations</h2>
          {pendingDrivers.length === 0 ? (
            <div className="text-sm text-gray-500">No pending drivers.</div>
          ) : (
            <div className="grid gap-3">
              {pendingDrivers.map(d => (
                <div key={d.id} className="border rounded p-4 flex justify-between items-center">
                  <div>
                    <div className="font-medium">{d.name}</div>
                    <div className="text-sm text-gray-500">{d.email}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => approveDriver(d.id)} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
    </AppleLayout>
  )
}
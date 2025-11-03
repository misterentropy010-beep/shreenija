import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'

export default function UserDashboard() {
  const { user, logout } = useAuth()
  const [bookingType, setBookingType] = useState<'cab' | 'hotel'>('cab')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Shreenija Services</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome, {user?.name}</span>
              <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Booking Type Selector */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Book Your Service</h2>
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setBookingType('cab')}
                className={`px-6 py-3 rounded-lg font-medium ${
                  bookingType === 'cab'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Book a Cab
              </button>
              <button
                onClick={() => setBookingType('hotel')}
                className={`px-6 py-3 rounded-lg font-medium ${
                  bookingType === 'hotel'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Book a Hotel
              </button>
            </div>

            {/* Booking Form */}
            {bookingType === 'cab' ? (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                  <input
                    type="time"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium">
                  Book Cab
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="City/Location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    placeholder="Check-in"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                  <input
                    type="date"
                    placeholder="Check-out"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                  <option>Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium">
                  Search Hotels
                </button>
              </div>
            )}
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
            <div className="text-gray-500 text-center py-8">
              No recent bookings. Book your first service above!
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
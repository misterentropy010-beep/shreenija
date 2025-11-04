import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import AppleLayout from '../components/AppleLayout'

export default function UserDashboard() {
  const { user, logout } = useAuth()

  return (
    <AppleLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Welcome, {user?.name || 'Traveler'}</h1>
            <p className="text-sm text-gray-600">Manage your trips and bookings.</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={logout} className="text-sm text-gray-700">Logout</button>
          </div>
        </div>

        <div className="bg-white border rounded p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Book Your Service</h2>
          <div className="flex gap-4">
            <Link to="/dashboard/book-cab" className="flex-1 text-center px-6 py-3 bg-gray-900 text-white rounded">Book a Cab</Link>
            <Link to="/dashboard/book-hotel" className="flex-1 text-center px-6 py-3 border rounded">Book a Hotel</Link>
          </div>
        </div>

        <div className="bg-white border rounded p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
          <div className="text-sm text-gray-500">No recent bookings. Book your first service above!</div>
        </div>
      </div>
    </AppleLayout>
  )
}
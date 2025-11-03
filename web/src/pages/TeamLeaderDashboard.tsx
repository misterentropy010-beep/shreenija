import { useAuth } from '../hooks/useAuth'

export default function TeamLeaderDashboard() {
  const { user, logout } = useAuth()

  const features = [
    { title: 'Booking Management', description: 'Handle customer bookings', action: 'Manage Bookings' },
    { title: 'Task Allocation', description: 'Assign tasks to drivers', action: 'Assign Tasks' },
    { title: 'Travel Ticketing', description: 'Manage travel arrangements', action: 'Handle Tickets' },
    { title: 'Driver Communication', description: 'Send trip details to drivers', action: 'Message Drivers' },
    { title: 'Payslip Generator', description: 'Generate team payslips', action: 'Create Payslips' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Team Leader Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome, {user?.name}</span>
              <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
      </main>
    </div>
  )
}
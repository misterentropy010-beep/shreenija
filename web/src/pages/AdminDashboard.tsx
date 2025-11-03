import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { apiClient } from '../services/api'

interface DashboardStats {
  totalDrivers: number
  activeTrips: number
  totalRevenue: number
  pendingApprovals: number
}

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const [stats, setStats] = useState<DashboardStats>({
    totalDrivers: 0,
    activeTrips: 0,
    totalRevenue: 0,
    pendingApprovals: 0,
  })

  useEffect(() => {
    // Fetch dashboard stats
    apiClient.get('/admin/stats')
      .then(response => setStats(response.data))
      .catch(error => console.error('Failed to fetch stats:', error))
  }, [])

  const features = [
    {
      title: 'Analytics & Metrics',
      description: 'View company performance and analytics',
      action: 'View Analytics',
      color: 'bg-blue-500',
    },
    {
      title: 'Team Management',
      description: 'Manage teams, leaders, and managers',
      action: 'Manage Teams',
      color: 'bg-green-500',
    },
    {
      title: 'Financial Controls',
      description: 'Invoice generation and payslip management',
      action: 'Financial Tools',
      color: 'bg-purple-500',
    },
    {
      title: 'KYC Approvals',
      description: 'Review and approve employee documents',
      action: 'Review KYC',
      color: 'bg-orange-500',
      badge: stats.pendingApprovals > 0 ? stats.pendingApprovals : undefined,
    },
    {
      title: 'Monthly Accounting',
      description: 'Financial history and accounting reports',
      action: 'View Reports',
      color: 'bg-indigo-500',
    },
    {
      title: 'AI Assistant',
      description: 'Automated scheduling and insights',
      action: 'Open AI Tools',
      color: 'bg-pink-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">D</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Drivers</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.totalDrivers}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">T</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Trips</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.activeTrips}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">₹</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Revenue (This Month)</dt>
                    <dd className="text-lg font-medium text-gray-900">₹{stats.totalRevenue.toLocaleString()}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">!</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Pending Approvals</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.pendingApprovals}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center relative`}>
                    <span className="text-white text-lg font-medium">
                      {feature.title.charAt(0)}
                    </span>
                    {feature.badge && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    {feature.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
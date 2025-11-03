import { Link } from 'react-router-dom'

interface GlassCardProps {
  title: string
  value: string | number
  icon: string
  trend?: string
  color: string
}

function GlassCard({ title, value, icon, trend, color }: GlassCardProps) {
  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className={`text-3xl p-3 rounded-full bg-gradient-to-r ${color} backdrop-blur-sm`}>
          {icon}
        </div>
        {trend && (
          <span className="text-green-300 text-sm font-semibold">
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-white/80 text-sm font-medium mb-2">{title}</h3>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  )
}

export default function GlassDashboard() {
  const stats = [
    {
      title: "Total Bookings",
      value: "1,234",
      icon: "🚗",
      trend: "+12.5%",
      color: "from-blue-500/30 to-purple-600/30"
    },
    {
      title: "Active Drivers",
      value: "45",
      icon: "👥",
      trend: "+5.2%", 
      color: "from-green-500/30 to-teal-600/30"
    },
    {
      title: "Revenue",
      value: "₹2.5L",
      icon: "💰",
      trend: "+18.7%",
      color: "from-yellow-500/30 to-orange-600/30"
    },
    {
      title: "Customer Rating",
      value: "4.8",
      icon: "⭐",
      trend: "+0.2",
      color: "from-pink-500/30 to-red-600/30"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/30 shadow-2xl p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Dashboard Overview
              </h1>
              <p className="text-white/70">
                Welcome back! Here's what's happening with your transportation business.
              </p>
            </div>
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <GlassCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/30 shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { icon: "🚕", title: "New booking from John Doe", time: "2 minutes ago", color: "text-blue-300" },
                { icon: "✅", title: "Trip completed by Driver #12", time: "5 minutes ago", color: "text-green-300" },
                { icon: "💰", title: "Payment received ₹850", time: "10 minutes ago", color: "text-yellow-300" },
                { icon: "📋", title: "New corporate client registered", time: "15 minutes ago", color: "text-purple-300" },
              ].map((activity, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.title}</p>
                      <p className={`text-sm ${activity.color}`}>{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/30 shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "➕", title: "New Booking", color: "from-blue-500/30 to-purple-600/30" },
                { icon: "👥", title: "Manage Drivers", color: "from-green-500/30 to-teal-600/30" },
                { icon: "📊", title: "View Reports", color: "from-yellow-500/30 to-orange-600/30" },
                { icon: "⚙️", title: "Settings", color: "from-pink-500/30 to-red-600/30" },
              ].map((action, index) => (
                <button
                  key={index}
                  className={`backdrop-blur-md bg-gradient-to-r ${action.color} border border-white/20 rounded-2xl p-6 text-white hover:scale-105 transform transition-all duration-300 shadow-lg`}
                >
                  <div className="text-3xl mb-2">{action.icon}</div>
                  <p className="font-semibold">{action.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-4">
            <p className="text-white/60 text-sm">
              © 2025 Shreenija Transportation Management System - Built with Glassmorphism Design
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Main Glass Container */}
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl border border-white/30 shadow-2xl p-8 mb-8">
            <div className="text-center">
              {/* Company Logo/Header */}
              <div className="mb-8">
                <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  🚗 Shreenija Transportation
                </h1>
                <p className="text-2xl text-white/90 mb-8 font-light">
                  Complete Transportation Management System
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <div className="text-4xl mb-4">👤</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    For Passengers
                  </h3>
                  <p className="text-white/80 mb-6">
                    Book cabs and hotels with ease. Track your trips in real-time.
                  </p>
                  <Link
                    to="/login"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                  >
                    User Login →
                  </Link>
                </div>

                <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    For Companies
                  </h3>
                  <p className="text-white/80 mb-6">
                    Manage your fleet, drivers, and corporate bookings efficiently.
                  </p>
                  <Link
                    to="/company-login"
                    className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-full hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                  >
                    Company Login →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Accounts Glass Container */}
          <div className="backdrop-blur-lg bg-white/15 rounded-3xl border border-white/30 p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              🎯 Demo Accounts
            </h3>
            <p className="text-white/80 text-center mb-8">Try these accounts to explore different user roles</p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-2">👔</div>
                  <h4 className="font-bold text-blue-300 mb-2">Team Leader</h4>
                  <p className="text-white/90 text-xs mb-1">tl@shreenija.com</p>
                  <p className="text-white/70 text-xs">password123</p>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-bold text-green-300 mb-2">Manager</h4>
                  <p className="text-white/90 text-xs mb-1">manager@shreenija.com</p>
                  <p className="text-white/70 text-xs">password123</p>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚗</div>
                  <h4 className="font-bold text-yellow-300 mb-2">Driver</h4>
                  <p className="text-white/90 text-xs mb-1">driver1@shreenija.com</p>
                  <p className="text-white/70 text-xs">password123</p>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="font-bold text-purple-300 mb-2">User</h4>
                  <p className="text-white/90 text-xs mb-1">user@example.com</p>
                  <p className="text-white/70 text-xs">password123</p>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <h4 className="font-bold text-red-300 mb-2">Corporate</h4>
                  <p className="text-white/90 text-xs mb-1">corporate@democorp.com</p>
                  <p className="text-white/70 text-xs">password123</p>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <h4 className="font-bold text-indigo-300 mb-2">Admin</h4>
                  <p className="text-white/90 text-xs mb-1">admin@shreenija.com</p>
                  <p className="text-white/70 text-xs">admin123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Glass Container */}
          <div className="mt-8 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6">
            <div className="text-center">
              <p className="text-white/80 mb-4">Quick Access</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/signup"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/30 to-purple-600/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:from-blue-500/50 hover:to-purple-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  Create New Account
                </Link>
                <a
                  href="http://127.0.0.1:8000/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-green-500/30 to-teal-600/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:from-green-500/50 hover:to-teal-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  Django Admin Panel
                </a>
                <a
                  href="http://127.0.0.1:8000/api/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/30 to-pink-600/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:from-purple-500/50 hover:to-pink-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  API Documentation
                </a>
                <Link
                  to="/glass-demo"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:from-cyan-500/50 hover:to-blue-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  🎨 Glass Dashboard Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
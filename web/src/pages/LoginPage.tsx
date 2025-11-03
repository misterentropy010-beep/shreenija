import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Glass Container */}
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl border border-white/30 shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🚗</div>
              <h2 className="text-3xl font-bold text-white">
                Welcome to Shreenija
              </h2>
              <p className="mt-2 text-white/80">
                Sign in to your account
              </p>
            </div>

            <div className="space-y-6">
              {/* Quick Login Demo */}
              <div className="text-center">
                <p className="text-white/80 mb-4">Choose your role to demo:</p>
                
                <div className="space-y-3">
                  <Link
                    to="/admin"
                    className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-red-500/30 to-pink-600/30 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:from-red-500/50 hover:to-pink-600/50 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    🔧 Admin Dashboard
                  </Link>
                  
                  <Link
                    to="/team-leader"
                    className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-blue-500/30 to-indigo-600/30 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:from-blue-500/50 hover:to-indigo-600/50 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    👔 Team Leader Panel
                  </Link>
                  
                  <Link
                    to="/manager"
                    className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-green-500/30 to-teal-600/30 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:from-green-500/50 hover:to-teal-600/50 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    📊 Manager Dashboard
                  </Link>
                  
                  <Link
                    to="/driver"
                    className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-yellow-500/30 to-orange-600/30 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:from-yellow-500/50 hover:to-orange-600/50 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    🚗 Driver Panel
                  </Link>
                  
                  <Link
                    to="/dashboard"
                    className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-purple-500/30 to-violet-600/30 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:from-purple-500/50 hover:to-violet-600/50 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    👤 User Dashboard
                  </Link>
                  
                  <Link
                    to="/corporate"
                    className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:from-cyan-500/50 hover:to-blue-600/50 transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    🏢 Corporate Portal
                  </Link>
                </div>
              </div>

              <div className="text-center mt-6">
                <Link
                  to="/"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
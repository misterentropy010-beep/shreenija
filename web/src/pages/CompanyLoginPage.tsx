import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const roles = [
  { id: 'admin', name: 'Admin', description: 'Full system access and controls' },
  { id: 'team_leader', name: 'Team Leader', description: 'Manage teams and assign tasks' },
  { id: 'manager', name: 'Manager', description: 'Team oversight and reporting' },
  { id: 'driver', name: 'Driver', description: 'Trip details and earnings' },
  { id: 'corporate', name: 'Corporate Client', description: 'Service tracking and management' },
]

export default function CompanyLoginPage() {
  const [selectedRole, setSelectedRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRole) {
      setError('Please select a role')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      await login(email, password)
      // Navigate based on role
      const roleRoutes: Record<string, string> = {
        admin: '/admin',
        team_leader: '/team-leader',
        manager: '/manager',
        driver: '/driver',
        corporate: '/corporate',
      }
      navigate(roleRoutes[selectedRole] || '/dashboard')
    } catch (err) {
      setError('Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Company Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Select your role and sign in
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Select Role
              </label>
              <div className="space-y-2">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedRole === role.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={role.id}
                        name="role"
                        value={role.id}
                        checked={selectedRole === role.id}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <div className="ml-3">
                        <label htmlFor={role.id} className="text-sm font-medium text-gray-900">
                          {role.name}
                        </label>
                        <p className="text-xs text-gray-500">{role.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <input
              name="email"
              type="email"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Company email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
              name="password"
              type="password"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              ← Back to general login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
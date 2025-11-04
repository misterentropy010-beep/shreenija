import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import AppleLayout from '../components/AppleLayout'

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
    <AppleLayout>
      <div className="max-w-md mx-auto">
        <div className="text-left mb-6">
          <h2 className="text-2xl font-semibold">Company Login</h2>
          <p className="text-sm text-gray-600">Select your role and sign in</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Select Role</label>
            <div className="grid gap-2">
              {roles.map((role) => (
                <label key={role.id} className="flex items-center gap-3 border rounded p-3 cursor-pointer">
                  <input type="radio" name="role" value={role.id} checked={selectedRole === role.id} onChange={(e) => setSelectedRole(e.target.value)} />
                  <div>
                    <div className="font-medium">{role.name}</div>
                    <div className="text-xs text-gray-500">{role.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <input name="email" type="email" required placeholder="Company email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded" />
          <input name="password" type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded" />

          {error && <div className="text-sm text-red-500">{error}</div>}

          <div>
            <button type="submit" disabled={loading} className="w-full py-2 bg-gray-900 text-white rounded">{loading ? 'Signing in…' : 'Sign in'}</button>
          </div>
        </form>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Driver registration</h4>
          <p className="text-sm text-gray-500 mb-3">If you are a driver working for a company, register here. Admin will approve registrations.</p>
          <Link to="/company/register-driver" className="inline-block px-4 py-2 bg-gray-900 text-white rounded">Register as Driver</Link>
        </div>
      </div>
    </AppleLayout>
  )
}
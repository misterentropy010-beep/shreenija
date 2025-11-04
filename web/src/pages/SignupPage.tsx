import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiClient } from '../services/api'
import AppleLayout from '../components/AppleLayout'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      await apiClient.post('/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      navigate('/login', { 
        state: { message: 'Account created successfully. Please sign in.' }
      })
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create account')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AppleLayout>
      <div className="max-w-md mx-auto">
        <div className="text-left mb-4">
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="text-sm text-gray-600">Join Shreenija today</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="name" type="text" required placeholder="Full name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="email" type="email" required placeholder="Email address" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="password" type="password" required placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="confirmPassword" type="password" required placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded" />

          {error && <div className="text-sm text-red-500">{error}</div>}

          <div>
            <button type="submit" disabled={loading} className="w-full py-2 bg-gray-900 text-white rounded">{loading ? 'Creating account…' : 'Sign up'}</button>
          </div>

          <div className="text-center">
            <Link to="/login" className="text-sm text-gray-700">Already have an account? Sign in</Link>
          </div>
        </form>
      </div>
    </AppleLayout>
  )
}
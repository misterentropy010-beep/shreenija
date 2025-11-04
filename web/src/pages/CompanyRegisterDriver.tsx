import { useState } from 'react'
import { apiClient } from '../services/api'
import AppleLayout from '../components/AppleLayout'

export default function CompanyRegisterDriver() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [license, setLicense] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      // POST to a registration endpoint - backend should create a pending driver
      await apiClient.post('/company/register-driver', { name, email, phone, license })
      setMessage('Registration submitted. Awaiting admin approval.')
      setName('')
      setEmail('')
      setPhone('')
      setLicense('')
    } catch (err) {
      setMessage('Failed to submit registration. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AppleLayout>
      <div className="min-h-[60vh] bg-white py-8">
        <div className="max-w-lg mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Register as Driver</h1>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="space-y-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full px-4 py-2 border rounded" required />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-2 border rounded" required />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full px-4 py-2 border rounded" />
              <input value={license} onChange={(e) => setLicense(e.target.value)} placeholder="License number" className="w-full px-4 py-2 border rounded" />
              <button className="w-full bg-gray-900 text-white py-2 rounded" disabled={loading}>{loading ? 'Submitting…' : 'Submit Registration'}</button>
              {message && <div className="text-sm text-gray-700">{message}</div>}
            </div>
          </form>
        </div>
      </div>
    </AppleLayout>
  )
}

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="p-8 max-w-md mx-auto text-white">
      <h2 className="text-2xl mb-4">Sign in</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 rounded bg-white/6 border border-white/8 text-white" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-3 py-2 rounded bg-white/6 border border-white/8 text-white" />
        <div className="btn-row">
          <button type="submit" className="btn btn-primary">Sign in</button>
          <Link to="/signup" className="btn btn-secondary">Create account</Link>
        </div>
      </form>
    </div>
  )
}
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { apiClient } from '../services/api'

export interface User {
  id: string
  email: string
  role: 'admin' | 'team_leader' | 'manager' | 'driver' | 'user' | 'corporate'
  name: string
  companyId?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Validate token and get user info
      apiClient.get('/auth/me')
        .then(response => setUser(response.data))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password })
      const { user, token } = response.data
      localStorage.setItem('token', token)
      setUser(user)
    } catch (error) {
      throw new Error('Invalid credentials')
    }
  }

  const loginWithGoogle = async () => {
    // Implement Google OAuth flow
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
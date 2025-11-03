import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CompanyLoginPage from './pages/CompanyLoginPage'
import AdminDashboard from './pages/AdminDashboard'
import TeamLeaderDashboard from './pages/TeamLeaderDashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import DriverDashboard from './pages/DriverDashboard'
import UserDashboard from './pages/UserDashboard'
import CorporateDashboard from './pages/CorporateDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import GlassDashboard from './components/GlassDashboard'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/company-login" element={<CompanyLoginPage />} />
          <Route path="/glass-demo" element={<GlassDashboard />} />
          
          {/* Protected routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/team-leader" element={
            <ProtectedRoute allowedRoles={['team_leader']}>
              <TeamLeaderDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/manager" element={
            <ProtectedRoute allowedRoles={['manager']}>
              <ManagerDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/driver" element={
            <ProtectedRoute allowedRoles={['driver']}>
              <DriverDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/corporate" element={
            <ProtectedRoute allowedRoles={['corporate']}>
              <CorporateDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
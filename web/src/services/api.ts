import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Booking API
export const bookingApi = {
  createBooking: (data: any) => apiClient.post('/bookings', data),
  getBookings: () => apiClient.get('/bookings'),
  updateBooking: (id: string, data: any) => apiClient.patch(`/bookings/${id}`, data),
}

// User API
export const userApi = {
  getProfile: () => apiClient.get('/users/profile'),
  updateProfile: (data: any) => apiClient.patch('/users/profile', data),
}

// Trip API
export const tripApi = {
  getTrips: () => apiClient.get('/trips'),
  assignTrip: (data: any) => apiClient.post('/trips/assign', data),
  updateTripStatus: (id: string, status: string) => 
    apiClient.patch(`/trips/${id}`, { status }),
}

export default apiClient
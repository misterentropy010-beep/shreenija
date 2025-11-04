import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppleLayout from '../components/AppleLayout'

export default function BookHotel() {
  const [city, setCity] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // In a real app we'd call bookingApi.createBooking
    setTimeout(() => {
      setLoading(false)
      navigate('/passenger/bookings')
    }, 800)
  }

  return (
    <AppleLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Book a Hotel</h1>
        <form onSubmit={handleSubmit} className="bg-white border rounded p-6">
          <div className="grid gap-4">
            <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City / Location" className="border rounded px-4 py-2" required />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="border rounded px-4 py-2" required />
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="border rounded px-4 py-2" required />
            </div>
            <select value={guests} onChange={(e) => setGuests(e.target.value)} className="border rounded px-4 py-2">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
            <button className="bg-gray-900 text-white px-4 py-2 rounded" disabled={loading}>{loading ? 'Searching…' : 'Search Hotels'}</button>
          </div>
        </form>
      </div>
    </AppleLayout>
  )
}

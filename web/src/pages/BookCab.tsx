import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppleLayout from '../components/AppleLayout'

export default function BookCab() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // In a real app we'd call bookingApi.createBooking
    setTimeout(() => {
      setLoading(false)
      // Navigate to bookings page after booking
      navigate('/passenger/bookings')
    }, 800)
  }

  return (
    <AppleLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Book a Cab</h1>
        <form onSubmit={handleSubmit} className="bg-white border rounded p-6">
          <div className="grid gap-4">
            <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Pickup location" className="border rounded px-4 py-2" required />
            <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" className="border rounded px-4 py-2" required />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded px-4 py-2" required />
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border rounded px-4 py-2" required />
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 rounded" disabled={loading}>{loading ? 'Booking…' : 'Confirm Booking'}</button>
          </div>
        </form>
      </div>
    </AppleLayout>
  )
}

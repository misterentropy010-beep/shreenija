import { Link } from 'react-router-dom'
import AppleLayout from '../components/AppleLayout'
import PanelBox from '../components/PanelBox'

export default function PassengerLanding() {
  const sampleBenefits = [
    'Quick one-tap booking',
    'Live driver tracking',
    'Secure payments',
    '24/7 support',
  ]

  return (
    <AppleLayout>
      <div className="min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-extrabold mb-3">Plan your trip with Shreenija</h1>
          <p className="text-white/80 mb-6">Book cabs and hotels, manage your trips and get timely updates — designed for simplicity.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <PanelBox header="Why passengers choose us" footer="Safe · Reliable · Fast" imageQuery="passenger ride">
              <ul className="text-sm space-y-2">
                {sampleBenefits.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6 btn-row">
                <Link to="/login" className="btn btn-primary">Login / Book</Link>
                <Link to="/passenger/bookings" className="btn btn-secondary">My Bookings</Link>
              </div>
            </PanelBox>

            <PanelBox header="Quick Estimate" footer="Estimates are indicative" imageQuery="taxi fare">
              <p className="text-sm text-white/80 mb-3">Sample pickup and destination are shown for demo purposes.</p>
              <div className="bg-white/6 p-4 rounded text-white/90">
                <div className="text-sm">MG Road → Airport</div>
                <div className="font-medium mt-2">Est. Fare: ₹450 • ETA: 25 mins</div>
              </div>
            </PanelBox>
          </div>
        </div>
      </div>
    </AppleLayout>
  )
}

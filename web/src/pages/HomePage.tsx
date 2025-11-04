import { Link } from 'react-router-dom'
import AppleLayout from '../components/AppleLayout'
import HeroSearch from '../components/HeroSearch'
import OffersGrid from '../components/OffersGrid'
import PartnersStrip from '../components/PartnersStrip'

export default function HomePage() {
  return (
    <AppleLayout>
      <HeroSearch />

      <OffersGrid />

      <PartnersStrip />

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="panel-translucent rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Download App Now</h3>
          <p className="text-sm text-white/80 mb-4">Get flight and hotel deals on the go — faster booking and exclusive discounts.</p>
          <div className="btn-row">
            <button className="btn btn-primary">Get App</button>
            <Link to="/signup" className="btn btn-secondary">Create account</Link>
          </div>
        </div>
      </section>
    </AppleLayout>
  )
}
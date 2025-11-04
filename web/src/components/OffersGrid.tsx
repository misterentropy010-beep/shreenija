import RandomImage from './RandomImage'

const sampleOffers = [
  { title: "Up to 25% off", subtitle: "On selected routes", query: 'flight deal' },
  { title: "Weekend sale", subtitle: "Hotels and stays", query: 'hotel room' },
  { title: "City rides", subtitle: "Flat fares for city trips", query: 'taxi' },
  { title: "Corporate plans", subtitle: "Dedicated billing and reports", query: 'business travel' },
]

export default function OffersGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-xl font-semibold text-white mb-4">Offers</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sampleOffers.map((o, i) => (
          <div key={i} className="panel-translucent rounded-lg p-4">
            <RandomImage query={o.query} className="h-28 w-full mb-3" alt={o.title} />
            <div className="font-semibold text-white">{o.title}</div>
            <div className="text-sm text-white/80">{o.subtitle}</div>
            <div className="mt-3 text-right">
              <button className="btn btn-primary">BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

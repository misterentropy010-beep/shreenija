import { Link } from 'react-router-dom'

export default function HeroSearch() {
  return (
    <section className="hero-outer max-w-6xl mx-auto px-6 py-12">
      <div className="hero-card panel-translucent rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-extrabold mb-2">Find and book rides, hotels and more</h2>
            <p className="text-white/80 mb-4">Fast booking, corporate plans, live tracking — everything in one place.</p>

            <form className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
              <div>
                <label className="text-xs text-white/70">From</label>
                <input className="w-full mt-1 p-3 rounded bg-white/6 border border-white/8 text-white" placeholder="Pickup location" />
              </div>
              <div>
                <label className="text-xs text-white/70">To</label>
                <input className="w-full mt-1 p-3 rounded bg-white/6 border border-white/8 text-white" placeholder="Destination" />
              </div>
              <div>
                <label className="text-xs text-white/70">Date</label>
                <input type="date" className="w-full mt-1 p-3 rounded bg-white/6 border border-white/8 text-white" />
              </div>
              <div className="flex gap-3">
                <button type="button" className="btn btn-primary w-full">Search</button>
                <Link to="/signup" className="btn btn-secondary">Sign up</Link>
              </div>
            </form>
          </div>

          <div className="hidden lg:block w-96">
            <img src={`https://source.unsplash.com/600x360/?travel,city`} alt="hero" className="rounded-lg object-cover w-full shadow" />
          </div>
        </div>
      </div>
    </section>
  )
}

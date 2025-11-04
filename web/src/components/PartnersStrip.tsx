import RandomImage from './RandomImage'

const partners = ['airplane', 'airline', 'aircraft', 'pilot']

export default function PartnersStrip() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-sm font-medium text-white/80 mb-3">Our partners</h3>
      <div className="flex gap-4 overflow-x-auto py-2">
        {partners.map((p, i) => (
          <div key={i} className="min-w-[180px] panel-translucent rounded p-3 flex items-center justify-center">
            <RandomImage query={`${p} logo`} width={180} height={80} alt={`${p} logo`} className="object-contain h-12" />
          </div>
        ))}
      </div>
    </section>
  )
}

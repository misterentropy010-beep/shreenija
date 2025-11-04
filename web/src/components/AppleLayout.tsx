import { Link } from 'react-router-dom'

export default function AppleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen antialiased text-gray-100">
      <header className="border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-semibold">Shreenija</Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link to="/passenger" className="hover:underline">For Passengers</Link>
              <Link to="/company-login" className="hover:underline">For Companies</Link>
              <Link to="/glass-demo" className="hover:underline">Demo</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="btn btn-ghost text-sm">Sign in</Link>
            <Link to="/signup" className="btn btn-primary text-sm">Sign up</Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="panel-translucent rounded-xl p-6">{children}</div>
      </main>

      <footer className="border-t border-white/6 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-4">
          <div>© 2025 Shreenija</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

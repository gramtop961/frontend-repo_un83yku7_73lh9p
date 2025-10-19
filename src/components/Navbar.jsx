import { Fingerprint } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              <Fingerprint className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/90 font-semibold tracking-tight">VanishAuth</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="text-white/70 hover:text-white transition" href="#features">Features</a>
            <a className="text-white/70 hover:text-white transition" href="#code">Docs</a>
            <a className="text-white/70 hover:text-white transition" href="#trust">Trust</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/80 hover:text-white hover:border-white/25 transition"
            >
              Join waitlist
            </a>
            <a
              href="#code"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

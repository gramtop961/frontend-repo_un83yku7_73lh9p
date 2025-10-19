import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CodeShowcase from './components/CodeShowcase'
import Trust from './components/Trust'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <CodeShowcase />
        <Trust />
      </main>

      <footer className="relative border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} VanishAuth — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white">Security</a>
            <a href="#" className="text-white/60 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

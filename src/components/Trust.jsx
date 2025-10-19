import { Shield } from 'lucide-react'

export default function Trust() {
  return (
    <section id="trust" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20">
                  <Shield className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Built for security from day zero</h3>
              </div>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80">
                <li className="rounded-lg border border-white/10 bg-black/40 p-3">• End-to-end challenge-response</li>
                <li className="rounded-lg border border-white/10 bg-black/40 p-3">• Hardware-backed keys</li>
                <li className="rounded-lg border border-white/10 bg-black/40 p-3">• Just-in-time tokens</li>
                <li className="rounded-lg border border-white/10 bg-black/40 p-3">• Privacy-first design</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-center text-white/70 text-xs">SOC 2 (in progress)</div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-center text-white/70 text-xs">ISO 27001 (roadmap)</div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-center text-white/70 text-xs">GDPR-ready</div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-center text-white/70 text-xs">OWASP ASVS</div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">What builders say</p>
              <blockquote className="mt-3 rounded-xl bg-black/40 p-4 border border-white/10 text-white/80 text-sm">
                “Integration took minutes and our users just tap to sign in. It really feels like the auth vanished.”
              </blockquote>
              <div className="mt-4 text-xs text-white/50">— Early design partner</div>

              <form id="waitlist" onSubmit={(e)=>e.preventDefault()} className="mt-8">
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="flex gap-2">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Join
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/50">We’ll reach out when private beta opens. No spam.</p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-xs uppercase tracking-widest text-white/50">Trusted by teams building the future</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
            <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 py-4 text-white/70">Nova</div>
            <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 py-4 text-white/70">Orbit</div>
            <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 py-4 text-white/70">Pulse</div>
            <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 py-4 text-white/70">Horizon</div>
          </div>
        </div>
      </div>
    </section>
  )
}

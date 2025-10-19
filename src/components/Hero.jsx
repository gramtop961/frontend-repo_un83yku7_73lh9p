import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 sm:py-28 text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            Prelaunch • Developer-first
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Auth that disappears.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Passwordless authentication that feels invisible to users and takes one line to add. Biometric sign-in, device-bound keys, and passkeys—without the heavy lift.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#waitlist" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm hover:bg-white/90">
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#code" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              See the one-liner
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

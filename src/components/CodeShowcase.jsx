import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const snippets = {
  javascript: `// npm i @vanish/auth
import { Auth } from '@vanish/auth'

// One line to prompt biometrics
await Auth.disappear({ method: 'biometric' })

// Verify on your backend with the returned token`,
  react: `import { useEffect } from 'react'
import { Auth } from '@vanish/auth'

export default function LoginButton(){
  useEffect(() => {
    // Trigger on mount or on click
    Auth.disappear({ method: 'passkey' })
  }, [])
  return <button>Sign in magically</button>
}`,
  curl: `# Exchange the token server-side
curl -X POST "$BACKEND_URL/api/verify" \\
  -H "Content-Type: application/json" \\
  -d '{"token":"<from-client>"}'`
}

function Tab({ id, active, onClick, children }) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition border ${
        active ? 'bg-white text-black border-white' : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  )
}

export default function CodeShowcase() {
  const [tab, setTab] = useState('javascript')
  const [copied, setCopied] = useState(false)

  const code = snippets[tab]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <section id="code" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Add secure biometrics in one line</h2>
            <p className="mt-3 text-white/70">
              Built for speed. Start with a single call, scale to full passkey and device-bound flows when you’re ready.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80 text-sm">
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">• WebAuthn & Passkeys</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">• iOS/Android biometrics</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">• Device attestation</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">• Backend verification</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tab id="javascript" active={tab==='javascript'} onClick={setTab}>JavaScript</Tab>
                <Tab id="react" active={tab==='react'} onClick={setTab}>React</Tab>
                <Tab id="curl" active={tab==='curl'} onClick={setTab}>cURL</Tab>
              </div>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
              >
                {copied ? <>
                  <Check className="h-4 w-4" /> Copied
                </> : <>
                  <Copy className="h-4 w-4" /> Copy
                </>}
              </button>
            </div>

            <div className="relative rounded-xl border border-white/15 bg-black/60">
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
              <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-white/90">
                <code>
                  {code}
                </code>
              </pre>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Example only. SDK and docs become available at launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

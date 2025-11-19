import React from 'react'

const ServiceCard = ({ title, items, accent = 'sky' }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className={`mb-3 inline-flex items-center gap-2 text-lg font-semibold text-slate-800`}>
      <span className={`inline-block h-2 w-2 rounded-full bg-${accent}-500`}></span>
      {title}
    </h3>
    <ul className="space-y-2 text-slate-600">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-300" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </div>
)

function Services() {
  const plastikkirurgi = [
    'Botox-behandling (medisinsk): spenningshodepine, migrene, likfingre/tær, nervesmerter, svetteplager',
    'Botox (kosmetisk behandling)',
    'Sterilisering av menn (45 min – unngå lang ventetid og reise til Tromsø)',
    'Øvre øyelokksplastikk',
    'Fjerning av hudforandringer og føflekker',
    'Alt som kan utføres kirurgisk under lokalbedøvelse',
  ]

  const revmatologi = [
    'Behandling av muskel- og skjelettplager',
    'PRP-behandling (blodplatebehandling) for artrose – lindrer smerter i 12–18 måneder',
    'Ultralyddiagnostikk og behandling for sikre diagnoser',
  ]

  return (
    <section id="tjenester" className="bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Tjenester</h2>
          <p className="mt-2 text-slate-600">Plastikkirurgi ved Line Erstad-Jenssen og revmatologi ved Stefan Johannessen</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard title="Plastikkirurgi" items={plastikkirurgi} accent="sky" />
          <ServiceCard title="Revmatologi" items={revmatologi} accent="emerald" />
        </div>
      </div>
    </section>
  )
}

export default Services

import React from 'react'

function HeaderHero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Background decorative gradient circles mimicking northern light vibes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white font-bold">KS</div>
          <div>
            <p className="text-sm tracking-wide text-slate-500">Privat spesialistklinikk</p>
            <h1 className="text-xl font-semibold text-slate-800">Klinikk Steli</h1>
          </div>
        </div>
        <div className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#tjenester" className="hover:text-sky-700">Tjenester</a>
          <a href="#om" className="hover:text-sky-700">Om klinikken</a>
          <a href="#kontakt" className="rounded-full bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700">Ta kontakt</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-10 md:grid-cols-2 md:pb-24 md:pt-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Rask, trygg og spesialistdrevet behandling
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Klinikk Steli i Bjerkvik tilbyr plastikkirurgi og revmatologiske tjenester utført av erfarne spesialister.
            Kort ventetid, høy kvalitet og ingen henvisning nødvendig.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">Kort ventetid</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Behandling av spesialister</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">Ingen henvisning nødvendig</span>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="#kontakt" className="rounded-full bg-sky-600 px-5 py-3 text-white shadow hover:bg-sky-700">
              Ta kontakt for vurdering
            </a>
            <a href="#tjenester" className="text-sky-700 hover:underline">Se tjenester</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-sky-100 shadow-lg">
            {/* Placeholder scenic image with subtle overlay to suggest view/nature */}
            <div className="h-full w-full bg-gradient-to-tr from-sky-200 via-emerald-100 to-white" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.25),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.25),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70" />
          </div>
          <div className="absolute -bottom-4 left-6 rounded-xl bg-white px-4 py-3 shadow-md ring-1 ring-slate-200">
            <p className="text-sm text-slate-600">Moderne lokaler med flott utsikt</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderHero

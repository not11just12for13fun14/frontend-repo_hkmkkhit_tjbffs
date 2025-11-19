import React from 'react'

function About() {
  return (
    <section id="om" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Om klinikken</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Klinikk Steli er en privat spesialistklinikk i Bjerkvik drevet av
              Line Erstad-Jenssen (spesialist i plastikkirurgi) og Stefan
              Johannessen (spesialist i revmatologi). Begge er fulltidsansatte ved
              UNN i Narvik og driver klinikken som et viktig supplement til det
              offentlige helsevesenet.
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              Klinikken ligger i spesialinnredede lokaler med moderne utstyr. Vi
              har fokus på rask vurdering, faglig kvalitet og trygg oppfølging.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-sky-50 p-4">
                  <p className="font-semibold text-slate-800">Kort ventetid</p>
                  <p className="mt-1 text-slate-600">Rask time og vurdering</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-4">
                  <p className="font-semibold text-slate-800">Spesialister</p>
                  <p className="mt-1 text-slate-600">All behandling utføres av leger</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="font-semibold text-slate-800">Ingen henvisning</p>
                  <p className="mt-1 text-slate-600">Bestill direkte uten henvisning</p>
                </div>
                <div className="rounded-lg bg-indigo-50 p-4">
                  <p className="font-semibold text-slate-800">Supplement</p>
                  <p className="mt-1 text-slate-600">Til det offentlige helsevesenet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

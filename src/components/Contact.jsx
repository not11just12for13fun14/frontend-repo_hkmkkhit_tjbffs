import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', preferred_service: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.detail || 'Noe gikk galt')

      setStatus({ type: 'success', message: 'Takk! Vi tar kontakt så snart vi kan.' })
      setForm({ name: '', email: '', phone: '', message: '', preferred_service: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className="bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Ta kontakt for vurdering
            </h2>
            <p className="mt-4 text-slate-600">
              Send oss en melding, så finner vi raskt en time som passer. Du kan også ringe.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p><span className="font-semibold">Telefon:</span> <a href="tel:+4799999999" className="text-sky-700 hover:underline">+47 99 99 99 99</a></p>
              <p><span className="font-semibold">Sted:</span> Bjerkvik</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Navn</label>
                  <input name="name" required value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-sky-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">E-post</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-sky-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Telefon</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-sky-500 focus:outline-none" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Tjeneste (valgfritt)</label>
                  <select name="preferred_service" value={form.preferred_service} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-sky-500 focus:outline-none">
                    <option value="">Velg en tjeneste</option>
                    <option>Plastikkirurgi</option>
                    <option>Revmatologi</option>
                    <option>Botox</option>
                    <option>PRP</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Melding</label>
                  <textarea name="message" required rows="5" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 p-2 focus:border-sky-500 focus:outline-none" />
                </div>
                <div className="sm:col-span-2 flex items-center gap-3">
                  <button disabled={loading} className="rounded-full bg-sky-600 px-5 py-2.5 text-white shadow hover:bg-sky-700 disabled:opacity-50">
                    {loading ? 'Sender…' : 'Send melding'}
                  </button>
                  {status && (
                    <span className={`${status.type === 'success' ? 'text-emerald-700' : 'text-red-700'} text-sm`}>
                      {status.message}
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

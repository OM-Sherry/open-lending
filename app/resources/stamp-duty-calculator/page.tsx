'use client'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

const STATE_RATES: Record<string, { brackets: Array<{ min: number; max: number; base: number; rate: number }>; fhbExemptionLimit: number; fhbConcessionLimit: number }> = {
  NSW: {
    brackets: [
      { min: 0, max: 17000, base: 0, rate: 1.25 },
      { min: 17000, max: 36000, base: 212, rate: 1.5 },
      { min: 36000, max: 97000, base: 497, rate: 1.75 },
      { min: 97000, max: 364000, base: 1564, rate: 3.5 },
      { min: 364000, max: 1212000, base: 10909, rate: 4.5 },
      { min: 1212000, max: 3636000, base: 49009, rate: 5.5 },
      { min: 3636000, max: Infinity, base: 182329, rate: 7 },
    ],
    fhbExemptionLimit: 800000,
    fhbConcessionLimit: 1000000,
  },
  VIC: {
    brackets: [
      { min: 0, max: 25000, base: 0, rate: 1.4 },
      { min: 25000, max: 130000, base: 350, rate: 2.4 },
      { min: 130000, max: 960000, base: 2870, rate: 6 },
      { min: 960000, max: Infinity, base: 52670, rate: 6.5 },
    ],
    fhbExemptionLimit: 600000,
    fhbConcessionLimit: 750000,
  },
  QLD: {
    brackets: [
      { min: 0, max: 5000, base: 0, rate: 0 },
      { min: 5000, max: 75000, base: 0, rate: 1.5 },
      { min: 75000, max: 540000, base: 1050, rate: 3.5 },
      { min: 540000, max: 1000000, base: 17325, rate: 4.5 },
      { min: 1000000, max: Infinity, base: 38025, rate: 5.75 },
    ],
    fhbExemptionLimit: 500000,
    fhbConcessionLimit: 550000,
  },
  WA: {
    brackets: [
      { min: 0, max: 120000, base: 0, rate: 1.9 },
      { min: 120000, max: 150000, base: 2280, rate: 2.85 },
      { min: 150000, max: 360000, base: 3135, rate: 3.8 },
      { min: 360000, max: 725000, base: 11115, rate: 4.75 },
      { min: 725000, max: Infinity, base: 28453, rate: 5.15 },
    ],
    fhbExemptionLimit: 430000,
    fhbConcessionLimit: 530000,
  },
  SA: {
    brackets: [
      { min: 0, max: 12000, base: 0, rate: 1 },
      { min: 12000, max: 30000, base: 120, rate: 2 },
      { min: 30000, max: 50000, base: 480, rate: 3 },
      { min: 50000, max: 100000, base: 1080, rate: 3.5 },
      { min: 100000, max: 200000, base: 2830, rate: 4 },
      { min: 200000, max: 250000, base: 6830, rate: 4.25 },
      { min: 250000, max: 300000, base: 8955, rate: 4.75 },
      { min: 300000, max: 500000, base: 11330, rate: 5 },
      { min: 500000, max: Infinity, base: 21330, rate: 5.5 },
    ],
    fhbExemptionLimit: 0,
    fhbConcessionLimit: 0,
  },
  TAS: {
    brackets: [
      { min: 0, max: 3000, base: 50, rate: 0 },
      { min: 3000, max: 25000, base: 50, rate: 1.75 },
      { min: 25000, max: 75000, base: 435, rate: 2.25 },
      { min: 75000, max: 200000, base: 1560, rate: 3.5 },
      { min: 200000, max: 375000, base: 5935, rate: 4 },
      { min: 375000, max: 725000, base: 12935, rate: 4.25 },
      { min: 725000, max: Infinity, base: 27810, rate: 4.5 },
    ],
    fhbExemptionLimit: 0,
    fhbConcessionLimit: 0,
  },
  ACT: {
    brackets: [
      { min: 0, max: 260000, base: 0, rate: 1.2 },
      { min: 260000, max: 300000, base: 3120, rate: 2.2 },
      { min: 300000, max: 500000, base: 4000, rate: 3.4 },
      { min: 500000, max: 750000, base: 10800, rate: 4.32 },
      { min: 750000, max: 1000000, base: 21600, rate: 5.9 },
      { min: 1000000, max: 1455000, base: 36350, rate: 6.4 },
      { min: 1455000, max: Infinity, base: 65470, rate: 4.54 },
    ],
    fhbExemptionLimit: 0,
    fhbConcessionLimit: 0,
  },
  NT: {
    brackets: [
      { min: 0, max: 525000, base: 0, rate: 0 },
      { min: 525000, max: Infinity, base: 0, rate: 4.95 },
    ],
    fhbExemptionLimit: 0,
    fhbConcessionLimit: 0,
  },
}

function calcStampDuty(price: number, state: string): number {
  const config = STATE_RATES[state]
  if (!config) return 0
  for (const b of config.brackets) {
    if (price >= b.min && price < b.max) {
      return b.base + ((price - b.min) * b.rate / 100)
    }
  }
  const last = config.brackets[config.brackets.length - 1]
  return last.base + ((price - last.min) * last.rate / 100)
}

export default function StampDutyCalculatorPage() {
  const [price, setPrice] = useState(750000)
  const [state, setState] = useState('NSW')
  const [buyerType, setBuyerType] = useState<'owner' | 'investor' | 'fhb'>('owner')
  const [propertyType, setPropertyType] = useState<'established' | 'new' | 'vacant'>('established')

  const results = useMemo(() => {
    let duty = calcStampDuty(price, state)
    const config = STATE_RATES[state]
    let fhbDiscount = 0
    let note = ''

    if (buyerType === 'fhb' && config) {
      if (price <= config.fhbExemptionLimit && config.fhbExemptionLimit > 0) {
        fhbDiscount = duty
        note = `First home buyer exemption applies (under $${(config.fhbExemptionLimit / 1000).toFixed(0)}K)`
      } else if (price <= config.fhbConcessionLimit && config.fhbConcessionLimit > 0) {
        fhbDiscount = duty * 0.5
        note = `First home buyer concession applies (under $${(config.fhbConcessionLimit / 1000).toFixed(0)}K)`
      }
    }

    const finalDuty = Math.max(0, duty - fhbDiscount)
    const lmi = price < 500000 ? 0 : price * 0.018
    const conveyancing = 1500
    const total = finalDuty + conveyancing

    return { duty: finalDuty, originalDuty: duty, fhbDiscount, lmi, conveyancing, total, note }
  }, [price, state, buyerType])

  const fmt = (n: number) => n.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

  return (
    <>
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)', paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>Stamp Duty Calculator</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.25rem' }}>Calculator</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>Stamp Duty Calculator</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 480 }}>
            Calculate stamp duty for all Australian states and territories, including first home buyer concessions.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Inputs */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '2rem' }}>Property Details</h2>

              {/* Price */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)' }}>Property Price</label>
                  <span style={{ fontWeight: 700, color: 'var(--blue)' }}>${fmt(price)}</span>
                </div>
                <input type="range" min={100000} max={5000000} step={10000} value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--blue)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                  <span>$100K</span><span>$5M</span>
                </div>
              </div>

              {/* State */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', display: 'block', marginBottom: '0.75rem' }}>State / Territory</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {Object.keys(STATE_RATES).map(s => (
                    <button key={s} onClick={() => setState(s)}
                      style={{
                        padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '2px solid',
                        borderColor: state === s ? 'var(--blue)' : 'var(--border)',
                        background: state === s ? 'var(--sky)' : 'white',
                        color: state === s ? 'var(--blue)' : 'var(--muted)',
                        fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer'
                      }}>{s}</button>
                  ))}
                </div>
              </div>

              {/* Buyer Type */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', display: 'block', marginBottom: '0.75rem' }}>Buyer Type</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[['owner', 'Owner Occupier'], ['investor', 'Investor'], ['fhb', 'First Home Buyer']].map(([v, l]) => (
                    <button key={v} onClick={() => setBuyerType(v as 'owner' | 'investor' | 'fhb')}
                      style={{
                        padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '2px solid', textAlign: 'left',
                        borderColor: buyerType === v ? 'var(--blue)' : 'var(--border)',
                        background: buyerType === v ? 'var(--sky)' : 'white',
                        color: buyerType === v ? 'var(--blue)' : 'var(--muted)',
                        fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer'
                      }}>{l}</button>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', display: 'block', marginBottom: '0.75rem' }}>Property Type</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[['established', 'Established'], ['new', 'New Build'], ['vacant', 'Vacant Land']].map(([v, l]) => (
                    <button key={v} onClick={() => setPropertyType(v as 'established' | 'new' | 'vacant')}
                      style={{
                        flex: 1, padding: '0.625rem', borderRadius: '0.5rem', border: '2px solid',
                        borderColor: propertyType === v ? 'var(--blue)' : 'var(--border)',
                        background: propertyType === v ? 'var(--sky)' : 'white',
                        color: propertyType === v ? 'var(--blue)' : 'var(--muted)',
                        fontWeight: 600, fontSize: '0.78rem', cursor: 'pointer'
                      }}>{l}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Stamp Duty</div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '3rem', letterSpacing: '-0.03em', lineHeight: 1 }}>${fmt(results.duty)}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: '0.5rem' }}>{state} · {buyerType === 'fhb' ? 'First Home Buyer' : buyerType === 'investor' ? 'Investor' : 'Owner Occupier'}</div>
              </div>

              {results.note && (
                <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '0.875rem', padding: '1rem 1.25rem' }}>
                  <span style={{ color: '#065F46', fontSize: '0.875rem', fontWeight: 600 }}>-{results.note}</span>
                </div>
              )}

              <div className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Purchase Cost Breakdown</h3>
                {[
                  { label: 'Property Price', val: `$${fmt(price)}` },
                  ...(results.fhbDiscount > 0 ? [{ label: 'Stamp Duty (before concession)', val: `$${fmt(results.originalDuty)}` }, { label: 'FHB Concession / Exemption', val: `-$${fmt(results.fhbDiscount)}` }] : []),
                  { label: 'Stamp Duty', val: `$${fmt(results.duty)}` },
                  { label: 'Conveyancing (est.)', val: `$${fmt(results.conveyancing)}` },
                  { label: 'Total Upfront Costs', val: `$${fmt(results.total)}`, highlight: true },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{r.label}</span>
                    <span style={{ fontWeight: (r as any).highlight ? 800 : 600, color: (r as any).highlight ? 'var(--blue)' : 'var(--navy)', fontSize: (r as any).highlight ? '1.05rem' : '0.95rem' }}>{r.val}</span>
                  </div>
                ))}
              </div>

              <Link href="/#contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                Speak to a Broker <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '2rem', lineHeight: 1.6, maxWidth: 760 }}>
            * Stamp duty calculations are estimates based on general rate schedules and may not reflect all concessions, exemptions, or surcharges applicable to your situation. Rates are subject to change. Please verify with your state revenue office or speak to a conveyancer.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h3 className="heading-3" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>Other Calculators</h3>
          <div className="grid-2">
            {[
              { title: 'Repayment Calculator', desc: 'Estimate your monthly, fortnightly, and weekly repayments.', href: '/resources/repayment-calculator' },
              { title: 'Borrowing Power Calculator', desc: 'Find out how much you may be able to borrow.', href: '/resources/loan-borrowing-calculator' },
            ].map(c => (
              <Link key={c.title} href={c.href} className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{c.title}</h4>
                <p className="body" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{c.desc}</p>
                <span style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Open Calculator <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


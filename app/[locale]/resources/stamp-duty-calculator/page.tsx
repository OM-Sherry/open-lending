'use client'

import { useState, useMemo } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('stampDutyCalcPage')

  const [price, setPrice] = useState(750000)
  const [state, setState] = useState('NSW')
  const [buyerType, setBuyerType] = useState<'owner' | 'investor' | 'fhb'>('owner')
  const [propertyType, setPropertyType] = useState<'established' | 'new' | 'vacant'>('established')

  const results = useMemo(() => {
    let duty = calcStampDuty(price, state)
    const config = STATE_RATES[state]
    let fhbDiscount = 0
    let noteType: 'exemption' | 'concession' | '' = ''
    let noteLimit = 0

    if (buyerType === 'fhb' && config) {
      if (price <= config.fhbExemptionLimit && config.fhbExemptionLimit > 0) {
        fhbDiscount = duty
        noteType = 'exemption'
        noteLimit = config.fhbExemptionLimit / 1000
      } else if (price <= config.fhbConcessionLimit && config.fhbConcessionLimit > 0) {
        fhbDiscount = duty * 0.5
        noteType = 'concession'
        noteLimit = config.fhbConcessionLimit / 1000
      }
    }

    const finalDuty = Math.max(0, duty - fhbDiscount)
    const lmi = price < 500000 ? 0 : price * 0.018
    const conveyancing = 1500
    const total = finalDuty + conveyancing

    return { duty: finalDuty, originalDuty: duty, fhbDiscount, lmi, conveyancing, total, noteType, noteLimit }
  }, [price, state, buyerType])

  const fmt = (n: number) => n.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })

  const buyerTypeLabel = (v: 'owner' | 'investor' | 'fhb') =>
    v === 'fhb' ? t('propertyDetails.buyerTypes.fhb') : v === 'investor' ? t('propertyDetails.buyerTypes.investor') : t('propertyDetails.buyerTypes.owner')

  const otherCalcItems = t.raw('otherCalculators.items') as { title: string; desc: string }[]
  const otherCalcHrefs = ['/resources/repayment-calculator', '/resources/loan-borrowing-calculator']

  return (
    <>
      <Navbar />

      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)', paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbHome')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>{t('breadcrumbCurrent')}</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.25rem' }}>{t('pill')}</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>{t('heroTitle')}</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 480 }}>
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Inputs */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '2rem' }}>{t('propertyDetails.heading')}</h2>

              {/* Price */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)' }}>{t('propertyDetails.priceLabel')}</label>
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
                <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', display: 'block', marginBottom: '0.75rem' }}>{t('propertyDetails.stateLabel')}</label>
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
                <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', display: 'block', marginBottom: '0.75rem' }}>{t('propertyDetails.buyerTypeLabel')}</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {(['owner', 'investor', 'fhb'] as const).map(v => (
                    <button key={v} onClick={() => setBuyerType(v)}
                      style={{
                        padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '2px solid', textAlign: 'left',
                        borderColor: buyerType === v ? 'var(--blue)' : 'var(--border)',
                        background: buyerType === v ? 'var(--sky)' : 'white',
                        color: buyerType === v ? 'var(--blue)' : 'var(--muted)',
                        fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer'
                      }}>{buyerTypeLabel(v)}</button>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', display: 'block', marginBottom: '0.75rem' }}>{t('propertyDetails.propertyTypeLabel')}</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {(['established', 'new', 'vacant'] as const).map(v => (
                    <button key={v} onClick={() => setPropertyType(v)}
                      style={{
                        flex: 1, padding: '0.625rem', borderRadius: '0.5rem', border: '2px solid',
                        borderColor: propertyType === v ? 'var(--blue)' : 'var(--border)',
                        background: propertyType === v ? 'var(--sky)' : 'white',
                        color: propertyType === v ? 'var(--blue)' : 'var(--muted)',
                        fontWeight: 600, fontSize: '0.78rem', cursor: 'pointer'
                      }}>{t(`propertyDetails.propertyTypes.${v}`)}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t('results.stampDuty')}</div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '3rem', letterSpacing: '-0.03em', lineHeight: 1 }}>${fmt(results.duty)}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: '0.5rem' }}>{state} · {buyerTypeLabel(buyerType)}</div>
              </div>

              {results.noteType && (
                <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '0.875rem', padding: '1rem 1.25rem' }}>
                  <span style={{ color: '#065F46', fontSize: '0.875rem', fontWeight: 600 }}>
                    {results.noteType === 'exemption'
                      ? t('results.exemptionNote', { limit: results.noteLimit.toFixed(0) })
                      : t('results.concessionNote', { limit: results.noteLimit.toFixed(0) })}
                  </span>
                </div>
              )}

              <div className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>{t('results.breakdownHeading')}</h3>
                {[
                  { label: t('results.propertyPrice'), val: `$${fmt(price)}`, highlight: false },
                  ...(results.fhbDiscount > 0 ? [
                    { label: t('results.stampDutyBeforeConcession'), val: `$${fmt(results.originalDuty)}`, highlight: false },
                    { label: t('results.fhbConcession'), val: `-$${fmt(results.fhbDiscount)}`, highlight: false },
                  ] : []),
                  { label: t('results.stampDutyRow'), val: `$${fmt(results.duty)}`, highlight: false },
                  { label: t('results.conveyancing'), val: `$${fmt(results.conveyancing)}`, highlight: false },
                  { label: t('results.totalUpfront'), val: `$${fmt(results.total)}`, highlight: true },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{r.label}</span>
                    <span style={{ fontWeight: r.highlight ? 800 : 600, color: r.highlight ? 'var(--blue)' : 'var(--navy)', fontSize: r.highlight ? '1.05rem' : '0.95rem' }}>{r.val}</span>
                  </div>
                ))}
              </div>

              <Link href="/#contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                {t('cta')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '2rem', lineHeight: 1.6, maxWidth: 760 }}>
            {t('disclaimer')}
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h3 className="heading-3" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>{t('otherCalculators.heading')}</h3>
          <div className="grid-2">
            {otherCalcItems.map((c, index) => (
              <Link key={c.title} href={otherCalcHrefs[index]} className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>{c.title}</h4>
                <p className="body" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{c.desc}</p>
                <span style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>{t('otherCalculators.openCalculator')} <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
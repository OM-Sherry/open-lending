'use client'

import { useState, useMemo } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronRight, ArrowRight } from 'lucide-react'

export default function RepaymentCalculatorPage() {
  const t = useTranslations('repaymentCalcPage')

  const [loanAmount, setLoanAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(6.14)
  const [loanTerm, setLoanTerm] = useState(30)
  const [repaymentType, setRepaymentType] = useState<'principal' | 'interest'>('principal')

  const results = useMemo(() => {
    const principal = loanAmount
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    let monthly: number
    if (repaymentType === 'principal') {
      if (monthlyRate === 0) {
        monthly = principal / numPayments
      } else {
        monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
      }
    } else {
      monthly = principal * monthlyRate
    }

    const totalRepayment = repaymentType === 'principal' ? monthly * numPayments : monthly * numPayments + principal
    const totalInterest = totalRepayment - principal
    const fortnightly = monthly * 12 / 26
    const weekly = monthly * 12 / 52

    return { monthly, fortnightly, weekly, totalRepayment, totalInterest }
  }, [loanAmount, interestRate, loanTerm, repaymentType])

  const fmt = (n: number) => n.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  const fmtDec = (n: number) => n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const interestPct = results.totalRepayment > 0 ? (results.totalInterest / results.totalRepayment) * 100 : 0
  const principalPct = 100 - interestPct

  const otherCalcItems = t.raw('otherCalculators.items') as { title: string; desc: string }[]
  const otherCalcHrefs = ['/resources/stamp-duty-calculator', '/resources/loan-borrowing-calculator']

  return (
    <>
      <Navbar />

      {/* HERO */}
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

      {/* CALCULATOR */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

            {/* Inputs */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '2rem' }}>{t('loanDetails.heading')}</h2>

              {/* Loan Amount */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)' }}>{t('loanDetails.loanAmountLabel')}</label>
                  <span style={{ fontWeight: 700, color: 'var(--blue)', fontSize: '1rem' }}>${fmt(loanAmount)}</span>
                </div>
                <input type="range" min={50000} max={3000000} step={10000} value={loanAmount}
                  onChange={e => setLoanAmount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--blue)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                  <span>$50K</span><span>$3M</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)' }}>{t('loanDetails.interestRateLabel')}</label>
                  <span style={{ fontWeight: 700, color: 'var(--blue)', fontSize: '1rem' }}>{interestRate.toFixed(2)}% p.a.</span>
                </div>
                <input type="range" min={1} max={15} step={0.05} value={interestRate}
                  onChange={e => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--blue)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                  <span>1%</span><span>15%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)' }}>{t('loanDetails.loanTermLabel')}</label>
                  <span style={{ fontWeight: 700, color: 'var(--blue)', fontSize: '1rem' }}>{loanTerm} {t('loanDetails.yearsUnit')}</span>
                </div>
                <input type="range" min={1} max={30} step={1} value={loanTerm}
                  onChange={e => setLoanTerm(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--blue)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.4rem' }}>
                  <span>1 yr</span><span>30 yrs</span>
                </div>
              </div>

              {/* Repayment Type */}
              <div>
                <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', display: 'block', marginBottom: '0.75rem' }}>{t('loanDetails.repaymentTypeLabel')}</label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {(['principal', 'interest'] as const).map(type => (
                    <button key={type} onClick={() => setRepaymentType(type)}
                      style={{
                        flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '2px solid',
                        borderColor: repaymentType === type ? 'var(--blue)' : 'var(--border)',
                        background: repaymentType === type ? 'var(--sky)' : 'white',
                        color: repaymentType === type ? 'var(--blue)' : 'var(--muted)',
                        fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer'
                      }}>
                      {type === 'principal' ? t('loanDetails.principalInterest') : t('loanDetails.interestOnly')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Main result */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t('results.monthlyRepayment')}</div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '3rem', letterSpacing: '-0.03em', lineHeight: 1 }}>${fmtDec(results.monthly)}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: '0.5rem' }}>{t('results.perMonth')}</div>
              </div>

              {/* Other frequencies */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { label: t('results.fortnightly'), val: results.fortnightly },
                  { label: t('results.weekly'), val: results.weekly },
                ].map(r => (
                  <div key={r.label} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '0.875rem', padding: '1.5rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.4rem' }}>{r.label}</div>
                    <div style={{ color: 'var(--navy)', fontWeight: 800, fontSize: '1.35rem' }}>${fmtDec(r.val)}</div>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>{t('results.loanSummary')}</h3>
                {[
                  { label: t('results.loanAmount'), val: `$${fmt(loanAmount)}`, highlight: false },
                  { label: t('results.totalInterest'), val: `$${fmt(results.totalInterest)}`, highlight: false },
                  { label: t('results.totalRepayment'), val: `$${fmt(results.totalRepayment)}`, highlight: true },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{r.label}</span>
                    <span style={{ fontWeight: r.highlight ? 800 : 600, color: r.highlight ? 'var(--blue)' : 'var(--navy)', fontSize: r.highlight ? '1.05rem' : '0.95rem' }}>{r.val}</span>
                  </div>
                ))}
                {/* Visual bar */}
                <div style={{ marginTop: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                    <span>{t('results.principal')} {principalPct.toFixed(0)}%</span>
                    <span>{t('results.interest')} {interestPct.toFixed(0)}%</span>
                  </div>
                  <div style={{ height: 10, borderRadius: 99, background: 'var(--border)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${principalPct}%`, background: 'linear-gradient(90deg, var(--blue) 0%, var(--blue-light) 100%)', borderRadius: 99 }} />
                  </div>
                </div>
              </div>

              <Link href="/#contact" className="btn-primary" style={{ justifyContent: 'center' }}>
                {t('cta')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '2rem', lineHeight: 1.6, maxWidth: 760 }}>
            {t('disclaimer')}
          </p>
        </div>
      </section>

      {/* OTHER CALCULATORS */}
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
'use client'

import { Link } from '@/i18n/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import { CheckCircle, ArrowRight, ChevronRight, Car } from 'lucide-react'

export default function CarLoanPage() {
  const t = useTranslations('carLoanPage')

  const quickStats = t.raw('quickStats') as { n: string; l: string }[]
  const loanTypes = t.raw('loanTypes.items') as { title: string; desc: string }[]
  const benefits = t.raw('benefits.items') as string[]
  const timeline = t.raw('benefits.timeline') as { label: string; time: string }[]
  const faqs = t.raw('faq.items') as { q: string; a: string }[]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D2347 50%, #0A2240 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,79,216,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbHome')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <Link href="/#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbServices')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>{t('breadcrumbCurrent')}</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.5rem' }}>{t('pill')}</div>
          <h1 className="display" style={{ color: 'white', maxWidth: 680, marginBottom: '1.5rem' }}>
            {t('heroTitle1')}<br /><span style={{ color: '#93B4FF' }}>{t('heroTitleHighlight')}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 540, marginBottom: '2.5rem' }}>
            {t('heroSubtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">{t('ctaPrimary')} <ArrowRight size={16} /></Link>
            <Link href="#loan-types" className="btn-outline-white">{t('ctaSecondary')}</Link>
          </div>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {quickStats.map((s) => (
              <div key={s.l}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em' }}>{s.n}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN TYPES */}
      <section className="section" id="loan-types" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('loanTypes.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('loanTypes.heading')}</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>{t('loanTypes.subtitle')}</p>
          </div>
          <div className="grid-3">
            {loanTypes.map(f => (
              <div key={f.title} className="card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Car size={22} color="var(--blue)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{f.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">{t('benefits.label')}</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>{t('benefits.heading')}</h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                {t('benefits.subtitle')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                {benefits.map(b => (
                  <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="btn-primary">{t('benefits.cta')} <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {timeline.map(s => (
                <div key={s.label} style={{
                  background: 'white', borderRadius: '1rem', padding: '1.5rem',
                  textAlign: 'center', border: '1px solid var(--border)'
                }}>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--blue)', letterSpacing: '-0.02em' }}>{s.time}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('faq.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('faq.heading')}</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map(f => (
              <div key={f.q} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1rem' }}>{f.q}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>{t('cta.heading')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            {t('cta.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">{t('cta.primaryCta')} <ArrowRight size={16} /></Link>
            <Link href="/services/commercial-loan" className="btn-outline-white">{t('cta.secondaryCta')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
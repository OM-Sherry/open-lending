'use client'

import { Link } from '@/i18n/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'

export default function HomeLoanPage() {
  const t = useTranslations('homeLoanPage')

  const quickStats = t.raw('quickStats') as { n: string; l: string }[]
  const features = t.raw('features.items') as { title: string; desc: string }[]
  const steps = t.raw('howItWorks.steps') as { title: string; desc: string }[]
  const rateBullets = t.raw('rates.bullets') as string[]
  const rateItems = t.raw('rates.items') as { type: string; from: string; note: string }[]
  const faqs = t.raw('faq.items') as { q: string; a: string }[]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
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
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 560, marginBottom: '2.5rem' }}>
            {t('heroSubtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">{t('ctaPrimary')} <ArrowRight size={16} /></Link>
            <Link href="#how-it-works" className="btn-outline-white">{t('ctaSecondary')}</Link>
          </div>

          {/* quick stats */}
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
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('features.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('features.heading')}</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <CheckCircle size={22} color="var(--blue)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{f.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('howItWorks.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('howItWorks.heading')}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 720, margin: '0 auto' }}>
            {steps.map((s, i) => (
              <div key={s.title} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div className="step-num">{i + 1}</div>
                  {i < steps.length - 1 && <div style={{ width: 2, height: 48, background: 'var(--border)', marginTop: 4 }} />}
                </div>
                <div className="card" style={{ flex: 1, marginBottom: 0 }}>
                  <h3 className="heading-3" style={{ marginBottom: '0.5rem', color: 'var(--navy)' }}>{s.title}</h3>
                  <p className="body" style={{ fontSize: '0.9rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES INDICATOR */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">{t('rates.label')}</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>{t('rates.heading')}</h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                {t('rates.subtitle')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {rateBullets.map(b => (
                  <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="btn-primary">{t('rates.cta')} <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {rateItems.map(r => (
                <div key={r.type} style={{ background: 'var(--sky)', borderRadius: '0.875rem', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem' }}>{r.type}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: 2 }}>{r.note}</div>
                  </div>
                  <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '1.15rem' }}>{r.from}</div>
                </div>
              ))}
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                {t('rates.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--gray)' }}>
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
            <Link href="/services/car-loan" className="btn-outline-white">{t('cta.secondaryCta')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
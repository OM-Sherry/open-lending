'use client'

import { Link } from '@/i18n/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import { CheckCircle, ArrowRight, ChevronRight, Building2 } from 'lucide-react'

export default function CommercialLoanPage() {
  const t = useTranslations('commercialLoanPage')

  const quickStats = t.raw('quickStats') as { n: string; l: string }[]
  const products = t.raw('products.items') as { title: string; desc: string }[]
  const industries = t.raw('industries.items') as string[]
  const process = t.raw('process.steps') as { title: string; desc: string }[]
  const whyBullets = t.raw('why.bullets') as string[]
  const whyProducts = t.raw('why.products') as { label: string; note: string }[]
  const faqs = t.raw('faq.items') as { q: string; a: string }[]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #060E1C 0%, #0A1628 50%, #0D2040 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,79,216,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -120, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbHome')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <Link href="/#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbServices')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>{t('breadcrumbCurrent')}</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.5rem' }}>{t('pill')}</div>
          <h1 className="display" style={{ color: 'white', maxWidth: 700, marginBottom: '1.5rem' }}>
            {t('heroTitle1')}<br /><span style={{ color: '#93B4FF' }}>{t('heroTitleHighlight')}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 560, marginBottom: '2.5rem' }}>
            {t('heroSubtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">{t('ctaPrimary')} <ArrowRight size={16} /></Link>
            <Link href="#products" className="btn-outline-white">{t('ctaSecondary')}</Link>
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

      {/* PRODUCTS */}
      <section className="section" id="products" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('products.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('products.heading')}</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>{t('products.subtitle')}</p>
          </div>
          <div className="grid-3">
            {products.map(p => (
              <div key={p.title} className="card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Building2 size={22} color="var(--blue)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{p.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ background: 'var(--sky)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label">{t('industries.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('industries.heading')}</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
              {t('industries.subtitle')}
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {industries.map(ind => (
              <div key={ind} style={{
                background: 'white', border: '1px solid var(--border)',
                borderRadius: '99px', padding: '0.625rem 1.25rem',
                fontSize: '0.9rem', fontWeight: 500, color: 'var(--navy)'
              }}>{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('process.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('process.heading')}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 720, margin: '0 auto' }}>
            {process.map((s, i) => (
              <div key={s.title} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div className="step-num">{i + 1}</div>
                  {i < process.length - 1 && <div style={{ width: 2, height: 48, background: 'var(--border)', marginTop: 4 }} />}
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

      {/* WHY */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">{t('why.label')}</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>{t('why.heading')}</h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                {t('why.subtitle')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                {whyBullets.map(b => (
                  <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="btn-primary">{t('why.cta')} <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {whyProducts.map(r => (
                <div key={r.label} style={{ background: 'white', borderRadius: '0.875rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem' }}>{r.label}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: 2 }}>{r.note}</div>
                  </div>
                  <ChevronRight size={18} color="var(--blue)" />
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
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            {t('cta.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">{t('cta.primaryCta')} <ArrowRight size={16} /></Link>
            <Link href="/services/home-loan" className="btn-outline-white">{t('cta.secondaryCta')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
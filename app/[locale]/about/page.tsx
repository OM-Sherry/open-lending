'use client'

import { Link } from '@/i18n/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import { ArrowRight, ChevronRight, CheckCircle, MapPin, Mail } from 'lucide-react'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,79,216,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbHome')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#8F6BFF', fontSize: '0.85rem' }}>{t('breadcrumbCurrent')}</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.5rem' }}>{t('pill')}</div>
          <h1 className="display" style={{ color: 'white', maxWidth: 680, marginBottom: '1.5rem' }}>
            {t('heroTitle1')}<br /><span style={{ color: '#93B4FF' }}>{t('heroTitleHighlight')}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 580, marginBottom: '2.5rem' }}>
            {t('heroSubtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">{t('heroCta')} <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">{t('story.label')}</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>{t('story.heading')}</h2>
              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                {t('story.p1')}
              </p>
              <p className="body" style={{ marginBottom: '1.25rem' }}>
                {t('story.p2')}
              </p>
              <p className="body" style={{ marginBottom: '2rem' }}>
                {t('story.p3')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {t.raw('story.bullets').map((b: string) => (
                  <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder + quote */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img
                src="/images/about/team.jpg"
                alt="Open Lending Office"
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  borderRadius: "1.25rem",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                  display: "block",
                }}
              />
              <div style={{ background: 'var(--navy)', borderRadius: '1rem', padding: '1.75rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{t('story.quote')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE 
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('timeline.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('timeline.heading')}</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 71, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {t.raw('timeline.milestones').map((m: { year: string; title: string; desc: string }, i: number, arr: any[]) => (
                <div key={m.year} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 80, flexShrink: 0, textAlign: 'right', paddingTop: '0.75rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '0.9rem' }}>{m.year}</span>
                  </div>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: i === arr.length - 1 ? 'var(--blue)' : 'white', border: '3px solid var(--blue)', flexShrink: 0, marginTop: '0.625rem', position: 'relative', zIndex: 1 }} />
                  <div className="card" style={{ flex: 1, padding: '1.25rem 1.5rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>{m.title}</div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('values.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('values.heading')}</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
              {t('values.subtitle')}
            </p>
          </div>
          <div className="grid-3">
            {t.raw('values.items').map((v: { title: string; desc: string }) => (
              <div key={v.title} className="card">
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{v.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">{t('offices.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('offices.heading')}</h2>
          </div>
          <div className="grid-3">
            {t.raw('offices.items').map((o: { city: string; address: string }) => (
              <div key={o.city} className="card" style={{ textAlign: 'center' }}>
                <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>{o.city}</h3>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <MapPin size={16} color="var(--blue)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{o.address}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--blue)' }}><Mail size={18} /></span>
              {t('offices.email')}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>
              {t('offices.hours')}
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="section-sm" style={{ background: 'var(--gray)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: '1rem' }}>{t('accreditations.label')}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            {t.raw('accreditations.items').map((a: string) => (
              <div key={a} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '0.875rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)' }}>{a}</div>
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
            <Link href="/contact" className="btn-primary">{t('cta.primaryCta')} <ArrowRight size={16} /></Link>
            <Link href="/#services" className="btn-outline-white">{t('cta.secondaryCta')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
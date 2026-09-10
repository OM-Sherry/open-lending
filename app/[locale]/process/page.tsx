'use client'

import { Link } from '@/i18n/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import { ArrowRight, ChevronRight, Search, Users, FileText, Activity, CheckCircle, RefreshCw } from 'lucide-react'

const stepIcons = [
  <Search size={28} key="search" />,
  <Users size={28} key="users" />,
  <FileText size={28} key="filetext" />,
  <Activity size={28} key="activity" />,
  <CheckCircle size={28} key="check" />,
  <RefreshCw size={28} key="refresh" />,
]

const stepImages = [
  '/process/search.png',
  '/process/expert.png',
  '/process/application.png',
  '/process/tracking.png',
  '/process/closing.png',
  '/process/post.png',
]

export default function ProcessPage() {
  const t = useTranslations('processPage')

  const steps = t.raw('steps') as { number: string; title: string; content: string }[]
  const stats = t.raw('stats') as { n: string; l: string }[]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="process-hero">
        {/* Animated background layers */}
        <div className="process-aurora process-aurora-one" />
        <div className="process-aurora process-aurora-two" />
        <div className="process-grid-bg" />

        {/* Floating particles */}
        <div className="process-particles" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              style={{
                left: `${(index * 17) % 100}%`,
                top: `${(index * 29) % 100}%`,
                animationDelay: `${(index % 9) * -1.2}s`,
                animationDuration: `${10 + (index % 6) * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="container process-hero-content">
          <div
            className="process-fade-up process-delay-1"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbHome')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#9B55E9', fontSize: '0.85rem' }}>{t('breadcrumbCurrent')}</span>
          </div>
          <div
            className="pill process-fade-up process-delay-2"
            style={{ marginBottom: '1.5rem' }}
          ></div>
          <h1 className="display process-fade-up process-delay-3" style={{ color: 'white', maxWidth: 700, marginBottom: '1.5rem' }}>
            {t('heroTitle1')}<br />
            <span style={{ color: '#9B55E9' }}>{t('heroTitleHighlight')}</span>
          </h1>
          <p className="process-fade-up process-delay-4"
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.15rem',
              lineHeight: 1.75,
              maxWidth: 580,
              marginBottom: '2.5rem',
            }}> {t('heroSubtitle')}
          </p>
          <div
            className="process-hero-buttons process-fade-up process-delay-5"
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="btn-primary process-glow-button">
              {t('ctaPrimary')} <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-white process-outline-glow">
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Stats */}
          <div
            className="process-stats process-fade-up process-delay-6"
            style={{
              display: 'flex',
              gap: '3rem',
              marginTop: '4rem',
              flexWrap: 'wrap',
            }}
          >
            {stats.map((s) => (
              <div key={s.l} className="process-stat-item">
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em' }}>{s.n}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="label">{t('stepByStep.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('stepByStep.heading')}</h2>
            <p className="body-lg" style={{ maxWidth: 540, margin: '1rem auto 0' }}>
              {t('stepByStep.subtitle')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, i) => (
              <div key={step.number} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              }}>
                {/* Content side */}
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: '14px',
                      background: 'linear-gradient(135deg, #7B35C9 0%, #9B55E9 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', flexShrink: 0,
                      boxShadow: '0 4px 16px rgba(123,53,201,0.3)'
                    }}>{stepIcons[i]}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9B55E9', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t('stepLabel')} {step.number}</div>
                      <h3 className="heading-2" style={{ color: 'var(--navy)', lineHeight: 1.2 }}>{step.title}</h3>
                    </div>
                  </div>
                  <p className="body-lg" style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>{step.content}</p>
                </div>
                {/* Image */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <img
                    src={stepImages[i]}
                    alt={step.title}
                    style={{
                      width: "100%",
                      height: 420,
                      objectFit: "cover",
                      borderRadius: "20px",
                      boxShadow: "0 20px 40px rgba(0,0,0,.12)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1A0D2E 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>{t('cta.heading')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            {t('cta.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">{t('cta.primaryCta')} <ArrowRight size={16} /></Link>
            <Link href="/services/home-loan" className="btn-outline-white">{t('cta.secondaryCta')}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
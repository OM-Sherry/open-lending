'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, ChevronRight, MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contactPage')

  const [form, setForm] = useState({ name: '', email: '', phone: '', loanType: 'Home Loan', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch {
      alert('Failed to send message. Please try again.')
    }
    setLoading(false)
  }

  const officesMeta = [
    { img: '/images/offices/sydney.webp' },
    { img: '/images/offices/brisbane.jpg' },
    { img: '/images/offices/hobart.jpg' },
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
        paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{t('breadcrumbHome')}</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#8F6BFF', fontSize: '0.85rem' }}>{t('breadcrumbCurrent')}</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.25rem' }}>{t('pill')}</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>{t('heroTitle')}</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.75 }}>
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

            {/* FORM */}
            <div className="card" style={{ padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <CheckCircle size={32} color="var(--blue)" />
                  </div>
                  <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>{t('form.successTitle')}</h3>
                  <p className="body" style={{ marginBottom: '1.5rem' }}>{t('form.successBody')}</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', loanType: 'Home Loan', message: '' }) }}
                    className="btn-secondary" style={{ fontSize: '0.875rem' }}>{t('form.sendAnother')}</button>
                </div>
              ) : (
                <>
                  <h2 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>{t('form.heading')}</h2>
                  <p className="body" style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>{t('form.subtitle')}</p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>{t('form.nameLabel')}</label>
                        <input required type="text" placeholder="John Smith" value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>{t('form.phoneLabel')}</label>
                        <input type="tel" placeholder="+61 4xx xxx xxx" value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>{t('form.emailLabel')}</label>
                      <input required type="email" placeholder="john@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>{t('form.loanTypeLabel')}</label>
                      <select value={form.loanType} onChange={e => setForm({ ...form, loanType: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', background: 'white', fontFamily: 'inherit' }}>
                        {['Home Loan', 'Car Loan', 'Commercial Loan', 'Refinance', 'Investment Loan', 'SMSF Loan', 'Other'].map((value, index) => (
                          <option key={value} value={value}>{t.raw('form.loanTypeOptions')[index]}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>{t('form.messageLabel')}</label>
                      <textarea required rows={5} placeholder={t('form.messagePlaceholder')} value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: 'center', padding: '0.875rem' }}>
                      {loading ? t('form.sending') : <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{t('form.send')} <ArrowRight size={16} /></span>}
                    </button>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>
                      {t('form.privacy')}
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Quick info */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>{t('info.heading')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {t.raw('info.items').map((c: { label: string; val: string }, index: number) => {
                    const icons = [<Mail size={18} key="mail" />, <Clock size={18} key="clock" />, <Phone size={18} key="phone" />]
                    return (
                      <div key={c.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}>{icons[index]}</div>
                        <div>
                          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{c.label}</div>
                          <div style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 500 }}>{c.val}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* What to expect */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '1.25rem' }}>{t('whatsNext.heading')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {t.raw('whatsNext.steps').map((text: string, index: number) => (
                    <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>{index + 1}</div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, paddingTop: 4 }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free promise */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '1.75rem' }}>
                <div style={{ color: '#8F6BFF', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t('promise.label')}</div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {t('promise.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label">{t('offices.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('offices.heading')}</h2>
            <p className="body-lg" style={{ maxWidth: 480, margin: '1rem auto 0' }}>{t('offices.subtitle')}</p>
          </div>
          <div className="grid-3">
            {t.raw('offices.items').map((o: { city: string; address: string }, index: number) => (
              <div key={o.city} className="card" style={{ textAlign: 'center' }}>
                <img
                  src={officesMeta[index].img}
                  alt={`${o.city} office`}
                  style={{
                    width: '100%', aspectRatio: '16/9',
                    objectFit: 'cover',
                    borderRadius: '0.75rem', marginBottom: '1.5rem',
                    display: 'block',
                  }}
                />
                <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '1rem' }}>{o.city}</h3>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  <MapPin size={15} color="var(--blue)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6, textAlign: 'left' }}>{o.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label">{t('faq.label')}</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">{t('faq.heading')}</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.raw('faq.items').map((f: { q: string; a: string }) => (
              <div key={f.q} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem', fontSize: '1rem' }}>{f.q}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
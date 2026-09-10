'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-react'



function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem'
      }}>
        <span style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem', lineHeight: 1.5 }}>{q}</span>
        <ChevronDown size={18} color="var(--blue)" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {open && (
        <div style={{ paddingBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const t = useTranslations('faqPage')
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = t.raw('categories') as {
    label: string
    faqs: { q: string; a: string }[]
  }[]

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
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>{t('breadcrumbCurrent')}</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.25rem' }}>{t('pill')}</div>
          <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>{t('heroTitle')}</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.75 }}>
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '3rem', alignItems: 'start' }}>

            {/* Category sidebar */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', paddingLeft: '0.5rem' }}>{t('categoriesLabel')}</div>
                {categories.map((c, i) => (
                  <button key={c.label} onClick={() => setActiveCategory(i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textAlign: 'left',
                      background: activeCategory === i ? 'var(--sky)' : 'transparent',
                      color: activeCategory === i ? 'var(--blue)' : 'var(--muted)',
                      fontWeight: activeCategory === i ? 700 : 500, fontSize: '0.875rem',
                      marginBottom: '0.25rem'
                    }}>
                    
                    <span>{c.label}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.6 }}>{c.faqs.length}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ list */}
            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  
                  <h2 className="heading-2" style={{ color: 'var(--navy)' }}>{categories[activeCategory].label}</h2>
                </div>
                {categories[activeCategory].faqs.map(f => (
                  <FAQItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>

              {/* Still have questions */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '2rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>{t('stillHaveQuestions')}</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{t('stillHaveQuestionsBody')}</p>
                </div>
                <Link href="/contact" className="btn-primary">
                  {t('talkToSpecialist')} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
'use client'

import { useState, type FormEvent } from 'react'
import { Link } from '@/i18n/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl'
import { Home, Car, Building2, Mail, MapPin, ChevronRight, ArrowRight, Menu, X } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations('home')
  const [menuOpen, setMenuOpen] = useState(false)
    const [contactLoading, setContactLoading] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const handleHomeContactSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const formElement = e.currentTarget
    const formData = new FormData(formElement)
    
    setContactLoading(true)
    setContactSubmitted(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          loanType: formData.get('loanType'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      formElement.reset()
      setContactSubmitted(true)
    } catch (error) {
      console.error('Homepage contact form error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setContactLoading(false)
    }
  }
  
  const lenders = [
    { name: "ANZ", file: "anz.webp" },
    { name: "NAB", file: "nab.webp" },
    { name: "Commonwealth Bank", file: "commonwealth.webp" },
    { name: "Westpac", file: "westpac.webp" },
    { name: "St.George", file: "st-george.webp" },
    { name: "Macquarie", file: "macquarie.webp" },
    { name: "Bank of China", file: "bank-of-china.webp" },
    { name: "Suncorp Bank", file: "suncorp.webp" },
    { name: "Firstmac", file: "firstmac.webp" },
    { name: "Platform Direct Finance", file: "platform.webp" },
    { name: "MoneyMe", file: "moneyme.webp" },
    { name: "Prospa", file: "prospa.webp" },
    { name: "La Trobe Financial", file: "latrobe.webp" },
    { name: "Bank of Sydney", file: "bank-of-sydney.webp" },
    { name: "Bankwest", file: "bankwest.webp" },
    { name: "ING", file: "ing.webp" },
    { name: "Pepper", file: "pepper.webp" },
    { name: "BOQ", file: "boq.webp" },
  ]

  return (
    <>
      {/* NAV */}
      <Navbar />

      {menuOpen && (
  <div className="mobile-menu">

    <Link href="/" onClick={()=>setMenuOpen(false)}>
      Home
    </Link>

    <Link href="/#services" onClick={()=>setMenuOpen(false)}>
      Services
    </Link>
input in the 
    <Link href="/process" onClick={()=>setMenuOpen(false)}>
      Our Process
    </Link>

    <Link href="/#resources" onClick={()=>setMenuOpen(false)}>
      Resources
    </Link>

    <Link href="/about" onClick={()=>setMenuOpen(false)}>
      About
    </Link>

    <Link href="/contact" onClick={()=>setMenuOpen(false)}>
      Contact
    </Link>

    <Link
      href="/contact"
      className="btn-primary"
      onClick={()=>setMenuOpen(false)}
    >
      Book a Call
    </Link>

  </div>
)}

{/* HERO */}
<section style={{
  background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
  paddingTop: 'calc(72px + 4rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
}}>
  <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
  <div style={{ position: 'absolute', bottom: -80, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,79,216,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

  <div className="container" style={{ position: 'relative', zIndex: 1 }}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}
    >
      {/* Left: Text */}
      <div style={{ maxWidth: 620 }}>
        <div className="hero-eyebrow">{t('hero.eyebrow')}</div>

<h1
  className="display"
  style={{
    color: "#fff",
    marginBottom: "1.5rem",
    lineHeight: 1.05,
  }}
>
  {t('hero.titleLine1')}
  <br />
  <span style={{ color: "#93B4FF" }}>{t('hero.titleHighlight')}</span>
</h1>

<p
  style={{
    color: "rgba(255,255,255,0.88)",
    fontSize: "1.15rem",
    lineHeight: 1.8,
    maxWidth: 500,
    marginBottom: "2.5rem",
  }}
>
  {t('hero.subtitle')}
</p>

<div className="hero-btns">
  <Link href="/contact" className="btn-primary">
    {t('hero.ctaPrimary')} <ArrowRight size={16} />
  </Link>

  <Link href="/process" className="btn-outline-white">{t('hero.ctaSecondary')}</Link>
</div>

      {/*  <div
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "1500+", label: "Loans Settled" },
            { num: "$400M+", label: "Funds Placed" },
            { num: "100+", label: "Lender Panel" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                {s.num}
              </div>

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.75)",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>  */}
      </div>

      <div>
  <img
    src="images\about\people.jpg"
    alt="Open Lending client family"
    style={{
      width: '100%',
      height: 500,
      objectFit: 'cover',
      borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
      display: 'block',
    }}
  />
</div>
    </div>
  </div>
</section>

      {/* WELCOME */}
<section className="section stripe-accent" style={{ background: 'var(--white)' }}>
  <div className="container">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
      <div>
        <div className="label">{t('welcome.label')}</div>
        <div className="divider" />
        <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>{t('welcome.heading')}</h2>
        <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
          {t('welcome.p1')}
        </p>
        <p className="body" style={{ marginBottom: '2rem' }}>
          {t('welcome.p2')}
        </p>
        <Link href="/contact" className="btn-primary">{t('welcome.cta')} <ChevronRight size={16} /></Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {t.raw('welcome.features').map((f: { title: string; desc: string }) => (
          <div key={f.title} className="card" style={{ padding: '1.5rem' }}>
            <div className="heading-3" style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>{f.title}</div>
            <p className="body" style={{ fontSize: '0.85rem' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ADVISORY */}
<section className="section" style={{ background: 'var(--gray)' }}>
  <div className="container">
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div className="label">{t('advisory.label')}</div>
      <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
      <h2 className="heading-1">{t('advisory.heading')}</h2>
      <p className="body-lg" style={{ maxWidth: 560, margin: '1rem auto 0' }}>
        {t('advisory.subtitle')}
      </p>
    </div>

    <div className="grid-3">
      {t.raw('advisory.items').map((a: { title: string; desc: string }) => (
        <div key={a.title} className="card">
          <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{a.title}</h3>
          <p className="body">{a.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PROCESS */}
<section className="section" id="process" style={{ background: 'var(--white)' }}>
  <div className="container">
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div className="label">{t('process.label')}</div>
      <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
      <h2 className="heading-1">{t('process.heading')}</h2>
      <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
        {t('process.subtitle')}
      </p>
    </div>

    <div className="grid-3" style={{ marginBottom: '3rem' }}>
      {t.raw('process.steps').map((step: { n: string; title: string; desc: string }) => (
        <div key={step.n} className="card" style={{ textAlign: 'center' }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'linear-gradient(135deg, #7B35C9 0%, #9B55E9 100%)',
            color: 'white', fontWeight: 800, fontSize: '0.9rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.25rem',
            boxShadow: '0 2px 12px rgba(123,53,201,0.3)'
          }}>{step.n}</div>
          <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)', fontSize: '1rem' }}>{step.title}</h3>
          <p className="body" style={{ fontSize: '0.875rem' }}>{step.desc}</p>
        </div>
      ))}
    </div>

    <div style={{ textAlign: 'center' }}>
      <Link href="/process" className="btn-primary">
        {t('process.cta')} <ArrowRight size={16} />
      </Link>
    </div>
  </div>
</section>

{/* WHY CHOOSE US */}
<section className="section" style={{ background: 'var(--sky)' }}>
  <div className="container">
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div className="label">{t('why.label')}</div>
      <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
      <h2 className="heading-1">{t('why.heading')}</h2>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "2rem",
      }}
    >
      {t.raw('why.items').map((w: { title: string; cta: string }, index: number) => {
        const meta = [
          { image: "/images/services/valuation.png", link: "/contact" },
          { image: "/images/services/loan.png", link: "/#process" },
          { image: "/images/services/team.png", link: "/contact" },
          { image: "/images/services/rates.png", link: "/#services" },
        ][index]
        return (
          <div
            key={w.title}
            className="card"
            style={{
              textAlign: "center",
              background: "white",
              padding: "2.5rem",
              minHeight: 520,
            }}
          >
            <img
              src={meta.image}
              alt={w.title}
              style={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                borderRadius: "16px",
                marginBottom: "1.5rem",
              }}
            />

            <h3
              className="heading-3"
              style={{
                marginBottom: "1.5rem",
                fontSize: "1.5rem",
                lineHeight: 1.25,
              }}
            >
              {w.title}
            </h3>

            <Link
              href={meta.link}
              className="btn-primary"
              style={{
                padding: "0.8rem 1.5rem",
                fontSize: "1rem",
                width: "70%",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              {w.cta}
            </Link>
          </div>
        )
      })}
    </div>
  </div>
</section>

{/* SERVICES */}
<section className="section" id="services" style={{ background: 'var(--white)' }}>
  <div className="container">
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div className="label">{t('services.label')}</div>
      <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
      <h2 className="heading-1">{t('services.heading')}</h2>
    </div>

    <div className="grid-3">
      {t.raw('services.items').map((s: { title: string; desc: string }, index: number) => {
        const meta = [
          { icon: <Home size={32} />, link: '/services/home-loan', image: '/images/services/loan.png' },
          { icon: <Car size={32} />, link: '/services/car-loan', image: '/images/services/car-loan.png' },
          { icon: <Building2 size={32} />, link: '/services/commercial-loan', image: '/images/services/commercial-loan.png' },
        ][index]
        return (
          <div key={s.title} className="card">
            <div
              style={{
                width: '100%',
                aspectRatio: '3 / 2',
                overflow: 'hidden',
                borderRadius: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <img
                src={meta.image}
                alt={s.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform .4s ease',
                }}
              />
            </div>

            <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--sky)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              {meta.icon}
            </div>

            <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{s.title}</h3>
            <p className="body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>{s.desc}</p>
            <Link href={meta.link} className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
              {t('services.learnMore')} <ChevronRight size={14} />
            </Link>
          </div>
        )
      })}
    </div>
  </div>
</section>

{/* RESOURCES */}
<section className="section" id="resources" style={{ background: 'var(--gray)' }}> 
  <div className="container"> 
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}> 
      <div className="label">{t('resources.label')}</div> 
      <div className="divider" style={{ margin: '1rem auto 1.5rem' }} /> 
      <h2 className="heading-1">{t('resources.heading')}</h2> 
    </div> 

    <div className="grid-3"> 
      {t.raw('resources.items').map((r: { title: string; desc: string }, index: number) => { 
        const meta = [ 
          { image: "/images/services/repayment.png", href: "/resources/repayment-calculator" }, 
          { image: "/images/services/stamp.png", href: "/resources/stamp-duty-calculator" }, 
          { image: "/images/services/borrow.png", href: "/resources/loan-borrowing-calculator" }, 
        ][index]

        return ( 
          <div key={r.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}> 
            <img 
              src={meta.image} 
              alt={r.title} 
              style={{ 
                width: "100%", 
                height: 180, 
                objectFit: "contain", 
                marginBottom: "1.5rem", 
              }} 
            /> 

            <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>
              {r.title}
            </h3> 

            <p className="body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              {r.desc}
            </p> 

            <Link 
              href={meta.href} 
              className="btn-primary" 
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', alignSelf: 'flex-start' }}
            > 
              {t('resources.openCalculator')} <ArrowRight size={14} />
            </Link> 
          </div> 
        ) 
      })} 
    </div> 
  </div> 
</section>

      {/* LENDERS */}
<section className="section-sm" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}> 
  <div className="container"> 
    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}> 
      <div className="label">{t('lenders.label')}</div> 
      <div className="divider" style={{ margin: '1rem auto 1rem' }} /> 
      <h2 className="heading-2">{t('lenders.heading')}</h2> 
      <p className="body" style={{ marginTop: '0.5rem' }}> 
        {t('lenders.subtitle')}
      </p> 
    </div> 
 
    <div className="lender-marquee"> 
      <div className="lender-marquee-track"> 
        {[...lenders, ...lenders].map((lender, index) => ( 
          <div key={`${lender.name}-${index}`} className="lender-logo"> 
            <img 
              src={`/lenders/${lender.file}`} 
              alt={lender.name} 
              style={{ 
                maxWidth: 150, 
                maxHeight: 60, 
                objectFit: "contain", 
              }} 
            /> 
          </div> 
        ))} 
      </div> 
    </div> 
  </div> 
</section>

{/* CONTACT */}
<section
  className="section"
  id="contact"
  style={{
    background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
  }}
>
  <div className="container">
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'start',
      }}
    >
      {/* CONTACT INFORMATION */}
      <div>
        <div
          style={{
            color: '#8F6BFF',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          {t('contact.getInTouch')}
        </div>

        <h2
          className="heading-1"
          style={{
            color: 'white',
            marginBottom: '1.25rem',
          }}
        >
          {t('contact.heading')}
        </h2>

        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
          }}
        >
          {t('contact.subtitle')}
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {t.raw('contact.info').map((c: { label: string; val: string }, index: number) => {
            const icons = [
              <MapPin size={18} key="sydney" />,
              <MapPin size={18} key="brisbane" />,
              <MapPin size={18} key="hobart" />,
              <Mail size={18} key="email" />,
              null,
            ]
            return (
              <div
                key={c.label}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    color: '#93B4FF',
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                >
                  {icons[index]}
                </div>

                <div>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: 2,
                    }}
                  >
                    {c.label}
                  </div>

                  <div
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.9rem',
                    }}
                  >
                    {c.val}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div
        style={{
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '1.25rem',
          padding: '2.5rem',
        }}
      >
        <h3
          className="heading-3"
          style={{
            marginBottom: '1.5rem',
            color: 'white',
          }}
        >
          {t('contact.form.heading')}
        </h3>

        <form
          onSubmit={handleHomeContactSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {[
            {
              id: 'name',
              label: t('contact.form.nameLabel'),
              type: 'text',
              placeholder: 'John Smith',
            },
            {
              id: 'email',
              label: t('contact.form.emailLabel'),
              type: 'email',
              placeholder: 'john@example.com',
            },
            {
              id: 'phone',
              label: t('contact.form.phoneLabel'),
              type: 'tel',
              placeholder: '+61 4xx xxx xxx',
            },
          ].map((f) => (
            <div key={f.id}>
              <label
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                {f.label}
              </label>

              <input
                name={f.id}
                required={f.id === 'name' || f.id === 'email'}
                type={f.type}
                placeholder={f.placeholder}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  fontSize: '0.95rem',
                  color: 'var(--navy)',
                  outline: 'none',
                  background: 'white',
                }}
              />
            </div>
          ))}

          <div>
            <label
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              {t('contact.form.loanTypeLabel')}
            </label>

            <select
              name="loanType"
              defaultValue="Home Loan"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                color: 'var(--navy)',
                outline: 'none',
                background: 'white',
              }}
            >
              <option value="Home Loan">{t('contact.form.loanTypeOptions.0')}</option>
              <option value="Car Loan">{t('contact.form.loanTypeOptions.1')}</option>
              <option value="Commercial Loan">{t('contact.form.loanTypeOptions.2')}</option>
              <option value="Refinance">{t('contact.form.loanTypeOptions.3')}</option>
            </select>
          </div>

          <div>
            <label
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              {t('contact.form.messageLabel')}
            </label>

            <textarea
              name="message"
              required
              rows={4}
              placeholder={t('contact.form.messagePlaceholder')}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                color: 'var(--navy)',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                background: 'white',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={contactLoading}
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '0.875rem',
              opacity: contactLoading ? 0.7 : 1,
              cursor: contactLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {contactLoading ? (
              t('contact.form.sending')
            ) : (
              <>
                {t('contact.form.send')} <ArrowRight size={16} />
              </>
            )}
          </button>

          {contactSubmitted && (
            <p
              style={{
                color: '#4ADE80',
                fontSize: '0.9rem',
                textAlign: 'center',
                fontWeight: 600,
                margin: 0,
              }}
            >
              {t('contact.form.success')}
            </p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>

<Footer />
</>
)
}
'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Home, Car, Building2, Mail, MapPin, ChevronRight, ArrowRight, Menu, X } from 'lucide-react'

export default function HomePage() {
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
      <nav>
        <div className="container nav-inner">
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', background: "transparent" }}>
            <img src="/opl.png" alt="Open Lending" className="nav-logo" />
          </Link>

          <div className="nav-links">
            <Link href="/" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
            <Link href="/#services" className="nav-link">Services</Link>
            <Link href="/#process" className="nav-link">Our Process</Link>
            <Link href="/#resources" className="nav-link">Resources</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/contact" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>Book a Call</Link>
          </div>

          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
  <div className="mobile-menu">

    <Link href="/" onClick={()=>setMenuOpen(false)}>
      Home
    </Link>

    <Link href="/#services" onClick={()=>setMenuOpen(false)}>
      Services
    </Link>

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
<section
  className="hero"
  style={{
    paddingTop: 72,
    minHeight: "88vh",
    backgroundImage: `
      linear-gradient(
        rgba(10,10,25,0.35),
        rgba(10,10,25,0.35)
      ),
      url("/images/about/house.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "65% center",
    backgroundRepeat: "no-repeat",
  }}
>
        <div className="orb" style={{ width: 600, height: 600, top: -200, right: -200 }} />

        <div className="container hero-content" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Text */}
            <div
              style={{
                maxWidth: 620,
                padding: "2.5rem",
                borderRadius: "18px",
                background: "rgba(10, 10, 20, 0.55)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 10px 30px rgba(0,0,0,.15)",
              }}
            >
              <div className="hero-eyebrow">OPENING MORE POSSIBILITIES</div>

              <h1
                className="display"
                style={{
                  color: "#fff",
                  marginBottom: "1.5rem",
                  lineHeight: 1.05,
                }}
              >
                Open Your
                <br />
                <span style={{ color: "#8F6BFF" }}>Dream Home</span>
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
                Structured lending advice, lender matching, and end-to-end support from assessment to settlement.
              </p>

              <div className="hero-btns">
                <Link href="/contact" className="btn-primary">
                  Free Consultation <ArrowRight size={16} />
                </Link>

                <Link href="/process" className="btn-outline-white">See Our Process</Link>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "3rem",
                  marginTop: "3.5rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { num: "500+", label: "Loans Settled" },
                  { num: "$200M+", label: "Funds Placed" },
                  { num: "50+", label: "Lender Panel" },
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
              </div>
            </div>

            <div />
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section stripe-accent" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">About Us</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>Welcome to Open Lending</h2>
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
                At Open Lending, we are committed to providing exceptional financial solutions tailored to your unique needs.
              </p>
              <p className="body" style={{ marginBottom: '2rem' }}>
                With years of experience in the mortgage industry, our team of experts is dedicated to helping you achieve your property and financial goals.
              </p>
              <Link href="/contact" className="btn-primary">Talk to an Expert <ChevronRight size={16} /></Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { title: 'End-to-end Advisory', desc: 'Full coverage from discovery to settlement' },
                { title: 'Multi-lender Panel', desc: 'Compare across 50+ lenders' },
                { title: 'Credit-aware', desc: 'Optimised submission quality' },
                { title: 'Post-settlement', desc: 'Ongoing loan review support' },
              ].map((f) => (
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
            <div className="label">Our Approach</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">A more rigorous lending advisory experience</h2>
            <p className="body-lg" style={{ maxWidth: 560, margin: '1rem auto 0' }}>
              We combine structured planning, lender policy insight, and disciplined execution.
            </p>
          </div>

          <div className="grid-3">
            {[
              { title: 'Borrowing Strategy', desc: 'We map your target, timeline, and cash-flow position into a practical borrowing structure before paperwork begins.', icon: '📋' },
              { title: 'Credit Positioning', desc: 'We assess serviceability, liabilities, and lender policy fit to reduce avoidable credit friction in assessment.', icon: '🎯' },
              { title: 'Execution Discipline', desc: 'From document collection to lender follow-up, we manage milestones and keep every stakeholder aligned through to settlement.', icon: '⚡' },
            ].map((a) => (
              <div key={a.title} className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{a.icon}</div>
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
      <div className="label">How it Works</div>
      <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
      <h2 className="heading-1">A transparent client journey</h2>
      <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
        Six structured steps designed to remove uncertainty and keep you informed at every stage.
      </p>
    </div>

    <div className="grid-3" style={{ marginBottom: '3rem' }}>
      {[
        { n: '01', title: 'Search & Shortlist', desc: 'We filter and shortlist suitable loan options based on your deposit, repayment preferences, and risk profile.' },
        { n: '02', title: 'Expert Consultation', desc: 'One-on-one session to review your income, goals, and borrowing capacity with a clear strategy outcome.' },
        { n: '03', title: 'Application', desc: 'We prepare and submit a structured, credit-ready package to give your application the best chance of approval.' },
        { n: '04', title: 'Tracking & Updating', desc: 'We actively monitor progress and manage lender communication so you always know where things stand.' },
        { n: '05', title: 'Closing', desc: 'We coordinate settlement and walk you through loan terms, repayment setup, and signing requirements.' },
        { n: '06', title: 'Post-Closing', desc: 'Ongoing loan health checks, refinancing reviews, and trusted partner referrals after settlement.' },
      ].map(step => (
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
        View Full Process <ArrowRight size={16} />
      </Link>
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--sky)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Why Open Lending</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Why Choose Open Lending</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { title: "Free Property Valuation", image: "/images/services/valuation.png", link: "/contact", cta: "Apply Now" },
              { title: "Tailored Loan Solution", image: "/images/services/loan.png", link: "/#process", cta: "Check Our Process" },
              { title: "Professional Team", image: "/images/services/team.png", link: "/contact", cta: "Contact Us" },
              { title: "Competitive Rates", image: "/images/services/rates.png", link: "/#services", cta: "View Loan Products" },
            ].map((w) => (
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
                  src={w.image}
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
                  href={w.link}
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
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">What We Offer</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Our Services</h2>
          </div>

          <div className="grid-3">
            {[
              { title: 'Home Loan', icon: <Home size={32} />, desc: 'Whether you are buying your first home, upgrading, or refinancing — we find the right loan structure for your situation.', link: '/services/home-loan', image: '/images/services/loan.png' },
              { title: 'Car Loan', icon: <Car size={32} />, desc: 'Competitive car finance solutions with fast approvals and flexible repayment terms tailored to your budget.', link: '/services/car-loan', image: '/images/services/car-loan.png' },
              { title: 'Commercial Loan', icon: <Building2 size={32} />, desc: 'Business lending solutions for property acquisition, equipment, and working capital — structured for your growth.', link: '/services/commercial-loan', image: '/images/services/commercial-loan.png' },
            ].map((s) => (
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
                    src={s.image}
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
                  {s.icon}
                </div>

                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{s.title}</h3>
                <p className="body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>{s.desc}</p>
                <Link href={s.link} className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section" id="resources" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Tools & Calculators</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Resources</h2>
          </div>

          <div className="grid-3">
            {[
              { title: "Repayment Calculator", image: "/images/services/repayment.png", desc: "Estimate your monthly repayments based on loan amount, interest rate, and term.", href: "/resources/repayment-calculator" },
              { title: "Stamp Duty Calculator", image: "/images/services/stamp.png", desc: "Calculate stamp duty costs for your property purchase across all Australian states.", href: "/resources/stamp-duty-calculator" },
              { title: "Loan Borrowing Calculator", image: "/images/services/borrow.png", desc: "Find out how much you may be able to borrow based on your income and expenses.", href: "/resources/loan-borrowing-calculator" },
            ].map((r) => (
              <div key={r.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <img
                  src={r.image}
                  alt={r.title}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "contain",
                    marginBottom: "1.5rem",
                  }}
                />

                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{r.title}</h3>
                <p className="body" style={{ marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>{r.desc}</p>
                <Link href={r.href} className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', alignSelf: 'flex-start' }}>
                  Open Calculator <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LENDERS */}
      <section className="section-sm" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="label">Our Panel</div>
            <div className="divider" style={{ margin: '1rem auto 1rem' }} />
            <h2 className="heading-2">Our Lenders</h2>
            <p className="body" style={{ marginTop: '0.5rem' }}>
              We partner with leading financial institutions to provide you with the best loan options.
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
            color: '#93B4FF',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          Get In Touch
        </div>

        <h2
          className="heading-1"
          style={{
            color: 'white',
            marginBottom: '1.25rem',
          }}
        >
          Let&apos;s talk about your lending goals
        </h2>

        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
          }}
        >
          Ready to take the next step? Our experienced lending specialists
          are here to guide you through every stage of your finance journey
          with confidence.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {[
            {
              icon: <MapPin size={18} />,
              label: 'Sydney',
              val: 'Level 12 /87-89 Liverpool Street, Sydney NSW 2000',
            }, 
            {
              icon: <Mail size={18} />,
              label: 'Email',
              val: 'info@openlendinggroup.com.au',
            },
            {
              icon: null,
              label: 'Hours',
              val: 'Mon–Fri 10:00 am – 06:00 pm · Sat/Sun Closed',
            },
          ].map((c) => (
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
                {c.icon}
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
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div
        style={{
          background: 'white',
          borderRadius: '1.25rem',
          padding: '2.5rem',
        }}
      >
        <h3
          className="heading-3"
          style={{
            marginBottom: '1.5rem',
            color: 'var(--navy)',
          }}
        >
          Book a Strategy Call
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
              label: 'Full Name',
              type: 'text',
              placeholder: 'John Smith',
            },
            {
              id: 'email',
              label: 'Email Address',
              type: 'email',
              placeholder: 'john@example.com',
            },
            {
              id: 'phone',
              label: 'Phone Number',
              type: 'tel',
              placeholder: '+61 4xx xxx xxx',
            },
          ].map((f) => (
            <div key={f.id}>
              <label
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--navy)',
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
                  color: 'var(--text)',
                  outline: 'none',
                }}
              />
            </div>
          ))}

          <div>
            <label
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--navy)',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              Loan Type
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
                color: 'var(--text)',
                outline: 'none',
                background: 'white',
              }}
            >
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Commercial Loan">Commercial Loan</option>
              <option value="Refinance">Refinance</option>
            </select>
          </div>

          <div>
            <label
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--navy)',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              Message
            </label>

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your situation..."
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                color: 'var(--text)',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
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
              'Sending...'
            ) : (
              <>
                Send Message <ArrowRight size={16} />
              </>
            )}
          </button>

          {contactSubmitted && (
            <p
              style={{
                color: '#16803c',
                fontSize: '0.9rem',
                textAlign: 'center',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Message sent successfully! We will contact you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>
    
      <footer>
        <div className="container" style={{ padding: '4rem 2rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem' }}>
            <div>
              <div className="footer-brand">Open Lending</div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 280 }}>
                Your trusted partner for lending solutions in Sydney, Brisbane, and Hobart.
              </p>
            </div>

            <div>
              <div className="footer-heading">Services</div>
              {[['Our Process', '/#process'], ['Home Loan', '/services/home-loan'], ['Car Loan', '/services/car-loan'], ['Commercial Loan', '/services/commercial-loan']].map(([l, h]) => (
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>

            <div>
              <div className="footer-heading">Resources</div>
              {[['Repayment Calculator', '/resources/repayment-calculator'], ['Stamp Duty Calculator', '/resources/stamp-duty-calculator'], ['Borrowing Calculator', '/resources/loan-borrowing-calculator']].map(([l, h]) => (
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>

            <div>
              <div className="footer-heading">More</div>
              {[['About Us', '/about'], ['Contact Us', '/contact'], ['FAQ', '/faq']].map(([l, h]) => (
                <Link key={l} href={h} className="footer-link">{l}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span>© 2026 Open Lending. All rights reserved.</span>
            <span>Credit Representative · Australian Credit Licence</span>
          </div>
        </div>
      </footer>
    </>
  )
}

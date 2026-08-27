'use client'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, ChevronRight, MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
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

  const offices = [
    { city: 'Sydney', address: 'Level 12/87-89 Liverpool Street, Sydney NSW 2000', img: '/images/offices/sydney.webp' },
    { city: 'Brisbane', address: 'Level 1/7 Clunies Ross Court, Eight Mile Plains QLD 4113', img: '/images/offices/brisbane.webp' },
    { city: 'Hobart', address: 'Level 1/22 Liverpool Street, Hobart TAS 7000', img: '/images/offices/hobart.jpg' }
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
      <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
      <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
      <span style={{ color: '#8F6BFF', fontSize: '0.85rem' }}>Contact Us</span>
    </div>
    <div className="pill" style={{ marginBottom: '1.25rem' }}>📞 Get In Touch</div>
    <h1 className="heading-1" style={{ color: 'white', marginBottom: '0.75rem' }}>Let's talk about your lending goals</h1>
    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.75 }}>
      Book a free strategy call or send us a message. Our team typically responds within one business day.
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
                  <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p className="body" style={{ marginBottom: '1.5rem' }}>Thank you for reaching out. One of our specialists will be in touch within one business day.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', loanType: 'Home Loan', message: '' }) }}
                    className="btn-secondary" style={{ fontSize: '0.875rem' }}>Send Another Message</button>
                </div>
              ) : (
                <>
                  <h2 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Book a Strategy Call</h2>
                  <p className="body" style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>Fill in your details and we will be in touch to schedule a time that suits you.</p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>Full Name *</label>
                        <input required type="text" placeholder="John Smith" value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>Phone Number</label>
                        <input type="tel" placeholder="+61 4xx xxx xxx" value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>Email Address *</label>
                      <input required type="email" placeholder="john@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>Loan Type</label>
                      <select value={form.loanType} onChange={e => setForm({ ...form, loanType: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', background: 'white', fontFamily: 'inherit' }}>
                        {['Home Loan', 'Car Loan', 'Commercial Loan', 'Refinance', 'Investment Loan', 'SMSF Loan', 'Other'].map(t => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.4rem' }}>How can we help? *</label>
                      <textarea required rows={5} placeholder="Tell us about your situation -property type, loan amount, timeline, or any questions you have..." value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--border)', borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: 'center', padding: '0.875rem' }}>
                      {loading ? 'Sending...' : <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Send Message <ArrowRight size={16} /></span>}
                    </button>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* INFO */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Quick info */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '1.5rem' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { icon: <Mail size={18} />, label: 'Email', val: 'info@openlendinggroup.com.au' },
                    { icon: <Clock size={18} />, label: 'Business Hours', val: 'Mon–Fri 10:00 am -6:00 pm' },
                    { icon: <Phone size={18} />, label: 'Response Time', val: 'Within 1 business day' },
                  ].map(c => (
                    <div key={c.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', flexShrink: 0 }}>{c.icon}</div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{c.label}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 500 }}>{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 className="heading-3" style={{ color: 'var(--navy)', marginBottom: '1.25rem' }}>What happens next?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { n: 1, text: 'We review your enquiry and match you with the right specialist' },
                    { n: 2, text: 'A specialist calls to understand your situation in detail (30 min)' },
                    { n: 3, text: 'We prepare a written strategy with lender options and next steps' },
                    { n: 4, text: 'You decide if you want to proceed -no obligation' },
                  ].map(s => (
                    <div key={s.n} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>{s.n}</div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, paddingTop: 4 }}>{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free promise */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)', borderRadius: '1rem', padding: '1.75rem' }}>
                <div style={{ color: '#8F6BFF', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Promise</div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  The initial strategy call is completely free. No sales pressure, no obligation. We give you honest advice whether or not you choose to work with us.
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
            <div className="label">Our Locations</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Visit Us</h2>
            <p className="body-lg" style={{ maxWidth: 480, margin: '1rem auto 0' }}>Three offices across Australia to serve you in person.</p>
          </div>
          <div className="grid-3">
            {offices.map(o => (
              <div key={o.city} className="card" style={{ textAlign: 'center' }}>
                <img
                  src={o.img}
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
            <div className="label">FAQ</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Common questions</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Is the initial consultation free?', a: 'Yes, completely free. The strategy call has no cost and no obligation. We give you honest advice regardless of whether you choose to proceed with us.' },
              { q: 'How quickly will you respond?', a: 'We aim to respond to all enquiries within one business day. For urgent matters, please call us directly at your nearest office.' },
              { q: 'Do I need to visit an office?', a: 'No. We work with clients Australia-wide via phone and video call. In-person meetings are available at our Sydney, Brisbane, and Hobart offices if preferred.' },
              { q: 'What should I prepare before calling?', a: 'Nothing formal -just a rough idea of your goal (buying, refinancing, investing) and your current situation. We will guide you through what we need from there.' },
            ].map(f => (
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


import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, ChevronRight, CheckCircle, MapPin, Mail, Phone } from 'lucide-react'

export const metadata = { title: 'About Us - Open Lending', description:
  'Learn about Open Lending, our story, values, and the experienced team behind your lending journey.'}

const values = [
  { icon: '🎯', title: 'Client First', desc: 'Every recommendation we make is measured against one standard: is this genuinely the best outcome for the client?' },
  { icon: '🔍', title: 'Transparency', desc: 'No hidden commissions, no preferred lender bias. We show our work and explain every recommendation clearly.' },
  { icon: '⚡', title: 'Execution', desc: 'Advice without execution is just conversation. We follow through on every step from application to settlement.' },
  { icon: '📚', title: 'Education', desc: 'We believe informed clients make better decisions. We take time to explain the why behind every strategy.' },
  { icon: '🤝', title: 'Long-term Relationships', desc: 'The loan settles, but our relationship continues. We review your structure annually as life and rates change.' },
  { icon: '🛡️', title: 'Accountability', desc: 'We set realistic expectations and own the outcome -good or bad. Our reputation depends on it.' },
]

const team = [
  {
    name: 'Kevin Zhang',
    role: 'Director & Senior Mortgage Broker',
    bio: 'Over 10 years in financial services across Sydney and Brisbane. Kevin specialises in complex residential and commercial structures, with a particular focus on first-generation investors and SMSF lending.',
    credentials: ['Cert IV Finance & Mortgage Broking', 'Diploma of Finance', 'MFAA Member'],
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Mortgage Specialist',
    bio: 'Sarah brings deep expertise in first home buyer strategy, government grants, and construction loans. She is known for her meticulous document preparation and client communication.',
    credentials: ['Cert IV Finance & Mortgage Broking', 'FBAA Member'],
  },
  {
    name: 'James Liu',
    role: 'Commercial Lending Specialist',
    bio: 'James focuses on business lending -commercial property, equipment finance, and development funding. He has structured over $80M in commercial transactions across QLD and NSW.',
    credentials: ['Cert IV Finance & Mortgage Broking', 'Diploma of Finance', 'MFAA Member'],
  },
]

const offices = [
  { city: 'Sydney', address: 'Level 12/87-89 Liverpool Street, Sydney NSW 2000'},
  { city: 'Brisbane', address: 'Level 1/7 Clunies Ross Court, Eight Mile Plains QLD 4113' },
  { city: 'Hobart', address: 'Level 1/22 Liverpool Street, Hobart TAS 7000' },
]

const milestones = [
  { year: '2015', title: 'Founded in Sydney', desc: 'Open Lending was established with a focus on structured lending advice for residential clients.' },
  { year: '2017', title: 'Brisbane Office Opens', desc: 'Expanded into Queensland to serve the growing Southeast Queensland property market.' },
  { year: '2019', title: 'Commercial Division', desc: 'Launched a dedicated commercial lending team to serve business clients and investors.' },
  { year: '2021', title: '$100M Milestone', desc: 'Surpassed $100 million in total loans settled for Australian families and businesses.' },
  { year: '2023', title: 'Hobart Office Opens', desc: 'Expanded into Tasmania to support the growing Hobart property market.' },
  { year: '2025', title: '$400M+ Placed', desc: 'Over $200 million in funds placed across residential, commercial, and investment loans.' },
]

export default function AboutPage() {
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
      <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
      <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
      <span style={{ color: '#8F6BFF', fontSize: '0.85rem' }}>About Us</span>
    </div>
    <div className="pill" style={{ marginBottom: '1.5rem' }}>🏢 About Open Lending</div>
    <h1 className="display" style={{ color: 'white', maxWidth: 680, marginBottom: '1.5rem' }}>
      A lending partner built on<br /><span style={{ color: '#93B4FF' }}>trust and execution</span>
    </h1>
    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 580, marginBottom: '2.5rem' }}>
      Open Lending was founded on a simple belief:
      Australians deserve lending advice that is honest, strategic, and delivered with integrity from start to finish.
    </p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Link href="/contact" className="btn-primary">Work With Us <ArrowRight size={16} /></Link>
    </div>

    {/* Stats */}
    <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
      {[['10+', 'Years Experience'], ['$400M+', 'Funds Placed'], ['500+', 'Families Helped'], ['3', 'Office Locations']].map(([n, l]) => (
        <div key={l}>
          <div style={{ color: 'white', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em' }}>{n}</div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: 2 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* OUR STORY */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">Our Story</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>Why we started Open Lending</h2>
              <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
                Open Lending was founded in 2015 after our founding team saw too many clients receive generic loan recommendations that suited the broker's panel - not the client's situation.
              </p>
              <p className="body" style={{ marginBottom: '1.25rem' }}>
                We set out to build something different: a firm where every recommendation starts with a deep understanding of the client's goals, financial position, and timeline - and ends with a loan that actually fits.
              </p>
              <p className="body" style={{ marginBottom: '2rem' }}>
                Today, we operate from three offices across Sydney, Brisbane, and Hobart, with a team of specialists covering residential, commercial, and investment lending. Our panel spans 50+ lenders, from major banks to specialist non-bank lenders.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Independently owned no bank ownership or preferred lender bias',
                  'Fee structure disclosed upfront on every engagement',
                  'Access to lenders not available through bank branches',
                  'Ongoing review at no additional cost after settlement',
                ].map(b => (
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
                src="/images/about/team.png"
                alt="Open Lending Office"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: "1.25rem",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                  display: "block",
                }}
              />
              <div style={{ background: 'var(--navy)', borderRadius: '1rem', padding: '1.75rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>
                  "We measure success not by how many loans we write, but by how many clients genuinely feel they made the right decision - five years later."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Our Journey</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">A decade of growth</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 71, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {milestones.map((m, i) => (
                <div key={m.year} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 80, flexShrink: 0, textAlign: 'right', paddingTop: '0.75rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '0.9rem' }}>{m.year}</span>
                  </div>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: i === milestones.length - 1 ? 'var(--blue)' : 'white', border: '3px solid var(--blue)', flexShrink: 0, marginTop: '0.625rem', position: 'relative', zIndex: 1 }} />
                  <div className="card" style={{ flex: 1, padding: '1.25rem 1.5rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem' }}>{m.title}</div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">What We Stand For</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Our Values</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
              These are not slogans on a wall. They are the standards we hold ourselves to on every client engagement.
            </p>
          </div>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
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
            <div className="label">Where We Are</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Our Offices</h2>
          </div>
          <div className="grid-3">
            {offices.map(o => (
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
            {[
              { icon: <Mail size={18} />, label: 'info@openlendinggroup.com.au' },
              { label: 'Mon–Fri 10:00 am -6:00 pm' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--blue)' }}>{c.icon}</span>
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="section-sm" style={{ background: 'var(--gray)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: '1rem' }}>Accreditations & Memberships</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            {['MFAA Member', 'FBAA Member', 'Australian Credit Licence', 'Credit Representative', 'AFCA Member'].map(a => (
              <div key={a} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '0.875rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)' }}>{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>Ready to work with us?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Book a free strategy call with one of our specialists and get a clear lending strategy tailored to your goals. 
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Book a Free Call <ArrowRight size={16} /></Link>
            <Link href="/#services" className="btn-outline-white">View Our Services</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


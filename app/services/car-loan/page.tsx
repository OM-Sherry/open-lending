import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, ChevronRight, Car } from 'lucide-react'

export const metadata = { title: 'Car Loan - Open Lending', description: 'Competitive car finance with fast approvals and flexible terms.' }

const loanTypes = [
  { title: 'New Car Finance', desc: 'Finance a brand-new vehicle from a dealership with competitive rates and same-day pre-approval so you negotiate with confidence.' },
  { title: 'Used Car Finance', desc: 'Quality used vehicles up to 10 years old. We find lenders with flexible policies for private sales and dealer purchases alike.' },
  { title: 'Chattel Mortgage', desc: 'For business use vehicles -own the car from day one while enjoying GST and depreciation benefits. Ideal for ABN holders.' },
  { title: 'Car Lease', desc: 'Fixed monthly payments with an option to purchase at the end of the term. Great for managing cash flow.' },
  { title: 'Novated Lease', desc: 'Salary-packaging your car through your employer to save on GST and reduce taxable income.' },
  { title: 'Refinance', desc: 'Already have a car loan? We compare your current rate against the market -many clients save hundreds each year.' },
]

const benefits = [
  'Pre-approval in as little as 2 hours',
  'Loans from $5,000 to $150,000',
  'Terms from 1 to 7 years',
  'New, used, and commercial vehicles',
  'No early repayment penalties on select products',
  'Balloon payment options to reduce monthly repayments',
]

const faqs = [
  { q: 'Can I get pre-approved before visiting a dealership?', a: 'Yes. Pre-approval lets you know exactly what you can spend before you walk in, giving you stronger negotiating power. We can have a pre-approval letter ready within hours for most applicants.' },
  { q: 'Do I need a good credit score?', a: 'A strong credit history helps, but we work with a panel of lenders that includes specialist lenders for non-standard credit profiles. We assess your full situation, not just your score.' },
  { q: 'Can I finance a private sale vehicle?', a: 'Yes. Many lenders will finance private sale purchases. There are some age and condition restrictions -we will clarify these when we assess your application.' },
  { q: 'Is a deposit required?', a: 'Not always. Many car loans are available with no deposit required, especially for new vehicles. A deposit can lower your rate and repayments, but it is not mandatory.' },
]

export default function CarLoanPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D2347 50%, #0A2240 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,79,216,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <Link href="/#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>Car Loan</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.5rem' }}> Car Loan</div>
          <h1 className="display" style={{ color: 'white', maxWidth: 680, marginBottom: '1.5rem' }}>
            Drive away sooner with<br /><span style={{ color: '#93B4FF' }}>smarter car finance</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 540, marginBottom: '2.5rem' }}>
            Fast pre-approvals, competitive rates, and flexible terms for new and used vehicles -personal or business use.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">Get Pre-Approved <ArrowRight size={16} /></Link>
            <Link href="#loan-types" className="btn-outline-white">See Loan Types</Link>
          </div>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {[['2hr', 'Pre-approval'], ['7 yrs', 'Max Term'], ['$150K', 'Max Loan']].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em' }}>{n}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN TYPES */}
      <section className="section" id="loan-types" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Finance Options</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Car finance for every situation</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>Personal, business, new, or used -we have a product that fits.</p>
          </div>
          <div className="grid-3">
            {loanTypes.map(f => (
              <div key={f.title} className="card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Car size={22} color="var(--blue)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{f.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">Why Us</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>Car finance done differently</h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                We work for you, not the dealership. Our job is to find the most competitive finance available, with terms that actually work for your budget.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                {benefits.map(b => (
                  <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="btn-primary">Apply Now <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Application', time: '10 mins' },
                { label: 'Pre-approval', time: '2 hrs' },
                { label: 'Full Approval', time: '24 hrs' },
                { label: 'Settlement', time: '1- days' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'white', borderRadius: '1rem', padding: '1.5rem',
                  textAlign: 'center', border: '1px solid var(--border)'
                }}>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--blue)', letterSpacing: '-0.02em' }}>{s.time}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 4 }}>{s.label}</div>
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
            <div className="label">FAQ</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Common car loan questions</h2>
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
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>Ready to get behind the wheel?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Get pre-approved today and walk into any dealership knowing exactly what you can afford.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">Get Pre-Approved <ArrowRight size={16} /></Link>
            <Link href="/services/commercial-loan" className="btn-outline-white">Explore Commercial Loans</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata = { title: 'Home Loan - Open Lending', description: 'Expert home loan solutions for first home buyers, upgraders, and refinancers.' }

const features = [
  { title: 'First Home Buyer', desc: 'Navigate grants, LMI waivers, and stamp duty concessions with expert guidance tailored to first-time buyers.' },
  { title: 'Refinancing', desc: 'Lower your rate, access equity, or consolidate debt. We compare your current loan against 50+ lenders to find savings.' },
  { title: 'Investment Property', desc: 'Structure your investment loan to maximise tax efficiency and cash flow -interest-only, offset, or split options.' },
  { title: 'Construction Loans', desc: 'Progressive drawdown loans that match your build schedule, keeping interest costs low during construction.' },
  { title: 'Upgraders', desc: "Selling and buying simultaneously? We coordinate bridging finance so you don't miss your next home." },
  { title: 'Guarantor Loans', desc: 'Help from family can unlock a faster path to ownership. We structure guarantor arrangements safely for all parties.' },
]

const steps = [
  { n: 1, title: 'Assess Your Position', desc: 'We review income, expenses, credit history, and deposit to map your true borrowing power.' },
  { n: 2, title: 'Select the Right Lender', desc: 'We shortlist lenders whose policy, pricing, and product actually fit your scenario -not just the lowest rate.' },
  { n: 3, title: 'Prepare Your Application', desc: 'Complete document package, pre-empting every question a credit assessor is likely to ask.' },
  { n: 4, title: 'Approval & Settlement', desc: 'We manage the lender, conveyancer, and real estate agent to keep your settlement on track.' },
]

const faqs = [
  { q: 'How much deposit do I need?', a: 'Most lenders require at least 5-0% of the purchase price. A 20% deposit avoids Lenders Mortgage Insurance (LMI), but we can help you purchase with less using LMI or a guarantor.' },
  { q: 'How long does approval take?', a: 'Conditional approval can come within 24-8 hours for straightforward applications. Full approval typically takes 3- business days once all documents are submitted.' },
  { q: 'What documents will I need?', a: 'Generally: last 2 payslips, last 2 years tax returns (self-employed), 3 months bank statements, ID, and a signed contract of sale. We guide you through exactly what is needed for your situation.' },
  { q: 'Fixed or variable rate?', a: 'Depends on your risk appetite and plans. Fixed gives certainty; variable offers flexibility and often features like offset accounts. Many clients choose a split loan to balance both.' },
]

export default function HomeLoanPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <Link href="/#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>Home Loan</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.5rem' }}> Home Loan</div>
          <h1 className="display" style={{ color: 'white', maxWidth: 680, marginBottom: '1.5rem' }}>
            The right home loan,<br /><span style={{ color: '#93B4FF' }}>structured for you</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 560, marginBottom: '2.5rem' }}>
            Whether you are buying your first home, upgrading, investing, or refinancing -we find the right loan structure and lender for your exact situation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">Get Started <ArrowRight size={16} /></Link>
            <Link href="#how-it-works" className="btn-outline-white">How It Works</Link>
          </div>

          {/* quick stats */}
          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {[['From 5%', 'Min. Deposit'], ['24-8hr', 'Conditional Approval'], ['50+', 'Lenders Compared']].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em' }}>{n}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN TYPES */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">What We Cover</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Home loan solutions for every situation</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
              From first home buyers to seasoned investors, we have a solution that fits.
            </p>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <CheckCircle size={22} color="var(--blue)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{f.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">The Process</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">How we get your home loan approved</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 720, margin: '0 auto' }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div className="step-num">{s.n}</div>
                  {i < steps.length - 1 && <div style={{ width: 2, height: 48, background: 'var(--border)', marginTop: 4 }} />}
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

      {/* RATES INDICATOR */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">Indicative Rates</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>Competitive rates across our lender panel</h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                We do not lock you into one lender. We compare rates and policy across our full panel to find the best fit -not just the lowest headline rate.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'Access to major banks, non-banks, and specialist lenders',
                  'Variable, fixed, and split loan options',
                  'Offset accounts and redraw facilities',
                  'Interest-only periods for investors',
                  'Cashback offers and fee waivers where available',
                ].map(b => (
                  <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="btn-primary">Get a Rate Comparison <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { type: 'Variable Rate', from: 'From 6.14% p.a.', note: 'Comparison rate 6.18% p.a.' },
                { type: 'Fixed Rate (2yr)', from: 'From 5.89% p.a.', note: 'Comparison rate 6.22% p.a.' },
                { type: 'Fixed Rate (3yr)', from: 'From 5.99% p.a.', note: 'Comparison rate 6.28% p.a.' },
                { type: 'Interest Only', from: 'From 6.49% p.a.', note: 'Comparison rate 6.53% p.a.' },
              ].map(r => (
                <div key={r.type} style={{ background: 'var(--sky)', borderRadius: '0.875rem', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem' }}>{r.type}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: 2 }}>{r.note}</div>
                  </div>
                  <div style={{ fontWeight: 800, color: 'var(--blue)', fontSize: '1.15rem' }}>{r.from}</div>
                </div>
              ))}
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                * Rates are indicative only and subject to change. Comparison rates based on a $150,000 loan over 25 years. Your actual rate will depend on your individual circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">FAQ</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Common questions about home loans</h2>
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
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>Ready to find your home loan?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Book a free strategy call and we will map out a clear path to your approval.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">Book a Free Call <ArrowRight size={16} /></Link>
            <Link href="/services/car-loan" className="btn-outline-white">Explore Car Loans</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


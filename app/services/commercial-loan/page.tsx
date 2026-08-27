import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, ChevronRight, Building2 } from 'lucide-react'

export const metadata = { title: 'Commercial Loan - Open Lending', description: 'Business lending solutions for property, equipment, and working capital.' }

const products = [
  { title: 'Commercial Property', desc: 'Purchase or refinance office, retail, industrial, or mixed-use property. We access both bank and non-bank commercial lenders.' },
  { title: 'Business Equipment Finance', desc: 'Fund machinery, vehicles, or technology with equipment loans, chattel mortgages, or leases structured for your cash flow.' },
  { title: 'Working Capital', desc: 'Business overdrafts, debtor finance, and short-term loans to keep operations moving through growth or seasonal gaps.' },
  { title: 'Development Finance', desc: 'Construction and development funding for residential, commercial, or mixed-use projects -from pre-sales to completion.' },
  { title: 'SMSF Lending', desc: 'Purchase investment property inside your self-managed super fund with a limited recourse borrowing arrangement (LRBA).' },
  { title: 'Refinance & Restructure', desc: 'Review your existing business debt. We often find significant savings or improved terms for clients who have not reviewed recently.' },
]

const industries = ['Retail & Hospitality','Healthcare & Allied Health','Construction & Trades','Professional Services','Manufacturing','Wholesale & Distribution','Transport & Logistics','Agriculture']

const process = [
  { n: 1, title: 'Business Assessment', desc: 'We review your financials, business structure, and objectives to understand what the right loan looks like for your situation.' },
  { n: 2, title: 'Lender Matching', desc: 'Commercial lending is highly policy-specific. We shortlist lenders based on your industry, loan type, and risk profile.' },
  { n: 3, title: 'Credit Packaging', desc: 'We prepare a comprehensive credit submission -financials, projections, security details -to give your application the best chance of approval.' },
  { n: 4, title: 'Approval & Drawdown', desc: 'We manage the approval process, coordinate with solicitors, and ensure funds are drawn down efficiently.' },
]

const faqs = [
  { q: 'What LVR can I borrow to for commercial property?', a: 'Most lenders will lend up to 65-0% LVR for commercial property. Some specialist lenders may go higher with additional security or a strong borrower profile.' },
  { q: 'Do I need two years of financials?', a: 'Generally yes, but there are low-doc and alt-doc options for established businesses with strong cash flow. We assess the full picture, not just your tax returns.' },
  { q: 'Can a trust or company be the borrower?', a: 'Absolutely. Most commercial lending is structured through companies or trusts. We work with the entity structure that best suits your situation and tax position.' },
  { q: 'How long does commercial approval take?', a: 'Commercial deals typically take 2- weeks from submission to approval. Complex deals or development finance may take longer. We set realistic timelines upfront.' },
]

export default function CommercialLoanPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #060E1C 0%, #0A1628 50%, #0D2040 100%)',
        paddingTop: 'calc(72px + 5rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,79,216,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -120, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,111,255,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <Link href="/#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
            <span style={{ color: '#93B4FF', fontSize: '0.85rem' }}>Commercial Loan</span>
          </div>
          <div className="pill" style={{ marginBottom: '1.5rem' }}> Commercial Loan</div>
          <h1 className="display" style={{ color: 'white', maxWidth: 700, marginBottom: '1.5rem' }}>
            Business lending that<br /><span style={{ color: '#93B4FF' }}>moves at your pace</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.75, maxWidth: 560, marginBottom: '2.5rem' }}>
            From commercial property to equipment finance and working capital -we structure business lending that supports your growth, not just your balance sheet.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">Speak to a Specialist <ArrowRight size={16} /></Link>
            <Link href="#products" className="btn-outline-white">View Products</Link>
          </div>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {[['65-0%', 'LVR Commercial'], ['2- wks', 'Avg. Approval'], ['$50K+', 'Loan Size']].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em' }}>{n}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="products" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">Products</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Commercial lending solutions</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>Structured finance for every stage of your business journey.</p>
          </div>
          <div className="grid-3">
            {products.map(p => (
              <div key={p.title} className="card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Building2 size={22} color="var(--blue)" />
                </div>
                <h3 className="heading-3" style={{ marginBottom: '0.75rem', color: 'var(--navy)' }}>{p.title}</h3>
                <p className="body" style={{ fontSize: '0.9rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ background: 'var(--sky)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label">Industries We Serve</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">We know your industry</h2>
            <p className="body-lg" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
              Lender policy varies significantly by industry. Our experience across multiple sectors means faster, smarter applications.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
            {industries.map(ind => (
              <div key={ind} style={{
                background: 'white', border: '1px solid var(--border)',
                borderRadius: '99px', padding: '0.625rem 1.25rem',
                fontSize: '0.9rem', fontWeight: 500, color: 'var(--navy)'
              }}>{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label">How We Work</div>
            <div className="divider" style={{ margin: '1rem auto 1.5rem' }} />
            <h2 className="heading-1">Our commercial lending process</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 720, margin: '0 auto' }}>
            {process.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div className="step-num">{s.n}</div>
                  {i < process.length - 1 && <div style={{ width: 2, height: 48, background: 'var(--border)', marginTop: 4 }} />}
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

      {/* WHY */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label">Why Open Lending</div>
              <div className="divider" />
              <h2 className="heading-1" style={{ marginBottom: '1.25rem' }}>Commercial specialists, not generalists</h2>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                Commercial lending is complex. Policy, security, and serviceability requirements vary enormously by lender and deal type. We navigate this on your behalf.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                {[
                  'Access to bank and non-bank commercial lenders',
                  'Specialist lenders for complex structures',
                  'Low-doc and alt-doc options available',
                  'Company, trust, and SMSF borrowing structures',
                  'Experienced with development and construction deals',
                  'Ongoing review to ensure your facility remains competitive',
                ].map(b => (
                  <div key={b} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{b}</span>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="btn-primary">Speak to a Specialist <ArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Commercial Property', note: 'Purchase, refinance, development' },
                { label: 'Equipment Finance', note: 'Chattel mortgage, lease, hire purchase' },
                { label: 'Working Capital', note: 'Overdraft, invoice finance, trade finance' },
                { label: 'SMSF Lending', note: 'Limited recourse borrowing arrangements' },
              ].map(r => (
                <div key={r.label} style={{ background: 'white', borderRadius: '0.875rem', padding: '1.25rem 1.5rem', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem' }}>{r.label}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: 2 }}>{r.note}</div>
                  </div>
                  <ChevronRight size={18} color="var(--blue)" />
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
            <h2 className="heading-1">Commercial lending questions</h2>
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
          <h2 className="heading-1" style={{ color: 'white', marginBottom: '1rem' }}>Let's structure your business lending</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Speak with a commercial lending specialist and get a clear plan for your next business finance requirement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact" className="btn-primary">Book a Consultation <ArrowRight size={16} /></Link>
            <Link href="/services/home-loan" className="btn-outline-white">Explore Home Loans</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


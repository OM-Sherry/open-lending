'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronRight, ArrowRight, Plus, Minus } from 'lucide-react'

export default function BorrowingCalculatorPage() {
  const [income, setIncome] = useState(120000)
  const [partnerIncome, setPartnerIncome] = useState(0)
  const [includePartner, setIncludePartner] = useState(false)
  const [expenses, setExpenses] = useState(3000)
  const [existingDebt, setExistingDebt] = useState(0)
  const [creditCards, setCreditCards] = useState(0)
  const [dependants, setDependants] = useState(0)
  const [employmentType, setEmploymentType] = useState<
    'fulltime' | 'parttime' | 'casual' | 'selfemployed'
  >('fulltime')
  const [interestRate, setInterestRate] = useState(6.5)

  const results = useMemo(() => {
    // Total annual income
    const totalIncome = income + (includePartner ? partnerIncome : 0)

    /*
     * Borrowing Power Algorithm
     *
     * Conservative = 5 × Annual Income
     * Typical      = 6.5 × Annual Income
     * Optimistic   = 8 × Annual Income
     */
    const borrowingMin = totalIncome * 5
    const borrowingTypical = totalIncome * 6.5
    const borrowingMax = totalIncome * 8

    // Round to nearest $10,000
    const conservative = Math.round(borrowingMin / 10000) * 10000
    const borrowing = Math.round(borrowingTypical / 10000) * 10000
    const optimistic = Math.round(borrowingMax / 10000) * 10000

    // Monthly repayment based on Typical borrowing amount
    const loanTerm = 30 * 12
    const monthlyRate = interestRate / 100 / 12

    let monthly = 0

    if (monthlyRate > 0) {
      monthly =
        borrowing *
        (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
        (Math.pow(1 + monthlyRate, loanTerm) - 1)
    } else {
      monthly = borrowing / loanTerm
    }

    return {
      borrowing,
      conservative,
      optimistic,
      monthly,
      totalIncome,
    }
  }, [
    income,
    partnerIncome,
    includePartner,
    expenses,
    existingDebt,
    creditCards,
    dependants,
    employmentType,
    interestRate,
  ])

  const fmt = (n: number) =>
    n.toLocaleString('en-AU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })

  const fmtDec = (n: number) =>
    n.toLocaleString('en-AU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const sliderStyle = {
    width: '100%',
    accentColor: 'var(--blue)',
  }

  const labelStyle = {
    fontWeight: 600 as const,
    fontSize: '0.9rem',
    color: 'var(--navy)',
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background:
            'linear-gradient(135deg, var(--navy) 0%, #0D2347 60%, #1B3A6B 100%)',
          paddingTop: 'calc(72px + 4rem)',
          paddingBottom: '4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,111,255,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <Link
              href="/"
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.85rem',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>

            <ChevronRight
              size={14}
              color="rgba(255,255,255,0.3)"
            />

            <span
              style={{
                color: '#93B4FF',
                fontSize: '0.85rem',
              }}
            >
              Borrowing Power Calculator
            </span>
          </div>

          <div
            className="pill"
            style={{
              marginBottom: '1.25rem',
            }}
          >
             Calculator
          </div>

          <h1
            className="heading-1"
            style={{
              color: 'white',
              marginBottom: '0.75rem',
            }}
          >
            Borrowing Power Calculator
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.05rem',
              maxWidth: 520,
            }}
          >
            Estimate how much you may be able to borrow based on your annual
            income and overall financial position.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section
        className="section"
        style={{
          background: 'var(--gray)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Inputs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Income */}
              <div
                className="card"
                style={{
                  padding: '2rem',
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '1.5rem',
                    fontSize: '1rem',
                  }}
                >
                  Income
                </h3>

                {/* Your Income */}
                <div
                  style={{
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <label style={labelStyle}>
                      Your Annual Income
                    </label>

                    <span
                      style={{
                        fontWeight: 700,
                        color: 'var(--blue)',
                      }}
                    >
                      ${fmt(income)}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={30000}
                    max={500000}
                    step={5000}
                    value={income}
                    onChange={(e) =>
                      setIncome(Number(e.target.value))
                    }
                    style={sliderStyle}
                  />

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      color: 'var(--muted)',
                      marginTop: '0.4rem',
                    }}
                  >
                    <span>$30K</span>
                    <span>$500K</span>
                  </div>
                </div>

                {/* Employment Type */}
                <div
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <label style={labelStyle}>
                    Employment Type
                  </label>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginTop: '0.75rem',
                    }}
                  >
                    {[
                      ['fulltime', 'Full-time'],
                      ['parttime', 'Part-time'],
                      ['casual', 'Casual'],
                      ['selfemployed', 'Self-employed'],
                    ].map(([v, l]) => (
                      <button
                        key={v}
                        onClick={() =>
                          setEmploymentType(
                            v as typeof employmentType
                          )
                        }
                        style={{
                          padding: '0.5rem 0.875rem',
                          borderRadius: '0.5rem',
                          border: '2px solid',
                          borderColor:
                            employmentType === v
                              ? 'var(--blue)'
                              : 'var(--border)',
                          background:
                            employmentType === v
                              ? 'var(--sky)'
                              : 'white',
                          color:
                            employmentType === v
                              ? 'var(--blue)'
                              : 'var(--muted)',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                        }}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Partner */}
                <div
                  style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: includePartner ? '1rem' : 0,
                    }}
                  >
                    <label style={labelStyle}>
                      Include Partner's Income?
                    </label>

                    <button
                      onClick={() =>
                        setIncludePartner(!includePartner)
                      }
                      style={{
                        width: 44,
                        height: 24,
                        borderRadius: 99,
                        border: 'none',
                        cursor: 'pointer',
                        background: includePartner
                          ? 'var(--blue)'
                          : 'var(--border)',
                        position: 'relative',
                        transition: 'background 0.2s',
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: 'white',
                          position: 'absolute',
                          top: 3,
                          left: includePartner ? 23 : 3,
                          transition: 'left 0.2s',
                        }}
                      />
                    </button>
                  </div>

                  {includePartner && (
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <label
                          style={{
                            ...labelStyle,
                            fontWeight: 500,
                            color: 'var(--muted)',
                          }}
                        >
                          Partner Annual Income
                        </label>

                        <span
                          style={{
                            fontWeight: 700,
                            color: 'var(--blue)',
                          }}
                        >
                          ${fmt(partnerIncome)}
                        </span>
                      </div>

                      <input
                        type="range"
                        min={0}
                        max={500000}
                        step={5000}
                        value={partnerIncome}
                        onChange={(e) =>
                          setPartnerIncome(
                            Number(e.target.value)
                          )
                        }
                        style={sliderStyle}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Expenses & Commitments */}
              <div
                className="card"
                style={{
                  padding: '2rem',
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '1.5rem',
                    fontSize: '1rem',
                  }}
                >
                  Expenses & Commitments
                </h3>

                {/* Living Expenses */}
                <div
                  style={{
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <label style={labelStyle}>
                      Monthly Living Expenses
                    </label>

                    <span
                      style={{
                        fontWeight: 700,
                        color: 'var(--blue)',
                      }}
                    >
                      ${fmt(expenses)}/mo
                    </span>
                  </div>

                  <input
                    type="range"
                    min={1000}
                    max={15000}
                    step={100}
                    value={expenses}
                    onChange={(e) =>
                      setExpenses(Number(e.target.value))
                    }
                    style={sliderStyle}
                  />
                </div>

                {/* Existing Loan */}
                <div
                  style={{
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <label style={labelStyle}>
                      Existing Loan Repayments
                    </label>

                    <span
                      style={{
                        fontWeight: 700,
                        color: 'var(--blue)',
                      }}
                    >
                      ${fmt(existingDebt)}/mo
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={5000}
                    step={50}
                    value={existingDebt}
                    onChange={(e) =>
                      setExistingDebt(Number(e.target.value))
                    }
                    style={sliderStyle}
                  />
                </div>

                {/* Credit Cards */}
                <div
                  style={{
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <label style={labelStyle}>
                      Credit Card Limits
                    </label>

                    <span
                      style={{
                        fontWeight: 700,
                        color: 'var(--blue)',
                      }}
                    >
                      ${fmt(creditCards)}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={50000}
                    step={1000}
                    value={creditCards}
                    onChange={(e) =>
                      setCreditCards(Number(e.target.value))
                    }
                    style={sliderStyle}
                  />
                </div>

                {/* Dependants */}
                <div>
                  <label
                    style={{
                      ...labelStyle,
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Dependants
                  </label>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <button
                      onClick={() =>
                        setDependants(
                          Math.max(0, dependants - 1)
                        )
                      }
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border:
                          '2px solid var(--border)',
                        background: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Minus
                        size={16}
                        color="var(--navy)"
                      />
                    </button>

                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        color: 'var(--navy)',
                        minWidth: 20,
                        textAlign: 'center',
                      }}
                    >
                      {dependants}
                    </span>

                    <button
                      onClick={() =>
                        setDependants(
                          Math.min(6, dependants + 1)
                        )
                      }
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border:
                          '2px solid var(--blue)',
                        background: 'var(--sky)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Plus
                        size={16}
                        color="var(--blue)"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Interest Rate */}
              <div
                className="card"
                style={{
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <label style={labelStyle}>
                    Interest Rate
                  </label>

                  <span
                    style={{
                      fontWeight: 700,
                      color: 'var(--blue)',
                    }}
                  >
                    {interestRate.toFixed(2)}% p.a.
                  </span>
                </div>

                <input
                  type="range"
                  min={3}
                  max={12}
                  step={0.05}
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(
                      Number(e.target.value)
                    )
                  }
                  style={sliderStyle}
                />

                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    marginTop: '0.5rem',
                  }}
                >
                  Monthly repayment is estimated using the
                  selected interest rate.
                </p>
              </div>
            </div>

            {/* Results */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Main Borrowing Power */}
              <div
                style={{
                  background:
                    'linear-gradient(135deg, var(--navy) 0%, #1B3A6B 100%)',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Estimated Borrowing Power
                </div>

                <div
                  style={{
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '2.75rem',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  ${fmt(results.conservative)} – $
                  {fmt(results.optimistic)}
                </div>

                <div
                  style={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.8rem',
                    marginTop: '0.75rem',
                  }}
                >
                  based on 5–8× annual income
                </div>

                <div
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.75rem',
                    marginTop: '0.5rem',
                  }}
                >
                  Combined annual income: $
                  {fmt(results.totalIncome)}
                </div>
              </div>

              {/* Scenarios */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                {[
                  {
                    label: 'Conservative',
                    val: `$${fmt(results.conservative)}`,
                    note: '5× annual income',
                  },
                  {
                    label: 'Optimistic',
                    val: `$${fmt(results.optimistic)}`,
                    note: '8× annual income',
                  },
                ].map((r) => (
                  <div
                    key={r.label}
                    style={{
                      background: 'white',
                      border:
                        '1px solid var(--border)',
                      borderRadius: '0.875rem',
                      padding: '1.25rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        color: 'var(--muted)',
                        fontSize: '0.8rem',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {r.label}
                    </div>

                    <div
                      style={{
                        color: 'var(--navy)',
                        fontWeight: 800,
                        fontSize: '1.15rem',
                      }}
                    >
                      {r.val}
                    </div>

                    <div
                      style={{
                        color: 'var(--muted)',
                        fontSize: '0.72rem',
                        marginTop: '0.2rem',
                      }}
                    >
                      {r.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Typical Estimate */}
              <div
                className="card"
                style={{
                  padding: '1.75rem',
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '1.25rem',
                    fontSize: '0.95rem',
                  }}
                >
                  Typical Estimate
                </h3>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0',
                    borderBottom:
                      '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--muted)',
                    }}
                  >
                    Annual Income
                  </span>

                  <span
                    style={{
                      fontWeight: 600,
                      color: 'var(--navy)',
                      fontSize: '0.95rem',
                    }}
                  >
                    ${fmt(results.totalIncome)}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0',
                    borderBottom:
                      '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--muted)',
                    }}
                  >
                    Income Multiple
                  </span>

                  <span
                    style={{
                      fontWeight: 600,
                      color: 'var(--navy)',
                      fontSize: '0.95rem',
                    }}
                  >
                    6.5×
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0',
                    borderBottom:
                      '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--muted)',
                    }}
                  >
                    Estimated Loan
                  </span>

                  <span
                    style={{
                      fontWeight: 600,
                      color: 'var(--navy)',
                      fontSize: '0.95rem',
                    }}
                  >
                    ${fmt(results.borrowing)}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--muted)',
                    }}
                  >
                    Range
                  </span>

                  <span
                    style={{
                      fontWeight: 700,
                      color: 'var(--blue)',
                      fontSize: '0.95rem',
                    }}
                  >
                    5× – 8×
                  </span>
                </div>
              </div>

              {/* Monthly Repayment */}
              <div
                className="card"
                style={{
                  padding: '1.75rem',
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '1.25rem',
                    fontSize: '0.95rem',
                  }}
                >
                  Monthly Repayment Estimate
                </h3>

                {[
                  {
                    label: 'Estimated Loan',
                    val: `$${fmt(results.borrowing)}`,
                  },
                  {
                    label: 'Interest Rate',
                    val: `${interestRate.toFixed(2)}% p.a.`,
                  },
                  {
                    label: 'Loan Term',
                    val: '30 years',
                  },
                  {
                    label: 'Monthly Repayment',
                    val: `$${fmtDec(results.monthly)}`,
                    highlight: true,
                  },
                ].map((r) => (
                  <div
                    key={r.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0',
                      borderBottom:
                        '1px solid var(--border)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--muted)',
                      }}
                    >
                      {r.label}
                    </span>

                    <span
                      style={{
                        fontWeight: r.highlight
                          ? 800
                          : 600,
                        color: r.highlight
                          ? 'var(--blue)'
                          : 'var(--navy)',
                        fontSize: r.highlight
                          ? '1.05rem'
                          : '0.95rem',
                      }}
                    >
                      {r.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div
                style={{
                  background: '#FFF7ED',
                  border: '1px solid #FCD34D',
                  borderRadius: '0.875rem',
                  padding: '1rem 1.25rem',
                }}
              >
                <p
                  style={{
                    color: '#92400E',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  💡 These figures are estimates only. A
                  simple 5–8× income calculation is not a
                  lender assessment and actual borrowing
                  capacity depends on your income, expenses,
                  debts, dependants, credit profile and
                  lender policy. Book a call for an accurate
                  assessment.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/#contact"
                className="btn-primary"
                style={{
                  justifyContent: 'center',
                }}
              >
                Get an Accurate Assessment
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--muted)',
              marginTop: '2rem',
              lineHeight: 1.6,
              maxWidth: 760,
            }}
          >
            * This calculator provides a general estimate
            only and does not constitute financial advice.
            The estimated borrowing range is calculated using
            5–8 times combined annual income. Actual
            borrowing capacity is assessed differently by
            each lender and is subject to credit assessment,
            verification of income and lender policy.
          </p>
        </div>
      </section>

      {/* Other Calculators */}
      <section
        className="section-sm"
        style={{
          background: 'var(--white)',
        }}
      >
        <div className="container">
          <h3
            className="heading-3"
            style={{
              marginBottom: '1.5rem',
              color: 'var(--navy)',
            }}
          >
            Other Calculators
          </h3>

          <div className="grid-2">
            {[
              {
                title: 'Repayment Calculator',
                desc: 'Estimate your monthly, fortnightly, and weekly repayments.',
                href: '/resources/repayment-calculator',
              },
              {
                title: 'Stamp Duty Calculator',
                desc: 'Calculate stamp duty costs for your property purchase.',
                href: '/resources/stamp-duty-calculator',
              },
            ].map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="card"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {c.title}
                </h4>

                <p
                  className="body"
                  style={{
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                  }}
                >
                  {c.desc}
                </p>

                <span
                  style={{
                    color: 'var(--blue)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  Open Calculator
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
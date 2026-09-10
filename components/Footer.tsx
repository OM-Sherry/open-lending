'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer>
      <div className="container" style={{ padding: '4rem 2rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem' }}>
          <div>
            <div className="footer-brand">{t('brand')}</div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 280 }}>
              {t('tagline')}
            </p>
          </div>
          <div>
            <div className="footer-heading">{t('servicesHeading')}</div>
            {[
              [t('ourProcess'), '/#process'],
              [t('homeLoan'), '/services/home-loan'],
              [t('carLoan'), '/services/car-loan'],
              [t('commercialLoan'), '/services/commercial-loan'],
            ].map(([l, h]) => (
              <Link key={h} href={h} className="footer-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="footer-heading">{t('resourcesHeading')}</div>
            {[
              [t('repaymentCalc'), '/resources/repayment-calculator'],
              [t('stampDutyCalc'), '/resources/stamp-duty-calculator'],
              [t('borrowingCalc'), '/resources/loan-borrowing-calculator'],
            ].map(([l, h]) => (
              <Link key={h} href={h} className="footer-link">{l}</Link>
            ))}
          </div>
          <div>
            <div className="footer-heading">{t('moreHeading')}</div>
            {[
              [t('aboutUs'), '/about'],
              [t('contactUs'), '/contact'],
              [t('faq'), '/faq'],
            ].map(([l, h]) => (
              <Link key={h} href={h} className="footer-link">{l}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>{t('copyright')}</span>
          <span>{t('creditLicence')}</span>
        </div>
      </div>
    </footer>
  )
}
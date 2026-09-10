'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <div className="container nav-inner">
          <Link
            href="/"
            onClick={closeMenu}
            className="nav-brand"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="/opl.png"
              alt="Open Lending"
              className="nav-logo"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="nav-links">
            <Link href="/" className="nav-link">
              {t('home')}
            </Link>

            <Link href="/#services" className="nav-link">
              {t('services')}
            </Link>

            <Link href="/process" className="nav-link">
              {t('process')}
            </Link>

            <Link href="/#resources" className="nav-link">
              {t('resources')}
            </Link>

            <Link href="/about" className="nav-link">
              {t('about')}
            </Link>

            <Link href="/contact" className="nav-link">
              {t('contact')}
            </Link>

            <Link
              href="/contact"
              className="btn-primary"
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.875rem',
              }}
            >
              {t('bookCall')}
            </Link>

              <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={closeMenu}>
            {t('home')}
          </Link>

          <Link href="/#services" onClick={closeMenu}>
            {t('services')}
          </Link>

          <Link href="/process" onClick={closeMenu}>
            {t('process')}
          </Link>

          <Link href="/#resources" onClick={closeMenu}>
            {t('resources')}
          </Link>

          <Link href="/about" onClick={closeMenu}>
            {t('about')}
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            {t('contact')}
          </Link>

          <Link
            href="/contact"
            className="btn-primary mobile-book-button"
            onClick={closeMenu}
          >
            {t('bookCall')}
          </Link>

          <LanguageSwitcher />
        </div>
      )}
    </>
  )
}
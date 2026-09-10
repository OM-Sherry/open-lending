'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()

  const switchLocale = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- pathname 类型来自动态路由参数，运行时是安全的
      { pathname, params },
      { locale: nextLocale }
    )
  }

  return (
    <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
      <button
        onClick={() => switchLocale('en')}
        style={{
          padding: '0.35rem 0.6rem',
          borderRadius: '0.375rem',
          border: 'none',
          background: locale === 'en' ? 'var(--sky)' : 'transparent',
          color: locale === 'en' ? 'var(--blue)' : 'var(--muted)',
          fontWeight: 600,
          fontSize: '0.8rem',
          cursor: 'pointer',
        }}
      >
        EN
      </button>
      <span style={{ color: 'var(--border)' }}>|</span>
      <button
        onClick={() => switchLocale('zh')}
        style={{
          padding: '0.35rem 0.6rem',
          borderRadius: '0.375rem',
          border: 'none',
          background: locale === 'zh' ? 'var(--sky)' : 'transparent',
          color: locale === 'zh' ? 'var(--blue)' : 'var(--muted)',
          fontWeight: 600,
          fontSize: '0.8rem',
          cursor: 'pointer',
        }}
      >
        中文
      </button>
    </div>
  )
}
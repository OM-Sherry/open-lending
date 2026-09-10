import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Open Lending | Australia's Trusted Lending Partner",
    template: "%s | Open Lending",
  },
  description:
    "Open Lending provides tailored lending solutions across Australia, including home loans, refinancing, car loans, commercial loans, and investment lending support.",
  keywords: [
    "Open Lending",
    "mortgage broker Australia",
    "home loan",
    "car loan",
    "commercial loan",
    "refinancing",
    "investment loan",
    "lending solutions",
  ],
  openGraph: {
    title: "Open Lending | Australia's Trusted Lending Partner",
    description:
      "Tailored lending solutions for home loans, car loans, commercial loans, refinancing, and investment lending across Australia.",
    url: "https://openlending.com.au",
    siteName: "Open Lending",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Lending | Australia's Trusted Lending Partner",
    description:
      "Tailored lending solutions for home loans, car loans, commercial loans, refinancing, and investment lending across Australia.",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
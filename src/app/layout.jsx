import { RootLayout } from '@/components/RootLayout'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Milucid',
    default: 'Milucid - Development Studio Specializing in SaaS and E-commerce Solutions',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X41EH3P3QV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X41EH3P3QV');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}

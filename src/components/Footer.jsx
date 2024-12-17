import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <Container as="footer" className="py-12 w-full">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-8">
        <Link href="/" aria-label="Home">
          <Logo className="h-8" fillOnHover />
        </Link>
        <div className="flex items-center gap-x-2 text-sm text-neutral-700">
          <span>© Milucid {new Date().getFullYear()}</span>
          <span className="mx-2">|</span>
          <Link
            href="/privacy"
            className="hover:text-neutral-950"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </Container>
  )
}

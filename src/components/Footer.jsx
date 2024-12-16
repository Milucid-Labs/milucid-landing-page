import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <Container as="footer" className="py-12 w-full">
      <FadeIn>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-8">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Milucid {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

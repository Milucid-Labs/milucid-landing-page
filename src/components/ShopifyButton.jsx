'use client'

import Link from 'next/link'

export function ShopifyButton() {
  return (
    <Link
      href="/work/easypop"
      className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
    >
      Learn More About EasyPop
    </Link>
  )
}
'use client'

import Link from 'next/link'

export function ShopifyButton() {
  return (
    <Link
      href="#"
      className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800 group relative"
      onMouseOver={(e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap';
        tooltip.textContent = 'Coming Soon';
        e.currentTarget.appendChild(tooltip);
      }}
      onMouseLeave={(e) => {
        const tooltip = e.currentTarget.querySelector('div');
        if (tooltip) tooltip.remove();
      }}
    >
      View in Shopify App Store
    </Link>
  )
}
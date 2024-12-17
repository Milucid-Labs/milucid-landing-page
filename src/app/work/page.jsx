'use client'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'

export default function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Our Work"
        title="Crafting Digital Excellence"
      >
        <p>
          Explore our portfolio of custom SaaS solutions, Shopify apps, and e-commerce platforms that drive business growth.
        </p>
      </PageIntro>
      <Container className="mt-40">
        {/* Add your work content here */}
      </Container>
    </>
  )
}
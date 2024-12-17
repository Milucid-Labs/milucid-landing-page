import logo from '@/images/clients/easypop/logomark-dark.svg'
import imageHero from './hero.jpg'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { TagList, TagListItem } from '@/components/TagList'
import { StatList, StatListItem } from '@/components/StatList'

export const metadata = {
  title: 'Easypop Project',
  description: 'Boost Your Shopify Sales with Smart Popups',
}

export default function EasyPopCaseStudy() {
  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            eyebrow="EasyPop"
            title="Boost Your Shopify Sales with Smart Popups"
            centered
          >
            <p>
              Easypop is a powerful Shopify app that helps merchants increase conversions with intelligent, customizable popups and targeted promotions.
            </p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Name</dt>
                      <dd>Easypop</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Year</dt>
                      <dd>
                        <time dateTime="2025">2025</time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd>Shopify App Development</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-[#EBECFF]">
              <div className="-my-px mx-auto max-w-[76rem] bg-[#EBECFF]">
                <div className="relative">
                  <Image
                    src={imageHero}
                    alt=""
                    quality={90}
                    className="w-full"
                    sizes="(min-width: 1216px) 76rem, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div className="typography">
              <h2>Overview</h2>
              <p>
                In the competitive world of e-commerce, capturing customer attention and driving conversions is crucial. Easypop was born from the need for a more intelligent, user-friendly popup solution for Shopify merchants.
              </p>
              <p>
                Our team developed Easypop from the ground up, focusing on creating an intuitive interface that allows merchants to create beautiful, conversion-optimized popups without any coding knowledge. The app includes advanced features like exit-intent detection, scroll-based triggers, and smart targeting based on user behavior.
              </p>

              <h2>What we did</h2>
              <TagList className="list-none">
                <TagListItem>Shopify App Development</TagListItem>
                <TagListItem>React & Node.js</TagListItem>
                <TagListItem>UI/UX Design</TagListItem>
                <TagListItem>Analytics Integration</TagListItem>
              </TagList>

              <StatList>
                <StatListItem value="40%" label="Average conversion increase" />
                <StatListItem value="2.5M+" label="Popups displayed" />
                <StatListItem value="4.9" label="App store rating" />
                <StatListItem value="1000+" label="Active merchants" />
              </StatList>
            </div>
          </FadeIn>
        </Container>
      </article>
    </>
  )
}
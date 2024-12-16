import Image from 'next/image'
import Link from 'next/link'
import previewImage from './work/easypop/preview.png'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { ShopifyButton } from '@/components/ShopifyButton'
import { HeroSection } from '@/components/HeroSection'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We've worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="SaaS Development Experts"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We specialize in creating powerful, user-friendly software solutions with a particular expertise in Shopify apps and e-commerce platforms. Our team builds tools that help businesses thrive in the digital marketplace.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Custom Solutions">
              We develop tailored SaaS applications that address specific business needs and enhance operational efficiency.
            </ListItem>
            <ListItem title="Modern Technology">
              Built with cutting-edge frameworks and tools for optimal performance, scalability, and reliability.
            </ListItem>
            <ListItem title="User Experience">
              Focus on creating intuitive interfaces that users love, backed by robust functionality and seamless integrations.
            </ListItem>
            <ListItem title="Continuous Support">
              Dedicated support and regular updates to ensure your software stays current and effective in a rapidly evolving digital landscape.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function EasyPopSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-x-8">
        <div className="lg:w-1/2 lg:pr-12">
          <FadeIn>
            <div className="flex items-center gap-x-4">
              <span className="inline-flex items-center rounded-full bg-neutral-950 px-3 py-1 text-sm font-medium text-white">
                New
              </span>
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
                Meet EasyPop
              </h2>
            </div>
            <p className="mt-6 text-xl text-neutral-600">
              Create engaging pop-up notifications that boost sales and enhance customer engagement on your Shopify store. Our powerful yet simple solution helps you connect with your customers at the right moment.
            </p>
            <ul className="mt-6 space-y-3 text-lg text-neutral-600">
              <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-neutral-950"></span>
                Smart targeting based on user behavior and preferences
              </li>
              <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-neutral-950"></span>
                Real-time analytics and performance tracking
              </li>
              <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-neutral-950"></span>
                Customizable templates and design options
              </li>
              <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-neutral-950"></span>
                A/B testing capabilities for optimal results
              </li>
            </ul>
            <div className="mt-8">
              <ShopifyButton />
            </div>
          </FadeIn>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
          <FadeIn>
            <div className="aspect-[4/3] relative rounded-3xl bg-neutral-100 overflow-hidden">
              <Image
                src={previewImage}
                alt="EasyPop Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

export const metadata = {
  description:
    'Milucid is a development studio specializing in SaaS solutions, Shopify apps, and e-commerce platforms.',
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <CaseStudies />
      <EasyPopSection />
      <ContactSection />
    </>
  )
}

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by working closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">business objectives</strong> and
          challenges. Through in-depth consultation, we analyze your requirements and identify opportunities for innovation.
        </p>
        <p>
          Our experienced team conducts thorough technical assessments and market research to ensure we deliver solutions that are not only technically sound but also{' '}
          <strong className="font-semibold text-neutral-950">commercially viable</strong>. We believe in building foundations that support both immediate needs and future growth.
        </p>
        <p>
          The discovery phase culminates in a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">strategic roadmap</strong> that outlines clear objectives, technical specifications, and project milestones.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Requirements Analysis">
          In-depth consultation to understand your business needs and technical requirements.
        </ListItem>
        <ListItem title="Technical Assessment">
          Evaluation of existing systems and integration requirements.
        </ListItem>
        <ListItem title="Strategic Planning">
          Development of comprehensive project roadmap and technical specifications.
        </ListItem>
      </List>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our development phase follows modern best practices and agile methodologies, ensuring transparent progress and regular deliverables. We utilize cutting-edge technologies while maintaining focus on{' '}
          <strong className="font-semibold text-neutral-950">scalability and performance</strong>.
        </p>
        <p>
          Each project is assigned a dedicated team of specialists who bring expertise in their respective domains. We maintain clear communication channels and provide regular updates through scheduled check-ins and progress reports.
        </p>
        <p>
          Our iterative development approach allows for continuous feedback and refinement, ensuring the final product aligns perfectly with your vision and requirements.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Sarah Chen', role: 'Marketing Director' }}
        className="mt-12"
      >
        Milucid&apos;s development process was transparent and efficient, delivering exactly what we needed while keeping us informed every step of the way.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Before launch, we conduct thorough{' '}
          <strong className="font-semibold text-neutral-950">
            quality assurance
          </strong>{' '}
          testing to ensure every feature functions flawlessly.
        </p>
        <p>
          Our deployment process is carefully orchestrated to minimize disruption and ensure a smooth transition. We provide comprehensive{' '}
          <strong className="font-semibold text-neutral-950">documentation and training</strong>{' '}
          to enable your team to effectively utilize the new system.
        </p>
        <p>
          Post-launch, we offer dedicated{' '}
          <strong className="font-semibold text-neutral-950">
            support and maintenance
          </strong>{' '}
          services to ensure your solution continues to perform optimally and evolves with your business needs.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          Comprehensive testing across all features and use cases to ensure reliability and performance.
        </ListItem>
        <ListItem title="Deployment">
          Carefully managed launch process with minimal disruption to your operations.
        </ListItem>
        <ListItem title="Support">
          Ongoing technical support and maintenance to ensure continued optimal performance.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Excellence through innovation"
      >
        <p>
          We are committed to delivering exceptional solutions by combining technical expertise with innovative approaches, always staying at the forefront of technology while maintaining reliability and security.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Excellence">
            We maintain the highest standards in every aspect of our work, from code quality to client communication.
          </GridListItem>
          <GridListItem title="Efficiency">
            Our streamlined processes and modern tools enable us to deliver high-quality solutions on time and within budget.
          </GridListItem>
          <GridListItem title="Adaptability">
            We tailor our solutions to meet each client&apos;s unique needs while maintaining scalability for future growth.
          </GridListItem>
          <GridListItem title="Transparency">
            We maintain clear communication and provide regular updates throughout the development process.
          </GridListItem>
          <GridListItem title="Partnership">
            We build long-term relationships with our clients, serving as trusted technology partners in their success.
          </GridListItem>
          <GridListItem title="Innovation">
            We continuously explore and implement new technologies to provide cutting-edge solutions that drive business growth.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'Learn how we transform ideas into powerful digital solutions through our proven development process and technical expertise.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in delivering exceptional value through innovative, custom-built solutions that transform businesses. Our proven development process ensures high-quality results that exceed client expectations.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}

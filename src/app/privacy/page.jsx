import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata = {
  title: 'Privacy Policy - Milucid',
  description: 'Privacy policy and data protection information for Milucid development studio and our products.',
}

export default function PrivacyPolicy() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="space-y-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-base text-neutral-600">
              <h2 className="text-2xl font-semibold text-neutral-950">Introduction</h2>
              <p>
                Easypop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and protect customer data when you use our Shopify app.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-950 pt-8">Data Collection and Usage</h2>
              <p>
                We collect and process only the minimum amount of data necessary to provide our popup and notification services:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Store information (name, URL, Shopify domain)</li>
                <li>Basic customer interaction data (popup views, clicks)</li>
                <li>Configuration settings for your popups</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-950 pt-8">Protected Customer Data</h2>
              <p>
                When processing protected customer data through Shopify&apos;s APIs, we:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Only collect and process data that is essential for app functionality</li>
                <li>Encrypt all data both in transit and at rest</li>
                <li>Maintain strict data access controls</li>
                <li>Regularly review and update our security measures</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-950 pt-8">Data Storage and Security</h2>
              <p>
                We implement robust security measures to protect your data:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Industry-standard encryption for data transmission and storage</li>
                <li>Regular security audits and updates</li>
                <li>Strict access controls and authentication</li>
                <li>Separate environments for testing and production</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-950 pt-8">Data Retention</h2>
              <p>
                We retain your data only for as long as necessary to provide our services. Upon app uninstallation, we delete your data within 30 days, except where required by law to retain it longer.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-950 pt-8">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Access your personal data</li>
                <li>Request data correction or deletion</li>
                <li>Opt out of data collection</li>
                <li>Request data portability</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-950 pt-8">Updates to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We&apos;ll notify you of any material changes through our app or via email.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-950 pt-8">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                Email: support@milucid.com
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
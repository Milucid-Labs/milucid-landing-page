import { ContactSection } from '@/components/ContactSection'

export default function WorkLayout({ children }) {
  return (
    <>
      {children}
      <ContactSection />
    </>
  )
}
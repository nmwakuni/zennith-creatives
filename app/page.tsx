import { Hero } from '@/components/home/Hero'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { Services } from '@/components/home/Services'
import { Testimonials } from '@/components/home/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Services />
      <Testimonials />
    </>
  )
}

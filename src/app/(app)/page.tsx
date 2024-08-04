import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/options'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import Me from '@/components/Me'
import FeaturesListicle from '@/components/FeaturesListicle'
import TestimonialSingle from '@/components/TestimonialSingle'
import FAQ from '@/components/FAQ'

const Page = async () => {

  const session = await getServerSession(authOptions)
  if (session?.user) {
    redirect('/dashboard')
  }
  return (
    <div>
      <Hero />
      <Problem />
      <FeaturesListicle />
      <TestimonialSingle/>
      <Pricing />
      <Me />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Page
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/options'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Me from '@/components/Me'
import FeaturesListicle from '@/components/FeaturesListicle'
import TestimonialSingle from '@/components/TestimonialSingle'

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
      <Faq />
      <Footer />
    </div>
  )
}

export default Page
'use client'
import CheckoutButton from '@/components/CheckoutButton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {products} from '@/(more)/ConfigApp'
import Avatar from '@/components/Avatar'
import CTA from '@/components/CTA'
import Drawer from '@/components/Drawer'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Loader from '@/components/Loader'
import Me from '@/components/Me'
import Modal from '@/components/Modal'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Sidebar from '@/components/Sidebar'
import Terminal from '@/components/Terminal'
import TestimonialMultiple from '@/components/TestimonialMultiple'
import TestimonialOne from '@/components/TestimonialOne'
import TestimonialSingle from '@/components/TestimonialSingle'
import WaitListButton from '@/components/WaitListButton'
import WithAndWithout from '@/components/WithAndWithout'
const Page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session || !session.user ) 
      return router.replace('/sign-in');
  }, [session])
  
  return (
    <div>
      {/* <CheckoutButton mode='subscription' productId={products[0].productId1}/> */}
      <Avatar/>
      <CTA/>
      <Drawer/>
      <Faq/>
      <Features/>
      <Footer/>
      <Hero/>
      <Me/>
      <Modal/>
      <Pricing/>
      <Sidebar/>
      <Terminal/>
      <TestimonialMultiple/>
      <TestimonialOne/>
      <TestimonialSingle/>
      <WaitListButton/>
      <WithAndWithout/>
    </div>)
}

export default Page
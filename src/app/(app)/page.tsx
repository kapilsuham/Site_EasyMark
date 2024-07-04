import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/options'
import Hero from '@/components/Hero'

const Page = async() => {
  
  const session=await getServerSession(authOptions)
  if (session?.user ) {
    redirect('/dashboard')
  }
  return (
    <div className="hero p-6">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <Image width={82} height={82} className='m-auto w-auto h-auto mb-3' src="/logo.svg" alt="" />
      <h1 className="lg:text-5xl text-4xl font-bold">Hello Devloper</h1>
      <div className="text-xl">Hey it's Kapil <div> Thanks for your trust on ShipForever </div></div>
      <div>Now it's time to kick start your startup now & make your 1st $ online and launch your idea with the amazing features of ShipForever. Simply follow us with Docs</div>
    </div>
  </div>
</div>
  )
}

export default Page
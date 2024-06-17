'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Page = () => {
  
  const { data: session } = useSession()
  const user = session?.user
  const router = useRouter()
  if (user) {
    router.replace('/dashboard')
  }
  return (
    <div className="hero p-6">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <Image className='m-auto w-28 mb-3' src="logo.svg" alt="" />
      <h1 className="text-5xl font-bold">Hello Devloper</h1>
      <div className="text-xl">Hey it's Kapil <div> Thanks for your trust on ShipForever </div></div>
      <div>Now it's time to kick start your startup now & make your 1st $ online and launch your idea with the amazing features of ShipForever. Simply follow us with Docs</div>
    </div>
  </div>
</div>
  )
}

export default Page
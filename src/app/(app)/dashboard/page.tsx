'use client'
import CheckoutButton from '@/components/CheckoutButton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {products} from '@/(more)/ConfigApp'
const Page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session || !session.user ) 
      return router.replace('/sign-in');
  }, [session])
  
  return (
    <div>
      <CheckoutButton mode='subscription' productId={products[0].productId1}/>
    </div>)
}

export default Page
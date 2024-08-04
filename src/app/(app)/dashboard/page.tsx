'use client'
import Sidebar from '@/components/Sidebar'
import apiClient from '@/lib/api'
import { redirect } from 'next/navigation'
import useSWR from 'swr'

const Page = () => {
  const { data:userAccess, isLoading,error } = useSWR("/webhook", (url) => apiClient.get(url))
  if (error) {
    return (
      <div className="text-center m-auto text-xl">Something went wrong!</div>
    )
  }
  if (isLoading) {
    return (
      <div className="text-center items-center m-auto">
        <div className="m-auto min-h-screen loading loading-spinner bg-black loading-lg"></div>
      </div>
    )
  }
  if (!userAccess?.data.LifeTimeHasAccessGold && !userAccess?.data.LifeTimeHasAccessBasic) {
    redirect('/pending-payment')
  }
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <div className='bg-base-200 lg:absolute lg:w-5/6 right-0 p-5 text-base-content min-h-screen'>
          <div className='flex flex-col gap-8'>
            kp
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
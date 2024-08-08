'use client'

import Sidebar from '@/components/Sidebar'
import apiClient from '@/lib/api'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import useSWR from 'swr'

const Page = () => {
  const { data: userAccess, isLoading, error } = useSWR("/webhook", (url) => apiClient.get(url), {
    revalidateOnFocus: false
  })
  if (error) {
    return (
      <div className="text-center m-auto text-xl">Something went wrong!</div>
    )
  }
  if (isLoading) {
    return (
      <div className="m-auto">
        <div className="m-auto min-h-screen loading loading-spinner bg-black loading-lg"></div>
      </div>
    )
  }
  if (!userAccess?.data?.LifeTimeHasAccessGold && !userAccess?.data?.LifeTimeHasAccessBasic) {
    redirect('/pending-payment')
  }
  return (
    <div className='flex'>
      <Sidebar />
      <div className='bg-base-200 lg:absolute lg:w-5/6 right-0 p-5 text-base-content min-h-screen'>
        <div className='flex flex-col gap-8 m-10'>
          <div className='text-3xl font-bold text-primary underline'>Well it's simple</div>
          <div className='text-base-content flex flex-col gap-3'>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gray"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              Add Marks & Sites
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gray"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              Manage Data
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gray"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              Be Chill
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"inherit"} fill={"none"}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 5.73791C14 5.73791 12.8849 6.23808 12.1017 5.85651C11.1464 5.39118 10.1991 3.44619 12.0914 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.00897 9H8M16 9H15.991" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Forever
            </li>
          </div>
        </div>
        <div>
          <div className='divider'></div>
          <div className='text-base-content flex gap-3 items-center'>
            <div className="avatar">
              <div className="w-12  rounded-full">
                <Image width={62} height={62} alt='image' src="/me.png" />
              </div>
            </div>
            <div className='text-sm'>
              Hey👋 I'm Kapil, the creator of EasyMark. You can follow my work on <a className='underline' target='_blank' href="https://x.com/kapil__paliwal?t=0GbROshSxHMoRlUvHqyxgQ&s=08">Twitter</a>.
            </div>
          </div>
          <div className='max-w-80 my-3 overflow-hidden flex items-center gap-3'>
            <div>Review:</div>
            <a className='text-primary underline' target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=easymark.kapil@gmail.com&tf=cm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
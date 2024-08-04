'use client'
import apiClient from '@/lib/api'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'
import useSWR from 'swr'

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { data:userAccess,isLoading, error } = useSWR("/webhook", (url) => apiClient.get(url),{
    revalidateOnFocus:false
  })
  if (error) {
    return (
      <div className="text-center m-auto text-xl">Something went wrong!</div>
    )
  }
  if (isLoading) {
    return (
      <div className="text-center items-center m-auto">
        <div className="m-auto min-h-screen loading bg-black loading-spinner loading-lg"></div>
      </div>
    )
  }
  if (!userAccess?.data.LifeTimeHasAccessGold && !userAccess?.data.LifeTimeHasAccessBasic) {
    redirect('/pending-payment')
  }
  const resetAccount = async () => {
    // console.log(siteData);
    try {
      setIsSubmitting(true)
      const response = await axios.post("/api/reset-account")
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsSubmitting(false)
      signOut()
    }
  }
  const deleteAccount = async () => {
    // console.log(siteData);
    try {
      setIsSubmitting(true)
      const response = await axios.post("/api/delete-account")
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsSubmitting(false)
      signOut()
    }
  }
  return (
    <div className='bg-base-200 lg:absolute lg:w-5/6 lg:right-0 p-5 text-base-content min-h-screen'>
      <div>
        <div className="flex justify-between text-2xl">
          <div className="font-semibold text-2xl">
            Setting
          </div>
        </div>
        <div className='lg:w-1/3 w-full my-10 items-center'>
          <div className='flex flex-col gap-8'>
          <div className='flex items-center justify-between mr-3 '>
              <div>Permanently delete account:</div>
              <div>
              <div className='text-xl font-bold'>{userAccess?.data.LifeTimeHasAccessGold?(<div className='text-yellow-500'>Gold</div>):(<div className='text-gray-500'>Basic</div>)}</div>
              </div>
            </div>
            <div className='flex items-center gap-5 justify-between'>
              <div>Reset account:</div>
              <div>
                <div>
                  <button className="btn w-20 bg-red-600 text-white hover:bg-red-500 btn-active" onClick={() => (document.getElementById('reset_modal') as HTMLFormElement).showModal()}>
                  Reset
                  </button>
                  <dialog id="reset_modal" className="modal">
                    <div className="modal-box">
                      <div className="modal-action flex flex-col text-center justify-center">
                        <div>This will erase all your account data</div>
                        <div className='flex gap-3 my-3 justify-center'>
                        <button onClick={() => resetAccount()} disabled={isSubmitting} className="btn w-20 bg-red-600 text-white hover:bg-red-500 btn-active"> {isSubmitting ? (
                          <>
                            <span className="m-auto loading loading-spinner loading-md"></span>
                          </>
                        ) : ("Reset")}</button>
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn w-full">Close</button>
                        </form>
                          </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-5 justify-between'>
              <div>Permanently delete account:</div>
              <div>
              <div>
                  <button className="btn w-20 bg-red-600 text-white hover:bg-red-500 btn-active" onClick={() => (document.getElementById('delete_modal') as HTMLFormElement).showModal()}>
                    Delete
                  </button>
                  <dialog id="delete_modal" className="modal">
                    <div className="modal-box">
                      <div className="modal-action flex flex-col text-center justify-center">
                        <div>This will peranently erase your account</div>
                        <div className='flex gap-3 my-3 justify-center'>
                        <button onClick={() => deleteAccount()} disabled={isSubmitting} className="btn w-20 bg-red-600 text-white hover:bg-red-500 btn-active"> {isSubmitting ? (
                          <>
                            <span className="m-auto loading loading-spinner loading-md"></span>
                          </>
                        ) : ("Delete")}</button>
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn w-full">Close</button>
                        </form>
                          </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='divider'></div>
            <div className='max-w-80 my-3 overflow-hidden flex items-center gap-5'>
              <div>Contact:</div>
              easymark.kapil@gmail.com
              </div>
        <div className='text-base-content flex gap-3 items-center'>
        <div className="avatar">
                    <div className="w-12  rounded-full">
                        <Image width={62} height={62} alt='image' src="/me.png" />
                    </div>
                </div>
                        <div className='text-sm'>
                        Hey👋 I'm Kapil, the creator of EasyMark. You can follow my work on <a className='underline' href="https://x.com/kapil__paliwal?t=0GbROshSxHMoRlUvHqyxgQ&s=08">Twitter</a>.
                        </div>
        </div>
      </div>
    </div>
  )
}
export default Page
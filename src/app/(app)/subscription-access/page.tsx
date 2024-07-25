'use client'

import apiClient from "@/lib/api";
import useSWR from "swr";
const Page = () => {
  const { data, error, isLoading } = useSWR("/webhook", (url) => apiClient.get(url))
  if (error) {
    return (
      <div className="text-center m-auto text-xl">Something went wrong!</div>
    )
  }
  if (isLoading) {
    return (
      <span className="m-auto loading loading-spinner loading-lg"></span>
    )
  }
  if (data?.data.LifeTimeHasAccess || data?.data.subscriptionHasAccess) {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">It's your subscription based payment access page for your customers</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='flex justify-center text-base-content items-center text-center'>
      You have no access. Payment is not done yet
    </div>
  )
}

export default Page
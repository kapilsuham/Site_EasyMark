'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
export default function Error() {
  const router=useRouter()
  return (
    <div className="flex bg-primary-content min-h-screen items-center justify-center px-2 md:px-0">
      <div>
        <p className="text-sm font-semibold text-primary">Something Went Wrong</p>
        <h1 className="mt-3 text-2xl font-semibold text-secondary-content md:text-3xl">
          We can&apos;t load that page
        </h1>
        <p className="mt-4 text-secondary-content">
          Sorry, the for inconvenience. Try again.
        </p>
        <div className="mt-6 flex items-center space-x-3">
        <button onClick={()=>router.back()} className="btn btn-outline btn-primary">Go back</button>
          <button onClick={()=>router.replace('/')} className="btn btn-active"> Home Page</button>
        </div>
      </div>
    </div>
  )
}

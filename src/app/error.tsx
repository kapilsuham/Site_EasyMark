'use client'

import { useRouter } from 'next/navigation'

export default function Error() {
  const router=useRouter()
  return (
    <div className="flex bg-base-100 min-h-screen items-center justify-center px-2 md:px-0">
      <div>
        <p className="text-sm text-base-content font-semibold">Something Went Wrong</p>
        <h1 className="mt-3 text-2xl font-semibold text-base-content-content md:text-3xl">
          We can&apos;t load that page
        </h1>
        <p className="mt-4 text-base-content">
          Sorry, the for inconvenience. Try again.
        </p>
        <div className="mt-6 flex items-center space-x-3">
        <button onClick={()=>router.back()} className="btn btn-outline bg-green-500">Go back</button>
          <button onClick={()=>router.replace('/')} className="btn btn-active"> Home Page</button>
        </div>
      </div>
    </div>
  )
}

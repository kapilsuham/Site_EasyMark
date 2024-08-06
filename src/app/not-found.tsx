'use client'

import { useRouter } from 'next/navigation'
const NotFound=()=> {
  const router=useRouter()
  return (
    <div className="flex bg-base-100 min-h-screen items-center justify-center px-2 md:px-0">
      <div>
        <p className="text-sm font-semibold text-primary">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-base-content-content md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-base-content-content">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
        <button onClick={()=>router.back()} className="btn btn-outline bg-primary">Go back</button>
          <button onClick={()=>router.replace('/')} className="btn btn-active"> Home Page</button>
        </div>
      </div>
    </div>
  )
}
export default NotFound
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
const NotFound=()=> {
  const router=useRouter()
  return (
    <div className="flex bg-base-100 min-h-screen items-center justify-center px-2 md:px-0">
      <div>
        <p className="text-sm font-semibold text-primary">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-base-content md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-base-content">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
        <button onClick={()=>router.back()} className="btn btn-outline btn-primary">Go back</button>
          <Link href={'/'} className="btn btn-active"> Home Page</Link>
        </div>
      </div>
    </div>
  )
}
export default NotFound
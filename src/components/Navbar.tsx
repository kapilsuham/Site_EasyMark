'use client'

import { User } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ThemeController from './ThemeController'
import Image from 'next/image'
import { SITE_NAME } from '@/app/ConfigApp'

const Navbar = () => {
  const { data: session } = useSession()
  const user: User = session?.user as User
  const router = useRouter()
  return (
    <div className="navbar z-50 sticky top-0 bg-base-300">
      <div className="flex-1 ml-10">
        <div onClick={() => router.push('/')} className="btn btn-ghost w-auto h-auto text-base-content lg:text-xl">
          <Image quality={10} width={52} height={62} src="https://lemonsqueezy.imgix.net/design/112348/e14b4f14-f29c-4d19-83de-104808f7eda6.png?fit=clip&h=100&ixlib=php-3.3.1&w=100&s=3724ef4df78ce51df6f700522edee435" alt="img" />{SITE_NAME}</div>
      </div>
      <div >
        <div className='hidden lg:flex'> <ThemeController /></div>
        <div>
          {session ? (
            <div className="flex-none">
              <ul className="menu menu-horizontal lg:mr-10 px-1">
                <li>
                  <details>
                    <summary  className='my-1 w-full p-1'>
                      <div className='text-base-content lg:max-w-28 max-w-14 overflow-hidden'>{user.username || user.email}</div>
                    </summary>
                    <ul className="right-0 lg:p-3 bg-base-100 text-center rounded-t-none">
                      <li ><button className="my-1 w-full btn btn-active lg:hidden "><ThemeController /></button></li>
                      <li ><button className="my-1 w-full btn bg-base-300" onClick={() => signOut()}>Signout</button></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>) : (
              <div className='mt-1'><button className="btn btn-active lg:mr-20" onClick={() => router.push("/sign-in")}>LogIn</button></div>)}</div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar
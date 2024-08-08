'use client'

import { User } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ThemeController from './ThemeController'
import Image from 'next/image'
import { SITE_NAME } from '@/app/ConfigApp'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const user: User = session?.user as User
  return (
    <div className="navbar z-50 sticky top-0 h-20 bg-base-200">
      <div className="flex-1 ml-9">
        <Link href={'/'} className="btn btn-ghost w-auto h-auto text-base-content lg:text-xl">
          <Image quality={10} width={52} height={52} src="https://lemonsqueezy.imgix.net/design/112348/39893123-0e23-43f1-a2f1-2b54169a0d71.png?fit=clip&h=100&ixlib=php-3.3.1&w=100&s=c63c661e3259135daa6f11046e676ffd" alt="img" />{SITE_NAME}</Link>
      </div>
      <div >
        <div className='hidden lg:flex'> <ThemeController /></div>
        <div>
          {session ? (
            <div className="flex-none">
              <ul className="menu menu-horizontal lg:mr-10 px-1">
                <li>
                  <details>
                    <summary className='my-1 w-full p-2'>
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
            <div><Link className="btn bg-primary hover:bg-primary hover:opacity-90 text-primary-content lg:mr-10" href={"/sign-in"}>LogIn</Link></div>)}</div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar
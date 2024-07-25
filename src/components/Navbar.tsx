'use client'
import { User } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ThemeController from './ThemeController'
import ProfileDrawer from './ProfileDrawer'
import Image from 'next/image'
import { SITE_NAME } from '@/app/ConfigApp'

const Navbar = () => {
  const { data: session } = useSession()
  const user: User = session?.user as User
  const router = useRouter()
  return (
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a href='/' className="btn btn-ghost w-auto h-auto text-base-content lg:text-xl"><Image width={52} height={62} src="/logo.png" alt="img" />{SITE_NAME}</a>
        </div>
        <div >
          <div className='hidden lg:flex'> <ThemeController/></div>
          
          <div>
            {session ? (
              <div className="flex-none">
              <ul className="menu menu-horizontal lg:mr-10 px-1">
                <li>
                  <details>
                    <summary >
                      <div className='text-base-content lg:max-w-28 max-w-14 overflow-hidden'>{user.username || user.email}</div>
                      
                    </summary>
                    <ul className="right-0 lg:p-3 bg-base-100 text-center rounded-t-none">
                       <ProfileDrawer/>
                      <li ><button className="my-1 w-full btn btn-active lg:hidden "><ThemeController/></button></li>
                      <li ><button className="my-1 w-full btn bg-base-300" onClick={() => signOut()}>Signout</button></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>) : (<div className='mt-1'><button className="btn btn-active lg:mr-10" onClick={() => router.push("/sign-in")}>LogIn</button></div>)}</div>
        </div>
        <div>
        </div>
        </div>
  )
}

export default Navbar
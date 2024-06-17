import { User } from 'next-auth'
import { useSession } from 'next-auth/react'

const ProfileDrawer = () => {
  const { data: session } = useSession()
  const user: User = session?.user as User 
  return (

    <div className="drawer z-50 drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost w-full">Profile</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-4 w-72 lg:w-96 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className='p-5 text-center flex-col'>
            <div className="avatar ">
              <div className="w-24 rounded-full">
                {user.image?( <img src={user.image} alt='img' />):
                (  <img src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg' alt='img' />)
                }
              </div>
            </div>
            <div className='text-xl'>{user.username}</div>
            <div>{user.email}</div>
          </div>
          <div className='container border border-secondary p-5 rounded-lg'>
            <div className='text-xl text-center m-2'>Details</div>
            <div className='text-white'><span className='text-primary-content'>Onetime-Payment:</span> {user.oneTimeHasAccess?("Access"):("Not-Access")}</div>
            <div className='text-white'><span className='text-primary-content'>Subscription: </span>{user.subscriptionHasAccess?("Access"):("Not-Access")}</div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDrawer
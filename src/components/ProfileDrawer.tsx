'use client'

import apiClient from '@/lib/api'
import useSWR from 'swr'

const ProfileDrawer = () => {
  const { data, error } = useSWR("/webhook", (url) => apiClient.get(url))
  // console.log(data?.data);
  // console.log(error);

  return (
    <div className="drawer z-50 drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost bg-base-300 w-full text-base-content">Profile</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 lg:w-96 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className='p-5 text-center flex-col'>
            <div className='text-xl'>{data?.data?.username}</div>
            <div className='underline'>{data?.data?.email}</div>
          </div>
          <div className='container border border-base-content py-8 px-5 rounded-lg'>
            <div className='text-2xl text-center m-5'>Details</div>
            <div className='text-base-content my-2'><span className='font-bold'>Onetime-Payment:</span> {data?.data?.LifeTimeHasAccessGold ? ("Access") : ("Not-Access")}</div>
            <div className='text-base-content my-2'><span className='font-bold'>Subscription: </span>{data?.data?.LifeTimeHasAccessBasic ? ("Access") : ("Not-Access")}</div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default ProfileDrawer
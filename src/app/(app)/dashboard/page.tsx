import Sidebar from '@/components/Sidebar'
import Mark from '../mark/[mark]/page'

const Page = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <div className='bg-base-200 lg:absolute lg:w-5/6 right-0 p-5 text-base-content min-h-screen'>
          <div className='flex flex-col gap-8'>
            kp
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page
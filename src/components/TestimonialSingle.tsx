import Image from 'next/image'

const TestimonialSingle = () => {
  return (
    <div>
      <div className="text-base-content lg:hero p-4 mb-5 m-auto bg-base-200">
        <div className="hero-content lg:w-4/5 flex-col lg:flex-row">
          <Image width={196} height={196} alt="image" src="/me.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div >
            <p className="py-6">EasyMark made my life and made my bookmark management easily accessable. Buying the best EasyMark Gold plan is the best decission.Nice work team of EasyMark for every cool feature you provide. </p>
            <div className='text-base-content font-extrabold'>EasyMark Customer</div>
            <div>28.5k followers on <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="18" color="#white" fill="none">
              <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg></div>
          </div>
        </div>
      </div>
    </div>)
}

export default TestimonialSingle
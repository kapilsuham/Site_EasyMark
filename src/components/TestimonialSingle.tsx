import Image from 'next/image'
import React from 'react'

const TestimonialSingle = () => {
  return (
    <div>
      <div className="lg:hero p-4 my-10 m-auto bg-base-200">
        <div className="hero-content lg:w-4/5 flex-col lg:flex-row">
          <Image width={196} height={196} alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div >
            <p className="py-6">ShipForever made my life and made my startups earn in $ within 2 days. Buying the best ShipForever Gold plan is the best decission which i mad in my life.Thank you to team of ShipForever for every feature you provide & thank you for everything. </p>
            <div className='text-primary-content'>ShipForever Customer</div>
            <div>28.5k followers on <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="18" color="#white" fill="none">
              <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg></div>
          </div>
        </div>
      </div>
    </div>)
}

export default TestimonialSingle
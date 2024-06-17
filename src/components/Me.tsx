import Image from 'next/image'
import React from 'react'

const Me = () => {
    return (
        <div className='container m-auto mt-32 w-4/5 lg:w-1/2 text-secondary'>
            <div className='container justify-center lg:flex lg:gap-5'>
                <div className='lg:w-4/5'><Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="img" /></div>
                <div ><div className='text-primary-content'>Hey, It's Kapil</div>
                    <div>In 2021, I built a many startup for more than a years, and spend hours in writing repititive line of code again and again.
                        A few years after my practice,<div></div> I restarted the journey. </div>
                </div>
            </div>
            <div>
                I made startup but waste weeks or months on some repetative codes with tons of errors.
                I realized I was doing the same thing over and over: <div></div> set up DNS records, Payment webhooks, design pricing section... <div></div> So I built ShipForever to save time, avoid stress, grow startup and focus only on startup not on anything that cosumes time


            </div>
        </div>
    )
}

export default Me
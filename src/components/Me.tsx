import Image from 'next/image'
const Me = () => {
    return (
        <div className='container m-auto mt-32 w-4/5 lg:w-1/2 text-base-content'>
            <div className='container justify-center lg:flex lg:gap-5'>
                <div className='m-auto'><Image className='max-w-sm rounded-lg shadow-2xl' width={160} height={160} src="/me.jpg" alt="img" /></div>
                <div ><div className='text-xl'>Hey, It's Kapil</div>
                    <div>I am 19 year old & working as a solopreneur.</div>
                    <div>Back In 2021, I built many startup for more than a year, and spend hours in writing repititive line of code again and again.
                        A few years after my practice,<div></div> I restarted the journey by thinking about the basic problem of repititive code and found the idea of ShipForever. </div>
                </div>
            </div>
            <div>
                I made startup but waste weeks or months on some repetative codes with tons of errors.
                I realized I was doing the same thing over and over:
                <div>
                    - set up of waitlist, models, Payment webhooks, design pricing section...
                </div>
                <div>
                    So I built ShipForever to save time, avoid stress, grow startup and focus only on startup not on anything that cosumes time.
                </div>
            </div>
        </div>
    )
}

export default Me
import Image from 'next/image'
const Me = () => {
    return (
        <div className='container m-auto mt-20 w-4/5 lg:w-1/2 text-base-content'>
            <div className='container justify-center lg:flex lg:gap-5'>
                <div className='text-center m-auto'><Image className='max-w-sm rounded-lg mx-auto shadow-2xl' width={160} height={160} src="/me.png" alt="img" />
                </div>
                <div >
                <div className='text-2xl'>Hey, It's Kapil</div>
                    <div>I am 19 year old & working as a solopreneur.</div>
                    <div>Back In 2021, I built many startup for more than a year, and spend hours in writing repititive line of code again and again.
                        A few years after my practice,<div>
                             I made startup but waste time on manging bookmark and when i use my other device or other borwser for work then i am not able to access bookmarks.
                I realized I have the same thing problem with bookmark over and over:
                </div> 
                        </div>
                </div>
            </div>
            <div>
                <div>
                    So i decided to create EasyMark to save time, avoid stress, and focus only on startup not on anything that cosumes time.
                </div>
            </div>
        </div>
    )
}

export default Me
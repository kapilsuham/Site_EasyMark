'use client'
import { useRouter } from 'next/navigation'
import Avatar from './Avatar'
import Image from 'next/image'
const Hero = () => {
    const router = useRouter()
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                    <Image src="/img.png" alt='img' width={696} height={346} className="rounded-lg" />
                    </div>
                    <div>
                        <div>
                            <div className="text-5xl font-extrabold">Grow Your Startups, in
                                <div>
                                    <span className="bg-gray-300 text-black font-extrabold font-sans mt-5 px-1"> minutes</span>, save months</div></div>
                            <div className="text-gray-300 mt-10 w-11/12 text-base lg:mb-5">
                                The only NextJS boilerplate with all you need to build your SaaS, Ai tool or any other web app and make your first $ online within minutes.
                            </div>
                            <div className="flex w-1/2 flex-col">
                                <button onClick={() => router.push('/payment')} className="btn btn-primary">Get</button>
                                <div className='lg:flex'>
                                    <div>
                                        <Avatar />
                                    </div>
                                    <div className='lg:mt-10'>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked readOnly />
                                        </div>
                                        <div className='text-sm lg:text-base'>Developers review</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Hero
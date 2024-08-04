'use client'
import { useRouter } from 'next/navigation'
import Avatar from './Avatar'
import Image from 'next/image'
const Hero = () => {
    const router = useRouter()
    return (
        <div>
            <div className="hero my-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                    <Image src="/me.png" alt='img' width={506} height={300} className="rounded-lg" />
                    </div>
                    <div>
                        <div>
                            <div className="text-4xl text-base-content font-extrabold">Enhance Your Productivity,
                                <div>
                                    with EasyMark</div></div>
                            <div className="text-base-content mt-10 w-11/12 text-base lg:mb-5">
                                The best bookmark managing tool ever made. Now you can access your bookmark on any device, any browser, anywhere 
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
                                        <div className='text-sm lg:text-base text-base-content'>Developers review</div>
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
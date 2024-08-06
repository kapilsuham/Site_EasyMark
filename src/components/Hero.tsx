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
                        <div>
                            <div className="text-center text-4xl lg:text-6xl text-base-content font-extrabold">Enhance Your Productivity,
                                <div>
                                    with EasyMark
                                </div>
                            </div>
                            <div className="mx-auto w-4/5 text-base-content mt-10 lg:w-7/12 text-center text-base lg:mb-5">
                                The best bookmark managing tool ever made. Now you can access your bookmark on any device, any browser, anywhere
                            </div>
                            <div className="flex lg:w-1/2 flex-col my-5 justify-center text-center mx-auto">
                                <button onClick={() => router.push('/payment')} className="btn bg-primary hover:bg-primary hover:opacity-90  w-52 mx-auto text-primary-content">Get</button>
                                <div className='justify-center text-base-content mx-auto mt-3'>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="gray"
                                            className="w-[18px] h-[18px] inline shrink-0 opacity-80"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                        Pay once, use forever
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="gray"
                                            className="w-[18px] h-[18px] inline shrink-0 opacity-80"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                        Ultimate Bookmark tool
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="gray"
                                            className="w-[18px] h-[18px] inline shrink-0 opacity-80"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                        Trusted by people
                                    </li>
                                </div>
                                <div className='lg:flex text-center mx-auto justify-center'>
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
                                        <div className='text-sm lg:text-base text-base-content'>Review</div>
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
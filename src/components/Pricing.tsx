'use client'

import { plan } from '@/app/ConfigApp'
import { useRouter } from 'next/navigation'
import CheckoutButton from './CheckoutButton'
const Pricing = () => {
    // console.log(typeof(plan));
    const router = useRouter()
    return (
        <div id='pricing' className='pt-20 bg-secondary-content text-base-content'>
            <div>
                <div className='text-green-400 text-2xl lg:text-5xl font-extrabold text-center mb-5'>Pricing</div>
                <div className="mx-auto mb-12 max-w-2xl text-center lg:max-w-5xl">
                    <h1 className="text-3xl font-bold tracking-tight text-base-content sm:text-6xl lg:text-7xl">
                        Improve your productivity, with EasyMark
                    </h1>
                </div>
            </div>
            <div className='flex justify-center mx-3 flex-wrap gap-2'>
                {plan?.map(i =>
                    <div key={i?.id} className="card min-w-96 bg-base-100 mb-5 shadow-xl">
                        {i.popular ? (<div className='m-auto w-1/3 font-extrabold border-green-400 border-4 rounded-lg text-center'>Popular</div>) : (<div className='mt-8'></div>)}
                        <div className="card-body">
                            <span className="mb-2 block pt-6 text-4xl font-extrabold text-green-400">{i?.name}</span>
                            <span className="flex items-end text-base-content">
                                <span className="text-4xl text-base-content font-extrabold leading-none">{i.cuttedPrice ? (<span className='text-2xl line-through'>{"$" + i.cuttedPrice}</span>) : (null)} ${i.price ? (i.price) : (null)}<span className='text-base'> USD </span>
                                </span>
                            </span>
                            <div className="mt-7 border-t text-base-content border-gray-100 pt-5">
                                {i?.access?.map(i => (
                                    <ul key={i.id}>
                                        <li className="mb-2 flex items-center">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#000000" fill="#90EE90">
                                                    <path d="M21.8606 5.39176C22.2875 6.49635 21.6888 7.2526 20.5301 7.99754C19.5951 8.5986 18.4039 9.24975 17.1417 10.363C15.9044 11.4543 14.6968 12.7687 13.6237 14.0625C12.5549 15.351 11.6465 16.586 11.0046 17.5005C10.5898 18.0914 10.011 18.9729 10.011 18.9729C9.60281 19.6187 8.86895 20.0096 8.08206 19.9998C7.295 19.99 6.57208 19.5812 6.18156 18.9251C5.18328 17.248 4.41296 16.5857 4.05891 16.3478C3.11158 15.7112 2 15.6171 2 14.1335C2 12.9554 2.99489 12.0003 4.22216 12.0003C5.08862 12.0323 5.89398 12.373 6.60756 12.8526C7.06369 13.1591 7.54689 13.5645 8.04948 14.0981C8.63934 13.2936 9.35016 12.3653 10.147 11.4047C11.3042 10.0097 12.6701 8.51309 14.1349 7.22116C15.5748 5.95115 17.2396 4.76235 19.0042 4.13381C20.1549 3.72397 21.4337 4.28718 21.8606 5.39176Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className="ml-2 text-base ">{i.tag}</span>
                                        </li>
                                    </ul>))}
                                {i?.denied?.map(i => (
                                    <ul key={i.id}>
                                        <li className="mb-2 flex items-center">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#000000" fill="red">
                                                    <path d="M10.247 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7531 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1181 4.37524 16.3302 4.25283C17.3965 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7471 7.66981C19.6247 7.88183 19.4209 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6247 16.1179 19.7471 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3964 20.3626 16.3302 19.7469C16.1181 19.6246 15.9143 19.4208 15.5067 19.013L13.7533 17.2598L13.7533 17.2597C12.9271 16.4336 12.5135 16.02 12.0001 16.02C11.4866 16.02 11.073 16.4336 10.2468 17.2598L10.2468 17.2598L8.49349 19.013C8.08586 19.4208 7.88204 19.6246 7.67001 19.7469C6.60373 20.3626 5.7253 19.7516 4.98689 19.013C4.24836 18.2746 3.6374 17.3963 4.25303 16.3299C4.37545 16.1179 4.57926 15.9141 4.98689 15.5065L6.7404 13.7529C7.56678 12.9266 7.97996 12.5134 7.97996 11.9999C7.97996 11.4864 7.56656 11.073 6.74019 10.2466L4.98681 8.49321C4.57924 8.08563 4.37544 7.88183 4.25303 7.66981C3.63737 6.60345 4.24841 5.72518 4.98689 4.98669C5.72539 4.24821 6.60365 3.63716 7.67001 4.25283C7.88203 4.37524 8.0859 4.5791 8.49348 4.98668L8.49349 4.98669L10.247 6.7402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className="ml-2 text-base">{i.tag}</span>
                                        </li>
                                    </ul>))}

                            </div>

                            {i.mode ? (<div className="card-actions justify-center my-5">
                                <CheckoutButton mode={i.mode} productId={i.productId} />
                            </div>) : (null)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pricing
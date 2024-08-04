'use client'

import React, { useState } from 'react'
import AddMark from './AddMark'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import apiClient from '@/lib/api'
import axios from 'axios'
import EditMark from './EditMark'
import { toast } from 'sonner'
const Sidebar = () => {
    const [ham, setham] = useState(true)
    const router = useRouter()
    const { data: userAccess, error } = useSWR("/webhook", (url) => apiClient.get(url),{
        revalidateOnFocus:false
    })
    const { data, mutate } = useSWR("/get-mark", (url) => apiClient.get(url),{
        revalidateOnFocus:false,
    })
    const sorted = data?.data.sort((a: any, b: any) => a.rank - b.rank);
    const moveMark = async (siteData: object) => {
        // console.log(siteData);

        try {
            const response = await axios.post("/api/move-mark", siteData)
        } catch (error) {
            console.log(error);
        }
        finally {
            mutate()
        }
    }
    return (
        <div>
            <div className={`lg:hidden fixed z-50 block my-3 top-0 mx-2`}>
                <label className="btn btn-square bg-base-300 rounded-xl swap swap-rotate ">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={() => setham(!ham)} />

                    {/* hamburger icon */}
                    <svg className="swap-off fill-current transition-transform duration-700 ease" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* close icon */}
                    <svg className="swap-on fill-current transition-transform duration-700 ease" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>
            <div className={ham ? ("-ml-[1000px] lg:ml-0") : ("")}>
                <aside className="flex fixed lg:absolute z-40  w-full lg:w-1/6 flex-col main overflow-y-auto min-h-screen bg-base-200 border-neutral text-base-content px-2 py-5">
                    <div className='items-center justify-center gap-5 flex'>
                        {userAccess?.data.LifeTimeHasAccessGold || sorted?.length < 2 ? (<AddMark />) : (
                            <div onClick={() => toast('Plan limit reached')} className="btn btn-active w-20">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                        <path d="M12 16.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></div>
                        )}
                        <span onClick={() => router.push('/setting')}>
                            <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32} color={"inherit"} fill={"none"}>
                                <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </div>
                    <div className='divider'></div>
                    <div>
                    {sorted?.map((i: any) => (
                        <div key={i?._id} className='flex justify-around'>
                            <div onClick={() => router.push(`/mark/${i?.title}`)} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"inherit"} fill={"none"}>
                                    <path d="M9.5 14.5L14.5 9.49995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span className='w-16 overflow-hidden'>{i?.title}</span>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn p-0 btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"inherit"} fill={"none"}>
                                        <path d="M11.992 12H12.001" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9842 18H11.9932" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9998 6H12.0088" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-[1] w-32 lg:w-40 p-2 shadow">
                                    <li>
                                        <EditMark markData={i?._id} />
                                    </li>
                                    {i !== sorted[0] ? (
                                        <div>
                                            <div className="divider my-0"></div>
                                            <li onClick={() => moveMark({ markTitle: i?.title, id: i?._id, move: 'up', prev: sorted[sorted.findIndex((element: any) => element?._id?.toString() === i?._id) - 1]?.title })} className="btn flex w-full">
                                                <span>Up
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"inherit"} fill={"none"}>
                                                    <path d="M12 4L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </li>
                                        </div>
                                    ) : (null)}
                                    {i !== sorted[sorted.length - 1] ? (
                                        <div>
                                            <div className="divider my-0"></div>
                                            <li onClick={() => moveMark({ markTitle: i?.title, id: i?._id, move: 'down', next: sorted[sorted.findIndex((element: any) => element?._id?.toString() === i?._id) + 1]?.title })} className="btn flex w-full">
                                                <span>Down
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"inherit"} fill={"none"}>
                                                    <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17 15C17 15 13.3175 20 11.9999 20C10.6823 20 6.99997 15 6.99997 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </li>
                                        </div>
                                    ) : (null)}
                                </ul>
                            </div>
                        </div>))}
                        </div>
                </aside>
            </div>
        </div>
    )
}

export default Sidebar
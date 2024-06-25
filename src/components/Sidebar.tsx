'use client'
import Image from 'next/image'
import React, { useState } from 'react'
const Sidebar = () => {
    const [ham,setham]=useState(true)
    return (
        <div >
            <div  className={`lg:hidden fixed z-50 block m-2  ${ham?(""):("right-2 ")}`}>
                <label  className="btn btn-square rounded-xl swap swap-rotate ">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={()=>setham(!ham)}/>

                    {/* hamburger icon */}
                    <svg className="swap-off fill-current transition-transform duration-700 ease" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* close icon */}
                    <svg className="swap-on fill-current transition-transform duration-700 ease" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>
            <div className={`${ham?("-ml-96"):("")} lg:ml-0`}>
            <aside className="flex h-screen fixed w-full lg:w-1/6 flex-col main overflow-y-auto border-r bg-neutral border-neutral px-2 py-5">
                <div className='flex'>
                    <Image className='w-auto h-auto' width={62} height={62} src="/logo.svg" alt="/logo" />

                    <div className='mt-2 text-xl font-semibold'>ShipForever</div>
                </div>

                <div className="justify-center mt-5">
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="App" defaultChecked  readOnly />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <a className='ml-5' href="/">Get Started</a>
                            <div className='text-secondary mt-5'>Tutorials</div>
                            <ul>
                                <li className='ml-5 mt-2'><a href="/">Start in 2 minute</a></li>
                                <li className='ml-5 mt-2'><a href="/">Static Page</a></li>
                                <li className='ml-5 mt-2'><a href="/">Authentication</a></li>
                                <li className='ml-5 mt-2'><a href="/">API call</a></li>
                                <li className='ml-5 mt-2'><a href="/">Private page</a></li>
                            </ul>
                            <div className='text-secondary mt-5'>Features</div>
                            <ul>
                                <li className='ml-5 mt-2'><a href="/">Database</a></li>
                                <li className='ml-5 mt-2'><a href="/">Email</a></li>
                                <li className='ml-5 mt-2'><a href="/">SEO</a></li>
                                <li className='ml-5 mt-2'><a href="/">Payments</a></li>

                            </ul>
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Page" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <a className='ml-5' href="/">Get Started</a>
                            <div className='text-secondary mt-5'>Tutorials</div>
                            <ul>
                                <li className='ml-5 mt-2'><a href="/">Start in 2 minute</a></li>
                                <li className='ml-5 mt-2'><a href="/">Static Page</a></li>
                                <li className='ml-5 mt-2'><a href="/">Authentication</a></li>
                                <li className='ml-5 mt-2'><a href="/">API call</a></li>
                                <li className='ml-5 mt-2'><a href="/">Private page</a></li>
                            </ul>
                            <div className='text-secondary mt-5'>Features</div>
                            <ul>
                                <li className='ml-5 mt-2'><a href="/">Database</a></li>
                                <li className='ml-5 mt-2'><a href="/">Payments</a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </aside>
        </div>
        </div>
    )
}

export default Sidebar
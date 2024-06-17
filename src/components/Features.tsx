import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <div className='flex-wrap mt-20'>
            <div className='text-center w-2/3 lg:w-1/2 lg:text-5xl m-auto font-extrabold'>Instantly launch your app with ultimate features</div>
            <div role="tablist_2" className="lg:tabs mt-10 lg:p-10 tabs-boxed lg:tabs-lg justify-center tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Why" defaultChecked  readOnly />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>1st boilerplate code with bun</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Deadly Easy Documentation</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Resend email setup</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /> </div>
                            <div>Database included</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Next auth integrated</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Payment gateway integrated</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Seo & all tags to rank on google</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Fast,light,Styling & much more</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div className='text-success'>56 + hours Saved</div>
                        </div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Email" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Send transactional emails</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Send OTP verfication email</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>DNS setup to avoid spam folder</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Webhook to receive & forward emails</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>DKIM, DMARC, SPF in subdomain</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Send Magic Links</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Resend Email Setup with Docs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Time saved: 6 hrs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Stress: 0</div>
                        </div>

                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Database" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Mongoose schema</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image</div>" /></div>
                            <div>Created Models</div>
                        </div>

                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Save user in MongoDB Database</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Mongoose plugins</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Update user plan access</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Optimised Databse connection</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Make your life easier</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Time saved: 3 hrs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Stress: 0</div>
                        </div>
                    </div>
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Authentication" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Authentication setup</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Login with Google</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Magic Links</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Save user in MongoDB Database</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Private/protected pages & API calls</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>OTP verification</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Protected Payment</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Time saved: 5 hrs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Stress: 0</div>
                        </div>

                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="SEO" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>All meta tags to rank on Google</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>SEO-optimized UI components</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Structured data makeover</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Made with Bun</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Made light & fast</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Neccessary Tags</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Less Build Time & Bandwidth</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Time saved: 5 hrs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Stress: 0</div>
                        </div>

                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Payment" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Phonepe secure API routes</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Payment gateway setup</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>webhooks to update account</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Protected Payment</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Many way to Pay</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>One time/ subscriptions</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Created Payment Button</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Time saved: 5 hrs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Stress: 0</div>
                        </div>

                    </div>
                </div>
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Styling" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Components, animations & sections </div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Structured Components</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Made with tailwind, shadcn</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Well designed components</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Automatic dark mode</div>
                        </div>
                        <div>
                            <div className='flex lg:text-xl text-xs gap-2'>
                                <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                                <div>Responsive components</div>
                            </div>
                            <div className='px-8 lg:text-xl text-xs'>Like this component section</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Time saved: 5 hrs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Stress: 0</div>
                        </div>

                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="More" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className='text-lg'>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Easy & Crisp Document</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Copy paste code templates</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Structured Folder</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Deadly Simple Everything</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Simplest Docs</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Email waitlist section</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Customer support section</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Time saved: ∞ hrs...</div>
                        </div>
                        <div className='flex lg:text-xl text-xs gap-2 text-success'>
                            <div><Image width={32} height={32} src="/tick.svg" alt="image" /></div>
                            <div>Stress: 0</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
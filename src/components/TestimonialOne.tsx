import Image from 'next/image'


const TestimonialOne = () => {
    return (
        <div>
            <div className="justify-center py-10 text-center min-h-screen bg-base-200">
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked  readOnly />
                </div>
                <div className="flex-col p-4 lg:w-1/2 text-center  justify-center m-auto lg:flex-row-reverse">
                    <p className="py-6">ShipForever made my life and made my startups earn in $ within 2 days. Buying ShipForever Gold plan is the best decission which i mad in my life. </p>
                    <div>Thank you ShipForever for every feature you provide & thank you for everything.</div>
                    <div>
                        <div className="avatar mt-5 gap-3">
                            <div className="w-16 h-16 rounded-full">
                                <Image width={62} height={62} alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <div><div className='text-primary-content'>ShipForever Customer</div>
                                <div>28.5k followers on <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="18" color="#white" fill="none">
                                    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></div></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialOne
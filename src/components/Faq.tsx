'use client'

const Faq = () => {
    return (
        <div className='my-20 w-11/12 mt-32 lg:flex m-auto'>
        <div className='lg:w-1/2 text-3xl text-center font-extrabold text-base-content'>
        Frequently Asked Questions</div>
        <div className='lg:w-1/2'>
            <div className="collapse  collapse-plus bg-base-200">
                <input type="radio" name="my-Faq-3"  defaultChecked  readOnly />
                <div className="collapse-title text-xl font-medium text-base-content">
                What do I get exactly?
                </div>
                <div className="text-base-content collapse-content">
                    <p>Lifetime access to easymark features according to your plan</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-Faq-3" />
                <div className="collapse-title text-xl font-medium text-base-content">
                Can I get a refund?
                </div>
                <div className="text-base-content collapse-content">
                    <p>After you've got access to the our plan, EasyMark is yours forever, so it can't be refunded.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-Faq-3" />
                <div className="collapse-title text-xl font-medium text-base-content">
                Can customers edit their saved data?
                </div>
                <div className="text-base-content collapse-content">
                    <p>Yes. They can edit their saved data & also can use moving card features to manage their data.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Faq
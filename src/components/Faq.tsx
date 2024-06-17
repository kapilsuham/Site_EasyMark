import React from 'react'

const Faq = () => {
    return (
        <div className='w-11/12 mt-32 lg:flex m-auto'>
        <div className='lg:w-1/2 text-3xl text-center font-extrabold '>
        Frequently Asked Questions</div>
        <div className='lg:w-1/2'>
            <div className="collapse  collapse-plus bg-base-200">
                <input type="radio" name="my-Faq-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-Faq-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-Faq-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Faq
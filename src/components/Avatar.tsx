import React from 'react'

const Avatar = () => {
    return (
        <div className='mt-10 flex'>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className="w-12 bg-neutral text-neutral-content">
                        <span>+99</span>
                    </div>
                </div>
            </div>
        </div>)
}

export default Avatar
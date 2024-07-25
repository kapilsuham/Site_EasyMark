import Image from 'next/image'
const Avatar = () => {
    return (
        <div className='flex mt-10'>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                    <div className="w-12">
                        <Image width={62} height={62} alt='image' src="/me.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <Image width={62} height={62} alt='image' src="/me.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-12">
                        <Image width={62} height={62} alt='image' src="/me.png" />
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
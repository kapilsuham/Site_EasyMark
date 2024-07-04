
import {plan} from '@/app/ConfigApp'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import CheckoutButton from './CheckoutButton'
const Pricing = () => {
    // console.log(typeof(plan));
    const router = useRouter()
    return (
        <div id='pricing' className='pt-20 p-3 bg-secondary-content'>
            <div>
                <div className='text-yellow-400 text-2xl lg:text-5xl font-extrabold text-center mb-5'>Pricing</div>
                <div className="mx-auto mb-12 max-w-2xl text-center lg:max-w-5xl">
                    <h1 className="text-xl font-bold tracking-tight text-gray-200 sm:text-6xl lg:text-7xl">
                        Save hours of repetitive code, ship startup, grow fast
                    </h1>
                </div>
            </div>
            <div className='flex justify-center flex-wrap gap-2'>
                {plan?.map(i =>
                    <div key={i?.id} className="card w-96 bg-base-100 mb-5 shadow-xl">
                        {i.popular?(<div className='m-auto w-1/3 font-extrabold border-yellow-400 border-4 rounded-lg text-center'>Popular</div>):(<div className='mt-8'></div>)}
                        <div className="card-body">
                            <span className="mb-2 block pt-6 text-4xl font-extrabold text-yellow-400">{i?.name}</span>
                            <span className="flex items-end text-white">
                                <span className="text-4xl font-extrabold leading-none">{i.cuttedPrice?(<span className='text-2xl line-through'>{"$"+i.cuttedPrice}</span>):(null)} ${i.price?(i.price):(null)}<span className='text-base'> USD </span>
                                </span>
                              </span>       
                            <div className="mt-7 border-t text-white border-gray-100 pt-5">
                               {i?.access?.map(i=>(
                                <ul key={i.id}>
                                    <li className="mb-2 flex items-center">
                                        <span className='w-10'><Image width={32} height={32} src="/tick.svg" alt="image" /></span>
                                        <span className="ml-2 text-xl ">{i.tag}</span>
                                    </li>
                                </ul>))}
                                {i?.denied?.map(i=>(
                                <ul key={i.id}>
                                    <li className="mb-2 flex items-center">
                                        <span className='w-10'><Image width={32} height={32} src="/cancel.svg" alt="image" /></span>
                                        <span className="ml-2 text-xl ">{i.tag}</span>
                                    </li>
                                </ul>))}

                            </div>
                            
                            {i.mode?(<div className="card-actions justify-center mt-5">
                                <CheckoutButton mode={i.mode} productId={i.productId}/>
                            </div>):(null)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pricing